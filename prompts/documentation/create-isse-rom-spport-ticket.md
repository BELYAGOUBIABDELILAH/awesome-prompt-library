# Create Issue from Support Ticket

**Category:** Documentation  
**Source:** GitLab Duo

## Prompt

> Convert this support ticket into a properly formatted GitLab issue:
> 
> Support ticket:
> [PASTE TICKET CONTENT]
> 
> Customer plan: [Free / Pro / Enterprise]
> Ticket priority: [Low / Medium / High / Critical]
> Frequency: [One customer / Multiple customers / Unknown]
> 
> ## GitLab Issue
> 
> **Title:** [Verb] [Component]: [Clear symptom — max 60 chars]
> 
> **Labels to apply:**
> - Type: bug / feature-request / UX / performance
> - Priority: critical / high / medium / low
> - Component: [relevant area]
> - Customer-reported: yes
> 
> **Description:**
> 
> ### Customer Report
> [Sanitized version of what the customer said]
> 
> ### Steps to Reproduce
> 1. [Step 1]
> 2. [Step 2]
> 3. [Observe: ...]
> 
> ### Expected Behavior
> [What should happen]
> 
> ### Actual Behavior
> [What actually happens]
> 
> ### Environment
> - Version: [...]
> - Browser/OS: [...]
> - Plan: [...]
> 
> ### Frequency / Impact
> - Affected customers: [N known]
> - Business impact: [describe]
> 
> ### Technical Context
> [Any technical details from investigation]
> 
> ### Definition of Done
> - [ ] Root cause identified
> - [ ] Fix implemented and tested
> - [ ] Customer notified
> - [ ] Regression test added

---
[← Back to Documentation](README.md) · [Main index](../../README.md)