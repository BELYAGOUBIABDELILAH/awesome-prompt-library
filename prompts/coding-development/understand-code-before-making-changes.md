# Understand Code Before Making Changes

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> I'm about to modify this code and need to fully understand it first:
> 
> Code to modify: [PASTE CODE]
> Planned change: [DESCRIBE WHAT YOU WANT TO DO]
> 
> ## Pre-Change Analysis
> 
> ### What This Code Does
> Explain the current behavior completely — including the non-obvious parts.
> 
> ### Dependencies
> - What does this code depend on? (functions, services, state)
> - What depends on this code? (who calls it, what uses its output)
> - External dependencies (APIs, DB, config) that affect behavior?
> 
> ### Invariants and Assumptions
> What assumptions does this code make that must remain true?
> - Input constraints
> - State preconditions
> - Ordering requirements
> - Thread safety assumptions
> 
> ### My Planned Change — Risk Analysis
> Given that I want to [PLANNED CHANGE]:
> - What could break?
> - Which existing tests would fail?
> - Which tests are missing that should exist before I change this?
> - Is there a safer incremental approach?
> 
> ### Recommended Approach
> Step-by-step plan to make the change safely:
> 1. Write tests for current behavior (if missing)
> 2. [Change step 1]
> 3. [Change step 2]
> 4. Verify no regression

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)