# Analyze Stack Trace

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze this stack trace and help me find the root cause:
> 
> [PASTE STACK TRACE]
> 
> Language/Runtime: [SPECIFY]
> Context: [what the user was doing / what triggered this]
> 
> ## Stack Trace Analysis
> 
> ### Error Type and Message
> - What kind of error is this? (NullPointerException, TypeError, etc.)
> - What does the error message literally mean?
> - Translate the error into plain English.
> 
> ### Origin Point
> - At which line did the error originate?
> - What was the code trying to do at that exact moment?
> 
> ### Call Chain (Bottom-up)
> Reading the stack trace from bottom (origin) to top (propagation point):
> - Frame N (origin): [what happened here]
> - Frame N-1: [how it propagated]
> - ...
> - Frame 1 (top): [where it surfaced to the user]
> 
> ### Root Cause
> The actual root cause is: [explanation]
> Not to be confused with: [the symptom, which is different]
> 
> ### Fix
> Most likely fix:
> [code example]
> 
> Alternative fixes if that doesn't work:
> 1. [alternative]
> 2. [alternative]
> 
> ### Prevention
> How to prevent this class of error in the future.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)