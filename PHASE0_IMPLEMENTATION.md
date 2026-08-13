# Phase 0 implementation report

## Outcome

Phase 0 has been implemented on the branch `phase0-trustworthy-registry` and submitted as [pull request #4](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/pull/4). The branch does not modify `main`; it establishes a canonical, reviewable registry while preserving the original import for auditability.

## Registry snapshot

| Measure | Result |
|---|---:|
| Legacy records retained for audit | 3,467 |
| Canonical v1 records | 2,101 |
| Exact duplicate groups | 19 |
| Duplicate records beyond canonical candidates | 1,363 |
| Approved identical-metadata merge groups | 17 |
| Conflicting groups requiring review | 2 |
| Quarantined records | 5 |
| Source names in registry | 5 |
| Categories | 19 |
| Published unique IDs | 2,101 |
| Published unique slugs | 2,101 |
| Published unique content hashes | 2,101 |

## Main changes

The branch adds `data/prompts/index.jsonl` as the canonical JSONL registry. Each record now has an immutable content-derived ID, a normalized unique slug, preserved legacy slugs, a revision number, a content hash, source IDs, provenance status, lifecycle status, and explicit prompt metadata fields. The original `data/prompts.json` remains unchanged as the legacy audit source.

The branch adds `data/sources.json`, prompt and source JSON Schemas, deterministic reports under `reports/`, migration and validation scripts, a source-synchronization check, and integrity tests. Ambiguous duplicate groups and empty records are quarantined rather than silently discarded. The README now consumes the canonical index and its generated category section is marker-scoped and idempotent.

The former workflow that committed generated files directly to `main` has been replaced on this branch by read-only verification. A pull-request workflow is included for schema, provenance, source-sync, generation, and stale-output checks. GitHub currently shows no checks for the new workflow because the workflow file is introduced by this pull request and the default branch still contains the previous workflow configuration; after merge, the new workflow will be registered from `main`.

## Local verification

The following commands pass locally:

```text
npm run bootstrap
npm run quality
node scripts/validate-index.js
node scripts/test-integrity.js
```

A second generator run produces no README diff and exactly one category start marker and one category end marker. The source-sync check confirms that every non-empty legacy prompt is represented either in the canonical index or in the quarantine report.

## Maintainer decisions before merge

The maintainer should review `reports/merge-decisions.json` and `reports/quarantined-prompts.json`. The five source entries should be connected to canonical URLs and licence information where evidence is available. The two conflicting duplicate groups should receive an explicit attribution or context decision. No hosted API, MCP server, analytics, account system, prompt execution service, or user-submission form is included in Phase 0.

## Proposed Phase 1 handoff

After pull request review and merge, Phase 1 should introduce a read-only search layer over `data/prompts/index.jsonl`, starting with full-text search, filters for category and lifecycle/provenance state, and an explicit “copy prompt” flow. The API or MCP surface should expose stable IDs and revisions, not file paths or mutable slugs. User accounts, ratings, telemetry, prompt execution, and hosted contributions should remain out of scope until the privacy and moderation policies are expanded.
