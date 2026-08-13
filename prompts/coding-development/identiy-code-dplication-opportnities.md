# Identify Code Duplication Opportunities

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Scan this codebase for code duplication opportunities:
> 
> Scope: [FILE / MODULE / ENTIRE REPO]
> 
> ## Duplication Detection
> 
> ### Exact Duplicates
> Code blocks that are copied verbatim (or nearly so).
> Show: both locations, line count duplicated, suggested shared utility name.
> 
> ### Semantic Duplicates
> Different code that accomplishes the same thing.
> Show: both approaches, why they're equivalent, recommended canonical approach.
> 
> ### Structural Duplicates
> Same pattern repeated across multiple files (e.g., 10 controllers all doing the same auth check).
> Show: the pattern, all occurrences, proposed abstraction.
> 
> ## Consolidation Opportunities
> Ranked by impact (lines saved × number of occurrences):
> 
> 1. [Pattern name] — X occurrences, Y lines each → save Z lines
>    Proposed abstraction: [name + signature]
> 
> 2. [Pattern name] — ...
> 
> ## Consolidation Risk
> For each opportunity:
> - Risk level: Low / Medium / High
> - What could go wrong if we consolidate incorrectly?
> - Recommended approach to refactor safely (with tests)

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)