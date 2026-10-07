# Generate Compliance Reports

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Generate an audit-ready compliance report:
> 
> Organization: [NAME]
> Reporting period: [DATE RANGE]
> Framework: [SOC2 / ISO27001 / GDPR / HIPAA / PCI-DSS]
> Audience: [External auditor / Board / Regulator / Customer]
> 
> ## Compliance Report
> 
> ### Executive Summary
> [3–4 sentences: compliance posture, key achievements, any open findings]
> 
> ### Scope
> - Systems covered: [list]
> - Environments included: [production / staging / all]
> - Excluded from scope: [with justification]
> 
> ### Controls Assessment
> 
> | Control ID | Control Description | Status | Evidence | Last Tested | Findings |
> |---|---|---|---|---|---|
> | [ID] | [Description] | ✅ Pass / ⚠️ Exception / ❌ Fail | [Evidence type] | [Date] | [None / describe] |
> 
> ### Exceptions and Compensating Controls
> For any failed controls:
> - Control: [ID and description]
> - Finding: [what was found]
> - Risk level: Critical / High / Medium / Low
> - Compensating control: [alternative measure in place]
> - Remediation plan: [what will be done]
> - Target resolution date: [DATE]
> 
> ### Evidence Summary
> List of evidence collected:
> - [Evidence type]: [description and location]
> 
> ### Attestation
> [Signature block for responsible parties]

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)