# Audit Codebase for Compliance

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Conduct a compliance audit of this codebase:
> 
> [PASTE CODE or specify scope]
> 
> Compliance frameworks to check: [GDPR / HIPAA / SOC2 / PCI-DSS / ISO27001 / select all that apply]
> 
> ## Compliance Audit
> 
> ### Data Handling
> - [ ] Is personal data (PII) identified and catalogued?
> - [ ] Is PII encrypted at rest?
> - [ ] Is PII encrypted in transit (TLS 1.2+)?
> - [ ] Is PII minimized (only collect what's needed)?
> - [ ] Is there a data retention policy implemented?
> - [ ] Is there a data deletion capability (right to erasure)?
> - [ ] Are data access logs maintained?
> 
> ### Access Controls
> - [ ] Is authentication required for all sensitive endpoints?
> - [ ] Is authorization enforced at the service layer (not just UI)?
> - [ ] Is principle of least privilege applied?
> - [ ] Are admin functions separated from user functions?
> - [ ] Are API keys rotated and scoped appropriately?
> 
> ### Audit Logging
> - [ ] Are authentication events logged?
> - [ ] Are data access events logged?
> - [ ] Are admin actions logged?
> - [ ] Are logs tamper-proof (append-only, offsite)?
> - [ ] Are logs retained for required duration?
> 
> ### Encryption
> - [ ] Are secrets stored in a secrets manager (not .env files in repo)?
> - [ ] Is TLS configured with strong cipher suites?
> - [ ] Are database passwords and credentials rotated?
> 
> ## Violations Found
> For each: regulation violated, severity, specific location in code, remediation required.
> 
> ## Remediation Priority
> Order violations by: compliance risk × effort to fix.

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)