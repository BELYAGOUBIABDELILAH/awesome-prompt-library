# Data quality reports

These files are generated from the legacy import and are committed as an auditable snapshot of the Phase 0 migration.

| Report | Meaning |
|---|---|
| `source-inventory.json` | Counts the source names present in the legacy corpus. |
| `duplicates.json` | Groups exact normalized prompt matches. It never deletes records. |
| `near-duplicates.json` | Lists similarity candidates for manual review. It never deletes records. |
| `merge-decisions.json` | Approves only exact matches with identical title, category, and source metadata. Conflicting groups remain `review-required`. |
| `empty-prompts.json` | Lists records whose prompt text is empty. |
| `quarantined-prompts.json` | Lists empty records and exact-content conflicts excluded from the canonical index until a maintainer decides. |

Run `npm run report`, `npm run review:merges`, and `npm run migrate` when intentionally rebuilding the Phase 0 snapshot. Do not remove or merge a record solely because a report groups it with another record; preserve attribution and record the decision first.
