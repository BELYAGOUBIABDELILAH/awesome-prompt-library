# Investigate Performance Bottleneck

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me find and fix a performance bottleneck:
> 
> Symptom: [SLOW RESPONSE TIMES / HIGH CPU / HIGH MEMORY / etc.]
> Context: [endpoint / function / batch job / query]
> Baseline: [current performance — e.g., "P99 latency is 8 seconds, should be < 500ms"]
> 
> ## Profiling Strategy
> Before optimizing, we measure. Here's what to profile:
> 
> 1. CPU profile — which functions consume the most CPU time?
> 2. Memory profile — what allocations are happening in the hot path?
> 3. I/O profile — are we blocking on disk or network?
> 4. Database profile — which queries are slowest? Any N+1 patterns?
> 
> ## Bottleneck Identification
> Based on the code/context provided:
> 
> ### Likely Hot Path
> [Code section that executes most frequently]
> 
> ### Suspected Bottleneck
> [Specific operation that is probably slow and why]
> 
> ### Evidence
> [What in the code or symptoms points to this]
> 
> ## Optimization Plan
> Fix in this order (highest impact first):
> 1. [Optimization 1] — estimated gain: [X%]
> 2. [Optimization 2] — estimated gain: [X%]
> 3. [Optimization 3] — estimated gain: [X%]
> 
> ## Benchmark
> Before and after benchmark setup:
> [Code or commands to measure improvement]
> 
> IMPORTANT: Never optimize without measuring first. Premature optimization is the root of all evil.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)