import { z } from 'zod';
import { ProjectSchema, Project } from '@/schemas/projects';
import { HomepageSchema, HomepageData } from '@/schemas/homepage';

// Raw content imports
import { allProjects } from '@/content/projects';
import * as homepageData from '@/content/homepage';

/**
 * Validates and retrieves all projects.
 * Throws a build error if the content violates the strict Zod schema.
 */
export function getProjects(): Project[] {
  const parsed = z.array(ProjectSchema).safeParse(allProjects);
  if (!parsed.success) {
    console.error("❌ Invalid Project Data:");
    parsed.error.issues.forEach(err => {
      console.error(`- ${err.path.join('.')}: ${err.message}`);
    });
    throw new Error("Project content validation failed. Check build logs.");
  }
  return parsed.data;
}

/**
 * Validates and retrieves a single project by slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find(p => p.slug === slug);
}

/**
 * Validates and retrieves homepage content.
 * Throws a build error if the content violates the strict Zod schema.
 */
export function getHomepageData(): HomepageData {
  const parsed = HomepageSchema.safeParse(homepageData);
  if (!parsed.success) {
    console.error("❌ Invalid Homepage Data:");
    parsed.error.issues.forEach(err => {
      console.error(`- ${err.path.join('.')}: ${err.message}`);
    });
    throw new Error("Homepage content validation failed. Check build logs.");
  }
  return parsed.data;
}
