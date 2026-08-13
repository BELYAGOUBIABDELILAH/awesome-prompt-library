# Migrate from Legacy Framework

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Plan and execute a migration from the legacy framework to the new one:
> 
> From: [LEGACY FRAMEWORK + VERSION]
> To: [NEW FRAMEWORK + VERSION]
> Codebase: [describe size and complexity]
> Migration goal: [complete rewrite / incremental / strangler fig]
> 
> ## Migration Strategy Recommendation
> Based on the codebase size and risk tolerance:
> Recommended approach: [INCREMENTAL / BIG BANG / STRANGLER FIG]
> Reason: [justification]
> 
> ## Pre-Migration Checklist
> Before writing a single line of new code:
> - [ ] Test coverage of current system ≥ 70% (safety net)
> - [ ] Feature inventory complete (document everything the system does)
> - [ ] Performance baseline measured (to verify we don't regress)
> - [ ] Deployment plan for running both systems in parallel (if incremental)
> 
> ## Concept Mapping
> | Legacy Concept | New Framework Equivalent | Notes |
> |---|---|---|
> | [Routes/Controllers] | [Equivalent] | [Differences] |
> | [ORM/Models] | [Equivalent] | [Differences] |
> | [Auth] | [Equivalent] | [Differences] |
> | [Middleware] | [Equivalent] | [Differences] |
> 
> ## Migration Sequence
> Order matters — migrate in this sequence to minimize breakage:
> 1. [Foundation: config, env, DI container]
> 2. [Data layer: models, migrations]
> 3. [Business logic: services]
> 4. [API layer: controllers/routes]
> 5. [UI: templates/views]
> 6. [Auth and sessions]
> 
> ## Risk Mitigation
> - Feature flags to switch between old and new implementations
> - Parallel running period: [N weeks]
> - Rollback procedure: [how to revert quickly]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)