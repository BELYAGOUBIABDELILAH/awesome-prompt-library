# Identify Security Issues in MR

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Perform a security-focused review of this merge request:
> 
> MR diff: [PASTE CHANGES]
> 
> ## Security Vulnerability Scan
> 
> ### Injection Vulnerabilities
> - SQL injection: are all queries parameterized?
> - Command injection: is user input passed to system calls?
> - LDAP/XPath injection: are queries sanitized?
> 
> ### XSS (Cross-Site Scripting)
> - Is user input rendered to HTML without escaping?
> - Are innerHTML or dangerouslySetInnerHTML used unsafely?
> - Is Content-Security-Policy maintained?
> 
> ### Authentication & Authorization
> - Are new endpoints protected with proper auth checks?
> - Are authorization rules enforced server-side (not just UI)?
> - Are privilege escalation paths introduced?
> 
> ### Data Exposure
> - Are sensitive fields (passwords, tokens, PII) logged?
> - Are error messages leaking internal details?
> - Is sensitive data returned in API responses unnecessarily?
> 
> ### Cryptography
> - Are secrets hardcoded?
> - Are weak hashing algorithms used (MD5, SHA1 for passwords)?
> - Is random number generation cryptographically secure?
> 
> ### Dependency Security
> - Are new dependencies added? Have they been scanned?
> - Are any known-vulnerable versions introduced?
> 
> ## Risk Rating per Finding
> Critical / High / Medium / Low + suggested fix for each.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)