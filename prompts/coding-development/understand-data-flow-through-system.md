# Understand Data Flow Through System

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Trace how data flows through this system:
> 
> System/code: [DESCRIBE or PASTE]
> Starting point: [e.g., user submits a form / API request arrives / event is emitted]
> Ending point: [e.g., data saved to DB / response sent / event consumed]
> 
> ## Data Flow Trace
> Follow the data step by step:
> 
> Step 1: [Where data enters]
>   - Input format: [shape/type]
>   - Validation: [what's checked?]
>   - Transformation: [what changes?]
>   → Passes to: [next step]
> 
> Step 2: [Next component]
>   - What it receives: [shape]
>   - What it does: [transformation]
>   - Output: [new shape]
>   → Passes to: [next step]
> 
> [Continue to final step]
> 
> ## Transformation Summary
> Show a before/after data shape:
> Input: { key: "raw value" }
> Output: { processedKey: "transformed value" }
> 
> ## Where Data Can Be Lost or Corrupted
> - Missing validation at [step]
> - Lossy transformation at [step]
> - Unhandled error at [step] could silently drop data
> 
> ## Debugging Guide
> If data arrives corrupted, check these points in this order:
> 1. [Check X at step Y]
> 2. [Check A at step B]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)