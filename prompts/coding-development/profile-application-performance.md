# Profile Application Performance

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze this application performance profile:
> 
> Profile data: [PASTE FLAMEGRAPH / PROFILER OUTPUT / TRACE DATA]
> Or describe the performance issue: [DESCRIPTION]
> 
> Application type: [Web API / Batch job / Real-time service]
> Language/Runtime: [SPECIFY]
> Profiling tool used: [py-spy / async-profiler / Chrome DevTools / etc.]
> 
> ## Profile Analysis
> 
> ### Hot Path Identification
> From the profile, the most time is spent in:
> 1. [Function/method] — [X% of total time] — in [FILE:LINE]
> 2. [Function/method] — [X% of total time]
> 3. [Function/method] — [X% of total time]
> 
> ### Bottleneck Classification
> For each hot spot, classify as:
> - CPU-bound: computation that can be optimized or parallelized
> - I/O-bound: waiting on disk, network, or database
> - Memory-bound: excessive allocation/GC pressure
> - Lock contention: waiting for locks/mutexes
> 
> ### Optimization Opportunities
> 
> #### High Impact (fix these first)
> 1. [Optimization] — estimated improvement: [X%]
>    How: [specific change]
> 
> 2. [Optimization] — estimated improvement: [X%]
>    How: [specific change]
> 
> #### Medium Impact
> [...]
> 
> #### Low Impact (don't bother yet)
> [...]
> 
> ## Optimization Plan
> Total expected improvement after fixing high-impact items: [X% reduction in latency / throughput increase]
> 
> ## Re-profiling
> After optimizations: profile again to confirm improvement and find the new bottleneck.
> Measure: [specific metric to track improvement]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)