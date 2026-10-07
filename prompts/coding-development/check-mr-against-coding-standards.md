# Check MR Against Coding Standards

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Review this MR for compliance with our coding standards:
> 
> MR content: [PASTE DIFF or DESCRIBE]
> Style guide: [LINK or SPECIFY — e.g., Google Java Style, Airbnb JS, PEP 8]
> 
> ## Standards Checklist
> Check each category and flag violations:
> 
> ### Naming Conventions
> [ ] Variables: camelCase / snake_case / PascalCase (per language)
> [ ] Functions/methods: verb + noun pattern
> [ ] Classes: PascalCase, noun
> [ ] Constants: SCREAMING_SNAKE_CASE
> [ ] Files: match the primary export name
> 
> ### Code Structure
> [ ] Functions ≤ 20 lines
> [ ] Max nesting depth ≤ 3
> [ ] No more than 4 function parameters
> [ ] Single responsibility per function/class
> 
> ### Documentation
> [ ] Public APIs have docstrings
> [ ] Complex logic has inline comments
> [ ] No commented-out code
> 
> ### Error Handling
> [ ] No swallowed exceptions (empty catch blocks)
> [ ] Errors are logged with context
> [ ] User-facing errors are friendly
> 
> ## Violations Found
> For each: file + line number + rule violated + suggested fix.
> 
> ## Verdict
> Standards compliant: YES / NO / MINOR ISSUES

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)