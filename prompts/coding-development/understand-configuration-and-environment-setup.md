# Understand Configuration and Environment Setup

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Help me understand the configuration and environment setup for this project:
> 
> [PASTE CONFIG FILES / .env.example / README / docker-compose.yml]
> 
> ## Configuration Overview
> What are all the configuration sources?
> - Environment variables (.env)
> - Config files (which format: YAML, JSON, TOML?)
> - Command-line arguments
> - Runtime configuration (database, feature flags)
> 
> ## Required vs Optional
> | Config Key | Required? | Default | Purpose | Example Value |
> |---|---|---|---|---|
> 
> ## Environment-Specific Settings
> How does config differ across:
> - Local development
> - CI/CD pipeline
> - Staging
> - Production
> 
> ## Secrets Management
> - Which values are secrets? (API keys, passwords, tokens)
> - Where should secrets come from? (vault, env vars, secret manager)
> - Which values are NEVER safe to commit?
> 
> ## Setup Checklist
> Complete step-by-step setup for a new developer:
> 1. Copy .env.example to .env
> 2. Set [KEY] — get it from [WHERE]
> 3. Run [COMMAND]
> ...
> 
> ## Common Configuration Mistakes
> List the 3 most common config errors and how to diagnose them.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)