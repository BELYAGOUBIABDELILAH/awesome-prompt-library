# Review Test Coverage Gaps

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Review test coverage and identify the most important gaps:
> 
> Coverage report: [PASTE COVERAGE REPORT or describe current coverage %]
> Test files: [PASTE or describe existing tests]
> Production code: [PASTE or describe what's being tested]
> 
> ## Coverage Gap Analysis
> 
> ### Current Coverage Summary
> - Line coverage: [X%]
> - Branch coverage: [X%]
> - Function coverage: [X%]
> 
> ### Critical Untested Paths
> 
> ** Must Test (high risk, no coverage)**
> For each:
> - What code path is untested?
> - What could go wrong if this code has a bug?
> - Why is it high risk? (security, data, money, user-facing)
> - Suggested test: [test name and what to assert]
> 
> ** Should Test (medium risk)**
> [List with brief description]
> 
> **⚪ Could Test (low risk, low value)**
> [List — may not be worth the effort]
> 
> ### Coverage by Module
> | Module/File | Coverage | Risk | Priority |
> |---|---|---|---|
> 
> ### Recommended Test Order
> Write tests in this order for maximum risk reduction:
> 1. [Most critical untested path]
> 2. [Second most critical]
> ...
> 
> ### Quick Wins
> Tests that would be easy to write AND cover important paths:
> [List — low effort, high coverage value]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)