#!/usr/bin/env node
/**
 * generate-tree.js
 * Regenerates the entire prompts/ directory tree from data/prompts.json.
 * No external dependencies — uses only Node.js built-ins (fs, path).
 * Usage: node scripts/generate-tree.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Category → folder/emoji mapping (AGENTS.md section 3)
// ---------------------------------------------------------------------------
const CATEGORY_MAP = {
  'Coding & Development':    { folder: 'coding-development',    emoji: '💻' },
  'Writing & Content':       { folder: 'writing-content',       emoji: '✍️' },
  'Image & Design':          { folder: 'image-design',          emoji: '🎨' },
  'Data & Analytics':        { folder: 'data-analytics',        emoji: '📊' },
  'Marketing & Social':      { folder: 'marketing-social',      emoji: '📣' },
  'Education & Learning':    { folder: 'education-learning',    emoji: '🎓' },
  'AI & Automation':         { folder: 'ai-automation',         emoji: '🤖' },
  'General':                 { folder: 'general',               emoji: '🧩' },
  'Business & Career':       { folder: 'business-career',       emoji: '💼' },
  'Health & Wellness':       { folder: 'health-wellness',       emoji: '🩺' },
  'Documentation':           { folder: 'documentation',         emoji: '📄' },
  'Research & Analysis':     { folder: 'research-analysis',     emoji: '🔬' },
  'Security':                { folder: 'security',              emoji: '🔒' },
  'Sales & Business':        { folder: 'sales-business',        emoji: '💰' },
  'Product & Strategy':      { folder: 'product-strategy',      emoji: '🧭' },
  'Games & Fun':             { folder: 'games-fun',             emoji: '🎮' },
  'Philosophy & Humanities': { folder: 'philosophy-humanities', emoji: '📜' },
  'Travel & Places':         { folder: 'travel-places',         emoji: '🌍' },
  'Food & Recipes':          { folder: 'food-recipes',          emoji: '🍳' },
};

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const repoRoot        = path.resolve(__dirname, '..');
const dataDir         = path.join(repoRoot, 'data');
const dataFile        = path.join(dataDir, 'prompts.json');
const canonicalFile   = path.join(dataDir, 'prompts', 'index.jsonl');
const sourcesFile     = path.join(dataDir, 'sources.json');
const csvFile         = path.join(dataDir, 'prompts.csv');
const promptsDir      = path.join(repoRoot, 'prompts');
const readmePath      = path.join(repoRoot, 'README.md');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Render prompt text as a blockquote (every line prefixed with "> "). */
function toBlockquote(text) {
  return String(text || '')
    .split('\n')
    .map(line => '> ' + line)
    .join('\n');
}

/** Delete a directory tree recursively (Node < 14.14 compat). */
function rmdirSync(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  fs.readdirSync(dirPath).forEach(entry => {
    const full = path.join(dirPath, entry);
    if (fs.statSync(full).isDirectory()) {
      rmdirSync(full);
    } else {
      fs.unlinkSync(full);
    }
  });
  fs.rmdirSync(dirPath);
}

/** CSV field escaping */
function csvEscape(val) {
  const s = String(val == null ? '' : val);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

// ---------------------------------------------------------------------------
// Load canonical or legacy data
// ---------------------------------------------------------------------------
function loadCanonicalRecords() {
  const canonical = fs.readFileSync(canonicalFile, 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => JSON.parse(line));

  const sources = fs.existsSync(sourcesFile)
    ? JSON.parse(fs.readFileSync(sourcesFile, 'utf8'))
    : [];
  const sourceNames = new Map(sources.map(source => [source.source_id, source.display_name]));

  return canonical.map(record => ({
    ...record,
    act: record.title,
    source: record.source_ids.map(id => sourceNames.get(id) || id).join(', '),
    type: String(record.prompt_type || 'unknown').toUpperCase(),
    folder: record.category_folder,
    path: `prompts/${record.category_folder}/${record.slug}.md`
  }));
}

function loadLegacyRecords() {
  if (!fs.existsSync(dataFile)) {
    console.error('ERROR: neither data/prompts/index.jsonl nor data/prompts.json exists.');
    process.exit(1);
  }

  const records = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  console.log(`Loaded ${records.length} legacy records from data/prompts.json`);

  const categoriesDir = path.join(repoRoot, 'data', 'categories');
  let newPromptsAdded = 0;
  if (fs.existsSync(categoriesDir)) {
    const existingSlugs = new Set(records.map(r => r.slug));
    const categoryFiles = fs.readdirSync(categoriesDir).filter(f => f.endsWith('.json'));
    for (const file of categoryFiles) {
      const filePath = path.join(categoriesDir, file);
      try {
        const catData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        for (const record of catData) {
          if (!existingSlugs.has(record.slug)) {
            records.push(record);
            existingSlugs.add(record.slug);
            newPromptsAdded++;
          }
        }
      } catch (e) {
        console.warn(`WARN: Failed to parse ${file}: ${e.message}`);
      }
    }
  }

  if (newPromptsAdded > 0) {
    console.log(`Merged ${newPromptsAdded} new prompts from data/categories/`);
    fs.writeFileSync(dataFile, JSON.stringify(records, null, 2), 'utf8');
  }
  return records;
}

const canonicalMode = fs.existsSync(canonicalFile);
const records = canonicalMode ? loadCanonicalRecords() : loadLegacyRecords();
console.log(`Loaded ${records.length} ${canonicalMode ? 'canonical' : 'legacy'} records`);

if (canonicalMode) {
  console.log('Canonical mode: retained legacy data/prompts.json for auditability');
}

// ---------------------------------------------------------------------------
// Re-generate CSV (ensures data/prompts.csv is always in sync)
// ---------------------------------------------------------------------------
const csvHeader = 'act,category,prompt,source,type,slug,folder,path';
const csvRows = records.map(r =>
  [r.act, r.category, r.prompt, r.source, r.type, r.slug, r.folder, r.path]
    .map(csvEscape)
    .join(',')
);
fs.writeFileSync(csvFile, [csvHeader, ...csvRows].join('\n'), 'utf8');
console.log('Synchronized data/prompts.csv');

// ---------------------------------------------------------------------------
// Step 1: Wipe and recreate prompts/
// ---------------------------------------------------------------------------
rmdirSync(promptsDir);
fs.mkdirSync(promptsDir, { recursive: true });
console.log('Cleared and recreated prompts/');

// ---------------------------------------------------------------------------
// Step 2: Group by folder
// ---------------------------------------------------------------------------
const byFolder = {}; // folder -> [record, ...]

records.forEach(r => {
  if (!byFolder[r.folder]) byFolder[r.folder] = [];
  byFolder[r.folder].push(r);
});

// ---------------------------------------------------------------------------
// Step 3: Write individual prompt files
// ---------------------------------------------------------------------------
let filesWritten     = 0;
let slugCollisions   = 0;
const categoriesSeen = new Set();

// Track slugs seen during write (belt-and-suspenders, slugs already assigned in JSON)
const writtenSlugs = {}; // folder -> Set<slug>

records.forEach(r => {
  const folderPath = path.join(promptsDir, r.folder);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  // Detect collisions (informational only — slugs already de-duped in JSON)
  if (!writtenSlugs[r.folder]) writtenSlugs[r.folder] = new Set();
  if (writtenSlugs[r.folder].has(r.slug)) {
    slugCollisions++;
    console.warn(`  WARN: Duplicate slug "${r.slug}" in ${r.folder} — check data/prompts.json`);
  }
  writtenSlugs[r.folder].add(r.slug);

  const filePath = path.join(folderPath, `${r.slug}.md`);

  const content = [
    `# ${r.act}`,
    '',
    `**Category:** ${r.category}  `,
    `**Source:** ${r.source}`,
    '',
    '## Prompt',
    '',
    toBlockquote(r.prompt),
    '',
    '---',
    `[← Back to ${r.category}](README.md) · [Main index](../../README.md)`,
  ].join('\n');

  fs.writeFileSync(filePath, content, 'utf8');
  filesWritten++;
  categoriesSeen.add(r.folder);
});

console.log(`Wrote ${filesWritten} individual prompt files`);

// ---------------------------------------------------------------------------
// Step 4: Write per-category README.md files
// ---------------------------------------------------------------------------
let categoryReadmesWritten = 0;

Object.entries(byFolder).forEach(([folder, folderRecords]) => {
  // Determine category name and emoji
  const firstRecord = folderRecords[0];
  const category    = firstRecord.category;
  const mapping     = CATEGORY_MAP[category] || { emoji: '🧩' };
  const emoji       = mapping.emoji;

  // Sort alphabetically by act
  const sorted = [...folderRecords].sort((a, b) =>
    a.act.localeCompare(b.act, undefined, { sensitivity: 'base' })
  );

  const tocLines = sorted.map(r => `- [${r.act}](${r.slug}.md)`).join('\n');

  const content = [
    `# ${emoji} ${category}`,
    '',
    '[← Back to main index](../../README.md)',
    '',
    `**${folderRecords.length} prompts in this category**`,
    '',
    '## Table of Contents',
    '',
    tocLines,
  ].join('\n');

  const catReadmePath = path.join(promptsDir, folder, 'README.md');
  fs.writeFileSync(catReadmePath, content, 'utf8');
  categoryReadmesWritten++;
});

console.log(`Wrote ${categoryReadmesWritten} category README.md files`);

// ---------------------------------------------------------------------------
// Step 5: Rebuild root README.md category section
// ---------------------------------------------------------------------------

// Build stats: count per category, sorted descending by count
const categoryStats = {}; // category -> { count, folder, emoji }

records.forEach(r => {
  if (!categoryStats[r.category]) {
    const mapping = CATEGORY_MAP[r.category] || { folder: r.folder, emoji: '🧩' };
    categoryStats[r.category] = { count: 0, folder: mapping.folder, emoji: mapping.emoji };
  }
  categoryStats[r.category].count++;
});

const sortedCategories = Object.entries(categoryStats)
  .sort((a, b) => b[1].count - a[1].count);

const total = records.length;

const categorySection = [
  '<!-- GENERATED:CATEGORIES:START -->',
  '## ◈ Categories',
  '',
  `> **${total.toLocaleString('en-US')} canonical records** across **${sortedCategories.length} categories** — counts are rebuilt from the v1 index.`,
  '',
  '| Category | Prompts | Browse |',
  '|---|---|---|',
  ...sortedCategories.map(([cat, { count, folder }]) =>
    `| ${cat} | ${count} | [→ prompts/${folder}](prompts/${folder}) |`),
  '',
  '<!-- GENERATED:CATEGORIES:END -->'
].join('\n');

// Read existing README and replace only the categories section
if (!fs.existsSync(readmePath)) {
  console.warn('WARN: README.md not found — skipping root README update.');
} else {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  const START_MARKER = '<!-- GENERATED:CATEGORIES:START -->';
  const END_MARKER   = '<!-- GENERATED:CATEGORIES:END -->';

  const startIdx = readmeContent.indexOf(START_MARKER);
  const endIdx   = readmeContent.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.warn('WARN: Could not locate category section markers in README.md — writing section only.');
    // Fallback: append to readme
    fs.writeFileSync(readmePath, readmeContent + '\n\n' + categorySection, 'utf8');
  } else {
    const before  = readmeContent.slice(0, startIdx);
    const after   = readmeContent.slice(endIdx + END_MARKER.length);
    const updated = before + categorySection + after;
    fs.writeFileSync(readmePath, updated, 'utf8');
    console.log('Updated README.md category section');
  }
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n=== Summary ===');
console.log(`  Total prompt files written : ${filesWritten}`);
console.log(`  Total categories           : ${categoryReadmesWritten}`);
console.log(`  Slug collisions detected   : ${slugCollisions}`);
console.log(`  Root README updated        : yes`);

// ── Step 6: Sync prompt count in root README ────────────────────────────────
// Replaces all hardcoded prompt count occurrences with the live `total` value.
// Targets:
//   - shields.io badge URL           prompts-NNNN-
//   - plain-text category header     **N,NNN prompts**
//   - data-exports table cell        | N,NNN |
// ---------------------------------------------------------------------------
if (fs.existsSync(readmePath)) {
  const totalFormatted  = total.toLocaleString('en-US');            // e.g. "2,997"
  const totalUrlEncoded = totalFormatted.replace(',', '%2C');       // e.g. "2%2C997"

  let readme = fs.readFileSync(readmePath, 'utf8');

  // 1. Badge URL:  prompts-2106-  →  prompts-2997-
  readme = readme.replace(
    /\/badge\/prompts-\d[\d,]*-/g,
    `/badge/prompts-${total}-`
  );

  // Category and total text are generated inside marker-scoped sections above.
  // Do not perform global numeric replacements: they can corrupt unrelated tables.

  fs.writeFileSync(readmePath, readme, 'utf8');
  console.log(`README prompt count updated → ${total}`);
}

console.log('Done!');
