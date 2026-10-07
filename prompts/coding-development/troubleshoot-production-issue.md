# Troubleshoot Production Issue

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> PRODUCTION INCIDENT — help me diagnose and resolve this quickly:
> 
> What's broken: [DESCRIBE THE ISSUE]
> Who is affected: [% of users / specific customers / all users]
> Severity: [Critical / High / Medium]
> Started: [WHEN]
> Alerts triggered: [WHICH MONITORS FIRED]
> 
> ## Immediate Triage (first 5 minutes)
> 
> ### Is it still happening?
> Check: [specific URL or command to verify]
> 
> ### Scope
> - All regions or specific? [...]
> - All users or specific segment? [...]
> - All features or specific flows? [...]
> 
> ### Recent Changes
> What deployed in the last 24 hours? [list]
> Any infra changes? [list]
> 
> ## Diagnosis Checklist
> [ ] Error rates: spiking in which services?
> [ ] Latency: which endpoints are slow?
> [ ] Database: connection pool exhausted? slow queries?
> [ ] External services: are 3rd-party APIs returning errors?
> [ ] Infrastructure: CPU/memory/disk normal?
> 
> ## Most Likely Cause
> Based on the above: [root cause hypothesis]
> 
> ## Mitigation Options (pick the fastest)
> 1. Rollback [service] to [previous version] — ETA: [X minutes]
> 2. Feature flag: disable [feature] — ETA: [X minutes]
> 3. Scale up [service] — ETA: [X minutes]
> 
> ## Communication
> Draft a status page update: [clear, non-technical, no blame]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)