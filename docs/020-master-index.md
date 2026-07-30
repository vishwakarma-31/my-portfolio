# Document 020: Master Specification Index, Dependency Map & Repository Constitution

**Version:** 1.0  
**Priority:** Critical  

## 1. Purpose
This document serves as the central navigation and governance hub for the entire portfolio specification system. It defines reading order, dependency relationships, ownership, update policies, and the overarching documentation governance. This document should be the first document consulted before beginning any implementation or architectural review.

## 2. Reading Order
New contributors should read the documents in the following structured layers (moving from strategic intent to implementation details):

1. **Product Foundation:** 001–003
2. **Design System:** 004–009
3. **Product Content:** 010
4. **Engineering:** 011–013
5. **Quality:** 014
6. **Workflow:** 015
7. **Implementation:** 016
8. **Operations:** 017
9. **AI Contract:** 018
10. **Governance & Navigation:** 019–020

## 3. Document Catalogue

| Doc # | Title | Purpose |
|-------|-------|---------|
| **001** | **Product Vision** | Establishes the core goals, audience, and overall direction of the portfolio. |
| **002** | **Homepage Architecture** | Defines the structural layout and sections of the homepage. |
| **003** | **Section Composition** | Details how individual sections are composed from underlying components. |
| **004** | **Typography** | Specifies font families, hierarchies, weights, and scaling logic. |
| **005** | **Spatial System** | Governs grids, spacing, padding, margins, and layout boundaries. |
| **006** | **Visual Language & Brand DNA** | Translates the aesthetic (Apple/Stripe/Linear/Nike etc.) into a cohesive design handbook. |
| **007** | **Component System** | Defines reusable UI primitives and their behavioral states. |
| **008** | **Motion & Interaction System** | Establishes animation rules (GSAP), transition states, and movement boundaries. |
| **009** | **Homepage Content & Copy** | Governs the tone of voice, messaging, and narrative flow. |
| **010** | **Featured Project & Case Study** | Sets the storytelling framework and engineering depth required for case studies. |
| **011** | **Frontend Engineering & Architecture** | Defines the Next.js/Tailwind setup, performance targets, and code organization. |
| **012** | **Backend & Content Architecture** | Dictates data modeling, CMS integration, and strict validation (Zod) pipelines. |
| **013** | **Design Token & Theming** | Centralizes semantic design tokens (CSS variables) to completely decouple styling. |
| **014** | **Quality Assurance & Release Standards** | Establishes testing, accessibility (WCAG 2.2 AA), SEO, and Definition of Done. |
| **015** | **Developer Workflow & AI Playbook** | Enforces AI and human collaboration rules, branch strategies, and task governance. |
| **016** | **Frontend Implementation Blueprint** | Defines the layered dependency graph (Section → Composite → Primitive) and hydration rules. |
| **017** | **Product Operations & Maintenance** | Governs long-term maintenance cadences, technical debt registries, and incident management. |
| **018** | **AI Implementation Contract** | Standardizes AI prompting, context retrieval, self-verification, and scope protection protocols. |
| **019** | **ADR & Engineering Governance** | Establishes the decision-making framework, requiring Architecture Decision Records for major changes. |
| **020** | **Master Specification Index** | The central navigation and governance hub for the portfolio (This document). |

## 4. Cross-Reference Rules
Specifications should reference other documents by number rather than duplicating their content. Examples:
- Motion requirements → Document 008
- Token usage → Document 013
- Accessibility → Document 014

## 5. Repository Constitution (The Non-Negotiables)
The following principles define the identity of the project and should guide every future contribution. They apply equally to human developers and AI implementation agents:

1. **Product vision precedes implementation.**
2. **Architecture precedes optimization.**
3. **Design system precedes components.**
4. **Components precede pages.**
5. **Documentation evolves with code.**
6. **Governance precedes architectural change.**
7. **Quality is verified, not assumed.**
8. **Accessibility is mandatory.**
9. **Long-term maintainability outweighs short-term convenience.**
10. **Every significant engineering decision is documented.**
