import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z.string(),
  hero: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    status: z.enum(["Live", "In Progress", "Archived"]),
    role: z.string(),
    timeline: z.string(),
    teamSize: z.string(),
    liveLink: z.string().optional(),
    githubLink: z.string().optional(),
  }),
  metadata: z.object({
    projectType: z.string(),
    industry: z.string(),
    duration: z.string(),
    role: z.string(),
    teamSize: z.string(),
    technologies: z.array(z.string()),
    repository: z.string().optional(),
    liveDemo: z.string().optional(),
    designFiles: z.string().optional(),
  }),
  executiveSummary: z.object({
    problem: z.string(),
    solution: z.string(),
    outcome: z.string(),
  }),
  problem: z.string(),
  context: z.string(),
  research: z.string(),
  requirements: z.object({
    functional: z.array(z.string()),
    nonFunctional: z.array(z.string()),
  }),
  successCriteria: z.array(z.string()),
  architecture: z.object({
    description: z.string(),
    codeSnippet: z.string().optional(),
  }),
  technologySelection: z.array(z.object({
    tech: z.string(),
    rationale: z.string()
  })),
  dataModel: z.string(),
  userFlow: z.array(z.string()),
  designDecisions: z.string(),
  engineeringDecisions: z.string(),
  challenges: z.array(z.object({
    issue: z.string(),
    resolution: z.string(),
    learned: z.string(),
  })),
  performance: z.array(z.object({
    metric: z.string(),
    value: z.string()
  })),
  security: z.string(),
  accessibility: z.string(),
  responsiveStrategy: z.string(),
  motion: z.string(),
  testing: z.string(),
  deployment: z.string(),
  results: z.string(),
  lessonsLearned: z.string(),
  futureRoadmap: z.object({
    planned: z.array(z.string()),
    experimental: z.array(z.string()),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;
