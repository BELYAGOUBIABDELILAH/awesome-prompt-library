# Trace Function Usage Across Codebase

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Trace all usage of the following function/method across the entire codebase:
> 
> Target: [FUNCTION/METHOD NAME]
> Defined in: [FILE:LINE]
> 
> ## Complete Usage Map
> File by file, show every place this is used:
> 
> ### Direct Calls
> [file path]:[line] in [calling function]
>   Called with: [args pattern]
>   Return value used: yes/no
>   Context: [brief description of why it's called here]
> 
> ### Indirect Usage
> - Re-exported from: [files that re-export this]
> - Aliased as: [any aliases]
> - Passed as callback to: [higher-order usage]
> 
> ## Usage Pattern Analysis
> From all the call sites:
> - Most common argument patterns
> - Edge case usages (unusual args, unusual context)
> - Places where return value is ignored (potential bugs)
> 
> ## Refactoring Safety Report
> - Total call sites: [N]
> - Files affected: [N]
> - Test coverage: [% of call sites have tests]
> - Safe to rename/change signature: YES / RISKY / NO (with reason)

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)