# Implement Role-Based Access Control

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Implement a complete Role-Based Access Control (RBAC) system:
> 
> Application: [DESCRIBE]
> Language/Framework: [SPECIFY]
> Database: [SPECIFY]
> 
> ## RBAC Design
> 
> ### Permission Model
> Define the structure:
> - Resources: [ENTITY1, ENTITY2, ENTITY3]
> - Actions: create, read, update, delete, [custom actions]
> - Roles: [Admin, Manager, User, Viewer, Guest, etc.]
> 
> ### Permission Matrix
> | Role | Resource:Action | Granted |
> |---|---|---|
> | Admin | *:* | ✅ All |
> | Manager | Projects:CRUD | ✅ |
> | [etc.] | | |
> 
> ## Implementation
> 
> ### Database Schema
> - roles table (id, name, description)
> - permissions table (id, resource, action)
> - role_permissions table (role_id, permission_id)
> - user_roles table (user_id, role_id, granted_by, granted_at, expires_at)
> 
> ### Permission Check Middleware
> \

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)