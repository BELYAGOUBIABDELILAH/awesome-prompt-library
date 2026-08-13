# Pipeline Failure and Duration Comparison

**Category:** Data & Analytics  
**Source:** GitLab Duo

## Prompt

> Analyze pipeline performance for: [PROJECT/GROUP]
> Time range: Last [N] weeks
> 
> For each week, provide:
> - Total pipelines run
> - Success count and rate (%)
> - Failure count and rate (%)
> - Average pipeline duration (minutes)
> - Longest pipeline run
> 
> ## Week-over-Week Comparison Table
> | Week | Runs | Success Rate | Avg Duration | Trend |
> 
> ## Failure Analysis
> - Which stages fail most often?
> - Which jobs have the highest failure rate?
> - Are failures clustered on specific branches or times of day?
> 
> ## Duration Trends
> - Is the pipeline getting slower or faster over time?
> - Which jobs are the biggest duration contributors?
> 
> ## Recommendations
> List 2–3 specific actions to improve reliability or speed.

---
[← Back to Data & Analytics](README.md) · [Main index](../../README.md)