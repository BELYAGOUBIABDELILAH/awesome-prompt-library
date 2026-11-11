#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const readJsonl = (filePath) => fs.readFileSync(filePath, 'utf8').split('\n').filter(Boolean).map((line, index) => {
  try { return JSON.parse(line); } catch (error) { throw new Error(`${filePath}:${index + 1} is not valid JSON: ${error.message}`); }
});
const hash = (value) => crypto.createHash('sha256').update(value, 'utf8').digest('hex');

const records = readJsonl(path.join(ROOT, 'data', 'registry.jsonl'));
const quarantine = readJsonl(path.join(ROOT, 'data', 'quarantine.jsonl'));
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'sources.json'), 'utf8'));
const stats = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'registry-stats.json'), 'utf8'));
const errors = [];
const ids = new Set();
const slugs = new Set();
const sourceIds = new Set(sources.map((source) => source.id));
const categories = {};

for (const record of records) {
  for (const field of ['id', 'slug', 'title', 'prompt', 'category', 'folder', 'content_hash', 'revision']) {
    if (!record[field] && record[field] !== 0) errors.push(`${record.id || '(unknown)'} missing ${field}`);
  }
  if (!/^opl_[a-f0-9]{12}$/.test(record.id)) errors.push(`${record.id || '(unknown)'} has an invalid id`);
  if (ids.has(record.id)) errors.push(`duplicate id ${record.id}`);
  ids.add(record.id);
  if (slugs.has(record.slug)) errors.push(`duplicate slug ${record.slug}`);
  slugs.add(record.slug);
  if (record.content_hash !== hash(record.prompt)) errors.push(`${record.id} content_hash does not match prompt`);
  if (record.id !== `opl_${record.content_hash.slice(0, 12)}`) errors.push(`${record.id} is not derived from content_hash`);
  if (!Array.isArray(record.source_ids) || record.source_ids.length === 0) errors.push(`${record.id} has no source_ids`);
  for (const sourceId of record.source_ids || []) if (!sourceIds.has(sourceId)) errors.push(`${record.id} references missing source ${sourceId}`);
  if (!Number.isInteger(record.duplicate_count) || record.duplicate_count < 1) errors.push(`${record.id} has invalid duplicate_count`);
  categories[record.category] = (categories[record.category] || 0) + 1;
}

const comparable = {
  source_records: stats.source_records,
  canonical_records: records.length,
  quarantined_records: quarantine.length,
  exact_duplicate_groups: records.filter((record) => record.duplicate_count > 1).length,
  duplicates_beyond_canonical: records.reduce((sum, record) => sum + record.duplicate_count - 1, 0),
  sources: sources.length,
  categories,
};
for (const [key, value] of Object.entries(comparable)) {
  if (JSON.stringify(value) !== JSON.stringify(stats[key])) errors.push(`stats mismatch for ${key}`);
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}
console.log(`Registry valid: ${records.length} canonical records, ${quarantine.length} quarantined records, ${sources.length} sources.`);
