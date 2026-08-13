<div align="center">

# Contributing

**axiom** is a public prompt registry with a reviewable contribution path.<br/>
Every accepted record must carry enough context for another person to inspect and reproduce its intended use.

</div>

---

## Before you start

- Check existing prompts to avoid duplicates — use `Ctrl+F` on the [categories page](README.md#-categories) or run:
  ```bash
  grep -r "your prompt title" prompts/
  ```
- Adding **1 prompt** → open a PR directly
- Adding **10+ prompts** → open an issue first to coordinate

For the current review workflow, start with the [community guidance](COMMUNITY.md) and use the structured [prompt submission form](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/issues/new?template=prompt-submission.yml) when you are proposing a new record. Reports about duplicates, provenance, stale content, safety, or missing tests should use the [record report form](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/issues/new?template=record-report.yml).

Submitting a prompt does not make it approved, tested, verified, or recommended. Those states require reviewable evidence and are maintained separately from the contribution itself.

---

## How to contribute

### 1. Fork & clone

```bash
  git clone https://github.com/BELYAGOUBIABDELILAH/open-prompt-library.git
cd open-prompt-library
```

### 2. Add your prompt file

Create a new `.md` file inside the right category folder:
