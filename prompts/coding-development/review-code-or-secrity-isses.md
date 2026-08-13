# Review Code for Security Issues

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Conduct a thorough security review of this code:
> 
> [PASTE CODE]
> 
> Language/Framework: [SPECIFY]
> 
> ## OWASP Top 10 Check
> Review for each category:
> 
> 1. Broken Access Control — are authorization checks comprehensive?
> 2. Cryptographic Failures — is sensitive data properly protected?
> 3. Injection — is all input sanitized before use?
> 4. Insecure Design — are security requirements built in from the start?
> 5. Security Misconfiguration — are defaults secure?
> 6. Vulnerable Components — are dependencies up to date and scanned?
> 7. Authentication Failures — is auth implemented correctly?
> 8. Software and Data Integrity Failures — are serialization/deserialization safe?
> 9. Security Logging Failures — are security events logged without leaking data?
> 10. SSRF — can an attacker force the server to make unintended requests?
> 
> ## Findings Report
> For each vulnerability found:
> - OWASP category
> - Severity: Critical / High / Medium / Low
> - Affected line(s)
> - Attack scenario (how could this be exploited?)
> - Recommended fix with code example

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)