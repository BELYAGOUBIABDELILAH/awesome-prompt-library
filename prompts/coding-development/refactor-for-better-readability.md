# Refactor for Better Readability

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Refactor the following code to maximize readability and clarity:
> 
> [PASTE CODE]
> 
> Apply these readability improvements:
> 
> ## Naming
> - Rename variables, functions, and classes to reveal intent
> - Replace abbreviations with full words
> - Use consistent naming conventions for the language
> - Replace generic names (data, obj, temp, x) with specific ones
> 
> ## Structure
> - Extract magic numbers and strings into named constants
> - Group related code together
> - Separate concerns (don't mix business logic with I/O)
> - Apply the step-down rule: high-level → low-level functions
> 
> ## Logic Simplification
> - Replace complex conditionals with descriptive boolean variables
> - Invert negatives to positives where possible
> - Replace flag variables with early returns
> - Simplify nested ternaries
> 
> ## Documentation
> - Add a JSDoc/docstring to each public function (purpose, params, return, throws)
> - Remove comments that just repeat the code
> - Keep comments that explain WHY, not WHAT
> 
> ## Refactored Output
> Provide the complete refactored code. A new developer should understand it without asking questions.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)