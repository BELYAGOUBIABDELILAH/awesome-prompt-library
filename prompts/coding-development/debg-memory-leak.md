# Debug Memory Leak

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me find and fix a memory leak in this code:
> 
> [PASTE SUSPECTED CODE]
> 
> Language/Runtime: [SPECIFY]
> Symptoms: [memory growing over time / OOM crashes / slow GC]
> When it started: [after deploying X / always existed]
> 
> ## Memory Leak Investigation
> 
> ### Common Leak Patterns — Check Each
> 1. **Event listeners not removed**
>    - Are addEventListener/subscribe calls matched with removeEventListener/unsubscribe?
>    - Are listeners attached in constructors removed in destructors?
> 
> 2. **Closures holding references**
>    - Are callbacks capturing large objects in their closure scope?
>    - Are timers (setInterval, setTimeout) cleared when no longer needed?
> 
> 3. **Unbounded caches or collections**
>    - Are there Maps, Sets, or arrays that grow without bound?
>    - Is there a max size / eviction policy?
> 
> 4. **Circular references**
>    - Do objects reference each other preventing GC?
>    - (Usually only an issue in older engines or C/C++)
> 
> 5. **Module-level state**
>    - Are there module-level arrays or maps that accumulate entries?
> 
> ## Diagnosis Steps
> 1. Take a heap snapshot before and after [N] operations
> 2. Compare: what object types increased most?
> 3. Find the GC root holding those objects
> 
> ## Likely Culprit in Your Code
> Based on what I see: [specific finding]
> 
> ## Fix
> [Code change with before/after]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)