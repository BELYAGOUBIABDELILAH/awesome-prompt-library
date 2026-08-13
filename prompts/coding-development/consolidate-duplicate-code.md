# Consolidate Duplicate Code

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze the following code for duplication and apply DRY principles:
> 
> [PASTE CODE]
> 
> ## Step 1: Identify Duplicates
> List every instance of duplicated logic:
> - Exact duplicates (copy-pasted code)
> - Near-duplicates (same logic, different variable names)
> - Structural duplicates (same pattern, different implementations)
> 
> For each: show both locations and the % similarity.
> 
> ## Step 2: Refactoring Plan
> For each duplication group:
> 1. Proposed abstraction name and location
> 2. Parameters needed to generalize it
> 3. Impact: which files/functions will change?
> 4. Risk level: Low / Medium / High (with reason)
> 
> ## Step 3: Refactored Code
> Provide the complete refactored version:
> - New shared utility/component
> - Updated call sites
> - Before/after line count comparison
> 
> ## Step 4: Verification
> List tests that should pass before and after the refactor to confirm behavior is preserved.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)