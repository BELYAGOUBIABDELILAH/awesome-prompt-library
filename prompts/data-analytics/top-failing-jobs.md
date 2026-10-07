# Top Failing Jobs

**Category:** Data & Analytics  
**Source:** GitLab Duo

## Prompt

> Analyze CI/CD job failure data for: [PROJECT/GROUP]
> Time range: Last [N] days
> 
> Identify the top 10 most frequently failing jobs.
> 
> For each job, provide:
> | Job Name | Stage | Failure Count | Failure Rate % | Avg Duration | Most Common Error |
> 
> ## Pattern Analysis
> - Are failures consistent or sporadic?
> - Do failures correlate with specific branches, times, or triggering events?
> - Are any failures clearly flaky tests vs. real failures?
> 
> ## Root Cause Categories
> Group failures by likely cause:
> - Infrastructure / environment issues
> - Flaky tests
> - Code errors introduced by MRs
> - External dependency failures
> - Timeout issues
> 
> ## Fix Priority List
> Rank the top 5 jobs to fix first, with a one-line suggested fix for each.

---
[← Back to Data & Analytics](README.md) · [Main index](../../README.md)