# Generate Security Documentation

**Category:** Security  
**Source:** GitLab Duo

## Prompt

> Generate security documentation for auditors:
> 
> System: [NAME AND DESCRIPTION]
> Audience: [External auditor / Security team / Board / Customers]
> Framework: [SOC2 / ISO27001 / Custom]
> 
> ## Security Documentation
> 
> ### System Security Overview
> [2–3 paragraphs: what the system does, what data it handles, and the overall security philosophy]
> 
> ### Security Controls
> 
> #### Access Control
> - Authentication method: [MFA / SSO / passwords + MFA]
> - Authorization model: [RBAC / ABAC / ACL]
> - Privileged access management: [how admin access is controlled]
> - Access review frequency: [quarterly / annually]
> 
> #### Data Protection
> - Data at rest encryption: [AES-256 / TDE / field-level]
> - Data in transit encryption: [TLS 1.3]
> - Key management: [KMS / HSM / manual rotation]
> - PII handling: [classification, minimization, retention]
> 
> #### Infrastructure Security
> - Network controls: [VPC, security groups, firewall rules]
> - Vulnerability management: [scan frequency, patching SLA]
> - Container/image security: [base image policy, scanning]
> - Secrets management: [Vault / AWS Secrets Manager / etc.]
> 
> #### Monitoring and Incident Response
> - Logging: [what is logged, retention period]
> - Alerting: [what triggers an alert]
> - Incident response plan: [reference or summarize]
> - Mean time to detect: [target metric]
> - Mean time to respond: [target metric]
> 
> ### Evidence of Controls
> For each control: specify the evidence artifact available for audit
> | Control | Evidence Type | Location |
> |---|---|---|

---
[← Back to Security](README.md) · [Main index](../../README.md)