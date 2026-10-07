<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=6E40C9&center=true&vCenter=true&multiline=true&width=700&height=120&lines=Awesome+Prompt+Library;Curated+AI+prompts;Free+JSON+API+included" alt="Awesome Prompt Library" />

<br/>

![Prompts](https://img.shields.io/endpoint?url=https%3A%2F%2Fbelyagoubiabdelilah.github.io%2Fawesome-prompt-library%2Fv1%2Fstats.json%26query%3D%24.total_prompts%26label%3Dprompts?style=flat-square)
![Categories](https://img.shields.io/endpoint?url=https%3A%2F%2Fbelyagoubiabdelilah.github.io%2Fawesome-prompt-library%2Fv1%2Fstats.json%26query%3D%24.total_categories%26label%3Dcategories)
![API](https://img.shields.io/badge/JSON_API-live-brightgreen?style=flat-square)
![License](https://img.shields.io/github/license/BELYAGOUBIABDELILAH/awesome-prompt-library?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/BELYAGOUBIABDELILAH/awesome-prompt-library?style=flat-square&color=green)
![Stars](https://img.shields.io/github/stars/BELYAGOUBIABDELILAH/awesome-prompt-library?style=flat-square)
![CI](https://github.com/BELYAGOUBIABDELILAH/awesome-prompt-library/actions/workflows/rebuild-index.yml/badge.svg)

<p>An open-source prompt database — browse on GitHub or fetch any prompt programmatically via the free JSON API.<br/>
No account or API key is required.</p>

<p>
  ⭐ <strong>If you found this database helpful, please leave a star on the GitHub repository!</strong> ⭐<br/>
  🌟 <em>Jeśli ta biblioteka okazała się pomocna — zostaw gwiazdkę, to dla nas ogromna motywacja!</em> 🌟
</p>

<p>
  <a href="#quick-start">Quick Start</a> &nbsp;·&nbsp;
  <a href="#how-to-use">How to Use</a> &nbsp;·&nbsp;
  <a href="#categories">Browse Prompts</a> &nbsp;·&nbsp;
  <a href="#free-json-api">JSON API</a> &nbsp;·&nbsp;
  <a href="#contributing">Contributing</a>
</p>

</div>

---

## Quick Start

No installation. No account. Just copy and use.

1. Find a category in the [table below](#categories)
2. Open any `.md` file — the prompt lives inside the blockquote
3. Paste it into ChatGPT, Claude, Gemini, or any LLM
4. Tweak and go

> **Developer?** Skip the browsing — use the [free JSON API](#free-json-api) to fetch prompts programmatically with a single `fetch()` call.

---

## How to Use

**No account. No API key. No setup required.**

### Browse on GitHub

Click a category in the [table below](#categories) → open any `.md` file → copy the blockquote text → paste into your LLM of choice.

### Understand the variable syntax

Prompts use `${variable}` placeholders so you can fill in specifics:

| Syntax | Meaning |
|---|---|
| `${topic}` | Required input — replace with your value |
| `${audience:developers}` | Optional — default is `developers`, override as needed |

**Example:** `Write a blog post about ${topic} for ${audience:developers}.`
Replace `${topic}` with your subject. Keep or change the `${audience}` default.

### Search locally

```bash
# Full-text search across all prompt files
grep -ri "keyword" prompts/

# Search the machine-readable registry (one JSON record per line)
grep "keyword" data/registry.jsonl
```

### Use the data exports

| Goal | File to use |
|---|---|
| Import into Excel or Google Sheets | `data/prompts.csv` |
| Load in Python / pandas | `data/prompts.csv` or `data/prompts.json` |
| Build a search tool or internal API | `data/registry.jsonl` — stable IDs, deduplicated |
| Filter by category, variables, or status | `data/registry.jsonl` — filter on `category`, `variables`, `lifecycle_status` |

---

## Practical Examples

These examples show the structure of a useful prompt: clear inputs, explicit constraints, a defined output format, and honest handling of missing evidence.

### Code review with actionable findings

```text
You are a senior code reviewer.

Review this change:
- Diff: ${diff}
- Project context: ${context}
- Risk priorities: ${risk_priorities:correctness,security,maintainability}

Rules:
1. Identify only issues supported by the diff or project context.
2. Do not invent files, tests, APIs, or runtime behavior.
3. Separate blocking issues from suggestions.
4. If evidence is insufficient, say so explicitly.

Return Markdown with exactly these sections:
## Summary
## Blocking issues
## Non-blocking suggestions
## Missing evidence

For every issue, include: severity, file and line when available, why it matters, and a concrete fix.
```

### Reliable document-to-JSON extraction

```text
Extract the requested facts from ${document}.

Return one valid JSON object matching this shape:
{
  "entities": [{"name": "string", "type": "string", "value": "string"}],
  "dates": [{"label": "string", "value": "YYYY-MM-DD or null"}],
  "uncertain_items": ["string"]
}

Use null or an empty array when the document does not provide a value. Do not infer facts from general knowledge. Preserve the document's wording in `uncertain_items`. Return JSON only, with no Markdown fences or commentary.
```

### Evidence-first research brief

```text
Prepare a concise research brief about ${topic} for ${audience:technical decision-makers}.

Use the supplied sources: ${sources}. For each important claim, include its source URL. Separate:
- verified facts directly supported by a source;
- reasonable interpretations;
- open questions or missing evidence.

Do not present an estimate, opinion, or single-source claim as an established fact. If the sources are insufficient, state what cannot be concluded. End with three decision-relevant questions, not a generic conclusion.
```

### Translation that preserves structure

```text
Translate ${text} from ${source_language:English} to ${target_language:French}.

Preserve exactly:
- Markdown headings, lists, links, code blocks, and HTML tags;
- variables such as ${name} and `${format:json}`;
- product names, file paths, and code identifiers.

Do not translate code or alter placeholder names. If a phrase has two materially different translations, choose the most natural one for the target locale and add one short note after the translated text. Otherwise, return only the translation.
```

---

<!-- CATEGORIES_START -->

<div align="center">

## Categories

> **Curated prompts** across all available categories — updated regularly.

| Category | Browse |
| :---: | :---: |
| Coding & Development | [→ prompts/coding-development](prompts/coding-development) |
| Image & Design | [→ prompts/image-design](prompts/image-design) |
| Data & Analytics | [→ prompts/data-analytics](prompts/data-analytics) |
| Writing & Content | [→ prompts/writing-content](prompts/writing-content) |
| Marketing & Social | [→ prompts/marketing-social](prompts/marketing-social) |
| General | [→ prompts/general](prompts/general) |
| AI & Automation | [→ prompts/ai-automation](prompts/ai-automation) |
| Business & Career | [→ prompts/business-career](prompts/business-career) |
| Documentation | [→ prompts/documentation](prompts/documentation) |
| Security | [→ prompts/security](prompts/security) |
| Health & Wellness | [→ prompts/health-wellness](prompts/health-wellness) |
| Research & Analysis | [→ prompts/research-analysis](prompts/research-analysis) |
| Sales & Business | [→ prompts/sales-business](prompts/sales-business) |
| Games & Fun | [→ prompts/games-fun](prompts/games-fun) |
| Travel & Places | [→ prompts/travel-places](prompts/travel-places) |
| Product & Strategy | [→ prompts/product-strategy](prompts/product-strategy) |
| Food & Recipes | [→ prompts/food-recipes](prompts/food-recipes) |
| Philosophy & Humanities | [→ prompts/philosophy-humanities](prompts/philosophy-humanities) |
| Education & Learning | [→ prompts/education-learning](prompts/education-learning) |

</div>

<!-- CATEGORIES_END -->

## Data Exports

The canonical registry is the deduplicated, machine-readable source of truth. The original corpus files are preserved for compatibility.

| File | Format | Records | Use case |
|---|---|---|---|
| [`data/registry.jsonl`](data/registry.jsonl) | JSONL | Generated | Stable IDs, deduplication, variables, provenance |
| [`data/prompts.json`](data/prompts.json) | JSON array | Generated | Original imported corpus |
| [`data/prompts.csv`](data/prompts.csv) | CSV UTF-8 | Generated | Excel, pandas, Sheets, SQL imports |
| [`data/sources.json`](data/sources.json) | JSON array | Generated | Source inventory and review status |

**Canonical registry record**

```json
{
  "id": "opl_0123456789ab",
  "slug": "prompt-title",
  "title": "Prompt title",
  "prompt": "Full prompt text",
  "category": "Category name",
  "folder": "category-folder-name",
  "source_ids": ["src_0123456789ab"],
  "provenance_status": "needs-review",
  "lifecycle_status": "draft",
  "revision": 1
}
```

---

## Free JSON API

Every prompt is available as a structured JSON endpoint served as static files by GitHub Pages. No backend or API key is required.

**Base URL:** `https://belyagoubiabdelilah.github.io/awesome-prompt-library`

### Endpoints

| Endpoint | Description |
|---|---|
| [`/v1/stats.json`](https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/stats.json) | Global counts, category list, all endpoint URLs |
| [`/v1/categories/index.json`](https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/categories/index.json) | All available categories with prompt counts |
| `/v1/categories/{folder}.json` | All prompts in a category (full text) |
| [`/v1/index.json`](https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/index.json) | Paginated prompt list — first page; follow `next` and `prev` links |
| `/v1/index/page-N.json` | Subsequent pages (follow `next` link) |
| `/v1/prompts/{id}.json` | Single prompt by stable ID (full text) |

### Quick start for developers

```js
// Fetch all coding prompts
const res = await fetch(
  'https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/categories/coding-development.json'
);
const { prompts } = await res.json();
console.log(prompts[0].prompt); // full prompt text, ready to use
```

```python
import requests

# Discover all available categories
data = requests.get(
    'https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/categories/index.json'
).json()

for cat in data['categories']:
    print(cat['name'], cat['prompt_count'], cat['url'])
```

```bash
# Fetch a single prompt by ID
curl https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/prompts/opl_8fbf9edcd378.json
```

### Prompt record shape

```json
{
  "id":                "opl_0123456789ab",
  "slug":              "prompt-title",
  "title":             "Prompt title",
  "prompt":            "Full prompt text, ready to paste into any LLM.",
  "category":          "Coding & Development",
  "folder":            "coding-development",
  "variables":         [{ "name": "topic", "default": null }],
  "provenance_status": "needs-review",
  "lifecycle_status":  "draft",
  "source_ids":        ["src_0123456789ab"],
  "revision":          1,
  "url":               "https://belyagoubiabdelilah.github.io/awesome-prompt-library/v1/prompts/opl_0123456789ab.json"
}
```

> **CORS** — GitHub Pages serves all files with open CORS headers. Calls from any browser or origin work without a proxy.

> **Updates** — The API rebuilds automatically when relevant data or build files change on `main`. The `last_updated` field in each response tells you when the snapshot was generated.

---

## Building Locally

No dependencies required — only Node.js.

```bash
git clone https://github.com/BELYAGOUBIABDELILAH/awesome-prompt-library.git
cd awesome-prompt-library
node scripts/build-registry.js
node scripts/validate-registry.js
node scripts/generate-tree.js
node scripts/build-api.js      # generates api/v1/ for local testing
```

The build is dependency-free and idempotent. `build-registry.js` creates `data/registry.jsonl`, `data/sources.json`, `data/quarantine.jsonl`, and `data/registry-stats.json` without modifying the source records.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. New submissions should include a source, license, intended use, variables, and a short example of expected output.

| | |
|---|---|
| Single prompt | Open a PR directly |
| Batch of prompts | Open an issue first to coordinate |
| Found a duplicate or bug | [Open an issue](https://github.com/BELYAGOUBIABDELILAH/awesome-prompt-library/issues/new) |

> All contributions are reviewed and deduplicated before merging.

---

## License

[MIT](LICENSE) · Prompt sources are credited inline in each file.

---

<div align="center">

**[Back to top](#)**

[![GitHub Stars](https://img.shields.io/github/stars/BELYAGOUBIABDELILAH/awesome-prompt-library?style=social)](https://github.com/BELYAGOUBIABDELILAH/awesome-prompt-library/stargazers)
&nbsp;·&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
&nbsp;·&nbsp;
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

Maintained by [BELYAGOUBIABDELILAH](https://github.com/BELYAGOUBIABDELILAH) &nbsp;·&nbsp; Open source &nbsp;·&nbsp; Always free

<sub>Curated prompts · Free JSON API · No sign-up required</sub>

</div>
