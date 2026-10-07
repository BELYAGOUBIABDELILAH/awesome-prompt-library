# Create Disaster Recovery Plan

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Create a disaster recovery plan for:
> 
> System: [NAME AND DESCRIPTION]
> Criticality: [Mission-critical / High / Medium / Low]
> Business hours: [24/7 / Business hours only]
> 
> ## Recovery Objectives
> 
> ### RTO — Recovery Time Objective
> Maximum acceptable downtime: [N hours/minutes]
> This means: the system must be restored within [RTO] of a declared disaster.
> 
> ### RPO — Recovery Point Objective
> Maximum acceptable data loss: [N hours/minutes]
> This means: we must be able to recover data from [RPO] before the incident.
> 
> ## Disaster Scenarios
> 
> For each scenario, document the recovery procedure:
> 
> ### Scenario 1: Database Failure
> Trigger: [how to detect]
> Impact: [what stops working]
> Recovery steps:
> 1. [Step 1 with exact commands]
> 2. [Step 2]
> 3. Verify: [how to confirm recovery]
> Expected time: [N minutes]
> 
> ### Scenario 2: Application Server Failure
> [same format]
> 
> ### Scenario 3: Complete Region/Data Center Failure
> [same format]
> 
> ### Scenario 4: Ransomware / Data Corruption
> [same format]
> 
> ## Backup Strategy
> - Backup frequency: [N]
> - Backup retention: [N days/weeks]
> - Backup location: [offsite/cloud]
> - Backup verification: [how and how often]
> - Last tested: [date]
> 
> ## Runbook
> Step-by-step commands to execute each recovery scenario.
> 
> ## DR Test Schedule
> Test DR procedures: [quarterly / annually]
> Last test date and result: [FILL IN]

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)