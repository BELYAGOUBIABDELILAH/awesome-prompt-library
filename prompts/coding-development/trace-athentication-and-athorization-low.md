# Trace Authentication and Authorization Flow

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Map the complete authentication and authorization flow in this codebase:
> 
> [PASTE CODE or specify the scope]
> 
> ## Authentication Flow
> Trace the complete login/token flow:
> 1. How does a user authenticate? (username/password, OAuth, SSO, API key)
> 2. What happens step by step when credentials are submitted?
> 3. Where are credentials validated?
> 4. What token/session is created on success?
> 5. Where is the token stored (client-side and server-side)?
> 6. How is the token validated on subsequent requests?
> 7. How does logout/token revocation work?
> 
> ## Authorization Flow
> Trace the permission check flow:
> 1. Where are permission checks performed? (middleware, service layer, model)
> 2. What is the permission model? (RBAC, ABAC, ACL, scopes)
> 3. How are roles/permissions assigned to users?
> 4. Show a complete example: User X tries to do Y → permission check path
> 
> ## Security Gaps Found
> - Are there endpoints that skip authentication?
> - Are authorization checks consistently applied?
> - Is the principle of least privilege followed?
> - Are permission checks server-side (not just client-side)?
> 
> ## Auth Flow Diagram (Text)
> Request → [middleware] → [token validation] → [permission check] → [handler]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)