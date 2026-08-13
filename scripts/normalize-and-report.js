#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const inputPath = path.join(root, 'data', 'prompts.json');
const reportsDir = path.join(root, 'reports');

fs.mkdirSync(reportsDir, { recursive: true });

const records = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

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

function tokens(value) {
  return new Set(normalizeText(value).toLowerCase().match(/[a-z0-9\u00c0-\u024f]+/gi) || []);
}

function shingleSet(value, size = 3) {
  const list = normalizeText(value).toLowerCase().match(/[a-z0-9\u00c0-\u024f]+/gi) || [];
  const result = new Set();
  for (let i = 0; i <= list.length - size; i += 1) result.add(list.slice(i, i + size).join(' '));
  return result;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection || 1);
}

const groups = new Map();
const emptyPrompts = [];

records.forEach((record, index) => {
  const normalized = normalizeText(record.prompt);
  if (!normalized) {
    emptyPrompts.push({ index, slug: record.slug, title: record.act, category: record.category });
    return;
  }
  const contentHash = hashText(record.prompt);
  if (!groups.has(contentHash)) groups.set(contentHash, []);
  groups.get(contentHash).push({ index, ...record, content_hash: contentHash });
});

const duplicateGroups = [...groups.values()]
  .filter(group => group.length > 1)
  .map(group => ({
    content_hash: group[0].content_hash,
    count: group.length,
    metadata_variants: [...new Set(group.map(r => JSON.stringify({ title: r.act, category: r.category, source: r.source })))] .length,
    canonical_candidate: group[0].slug,
    records: group.map(r => ({
      index: r.index,
      slug: r.slug,
      title: r.act,
      category: r.category,
      source: r.source,
      legacy_path: r.path
    }))
  }))
  .sort((a, b) => b.count - a.count);

const uniqueRecords = [...groups.values()].map(group => group[0]);
const candidates = [];
const buckets = new Map();

for (const record of uniqueRecords) {
  const normalized = normalizeText(record.prompt).toLowerCase();
  const wordList = normalized.match(/[a-z0-9\u00c0-\u024f]+/gi) || [];
  const bucketKey = `${wordList.slice(0, 3).join(' ')}|${Math.round(normalized.length / 100)}`;
  if (!buckets.has(bucketKey)) buckets.set(bucketKey, []);
  buckets.get(bucketKey).push(record);
}

for (const bucket of buckets.values()) {
  for (let i = 0; i < bucket.length; i += 1) {
    const left = bucket[i];
    const leftText = normalizeText(left.prompt);
    const leftShingles = shingleSet(leftText);
    for (let j = i + 1; j < bucket.length; j += 1) {
      const right = bucket[j];
      const rightText = normalizeText(right.prompt);
      const lengthRatio = Math.min(leftText.length, rightText.length) / Math.max(leftText.length, rightText.length || 1);
      if (lengthRatio < 0.75) continue;
      const similarity = jaccard(leftShingles, shingleSet(rightText));
      if (similarity >= 0.9) {
        candidates.push({
          similarity: Number(similarity.toFixed(4)),
          left: { slug: left.slug, title: left.act, category: left.category },
          right: { slug: right.slug, title: right.act, category: right.category }
        });
      }
    }
  }
}

const sourceCounts = {};
for (const record of records) sourceCounts[record.source] = (sourceCounts[record.source] || 0) + 1;

const sourceInventory = Object.entries(sourceCounts)
  .sort((a, b) => b[1] - a[1])
  .map(([display_name, count]) => ({ display_name, count }));

fs.writeFileSync(path.join(reportsDir, 'duplicates.json'), JSON.stringify({
  normalization: 'line endings, whitespace, and case-insensitive comparison',
  total_records: records.length,
  duplicate_group_count: duplicateGroups.length,
  duplicate_records_beyond_canonical: duplicateGroups.reduce((sum, group) => sum + group.count - 1, 0),
  groups: duplicateGroups
}, null, 2) + '\n');

fs.writeFileSync(path.join(reportsDir, 'near-duplicates.json'), JSON.stringify({
  method: '3-token shingle Jaccard similarity with a 0.9 threshold; candidates require similar length and prefix bucket',
  candidate_count: candidates.length,
  candidates: candidates.sort((a, b) => b.similarity - a.similarity)
}, null, 2) + '\n');

fs.writeFileSync(path.join(reportsDir, 'empty-prompts.json'), JSON.stringify({
  count: emptyPrompts.length,
  records: emptyPrompts
}, null, 2) + '\n');

fs.writeFileSync(path.join(reportsDir, 'source-inventory.json'), JSON.stringify({
  total_records: records.length,
  unique_source_count: sourceInventory.length,
  sources: sourceInventory
}, null, 2) + '\n');

console.log(`Records: ${records.length}`);
console.log(`Exact duplicate groups: ${duplicateGroups.length}`);
console.log(`Exact duplicate records beyond canonical: ${duplicateGroups.reduce((sum, group) => sum + group.count - 1, 0)}`);
console.log(`Near-duplicate candidates: ${candidates.length}`);
console.log(`Empty prompts: ${emptyPrompts.length}`);
console.log(`Unique sources: ${sourceInventory.length}`);
