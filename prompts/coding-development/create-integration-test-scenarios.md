# Create Integration Test Scenarios

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Design integration test scenarios for:
> 
> Components being integrated: [LIST — e.g., "API ↔ Payment Service ↔ Database"]
> Integration type: [REST API / Event-driven / Database / Queue / Third-party service]
> Framework: [SPECIFY — pytest / Jest / RSpec / JUnit]
> 
> ## Integration Test Scenarios
> 
> ### Happy Path Scenarios
> Test the complete successful flow:
> 
> **Scenario 1: [Name]**
> Setup: [preconditions — data in DB, mocked services]
> Action: [what triggers the integration]
> Expected: [what should happen end-to-end]
> Verify: [assertions on DB state, response, events emitted]
> 
> ### Error Handling Scenarios
> Test failure modes of each dependency:
> 
> **Scenario: Database unavailable**
> Setup: database connection fails / pool exhausted
> Action: make request
> Expected: 503 response with retry-after header, no data corruption
> Verify: error is logged with correlation ID, request is not partially committed
> 
> **Scenario: External service timeout**
> Setup: mock external service to delay [N seconds]
> Action: make request
> Expected: request fails gracefully within [timeout] seconds
> Verify: timeout is logged, circuit breaker trips if threshold exceeded
> 
> **Scenario: Invalid response from downstream**
> Setup: mock external service to return malformed response
> Action: make request
> Expected: 502 response, error logged with raw response
> Verify: upstream caller is not exposed to raw external error
> 
> ### Idempotency Tests
> Test that retrying doesn't cause duplicate side effects:
> **Scenario: Duplicate request**
> Action: send same request twice (simulating retry)
> Expected: same response, no duplicate record, no double charge
> 
> ### Load/Concurrency Tests
> **Scenario: N concurrent requests**
> Action: send [N] simultaneous requests
> Expected: all succeed, no race conditions, correct result for each

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)