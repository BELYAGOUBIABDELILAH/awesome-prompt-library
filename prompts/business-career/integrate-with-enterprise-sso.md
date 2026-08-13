# Integrate with Enterprise SSO

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Implement enterprise SSO integration:
> 
> Protocol: [SAML 2.0 / OIDC / OAuth 2.0]
> Identity Provider: [Okta / Azure AD / Google Workspace / PingFederate / Generic]
> Application type: [Web app / API / SPA]
> Language/Framework: [SPECIFY]
> 
> ## SSO Integration
> 
> ### Protocol Overview
> Explain the chosen protocol flow step by step:
> [SP-initiated SAML flow / OIDC Authorization Code flow / etc.]
> 
> ### Configuration Required
> 
> #### Identity Provider Side (what to configure in the IdP):
> - Application type to register
> - Redirect URI(s) to whitelist
> - Attribute mappings needed
> - Signing certificate setup
> 
> #### Application Side (what we configure):
> - Entity ID / Client ID
> - IdP metadata URL or config values
> - Certificate/secret setup
> - Attribute claim mapping
> 
> ### Implementation
> 
> #### Login Flow
> 1. User clicks "Login with [IdP]"
> 2. [Step-by-step with code]
> 3. [Token validation]
> 4. [User session creation]
> 5. [Redirect to application]
> 
> #### Logout Flow (important for enterprise!)
> - SP-initiated logout
> - IdP-initiated logout
> - Session cleanup
> 
> #### Just-in-Time (JIT) Provisioning
> When a user logs in for the first time:
> - Create user account with IdP attributes
> - Assign default role based on IdP group membership
> - Log provisioning event
> 
> ### Security Checklist
> - [ ] State parameter validated (CSRF protection)
> - [ ] Redirect URI strictly validated
> - [ ] ID token signature verified
> - [ ] Token expiry checked
> - [ ] HTTPS enforced throughout

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)