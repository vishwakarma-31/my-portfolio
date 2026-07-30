# DOCUMENT 021: Code Standards, Patterns & Anti-Patterns Specification

**Version:** 1.0
**Priority:** Critical
**Depends On:** Documents 001–020

## 1. Purpose

This document defines mandatory coding standards for the repository.

It standardizes:
- Code organization
- Naming
- TypeScript usage
- React patterns
- Next.js conventions
- Error handling
- Performance practices
- Readability
- Maintainability
- Anti-patterns

The objective is to produce a codebase that is predictable, scalable, and easy to review.

## 2. Philosophy

Code should optimize for:
- Readability
- Simplicity
- Explicitness
- Predictability
- Long-term maintenance

Code is read more often than it is written.

## 3. Code Quality Principles

Every file should be:
- Small
- Cohesive
- Reusable
- Well-typed
- Testable
- Self-explanatory

Avoid cleverness that obscures intent.

## 4. File Organization

Each file should have a single responsibility.

Recommended order:
1. Imports
2. Constants
3. Types
4. Utilities
5. Component
6. Helper Functions
7. Exports

Maintain a consistent structure across the project.

## 5. Naming Conventions

Use descriptive names.

Examples:
- `ProjectCard`
- `HeroSection`
- `ContactForm`
- `useScrollProgress`
- `calculateReadingTime`
- `formatProjectDate`

Avoid abbreviations unless they are industry-standard.

## 6. Component Standards

Every component should:
- Accept minimal props
- Be composable
- Avoid hidden side effects
- Remain deterministic
- Follow the design system

One component should solve one problem.

## 7. TypeScript Standards

Always:
- Prefer explicit interfaces
- Avoid `any`
- Use `readonly` types where appropriate
- Narrow union types
- Leverage utility types

Strong typing is a design tool, not merely a compiler requirement.

## 8. React Standards

Prefer:
- Functional components
- Composition over inheritance
- Server Components by default
- Hooks for reusable behavior

Avoid unnecessary abstraction.

## 9. Hook Standards

Hooks should:
- Encapsulate one concern
- Return stable APIs
- Avoid hidden dependencies
- Be independently testable

Custom hooks should not become mini-frameworks.

## 10. State Management

Keep state:
- Local by default
- Lifted only when necessary
- Minimal
- Derived where possible

Avoid duplicated sources of truth.

## 11. Error Handling

Errors should:
- Be explicit
- Include meaningful messages
- Preserve context
- Fail gracefully

Silent failures are unacceptable.

## 12. Async Patterns

Prefer:
- `async/await`
- Proper error handling
- Cancellation where appropriate
- Loading states

Avoid deeply nested promise chains.

## 13. Performance Standards

Avoid:
- Unnecessary renders
- Duplicate computations
- Oversized bundles
- Uncontrolled animations

Performance should be considered during implementation—not after.

## 14. Accessibility Standards

Every interactive element must support:
- Keyboard navigation
- Focus visibility
- Screen readers
- Semantic HTML
- ARIA only when necessary

Accessibility is a default requirement.

## 15. Styling Standards

All styling should use:
- Design tokens
- Tailwind utility classes
- Semantic spacing
- Consistent typography

Inline styles are prohibited except for runtime-calculated values.

## 16. Component Composition

Prefer:
`Page` -> `Section` -> `Composite` -> `Primitive`

Avoid skipping abstraction layers.

## 17. Reusability Rules

Before writing new code, verify:
- Existing component
- Existing hook
- Existing utility
- Existing token
- Existing helper

Reuse before creating.

## 18. Anti-Patterns

Forbidden:
- `any`
- Magic numbers
- Deep prop drilling
- Duplicate logic
- Circular imports
- Global mutable state
- Hard-coded colors
- Hard-coded spacing
- Anonymous default exports
- Business logic inside JSX

## 19. Comment Policy

Comments should explain: **Why**
Not: **What**

Well-written code should make implementation details self-evident.

## 20. Import Standards

Order imports:
1. React / Next.js
2. Third-party libraries
3. Internal modules
4. Relative imports
5. Styles

Keep imports alphabetized within each group.

## 21. Folder Standards

Each folder should contain related concerns only.
Avoid "misc" or "helpers" folders with unrelated utilities.
Folder names should reflect domain responsibilities.

## 22. Logging Standards

Production logging should:
- Be structured
- Avoid sensitive information
- Include sufficient context

Development logging should be removed before release.

## 23. Security Standards

Never:
- Commit secrets
- Expose environment variables
- Trust user input
- Disable security features for convenience

Security is a continuous responsibility.

## 24. Review Checklist

Every pull request should verify:
- Naming consistency
- Type safety
- Accessibility
- Token usage
- Performance
- Documentation
- Tests

## 25. Refactoring Standards

Refactoring should:
- Preserve behavior
- Reduce complexity
- Improve readability
- Remove duplication

Refactoring without measurable improvement is discouraged.

## 26. Code Smells

Watch for:
- Long functions
- Large components
- Deep nesting
- Duplicate code
- Large prop interfaces
- Boolean flag overload
- Excessive conditionals

Code smells should trigger review.

## 27. Quality Gates

Every file should satisfy:
`Readable` -> `Typed` -> `Accessible` -> `Reusable` -> `Testable` -> `Documented`

## 28. Definition of Excellent Code

Excellent code is:
- Simple
- Predictable
- Explicit
- Consistent
- Performant
- Accessible
- Easy to extend
- Easy to remove

It should not require extensive explanation.

## 29. Repository Coding Constitution

All contributors agree to:
- Follow the design system
- Follow architecture documents
- Avoid unnecessary abstraction
- Prefer clarity over cleverness
- Preserve consistency
- Document significant changes

Consistency across the codebase is more valuable than individual coding preferences.

## 30. Acceptance Criteria

The coding standard is complete when:
- Every engineer can implement features with a consistent style.
- Code reviews focus on architecture rather than formatting.
- The repository exhibits uniform patterns across all modules.
- Common anti-patterns are prevented before they enter the codebase.
- Long-term maintainability is prioritized over short-term speed.
