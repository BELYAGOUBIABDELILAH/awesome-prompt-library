# Understand Class Hierarchy and Inheritance

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Map the class hierarchy for this object-oriented code:
> 
> [PASTE CODE]
> 
> ## Inheritance Tree
> Draw the complete class hierarchy:
> BaseClass
>   ├── ChildClassA
>   │   └── GrandchildClassX
>   └── ChildClassB
> 
> For each class: purpose in one sentence.
> 
> ## Method Inheritance Analysis
> For each method in the hierarchy:
> | Method | Defined In | Overridden In | Override Purpose |
> |---|---|---|---|
> 
> Highlight:
> - Methods meant to be overridden (abstract/template methods)
> - Methods never overridden (could be final/static)
> - Methods incorrectly overridden (breaks Liskov Substitution Principle)
> 
> ## Polymorphism Map
> Where is polymorphism used?
> - Interface/type used: [X]
> - Concrete implementations: [A, B, C]
> - How is the right implementation selected?
> 
> ## Design Issues
> - Inheritance used where composition would be better?
> - Deep inheritance chains (> 3 levels)?
> - "God classes" with too many responsibilities?
> - Violations of Liskov Substitution Principle?
> 
> ## Refactoring Suggestions
> If the hierarchy is problematic, suggest concrete improvements.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)