# Plan Database Schema Changes

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Plan safe database schema changes:
> 
> Proposed changes: [DESCRIBE WHAT NEEDS TO CHANGE]
> Database: [PostgreSQL / MySQL / SQLite]
> Table sizes: [N rows in affected tables]
> Deployment window: [zero-downtime required / maintenance window allowed]
> 
> ## Schema Change Plan
> 
> ### Change Classification
> For each change:
> | Change | Type | Risk | Backwards Compatible |
> |---|---|---|---|
> | [Change] | Additive/Destructive/Modifying | Low/Med/High | Yes/No |
> 
> ### Migration Strategy
> 
> **For zero-downtime deployments, use the expand-contract pattern:**
> 
> Phase 1 — Expand (deploy to production, no code change needed):
> \

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)