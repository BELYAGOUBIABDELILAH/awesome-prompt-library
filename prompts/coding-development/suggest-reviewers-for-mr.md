# Suggest Reviewers for MR

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me identify the best reviewers for this merge request:
> 
> MR title: [TITLE]
> Files changed: [LIST FILES]
> Domain/feature area: [DESCRIBE]
> Type of change: [Bug fix / Feature / Refactor / Security / Performance]
> 
> ## Reviewer Selection Criteria
> Identify reviewers based on:
> 
> 1. Code ownership — who wrote the code being changed? (git blame context)
> 2. Domain expertise — who has the most commits in this module?
> 3. Relevant experience — who has reviewed similar changes before?
> 4. Availability — who is not overloaded right now?
> 5. Learning opportunity — who would benefit from seeing this change?
> 
> ## Suggested Reviewers
> Primary reviewer (must approve): [NAME] — reason: [...]
> Secondary reviewer (optional but recommended): [NAME] — reason: [...]
> SME reviewer (for specific concerns): [NAME] — reason: [...]
> 
> ## Review Focus Areas
> Tell each reviewer what to focus on:
> - Primary: overall design and correctness
> - Secondary: [specific area based on their expertise]
> - SME: [specific concern — security / performance / API design]
> 
> ## Estimated Review Time
> Rough estimate for reviewers: [X minutes / hours]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)