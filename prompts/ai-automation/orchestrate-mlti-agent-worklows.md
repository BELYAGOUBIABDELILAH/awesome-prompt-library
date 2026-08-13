# Orchestrate Multi-Agent Workflows

**Category:** AI & Automation  
**Source:** GitLab Duo

## Prompt

> Design a multi-agent workflow to accomplish: [GOAL]
> 
> ## Workflow Architecture
> Define each agent in the pipeline:
> 
> Agent 1 — [Name/Role]:
> - Trigger: [what starts it]
> - Input: [data/context it receives]
> - Task: [what it does]
> - Output: [data it produces]
> - Failure handling: [what happens if it fails]
> 
> Agent 2 — [Name/Role]:
> [Same structure]
> 
> [Continue for all agents]
> 
> ## Handoff Protocol
> Specify the exact data format passed between agents:
> - Schema: [JSON / structured text / file]
> - Validation: how does each agent verify it received valid input?
> - Versioning: how do you handle schema changes?
> 
> ## Orchestration Logic
> - Sequential vs. parallel execution
> - Retry logic and backoff strategy
> - Human-in-the-loop checkpoints (where and why)
> - Circuit breakers (when to abort the workflow)
> 
> ## Success Criteria
> Define what "done" looks like for the full pipeline.
> Include monitoring/alerting for each agent's output quality.

---
[← Back to AI & Automation](README.md) · [Main index](../../README.md)