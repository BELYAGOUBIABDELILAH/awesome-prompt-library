# Analyze API Contracts and Integrations

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze and document the API contracts and integrations in this codebase:
> 
> [PASTE CODE or specify scope]
> 
> ## Internal API Contracts
> For each internal API/service interface:
> - Endpoint / function signature
> - Input schema (types, required/optional, validation rules)
> - Output schema (success and error shapes)
> - Side effects (what state does it change?)
> - Consumers (who calls this?)
> 
> ## External API Integrations
> For each third-party API called:
> - Service name and endpoint
> - Authentication method
> - Request format and required fields
> - Response handling (success paths and error codes)
> - Rate limits and retry strategy
> - Failure mode: what happens if this API is down?
> 
> ## Integration Risk Map
> Identify the most fragile integrations:
> - Which have no error handling?
> - Which lack retry logic?
> - Which are called synchronously in user-facing flows?
> - Which have the weakest contracts (no schema validation)?
> 
> ## Improvement Recommendations
> List 3–5 specific improvements to make integrations more resilient.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)