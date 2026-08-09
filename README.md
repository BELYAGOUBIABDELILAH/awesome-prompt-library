<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=6E40C9&center=true&vCenter=true&multiline=true&width=600&height=100&lines=Open+Prompt+Library;3%2C383+battle-tested+AI+prompts" alt="Typing SVG" />

<br/>

![Prompts](https://img.shields.io/badge/prompts-3383-6E40C9?style=flat-square)
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

## ◈ Categories

> **3,383 prompts** across **19 categories** — updated regularly.

| Category | Prompts | Browse |
|---|---|---|
| Coding & Development | 3,383 | [→ prompts/coding-development](prompts/coding-development) |
| Image & Design | 3,383 | [→ prompts/image-design](prompts/image-design) |
| Writing & Content | 3,383 | [→ prompts/writing-content](prompts/writing-content) |
| Data & Analytics | 3,383 | [→ prompts/data-analytics](prompts/data-analytics) |
| Marketing & Social | 3,383 | [→ prompts/marketing-social](prompts/marketing-social) |
| General | 3,383 | [→ prompts/general](prompts/general) |
| AI & Automation | 3,383 | [→ prompts/ai-automation](prompts/ai-automation) |
| Business & Career | 3,383 | [→ prompts/business-career](prompts/business-career) |
| Documentation | 3,383 | [→ prompts/documentation](prompts/documentation) |
| Security | 3,383 | [→ prompts/security](prompts/security) |
| Health & Wellness | 3,383 | [→ prompts/health-wellness](prompts/health-wellness) |
| Research & Analysis | 3,383 | [→ prompts/research-analysis](prompts/research-analysis) |
| Sales & Business | 3,383 | [→ prompts/sales-business](prompts/sales-business) |
| Games & Fun | 3,383 | [→ prompts/games-fun](prompts/games-fun) |
| Product & Strategy | 3,383 | [→ prompts/product-strategy](prompts/product-strategy) |
| Travel & Places | 3,383 | [→ prompts/travel-places](prompts/travel-places) |
| Food & Recipes | 3,383 | [→ prompts/food-recipes](prompts/food-recipes) |
| Philosophy & Humanities | 3,383 | [→ prompts/philosophy-humanities](prompts/philosophy-humanities) |
| Education & Learning | 3,383 | [→ prompts/education-learning](prompts/education-learning) |

## ⬡ Data Exports

The full dataset is available in machine-readable formats.

| File | Format | Records | Use case |
|---|---|---|---|
| [`data/prompts.json`](data/prompts.json) | JSON array | 3,383 | Build apps, query with `jq`, feed into vector DBs |
| [`data/prompts.csv`](data/prompts.csv) | CSV UTF-8 | 3,383 | Excel, pandas, Sheets, SQL imports |

**JSON schema per record**

```json
{
  "act": "Prompt title",
  "category": "Category name",
  "prompt": "Full prompt text",
  "source": "Original source",
  "type": "TEXT",
  "slug": "url-friendly-slug",
  "folder": "category-folder-name",
  "path": "prompts/folder/slug.md"
}
```

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