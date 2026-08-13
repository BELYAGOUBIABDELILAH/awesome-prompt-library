# Generate Release Notes from MRs

**Category:** Documentation  
**Source:** GitLab Duo

## Prompt

> Generate release notes from the following merged MRs:
> 
> MR list:
> [PASTE MR TITLES, DESCRIPTIONS, AND LABELS]
> 
> Release version: [vX.Y.Z]
> Release date: [DATE]
> Audience: [end users / developers / internal team]
> 
> ## Release Notes
> 
> ---
> 
> # v[X.Y.Z] — [Date]
> 
> ## ✨ New Features
> [Group MRs labeled as feature/enhancement]
> - **[Feature Name]**: [1–2 sentence description of what users can now do] (#MR)
> 
> ##  Bug Fixes
> [Group MRs labeled as bug]
> - **[Fix description]**: [What was broken and what now works correctly] (#MR)
> 
> ## ⚠️ Breaking Changes
> [Group MRs with breaking change label]
> - **[What changed]**: [Old behavior → New behavior]
>   **Migration**: [What users need to do to adapt]
> 
> ##  Performance Improvements
> - [Description of improvement and measured/expected impact] (#MR)
> 
> ##  Internal Changes
> [Dependency updates, refactors, CI changes — brief]
> - [Description] (#MR)
> 
> ##  Documentation
> - [Description] (#MR)
> 
> ---
> 
> **Full Changelog**: [COMPARE URL]
> **How to upgrade**: [UPGRADE GUIDE LINK or inline instructions]

---
[← Back to Documentation](README.md) · [Main index](../../README.md)