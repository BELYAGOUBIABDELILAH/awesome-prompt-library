# Remove Dead Code

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Identify and remove dead code from the following codebase/file:
> 
> [PASTE CODE or describe the scope]
> 
> ## Dead Code Audit
> Find and categorize:
> 
> 1. Unused functions/methods
>    - Defined but never called
>    - Only called by other dead code (transitive)
> 
> 2. Unused variables and imports
>    - Declared but never read
>    - Imported but never used
> 
> 3. Unreachable code
>    - Code after return/throw/break
>    - Conditions that can never be true
>    - Branches that are always the same
> 
> 4. Commented-out code blocks
>    - Old implementations
>    - Debugging statements
>    - TODO blocks older than [N] months
> 
> 5. Deprecated code
>    - Functions marked @deprecated with no callers
>    - Feature flags that are permanently enabled/disabled
> 
> ## Removal Plan
> For each item: Confirm it's safe to remove (check for dynamic invocation, reflection, exports).
> 
> ## Cleaned Code
> Provide the code with dead sections removed.
> Show: lines removed count, % reduction in file size.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)