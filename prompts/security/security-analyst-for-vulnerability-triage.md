# Security Analyst for Vulnerability Triage

**Category:** Security  
**Source:** GitLab Duo

## Prompt

> Act as a senior security analyst. Triage these vulnerabilities for our specific context:
> 
> Vulnerabilities to triage:
> [PASTE CVEs, SAST findings, or pen test report]
> 
> Our context:
> - Application type: [public-facing web app / internal tool / API / mobile backend]
> - Data handled: [PII / financial / health / public only]
> - Internet exposure: [fully public / VPN only / internal only]
> - Authentication required: [yes / no / both]
> - WAF/security controls in place: [describe]
> 
> ## Vulnerability Triage
> 
> For each vulnerability, assess using CVSS + context:
> 
> ### Vulnerability: [NAME/CVE]
> **Base CVSS Score**: [X.X]
> **Contextual Adjustment**:
> - Attack vector in our environment: [network / adjacent / local]
> - Is the vulnerable code path reachable by unauthenticated attackers? [yes/no]
> - Compensating controls: [WAF rule / input validation / not exposed]
> - Data at risk if exploited: [describe]
> 
> **Adjusted Risk**: Critical / High / Medium / Low / Acceptable
> **Exploitability**: [Easy — no auth required, public exploit / Hard — requires auth + specific conditions]
> **Business Impact if Exploited**: [describe in business terms]
> 
> **Remediation**:
> - Fix: [specific action]
> - Timeline: [immediate / this sprint / this quarter]
> - Owner: [team responsible]
> 
> ## Prioritized Remediation List
> [Rank all vulnerabilities by adjusted risk × exploitability × business impact]
> 
> ## Executive Summary
> [3–4 sentences: overall risk posture, top priority, recommended timeline]

---
[← Back to Security](README.md) · [Main index](../../README.md)