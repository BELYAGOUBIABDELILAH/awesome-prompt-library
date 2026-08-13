# axiom release checklist

This repository is the canonical source for the axiom prompt index. The release surface is read-only and evidence-first: records are published from the canonical v1 JSONL index, while uncertain provenance and review states remain visible.

## Verification completed

| Area | Result |
| --- | --- |
| Canonical validation | Passed: 2,101 records, unique IDs, slugs, and content hashes |
| Source synchronization | Passed: 3,467 legacy records represented by 2,101 canonical records and 5 quarantined records |
| Deterministic generation | Passed: 2,101 prompt files across 19 categories |
| Integrity tests | Passed |
| Repository diff check | Passed after the final quality run |
| Web routes and assets | Passed: 4 routes and 2 canonical assets returned successfully |
| External links | Passed: GitHub repository, issue forms, contribution guide, badges, fonts, and clone URL |

## Review state

The source repository has two open pull requests: Phase 0 establishes the trustworthy registry foundation, and Phase 3 adds the community operating layer. The axiom web release is maintained separately in the Open Prompt Registry project checkpoint and consumes the canonical registry asset.

## Before publishing

Maintainers should merge Phase 0 first, then rebase or merge the stacked Phase 3 community pull request. Confirm the repository labels referenced by the issue forms and run `npm run quality` after each merge. Do not merge generated artifacts from an unvalidated source change.

The current build emits a non-blocking Vite bundle-size warning in the web project. It does not prevent release; code splitting can be handled as a later performance task.
