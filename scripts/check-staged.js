#!/usr/bin/env node
/**
 * scripts/check-staged.js
 *
 * Lightweight pre-push safety check.
 * Fails if any prohibited file is staged for the next commit.
 * Run automatically via rebuild-index.yml before git add.
 * Also safe to run locally before committing.
 *
 * Usage:  node scripts/check-staged.js
 */

'use strict';

const { execSync } = require('node:child_process');

/** Patterns that must never reach a commit. */
const PROHIBITED = [
  // Private n8n workflow exports
  /^n8n\.json$/,
  /^n18\.json$/,
  /^n8n workflow\.json$/,

  // Private prompt queue and master collection
  /^data\/master-prompt-candidates\.csv$/,
  /^data\/google-sheet-daily-queue\.csv$/,
  /^data\/consolidated_prompts\./,

  // Environment files and credentials
  /^\.env($|\.)/,
  /\.pem$/,
  /service[-_]?account.*\.json$/i,

  // Agent state, session, caches
  /^\.gemini\//,

  // Backup bundles, archives, temporary
  /^archive\//,
  /\.bundle$/,
  /plan\.md$/,
  /privacy\.md$/,
  /^Axiom\//,

  // Scratch / debug
  /scratch\//,
  /\.tmp$/,
  /\.bak$/,
];

let staged;
try {
  staged = execSync('git diff --cached --name-only', { encoding: 'utf8' })
    .split('\n')
    .map(f => f.trim())
    .filter(Boolean);
} catch (e) {
  console.error('check-staged: could not read staged files:', e.message);
  process.exit(1);
}

const violations = staged.filter(file =>
  PROHIBITED.some(pattern => pattern.test(file))
);

if (violations.length > 0) {
  console.error('\ncheck-staged: PROHIBITED FILES STAGED:\n');
  violations.forEach(f => console.error('  ', f));
  console.error('\nRemove these files from staging before committing.\n');
  process.exit(1);
}

console.log(`check-staged: OK (${staged.length} staged files, 0 violations)`);
