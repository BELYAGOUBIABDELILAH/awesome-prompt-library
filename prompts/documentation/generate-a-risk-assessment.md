# Generate a Risk Assessment

**Category:** Documentation  
**Source:** GitLab Duo

## Prompt

> Generate a comprehensive risk assessment for this work item:
> 
> Work item: [PASTE ISSUE / EPIC / PROJECT DESCRIPTION]
> 
> ## Risk Assessment
> 
> ### Scope of Assessment
> What is being built/changed and what could go wrong?
> 
> ### Risk Register
> 
> For each risk identified, complete this entry:
> 
> | # | Risk Description | Likelihood (1-5) | Impact (1-5) | Score (L×I) | Mitigation | Owner |
> |---|---|---|---|---|---|---|
> 
> Risk categories to assess:
> 
> **Technical Risks**
> - Implementation complexity
> - Integration failures
> - Performance degradation
> - Data integrity issues
> - Security vulnerabilities
> 
> **Timeline Risks**
> - Dependency delays
> - Scope creep
> - Underestimated complexity
> - Resource availability
> 
> **Business Risks**
> - User adoption
> - Regulatory compliance
> - Competitive response
> - Revenue impact
> 
> **Operational Risks**
> - Deployment failures
> - Rollback complexity
> - Support burden increase
> 
> ### Top 3 Risks (Most Critical)
> Deep dive on the highest-scoring risks:
> Risk: [description]
> Scenario: [what exactly could go wrong]
> Mitigation plan: [specific steps to reduce likelihood or impact]
> Contingency: [what to do if it happens anyway]
> 
> ### Risk Acceptance
> Risks we're accepting without mitigation (and why):
> [List with justification]

---
[← Back to Documentation](README.md) · [Main index](../../README.md)