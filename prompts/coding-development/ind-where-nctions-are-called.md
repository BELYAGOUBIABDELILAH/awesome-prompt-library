# Find Where Functions Are Called

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Find all call sites for the following function/method:
> 
> Function name: [FUNCTION NAME]
> Defined in: [FILE PATH]
> 
> ## Direct Call Sites
> List every location where this function is called:
> | File | Line | Caller function | Arguments passed |
> 
> ## Call Chain (Upstream)
> Trace who calls the callers — build the call graph 2–3 levels up:
> Function A → calls our function
> Function B → calls Function A → calls our function
> 
> ## Usage Patterns
> From the call sites, identify:
> - What arguments are typically passed?
> - Are there any unusual call patterns?
> - Is it called synchronously or asynchronously?
> - Is the return value used? Ignored?
> 
> ## Refactoring Impact
> If I change the signature of this function:
> - How many files need updating?
> - Which callers would require the most work?
> - Are any call sites in tests only (lower risk)?
> 
> ## Dynamic Invocation Check
> Are there any places where this function might be called dynamically?
> (eval, reflection, string-based dispatch, event handlers)
> 
> Safe to refactor: YES / NO / NEEDS INVESTIGATION

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)