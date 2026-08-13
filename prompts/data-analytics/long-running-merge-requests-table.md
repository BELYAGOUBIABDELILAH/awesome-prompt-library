# Long-Running Merge Requests Table

**Category:** Data & Analytics  
**Source:** GitLab Duo

## Prompt

> List all open merge requests that have been open for more than 30 days in: [PROJECT/GROUP]
> 
> For each MR, show:
> | MR Title | Author | Days Open | Last Activity | Reviewer(s) | Labels |
> 
> Then categorize each MR as:
> -  Stale (no activity in 14+ days)
> -  Slow (active but dragging)
> -  Complex (large diff, many reviewers needed)
> 
> After the table, provide:
> ## Recommended Actions
> For each stale MR: suggest close, reassign, or expedite.
> For slow MRs: identify the bottleneck (missing review, failing CI, author unresponsive).
> 
> Goal: help the team clear the review queue and improve merge velocity.

---
[← Back to Data & Analytics](README.md) · [Main index](../../README.md)