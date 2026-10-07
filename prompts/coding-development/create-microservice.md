# Create Microservice

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Create a production-ready microservice:
> 
> Service name: [NAME]
> Responsibility: [WHAT THIS SERVICE DOES — single responsibility]
> Language/Framework: [SPECIFY]
> Communication: [REST / gRPC / Message queue]
> 
> ## Service Implementation
> 
> ### API/Interface
> Define the service contract:
> - Endpoints or message schemas
> - Request/response formats
> - Error codes and meanings
> 
> ### Core Logic
> Implement the main service behavior with:
> - Input validation
> - Business logic
> - Error handling with proper error types
> - Structured logging (JSON format, with trace ID)
> 
> ### Health Checks
> - /health/live — is the service running?
> - /health/ready — is the service ready to handle traffic? (DB connected, dependencies up)
> 
> ### Configuration
> - Environment variable based configuration
> - Sensible defaults
> - Config validation on startup (fail fast if required config is missing)
> 
> ### Containerization
> Provide:
> - Dockerfile (multi-stage build, non-root user, minimal base image)
> - docker-compose.yml for local development
> - Resource limits (CPU, memory)
> 
> ### Observability
> - Structured logging with levels
> - Metrics endpoint (Prometheus format)
> - Distributed tracing headers (OpenTelemetry)
> 
> ### Tests
> - Unit tests for core logic
> - Integration test that starts the service and calls endpoints

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)