# Break Down Epic into Issues

**Category:** Documentation  
**Source:** GitLab Duo

## Prompt

> Break down this epic into well-scoped, implementable issues:
> 
> Epic title: [EPIC TITLE]
> Epic description: [PASTE EPIC DESCRIPTION]
> Team size: [N developers]
> Sprint length: [1 / 2 weeks]
> 
> ## Decomposition Approach
> 1. Identify the major capabilities the epic delivers
> 2. Split each capability into the smallest valuable deliverable
> 3. Identify dependencies between pieces
> 4. Estimate relative size
> 
> ## Issues Generated
> For each issue, provide:
> 
> ### Issue: [TITLE]
> **Type:** Feature / Task / Bug / Spike
> **Size:** XS (< 2h) / S (2–4h) / M (1d) / L (2–3d) / XL (needs splitting)
> **Depends on:** [Issue N — if applicable]
> **Blocks:** [Issue N — if applicable]
> 
> **Description:**
> As a [user type], I want [action] so that [benefit].
> 
> **Acceptance Criteria:**
> - [ ] [Criterion 1]
> - [ ] [Criterion 2]
> - [ ] [Criterion 3]
> 
> **Technical Notes:**
> [Implementation hints, files to change, APIs to use]
> 
> ## Dependency Map
> [Issue 1] → [Issue 2] → [Issue 3]
> [Issue 4] (independent)
> 
> ## Sprint Plan Suggestion
> Sprint 1: [Issues that can start immediately]
> Sprint 2: [Issues that depend on Sprint 1]
> 
> ## Risks
> [Anything that could block this epic from being delivered on time]

---
[← Back to Documentation](README.md) · [Main index](../../README.md)