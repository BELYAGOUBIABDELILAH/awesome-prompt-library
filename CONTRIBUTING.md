<div align="center">

# Contributing

**Open Prompt Library** is community-driven and always open to new prompts.<br/>
Every contribution — big or small — makes this resource better for everyone.

</div>

---

## Before you start

- Check existing prompts to avoid duplicates — use `Ctrl+F` on the [categories page](README.md#-categories) or run:
  ```bash
  grep -r "your prompt title" prompts/
  ```
- The registry automatically deduplicates on content hash — submitting identical prompt text will be caught and flagged at build time.
- The canonical machine-readable view is [`data/registry.jsonl`](data/registry.jsonl). It assigns stable IDs and records duplicate, source, and review metadata.
- Adding **1 prompt** → open a PR directly
- Adding **10+ prompts** → open an issue first to coordinate

---

## How to contribute

### 1. Fork & clone

```bash
git clone https://github.com/YOUR_USERNAME/open-prompt-library.git
cd open-prompt-library
```

### 2. Add your prompt file

Create a new `.md` file inside the right category folder.

For new submissions, include the following information in the pull request description so the prompt can become a useful registry record rather than an anonymous text dump:

| Required information | What to provide |
|---|---|
| Intended task | What problem the prompt solves and who should use it. |
| Source and license | Original URL or "original work", plus the reuse license when known. |
| Variables | Names, defaults, and expected input format for placeholders. |
| Example | A short example input and the properties a good output should contain. |
| Limitations | Known model, language, safety, or context limitations. |

### 3. Rebuild the index

The generated files should not be edited by hand. After changing the source export, run:

```bash
node scripts/build-registry.js
node scripts/validate-registry.js
node scripts/generate-tree.js
```

The validation workflow rejects stale generated registry files, duplicate stable IDs, broken content hashes, missing source references, and inconsistent counts.
