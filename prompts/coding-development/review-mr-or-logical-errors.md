# Review MR for Logical Errors

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Review this code for logical errors and edge cases that automated tools would miss:
> 
> [PASTE CODE or MR diff]
> 
> ## Logic Error Hunt
> 
> ### Off-by-One Errors
> - Array/loop bounds: are indices correct?
> - Comparison operators: < vs <=, > vs >=
> - Pagination calculations
> 
> ### Null / Undefined / Empty Handling
> - What happens if any nullable value is null?
> - Empty collection: does the code handle 0 elements?
> - Empty string vs null — are they treated differently where they should be the same?
> 
> ### Concurrency Bugs
> - Is shared mutable state accessed without synchronization?
> - Are there TOCTOU (time-of-check-time-of-use) race conditions?
> 
> ### Business Logic Errors
> - Does the code actually implement what the spec says?
> - Are calculations correct? (check the math)
> - Are state transitions valid? (can you reach state B from state A?)
> 
> ### Error Propagation
> - Are errors from called functions checked?
> - Is partial failure handled correctly?
> - Are retry attempts bounded?
> 
> ## Bugs Found
> For each bug: describe what would actually happen at runtime with a concrete example input.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)