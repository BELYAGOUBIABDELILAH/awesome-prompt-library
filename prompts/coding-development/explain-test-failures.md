# Explain Test Failures

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me understand why these tests are failing:
> 
> Failing test output:
> [PASTE TEST OUTPUT / ASSERTION ERRORS]
> 
> Test code:
> [PASTE FAILING TEST]
> 
> Production code being tested:
> [PASTE RELEVANT PRODUCTION CODE]
> 
> Recent changes: [what changed before tests started failing]
> 
> ## Test Failure Analysis
> 
> ### Failure Classification
> First: is this a:
> - **Code bug**: production code has a bug the test correctly caught → fix the code
> - **Test bug**: test is wrong (outdated, incorrect expectation) → fix the test
> - **Environment issue**: test environment is broken → fix the environment
> - **Flaky test**: timing/ordering dependency → make test deterministic
> 
> ### Root Cause
> For each failing test:
> 
> **Test**: [test name]
> **Failure**: [what assertion failed and why]
> **Root cause**: [why the assertion failed — trace through the code]
> **Fix**: [code change or test change needed]
> 
> ### Debugging Steps Taken
> To diagnose this, I would:
> 1. [Step 1 to reproduce]
> 2. [Step 2 to isolate]
> 3. [Step 3 to confirm]
> 
> ### Prevention
> What would prevent this class of test failure in the future?
> [Better test isolation / mocking approach / clearer assertions / test data management]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)