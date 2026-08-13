# Update Documentation After Code Changes

**Category:** Documentation  
**Source:** GitLab Duo

## Prompt

> Identify all documentation that needs updating after these code changes:
> 
> Code changes: [PASTE DIFF or DESCRIBE WHAT CHANGED]
> Change type: [new feature / bug fix / refactor / API change / config change / breaking change]
> 
> ## Documentation Impact Analysis
> 
> ### Directly Affected Docs
> For each document that must be updated:
> - **Document name/location**: [PATH]
> - **What changed**: [specific section and what needs to change]
> - **Priority**: Must update before release / Should update soon / Nice to have
> 
> ### API Documentation
> - Did any endpoint signatures change? [yes/no → which ones]
> - Did any request/response schemas change?
> - Did any error codes change?
> - New endpoints added?
> 
> ### User-Facing Documentation
> - Does the feature change affect the user guide?
> - Are there new UI elements that need screenshots?
> - Did any workflow change that tutorials describe?
> 
> ### README / Setup Guides
> - New environment variables to document?
> - Changed install/setup steps?
> - New dependencies users need to install?
> 
> ### CHANGELOG
> Draft the changelog entry for this change:
> \

---
[← Back to Documentation](README.md) · [Main index](../../README.md)