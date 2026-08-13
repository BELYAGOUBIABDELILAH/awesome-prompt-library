# Understand Error Handling Patterns

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze the error handling patterns throughout this codebase:
> 
> [PASTE CODE or specify scope]
> 
> ## Error Handling Inventory
> Find all error handling code:
> - try/catch blocks
> - .catch() handlers
> - Error middleware
> - Global error handlers
> - Circuit breakers
> 
> ## Pattern Analysis
> 
> ### What's Consistent
> What error handling patterns are used consistently and correctly?
> 
> ### What's Inconsistent
> Where does error handling deviate from the pattern?
> - Some functions throw, others return error objects
> - Inconsistent error logging (sometimes with context, sometimes without)
> - Mixing error styles in the same codebase
> 
> ### What's Missing
> Where are errors not handled at all?
> - Unhandled promise rejections
> - Missing try/catch in async operations
> - Silent failures (error caught but not logged or surfaced)
> 
> ## Error Classification
> Does the codebase distinguish between:
> - Operational errors (expected: invalid input, network timeout)
> - Programming errors (bugs: null reference, type error)
> - Are they handled differently? (they should be)
> 
> ## Recommended Error Handling Standard
> Propose a consistent error handling pattern for this codebase with code examples.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)