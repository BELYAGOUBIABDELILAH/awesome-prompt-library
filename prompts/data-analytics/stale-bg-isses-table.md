# Stale Bug Issues Table

**Category:** Data & Analytics  
**Source:** GitLab Duo

## Prompt

> Find all open issues labeled as "bug" in: [PROJECT/GROUP]
> Filter for issues with no activity (comments, status changes, assignments) in the past [N] days.
> 
> Output a table:
> | Issue # | Title | Priority | Age (days) | Last Activity | Assignee | Labels |
> 
> Sort by: Priority (Critical first), then by age (oldest first).
> 
> ## Staleness Categories
> -  Critical stale bugs: high/critical priority, 14+ days inactive
> -  Moderate stale bugs: medium priority, 30+ days inactive
> - ⚪ Low priority backlog: low/no priority, 60+ days inactive
> 
> ## Recommended Triage Actions
> For critical stale bugs: escalate immediately with suggested owner.
> For moderate bugs: suggest reassignment or closing as won't fix.
> For backlog bugs: suggest batch triage session.
> 
> Keep the output concise — this is a triage tool, not a report.

---
[← Back to Data & Analytics](README.md) · [Main index](../../README.md)