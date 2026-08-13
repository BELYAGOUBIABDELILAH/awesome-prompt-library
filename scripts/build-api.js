#!/usr/bin/env node
/**
 * build-api.js
 * Generates a static JSON API under api/v1/ from data/registry.jsonl.
 * Served for free via GitHub Pages — no backend, no auth, no rate limits.
 *
 * Output structure:
 *   api/v1/stats.json                   — global counts and endpoint map
 *   api/v1/categories/index.json        — list of all categories
 *   api/v1/categories/{folder}.json     — all prompts in a category (full text)
 *   api/v1/index.json                   — paginated prompt list (page 1, summary)
 *   api/v1/index/page-N.json            — subsequent pages
 *   api/v1/prompts/{id}.json            — single prompt by stable ID (full text)
 *
 * Usage: node scripts/build-api.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ROOT       = path.resolve(__dirname, '..');
const REGISTRY   = path.join(ROOT, 'data', 'registry.jsonl');
const STATS_FILE = path.join(ROOT, 'data', 'registry-stats.json');
const API_DIR    = path.join(ROOT, 'api', 'v1');
let repoName = 'awesome-prompt-library';
if (process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split('/');
  if (parts.length === 2) {
    repoName = parts[1];
  }
} else {
  try {
    const execSync = require('child_process').execSync;
    const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    const match = remoteUrl.match(/\/([^\/]+?)(?:\.git)?$/);
    if (match && match[1]) {
      repoName = match[1];
    }
  } catch (e) {}
}

const BASE_URL   = `https://belyagoubiabdelilah.github.io/${repoName}`;

const PAGE_SIZE  = 100;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY)) {
    console.error('ERROR: data/registry.jsonl not found. Run build-registry.js first.');
    process.exit(1);
  }
  return fs.readFileSync(REGISTRY, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line));
}

/** Public-facing shape for a single prompt (full content). */
function fullRecord(r) {
  return {
    id:                r.id,
    slug:              r.slug,
    title:             r.title,
    prompt:            r.prompt,
    category:          r.category,
    folder:            r.folder,
    variables:         r.variables  || [],
    provenance_status: r.provenance_status,
    lifecycle_status:  r.lifecycle_status,
    source_ids:        r.source_ids || [],
    revision:          r.revision   || 1,
    url:               `${BASE_URL}/v1/prompts/${r.id}.json`,
  };
}

/** Lightweight shape for paginated index (no full prompt text). */
function summaryRecord(r) {
  return {
    id:        r.id,
    slug:      r.slug,
    title:     r.title,
    category:  r.category,
    folder:    r.folder,
    variables: r.variables || [],
    url:       `${BASE_URL}/v1/prompts/${r.id}.json`,
  };
}

// ---------------------------------------------------------------------------
// Load data
// ---------------------------------------------------------------------------
console.log('Loading registry...');
const records = loadRegistry();
const now     = new Date().toISOString();

console.log(`  ${records.length} canonical records loaded`);

// Group by category folder
const byFolder = {};
for (const r of records) {
  if (!byFolder[r.folder]) byFolder[r.folder] = [];
  byFolder[r.folder].push(r);
}

// Sort each category alphabetically by title
for (const folder of Object.keys(byFolder)) {
  byFolder[folder].sort((a, b) => a.title.localeCompare(b.title));
}

// Global sorted list (alphabetical by title)
const allSorted = [...records].sort((a, b) => a.title.localeCompare(b.title));

// ---------------------------------------------------------------------------
// 1. api/v1/stats.json
// ---------------------------------------------------------------------------
const rawStats = fs.existsSync(STATS_FILE)
  ? JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'))
  : {};

const categoryList = Object.entries(byFolder)
  .map(([folder, prompts]) => ({
    folder,
    name:         prompts[0].category,
    prompt_count: prompts.length,
    url:          `${BASE_URL}/v1/categories/${folder}.json`,
  }))
  .sort((a, b) => b.prompt_count - a.prompt_count);

writeJson(path.join(API_DIR, 'stats.json'), {
  api_version:      'v1',
  last_updated:     now,
  total_prompts:    records.length,
  total_categories: categoryList.length,
  total_pages:      Math.ceil(records.length / PAGE_SIZE),
  base_url:         BASE_URL,
  endpoints: {
    stats:      `${BASE_URL}/v1/stats.json`,
    categories: `${BASE_URL}/v1/categories/index.json`,
    prompts:    `${BASE_URL}/v1/index.json`,
    category:   `${BASE_URL}/v1/categories/{folder}.json`,
    prompt:     `${BASE_URL}/v1/prompts/{id}.json`,
  },
  categories: categoryList,
});
console.log('  api/v1/stats.json');

// ---------------------------------------------------------------------------
// 2. api/v1/categories/index.json
// ---------------------------------------------------------------------------
writeJson(path.join(API_DIR, 'categories', 'index.json'), {
  last_updated:     now,
  total_categories: categoryList.length,
  categories:       categoryList,
});
console.log('  api/v1/categories/index.json');

// ---------------------------------------------------------------------------
// 3. api/v1/categories/{folder}.json  (full prompt text included)
// ---------------------------------------------------------------------------
for (const [folder, prompts] of Object.entries(byFolder)) {
  writeJson(path.join(API_DIR, 'categories', `${folder}.json`), {
    folder,
    name:         prompts[0].category,
    last_updated: now,
    total:        prompts.length,
    prompts:      prompts.map(fullRecord),
  });
}
console.log(`  api/v1/categories/ — ${Object.keys(byFolder).length} category files`);

// ---------------------------------------------------------------------------
// 4. api/v1/index.json  (paginated, summary only for fast loading)
// ---------------------------------------------------------------------------
const totalPages = Math.ceil(allSorted.length / PAGE_SIZE);

for (let page = 1; page <= totalPages; page++) {
  const slice   = allSorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const isFirst = page === 1;

  const payload = {
    last_updated: now,
    page,
    per_page:     PAGE_SIZE,
    total:        allSorted.length,
    total_pages:  totalPages,
    next: page < totalPages
      ? (page === 1 ? `${BASE_URL}/v1/index/page-2.json` : `${BASE_URL}/v1/index/page-${page + 1}.json`)
      : null,
    prev: page > 1
      ? (page === 2 ? `${BASE_URL}/v1/index.json` : `${BASE_URL}/v1/index/page-${page - 1}.json`)
      : null,
    prompts: slice.map(summaryRecord),
  };

  const outPath = isFirst
    ? path.join(API_DIR, 'index.json')
    : path.join(API_DIR, 'index', `page-${page}.json`);

  writeJson(outPath, payload);
}
console.log(`  api/v1/index.json — ${totalPages} page(s), ${allSorted.length} prompts`);

// ---------------------------------------------------------------------------
// 5. api/v1/prompts/{id}.json  (individual, full text)
// ---------------------------------------------------------------------------
ensureDir(path.join(API_DIR, 'prompts'));
for (const r of records) {
  writeJson(path.join(API_DIR, 'prompts', `${r.id}.json`), fullRecord(r));
}
console.log(`  api/v1/prompts/ — ${records.length} individual prompt files`);

// ---------------------------------------------------------------------------
// 6. api/.nojekyll  (required for GitHub Pages to serve files correctly)
// ---------------------------------------------------------------------------
fs.writeFileSync(path.join(ROOT, 'api', '.nojekyll'), '', 'utf8');

// ---------------------------------------------------------------------------
// Done
// ---------------------------------------------------------------------------
console.log('\n=== API Build Summary ===');
console.log(`  Total prompts    : ${records.length}`);
console.log(`  Total categories : ${categoryList.length}`);
console.log(`  Pages generated  : ${totalPages}`);
console.log(`  Output dir       : api/v1/`);
console.log(`\n  Live at: ${BASE_URL}/v1/stats.json`);
console.log('Done!');
