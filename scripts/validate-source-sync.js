#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const legacyPath = path.join(root, 'data', 'prompts.json');
const indexPath = path.join(root, 'data', 'prompts', 'index.jsonl');
const quarantinePath = path.join(root, 'reports', 'quarantined-prompts.json');

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

const legacy = JSON.parse(fs.readFileSync(legacyPath, 'utf8'));
const canonical = fs.readFileSync(indexPath, 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const quarantine = JSON.parse(fs.readFileSync(quarantinePath, 'utf8')).records || [];
const represented = new Set([
  ...canonical.map(record => record.content_hash),
  ...quarantine.filter(record => record.content_hash).map(record => record.content_hash)
]);
const missing = [];

legacy.forEach((record, index) => {
  const prompt = normalizeText(record.prompt);
  if (!prompt) return;
  const hash = hashText(record.prompt);
  if (!represented.has(hash)) missing.push({ index, slug: record.slug, content_hash: hash });
});

if (missing.length) {
  console.error(`Source sync failed: ${missing.length} legacy prompt(s) are not represented in the canonical index or quarantine`);
  for (const record of missing.slice(0, 20)) console.error(`- index=${record.index} slug=${record.slug} hash=${record.content_hash}`);
  process.exit(1);
}

console.log(`Source sync passed: ${legacy.length} legacy records represented by ${canonical.length} canonical records and ${quarantine.length} quarantined records`);
