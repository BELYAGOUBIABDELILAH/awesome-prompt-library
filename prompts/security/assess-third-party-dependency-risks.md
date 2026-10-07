# Assess Third-Party Dependency Risks

**Category:** Security  
**Source:** GitLab Duo

## Prompt

> Assess the security and compliance risk of our dependencies:
> 
> Dependency file: [PASTE package.json / requirements.txt / go.mod / Gemfile.lock / pom.xml]
> Scan results: [PASTE output from npm audit / pip-audit / snyk / etc. if available]
> 
> ## Dependency Risk Assessment
> 
> ### Vulnerability Analysis
> For each vulnerable dependency found:
> 
> | Package | Current Version | Vulnerability | CVSS | Fixed In | Action |
> |---|---|---|---|---|---|
> | [name] | [version] | [CVE-XXXX-XXXX] | [score] | [version] | Upgrade / Replace / Accept |
> 
> ### Severity Tiers
>  Critical/High CVEs (fix immediately):
> [List with: package, CVE, attack vector, patch]
> 
>  Medium CVEs (fix this sprint):
> [List]
> 
> ⚪ Low CVEs (backlog):
> [List]
> 
> ### Outdated Dependencies (security hygiene)
> Packages more than [N] major versions behind:
> [List with upgrade path]
> 
> ### License Compliance
> Check each dependency license against our allowed list:
> - GPL: [compatible / incompatible with our license]
> - LGPL: [...]
> - MIT/Apache 2.0: [✅ usually fine]
> 
> License violations: [list any incompatible licenses]
> 
> ### Abandoned Dependencies
> Dependencies with no commits in 12+ months:
> [List with recommended alternatives]
> 
> ### Remediation Plan
> | Priority | Package | Action | Owner | ETA |
> |---|---|---|---|---|

---
[← Back to Security](README.md) · [Main index](../../README.md)