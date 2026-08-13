#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const duplicatePath = path.join(root, 'reports', 'duplicates.json');
const outputPath = path.join(root, 'reports', 'merge-decisions.json');

const report = JSON.parse(fs.readFileSync(duplicatePath, 'utf8'));
const decisions = report.groups.map(group => {
  const safeToMerge = group.metadata_variants === 1;
  return {
    content_hash: group.content_hash,
    decision: safeToMerge ? 'merge-canonical' : 'review-required',
    canonical_slug: group.canonical_candidate,
    merged_from: group.records.slice(1).map(record => record.slug),
    rationale: safeToMerge
      ? 'Exact normalized prompt match with identical title, category, and source metadata.'
      : 'Exact normalized prompt match but metadata differs; retain records until a maintainer resolves attribution or context.'
  };
});

fs.writeFileSync(outputPath, JSON.stringify({
  policy: 'Only exact duplicate groups with identical title, category, and source metadata are approved for canonical merge. Conflicting metadata remains review-required.',
  decisions
}, null, 2) + '\n');

console.log(`Wrote ${decisions.length} merge decisions to ${path.relative(root, outputPath)}`);
console.log(`Approved merges: ${decisions.filter(d => d.decision === 'merge-canonical').length}`);
console.log(`Review-required groups: ${decisions.filter(d => d.decision === 'review-required').length}`);
