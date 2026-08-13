# Generate CRUD Operations

**Category:** Coding & Development  
**Source:** GitLab Duo

## Prompt

> Generate complete CRUD operations for:
> 
> Entity: [ENTITY NAME — e.g., User, Product, Order]
> Language/Framework: [SPECIFY]
> Database: [SPECIFY]
> ORM/Query builder: [SPECIFY if applicable]
> 
> ## Generate All Five Operations
> 
> ### CREATE
> - Input validation (required fields, types, constraints)
> - Duplicate detection if applicable
> - Return the created entity with generated ID
> - Error: 400 for invalid input, 409 for duplicate
> 
> ### READ (single)
> - Fetch by ID
> - Return 404 if not found
> - Handle soft-deleted records appropriately
> 
> ### LIST (with pagination)
> - Accept: page, limit, sort field, sort direction
> - Return: items array + total count + pagination metadata
> - Default: page=1, limit=20, sort=createdAt desc
> - Max limit: 100
> 
> ### UPDATE (partial)
> - Accept partial updates (PATCH semantics)
> - Validate only the fields being updated
> - Return the updated entity
> - Error: 404 if not found, 400 if invalid
> 
> ### DELETE (soft delete preferred)
> - Soft delete: set deletedAt timestamp
> - Return 204 No Content on success
> - Error: 404 if not found
> 
> ## Tests
> Generate tests for each operation covering:
> - Happy path
> - Validation errors
> - Not found
> - Boundary conditions

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)