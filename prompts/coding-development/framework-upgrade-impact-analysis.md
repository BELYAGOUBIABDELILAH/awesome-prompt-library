# Framework Upgrade Impact Analysis

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze the impact of upgrading this framework/dependency:
> 
> Current version: [VERSION]
> Target version: [VERSION]
> Framework: [NAME]
> Codebase size: [estimated N files / N KLOC]
> 
> ## Breaking Change Analysis
> 
> ### Official Breaking Changes
> List all breaking changes between current and target version:
> [From changelog / migration guide]
> 
> For each breaking change:
> - **Change**: [what changed]
> - **Our code affected**: [yes/no → where]
> - **Migration action**: [what to change]
> - **Effort**: [hours/days]
> 
> ### Deprecated Features We Use
> - Feature: [NAME] — deprecated in [version] — removed in [version]
> - Our usage: [N occurrences in N files]
> - Replacement: [what to use instead]
> 
> ### New Features We Should Adopt
> After upgrading, take advantage of:
> 1. [Feature]: [benefit for us]
> 2. [Feature]: [benefit for us]
> 
> ## Migration Plan
> 
> ### Phase 1: Preparation (before upgrade)
> - [ ] Add tests covering areas that will change
> - [ ] Update CI to test against new version
> - [ ] Review migration guide completely
> 
> ### Phase 2: Upgrade
> - [ ] Update package version
> - [ ] Fix type errors / compile errors
> - [ ] Run test suite, fix failures
> 
> ### Phase 3: Cleanup
> - [ ] Remove deprecated usage
> - [ ] Adopt new APIs
> 
> ## Effort Estimate
> | Task | Files | Hours |
> |---|---|---|
> | Breaking change fixes | N | N |
> | Deprecated API migration | N | N |
> | Testing | — | N |
> | **Total** | | **N** |

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)