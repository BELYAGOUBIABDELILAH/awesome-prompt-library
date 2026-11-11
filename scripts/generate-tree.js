#!/usr/bin/env node
/**
 * generate-tree.js
 * Regenerates the entire prompts/ directory tree from data/prompts.json.
 * No external dependencies: uses only Node.js built-ins (fs, path).
 * Usage: node scripts/generate-tree.js
 */

'use strict';

const fs   = require('fs');
const path = require('path');

function safeWriteFileSync(filePath, content, encoding = 'utf8') {
  let attempts = 0;
  while (true) {
    try {
      fs.writeFileSync(filePath, content, encoding);
      break;
    } catch (err) {
      attempts++;
      if (attempts > 15) throw err;
      const waitTill = Date.now() + 50 * attempts;
      while (Date.now() < waitTill) {}
    }
  }
}


// ---------------------------------------------------------------------------
// Category → folder/emoji mapping (AGENTS.md section 3)
// ---------------------------------------------------------------------------
const CATEGORY_MAP = {
  'Coding & Development':    { folder: 'coding-development',    emoji: '💻', description: 'Code generation, debugging, refactoring, and testing' },
  'Writing & Content':       { folder: 'writing-content',       emoji: '✍️', description: 'Editing, copywriting, storytelling, and translation' },
  'Image & Design':          { folder: 'image-design',          emoji: '🎨', description: 'Image generation, composition, and visual styling' },
  'Data & Analytics':        { folder: 'data-analytics',        emoji: '📊', description: 'Data extraction, SQL queries, and metrics evaluation' },
  'Marketing & Social':      { folder: 'marketing-social',      emoji: '📣', description: 'Campaign copy, social posts, and audience research' },
  'Education & Learning':    { folder: 'education-learning',    emoji: '🎓', description: 'Explanations, study guides, and concept breakdowns' },
  'AI & Automation':         { folder: 'ai-automation',         emoji: '🤖', description: 'Agent prompts, workflow scripts, and system setup' },
  'General':                 { folder: 'general',               emoji: '🧩', description: 'Everyday productivity, brainstorming, and utilities' },
  'Business & Career':       { folder: 'business-career',       emoji: '💼', description: 'Resumes, cover letters, and workplace communication' },
  'Health & Wellness':       { folder: 'health-wellness',       emoji: '🩺', description: 'Fitness planning, nutrition ideas, and habit tracking' },
  'Documentation':           { folder: 'documentation',         emoji: '📄', description: 'Technical specs, README files, and API docs' },
  'Research & Analysis':     { folder: 'research-analysis',     emoji: '🔬', description: 'Literature review, synthesis, and comparative analysis' },
  'Security':                { folder: 'security',              emoji: '🔒', description: 'Code auditing, threat modeling, and security policy' },
  'Sales & Business':        { folder: 'sales-business',        emoji: '💰', description: 'Outreach emails, pitch decks, and discovery questions' },
  'Product & Strategy':      { folder: 'product-strategy',      emoji: '🧭', description: 'Feature specs, roadmaps, and competitive analysis' },
  'Games & Fun':             { folder: 'games-fun',             emoji: '🎮', description: 'Interactive games, roleplay, and trivia' },
  'Philosophy & Humanities': { folder: 'philosophy-humanities', emoji: '📜', description: 'Ethics, philosophy, and critical thinking' },
  'Travel & Places':         { folder: 'travel-places',         emoji: '🌍', description: 'Itineraries, city guides, and travel planning' },
  'Food & Recipes':          { folder: 'food-recipes',          emoji: '🍳', description: 'Recipe generation, meal ideas, and cooking advice' },
};

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const repoRoot   = path.resolve(__dirname, '..');
const dataFile   = path.join(repoRoot, 'data', 'prompts.json');
const csvFile    = path.join(repoRoot, 'data', 'prompts.csv');
const promptsDir = path.join(repoRoot, 'prompts');
const readmePath = path.join(repoRoot, 'README.md');

function getRepositorySlug() {
  if (process.env.GITHUB_REPOSITORY) return process.env.GITHUB_REPOSITORY;

  try {
    const remote = require('child_process')
      .execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: repoRoot, encoding: 'utf8' })
      .trim()
      .replace(/\.git$/, '');
    const match = remote.match(/github\.com[/:]([^/]+\/[^/]+)$/i);
    if (match) return match[1];
  } catch (error) {
    console.warn(`WARN: Could not determine GitHub repository: ${error.message}`);
  }

  return null;
}

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
// Load Canonical Data from data/categories/*.json
// ---------------------------------------------------------------------------
const categoriesDir = path.join(repoRoot, 'data', 'categories');
if (!fs.existsSync(categoriesDir)) {
  console.error('ERROR: data/categories directory not found.');
  process.exit(1);
}

const records = [];
const existingSlugs = new Set();
const categoryFiles = fs.readdirSync(categoriesDir).filter(f => f.endsWith('.json')).sort();

for (const file of categoryFiles) {
  const filePath = path.join(categoriesDir, file);
  try {
    const catData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const r of catData) {
      if (!existingSlugs.has(r.slug)) {
        records.push(r);
        existingSlugs.add(r.slug);
      }
    }
  } catch (e) {
    console.warn(`WARN: Failed to parse ${file}: ${e.message}`);
  }
}

console.log(`Loaded ${records.length} canonical records from data/categories/`);
safeWriteFileSync(dataFile, JSON.stringify(records, null, 2), 'utf8');
console.log('Synchronized data/prompts.json');

// ---------------------------------------------------------------------------
// Re-generate CSV (ensures data/prompts.csv is always in sync)
// ---------------------------------------------------------------------------
const csvHeader = 'act,category,prompt,source,type,slug,folder,path';
const csvRows = records.map(r =>
  [r.act, r.category, r.prompt, r.source, r.type, r.slug, r.folder, r.path]
    .map(csvEscape)
    .join(',')
);
safeWriteFileSync(csvFile, [csvHeader, ...csvRows].join('\n'), 'utf8');
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

  // Detect collisions (informational only: slugs already de-duped in JSON)
  if (!writtenSlugs[r.folder]) writtenSlugs[r.folder] = new Set();
  if (writtenSlugs[r.folder].has(r.slug)) {
    slugCollisions++;
    console.warn(`  WARN: Duplicate slug "${r.slug}" in ${r.folder}: check data/prompts.json`);
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

  safeWriteFileSync(filePath, content, 'utf8');
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
  safeWriteFileSync(catReadmePath, content, 'utf8');
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
const repositorySlug = getRepositorySlug();
const repositoryUrl = repositorySlug ? `https://github.com/${repositorySlug}` : null;
const pagesUrl = repositorySlug
  ? `https://${repositorySlug.split('/')[0].toLowerCase()}.github.io/${repositorySlug.split('/')[1]}`
  : null;

// Read canonical (deduplicated) count from registry-stats.json if available.
// Falls back to raw record count when the file hasn't been built yet.
let canonicalTotal = total;
const statsFilePath = path.join(repoRoot, 'data', 'registry-stats.json');
if (fs.existsSync(statsFilePath)) {
  try {
    const statsData = JSON.parse(fs.readFileSync(statsFilePath, 'utf8'));
    if (typeof statsData.canonical_records === 'number') {
      canonicalTotal = statsData.canonical_records;
    }
  } catch (e) {
    console.warn('WARN: Could not read registry-stats.json: falling back to raw count.');
  }
}

const categorySection = [
  '| Category | Prompts | Focus |',
  '|---|:---:|---|',
  ...sortedCategories.map(([cat, { count, folder }]) => {
    const desc = (CATEGORY_MAP[cat] && CATEGORY_MAP[cat].description) || 'Prompt collection';
    return `| [${cat}](prompts/${folder}) | ${count.toLocaleString('en-US')} | ${desc} |`;
  }),
].join('\n');

// Read existing README and replace only the categories section
if (!fs.existsSync(readmePath)) {
  console.warn('WARN: README.md not found: skipping root README update.');
} else {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  const START_MARKER = '<!-- CATEGORIES_START -->';
  const END_MARKER   = '<!-- CATEGORIES_END -->';

  const startIdx = readmeContent.indexOf(START_MARKER);
  const endIdx   = readmeContent.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.warn('WARN: Could not locate category section markers in README.md: skipping.');
  } else {
    const before  = readmeContent.slice(0, startIdx + START_MARKER.length);
    const after   = readmeContent.slice(endIdx);
    const updated = before + '\n\n' + categorySection + '\n\n' + after;
    safeWriteFileSync(readmePath, updated, 'utf8');
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

// ── Step 6: Sync public-facing counts using the canonical (deduplicated) total ─
// Updates: badge URL, typing-SVG parameter, registry.jsonl data-table row.
// The raw prompts.json / prompts.csv rows are intentionally left at their
// actual record count because they really do contain all source records.
// ---------------------------------------------------------------------------
if (fs.existsSync(readmePath)) {
  let readme = fs.readFileSync(readmePath, 'utf8');

  // 1. Keep the headline independent of a snapshot count.
  readme = readme.replace(
    /lines=(Open|Awesome)\+Prompt\+Library;[^"']+\+AI\+prompts/i,
    'lines=Awesome+Prompt+Library;Curated+AI+prompts'
  );

  // Keep repository and Pages links aligned with the GitHub remote.
  if (repositorySlug && repositoryUrl && pagesUrl) {
    readme = readme
      .replace(/https:\/\/github\.com\/[^/\s)"']+\/(?:open-prompt-library\/)+/gi, `${repositoryUrl}/`)
      .replace(/https:\/\/github\.com\/[^/\s)"']+\/(?:awesome-prompt-library\/)+/gi, `${repositoryUrl}/`)
      .replace(/https:\/\/github\.com\/[^/\s)"']+\/open-prompt-library/gi, repositoryUrl)
      .replace(/https:\/\/[a-z0-9-]+\.github\.io\/(?:open-prompt-library\/)+/gi, `${pagesUrl}/`)
      .replace(/https:\/\/[a-z0-9-]+\.github\.io\/open-prompt-library/gi, pagesUrl);
  }

  // Derive prompt and category counts dynamically from canonical dataset during build
  const formattedPrompts = canonicalTotal.toLocaleString('en-US').replace(/,/g, '%2C');
  const promptsBadgeUrl = `https://img.shields.io/badge/prompts-${formattedPrompts}-orange?style=flat-square`;
  const categoriesBadgeUrl = `https://img.shields.io/badge/categories-${sortedCategories.length}-blue?style=flat-square`;
  const licenseBadgeUrl = 'https://img.shields.io/badge/license-MIT-blue?style=flat-square';
  readme = readme
    .replace(/https:\/\/img\.shields\.io\/(?:endpoint\?url=[^")\s]+|badge\/prompts-[^")\s]+)/g, promptsBadgeUrl)
    .replace(/https:\/\/img\.shields\.io\/(?:endpoint\?url=[^")\s]+|badge\/categories-[^")\s]+)/g, categoriesBadgeUrl)
    .replace(/https:\/\/img\.shields\.io\/(?:github\/license\/[^")\s]+|badge\/license-[^")\s]+)/g, licenseBadgeUrl)
    .replace(/\r?\n?\[!\[JSON API\]\(https:\/\/img\.shields\.io\/badge\/JSON_API-live-[^")\s]+\)\]\([^)]+\)/g, '');

  // 2. Data export sizes are generated metadata, not hand-maintained claims.
  const dataStart = readme.indexOf('## Data Exports');
  if (dataStart !== -1) {
    const beforeData = readme.slice(0, dataStart);
    let dataSection  = readme.slice(dataStart);
    const exportRows = {
      'registry.jsonl': ['JSONL', 'Stable IDs, deduplication, variables, provenance'],
      'prompts.json': ['JSON array', 'Original imported corpus'],
      'prompts.csv': ['CSV UTF-8', 'Excel, pandas, Sheets, SQL imports'],
      'sources.json': ['JSON array', 'Source inventory and review status'],
    };
    for (const [file, [format, useCase]] of Object.entries(exportRows)) {
      const row = `| [\`data/${file}\`](data/${file}) | ${format} | Generated | ${useCase} |`;
      dataSection = dataSection.replace(new RegExp(`^\\|.*data/${file}.*$`, 'm'), row);
    }
    readme = beforeData + dataSection;
  }

  readme = readme.replace(/All \d+ categories with prompt counts/g, 'All available categories with prompt counts');

  // 3. Footer avoids a stale snapshot count.
  readme = readme.replace(/<sub>\d[\d,]* curated prompts/g, '<sub>Curated prompts');

  safeWriteFileSync(readmePath, readme, 'utf8');
  console.log('README metadata synchronized');
}

console.log('Done!');
