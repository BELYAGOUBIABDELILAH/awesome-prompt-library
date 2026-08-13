# Suggest Code Improvements in MR

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Provide actionable improvement suggestions for this MR:
> 
> [PASTE CODE or MR DIFF]
> 
> For each suggestion, use this format:
>  Location: [file:line]
>  Suggestion: [what to change]
>  How: [specific code change]
>  Benefit: [readability / performance / maintainability / security]
> ⚡ Priority: High / Medium / Low
> 
> ## Category: Code Quality
> Suggest improvements for:
> - Names that could be clearer
> - Functions that do too much
> - Missing abstractions
> - Repeated patterns
> 
> ## Category: Performance
> Suggest improvements for:
> - Unnecessary work in hot paths
> - Missing caching opportunities
> - Inefficient data structures
> 
> ## Category: Maintainability
> Suggest improvements for:
> - Hard-coded values that should be configurable
> - Missing documentation
> - Tight coupling that limits testability
> 
> ## What's Done Well
> End with 2–3 specific things the author did right. Code review is a teaching tool, not a criticism session.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)