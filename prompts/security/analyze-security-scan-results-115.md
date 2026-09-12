# Analyze Security Scan Results

**Category:** Security  
**Source:** GitLab Duo

## Prompt

> Triage these security scan results:
> 
> Scan output: [PASTE SCAN RESULTS — SAST / DAST / dependency scan / container scan]
> Tool used: [Semgrep / Snyk / Trivy / GitLab SAST / Bandit / etc.]
> Application: [describe — web API / mobile backend / internal tool]
> 
> ## Triage Process
> 
> ### False Positive Identification
> For each finding, assess:
> - Is this finding actually reachable by an attacker given our application's context?
> - Is the vulnerable code path actually executed?
> - Are there compensating controls (WAF, input validation upstream)?
> 
> Mark as false positive with justification, or confirm as real finding.
> 
> ### Real Findings — Severity Assessment
> 
> #### Critical (must fix before next release)
> | Finding | Location | Why Critical | Fix |
> |---|---|---|---|
> 
> #### High (fix within this sprint)
> | Finding | Location | Why High | Fix |
> |---|---|---|---|
> 
> #### Medium (fix within this quarter)
> | Finding | Location | Why Medium | Fix |
> |---|---|---|---|
> 
> #### Low / Informational (backlog)
> [Brief list]
> 
> ### Remediation Priorities
> Ranked by: severity × exploitability × fix difficulty
> 
> Top 5 to fix immediately:
> 1. [Finding] — Fix: [specific code change]
> 2. [...]
> 
> ### Scan Configuration Improvements
> Based on the false positive rate, suggest improvements to scan rules to reduce noise.

---
[← Back to Security](README.md) · [Main index](../../README.md)