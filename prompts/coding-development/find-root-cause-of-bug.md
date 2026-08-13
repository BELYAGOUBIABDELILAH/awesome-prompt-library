# Find Root Cause of Bug

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me find the root cause of this bug using the 5 Whys method:
> 
> Bug description: [WHAT IS HAPPENING]
> Relevant code: [PASTE CODE]
> Error output: [PASTE ERROR if any]
> 
> ## Symptom vs. Root Cause
> First: identify the symptom (what we observe) vs the actual problem (why it's happening).
> Symptom: [what the user or test sees]
> Root cause direction: [initial hypothesis]
> 
> ## 5 Whys Analysis
> Why 1: Why is [SYMPTOM] happening?
> → Because [REASON 1]
> 
> Why 2: Why is [REASON 1] happening?
> → Because [REASON 2]
> 
> Why 3: Why is [REASON 2] happening?
> → Because [REASON 3]
> 
> Why 4: Why is [REASON 3] happening?
> → Because [REASON 4]
> 
> Why 5: Why is [REASON 4] happening?
> → ROOT CAUSE: [REASON 5]
> 
> ## Root Cause Classification
> - Code bug (logic error)
> - Missing validation
> - Race condition
> - Environment/config issue
> - Incorrect assumption about external behavior
> - Missing test that would have caught this
> 
> ## Fix
> Address the root cause, not just the symptom:
> [Code fix]
> 
> ## Regression Test
> Write a test that would have caught this bug: [test code]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)