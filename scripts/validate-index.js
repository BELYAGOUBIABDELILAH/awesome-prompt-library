#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'data', 'prompts', 'index.jsonl');
const sourcesPath = path.join(root, 'data', 'sources.json');

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

function hashText(value) {
  return crypto.createHash('sha256').update(normalizeText(value).toLowerCase(), 'utf8').digest('hex');
}

function fail(errors, message) {
  errors.push(message);
}

if (!fs.existsSync(indexPath)) {
  console.error(`Missing ${path.relative(root, indexPath)}`);
  process.exit(1);
}
if (!fs.existsSync(sourcesPath)) {
  console.error(`Missing ${path.relative(root, sourcesPath)}`);
  process.exit(1);
}

const records = fs.readFileSync(indexPath, 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean)
  .map((line, index) => {
    try {
      return { value: JSON.parse(line), line: index + 1 };
    } catch (error) {
      return { parseError: error.message, line: index + 1 };
    }
  });

const sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
const sourceIds = new Set();
const redistributionStatuses = new Set(['needs-review', 'verified', 'restricted', 'unknown']);
const errors = [];
for (const source of sources) {
  if (typeof source.source_id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source.source_id)) fail(errors, `invalid source_id ${source.source_id}`);
  if (sourceIds.has(source.source_id)) fail(errors, `duplicate source_id ${source.source_id}`);
  sourceIds.add(source.source_id);
  if (typeof source.display_name !== 'string' || !source.display_name.trim()) fail(errors, `source ${source.source_id} has no display_name`);
  if (!(source.url === null || (typeof source.url === 'string' && /^https?:\/\//.test(source.url)))) fail(errors, `source ${source.source_id} has invalid url`);
  if (typeof source.license !== 'string' || !source.license.trim()) fail(errors, `source ${source.source_id} has no license state`);
  if (!redistributionStatuses.has(source.redistribution_status)) fail(errors, `source ${source.source_id} has invalid redistribution_status`);
  if (typeof source.notes !== 'string' || !source.notes.trim()) fail(errors, `source ${source.source_id} has no notes`);
}
const ids = new Set();
const slugs = new Set();
const contentHashes = new Set();
const statuses = new Set(['draft', 'reviewed', 'tested', 'verified', 'deprecated']);
const provenanceStatuses = new Set(['needs-review', 'verified', 'restricted', 'unknown']);
const promptTypes = new Set(['text', 'chat', 'image', 'multimodal', 'unknown']);
const outputFormats = new Set(['text', 'json', 'markdown', 'list', 'unknown']);

const required = [
  'id', 'slug', 'legacy_slug_original', 'legacy_slugs', 'legacy_slugs_raw', 'title', 'alternate_titles', 'summary', 'prompt',
  'category', 'category_folder', 'tags', 'language', 'prompt_type', 'variables',
  'output_format', 'source_ids', 'provenance_status', 'status', 'revision',
  'content_hash', 'merged_from', 'updated_at'
];

for (const item of records) {
  if (item.parseError) {
    fail(errors, `line ${item.line}: invalid JSON (${item.parseError})`);
    continue;
  }
  const record = item.value;
  for (const field of required) if (!(field in record)) fail(errors, `line ${item.line}: missing required field ${field}`);

  if (typeof record.id !== 'string' || !/^opl_[a-f0-9]{12}$/.test(record.id)) fail(errors, `line ${item.line}: invalid id ${record.id}`);
  if (ids.has(record.id)) fail(errors, `line ${item.line}: duplicate id ${record.id}`);
  ids.add(record.id);

  if (typeof record.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.slug)) fail(errors, `line ${item.line}: invalid slug ${record.slug}`);
  if (slugs.has(record.slug)) fail(errors, `line ${item.line}: duplicate slug ${record.slug}`);
  slugs.add(record.slug);

  if (typeof record.prompt !== 'string' || normalizeText(record.prompt).length < 10) fail(errors, `line ${item.line}: prompt is empty or too short`);
  const expectedHash = hashText(record.prompt);
  if (record.content_hash !== expectedHash) fail(errors, `line ${item.line}: content_hash does not match prompt`);
  if (contentHashes.has(record.content_hash)) fail(errors, `line ${item.line}: duplicate published content_hash ${record.content_hash}`);
  contentHashes.add(record.content_hash);

  if (!Array.isArray(record.source_ids) || record.source_ids.length < 1) fail(errors, `line ${item.line}: source_ids must contain at least one source`);
  for (const sourceId of record.source_ids || []) if (!sourceIds.has(sourceId)) fail(errors, `line ${item.line}: unknown source_id ${sourceId}`);

  if (!statuses.has(record.status)) fail(errors, `line ${item.line}: invalid status ${record.status}`);
  if (!provenanceStatuses.has(record.provenance_status)) fail(errors, `line ${item.line}: invalid provenance_status ${record.provenance_status}`);
  if (!promptTypes.has(record.prompt_type)) fail(errors, `line ${item.line}: invalid prompt_type ${record.prompt_type}`);
  if (!outputFormats.has(record.output_format)) fail(errors, `line ${item.line}: invalid output_format ${record.output_format}`);
  if (record.provenance_status !== 'verified' && record.status !== 'draft') fail(errors, `line ${item.line}: unverified provenance must remain draft`);
  if (!Number.isInteger(record.revision) || record.revision < 1) fail(errors, `line ${item.line}: invalid revision`);
  if (typeof record.updated_at !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(record.updated_at)) fail(errors, `line ${item.line}: invalid updated_at`);
  if (typeof record.legacy_slug_original !== 'string' || !record.legacy_slug_original) fail(errors, `line ${item.line}: legacy_slug_original is required`);
  if (!Array.isArray(record.legacy_slugs) || !Array.isArray(record.legacy_slugs_raw) || !Array.isArray(record.merged_from)) fail(errors, `line ${item.line}: legacy slug fields must be arrays`);
  if (JSON.stringify(record.legacy_slugs) !== JSON.stringify(record.merged_from)) fail(errors, `line ${item.line}: merged_from must mirror legacy_slugs`);
  if (record.legacy_slugs.length > record.legacy_slugs_raw.length) fail(errors, `line ${item.line}: normalized legacy slugs cannot exceed raw legacy slugs`);
}

if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s)`);
  for (const error of errors.slice(0, 50)) console.error(`- ${error}`);
  if (errors.length > 50) console.error(`- ... ${errors.length - 50} more`);
  process.exit(1);
}

console.log(`Validated ${records.length} canonical prompt records`);
console.log(`Unique IDs: ${ids.size}`);
console.log(`Unique slugs: ${slugs.size}`);
console.log(`Unique content hashes: ${contentHashes.size}`);
console.log(`Registered sources: ${sourceIds.size}`);
console.log('Validation passed');
