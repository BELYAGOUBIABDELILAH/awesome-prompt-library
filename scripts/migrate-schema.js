#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const legacyPath = path.join(root, 'data', 'prompts.json');
const sourcesPath = path.join(root, 'data', 'sources.json');
const duplicatesPath = path.join(root, 'reports', 'duplicates.json');
const decisionsPath = path.join(root, 'reports', 'merge-decisions.json');
const outputDir = path.join(root, 'data', 'prompts');
const outputPath = path.join(outputDir, 'index.jsonl');
const quarantinePath = path.join(root, 'reports', 'quarantined-prompts.json');

fs.mkdirSync(outputDir, { recursive: true });

const legacyRecords = JSON.parse(fs.readFileSync(legacyPath, 'utf8'));
const sourceRegistry = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
const duplicateReport = JSON.parse(fs.readFileSync(duplicatesPath, 'utf8'));
const decisionsReport = JSON.parse(fs.readFileSync(decisionsPath, 'utf8'));

const sourceByName = new Map(sourceRegistry.map(source => [source.display_name, source]));
const decisionByHash = new Map(decisionsReport.decisions.map(decision => [decision.content_hash, decision]));

function normalizeText(value) {
  return String(value == null ? '' : value)
    .replace(/\r\n?/g, '\n')
    .replace(/[\u00a0\t ]+/g, ' ')
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function contentHash(value) {
  return crypto.createHash('sha256').update(normalizeText(value).toLowerCase(), 'utf8').digest('hex');
}

function sourceIdFor(name) {
  const source = sourceByName.get(name);
  if (!source) throw new Error(`Source is missing from data/sources.json: ${name}`);
  return source.source_id;
}

function idForHash(hash) {
  return `opl_${hash.slice(0, 12)}`;
}

function slugify(value) {
  const normalized = String(value == null ? '' : value)
    .normalize('NFKD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
  return normalized.slice(0, 90).replace(/-+$/g, '') || 'untitled';
}

const groups = new Map();
const quarantined = [];

for (let index = 0; index < legacyRecords.length; index += 1) {
  const record = legacyRecords[index];
  const normalized = normalizeText(record.prompt);
  if (!normalized) {
    quarantined.push({
      legacy_index: index,
      slug: record.slug,
      title: record.act,
      category: record.category,
      reason: 'empty-prompt'
    });
    continue;
  }
  const hash = contentHash(record.prompt);
  if (!groups.has(hash)) groups.set(hash, []);
  groups.get(hash).push({ ...record, legacy_index: index, content_hash: hash });
}

const duplicateHashes = new Set(duplicateReport.groups.map(group => group.content_hash));
const outputRecords = [];
const seenIds = new Set();
const seenSlugs = new Set();

for (const [hash, group] of groups.entries()) {
  const decision = decisionByHash.get(hash);
  if (duplicateHashes.has(hash) && (!decision || decision.decision !== 'merge-canonical')) {
    quarantined.push(...group.map(record => ({
      legacy_index: record.legacy_index,
      slug: record.slug,
      title: record.act,
      category: record.category,
      content_hash: hash,
      reason: 'duplicate-metadata-conflict',
      note: 'Exact prompt content matches another record, but title, category, or source metadata differs. Human review is required before publication.'
    })));
    continue;
  }

  const canonicalSlug = decision?.canonical_slug || group[0].slug;
  const canonical = group.find(record => record.slug === canonicalSlug) || group[0];
  const id = idForHash(hash);
  if (seenIds.has(id)) throw new Error(`ID collision detected: ${id}`);
  seenIds.add(id);

  const baseSlug = slugify(canonical.slug || canonical.act);
  let slug = baseSlug;
  if (seenSlugs.has(slug)) slug = `${baseSlug}-${id.slice(4, 10)}`;
  while (seenSlugs.has(slug)) slug = `${baseSlug}-${id.slice(4, 12)}`;
  seenSlugs.add(slug);

  const sourceIds = [...new Set(group.map(record => sourceIdFor(record.source)))];
  const rawLegacySlugs = [...new Set(group.map(record => record.slug).filter(value => value !== canonical.slug))];
  const legacySlugs = [...new Set(rawLegacySlugs.map(slugify).filter(value => value !== slug))];
  const alternateTitles = [...new Set(group.map(record => record.act).filter(title => title !== canonical.act))];
  const sourceNeedsReview = sourceIds.some(sourceId => {
    const source = sourceRegistry.find(item => item.source_id === sourceId);
    return !source || source.redistribution_status !== 'verified';
  });

  outputRecords.push({
    id,
    slug,
    legacy_slug_original: canonical.slug,
    legacy_slugs: legacySlugs,
    legacy_slugs_raw: rawLegacySlugs,
    title: canonical.act,
    alternate_titles: alternateTitles,
    summary: null,
    prompt: canonical.prompt,
    category: canonical.category,
    category_folder: canonical.folder,
    tags: [],
    language: 'unknown',
    prompt_type: String(canonical.type || 'TEXT').toLowerCase(),
    variables: [],
    output_format: 'unknown',
    source_ids: sourceIds,
    provenance_status: sourceNeedsReview ? 'needs-review' : 'verified',
    status: 'draft',
    revision: 1,
    content_hash: hash,
    merged_from: legacySlugs,
    updated_at: new Date().toISOString().slice(0, 10)
  });
}

outputRecords.sort((a, b) => a.id.localeCompare(b.id));

fs.writeFileSync(outputPath, outputRecords.map(record => JSON.stringify(record)).join('\n') + '\n');
fs.writeFileSync(quarantinePath, JSON.stringify({
  count: quarantined.length,
  records: quarantined
}, null, 2) + '\n');

console.log(`Canonical records written: ${outputRecords.length}`);
console.log(`Legacy records read: ${legacyRecords.length}`);
console.log(`Merged legacy records: ${legacyRecords.length - outputRecords.length - quarantined.length}`);
console.log(`Quarantined records: ${quarantined.length}`);
console.log(`IDs generated: ${seenIds.size}`);
