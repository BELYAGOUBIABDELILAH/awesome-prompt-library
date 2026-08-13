# GitHubTrends

**Category:** Coding & Development  
**Source:** Awesome ChatGPT Prompts

## Prompt

> ---
> name: GitHubTrends
> description: 显示GitHub热门项目趋势，生成可视化仪表板。USE WHEN github trends, trending projects, hot repositories, popular github projects, generate dashboard, create webpage.
> version: 2.0.0
> ---
> 
> ## Customization
> 
> **Before executing, check for user customizations at:**
> `~/.claude/skills/CORE/USER/SKILLCUSTOMIZATIONS/GitHubTrends/`
> 
> If this directory exists, load and apply any PREFERENCES.md, configurations, or resources found there. These override default behavior. If the directory does not exist, proceed with skill defaults.
> 
> # GitHubTrends - GitHub热门项目趋势
> 
> **快速发现GitHub上最受欢迎的开源项目。**
> 
> ---
> 
> ## Philosophy
> 
> GitHub trending是发现优质开源项目的最佳途径。这个skill让老王我能快速获取当前最热门的项目列表，按时间周期（每日/每周）和编程语言筛选，帮助发现值得学习和贡献的项目。
> 
> ---
> 
> ## Quick Start
> 
> ```bash
> # 查看本周最热门的项目（默认）
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly
> 
> # 查看今日最热门的项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts daily
> 
> # 按语言筛选
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=TypeScript
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=Python
> 
> # 指定显示数量
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --limit=20
> ```
> 
> ---
> 
> ## When to Use This Skill
> 
> **Core Triggers - Use this skill when user says:**
> 
> ### Direct Requests
> - "show github trends" 或 "github trending"
> - "显示热门项目" 或 "看看有什么热门项目"
> - "what's trending on github" 或 "github hot projects"
> - "本周热门项目" 或 "weekly trending"
> - "今日热门项目" 或 "daily trending"
> 
> ### Discovery Requests
> - "discover popular projects" 或 "发现热门项目"
> - "show repositories trending" 或 "显示trending仓库"
> - "github上什么最火" 或 "what's hot on github"
> - "找点好项目看看" 或 "find good projects"
> 
> ### Language-Specific
> - "TypeScript trending projects" 或 "TypeScript热门项目"
> - "Python trending" 或 "Python热门项目"
> - "show trending Rust projects" 或 "显示Rust热门项目"
> - "Go语言热门项目" 或 "trending Go projects"
> 
> ### Dashboard & Visualization
> - "生成 GitHub trending 仪表板" 或 "generate trending dashboard"
> - "创建趋势网页" 或 "create trending webpage"
> - "生成交互式报告" 或 "generate interactive report"
> - "export trending dashboard" 或 "导出仪表板"
> - "可视化 GitHub 趋势" 或 "visualize github trends"
> 
> ---
> 
> ## Core Capabilities
> 
> ### 获取趋势列表
> - **每日趋势** - 过去24小时最热门项目
> - **每周趋势** - 过去7天最热门项目（默认）
> - **语言筛选** - 按编程语言过滤（TypeScript, Python, Go, Rust等）
> - **自定义数量** - 指定返回项目数量（默认10个）
> 
> ### 生成可视化仪表板 
> - **交互式HTML** - 生成交互式网页仪表板
> - **数据可视化** - 语言分布饼图、Stars增长柱状图
> - **技术新闻** - 集成 Hacker News 技术资讯
> - **实时筛选** - 按语言筛选、排序、搜索功能
> - **响应式设计** - 支持桌面、平板、手机
> 
> ### 项目信息
> - 项目名称和描述
> - Star数量和变化
> - 编程语言
> - 项目URL
> 
> ---
> 
> ## Tool Usage
> 
> ### GetTrending.ts
> 
> **Location:** `Tools/GetTrending.ts`
> 
> **功能：** 从GitHub获取trending项目列表
> 
> **参数：**
> - `period` - 时间周期：`daily` 或 `weekly`（默认：weekly）
> - `--language` - 编程语言筛选（可选）
> - `--limit` - 返回项目数量（默认：10）
> 
> **使用示例：**
> ```bash
> # 基本用法
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly
> 
> # 带参数
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=TypeScript --limit=15
> 
> # 简写
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts daily -l=Python
> ```
> 
> **实现方式：**
> 使用 GitHub官方trending页面：https://github.com/trending
> 通过 fetch API 读取页面内容并解析
> 
> ---
> 
> ### GenerateDashboard.ts 
> 
> **Location:** `Tools/GenerateDashboard.ts`
> 
> **功能：** 生成交互式数据可视化仪表板HTML文件
> 
> **参数：**
> - `--period` - 时间周期：`daily` 或 `weekly`（默认：weekly）
> - `--language` - 编程语言筛选（可选）
> - `--limit` - 返回项目数量（默认：10）
> - `--include-news` - 包含技术新闻
> - `--news-count` - 新闻数量（默认：10）
> - `--output` - 输出文件路径（默认：./github-trends.html）
> 
> **使用示例：**
> ```bash
> # 基本用法 - 生成本周仪表板
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts
> 
> # 包含技术新闻
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts --include-news
> 
> # TypeScript 项目每日仪表板
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts \
>   --period daily \
>   --language TypeScript \
>   --limit 20 \
>   --include-news \
>   --output ~/ts-daily.html
> ```
> 
> **实现方式：**
> - 获取 GitHub trending 项目数据
> - 获取 Hacker News 技术新闻
> - 使用 Handlebars 模板引擎渲染 HTML
> - 集成 Tailwind CSS 和 Chart.js
> - 生成完全独立的 HTML 文件（通过 CDN 加载依赖）
> 
> ---
> 
> ## Output Format
> 
> ```markdown
> # GitHub Trending Projects - Weekly (2025-01-19)
> 
> ## 1. vercel/next.js - ⭐ 125,342 (+1,234 this week)
> **Language:** TypeScript
> **Description:** The React Framework for the Web
> **URL:** https://github.com/vercel/next.js
> 
> ## 2. microsoft/vscode - ⭐ 160,890 (+987 this week)
> **Language:** TypeScript
> **Description:** Visual Studio Code
> **URL:** https://github.com/microsoft/vscode
> 
> ...
> 
> ---
>  Total: 10 projects | Language: All | Period: Weekly
> ```
> 
> ---
> 
> ## Supported Languages
> 
> 常用编程语言筛选：
> - **TypeScript** - TypeScript项目
> - **JavaScript** - JavaScript项目
> - **Python** - Python项目
> - **Go** - Go语言项目
> - **Rust** - Rust项目
> - **Java** - Java项目
> - **C++** - C++项目
> - **Ruby** - Ruby项目
> - **Swift** - Swift项目
> - **Kotlin** - Kotlin项目
> 
> ---
> 
> ## Workflow Integration
> 
> 这个skill可以被其他skill调用：
> - **OSINT** - 在调查技术栈时发现热门工具
> - **Research** - 研究特定语言生态系统的趋势
> - **System** - 发现有用的PAI相关项目
> 
> ---
> 
> ## Technical Notes
> 
> **数据来源：** GitHub官方trending页面
> **更新频率：** 每小时更新一次
> **无需认证：** 使用公开页面，无需GitHub API token
> **解析方式：** 通过HTML解析提取项目信息
> 
> **错误处理：**
> - 网络错误会显示友好提示
> - 解析失败会返回原始HTML供调试
> - 支持的语言参数不区分大小写
> 
> ---
> 
> ## Future Enhancements
> 
> 可能的未来功能：
> - 支持月度趋势（如果GitHub提供）
> - 按stars范围筛选（1k+, 10k+, 100k+）
> - 保存历史数据用于趋势分析
> - 集成到其他skill的自动化工作流
> 
> ---
> 
> ## Voice Notification
> 
> **When executing a workflow, do BOTH:**
> 
> 1. **Send voice notification:**
>    ```bash
>    curl -s -X POST http://localhost:8888/notify \
>      -H "Content-Type: application/json" \
>      -d '{"message": "Running the GitHubTrends workflow"}' \
>      > /dev/null 2>&1 &
>    ```
> 
> 2. **Output text notification:**
>    ```
>    Running the **GitHubTrends** workflow...
>    ```
> 
> **Full documentation:** `~/.claude/skills/CORE/SkillNotifications.md`
> FILE:README.md
> # GitHubTrends Skill
> 
> **快速发现GitHub上最受欢迎的开源项目，生成可视化仪表板！**
> 
> ## 功能特性
> 
> ### 基础功能
> - ✅ 获取每日/每周热门项目列表
> - ✅ 按编程语言筛选（TypeScript, Python, Go, Rust等）
> - ✅ 自定义返回项目数量
> - ✅ 显示Star总数和周期增长
> - ✅ 无需GitHub API token
> 
> ### 可视化仪表板 
> - ✨ **交互式HTML** - 生成交互式网页仪表板
> -  **数据可视化** - 语言分布饼图、Stars增长柱状图
> -  **技术新闻** - 集成 Hacker News 最新资讯
> -  **实时筛选** - 按语言筛选、排序、搜索
> -  **响应式设计** - 支持桌面、平板、手机
> -  **美观界面** - Tailwind CSS + GitHub 风格
> 
> ## 快速开始
> 
> ### 查看本周热门项目（默认）
> 
> ```bash
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly
> ```
> 
> ### 查看今日热门项目
> 
> ```bash
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts daily
> ```
> 
> ### 按语言筛选
> 
> ```bash
> # TypeScript热门项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=TypeScript
> 
> # Python热门项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=Python
> 
> # Go热门项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly -l=Go
> ```
> 
> ### 指定返回数量
> 
> ```bash
> # 返回20个项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --limit=20
> 
> # 组合使用：返回15个TypeScript项目
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=TypeScript --limit=15
> ```
> 
> ---
> 
> ## 生成可视化仪表板 
> 
> ### 基本用法
> 
> ```bash
> # 生成本周趋势仪表板（默认）
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts
> ```
> 
> ### 包含技术新闻
> 
> ```bash
> # 生成包含 Hacker News 的仪表板
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts --include-news
> ```
> 
> ### 高级选项
> 
> ```bash
> # 生成 TypeScript 项目每日仪表板，包含 15 条新闻
> bun ~/.claude/skills/GitHubTrends/Tools/GenerateDashboard.ts \
>   --period daily \
>   --language TypeScript \
>   --limit 20 \
>   --include-news \
>   --news-count 15 \
>   --output ~/Downloads/ts-daily-trends.html
> ```
> 
> ### 仪表板功能
> 
> 生成的 HTML 文件包含：
> - **统计概览** - 总项目数、总 stars、top 项目
> - **语言分布图** - 饼图展示各语言占比
> - **Stars 增长图** - 柱状图展示增长趋势
> - **项目卡片** - 美观的卡片式项目展示
> - **技术新闻** - Hacker News 最新资讯
> - **交互功能** - 筛选、排序、搜索
> - **响应式** - 自适应各种屏幕尺寸
> 
> ---
> 
> ## 输出示例
> 
> ```markdown
> # GitHub Trending Projects - Weekly (2026-01-19)
> 
>  **Total:** 10 projects | **Language:** All | **Period:** Weekly
> 
> ---
> 
> ## 1. vercel/next.js - ⭐ 125,342 (+1,234 this week)
> **Language:** TypeScript
> **Description:** The React Framework for the Web
> **URL:** https://github.com/vercel/next.js
> 
> ## 2. microsoft/vscode - ⭐ 160,890 (+987 this week)
> **Language:** TypeScript
> **Description:** Visual Studio Code
> **URL:** https://github.com/microsoft/vscode
> 
> ...
> ```
> 
> ## 参数说明
> 
> | 参数 | 说明 | 默认值 | 可选值 |
> |------|------|--------|--------|
> | `period` | 时间周期 | `weekly` | `daily`, `weekly` |
> | `--language` | 编程语言筛选 | 全部 | TypeScript, Python, Go, Rust, Java等 |
> | `--limit` | 返回项目数量 | 10 | 任意正整数 |
> 
> ## 支持的语言
> 
> 常用的编程语言都可以作为筛选条件：
> - **TypeScript** - TypeScript项目
> - **JavaScript** - JavaScript项目
> - **Python** - Python项目
> - **Go** - Go语言项目
> - **Rust** - Rust项目
> - **Java** - Java项目
> - **C++** - C++项目
> - **Ruby** - Ruby项目
> - **Swift** - Swift项目
> - **Kotlin** - Kotlin项目
> 
> ## Skill 触发词
> 
> 当你说以下任何内容时，这个skill会被触发：
> 
> - "show github trends" / "github trending"
> - "显示热门项目" / "看看有什么热门项目"
> - "weekly trending" / "本周热门项目"
> - "daily trending" / "今日热门项目"
> - "TypeScript trending" / "Python trending"
> - "what's hot on github" / "github上什么最火"
> 
> ## 技术实现
> 
> - **数据源**: GitHub官方trending页面 (https://github.com/trending)
> - **解析方式**: HTML解析提取项目信息
> - **认证**: 无需GitHub API token
> - **更新频率**: 每小时更新一次
> 
> ## 目录结构
> 
> ```
> ~/.claude/skills/GitHubTrends/
> ├── SKILL.md              # Skill主文件
> ├── README.md             # 使用文档（本文件）
> ├── Tools/
> │   └── GetTrending.ts    # 获取trending数据的工具
> └── Workflows/
>     └── GetTrending.md    # 工作流文档
> ```
> 
> ## 注意事项
> 
> 1. **网络要求**: 需要能访问GitHub官网
> 2. **更新频率**: 数据每小时更新，不是实时
> 3. **解析准确性**: GitHub页面结构变化可能影响解析，如遇问题请检查 `/tmp/github-trending-debug-*.html`
> 4. **语言参数**: 不区分大小写，`--language=typescript` 和 `--language=TypeScript` 效果相同
> 
> ## 已知问题
> 
> - GitHub trending页面的HTML结构复杂，某些项目的URL和名称可能解析不完整
> - 如果GitHub页面结构变化，工具可能需要更新解析逻辑
> 
> ## 未来改进
> 
> - [ ] 支持保存历史数据用于趋势分析
> - [ ] 按stars范围筛选（1k+, 10k+, 100k+）
> - [ ] 更智能的HTML解析（使用HTML解析库而非正则）
> - [ ] 集成到其他skill的自动化工作流
> 
> ## 贡献
> 
> 如果发现问题或有改进建议，欢迎提出！
> 
> ---
> 
> **Made with ❤️ by 老王**
> FILE:Tools/GetTrending.ts
> #!/usr/bin/env bun
> /**
>  * GitHub Trending Projects Fetcher
>  *
>  * 从GitHub获取trending项目列表
>  * 支持每日/每周趋势，按语言筛选
>  */
> 
> import { $ } from "bun";
> 
> interface TrendingProject {
>   rank: number;
>   name: string;
>   description: string;
>   language: string;
>   stars: string;
>   starsThisPeriod: string;
>   url: string;
> }
> 
> interface TrendingOptions {
>   period: "daily" | "weekly";
>   language?: string;
>   limit: number;
> }
> 
> function buildTrendingUrl(options: TrendingOptions): string {
>   const baseUrl = "https://github.com/trending";
>   const since = options.period === "daily" ? "daily" : "weekly";
>   let url = `${baseUrl}?since=${since}`;
>   if (options.language) {
>     url += `&language=${encodeURIComponent(options.language.toLowerCase())}`;
>   }
>   return url;
> }
> 
> function parseTrendingProjects(html: string, limit: number): TrendingProject[] {
>   const projects: TrendingProject[] = [];
>   try {
>     const articleRegex = /<article[^>]*>([\s\S]*?)<\/article>/g;
>     const articles = html.match(articleRegex) || [];
>     const articlesToProcess = articles.slice(0, limit);
>     articlesToProcess.forEach((article, index) => {
>       try {
>         const headingMatch = article.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/);
>         let repoName: string | null = null;
>         if (headingMatch) {
>           const headingContent = headingMatch[1];
>           const validLinkMatch = headingContent.match(
>             /<a[^>]*href="\/([^\/"\/]+\/[^\/"\/]+)"[^>]*>(?![^<]*login)/
>           );
>           if (validLinkMatch) {
>             repoName = validLinkMatch[1];
>           }
>         }
>         if (!repoName) {
>           const repoMatch = article.match(
>             /<a[^>]*href="\/([a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+)"[^>]*>(?!.*(?:login|stargazers|forks|issues))/
>           );
>           repoName = repoMatch ? repoMatch[1] : null;
>         }
>         const descMatch = article.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
>         const description = descMatch
>           ? descMatch[1]
>               .replace(/<[^>]+>/g, "")
>               .replace(/&amp;/g, "&")
>               .replace(/&lt;/g, "<")
>               .replace(/&gt;/g, ">")
>               .replace(/&quot;/g, '"')
>               .trim()
>               .substring(0, 200)
>           : "No description";
>         const langMatch = article.match(/<span[^>]*itemprop="programmingLanguage"[^>]*>([^<]+)<\/span>/);
>         const language = langMatch ? langMatch[1].trim() : "Unknown";
>         const starsMatch = article.match(/<a[^>]*href="\/[^"]+\/stargazers"[^>]*>(\d[\d,]*)\s*stars?/);
>         const totalStars = starsMatch ? starsMatch[1] : "0";
>         const starsAddedMatch = article.match(/(\d[\d,]*)\s*stars?\s*(?:today|this week)/i);
>         const starsAdded = starsAddedMatch ? `+${starsAddedMatch[1]}` : "";
>         if (repoName && !repoName.includes("login") && !repoName.includes("return_to")) {
>           projects.push({
>             rank: index + 1,
>             name: repoName,
>             description,
>             language,
>             stars: totalStars,
>             starsThisPeriod: starsAdded,
>             url: `https://github.com/${repoName}`,
>           });
>         }
>       } catch (error) {
>         console.error(`解析第${index + 1}个项目失败:`, error);
>       }
>     });
>   } catch (error) {
>     console.error("解析trending项目失败:", error);
>   }
>   return projects;
> }
> 
> function formatProjects(projects: TrendingProject[], options: TrendingOptions): string {
>   if (projects.length === 0) {
>     return "# GitHub Trending - No Projects Found\n\n没有找到trending项目，可能是网络问题或页面结构变化。";
>   }
>   const periodLabel = options.period === "daily" ? "Daily" : "Weekly";
>   const languageLabel = options.language ? `Language: ${options.language}` : "Language: All";
>   const today = new Date().toISOString().split("T")[0];
>   let output = `# GitHub Trending Projects - ${periodLabel} (${today})\n\n`;
>   output += ` **Total:** ${projects.length} projects | **${languageLabel}** | **Period:** ${periodLabel}\n\n`;
>   output += `---\n\n`;
>   projects.forEach((project) => {
>     output += `## ${project.rank}. ${project.name} - ⭐ ${project.stars}`;
>     if (project.starsThisPeriod) {
>       output += ` (${project.starsThisPeriod} this ${options.period})`;
>     }
>     output += `\n`;
>     output += `**Language:** ${project.language}\n`;
>     output += `**Description:** ${project.description}\n`;
>     output += `**URL:** ${project.url}\n\n`;
>   });
>   output += `---\n`;
>   output += ` Data from: https://github.com/trending\n`;
>   return output;
> }
> 
> async function main() {
>   const args = process.argv.slice(2);
>   let period: "daily" | "weekly" = "weekly";
>   let language: string | undefined;
>   let limit = 10;
>   for (const arg of args) {
>     if (arg === "daily" || arg === "weekly") {
>       period = arg;
>     } else if (arg.startsWith("--language=")) {
>       language = arg.split("=")[1];
>     } else if (arg.startsWith("-l=")) {
>       language = arg.split("=")[1];
>     } else if (arg.startsWith("--limit=")) {
>       limit = parseInt(arg.split("=")[1]) || 10;
>     }
>   }
>   const options: TrendingOptions = { period, language, limit };
>   try {
>     const url = buildTrendingUrl(options);
>     console.error(`正在获取 GitHub trending 数据: ${url}`);
>     const response = await fetch(url);
>     if (!response.ok) {
>       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
>     }
>     const html = await response.text();
>     const projects = parseTrendingProjects(html, limit);
>     const formatted = formatProjects(projects, options);
>     console.log(formatted);
>     if (projects.length === 0) {
>       const debugFile = `/tmp/github-trending-debug-${Date.now()}.html`;
>       await Bun.write(debugFile, html);
>       console.error(`\n调试: 原始HTML已保存到 ${debugFile}`);
>     }
>   } catch (error) {
>     console.error("❌ 获取trending数据失败:");
>     console.error(error);
>     process.exit(1);
>   }
> }
> 
> main();
> FILE:Workflows/GetTrending.md
> # GetTrending Workflow
> 
> 获取GitHub trending项目列表的工作流程。
> 
> ## Description
> 
> 这个工作流使用 GetTrending.ts 工具从GitHub获取当前最热门的项目列表，支持按时间周期（每日/每周）和编程语言筛选。
> 
> ## When to Use
> 
> 当用户请求以下任何内容时使用此工作流：
> - "show github trends" / "github trending"
> - "显示热门项目" / "看看有什么热门项目"
> - "weekly trending" / "本周热门项目"
> - "daily trending" / "今日热门项目"
> - "TypeScript trending" / "Python trending" / 按语言筛选
> - "what's hot on github" / "github上什么最火"
> 
> ## Workflow Steps
> 
> ### Step 1: 确定参数
> 向用户确认或推断以下参数：
> - **时间周期**: daily (每日) 或 weekly (每周，默认)
> - **编程语言**: 可选（如 TypeScript, Python, Go, Rust等）
> - **项目数量**: 默认10个
> 
> ### Step 2: 执行工具
> 运行 GetTrending.ts 工具：
> 
> ```bash
> # 基本用法（本周，全部语言，10个项目）
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly
> 
> # 指定语言
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --language=TypeScript
> 
> # 指定数量
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts weekly --limit=20
> 
> # 组合参数
> bun ~/.claude/skills/GitHubTrends/Tools/GetTrending.ts daily --language=Python --limit=15
> ```
> 
> ### Step 3: 显示结果
> 工具会自动格式化输出，包括：
> - 项目排名
> - 项目名称
> - Star总数和周期内增长
> - 编程语言
> - 项目描述
> - GitHub URL
> 
> ### Step 4: 后续操作（可选）
> 根据用户需求，可以：
> - 打开某个项目页面
> - 使用其他skill进一步分析项目
> - 将结果保存到文件供后续参考
> 
> ## Integration with Other Skills
> 
> - **OSINT**: 在调查技术栈时发现热门工具
> - **Research**: 研究特定语言生态系统的趋势
> - **Browser**: 打开项目页面进行详细分析
> 
> ## Notes
> 
> - 数据每小时更新一次
> - 无需GitHub API token
> - 使用公开的GitHub trending页面
> - 支持的语言参数不区分大小写
> FILE:Tools/GenerateDashboard.ts
> #!/usr/bin/env bun
> /**
>  * GitHub Trending Dashboard Generator
>  *
>  * 生成交互式数据可视化仪表板
>  *
>  * 使用方式：
>  *   ./GenerateDashboard.ts [options]
>  *
>  * 选项：
>  *   --period       - daily | weekly (默认: weekly)
>  *   --language     - 编程语言筛选 (可选)
>  *   --limit        - 项目数量 (默认: 10)
>  *   --include-news - 包含技术新闻
>  *   --news-count   - 新闻数量 (默认: 10)
>  *   --theme        - light | dark | auto (默认: auto)
>  *   --output       - 输出文件路径 (默认: ./github-trends.html)
>  *
>  * 示例：
>  *   ./GenerateDashboard.ts
>  *   ./GenerateDashboard.ts --period daily --language TypeScript --include-news
>  *   ./GenerateDashboard.ts --limit 20 --output ~/trends.html
>  */
> 
> import Handlebars from 'handlebars';
> import type { DashboardOptions, TrendingProject, TechNewsItem, TemplateData } from './Lib/types';
> import { registerHelpers, renderTemplate } from './Lib/template-helpers';
> import { analyzeData } from './Lib/visualization-helpers';
> 
> // 注册 Handlebars 辅助函数
> registerHelpers();
> 
> /**
>  * 构建 GitHub trending URL
>  */
> function buildTrendingUrl(options: DashboardOptions): string {
>   const baseUrl = "https://github.com/trending";
>   const since = options.period === "daily" ? "daily" : "weekly";
>   let url = `${baseUrl}?since=${since}`;
> 
>   if (options.language) {
>     url += `&language=${encodeURIComponent(options.language.toLowerCase())}`;
>   }
> 
>   return url;
> }
> 
> /**
>  * 解析 HTML 提取 trending 项目
>  * （从 GetTrending.ts 复制的逻辑）
>  */
> async function getTrendingProjects(options: DashboardOptions): Promise<TrendingProject[]> {
>   const url = buildTrendingUrl(options);
> 
>   console.error(`正在获取 GitHub trending 数据: ${url}`);
> 
>   const response = await fetch(url);
>   if (!response.ok) {
>     throw new Error(`HTTP ${response.status}: ${response.statusText}`);
>   }
> 
>   const html = await response.text();
>   return parseTrendingProjects(html, options.limit);
> }
> 
> /**
>  * 解析 HTML
>  */
> function parseTrendingProjects(html: string, limit: number): TrendingProject[] {
>   const projects: TrendingProject[] = [];
> 
>   try {
>     const articleRegex = /<article[^>]*>([\s\S]*?)<\/article>/g;
>     const articles = html.match(articleRegex) || [];
>     const articlesToProcess = articles.slice(0, limit);
> 
>     articlesToProcess.forEach((article, index) => {
>       try {
>         const headingMatch = article.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/);
>         let repoName: string | null = null;
> 
>         if (headingMatch) {
>           const headingContent = headingMatch[1];
>           const validLinkMatch = headingContent.match(
>             /<a[^>]*href="\/([^\/"\/]+\/[^\/"\/]+)"[^>]*>(?![^<]*login)/
>           );
>           if (validLinkMatch) {
>             repoName = validLinkMatch[1];
>           }
>         }
> 
>         if (!repoName) {
>           const repoMatch = article.match(
>             /<a[^>]*href="\/([a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+)"[^>]*>(?!.*(?:login|stargazers|forks|issues))/
>           );
>           repoName = repoMatch ? repoMatch[1] : null;
>         }
> 
>         const descMatch = article.match(/<p[^>]*class="[^"]*col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
>         const description = descMatch
>           ? descMatch[1]
>               .replace(/<[^>]+>/g, "")
>               .replace(/&amp;/g, "&")
>               .replace(/&lt;/g, "<")
>               .replace(/&gt;/g, ">")
>               .replace(/&quot;/g, '"')
>               .trim()
>               .substring(0, 200)
>           : "No description";
> 
>         const langMatch = article.match(/<span[^>]*itemprop="programmingLanguage"[^>]*>([^<]+)<\/span>/);
>         const language = langMatch ? langMatch[1].trim() : "Unknown";
> 
>         // 提取stars总数 - GitHub 改了 HTML 结构，数字在 SVG 后面
>         const starsMatch = article.match(/stargazers[^>]*>[\s\S]*?<\/svg>\s*([\d,]+)/);
>         const totalStars = starsMatch ? starsMatch[1] : "0";
> 
>         // 尝试提取新增stars - 格式：XXX stars today/this week
>         const starsAddedMatch = article.match(/(\d[\d,]*)\s+stars?\s+(?:today|this week)/);
>         const starsAdded = starsAddedMatch ? `+${starsAddedMatch[1]}` : "";
> 
>         if (repoName && !repoName.includes("login") && !repoName.includes("return_to")) {
>           projects.push({
>             rank: index + 1,
>             name: repoName,
>             description,
>             language,
>             stars: totalStars,
>             starsThisPeriod: starsAdded,
>             url: `https://github.com/${repoName}`,
>           });
>         }
>       } catch (error) {
>         console.error(`解析第${index + 1}个项目失败:`, error);
>       }
>     });
>   } catch (error) {
>     console.error("解析trending项目失败:", error);
>   }
> 
>   return projects;
> }
> 
> /**
>  * 获取技术新闻
>  */
> async function getTechNews(count: number): Promise<TechNewsItem[]> {
>   const HN_API = 'https://hn.algolia.com/api/v1/search_by_date';
> 
>   try {
>     const response = await fetch(`${HN_API}?tags=story&hitsPerPage=${count}`);
>     if (!response.ok) {
>       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
>     }
> 
>     const data = await response.json();
> 
>     return data.hits.slice(0, count).map((hit: any) => ({
>       id: hit.objectID,
>       title: hit.title,
>       url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
>       source: 'hackernews',
>       points: hit.points || 0,
>       comments: hit.num_comments || 0,
>       timestamp: new Date(hit.created_at).toISOString(),
>       tags: hit._tags || []
>     }));
>   } catch (error) {
>     console.error('获取 Hacker News 失败:', error);
>     return [];
>   }
> }
> 
> /**
>  * 生成仪表板
>  */
> async function generateDashboard(options: DashboardOptions): Promise<void> {
>   try {
>     console.error(' 开始生成 GitHub Trending Dashboard...\n');
> 
>     // 1. 获取 GitHub Trending 数据
>     const projects = await getTrendingProjects(options);
>     console.error(`✅ 获取到 ${projects.length} 个项目`);
> 
>     // 2. 获取技术新闻（如果启用）
>     let news: TechNewsItem[] = [];
>     if (options.includeNews) {
>       news = await getTechNews(options.newsCount);
>       console.error(`✅ 获取到 ${news.length} 条新闻`);
>     }
> 
>     // 3. 分析数据
>     const analytics = analyzeData(projects);
>     console.error(`✅ 数据分析完成`);
> 
>     // 4. 准备模板数据
>     const templateData: TemplateData = {
>       title: 'GitHub Trending Dashboard',
>       generatedAt: new Date().toLocaleString('zh-CN'),
>       period: options.period === 'daily' ? 'Daily' : 'Weekly',
>       projects,
>       news,
>       analytics,
>       options
>     };
> 
>     // 5. 渲染模板
>     const templatePath = `${import.meta.dir}/../Templates/dashboard.hbs`;
>     const templateContent = await Bun.file(templatePath).text();
>     const template = Handlebars.compile(templateContent);
>     const html = template(templateData);
>     console.error(`✅ 模板渲染完成`);
> 
>     // 6. 保存文件
>     await Bun.write(options.output, html);
>     console.error(`\n 仪表板生成成功！`);
>     console.error(` 文件路径: ${options.output}`);
>     console.error(`\n 在浏览器中打开查看效果！`);
> 
>   } catch (error) {
>     console.error('\n❌ 生成仪表板失败:');
>     console.error(error);
>     process.exit(1);
>   }
> }
> 
> /**
>  * 解析命令行参数
>  */
> function parseArgs(): DashboardOptions {
>   const args = process.argv.slice(2);
> 
>   const options: DashboardOptions = {
>     period: 'weekly',
>     limit: 10,
>     output: './github-trends.html',
>     includeNews: false,
>     newsCount: 10,
>     theme: 'auto'
>   };
> 
>   for (let i = 0; i < args.length; i++) {
>     const arg = args[i];
> 
>     switch (arg) {
>       case '--period':
>         options.period = args[++i] === 'daily' ? 'daily' : 'weekly';
>         break;
>       case '--language':
>         options.language = args[++i];
>         break;
>       case '--limit':
>         options.limit = parseInt(args[++i]) || 10;
>         break;
>       case '--include-news':
>         options.includeNews = true;
>         break;
>       case '--news-count':
>         options.newsCount = parseInt(args[++i]) || 10;
>         break;
>       case '--theme':
>         options.theme = args[++i] === 'light' || args[++i] === 'dark' ? args[i] : 'auto';
>         break;
>       case '--output':
>         options.output = args[++i];
>         break;
>       default:
>         if (arg.startsWith('--output=')) {
>           options.output = arg.split('=')[1];
>         } else if (arg.startsWith('--language=')) {
>           options.language = arg.split('=')[1];
>         } else if (arg.startsWith('--limit=')) {
>           options.limit = parseInt(arg.split('=')[1]) || 10;
>         }
>     }
>   }
> 
>   return options;
> }
> 
> /**
>  * 主函数
>  */
> async function main() {
>   const options = parseArgs();
>   await generateDashboard(options);
> }
> 
> // 如果直接运行此脚本
> if (import.meta.main) {
>   main();
> }
> 
> // 导出供其他模块使用
> export { generateDashboard };
> export type { DashboardOptions };
> FILE:Tools/GetTechNews.ts
> #!/usr/bin/env bun
> /**
>  * Tech News Fetcher
>  *
>  * 从 Hacker News 和其他来源获取技术新闻
>  *
>  * 使用方式：
>  *   ./GetTechNews.ts [count]
>  *
>  * 参数：
>  *   count        - 获取新闻数量 (默认: 10)
>  *
>  * 示例：
>  *   ./GetTechNews.ts
>  *   ./GetTechNews.ts 20
>  */
> 
> import Parser from 'rss-parser';
> import type { TechNewsItem } from './Lib/types';
> 
> const HN_API = 'https://hn.algolia.com/api/v1/search';
> const parser = new Parser();
> 
> /**
>  * 从 Hacker News Algolia API 获取新闻
>  */
> async function getHackerNews(count: number): Promise<TechNewsItem[]> {
>   try {
>     const response = await fetch(`${HN_API}?tags=front_page&hits=${count}`);
>     if (!response.ok) {
>       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
>     }
> 
>     const data = await response.json();
> 
>     return data.hits.map((hit: any) => ({
>       id: hit.objectID,
>       title: hit.title,
>       url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
>       source: 'hackernews',
>       points: hit.points || 0,
>       comments: hit.num_comments || 0,
>       timestamp: new Date(hit.created_at).toISOString(),
>       tags: hit._tags || []
>     }));
>   } catch (error) {
>     console.error('获取 Hacker News 失败:', error);
>     return [];
>   }
> }
> 
> /**
>  * 从 Hacker News RSS 获取新闻（备用方案）
>  */
> async function getHackerNewsRSS(count: number): Promise<TechNewsItem[]> {
>   try {
>     const feed = await parser.parseURL('https://news.ycombinator.com/rss');
> 
>     return feed.items.slice(0, count).map((item: any) => ({
>       id: item.guid || item.link,
>       title: item.title || 'No title',
>       url: item.link,
>       source: 'hackernews',
>       timestamp: item.pubDate || new Date().toISOString(),
>       tags: ['hackernews', 'rss']
>     }));
>   } catch (error) {
>     console.error('获取 Hacker News RSS 失败:', error);
>     return [];
>   }
> }
> 
> /**
>  * 获取技术新闻（主函数）
>  */
> async function getTechNews(count: number = 10): Promise<TechNewsItem[]> {
>   console.error(`正在获取技术新闻（${count}条）...`);
> 
>   // 优先使用 Hacker News API
>   let news = await getHackerNews(count);
> 
>   // 如果失败，尝试 RSS 备用
>   if (news.length === 0) {
>     console.error('Hacker News API 失败，尝试 RSS...');
>     news = await getHackerNewsRSS(count);
>   }
> 
>   console.error(`✅ 获取到 ${news.length} 条新闻`);
>   return news;
> }
> 
> /**
>  * CLI 入口
>  */
> async function main() {
>   const args = process.argv.slice(2);
>   const count = parseInt(args[0]) || 10;
> 
>   try {
>     const news = await getTechNews(count);
> 
>     // 输出 JSON 格式（便于程序调用）
>     console.log(JSON.stringify(news, null, 2));
>   } catch (error) {
>     console.error('❌ 获取新闻失败:');
>     console.error(error);
>     process.exit(1);
>   }
> }
> 
> // 如果直接运行此脚本
> if (import.meta.main) {
>   main();
> }
> 
> // 导出供其他模块使用
> export { getTechNews };
> export type { TechNewsItem };
> FILE:Tools/Lib/types.ts
> /**
>  * GitHubTrends - 类型定义
>  *
>  * 定义所有 TypeScript 接口和类型
>  */
> 
> /**
>  * GitHub Trending 项目
>  */
> export interface TrendingProject {
>   rank: number;
>   name: string;
>   description: string;
>   language: string;
>   stars: string;
>   starsThisPeriod: string;
>   url: string;
> }
> 
> /**
>  * 技术新闻条目
>  */
> export interface TechNewsItem {
>   id: string;
>   title: string;
>   url: string;
>   source: string; // 'hackernews', 'reddit', etc.
>   points?: number;
>   comments?: number;
>   timestamp: string;
>   tags: string[];
> }
> 
> /**
>  * 仪表板生成选项
>  */
> export interface DashboardOptions {
>   period: 'daily' | 'weekly';
>   language?: string;
>   limit: number;
>   output: string;
>   includeNews: boolean;
>   newsCount: number;
>   theme: 'light' | 'dark' | 'auto';
> }
> 
> /**
>  * 数据分析结果
>  */
> export interface Analytics {
>   languageDistribution: Record<string, number>;
>   totalStars: number;
>   topProject: TrendingProject;
>   growthStats: {
>     highest: TrendingProject;
>     average: number;
>   };
> }
> 
> /**
>  * Trending 查询选项（用于 GetTrending.ts）
>  */
> export interface TrendingOptions {
>   period: "daily" | "weekly";
>   language?: string;
>   limit: number;
> }
> 
> /**
>  * 图表数据
>  */
> export interface ChartData {
>   labels: string[];
>   data: number[];
>   colors: string[];
> }
> 
> /**
>  * 模板渲染数据
>  */
> export interface TemplateData {
>   title: string;
>   generatedAt: string;
>   period: string;
>   projects: TrendingProject[];
>   news?: TechNewsItem[];
>   analytics: Analytics;
>   options: DashboardOptions;
> }
> FILE:Tools/Lib/template-helpers.ts
> /**
>  * Template Helpers
>  *
>  * Handlebars 自定义辅助函数
>  */
> 
> import Handlebars from 'handlebars';
> 
> /**
>  * 注册所有自定义辅助函数
>  */
> export function registerHelpers(): void {
>   // 格式化数字（添加千位分隔符）
>   Handlebars.registerHelper('formatNumber', (value: number) => {
>     return value.toLocaleString();
>   });
> 
>   // 截断文本
>   Handlebars.registerHelper('truncate', (str: string, length: number = 100) => {
>     if (str.length <= length) return str;
>     return str.substring(0, length) + '...';
>   });
> 
>   // 格式化日期
>   Handlebars.registerHelper('formatDate', (dateStr: string) => {
>     const date = new Date(dateStr);
>     return date.toLocaleDateString('zh-CN', {
>       year: 'numeric',
>       month: 'long',
>       day: 'numeric',
>       hour: '2-digit',
>       minute: '2-digit'
>     });
>   });
> 
>   // JSON 序列化（用于内嵌数据）
>   Handlebars.registerHelper('json', (context: any) => {
>     return JSON.stringify(context);
>   });
> 
>   // 条件判断
>   Handlebars.registerHelper('eq', (a: any, b: any) => {
>     return a === b;
>   });
> 
>   Handlebars.registerHelper('ne', (a: any, b: any) => {
>     return a !== b;
>   });
> 
>   Handlebars.registerHelper('gt', (a: number, b: number) => {
>     return a > b;
>   });
> 
>   Handlebars.registerHelper('lt', (a: number, b: number) => {
>     return a < b;
>   });
> }
> 
> /**
>  * 渲染模板
>  */
> export async function renderTemplate(
>   templatePath: string,
>   data: any
> ): Promise<string> {
>   const templateContent = await Bun.file(templatePath).text();
>   const template = Handlebars.compile(templateContent);
>   return template(data);
> }
> 
> export default { registerHelpers, renderTemplate };
> FILE:Tools/Lib/visualization-helpers.ts
> /**
>  * Visualization Helpers
>  *
>  * 数据分析和可视化辅助函数
>  */
> 
> import type { TrendingProject, Analytics } from './types';
> 
> /**
>  * 分析项目数据
>  */
> export function analyzeData(projects: TrendingProject[]): Analytics {
>   // 语言分布统计
>   const languageDistribution: Record<string, number> = {};
>   projects.forEach(project => {
>     const lang = project.language;
>     languageDistribution[lang] = (languageDistribution[lang] || 0) + 1;
>   });
> 
>   // 总 stars 数
>   const totalStars = projects.reduce((sum, project) => {
>     return sum + parseInt(project.stars.replace(/,/g, '') || 0);
>   }, 0);
> 
>   // 找出 top project
>   const topProject = projects.reduce((top, project) => {
>     const topStars = parseInt(top.stars.replace(/,/g, '') || 0);
>     const projStars = parseInt(project.stars.replace(/,/g, '') || 0);
>     return projStars > topStars ? project : top;
>   }, projects[0]);
> 
>   // 增长统计
>   const projectsWithGrowth = projects.filter(p => p.starsThisPeriod);
>   const growthValues = projectsWithGrowth.map(p =>
>     parseInt(p.starsThisPeriod.replace(/[+,]/g, '') || 0)
>   );
> 
>   const highestGrowth = projectsWithGrowth.reduce((highest, project) => {
>     const highestValue = parseInt(highest.starsThisPeriod.replace(/[+,]/g, '') || 0);
>     const projValue = parseInt(project.starsThisPeriod.replace(/[+,]/g, '') || 0);
>     return projValue > highestValue ? project : highest;
>   }, projectsWithGrowth[0] || projects[0]);
> 
>   const averageGrowth = growthValues.length > 0
>     ? Math.round(growthValues.reduce((a, b) => a + b, 0) / growthValues.length)
>     : 0;
> 
>   // 提取唯一语言列表（用于筛选）
>   const languages = Object.keys(languageDistribution).sort();
> 
>   // 生成图表数据
>   const growthData = projects.slice(0, 10).map(p => ({
>     name: p.name.split('/')[1] || p.name,
>     growth: parseInt(p.starsThisPeriod.replace(/[+,]/g, '') || 0)
>   }));
> 
>   return {
>     languageDistribution,
>     totalStars,

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)