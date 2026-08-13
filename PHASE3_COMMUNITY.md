# Phase 3 — Community loop

This pull request adds the repository-side operating layer for a reviewable community loop.

## Included

- Structured prompt-submission issue form requiring use case, complete prompt, variables, source or original-work statement, language, output format, model or runtime tested, and safety checks.
- Structured record-report issue form covering duplicates, provenance, metadata, stale instructions, unsafe content, and missing reproducible tests.
- Community guide defining `needs-review`, `duplicate-candidate`, `needs-test`, `approved`, `verified`, and `archived` states.
- Explicit provenance, licensing, privacy, and secret-handling expectations.
- English, French, and Arabic contribution guidance.
- Monthly curation cadence for reviewing duplicates, promoting evidence-backed states, archiving stale records, and publishing a short changelog.

## What this does not claim

The repository does not create ratings, testimonials, usage counts, contributor activity, or “battle-tested” claims. A workflow state is not a score. The web registry quality panel reports only facts present in the canonical index.

## Maintainer setup after merge

Confirm or create the labels `needs-review`, `duplicate-candidate`, `needs-test`, and `approved`. Then use the monthly cadence in `COMMUNITY.md` to triage issues and publish changes. The Phase 3 web experience is delivered in the separate Open Prompt Registry checkpoint.
