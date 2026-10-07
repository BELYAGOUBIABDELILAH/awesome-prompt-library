# Architecture Design Discussion

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Let's discuss and challenge this architectural design:
> 
> Proposed architecture: [DESCRIBE or PASTE DIAGRAM]
> Problem it solves: [BUSINESS PROBLEM]
> Scale requirements: [users, requests/sec, data volume]
> Team: [size and experience level]
> 
> ## Architecture Review
> 
> ### Understanding the Design
> First, let me confirm I understand the proposal:
> [Summarize the architecture in plain language]
> 
> ### Strengths
> What this architecture gets right:
> 1. [Strength with specific reasoning]
> 2. [Strength]
> 3. [Strength]
> 
> ### Failure Mode Analysis
> For each component, what happens when it fails?
> | Component | Failure Mode | Impact | Mitigation |
> |---|---|---|---|
> 
> ### Scaling Concerns
> At 10× current load:
> - Where does this architecture break first?
> - What's the first bottleneck?
> - What changes are needed to scale?
> 
> ### Hidden Complexity
> What complexity is this design introducing that might not be obvious now?
> - Distributed system issues (split-brain, network partition)
> - Operational complexity (deployment, monitoring, debugging)
> - Data consistency challenges
> 
> ### Assumptions to Challenge
> The design assumes [X]. What if [X] is wrong?
> 
> ### Alternative Approaches
> Have you considered [ALTERNATIVE]? It would be simpler because [reason].
> 
> ### My Recommendation
> [Honest assessment: is this the right architecture, or should it be reconsidered?]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)