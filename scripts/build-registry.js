#!/usr/bin/env node

// Dependency-free, deterministic build of the machine-readable prompt registry.
// data/prompts.json remains intact as the original imported corpus.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const inputPath = path.join(ROOT, 'data', 'prompts.json');
const registryPath = path.join(ROOT, 'data', 'registry.jsonl');
const sourcesPath = path.join(ROOT, 'data', 'sources.json');
const quarantinePath = path.join(ROOT, 'data', 'quarantine.jsonl');
const statsPath = path.join(ROOT, 'data', 'registry-stats.json');

const rawRecords = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (!Array.isArray(rawRecords)) throw new Error('data/prompts.json must contain an array');

const clean = (value) => String(value ?? '').replace(/\r\n/g, '\n').trim();
const sha256 = (value) => crypto.createHash('sha256').update(value, 'utf8').digest('hex');
const sourceId = (source) => `src_${sha256(source || 'unknown').slice(0, 12)}`;
const slugify = (value) => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'untitled-prompt';

function variables(prompt) {
  const found = new Map();
  const pattern = /\$\{([^}:]+)(?::([^}]*))?\}/g;
  let match;
  while ((match = pattern.exec(prompt))) {
    const name = clean(match[1]);
    if (name && !found.has(name)) found.set(name, match[2] === undefined ? null : match[2]);
  }
  return [...found.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, defaultValue]) => ({ name, default: defaultValue }));
}

const groups = new Map();
const quarantine = [];
for (const record of rawRecords) {
  const prompt = clean(record.prompt);
  if (!prompt) {
    quarantine.push({ reason: 'empty-prompt', title: clean(record.act) || 'Untitled prompt', category: clean(record.category) || 'Uncategorized', source: clean(record.source) || 'unknown', slug: clean(record.slug) || null, path: clean(record.path) || null });
    continue;
  }
  if (!groups.has(prompt)) groups.set(prompt, []);
  groups.get(prompt).push({ ...record, prompt });
}

const sourceMap = new Map();
for (const record of rawRecords) {
  const name = clean(record.source) || 'unknown';
  const id = sourceId(name);
  if (!sourceMap.has(id)) sourceMap.set(id, { id, name, status: name === 'unknown' ? 'unknown' : 'needs-review', record_count: 0, note: 'Preserved from the legacy export; review before claiming provenance.' });
  sourceMap.get(id).record_count += 1;
}

const usedSlugs = new Set();
const records = [];
for (const entries of groups.values()) {
  entries.sort((a, b) => clean(a.act).localeCompare(clean(b.act), undefined, { sensitivity: 'base' }) || clean(a.slug).localeCompare(clean(b.slug)) || clean(a.path).localeCompare(clean(b.path)));
  const canonical = entries[0];
  const contentHash = sha256(canonical.prompt);
  const baseSlug = slugify(canonical.slug || canonical.act);
  const slug = usedSlugs.has(baseSlug) ? `${baseSlug}-${contentHash.slice(0, 6)}` : baseSlug;
  usedSlugs.add(slug);
  const category = clean(canonical.category) || 'Uncategorized';
  const folder = clean(canonical.folder) || slugify(category);
  const sourceIds = [...new Set(entries.map((entry) => sourceId(clean(entry.source) || 'unknown')))].sort();
  const legacySlugs = [...new Set(entries.map((entry) => clean(entry.slug)).filter(Boolean))].sort();
  const legacyPaths = [...new Set(entries.map((entry) => clean(entry.path)).filter(Boolean))].sort();
  const legacyCategories = [...new Set(entries.map((entry) => clean(entry.category)).filter(Boolean))].sort();
  records.push({
    id: `opl_${contentHash.slice(0, 12)}`,
    slug,
    title: clean(canonical.act) || 'Untitled prompt',
    prompt: canonical.prompt,
    category,
    folder,
    source_ids: sourceIds,
    provenance_status: sourceIds.includes(sourceId('unknown')) ? 'unknown' : 'needs-review',
    lifecycle_status: 'draft',
    content_hash: contentHash,
    revision: 1,
    variables: variables(canonical.prompt),
    language: 'unknown',
    output_format: 'text',
    duplicate_count: entries.length,
    legacy_slugs: legacySlugs.length ? legacySlugs : [slug],
    legacy_paths: legacyPaths.length ? legacyPaths : [`prompts/${folder}/${slug}.md`],
    legacy_categories: legacyCategories.length ? legacyCategories : [category],
  });
}

records.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title) || a.id.localeCompare(b.id));
const writeJsonl = (filePath, values) => fs.writeFileSync(filePath, values.map((value) => JSON.stringify(value)).join('\n') + (values.length ? '\n' : ''), 'utf8');
writeJsonl(registryPath, records);
writeJsonl(quarantinePath, quarantine);

const sources = [...sourceMap.values()].sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(sourcesPath, `${JSON.stringify(sources, null, 2)}\n`, 'utf8');
const categories = {};
for (const record of records) categories[record.category] = (categories[record.category] || 0) + 1;
const stats = {
  schema_version: '1.0.0',
  source_records: rawRecords.length,
  canonical_records: records.length,
  quarantined_records: quarantine.length,
  exact_duplicate_groups: records.filter((record) => record.duplicate_count > 1).length,
  duplicates_beyond_canonical: records.reduce((sum, record) => sum + record.duplicate_count - 1, 0),
  sources: sources.length,
  categories,
};
fs.writeFileSync(statsPath, `${JSON.stringify(stats, null, 2)}\n`, 'utf8');
console.log(JSON.stringify(stats, null, 2));
