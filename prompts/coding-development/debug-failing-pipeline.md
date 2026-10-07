# Debug Failing Pipeline

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me diagnose this failing CI/CD pipeline:
> 
> Pipeline output / error logs:
> [PASTE LOGS]
> 
> Pipeline config: [PASTE .gitlab-ci.yml snippet or describe]
> Branch: [BRANCH NAME]
> Recent changes: [what changed before this started failing]
> 
> ## Failure Analysis
> 
> ### Quick Diagnosis
> - Which job/stage failed?
> - What is the exact error message?
> - Is this a new failure or recurring?
> 
> ### Root Cause Categories
> Check each:
> [ ] Environment variable missing or wrong
> [ ] Dependency not installed or wrong version
> [ ] Permission/authentication error
> [ ] Network timeout or unreachable service
> [ ] Code error introduced by recent commit
> [ ] Resource exhaustion (memory, disk, timeout)
> [ ] Race condition or ordering issue
> [ ] Flaky test (passes/fails intermittently)
> 
> ### Most Likely Cause
> Based on the logs: [explanation]
> 
> ### Fix
> [Specific fix with config changes or code changes]
> 
> ### Verification
> After applying the fix, verify with: [command or expected output]
> 
> ### Prevention
> How to stop this from recurring: [config change, test addition, monitoring]

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)