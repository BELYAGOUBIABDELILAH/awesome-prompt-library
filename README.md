<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=6E40C9&center=true&vCenter=true&multiline=true&width=600&height=100&lines=Open+Prompt+Library;2%2C101+battle-tested+AI+prompts" alt="Typing SVG" />

<br/>

![Prompts](https://img.shields.io/badge/prompts-2101-6E40C9?style=flat-square)
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

## ★ Featured Prompts

| Prompt | Category | What it does |
|---|---|---|
| Accessibility Expert | Coding | Reviews UI for WCAG compliance |
| Debugging Oncall Tickets | AI Automation | Triages incidents with a structured runbook |
| Accountant | Business | Financial expert for bookkeeping & tax |
| AI Writing Tutor | Education | Structured writing feedback like a personal coach |
| Analyze Security Scan Results | Security | Interprets scanner output into actionable steps |
| Beginners Guide to LLMs | Education | Step-by-step walkthrough for shipping your first LLM |

---

<!-- GENERATED:CATEGORIES:START -->
## ◈ Categories

> **2101 prompts** across **19 categories** — updated regularly.

| Category | Prompts | Browse |
|---|---|---|
| Coding & Development | 768 | [→ prompts/coding-development](prompts/coding-development) |
| Image & Design | 389 | [→ prompts/image-design](prompts/image-design) |
| Writing & Content | 252 | [→ prompts/writing-content](prompts/writing-content) |
| Data & Analytics | 138 | [→ prompts/data-analytics](prompts/data-analytics) |
| Marketing & Social | 104 | [→ prompts/marketing-social](prompts/marketing-social) |
| General | 71 | [→ prompts/general](prompts/general) |
| Education & Learning | 70 | [→ prompts/education-learning](prompts/education-learning) |
| AI & Automation | 62 | [→ prompts/ai-automation](prompts/ai-automation) |
| Documentation | 52 | [→ prompts/documentation](prompts/documentation) |
| Business & Career | 51 | [→ prompts/business-career](prompts/business-career) |
| Security | 41 | [→ prompts/security](prompts/security) |
| Health & Wellness | 27 | [→ prompts/health-wellness](prompts/health-wellness) |
| Research & Analysis | 23 | [→ prompts/research-analysis](prompts/research-analysis) |
| Sales & Business | 19 | [→ prompts/sales-business](prompts/sales-business) |
| Games & Fun | 13 | [→ prompts/games-fun](prompts/games-fun) |
| Product & Strategy | 11 | [→ prompts/product-strategy](prompts/product-strategy) |
| Travel & Places | 5 | [→ prompts/travel-places](prompts/travel-places) |
| Food & Recipes | 3 | [→ prompts/food-recipes](prompts/food-recipes) |
| Philosophy & Humanities | 2 | [→ prompts/philosophy-humanities](prompts/philosophy-humanities) |

<!-- GENERATED:CATEGORIES:END -->

## ⬡ Data Exports

The canonical v1 registry is available in machine-readable formats. It uses immutable IDs, explicit provenance states, content hashes, revision numbers, and legacy-slug preservation.

| File | Format | Records | Use case |
|---|---|---:|---|
| [`data/prompts/index.jsonl`](data/prompts/index.jsonl) | JSONL v1 | 2,101 | Canonical registry for apps, CLIs, IDEs, and AI tools |
| [`data/sources.json`](data/sources.json) | JSON array | 5 | Source names, URL/licence review state, and redistribution status |
| [`data/prompts.json`](data/prompts.json) | Legacy JSON array | 3,467 | Original import retained for audit and migration review |
| [`data/prompts.csv`](data/prompts.csv) | CSV UTF-8 | 2,101 | Spreadsheet, pandas, and SQL-friendly export |

**Canonical record shape**

```json
{
  "id": "opl_7b2a9f3e1c5d",
  "slug": "api-review",
  "title": "API Review",
  "summary": null,
  "prompt": "Full prompt text with explicit variables",
  "category": "Coding & Development",
  "language": "unknown",
  "variables": [],
  "source_ids": ["awesome-chatgpt-prompts"],
  "provenance_status": "needs-review",
  "status": "draft",
  "revision": 1,
  "content_hash": "sha256…"
}
```

Records whose provenance is not verified remain `draft` and are visibly marked as such in downstream products.

---

## 🛠️ Building the repo locally

No dependencies required — only Node.js.

```bash
git clone https://github.com/BELYAGOUBIABDELILAH/open-prompt-library.git
cd open-prompt-library
node scripts/generate-tree.js
```

This fully recreates every `prompts/category/*.md` file and rebuilds all README indexes from `data/prompts.json`. It is idempotent — safe to re-run anytime.

---

## ◎ Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

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