# Diagnose Customer Issue from Logs

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Help me diagnose a customer issue from their logs:
> 
> Customer description: [WHAT THE CUSTOMER REPORTED]
> Customer logs: [PASTE LOGS]
> Customer environment: [OS, version, config details]
> 
> ## Log Analysis
> 
> ### Timeline Reconstruction
> From the logs, reconstruct what happened:
> [TIME]: [Event] — [Significance]
> 
> ### Error Signals
> - Error messages found: [list with line numbers]
> - Warning patterns: [repeated warnings]
> - Anomalous behavior: [unexpected log patterns]
> 
> ### Root Cause
> Based on the logs, the issue is: [explanation in plain language]
> This was triggered by: [specific event or condition]
> 
> ### Customer Impact
> - Was data lost? [yes/no/unknown]
> - Was service interrupted? [duration]
> - Is the issue ongoing or resolved? [based on logs]
> 
> ### Resolution Steps
> For the customer:
> 1. [Immediate action]
> 2. [Verification step]
> 3. [Confirmation of fix]
> 
> ### Internal Action Items
> - Bug to file: [yes/no — with description]
> - Config change needed: [yes/no]
> - Documentation to update: [yes/no]
> 
> ### Response to Customer
> Draft a clear, non-technical explanation of what happened and what to do.

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)