# Debug Race Conditions

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me identify and fix race conditions in this code:
> 
> [PASTE CODE]
> 
> Symptoms: [describe the intermittent behavior — what happens and how often]
> Concurrency model: [threads / async/await / event loop / goroutines]
> 
> ## Race Condition Analysis
> 
> ### Shared Mutable State
> Identify all state that is:
> - Written by multiple concurrent operations
> - Read and then written (read-modify-write patterns)
> - Accessed without synchronization
> 
> ### TOCTOU Patterns (Time-of-Check-Time-of-Use)
> Find places where:
> 1. We check a condition (is file present? is user logged in?)
> 2. Something could change between the check and the use
> 3. We then act on the (now potentially stale) result
> 
> ### Async Ordering Assumptions
> Find places where the code assumes operations complete in a specific order but doesn't enforce it.
> 
> ### Likely Race Condition
> Based on the code: [specific scenario]
> When thread/coroutine A does [X] at the same time thread/coroutine B does [Y], then [Z happens incorrectly].
> 
> ## Fix Options
> Option 1 (simplest): [mutex/lock/synchronization approach]
> Option 2 (concurrent-safe): [immutable data / message passing approach]
> Option 3 (architectural): [eliminate shared state entirely]
> 
> ## Reproduction Test
> Write a test that reliably triggers the race condition.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)