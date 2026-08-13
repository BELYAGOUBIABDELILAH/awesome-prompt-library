# Assess MR Test Coverage

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Review this merge request for test coverage adequacy:
> 
> MR: [LINK or DESCRIPTION]
> Changed files: [LIST]
> 
> ## Coverage Analysis
> For each changed file:
> 1. What new functionality was added?
> 2. Are there corresponding new tests?
> 3. What's the coverage delta (before vs. after)?
> 
> ## Coverage Gap Report
> List untested scenarios:
> - Happy path: is the main success flow tested?
> - Edge cases: empty input, null, zero, max values
> - Error cases: what happens when things go wrong?
> - Boundary conditions: off-by-one, overflow, underflow
> - Integration points: are external calls mocked/stubbed properly?
> 
> ## Test Quality Review
> For existing tests in the MR:
> - Are test names descriptive? (should read like: "given X when Y then Z")
> - Are assertions specific? (avoid assertTrue(result != null))
> - Are tests independent? (no shared mutable state)
> - Are tests fast? (no unnecessary I/O or sleeps)
> 
> ## Verdict
>  Coverage adequate |  Gaps acceptable |  Must add tests before merge
> 
> List the minimum tests that MUST be added before this MR can merge.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)