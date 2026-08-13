<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=6E40C9&center=true&vCenter=true&multiline=true&width=600&height=100&lines=Open+Prompt+Library;3%2C469+AI+prompts" alt="Typing SVG" />

<br/>

![Prompts](https://img.shields.io/badge/prompts-3469-6E40C9?style=flat-square)
![Categories](https://img.shields.io/badge/categories-19-blue?style=flat-square)
![License](https://img.shields.io/github/license/BELYAGOUBIABDELILAH/open-prompt-library?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/BELYAGOUBIABDELILAH/open-prompt-library?style=flat-square&color=green)
![Stars](https://img.shields.io/github/stars/BELYAGOUBIABDELILAH/open-prompt-library?style=flat-square)
![CI](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/actions/workflows/rebuild-index.yml/badge.svg)

<p>A curated, open-source collection of AI prompts for developers, writers, marketers, and creators.<br/>
Browse, copy, fork, and extend — no setup required.</p>

<p>
  <a href="#-categories">Browse Prompts</a> &nbsp;·&nbsp;
  <a href="#-quick-start">Quick Start</a> &nbsp;·&nbsp;
  <a href="#-data-exports">Data Exports</a> &nbsp;·&nbsp;
  <a href="#-contributing">Contributing</a>
</p>

</div>

---

## ✦ Quick Start

No installation. No account. Just copy and use.

1. Find a prompt in the [categories table](#-categories) below
2. Open any `.md` file — the prompt lives inside the blockquote
3. Paste it into ChatGPT, Claude, Gemini, or any LLM
4. Tweak and go

> **Power user tip** — clone the repo and run `grep -r "keyword" prompts/` to full-text search all prompts locally.

---

## ◈ Categories

> **3469 prompts** across **19 categories** — updated regularly.

| Category | Prompts | Browse |
|---|---|---|
| Coding & Development | 850 | [→ prompts/coding-development](prompts/coding-development) |
| Image & Design | 471 | [→ prompts/image-design](prompts/image-design) |
| Writing & Content | 253 | [→ prompts/writing-content](prompts/writing-content) |
| Data & Analytics | 218 | [→ prompts/data-analytics](prompts/data-analytics) |
| Marketing & Social | 185 | [→ prompts/marketing-social](prompts/marketing-social) |
| General | 154 | [→ prompts/general](prompts/general) |
| AI & Automation | 140 | [→ prompts/ai-automation](prompts/ai-automation) |
| Business & Career | 132 | [→ prompts/business-career](prompts/business-career) |
| Documentation | 130 | [→ prompts/documentation](prompts/documentation) |
| Security | 121 | [→ prompts/security](prompts/security) |
| Health & Wellness | 109 | [→ prompts/health-wellness](prompts/health-wellness) |
| Research & Analysis | 103 | [→ prompts/research-analysis](prompts/research-analysis) |
| Sales & Business | 101 | [→ prompts/sales-business](prompts/sales-business) |
| Games & Fun | 93 | [→ prompts/games-fun](prompts/games-fun) |
| Product & Strategy | 88 | [→ prompts/product-strategy](prompts/product-strategy) |
| Travel & Places | 87 | [→ prompts/travel-places](prompts/travel-places) |
| Food & Recipes | 82 | [→ prompts/food-recipes](prompts/food-recipes) |
| Philosophy & Humanities | 82 | [→ prompts/philosophy-humanities](prompts/philosophy-humanities) |
| Education & Learning | 70 | [→ prompts/education-learning](prompts/education-learning) |

## ⬡ Data Exports

The original export is preserved, while the canonical registry provides a deterministic, deduplicated view for future search tools and integrations.

| File | Format | Records | Use case |
|---|---|---|---|
| [`data/registry.jsonl`](data/registry.jsonl) | JSONL | Generated | Stable IDs, provenance states, variables, and deduplication |
| [`data/prompts.json`](data/prompts.json) | JSON array | 3,469 | Original imported corpus and compatibility export |
| [`data/prompts.csv`](data/prompts.csv) | CSV UTF-8 | 3,469 | Excel, pandas, Sheets, SQL imports |
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

## 🛠️ Building the repo locally

No dependencies required — only Node.js.

```bash
git clone https://github.com/BELYAGOUBIABDELILAH/open-prompt-library.git
cd open-prompt-library
node scripts/build-registry.js
node scripts/validate-registry.js
node scripts/generate-tree.js
```

The registry build and validation are dependency-free and idempotent. The existing generator recreates the Markdown views from `data/prompts.json`; the registry builder creates `data/registry.jsonl`, `data/sources.json`, `data/quarantine.jsonl`, and `data/registry-stats.json` without deleting source records.

---

## ◎ Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. New submissions should include a source, license, intended use, variables, and a short example of what a good result should contain.

| | |
|---|---|
| Single prompt | Open a PR directly |
| Batch of prompts | Open an issue first to coordinate |
| Found a bug or duplicate | [Open an issue](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/issues/new) |

> All contributions are reviewed and deduplicated before merging.

---

## ◻ License

[MIT](LICENSE) · Prompt sources are credited inline in each file.

---

<div align="center">

**[⬆ Back to top](#)**

<sub>Built for the community · Open source · Always free</sub>

</div>
