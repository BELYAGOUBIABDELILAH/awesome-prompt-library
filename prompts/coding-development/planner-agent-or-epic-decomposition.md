# Planner Agent for Epic Decomposition

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> As a planning agent, decompose this epic into a fully actionable backlog:
> 
> Epic: [EPIC TITLE AND DESCRIPTION]
> Team velocity: [N story points per sprint]
> Sprint length: [N weeks]
> Deadline: [DATE or N sprints]
> Team: [N developers + N designers + N QA]
> 
> ## Decomposition Output
> 
> ### Epic Map
> Draw the complete breakdown:
> Epic → Features → Stories → Tasks
> 
> ### Feature Breakdown
> For each feature in the epic:
> 
> **Feature: [NAME]**
> Value delivered: [what users can do when this is done]
> Dependencies: [other features that must come first]
> 
> Stories:
> 1. [Story: as a user, I can...]
>    Acceptance criteria: [3–5 specific, testable criteria]
>    Story points: [estimate]
>    Technical tasks: [implementation subtasks]
> 
> 2. [Story...]
> 
> ### Dependency Map
> [Story 1] → must complete before → [Story 3]
> [Story 2] → can run in parallel with → [Story 4]
> 
> ### Critical Path
> The minimum set of stories that must complete for the epic to deliver core value:
> [Story 1] → [Story 3] → [Story 7]
> Critical path duration: [N sprints]
> 
> ### Sprint Plan
> Sprint 1: [stories — N points]
> Sprint 2: [stories — N points]
> Sprint 3: [stories — N points]
> 
> ### Risks
> [Risk that could delay the epic] — mitigation: [action]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)