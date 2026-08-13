#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'data', 'prompts', 'index.jsonl');
const readmePath = path.join(root, 'README.md');
const duplicatesPath = path.join(root, 'reports', 'duplicates.json');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

function readIndex() {
  return fs.readFileSync(indexPath, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => JSON.parse(line));
}

function categoryCounts(records) {
  const counts = new Map();
  for (const record of records) counts.set(record.category, (counts.get(record.category) || 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function generatedCategorySection(records) {
  const counts = categoryCounts(records);
  const lines = [
    '<!-- GENERATED:CATEGORIES:START -->',
    '## ◈ Categories',
    '',
    `> **${records.length.toLocaleString('en-US')} canonical records** across **${counts.length} categories** — counts are rebuilt from the v1 index.`,
    '',
    '| Category | Prompts | Browse |',
    '|---|---|---|',
    ...counts.map(([category, count]) => {
      const folder = records.find(record => record.category === category).category_folder;
      return `| ${category} | ${count} | [→ prompts/${folder}](prompts/${folder}) |`;
    }),
    '',
    '<!-- GENERATED:CATEGORIES:END -->'
  ];
  return lines.join('\n');
}

if (!fs.existsSync(indexPath)) fail('canonical index is missing');
const records = readIndex();
if (records.length === 0) fail('canonical index is empty');

const ids = new Set(records.map(record => record.id));
const slugs = new Set(records.map(record => record.slug));
const hashes = new Set(records.map(record => record.content_hash));
if (ids.size !== records.length) fail('canonical IDs are not unique');
if (slugs.size !== records.length) fail('canonical slugs are not unique');
if (hashes.size !== records.length) fail('published content hashes are not unique');

const counts = categoryCounts(records);
if (counts.reduce((total, [, count]) => total + count, 0) !== records.length) fail('category counts do not reconcile with total');
if (counts.length < 2 && records.length > 1) fail('category output is unexpectedly collapsed');

const readme = fs.readFileSync(readmePath, 'utf8');
const startMarker = '<!-- GENERATED:CATEGORIES:START -->';
const endMarker = '<!-- GENERATED:CATEGORIES:END -->';
const start = readme.indexOf(startMarker);
const end = readme.indexOf(endMarker);
if (start === -1 || end === -1 || end <= start) fail('README category markers are missing or malformed');
const actualSection = readme.slice(start, end + endMarker.length).trim();
const expectedSection = generatedCategorySection(records).trim();
if (actualSection !== expectedSection) fail('README generated category section is stale');
if ((readme.match(new RegExp(startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length !== 1) fail('README has more than one category start marker');
if ((readme.match(new RegExp(endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length !== 1) fail('README has more than one category end marker');

const duplicateReport = JSON.parse(fs.readFileSync(duplicatesPath, 'utf8'));
if (duplicateReport.duplicate_records_beyond_canonical <= 0) fail('duplicate report unexpectedly contains no legacy duplicates');

cp.execFileSync(process.execPath, [path.join(__dirname, 'validate-index.js')], { stdio: 'inherit' });
console.log(`Integrity tests passed for ${records.length} canonical prompts across ${counts.length} categories`);
