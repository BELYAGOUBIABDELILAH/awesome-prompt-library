# Prioritize Review Comments

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me prioritize the following code review comments:
> 
> Review comments:
> [PASTE ALL REVIEW COMMENTS]
> 
> Categorize each comment into:
> 
> ##  MUST FIX (Blockers)
> These prevent the MR from merging:
> - Security vulnerabilities
> - Correctness bugs
> - Broken tests
> - API contract violations
> - Data loss risks
> 
> ##  SHOULD FIX (Strong suggestions)
> Important for maintainability but not merge-blocking:
> - Significant readability issues
> - Missing error handling for likely scenarios
> - Performance concerns in hot paths
> - Missing tests for critical paths
> 
> ##  NICE TO HAVE (Optional)
> Low-priority improvements the author can choose to address:
> - Style preferences
> - Minor naming improvements
> - Refactoring opportunities for future sprints
> - Documentation enhancements
> 
> ## Summary for Author
> Write a brief message (3–4 sentences) the reviewer can send to the author explaining:
> - How many blockers need to be addressed
> - The overall quality of the MR
> - A positive note about what was done well

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)