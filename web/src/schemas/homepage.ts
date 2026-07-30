import { z } from 'zod';

export const FaqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

export const TestimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string(),
  company: z.string(),
  outcome: z.string(),
});

export const CapabilitySchema = z.object({
  title: z.string(),
  desc: z.string(),
  outcome: z.string(),
});

export const StepSchema = z.object({
  week: z.string(),
  title: z.string(),
  desc: z.string(),
});

export const IndustrySchema = z.object({
  name: z.string(),
  prob: z.string(),
  sol: z.string(),
});

export const DifferentiatorSchema = z.object({
  title: z.string(),
  desc: z.string(),
});

export const HomepageSchema = z.object({
  faqs: z.array(FaqSchema),
  testimonials: z.array(TestimonialSchema),
  capabilities: z.array(CapabilitySchema),
  steps: z.array(StepSchema),
  industries: z.array(IndustrySchema),
  differentiators: z.array(DifferentiatorSchema),
});

export type HomepageData = z.infer<typeof HomepageSchema>;
