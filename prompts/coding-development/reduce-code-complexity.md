# Reduce Code Complexity

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Reduce the complexity of the following code:
> 
> [PASTE CODE]
> 
> ## Complexity Metrics (Current)
> - Cyclomatic complexity score
> - Cognitive complexity score
> - Max nesting depth
> - Function length (lines)
> - Number of parameters
> 
> ## Complexity Issues Found
> List each issue:
> - Deep nesting (> 3 levels)
> - Long functions (> 20 lines)
> - Too many parameters (> 4)
> - Mixed abstraction levels
> - Complex boolean conditions
> - Early returns missing
> 
> ## Refactoring Plan
> For each issue, apply the appropriate technique:
> - Extract method/function
> - Replace nested conditionals with guard clauses
> - Introduce explaining variables
> - Split responsibilities into separate functions
> - Replace magic numbers with named constants
> 
> ## Refactored Code
> Provide the simplified version. Each function should:
> - Do exactly one thing
> - Be testable in isolation
> - Have a name that explains its purpose
> 
> Target: cyclomatic complexity ≤ 5 per function.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)