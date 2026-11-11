# Core Prompt Patterns

Reusable structural patterns for building deterministic, testable, and reliable prompts.

---

## 1. Delimited Context Framing

Use XML tags or distinct markdown delimiters (`<context>`, ````markdown````) to strictly separate user instructions from untrusted data inputs.

```text
You are a technical editor. Review the code diff provided inside <diff> tags against the project context in <context>.

<context>
${context}
</context>

<diff>
${diff}
</diff>

Return your findings categorized by: Blocking Issues, Suggestions, and Missing Tests.
```

**Why it works:** Prevents prompt injection and eliminates ambiguity between prompt instructions and data payloads.

---

## 2. Few-Shot Demonstration

Provide concrete input-output exemplars before the target input to establish formatting expectations and tone without ambiguous natural-language descriptions.

```text
Classify incoming customer feedback into Category and Severity.

Example:
Input: "The checkout page gave me a 500 error when clicking pay."
Output: {"category": "billing_error", "severity": "P0"}

Example:
Input: "I wish there was a dark mode option in settings."
Output: {"category": "feature_request", "severity": "P3"}

Input: "${feedback}"
Output:
```

**Why it works:** Demonstrates exact JSON schema compliance and edge-case handling better than instructions alone.

---

## 3. Step-by-Step Chain-of-Thought (CoT)

Require the model to produce its internal reasoning steps before generating the final answer.

```text
Analyze the following architectural proposal.
First, break down the pros and cons across performance, cost, and developer complexity.
Then, identify potential single points of failure.
Finally, give an executive recommendation with risk mitigations.
```

**Why it works:** Forces the model to generate intermediate reasoning tokens, significantly reducing hallucinations on analytical and multi-step tasks.

---

## 4. Negative Constraints & Guardrails

Explicitly declare what the model should **not** do, and define fallback behavior for missing information.

```text
Rules:
- Do not invent facts, features, or performance numbers.
- If the provided context does not contain sufficient details to answer, state: "Insufficient context to answer with certainty" and list the missing information.
- Do not apologize or include conversational filler.
```

**Why it works:** Prevents over-confident answers and hallucinated justifications when context is incomplete.

---

## 5. Output Schema Enforcement

Define the exact output format, schema, or markdown heading structure.

```text
Output Format:
Return your analysis strictly in the following Markdown format:
### Executive Summary
[1-2 sentences]
### Key Findings
- [Finding 1]
- [Finding 2]
### Action Items
| Task | Owner | Priority |
| --- | --- | --- |
| ... | ... | ... |
```

**Why it works:** Ensures downstream parsers, scripts, or readers receive consistent, predictable formatting.
