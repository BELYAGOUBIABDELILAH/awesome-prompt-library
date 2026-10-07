# Implement CI/CD Best Practices

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Review and improve this CI/CD pipeline configuration:
> 
> Current pipeline: [PASTE .gitlab-ci.yml]
> Project type: [web app / library / microservice / monorepo]
> Deployment target: [Kubernetes / Docker / VM / Serverless / PaaS]
> 
> ## Pipeline Audit
> 
> ### Speed Optimizations
> - [ ] Caching: are dependencies cached between runs?
> - [ ] Parallel jobs: what can run in parallel vs. must be sequential?
> - [ ] Docker layer caching: is the Dockerfile optimized for cache hits?
> - [ ] Artifact size: are we passing only what's needed between stages?
> 
> ### Security
> - [ ] Secrets: are all secrets in CI/CD variables (not hardcoded)?
> - [ ] SAST: static analysis job present?
> - [ ] Dependency scanning: checking for vulnerable packages?
> - [ ] Container scanning: Docker images scanned?
> - [ ] Secret detection: scanning for accidentally committed secrets?
> 
> ### Reliability
> - [ ] Retries: are flaky jobs configured to retry?
> - [ ] Timeouts: are jobs protected against hanging?
> - [ ] Rollback: is there a way to rollback a bad deploy quickly?
> - [ ] Deployment verification: is the deploy verified after completion?
> 
> ### Best Practices
> - [ ] Rules/only/except: correct trigger conditions?
> - [ ] Environments: properly configured with deployment tracking?
> - [ ] Review apps: automatic preview environments for MRs?
> 
> ## Improved Pipeline
> Provide the complete improved .gitlab-ci.yml with comments explaining each change.

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)