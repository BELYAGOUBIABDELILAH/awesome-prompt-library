# Debugging Session Assistant

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Let's debug this complex issue systematically. I'll track our hypotheses and test results.
> 
> ## Problem Statement
> Bug: [DESCRIBE EXACTLY WHAT IS HAPPENING]
> Expected: [WHAT SHOULD HAPPEN]
> Frequency: [always / intermittent / under specific conditions]
> First observed: [when]
> Affected: [users / environments / data]
> 
> ## Debugging Log (I'll maintain this)
> 
> ### Hypothesis 1
> Theory: [what might be causing this]
> Evidence for: [what supports this theory]
> Evidence against: [what contradicts it]
> Test: [specific thing to try]
> Result: [FILL IN AFTER TESTING]
> Status: ✅ Confirmed / ❌ Ruled out /  Partial
> 
> ### Hypothesis 2
> [same format]
> 
> ## After Each Test
> Tell me the result and I'll:
> 1. Update the hypothesis log
> 2. Generate the next most likely hypothesis
> 3. Suggest the next specific test
> 
> ## Current Best Theory
> [updated after each round of testing]
> 
> ## Minimum Reproduction Case
> Let's work together to write the smallest possible code that reproduces the bug reliably.
> 
> Start: Tell me what you've already tried and what you observed.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)