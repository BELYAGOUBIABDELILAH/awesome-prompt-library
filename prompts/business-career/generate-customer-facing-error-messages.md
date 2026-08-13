# Generate Customer-Facing Error Messages

**Category:** Business & Career  
**Source:** GitLab Duo

## Prompt

> Transform these technical errors into user-friendly messages:
> 
> Technical errors to translate:
> [PASTE INTERNAL ERROR MESSAGES, STACK TRACES, OR ERROR CODES]
> 
> User context: [what the user was trying to do]
> Application: [describe]
> Tone: [professional / friendly / formal]
> 
> ## User-Friendly Error Messages
> 
> For each error, provide:
> 
> ### Error: [TECHNICAL ERROR]
> 
> **User-facing message**:
> > [What went wrong, in plain language. Never show the technical error.]
> > [What they can do about it.]
> > [If there's nothing they can do: reassure them and offer a path forward.]
> 
> **Error code shown to user**: [SHORT-CODE — for reference when contacting support]
> 
> **Help link**: [URL to relevant help article if applicable]
> 
> **Support message** (if they contact support):
> "Error: [SHORT-CODE] at [timestamp] during [action]"
> 
> ---
> 
> ## Error Writing Rules Applied
> ✅ Use "we" language for system errors ("We couldn't load your files")
> ✅ Explain what happened in terms of what the user was doing
> ✅ Give a specific next step when possible
> ✅ Avoid technical terms: no "500", "null pointer", "timeout", "exception"
> ✅ Don't blame the user
> ✅ Don't give false reassurance ("This never happens") — it clearly just did

---
[← Back to Business & Career](README.md) · [Main index](../../README.md)