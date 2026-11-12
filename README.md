<div align="center">

# Promptstack

**A collection of reusable AI prompts organized by category, with a free static JSON API.**

[![Prompts](https://img.shields.io/badge/prompts-2%2C682-orange?style=flat-square)](#browse-by-category)
[![Categories](https://img.shields.io/badge/categories-19-blue?style=flat-square)](#browse-by-category)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

<p>
  <a href="#browse-by-category">Browse Categories</a> &nbsp;·&nbsp;
  <a href="#how-to-use-prompts">How to Use Prompts</a> &nbsp;·&nbsp;
  <a href="#free-json-api">JSON API</a> &nbsp;·&nbsp;
  <a href="#learning-resources">Resources</a> &nbsp;·&nbsp;
  <a href="#contributing">Contributing</a>
</p>

</div>

---

## Overview

Promptstack provides structured prompts across 19 categories. Each prompt is available as a Markdown file in this repository and through a free static JSON API.

- **Variables:** Prompts use `${variable}` placeholders so you can fill in your own context or inputs.
- **Categories:** Prompts are organized into 19 task-oriented domains.
- **Access:** Browse prompts directly on GitHub, use the [web explorer](https://belyagoubiabdelilah.github.io/promptstack/), or query the static JSON API.

---

## How to Use Prompts

1. **Find a category:** Browse the [category list](#browse-by-category) below or open the web explorer.
2. **Open any prompt:** Prompts are stored in individual Markdown files under `prompts/{category}/{slug}.md`.
3. **Fill in variables:** Replace placeholders like `${topic}` or `${language:Python}` with your values.
4. **Run in any model:** Copy the prompt into your preferred AI tool, or load it programmatically through the API.

---

## Browse by Category

Promptstack organizes prompts into 19 task-focused categories:

<!-- CATEGORIES_START -->

| Category | Prompts | Focus |
|---|:---:|---|
| [Coding & Development](prompts/coding-development) | 1,080 | Code generation, debugging, refactoring, and testing |
| [Image & Design](prompts/image-design) | 396 | Image generation, composition, and visual styling |
| [Writing & Content](prompts/writing-content) | 255 | Editing, copywriting, storytelling, and translation |
| [Marketing & Social](prompts/marketing-social) | 196 | Campaign copy, social posts, and audience research |
| [Data & Analytics](prompts/data-analytics) | 172 | Data extraction, SQL queries, and metrics evaluation |
| [AI & Automation](prompts/ai-automation) | 121 | Agent prompts, workflow scripts, and system setup |
| [General](prompts/general) | 87 | Everyday productivity, brainstorming, and utilities |
| [Education & Learning](prompts/education-learning) | 75 | Explanations, study guides, and concept breakdowns |
| [Security](prompts/security) | 64 | Code auditing, threat modeling, and security policy |
| [Business & Career](prompts/business-career) | 58 | Resumes, cover letters, and workplace communication |
| [Documentation](prompts/documentation) | 57 | Technical specs, README files, and API docs |
| [Health & Wellness](prompts/health-wellness) | 29 | Fitness planning, nutrition ideas, and habit tracking |
| [Research & Analysis](prompts/research-analysis) | 26 | Literature review, synthesis, and comparative analysis |
| [Sales & Business](prompts/sales-business) | 21 | Outreach emails, pitch decks, and discovery questions |
| [Games & Fun](prompts/games-fun) | 20 | Interactive games, roleplay, and trivia |
| [Product & Strategy](prompts/product-strategy) | 17 | Feature specs, roadmaps, and competitive analysis |
| [Travel & Places](prompts/travel-places) | 5 | Itineraries, city guides, and travel planning |
| [Food & Recipes](prompts/food-recipes) | 3 | Recipe generation, meal ideas, and cooking advice |
| [Philosophy & Humanities](prompts/philosophy-humanities) | 1 | Ethics, philosophy, and critical thinking |

<!-- CATEGORIES_END -->

---

## Free JSON API

Promptstack serves a free static JSON API hosted via GitHub Pages. No registration, credentials, or rate limits.

**Base URL:** `https://belyagoubiabdelilah.github.io/promptstack`

| Endpoint | Description |
|---|---|
| [`/v1/stats.json`](https://belyagoubiabdelilah.github.io/promptstack/v1/stats.json) | Global prompt count, category breakdown, and endpoint directory |
| [`/v1/catalog.json`](https://belyagoubiabdelilah.github.io/promptstack/v1/catalog.json) | Complete lightweight searchable catalog of all prompts with snippets |
| [`/v1/categories/index.json`](https://belyagoubiabdelilah.github.io/promptstack/v1/categories/index.json) | List of all 19 categories with prompt counts and URLs |
| `/v1/categories/{folder}.json` | Complete list of all prompts in a category |
| [`/v1/index.json`](https://belyagoubiabdelilah.github.io/promptstack/v1/index.json) | Paginated list of all prompts (page 1) |
| `/v1/index/page-N.json` | Subsequent pagination pages |
| `/v1/prompts/{id}.json` | Individual prompt by stable ID |

### Example API Usage

```javascript
// Fetch all AI Automation prompts
const response = await fetch(
  'https://belyagoubiabdelilah.github.io/promptstack/v1/categories/ai-automation.json'
);
const { prompts } = await response.json();
console.log(prompts[0].title, prompts[0].prompt);
```

```python
# Discover categories via Python
import requests

data = requests.get('https://belyagoubiabdelilah.github.io/promptstack/v1/categories/index.json').json()
for cat in data['categories']:
    print(f"{cat['name']}: {cat['prompt_count']} prompts")
```

---

## Learning Resources

Prompt engineering guides, practical courses, research papers, and structural prompt patterns from [resources/](resources/):

### 1. Recommended 5-Step Learning Path

Follow this structured sequence to build practical prompt engineering skills:

1. **Master the Fundamentals:** [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google): Learn the task, context, references, evaluate, and iterate loop for everyday work.
2. **Practice Hands-On Structure and Debugging:** [Anthropic Interactive Prompt Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial): Nine interactive chapters covering XML delimiters, system prompts, few-shot examples, and failure mode debugging.
3. **Build API and Developer Systems:** [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/courses/chatgpt-prompt-eng): Code-first course on programmatic summarizing, extracting, inferring, and transforming data.
4. **Study Production Engineering:** *AI Engineering* by Chip Huyen (Chapter 5: Prompt Engineering) and [*The Prompt Report*](https://arxiv.org/abs/2406.06608): Production architectures, evaluation harnesses, and latency/cost trade-offs.
5. **Reference Frontier Documentation:** Consult official provider guides when designing new workflows.

### 2. Official Model Documentation

Direct guides from AI model creators on instruction following, system steering, and parameter tuning:

| Guide | Provider | Description | Link |
|---|---|---|---|
| **OpenAI Prompt Engineering Guide** | OpenAI | Instructions, reference text, task splitting, and prompt evaluation | [OpenAI Docs](https://platform.openai.com/docs/guides/prompt-engineering) |
| **Anthropic Prompt Engineering Overview** | Anthropic | XML tag delimiters, role framing, few-shot examples, and response prefilling | [Anthropic Docs](https://docs.anthropic.com/claude/docs/constructing-a-prompt) |
| **Building Effective Agents** | Anthropic | Autonomous workflows, tool use, reflection loops, and task decomposition | [Anthropic Research](https://www.anthropic.com/research/building-effective-agents) |
| **Google Cloud Prompt Design** | Google Cloud | Multi-modal prompt design, temperature, top-p tuning, and safety guardrails | [Google Cloud Docs](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design) |

### 3. Practical Courses and Interactive Tutorials

Hands-on courses for developers and practitioners:

| Course | Provider | Format | Link |
|---|---|---|---|
| **ChatGPT Prompt Engineering for Developers** | DeepLearning.AI & OpenAI | Jupyter notebook exercises covering API integration and chain building | [DeepLearning.AI](https://www.deeplearning.ai/courses/chatgpt-prompt-eng) |
| **Anthropic Interactive Tutorial** | Anthropic | Interactive Jupyter notebook series focused on Claude prompt patterns | [GitHub Repo](https://github.com/anthropics/prompt-eng-interactive-tutorial) |
| **Google Prompting Essentials** | Google & Coursera | Framework for workplace workflow automation and structured prompting | [Coursera](https://www.coursera.org/specializations/prompting-essentials-google) |
| **Building Systems with the ChatGPT API** | DeepLearning.AI | Multi-prompt chains, input evaluation, and end-to-end evaluation | [DeepLearning.AI](https://www.deeplearning.ai/courses/building-systems-with-chatgpt) |

### 4. Core Structural Prompt Patterns

Structural patterns to produce consistent, testable model outputs:

#### A. Delimited Context Framing
Isolates untrusted user data from instructions to prevent prompt injection and eliminate payload ambiguity:
```text
You are a technical editor. Review the code diff inside <diff> against the context in <context>.

<context>
${context}
</context>

<diff>
${diff}
</diff>

Return findings grouped by: Blocking Issues, Suggestions, and Missing Tests.
```

#### B. Few-Shot Demonstration
Establishes exact tone, schema, and edge-case behavior through concrete exemplars rather than abstract descriptions:
```text
Classify customer bug reports into Category and Severity.

Example 1:
Input: "Checkout throws a 500 server error when clicking pay."
Output: {"category": "billing", "severity": "P0"}

Example 2:
Input: "Dark mode option missing in settings."
Output: {"category": "ui_enhancement", "severity": "P3"}

Input: "${feedback}"
Output:
```

#### C. Chain-of-Thought (CoT)
Forces the model to produce intermediate reasoning tokens before generating its conclusion, reducing analytical errors:
```text
Analyze the proposed database migration:
1. Identify potential table lock risks and query performance impacts.
2. Check for backward compatibility with active service instances.
3. List necessary rollback steps.
4. Give a final recommendation with justifications.
```

#### D. Negative Constraints and Fallbacks
Suppresses hallucinated answers and defines deterministic fallback responses when context is incomplete:
```text
Rules:
- Rely strictly on the provided documentation. Do not extrapolate or assume features.
- If the text does not contain enough information to answer, state: "Insufficient context to answer with certainty" and list the missing details.
- Avoid conversational pleasantries, introductory filler, or apologies.
```

#### E. Output Schema Enforcement
Specifies an output structure such as JSON or a Markdown table for programmatic use:
```text
Return your evaluation strictly as a valid JSON object matching this schema:
{
  "score": 85,
  "verdict": "approved",
  "issues": [
    {"severity": "low", "file": "src/api.ts", "description": "Missing null check"}
  ]
}
```

For extended examples and production variations, see [resources/prompt-patterns.md](resources/prompt-patterns.md).

### 5. Foundational Books and Research Papers

| Work | Author / Institution | Focus |
|---|---|---|
| **AI Engineering** | Chip Huyen (O'Reilly) | Prompt design as part of production software, test suites, and evaluation |
| **The Prompt Report** | Schulhoff et al. (Vanderbilt) | Taxonomy of 58 prompting techniques across modern LLMs |
| **Chain-of-Thought Prompting** | Wei et al. (Google Research) | Paper introducing step-by-step reasoning in language models |
| **Tree of Thoughts** | Yao et al. (Princeton, DeepMind) | Framework for deliberate problem-solving with self-evaluation and backtracking |

Explore the full resource collections in [resources/](resources/):
- [Official Guides](resources/official-guides.md)
- [Courses and Tutorials](resources/courses.md)
- [Books and Papers](resources/books-and-papers.md)
- [Prompt Patterns](resources/prompt-patterns.md)

---

## Contributing

We welcome community contributions. To submit new prompts or suggest improvements:

1. Review [CONTRIBUTING.md](CONTRIBUTING.md) for quality criteria.
2. Prompts must be in English, actionable, and include useful `${variable}` placeholders where appropriate.
3. Submit single-prompt pull requests by editing the relevant file in `data/categories/{folder}.json`.

---

## License & Attribution

- **License:** [MIT](LICENSE)
- **Attribution:** Prompt authors and source origins are credited in individual prompt records according to applicable licenses and repository provenance records.
