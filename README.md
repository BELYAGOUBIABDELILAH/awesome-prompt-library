<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=6E40C9&center=true&vCenter=true&multiline=true&width=600&height=100&lines=Open+Prompt+Library;3%2C204+battle-tested+AI+prompts" alt="Typing SVG" />

<br/>

![Prompts](https://img.shields.io/badge/prompts-3204-6E40C9?style=flat-square)
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

> **3,204 prompts** across **19 categories** — updated regularly.

| Category | Prompts | Browse |
|---|---|---|
| Coding & Development | 3,204 | [→ prompts/coding-development](prompts/coding-development) |
| Image & Design | 3,204 | [→ prompts/image-design](prompts/image-design) |
| Writing & Content | 3,204 | [→ prompts/writing-content](prompts/writing-content) |
| Data & Analytics | 3,204 | [→ prompts/data-analytics](prompts/data-analytics) |
| Marketing & Social | 3,204 | [→ prompts/marketing-social](prompts/marketing-social) |
| General | 3,204 | [→ prompts/general](prompts/general) |
| AI & Automation | 3,204 | [→ prompts/ai-automation](prompts/ai-automation) |
| Business & Career | 3,204 | [→ prompts/business-career](prompts/business-career) |
| Documentation | 3,204 | [→ prompts/documentation](prompts/documentation) |
| Security | 3,204 | [→ prompts/security](prompts/security) |
| Health & Wellness | 3,204 | [→ prompts/health-wellness](prompts/health-wellness) |
| Research & Analysis | 3,204 | [→ prompts/research-analysis](prompts/research-analysis) |
| Sales & Business | 3,204 | [→ prompts/sales-business](prompts/sales-business) |
| Games & Fun | 3,204 | [→ prompts/games-fun](prompts/games-fun) |
| Product & Strategy | 3,204 | [→ prompts/product-strategy](prompts/product-strategy) |
| Travel & Places | 3,204 | [→ prompts/travel-places](prompts/travel-places) |
| Education & Learning | 3,204 | [→ prompts/education-learning](prompts/education-learning) |
| Food & Recipes | 3,204 | [→ prompts/food-recipes](prompts/food-recipes) |
| Philosophy & Humanities | 3,204 | [→ prompts/philosophy-humanities](prompts/philosophy-humanities) |

## ⬡ Data Exports

The full dataset is available in machine-readable formats.

| File | Format | Records | Use case |
|---|---|---|---|
| [`data/prompts.json`](data/prompts.json) | JSON array | 3,204 | Build apps, query with `jq`, feed into vector DBs |
| [`data/prompts.csv`](data/prompts.csv) | CSV UTF-8 | 3,204 | Excel, pandas, Sheets, SQL imports |

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