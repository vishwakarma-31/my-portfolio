# Developer Workflow & AI Engineering Playbook

This document defines the operational rules and the frontend blueprint for all AI development work on this portfolio. As an AI agent working in this repository, you must strictly adhere to these rules.

## Core Philosophy
Every implementation must prioritize: Consistency, Readability, Stability, Maintainability, and Long-term scalability. Fast implementation should never compromise architectural quality.

## Source of Truth
The specification documents are authoritative. 
**Priority order:**
1. Product Specification (Documents 001–016)
2. Design System
3. Architecture
4. Implementation

Implementation must adapt to the specifications—not the reverse.

## AI Constraints
You must never:
- Rename folders arbitrarily.
- Replace frameworks.
- Introduce duplicate utilities.
- Ignore design tokens.
- Bypass accessibility.
- Disable linting or type checking.
- Add dependencies without justification.
- Mix unrelated concerns in a single change.

## Task Decomposition
Large work should be divided into independent tasks. Ensure you create a detailed `implementation_plan.md` artifact before executing major changes. The plan must include Objective, Scope, Inputs, Outputs, Dependencies, and Acceptance criteria.

## Component Dependency Rules
Dependencies must strictly flow downwards.
**Allowed direction:** Section -> Composite -> Primitive
**Forbidden direction:** Primitive -> Section
Primitive components (Buttons, Inputs, Badges, etc.) must remain context-independent, token-driven, and devoid of business logic.

## State and Animation Ownership
- **State**: Exists at the lowest practical level. Promote state globally only when strictly required.
- **Animation**: 
  - Primitives own hover/focus/press interactions.
  - Composites own local transitions.
  - Sections own scroll timelines.
  - Pages/Layouts own page navigation transitions.

## Rendering and Hydration Boundaries
- Prefer Server Components, static rendering, and selective hydration.
- Only hydrate interactive forms, GSAP timelines, and navigation menus.
- Lazy load heavy imagery, videos, and project galleries. Never lazy-load above-the-fold content.

## AI Planning Phase
Before generating code, you must:
1. Review the relevant specification documents.
2. Identify impacted components.
3. Check for reusable utilities.
4. Determine dependencies and boundaries according to the component dependency matrix.
5. Produce an implementation plan.

## Component Governance
Before creating a new component, ask:
- Does one already exist?
- Can an existing component be extended?
- Does it belong in the design system?
Duplicate components should be avoided.

## AI Self-Review
Before completing a task, you must evaluate:
- Did I follow the relevant specification documents?
- Did I introduce duplication or upward dependencies?
- Did I preserve architectural consistency and boundaries?
- Did I reuse existing systems?
- Did I update documentation?
- Did I respect performance, bundling, and accessibility requirements?

## Refactoring Rules
Refactoring is permitted only when it improves readability, reduces duplication, simplifies architecture, and preserves behavior. Refactoring must not introduce functional changes unless explicitly intended.

## Technical Debt & Errors
When uncertainty exists, you should explicitly identify the ambiguity instead of guessing. Do not silence errors without investigation. Maintain a technical debt register, and when debt is identified: document it, assess impact, prioritize remediation, and avoid silent workarounds.

## Product Operations & Maintenance
Deployment marks the beginning of operations, not the end. You must maintain the portfolio across its lifecycle by adhering to the following maintenance cadences:
- **Monthly**: Review dependencies, audit analytics, verify backups, test contact workflows, and check Lighthouse scores.
- **Quarterly**: Conduct accessibility audits (WCAG 2.2 AA), architecture reviews, content refreshes, and security reviews.
- **Annually**: Full specification review, design system review, and long-term roadmap reassessment.

## Deprecation & Asset Governance
When removing features, never do it silently: announce it, update documentation, remove dependent references, and verify no regressions. Maintain a clean asset library by regularly auditing for unused images, obsolete videos, duplicate assets, and incorrect file formats.

## Incident & Performance Management
Any performance regressions (bundle size, image optimization, LCP) must be treated as defects. For every significant incident or production failure, conclude with a documented postmortem to capture lessons learned.

## AI Implementation Contract & Prompting Protocol
As an AI implementation engineer on this project, your responsibility is faithful implementation. You are not the product owner or architect.
- **Dependency Verification**: Before changing any file, verify existing components, utilities, hooks, and design tokens to strictly avoid duplication.
- **Scope Protection**: Implementation must only modify the files directly required for the task. Scope expansion requires explicit approval.
- **Context Window Management**: Retrieve only relevant specification documents. Avoid repeating unchanged context.
- **Self-Verification Protocol**: Before marking a task complete, you must explicitly verify: Objective achieved, No duplicate logic introduced, Existing components reused, Tokens applied, Accessibility preserved, Tests pass, Documentation updated.
- **Error Recovery**: If implementation fails, identify the failure, explain the cause, isolate affected files, propose corrective action, and resume from the last verified state. Never rely on speculative fixes.

## Architecture Decision Records (ADR) & Governance
Architecture should evolve through documented decisions—not undocumented implementation.
- **When to write an ADR**: Required for changes involving folder structure, rendering strategy, routing, data models, state management, design tokens, build tooling, or third-party services.
- **Decision Hierarchy**: Product Vision (001) > Architecture (002-006) > Engineering Standards (007-016) > Operational Standards (017) > Implementation Contract (018) > ADR Governance (019). Lower levels must never contradict higher ones.
- **Breaking Changes**: Require an ADR, a migration strategy, documentation updates, impact assessment, and a rollback plan.
- **ADR Storage**: All architectural decisions must be recorded sequentially in the `/docs/adr` directory using the provided template.

## Repository Constitution (The Non-Negotiables)
The following principles are non-negotiable for anyone (Human or AI) contributing to this repository:
1. Product vision precedes implementation.
2. Architecture precedes optimization.
3. Design system precedes components.
4. Components precede pages.
5. Documentation evolves with code.
6. Governance precedes architectural change.
7. Quality is verified, not assumed.
8. Accessibility is mandatory.
9. Long-term maintainability outweighs short-term convenience.
10. Every significant engineering decision is documented.
