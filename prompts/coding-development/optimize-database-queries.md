# Optimize Database Queries

**Category:** Coding & Development  
**Source:** src_3857e1f00b70

## Prompt

> Analyze and optimize the following slow database query:
> 
> Database Engine: ${engine:PostgreSQL}
> Schema / Table Definitions:
> ${schema:Provide relevant table DDL, column types, and existing indexes}
> 
> Slow Query:
> ${query}
> 
> Your task:
> 1. Identify performance bottlenecks (sequential scans, unindexed joins, non-sargable WHERE predicates).
> 2. Provide the rewritten, optimized SQL query.
> 3. Recommend any composite or covering indexes with explanation.
> 4. Show how to verify using EXPLAIN ANALYZE.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)