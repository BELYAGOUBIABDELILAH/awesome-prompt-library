# Identify Breaking Changes in MR

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze this MR for breaking changes:
> 
> MR diff: [PASTE CHANGES]
> 
> ## Breaking Change Detection
> 
> ### Public API Changes
> - Are any public function signatures modified? (parameters added/removed/retyped)
> - Are any public classes/interfaces changed?
> - Are any exported constants or enums modified?
> - Are any endpoints renamed, removed, or with changed request/response shapes?
> 
> ### Database Contract Changes
> - Schema changes that require migration?
> - Column renames or type changes?
> - Removed indexes that queries depend on?
> 
> ### Configuration Changes
> - New required environment variables?
> - Changed config file formats?
> - Removed config options that consumers might use?
> 
> ### Behavioral Changes
> - Same input now produces different output?
> - Error handling changed in a way consumers won't expect?
> - Timing or ordering changes in async operations?
> 
> ## Impact Assessment
> For each breaking change found:
> - Who is affected? (other services, external clients, mobile apps)
> - Is there a migration path?
> - Can it be made backwards compatible?
> 
> ## Verdict
>  No breaking changes
>  Breaking changes with migration path
>  Breaking changes requiring coordination before deploy

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)