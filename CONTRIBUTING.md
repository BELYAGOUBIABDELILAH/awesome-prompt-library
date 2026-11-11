# Contributing to Promptstack

Thank you for contributing to **Promptstack**, a collection of reusable AI prompts.

---

## Contribution Quality Standards

Every submitted prompt should meet these criteria:

1. **Clear, Actionable Task:** The prompt must solve a specific problem. Avoid vague requests such as *"Act as an expert developer"* without detailed instructions.
2. **English-Only Instructions:** All instructional text must be in English. (Prompts designed to translate, analyze, or generate foreign languages are welcome, provided instructions are in English.)
3. **Parametrized Placeholders:** Include explicit `${variable}` or `${variable:default}` placeholders where inputs or context are needed.
4. **Defined Output Expectations:** Specify how the model should format its output (e.g., Markdown headers, tables, JSON schema).
5. **Attribution & License:** State the author or source origin where known, or "Original" for your own work. Only submit content compatible with the repository's MIT license.
6. **No Duplicates:** Search the existing catalog before submitting to ensure the prompt is not already present.

---

## How to Submit a Prompt

Promptstack uses `data/categories/{category}.json` as its canonical content source. Derived Markdown and API files are generated automatically.

### 1. Fork and Clone

```bash
git clone https://github.com/BELYAGOUBIABDELILAH/promptstack.git
cd promptstack
```

### 2. Add Your Prompt to the Appropriate Category JSON

Open the relevant file under `data/categories/{folder}.json` (e.g. `data/categories/coding-development.json`) and append your prompt object to the JSON array:

```json
{
  "act": "SQL Query Index Optimizer",
  "category": "Coding & Development",
  "prompt": "Analyze the following query and table schema for optimization...",
  "source": "https://github.com/example/source",
  "type": "TEXT",
  "slug": "sql-query-index-optimizer",
  "folder": "coding-development",
  "path": "prompts/coding-development/sql-query-index-optimizer.md"
}
```

### 3. Rebuild and Validate

Run the local build pipeline to regenerate Markdown files and verify data integrity:

```bash
node scripts/generate-tree.js
node scripts/build-registry.js
node scripts/validate-registry.js
node scripts/build-api.js
```

### 4. Open a Pull Request

Submit a pull request against `main`. GitHub Actions will automatically validate that:
- Content hashes are consistent.
- No duplicate slugs or prompt bodies exist.
- All 19 categories pass schema checks.
