# Design New Feature Architecture

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Design the architecture for this new feature:
> 
> Feature: [NAME]
> Description: [WHAT IT DOES]
> Users: [WHO USES IT AND HOW OFTEN]
> Performance requirements: [latency, throughput, availability]
> 
> ## Feature Architecture
> 
> ### Component Overview
> List every component that needs to be built or modified:
> 
> | Component | Type | New/Modified | Purpose |
> |---|---|---|---|
> | [Component] | [Service/UI/DB/Job] | New | [What it does] |
> 
> ### Data Flow
> 1. User triggers [action]
> 2. [Component A] receives request and [does X]
> 3. [Component B] is called to [do Y]
> 4. Data is stored in [WHERE]
> 5. Response returns [WHAT] to user
> 
> ### Integration Points
> - Integrates with: [existing services/APIs]
> - New dependencies: [external services needed]
> - Events emitted: [for other services to consume]
> 
> ### Database Changes
> - New tables: [list with purpose]
> - Modified tables: [list with changes]
> - Migrations required: [yes/no]
> - Indexes needed: [list]
> 
> ### API Changes
> - New endpoints: [list]
> - Modified endpoints: [list]
> - Breaking changes: [yes/no]
> 
> ### Scalability Design
> How does this feature scale to [10× / 100× current load]?
> - Stateless components: [which ones]
> - Caching strategy: [what gets cached]
> - Async processing: [what can be background jobs]
> 
> ### Rollout Plan
> - Feature flag: [name]
> - Rollout stages: [1% → 10% → 50% → 100%]
> - Rollback trigger: [what metric triggers a rollback]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)