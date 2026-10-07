# Analyze Database Schema and Relationships

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Analyze this database schema:
> 
> [PASTE SCHEMA / migrations / ORM models]
> 
> ## Entity Map
> List all tables/collections with:
> - Purpose (what does this entity represent?)
> - Primary key strategy
> - Key fields and their types
> - Nullable vs required fields
> 
> ## Relationship Analysis
> For each relationship:
> - Type: one-to-one / one-to-many / many-to-many
> - Enforcement: FK constraint / application-level / none
> - Cascade behavior: delete, update
> - Is the relationship bidirectional?
> 
> ## Index Analysis
> - Which columns are indexed?
> - Which frequent query patterns have no index?
> - Are there redundant indexes?
> - Are there missing composite indexes for common multi-column lookups?
> 
> ## Performance Concerns
> - Tables with unbounded growth (no archiving strategy)
> - Fields that should be denormalized for read performance
> - JSON/text fields used where relational structure would be better
> - Missing pagination patterns
> 
> ## Recommendations
> List 3–5 schema improvements with justification.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)