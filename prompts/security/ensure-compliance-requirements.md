# Ensure Compliance Requirements

**Category:** Security  
**Source:** GitLab Duo

## Prompt

> Verify this code meets the following compliance requirements:
> 
> [PASTE CODE]
> 
> Required standards: [GDPR / HIPAA / PCI-DSS / SOC2 / select applicable]
> 
> ## GDPR Compliance Check (if applicable)
> - [ ] Lawful basis for processing personal data documented
> - [ ] Consent mechanisms implemented correctly
> - [ ] Data subject rights implemented: access, correction, deletion, portability
> - [ ] Privacy by design: minimum data collection
> - [ ] Data breach notification capability (72-hour window)
> - [ ] DPA (Data Processing Agreement) requirements met for processors
> 
> ## HIPAA Compliance Check (if applicable)
> - [ ] PHI (Protected Health Information) identified and protected
> - [ ] Access controls: unique user IDs, automatic logoff, encryption
> - [ ] Audit controls: hardware, software, procedural
> - [ ] Transmission security: encryption in transit
> - [ ] Business Associate Agreements in place
> 
> ## PCI-DSS Check (if applicable)
> - [ ] Cardholder data never stored unencrypted
> - [ ] No storage of CVV, PIN, magnetic stripe data
> - [ ] PAN (Primary Account Number) masked in logs
> - [ ] Strong cryptography for transmission (TLS 1.2+)
> - [ ] Access restricted on need-to-know basis
> 
> ## SOC2 Type II Check (if applicable)
> - [ ] Availability: uptime monitoring and SLA enforcement
> - [ ] Confidentiality: data classification and access controls
> - [ ] Processing integrity: complete, accurate, timely processing
> - [ ] Privacy: personal information handled per commitments
> - [ ] Security: logical and physical access controls
> 
> ## Gap Report
> List each compliance gap with: requirement violated, severity, remediation steps, timeline.

---
[← Back to Security](README.md) · [Main index](../../README.md)