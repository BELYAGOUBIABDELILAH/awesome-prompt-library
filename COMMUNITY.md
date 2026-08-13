# Community loop

Open Prompt Library is maintained as a **reviewable registry**, not a popularity contest. Community contributions help improve usefulness, provenance, multilingual coverage, and reproducibility. A prompt is not described as tested, verified, or recommended unless the repository contains the evidence for that state.

## How a contribution moves through the registry

| State                 | Meaning                                                                                    | Who can move it forward |
| --------------------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| `needs-review`        | A submission or report has been received and has not yet been assessed.                    | Maintainer triage       |
| `duplicate-candidate` | The record may already exist or may be substantially equivalent to another record.         | Maintainer or reviewer  |
| `needs-test`          | The use case is clear, but reproducible model/input/output evidence is missing.            | Maintainer or reviewer  |
| `approved`            | The record meets the publication requirements and can enter the canonical index.           | Maintainer review       |
| `verified`            | The record has explicit test or provenance evidence recorded in the repository.            | Maintainer review       |
| `archived`            | The record is no longer actively maintained, but its history is retained for auditability. | Maintainer review       |

These states are workflow signals, not ratings. The project does not fabricate stars, reviews, usage counts, testimonials, or “community tested” claims.

## Submit a prompt

Use the [prompt submission form](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/issues/new?template=prompt-submission.yml). A useful submission explains the task it supports, includes the complete prompt, names its variables, records at least one model or runtime tested, and provides a source URL or an explicit original-work statement. Do not include API keys, private company data, personal data, confidential instructions, or user conversations.

Before submitting, search the registry for an existing record and explain how the proposal differs when a similar prompt exists. Prefer one focused prompt per issue so that provenance and review decisions remain traceable.

## Report a record

Use the [record report form](https://github.com/BELYAGOUBIABDELILAH/open-prompt-library/issues/new?template=record-report.yml) for duplicates, inaccurate metadata, missing provenance, stale instructions, unsafe content, or records that need a reproducible test. Reports should include the stable ID or slug and enough public evidence for another maintainer to reproduce the concern.

## Review cadence

Maintainers should triage new submissions and reports on a predictable cadence. A monthly curation pass should review duplicate candidates, promote records only when evidence supports the new state, archive stale records without deleting their history, and publish a short changelog. The Phase 3 web registry reports counts by state, provenance, and language from the canonical index; it must not imply quality from volume alone.

## Language and accessibility

English, French, and Arabic contributions are welcome. Contributors should label the prompt language accurately and keep variable names readable. Submissions must remain understandable without color alone, and reviewers should describe evidence in text so decisions are accessible to screen readers and downstream tools.
