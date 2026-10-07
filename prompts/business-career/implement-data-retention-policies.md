# Implement Data Retention Policies

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Implement automated data retention policies:
> 
> System: [DATABASE / FILE STORE / LOGGING SYSTEM]
> Data types covered: [LIST DATA CATEGORIES]
> Applicable regulations: [GDPR 7 years / HIPAA 6 years / custom]
> 
> ## Retention Policy Configuration
> 
> ### Policy Definitions
> For each data type:
> | Data Type | Retention Period | Legal Basis | Action at Expiry |
> |---|---|---|---|
> | [Type] | [N days/years] | [Regulation/Business need] | Delete / Archive / Anonymize |
> 
> ## Implementation
> 
> ### Retention Enforcement Job
> Create a scheduled job that:
> 1. Queries for records past their retention date
> 2. Verifies legal holds are not active
> 3. Executes the appropriate action (delete / archive / anonymize)
> 4. Logs each action with: timestamp, record ID, data type, action taken, operator
> 5. Generates a report of what was processed
> 
> ### Legal Hold System
> Mechanism to pause retention enforcement for:
> - Litigation holds
> - Regulatory investigations
> - Audit requirements
> 
> ### Anonymization (preferred over deletion for analytics data)
> Replace PII fields with:
> - Pseudonymized tokens (consistent but non-reversible)
> - NULL for non-essential fields
> - Aggregated/bucketed values for analytics fields
> 
> ### Code Implementation
> Language: [SPECIFY]
> Database: [SPECIFY]
> 
> Provide the complete implementation with tests.
> 
> ### Audit Trail
> Every retention action must be logged in an immutable audit log.

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)