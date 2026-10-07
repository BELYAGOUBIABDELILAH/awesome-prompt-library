# claude-md-master

**Category:** Coding & Development  
**Source:** Awesome ChatGPT Prompts

## Prompt

> ---
> name: claude-md-master
> description: Master skill for CLAUDE.md lifecycle - create, update, improve with repo-verified content and multi-module support. Use when creating or updating CLAUDE.md files.
> ---
> 
> # CLAUDE.md Master (Create/Update/Improver)
> 
> ## When to use
> - User asks to create, improve, update, or standardize CLAUDE.md files.
> 
> ## Core rules
> - Only include info verified in repo or config.
> - Never include secrets, tokens, credentials, or user data.
> - Never include task-specific or temporary instructions.
> - Keep concise: root <= 200 lines, module <= 120 lines.
> - Use bullets; avoid long prose.
> - Commands must be copy-pasteable and sourced from repo docs/scripts/CI.
> - Skip empty sections; avoid filler.
> 
> ## Mandatory inputs (analyze before generating)
> - Build/package config relevant to detected stack (root + modules).
> - Static analysis config used in repo (if present).
> - Actual module structure and source patterns (scan real dirs/files).
> - Representative source roots per module to extract:
>   package/feature structure, key types, and annotations in use.
> 
> ## Discovery (fast + targeted)
> 1. Locate existing CLAUDE.md variants: `CLAUDE.md`, `.claude.md`, `.claude.local.md`.
> 2. Identify stack and entry points via minimal reads:
>    - `README.md`, relevant `docs/*`
>    - Build/package files (see stack references)
>    - Runtime/config: `Dockerfile`, `docker-compose.yml`, `.env.example`, `config/*`
>    - CI: `.github/workflows/*`, `.gitlab-ci.yml`, `.circleci/*`
> 3. Extract commands only if they exist in repo scripts/config/docs.
> 4. Detect multi-module structure:
>    - Android/Gradle: read `settings.gradle` or `settings.gradle.kts` includes.
>    - iOS: detect multiple targets/workspaces in `*.xcodeproj`/`*.xcworkspace`.
>    - If more than one module/target has `src/` or build config, plan module CLAUDE.md files.
> 5. For each module candidate, read its build file + minimal docs to capture
>    module-specific purpose, entry points, and commands.
> 6. Scan source roots for:
>    - Top-level package/feature folders and layer conventions.
>    - Key annotations/types in use (per stack reference).
>    - Naming conventions used in the codebase.
> 7. Capture non-obvious workflows/gotchas from docs or code patterns.
> 
> Performance:
> - Prefer file listing + targeted reads.
> - Avoid full-file reads when a section or symbol is enough.
> - Skip large dirs: `node_modules`, `vendor`, `build`, `dist`.
> 
> ## Stack-specific references (Pattern 2)
> Read the relevant reference only when detection signals appear:
> - Android/Gradle → `references/android.md`
> - iOS/Xcode/Swift → `references/ios.md`
> - PHP → `references/php.md`
> - Go → `references/go.md`
> - React (web) → `references/react-web.md`
> - React Native → `references/react-native.md`
> - Rust → `references/rust.md`
> - Python → `references/python.md`
> - Java/JVM → `references/java.md`
> - Node tooling → `references/node.md`
> - .NET/C# → `references/dotnet.md`
> - Dart/Flutter → `references/flutter.md`
> - Ruby/Rails → `references/ruby.md`
> - Elixir/Erlang → `references/elixir.md`
> - C/C++/CMake → `references/cpp.md`
> - Other/Unknown → `references/generic.md` (fallback when no specific reference matches)
> 
> If multiple stacks are detected, read multiple references.
> If no stack is recognized, use the generic reference.
> 
> ## Multi-module output policy (mandatory when detected)
> - Always create a root `CLAUDE.md`.
> - Also create `CLAUDE.md` inside each meaningful module/target root.
>   - "Meaningful" = has its own build config and `src/` (or equivalent).
>   - Skip tooling-only dirs like `buildSrc`, `gradle`, `scripts`, `tools`.
> - Module file must be module-specific and avoid duplication:
>   - Include purpose, key paths, entry points, module tests, and module
>     commands (if any).
>   - Reference shared info via `@/CLAUDE.md`.
> 
> ## Business module CLAUDE.md policy (all stacks)
> For monorepo business logic directories (`src/`, `lib/`, `packages/`, `internal/`):
> - Create `CLAUDE.md` for modules with >5 files OR own README
> - Skip utility-only dirs: `Helper`, `Utils`, `Common`, `Shared`, `Exception`, `Trait`, `Constants`
> - Layered structure not required; provide module info regardless of architecture
> - Max 120 lines per module CLAUDE.md
> - Reference root via `@/CLAUDE.md` for shared architecture/patterns
> - Include: purpose, structure, key classes, dependencies, entry points
> 
> ## Mandatory output sections (per module CLAUDE.md)
> Include these sections if detected in codebase (skip only if not present):
> - **Feature/component inventory**: list top-level dirs under source root
> - **Core/shared modules**: utility, common, or shared code directories
> - **Navigation/routing structure**: navigation graphs, routes, or routers
> - **Network/API layer pattern**: API clients, endpoints, response wrappers
> - **DI/injection pattern**: modules, containers, or injection setup
> - **Build/config files**: module-specific configs (proguard, manifests, etc.)
> 
> See stack-specific references for exact patterns to detect and report.
> 
> ## Update workflow (must follow)
> 1. Propose targeted additions only; show diffs per file.
> 
> 2. Ask for approval before applying updates:
> 
> **Cursor IDE:**
> Use the AskQuestion tool with these options:
> - id: "approval"
> - prompt: "Apply these CLAUDE.md updates?"
> - options: [{"id": "yes", "label": "Yes, apply"}, {"id": "no", "label": "No, cancel"}]
> 
> **Claude Code (Terminal):**
> Output the proposed changes and ask:
> "Do you approve these updates? (yes/no)"
> Stop and wait for user response before proceeding.
> 
> **Other Environments (Fallback):**
> If no structured question tool is available:
> 1. Display proposed changes clearly
> 2. Ask: "Do you approve these updates? Reply 'yes' to apply or 'no' to cancel."
> 3. Wait for explicit user confirmation before proceeding
> 
> 3. Apply updates, preserving custom content.
> 
> If no CLAUDE.md exists, propose a new file for approval.
> 
> ## Content extraction rules (mandatory)
> - From codebase only:
>   - Extract: type/class/annotation names used, real path patterns,
>     naming conventions.
>   - Never: hardcoded values, secrets, API keys, business-specific logic.
>   - Never: code snippets in Do/Do Not rules.
> 
> ## Verification before writing
> - [ ] Every rule references actual types/paths from codebase
> - [ ] No code examples in Do/Do Not sections
> - [ ] Patterns match what's actually in the codebase (not outdated)
> 
> ## Content rules
> - Include: commands, architecture summary, key paths, testing, gotchas, workflow quirks.
> - Exclude: generic best practices, obvious info, unverified statements.
> - Use `@path/to/file` imports to avoid duplication.
> - Do/Do Not format is optional; keep only if already used in the file.
> - Avoid code examples except short copy-paste commands.
> 
> ## Existing file strategy
> Detection:
> - If `<!-- Generated by claude-md-editor skill -->` exists → subsequent run
> - Else → first run
> 
> First run + existing file:
> - Backup `CLAUDE.md` → `CLAUDE.md.bak`
> - Use `.bak` as a source and extract only reusable, project-specific info
> - Generate a new concise file and add the marker
> 
> Subsequent run:
> - Preserve custom sections and wording unless outdated or incorrect
> - Update only what conflicts with current repo state
> - Add missing sections only if they add real value
> 
> Never modify `.claude.local.md`.
> 
> ## Output
> After updates, print a concise report:
> ```
> ## CLAUDE.md Update Report
> - /CLAUDE.md [CREATED | BACKED_UP+CREATED | UPDATED]
> - /<module>/CLAUDE.md [CREATED | UPDATED]
> - Backups: list any `.bak` files
> ```
> 
> ## Validation checklist
> - Description is specific and includes trigger terms
> - No placeholders remain
> - No secrets included
> - Commands are real and copy-pasteable
> - Report-first rule respected
> - References are one level deep
> FILE:README.md
> # claude-md-master
> 
> Master skill for the CLAUDE.md lifecycle: create, update, and improve files
> using repo-verified data, with multi-module support and stack-specific rules.
> 
> ## Overview
> - Goal: produce accurate, concise `CLAUDE.md` files from real repo data
> - Scope: root + meaningful modules, with stack-specific detection
> - Safeguards: no secrets, no filler, explicit approval before writes
> 
> ## How the AI discovers and uses this skill
> - Discovery: the tool learns this skill because it exists in the
>   repo skills catalog (installed/available in the environment)
> - Automatic use: when a request includes "create/update/improve
>   CLAUDE.md", the tool selects this skill as the best match
> - Manual use: the operator can explicitly invoke `/claude-md-master`
>   to force this workflow
> - Run behavior: it scans repo docs/config/source, proposes changes,
>   and waits for explicit approval before writing files
> 
> ## Audience
> - AI operators using skills in Cursor/Claude Code
> - Maintainers who evolve the rules and references
> 
> ## What it does
> - Generates or updates `CLAUDE.md` with verified, repo-derived content
> - Enforces strict safety and concision rules (no secrets, no filler)
> - Detects multi-module repos and produces module-level `CLAUDE.md`
> - Uses stack-specific references to capture accurate patterns
> 
> ## When to use
> - A user asks to create, improve, update, or standardize `CLAUDE.md`
> - A repo needs consistent, verified guidance for AI workflows
> 
> ## Inputs required (must be analyzed)
> - Repo docs: `README.md`, `docs/*` (if present)
> - Build/config files relevant to detected stack(s)
> - Runtime/config: `Dockerfile`, `.env.example`, `config/*` (if present)
> - CI: `.github/workflows/*`, `.gitlab-ci.yml`, `.circleci/*` (if present)
> - Source roots to extract real structure, types, annotations, naming
> 
> ## Output
> - Root `CLAUDE.md` (always)
> - Module `CLAUDE.md` for meaningful modules (build config + `src/`)
> - Concise update report listing created/updated files and backups
> 
> ## Workflow (high level)
> 1. Locate existing `CLAUDE.md` variants and detect first vs. subsequent run
> 2. Identify stack(s) and multi-module structure
> 3. Read relevant docs/configs/CI for real commands and workflow
> 4. Scan source roots for structure, key types, annotations, patterns
> 5. Generate root + module files, avoiding duplication via `@/CLAUDE.md`
> 6. Request explicit approval before applying updates
> 7. Apply changes and print the update report
> 
> ## Core rules and constraints
> - Only include info verified in repo; never add secrets
> - Keep concise: root <= 200 lines, module <= 120 lines
> - Commands must be real and copy-pasteable from repo docs/scripts/CI
> - Skip empty sections; avoid generic guidance
> - Never modify `.claude.local.md`
> - Avoid code examples in Do/Do Not sections
> 
> ## Multi-module policy (summary)
> - Always create root `CLAUDE.md`
> - Create module-level files only for meaningful modules
> - Skip tooling-only dirs (e.g., `buildSrc`, `gradle`, `scripts`, `tools`)
> - Business modules get their own file when >5 files or own README
> 
> ## References (stack-specific guides)
> Each reference defines detection signals, pre-gen sources, codebase scan
> targets, mandatory output items, command sources, and key paths.
> 
> - `references/android.md` — Android/Gradle
> - `references/ios.md` — iOS/Xcode/Swift
> - `references/react-web.md` — React web apps
> - `references/react-native.md` — React Native
> - `references/node.md` — Node tooling (generic)
> - `references/python.md` — Python
> - `references/java.md` — Java/JVM
> - `references/dotnet.md` — .NET (C#/F#)
> - `references/go.md` — Go
> - `references/rust.md` — Rust
> - `references/flutter.md` — Dart/Flutter
> - `references/ruby.md` — Ruby/Rails
> - `references/php.md` — PHP (Laravel/Symfony/CI/Phalcon)
> - `references/elixir.md` — Elixir/Erlang
> - `references/cpp.md` — C/C++
> - `references/generic.md` — Fallback when no stack matches
> 
> ## Extending the skill
> - Add a new `references/<stack>.md` using the same template
> - Keep detection signals and mandatory outputs specific and verifiable
> - Do not introduce unverified commands or generic advice
> 
> ## Quality checklist
> - Every rule references actual types/paths from the repo
> - No placeholders remain
> - No secrets included
> - Commands are real and copy-pasteable
> - Report-first rule respected; references are one level deep
> FILE:references/android.md
> # Android (Gradle)
> 
> ## Detection signals
> - `settings.gradle` or `settings.gradle.kts`
> - `build.gradle` or `build.gradle.kts`
> - `gradle.properties`
> - `gradle/libs.versions.toml`
> - `gradlew`
> - `gradle/wrapper/gradle-wrapper.properties`
> - `app/src/main/AndroidManifest.xml`
> 
> ## Multi-module signals
> - Multiple `include(...)` or `includeBuild(...)` entries in `settings.gradle*`
> - More than one module dir with `build.gradle*` and `src/`
> - Common module roots like `feature/`, `core/`, `library/` (if present)
> 
> ## Before generating, analyze these sources
> - `settings.gradle` or `settings.gradle.kts`
> - `build.gradle` or `build.gradle.kts` (root and modules)
> - `gradle/libs.versions.toml`
> - `gradle.properties`
> - `config/detekt/detekt.yml` (if present)
> - `app/src/main/AndroidManifest.xml` (or module manifests)
> 
> ## Codebase scan (Android-specific)
> - Source roots per module: `*/src/main/java/`, `*/src/main/kotlin/`
> - Package tree for feature/layer folders (record only if present):
>   `features/`, `core/`, `common/`, `data/`, `domain/`, `presentation/`,
>   `ui/`, `di/`, `navigation/`, `network/`
> - Annotation usage (record only if present):
>   Hilt (`@HiltAndroidApp`, `@AndroidEntryPoint`, `@HiltViewModel`,
>   `@Module`, `@InstallIn`, `@Provides`, `@Binds`),
>   Compose (`@Composable`, `@Preview`),
>   Room (`@Entity`, `@Dao`, `@Database`),
>   WorkManager (`@HiltWorker`, `ListenableWorker`, `CoroutineWorker`),
>   Serialization (`@Serializable`, `@Parcelize`),
>   Retrofit (`@GET`, `@POST`, `@PUT`, `@DELETE`, `@Body`, `@Query`)
> - Navigation patterns (record only if present): `NavHost`, `composable`
> 
> ## Mandatory output (Android module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Features inventory**: list dirs under `features/` (e.g., homepage, payment, auth)
> - **Core modules**: list dirs under `core/` (e.g., data, network, localization)
> - **Navigation graphs**: list `*Graph.kt` or `*Navigator*.kt` files
> - **Hilt modules**: list `@Module` classes or `di/` package contents
> - **Retrofit APIs**: list `*Api.kt` interfaces
> - **Room databases**: list `@Database` classes
> - **Workers**: list `@HiltWorker` classes
> - **Proguard**: mention `proguard-rules.pro` if present
> 
> ## Command sources
> - README/docs or CI invoking Gradle wrapper
> - Repo scripts that call `./gradlew`
> - `./gradlew assemble`, `./gradlew test`, `./gradlew lint` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `app/src/main/`, `app/src/main/res/`
> - `app/src/main/java/`, `app/src/main/kotlin/`
> - `app/src/test/`, `app/src/androidTest/`
> FILE:references/cpp.md
> # C / C++
> 
> ## Detection signals
> - `CMakeLists.txt`
> - `meson.build`
> - `Makefile`
> - `conanfile.*`, `vcpkg.json`
> - `compile_commands.json`
> - `src/`, `include/`
> 
> ## Multi-module signals
> - `CMakeLists.txt` with `add_subdirectory(...)`
> - Multiple `CMakeLists.txt` or `meson.build` in subdirs
> - `libs/`, `apps/`, or `modules/` with their own build files
> 
> ## Before generating, analyze these sources
> - `CMakeLists.txt` / `meson.build` / `Makefile`
> - `conanfile.*`, `vcpkg.json` (if present)
> - `compile_commands.json` (if present)
> - `src/`, `include/`, `tests/`, `libs/`
> 
> ## Codebase scan (C/C++-specific)
> - Source roots: `src/`, `include/`, `tests/`, `libs/`
> - Library/app split (record only if present):
>   `src/lib`, `src/app`, `src/bin`
> - Namespaces and class prefixes (record only if present)
> - CMake targets (record only if present):
>   `add_library`, `add_executable`
> 
> ## Mandatory output (C/C++ module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Libraries**: list library targets
> - **Executables**: list executable targets
> - **Headers**: list public header directories
> - **Modules/components**: list subdirectories with build files
> - **Dependencies**: list Conan/vcpkg dependencies (if any)
> 
> ## Command sources
> - README/docs or CI invoking `cmake`, `ninja`, `make`, or `meson`
> - Repo scripts that call build tools
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `src/`, `include/`
> - `tests/`, `libs/`
> FILE:references/dotnet.md
> # .NET (C# / F#)
> 
> ## Detection signals
> - `*.sln`
> - `*.csproj`, `*.fsproj`, `*.vbproj`
> - `global.json`
> - `Directory.Build.props`, `Directory.Build.targets`
> - `nuget.config`
> - `Program.cs`
> - `Startup.cs`
> - `appsettings*.json`
> 
> ## Multi-module signals
> - `*.sln` with multiple project entries
> - Multiple `*.*proj` files under `src/` and `tests/`
> - `Directory.Build.*` managing shared settings across projects
> 
> ## Before generating, analyze these sources
> - `*.sln`, `*.csproj` / `*.fsproj` / `*.vbproj`
> - `Directory.Build.props`, `Directory.Build.targets`
> - `global.json`, `nuget.config`
> - `Program.cs` / `Startup.cs`
> - `appsettings*.json`
> 
> ## Codebase scan (.NET-specific)
> - Source roots: `src/`, `tests/`, project folders with `*.csproj`
> - Layer folders (record only if present):
>   `Controllers`, `Services`, `Repositories`, `Domain`, `Infrastructure`
> - ASP.NET attributes (record only if present):
>   `[ApiController]`, `[Route]`, `[HttpGet]`, `[HttpPost]`, `[Authorize]`
> - EF Core usage (record only if present):
>   `DbContext`, `Migrations`, `[Key]`, `[Table]`
> 
> ## Mandatory output (.NET module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Controllers**: list `[ApiController]` classes
> - **Services**: list service classes
> - **Repositories**: list repository classes
> - **Entities**: list EF Core entity classes
> - **DbContext**: list database context classes
> - **Middleware**: list custom middleware
> - **Configuration**: list config sections or options classes
> 
> ## Command sources
> - README/docs or CI invoking `dotnet`
> - Repo scripts like `build.ps1`, `build.sh`
> - `dotnet run`, `dotnet test` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `src/`, `tests/`
> - `appsettings*.json`
> - `Controllers/`, `Models/`, `Views/`, `wwwroot/`
> FILE:references/elixir.md
> # Elixir / Erlang
> 
> ## Detection signals
> - `mix.exs`, `mix.lock`
> - `config/config.exs`
> - `lib/`, `test/`
> - `apps/` (umbrella)
> - `rel/`
> 
> ## Multi-module signals
> - Umbrella with `apps/` containing multiple `mix.exs`
> - Root `mix.exs` with `apps_path`
> 
> ## Before generating, analyze these sources
> - Root `mix.exs`, `mix.lock`
> - `config/config.exs`
> - `apps/*/mix.exs` (umbrella)
> - `lib/`, `test/`, `rel/`
> 
> ## Codebase scan (Elixir-specific)
> - Source roots: `lib/`, `test/`, `apps/*/lib` (umbrella)
> - Phoenix structure (record only if present):
>   `lib/*_web/`, `controllers`, `views`, `channels`, `routers`
> - Ecto usage (record only if present):
>   `schema`, `Repo`, `migrations`
> - Contexts/modules (record only if present):
>   `lib/*/` context modules and `*_context.ex`
> 
> ## Mandatory output (Elixir module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Contexts**: list context modules
> - **Schemas**: list Ecto schema modules
> - **Controllers**: list Phoenix controller modules
> - **Channels**: list Phoenix channel modules
> - **Workers**: list background job modules (Oban, etc.)
> - **Umbrella apps**: list apps under umbrella (if any)
> 
> ## Command sources
> - README/docs or CI invoking `mix`
> - Repo scripts that call `mix`
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `lib/`, `test/`, `config/`
> - `apps/`, `rel/`
> FILE:references/flutter.md
> # Dart / Flutter
> 
> ## Detection signals
> - `pubspec.yaml`, `pubspec.lock`
> - `analysis_options.yaml`
> - `lib/`
> - `android/`, `ios/`, `web/`, `macos/`, `windows/`, `linux/`
> 
> ## Multi-module signals
> - `melos.yaml` (Flutter monorepo)
> - Multiple `pubspec.yaml` under `packages/`, `apps/`, or `plugins/`
> 
> ## Before generating, analyze these sources
> - `pubspec.yaml`, `pubspec.lock`
> - `analysis_options.yaml`
> - `melos.yaml` (if monorepo)
> - `lib/`, `test/`, and platform folders (`android/`, `ios/`, etc.)
> 
> ## Codebase scan (Flutter-specific)
> - Source roots: `lib/`, `test/`
> - Entry point (record only if present): `lib/main.dart`
> - Layer folders (record only if present):
>   `features/`, `core/`, `data/`, `domain/`, `presentation/`
> - State management (record only if present):
>   `Bloc`, `Cubit`, `ChangeNotifier`, `Provider`, `Riverpod`
> - Widget naming (record only if present):
>   `*Screen`, `*Page`
> 
> ## Mandatory output (Flutter module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Features**: list dirs under `features/` or `lib/`
> - **Core modules**: list dirs under `core/` (if present)
> - **State management**: list Bloc/Cubit/Provider setup
> - **Repositories**: list repository classes
> - **Data sources**: list remote/local data source classes
> - **Widgets**: list shared widget directories
> 
> ## Command sources
> - README/docs or CI invoking `flutter`
> - Repo scripts that call `flutter` or `dart`
> - `flutter run`, `flutter test`, `flutter pub get` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `lib/`, `test/`
> - `android/`, `ios/`
> FILE:references/generic.md
> # Generic / Unknown Stack
> 
> Use this reference when no specific stack reference matches.
> 
> ## Detection signals (common patterns)
> - `README.md`, `CONTRIBUTING.md`
> - `Makefile`, `Taskfile.yml`, `justfile`
> - `Dockerfile`, `docker-compose.yml`
> - `.env.example`, `config/`
> - CI files: `.github/workflows/`, `.gitlab-ci.yml`, `.circleci/`
> 
> ## Before generating, analyze these sources
> - `README.md` - project overview, setup instructions, commands
> - Build/package files in root (any recognizable format)
> - `Makefile`, `Taskfile.yml`, `justfile`, `scripts/` (if present)
> - CI/CD configs for build/test commands
> - `Dockerfile` for runtime info
> 
> ## Codebase scan (generic)
> - Identify source root: `src/`, `lib/`, `app/`, `pkg/`, or root
> - Layer folders (record only if present):
>   `controllers`, `services`, `models`, `handlers`, `utils`, `config`
> - Entry points: `main.*`, `index.*`, `app.*`, `server.*`
> - Test location: `tests/`, `test/`, `spec/`, `__tests__/`, or co-located
> 
> ## Mandatory output (generic CLAUDE.md)
> Include these if detected (list actual names found):
> - **Entry points**: main files, startup scripts
> - **Source structure**: top-level dirs under source root
> - **Config files**: environment, settings, secrets template
> - **Build system**: detected build tool and config location
> - **Test setup**: test framework and run command
> 
> ## Command sources
> - README setup/usage sections
> - `Makefile` targets, `Taskfile.yml` tasks, `justfile` recipes
> - CI workflow steps (build, test, lint)
> - `scripts/` directory
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - Source root and its top-level structure
> - Config/environment files
> - Test directory
> - Documentation location
> - Build output directory
> FILE:references/go.md
> # Go
> 
> ## Detection signals
> - `go.mod`, `go.sum`, `go.work`
> - `cmd/`, `internal/`
> - `main.go`
> - `magefile.go`
> - `Taskfile.yml`
> 
> ## Multi-module signals
> - `go.work` with multiple module paths
> - Multiple `go.mod` files in subdirs
> - `apps/` or `services/` each with its own `go.mod`
> 
> ## Before generating, analyze these sources
> - `go.work`, `go.mod`, `go.sum`
> - `cmd/`, `internal/`, `pkg/` layout
> - `Makefile`, `Taskfile.yml`, `magefile.go` (if present)
> 
> ## Codebase scan (Go-specific)
> - Source roots: `cmd/`, `internal/`, `pkg/`, `api/`
> - Layer folders (record only if present):
>   `handler`, `service`, `repository`, `store`, `config`
> - Framework markers (record only if present):
>   `gin`, `echo`, `fiber`, `chi` imports
> - Entry points (record only if present):
>   `cmd/*/main.go`, `main.go`
> 
> ## Mandatory output (Go module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Commands**: list binaries under `cmd/`
> - **Handlers**: list HTTP handler packages
> - **Services**: list service packages
> - **Repositories**: list repository or store packages
> - **Models**: list domain model packages
> - **Config**: list config loading packages
> 
> ## Command sources
> - README/docs or CI
> - `Makefile`, `Taskfile.yml`, or repo scripts invoking Go tools
> - `go test ./...`, `go run` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `cmd/`, `internal/`, `pkg/`, `api/`
> - `tests/` or `*_test.go` layout
> FILE:references/ios.md
> # iOS (Xcode/Swift)
> 
> ## Detection signals
> - `Package.swift`
> - `*.xcodeproj` or `*.xcworkspace`
> - `Podfile`, `Cartfile`
> - `Project.swift`, `Tuist/`
> - `fastlane/Fastfile`
> - `*.xcconfig`
> - `Sources/` or `Tests/` (SPM layouts)
> 
> ## Multi-module signals
> - Multiple targets/projects in `*.xcworkspace` or `*.xcodeproj`
> - `Package.swift` with multiple targets/products
> - `Sources/<TargetName>` and `Tests/<TargetName>` layout
> - `Project.swift` defining multiple targets (Tuist)
> 
> ## Before generating, analyze these sources
> - `Package.swift` (SPM)
> - `*.xcodeproj/project.pbxproj` or `*.xcworkspace/contents.xcworkspacedata`
> - `Podfile`, `Cartfile` (if present)
> - `Project.swift` / `Tuist/` (if present)
> - `fastlane/Fastfile` (if present)
> - `Sources/` and `Tests/` layout for targets
> 
> ## Codebase scan (iOS-specific)
> - Source roots: `Sources/`, `Tests/`, `ios/` (if present)
> - Feature/layer folders (record only if present):
>   `Features/`, `Core/`, `Services/`, `Networking/`, `UI/`, `Domain/`, `Data/`
> - SwiftUI usage (record only if present):
>   `@main`, `App`, `@State`, `@StateObject`, `@ObservedObject`,
>   `@Environment`, `@EnvironmentObject`, `@Binding`
> - UIKit/lifecycle (record only if present):
>   `UIApplicationDelegate`, `SceneDelegate`, `UIViewController`
> - Combine/concurrency (record only if present):
>   `@Published`, `Publisher`, `AnyCancellable`, `@MainActor`, `Task`
> 
> ## Mandatory output (iOS module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Features inventory**: list dirs under `Features/` or feature targets
> - **Core modules**: list dirs under `Core/`, `Services/`, `Networking/`
> - **Navigation**: list coordinators, routers, or SwiftUI navigation files
> - **DI container**: list DI setup (Swinject, Factory, manual containers)
> - **Network layer**: list API clients or networking services
> - **Persistence**: list CoreData models or other storage classes
> 
> ## Command sources
> - README/docs or CI invoking Xcode or Swift tooling
> - Repo scripts that call Xcode/Swift tools
> - `xcodebuild`, `swift build`, `swift test` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `Sources/`, `Tests/`
> - `fastlane/`
> - `ios/` (React Native or multi-platform repos)
> FILE:references/java.md
> # Java / JVM
> 
> ## Detection signals
> - `pom.xml` or `build.gradle*`
> - `settings.gradle`, `gradle.properties`
> - `mvnw`, `gradlew`
> - `gradle/wrapper/gradle-wrapper.properties`
> - `src/main/java`, `src/test/java`, `src/main/kotlin`
> - `src/main/resources/application.yml`, `src/main/resources/application.properties`
> 
> ## Multi-module signals
> - `settings.gradle*` includes multiple modules
> - Parent `pom.xml` with `<modules>` (packaging `pom`)
> - Multiple `build.gradle*` or `pom.xml` files in subdirs
> 
> ## Before generating, analyze these sources
> - `settings.gradle*` and `build.gradle*` (if Gradle)
> - Parent and module `pom.xml` (if Maven)
> - `gradle/libs.versions.toml` (if present)
> - `gradle.properties` / `mvnw` / `gradlew`
> - `src/main/resources/application.yml|application.properties` (if present)
> 
> ## Codebase scan (Java/JVM-specific)
> - Source roots: `src/main/java`, `src/main/kotlin`, `src/test/java`, `src/test/kotlin`
> - Package/layer folders (record only if present):
>   `controller`, `service`, `repository`, `domain`, `model`, `dto`, `config`, `client`
> - Framework annotations (record only if present):
>   `@SpringBootApplication`, `@RestController`, `@Controller`, `@Service`,
>   `@Repository`, `@Component`, `@Configuration`, `@Bean`, `@Transactional`
> - Persistence/validation (record only if present):
>   `@Entity`, `@Table`, `@Id`, `@OneToMany`, `@ManyToOne`, `@Valid`, `@NotNull`
> - Entry points (record only if present):
>   `*Application` classes with `main`
> 
> ## Mandatory output (Java/JVM module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Controllers**: list `@RestController` or `@Controller` classes
> - **Services**: list `@Service` classes
> - **Repositories**: list `@Repository` classes or JPA interfaces
> - **Entities**: list `@Entity` classes
> - **Configuration**: list `@Configuration` classes
> - **Security**: list security config or auth filters
> - **Profiles**: list Spring profiles in use
> 
> ## Command sources
> - Maven/Gradle wrapper scripts
> - README/docs or CI
> - `./mvnw spring-boot:run`, `./gradlew bootRun` usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `src/main/java`, `src/test/java`
> - `src/main/kotlin`, `src/test/kotlin`
> - `src/main/resources`, `src/test/resources`
> - `src/main/java/**/controller`, `src/main/java/**/service`, `src/main/java/**/repository`
> FILE:references/node.md
> # Node Tooling (generic)
> 
> ## Detection signals
> - `package.json`
> - `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`
> - `.nvmrc`, `.node-version`
> - `tsconfig.json`
> - `.npmrc`, `.yarnrc.yml`
> - `next.config.*`, `nuxt.config.*`
> - `nest-cli.json`, `svelte.config.*`, `astro.config.*`
> 
> ## Multi-module signals
> - `pnpm-workspace.yaml`, `lerna.json`, `nx.json`, `turbo.json`, `rush.json`
> - Root `package.json` with `workspaces`
> - Multiple `package.json` under `apps/`, `packages/`
> 
> ## Before generating, analyze these sources
> - Root `package.json` and workspace config (`pnpm-workspace.yaml`, `lerna.json`,
>   `nx.json`, `turbo.json`, `rush.json`)
> - `apps/*/package.json`, `packages/*/package.json` (if monorepo)
> - `tsconfig.json` or `jsconfig.json`
> - Framework config: `next.config.*`, `nuxt.config.*`, `nest-cli.json`,
>   `svelte.config.*`, `astro.config.*` (if present)
> 
> ## Codebase scan (Node-specific)
> - Source roots: `src/`, `lib/`, `apps/`, `packages/`
> - Folder patterns (record only if present):
>   `routes`, `controllers`, `services`, `middlewares`, `handlers`,
>   `utils`, `config`, `models`, `schemas`
> - Framework markers (record only if present):
>   Express (`express()`, `Router`), Koa (`new Koa()`),
>   Fastify (`fastify()`), Nest (`@Controller`, `@Module`, `@Injectable`)
> - Full-stack layouts (record only if present):
>   Next/Nuxt (`pages/`, `app/`, `server/`)
> 
> ## Mandatory output (Node module CLAUDE.md)
> Include these if detected (list actual names found):
> - **Routes/pages**: list route files or page components
> - **Controllers/handlers**: list controller or handler files
> - **Services**: list service classes or modules
> - **Middlewares**: list middleware files
> - **Models/schemas**: list data models or validation schemas
> - **State management**: list store setup (Redux, Zustand, etc.)
> - **API clients**: list external API client modules
> 
> ## Command sources
> - `package.json` scripts
> - README/docs or CI
> - `npm|yarn|pnpm` script usage in docs/scripts
> - Only include commands present in repo
> 
> ## Key paths to mention (only if present)
> - `src/`, `lib/`
> - `tests/`
> - `apps/`, `packages/` (monorepos)
> - `pages/`, `app/`, `server/`, `api/`
> - `controllers/`, `services/`
> FILE:references/php.md
> # PHP
> 
> ## Detection signals
> - `composer.json`, `composer.lock`
> - `public/index.php`
> - `artisan`, `spark`, `bin/console` (framework entry points)
> - `phpunit.xml`, `phpstan.neon`, `phpstan.neon.dist`, `psalm.xml`
> - `config/app.php`
> - `routes/web.php`, `routes/api.php`
> - `config/packages/` (Symfony)
> - `app/Config/` (CI4)
> - `ext-phalcon` in composer.json (Phalcon)
> - `phalcon/ide-stubs`, `phalcon/devtools` (Phalcon)
> 
> ## Multi-module signals
> - `modules/` or `app/Modules/` (HMVC style)
> - `app/Config/Modules.php`, `app/Config/Autoload.php` (CI4)
> - Multiple PSR-4 roots in `composer.json`
> - Multiple `composer.json` under `packages/` or `apps/`
> - `apps/` with subdirectories containing `Module.php` or `controllers/`
> 
> ## Before generating, analyze these sources
> - `composer.json`, `composer.lock`
> - `config/` and `routes/` (framework configs)
> - `app/Config/*` (CI4)
> - `modules/` or `app/Modules/` (if HMVC)
> - `phpunit.xml`, `phpstan.neon*`, `psalm.xml` (if present)
> - `bin/worker.php`, `bin/console.php` (CLI entry points)
> 
> ## Codebase scan (PHP-specific)
> - Source roots: `app/`, `src/`, `modules/`, `packages/`, `apps/`
> - Laravel structure (record only if present):
>   `app/Http/Controllers`, `app/Models`, `database/migrations`,
>   `routes/*.php`, `resources/views`
> - Symfony structure (record only if present):
>   `src/Controller`, `src/Entity`, `config/packages`, `templates`
> - CodeIgniter structure (record only if present):
>   `app/Controllers`, `app/Models`, `app/Views`, `app/Config/Routes.php`,
>   `app/Database/Migrations`
> - Phalcon structure (record only if present):
>   `apps/*/controllers/`, `apps/*/Module.ph

---
[← Back to Coding & Development](README.md) · [Main index](../../README.md)