# Explain MR Impact on Performance

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze the performance impact of this merge request:
> 
> MR diff: [PASTE or DESCRIBE CHANGES]
> 
> ## Performance Analysis
> 
> ### Algorithmic Complexity
> - Did any function's time complexity change? (Better or worse Big-O?)
> - Were any O(n²) or worse patterns introduced?
> - Are there nested loops over large collections?
> 
> ### Database Impact
> - New queries added? Are they indexed?
> - N+1 query patterns introduced?
> - Missing pagination on result sets?
> - Schema changes that affect query plans?
> 
> ### Memory Impact
> - Are large objects allocated unnecessarily?
> - Are there memory leaks (event listeners, closures, references)?
> - Increased allocation per request?
> 
> ### Network Impact
> - New external API calls in hot paths?
> - Missing caching for repeated calls?
> - Response payload size changes?
> 
> ### Concurrency Impact
> - New shared mutable state?
> - Missing synchronization?
> - Potential deadlocks?
> 
> ## Severity Rating
>  No performance concern
>  Worth monitoring in production
>  Must benchmark before merging
> 
> ## Benchmark Recommendation
> If yellow or red: describe the specific benchmark to run before this MR merges.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)