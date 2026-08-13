# Map Component Dependencies

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Map the dependency relationships between components in this codebase:
> 
> Scope: [MODULE / SERVICE / FULL REPO]
> 
> ## Dependency Map
> For each major component/module:
> - Direct dependencies (what it imports/requires)
> - Direct dependents (what depends on it)
> - Transitive dependencies (key indirect dependencies)
> 
> ## Dependency Graph (Text Format)
> ComponentA
>   ├── ComponentB (direct)
>   │   ├── ComponentD (transitive)
>   │   └── ComponentE (transitive)
>   └── ComponentC (direct)
> 
> ## Circular Dependencies
> List any circular dependency chains and explain why they're problematic.
> 
> ## Blast Radius Analysis
> If I change [SPECIFIC COMPONENT]:
> - What breaks directly?
> - What might break transitively?
> - Which tests need to be run?
> - Which teams/services need to be notified?
> 
> ## Architecture Health
> - Which components are too tightly coupled?
> - Which components have too many dependents (fragile core)?
> - Which components are isolated and safe to change?
> 
> ## Recommended Decoupling
> Suggest 2–3 specific refactors to improve dependency health.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)