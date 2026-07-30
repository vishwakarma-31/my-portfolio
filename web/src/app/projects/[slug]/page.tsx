import React from "react";
import Link from "next/link";
import { ArrowLeft, Monitor, Code2, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { Project } from "@/schemas/projects";
import { ProjectMetadata } from "@/components/composites/ProjectMetadata";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const projects = getProjects();
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="bg-background-secondary min-h-screen text-text-secondary selection:bg-accent-primary selection:text-black font-ui pb-32">
      
      {/* 1. Apple-style Hero */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center pt-32 pb-16 px-6 lg:px-12 border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <Link href="/projects" className="inline-flex items-center text-white/40 hover:text-white transition-colors duration-200 mb-12 group text-[13px] font-code tracking-widest uppercase">
            <div className="w-8 h-8 rounded-full border border-border-strong flex items-center justify-center mr-3 group-hover:bg-background-elevated/10 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Archive
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-border-strong text-[12px] font-code text-white/60">
              {project.hero.status}
            </span>
          </div>

          <h1 className="text-[48px] md:text-[84px] font-marketing font-extralight tracking-tight text-white mb-8 leading-[1.05]">
            {project.hero.title}
          </h1>
          <p className="text-[20px] md:text-[28px] text-white/50 font-light leading-[1.5] max-w-[800px] mb-12">
            {project.hero.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            {project.hero.liveLink && project.hero.liveLink !== '#' && (
              <a href={project.hero.liveLink} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "cta", size: "lg" }), "w-full sm:w-auto")}>
                View Live Demo
              </a>
            )}
            {project.hero.githubLink && (
              <a href={project.hero.githubLink} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "ghost", size: "default" }), "w-full sm:w-auto")}>
                Explore Repository
              </a>
            )}
          </div>

          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-background-tertiary rounded-xl border border-border-subtle flex items-center justify-center overflow-hidden stripe-shadow relative group">
            <img 
              src={project.hero.image} 
              alt={project.hero.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent opacity-50" />
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col gap-32">
        
        {/* 2. Executive Summary */}
        <section className="bg-surface-hover border border-border-strong rounded-lg p-8 md:p-12">
          <h2 className="text-[13px] font-code uppercase tracking-widest text-white/40 mb-8">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[18px] text-white font-medium mb-3">Problem</h3>
              <p className="text-[15px] leading-relaxed text-white/60">{project.executiveSummary.problem}</p>
            </div>
            <div>
              <h3 className="text-[18px] text-white font-medium mb-3">Solution</h3>
              <p className="text-[15px] leading-relaxed text-white/60">{project.executiveSummary.solution}</p>
            </div>
            <div>
              <h3 className="text-[18px] text-accent-primary font-medium mb-3">Outcome</h3>
              <p className="text-[15px] leading-relaxed text-white/60">{project.executiveSummary.outcome}</p>
            </div>
          </div>
        </section>

        {/* 3. Project Metadata */}
        <ProjectMetadata metadata={project.metadata} />

        {/* 4. Narrative Sections */}
        <div className="flex flex-col gap-24">
          <CaseStudySection title="Problem Statement">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Business Context">
            <p>{project.context}</p>
          </CaseStudySection>

          <CaseStudySection title="Research & Discovery">
            <p>{project.research}</p>
          </CaseStudySection>

          <CaseStudySection title="Requirements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="bg-background-tertiary p-6 rounded-md border border-border-subtle">
                <h4 className="text-white font-medium mb-4">Functional</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/60 text-[15px]">
                  {project.requirements.functional.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </div>
              <div className="bg-background-tertiary p-6 rounded-md border border-border-subtle">
                <h4 className="text-white font-medium mb-4">Non-Functional</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/60 text-[15px]">
                  {project.requirements.nonFunctional.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Success Criteria">
            <ul className="list-disc pl-5 space-y-3">
              {project.successCriteria.map((crit, i) => <li key={i}>{crit}</li>)}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="System Architecture" isTechnical>
            <p>{project.architecture.description}</p>
            {project.architecture.codeSnippet && (
              <div className="mt-6 p-6 bg-background-primary rounded-sm border border-border-strong overflow-x-auto">
                <pre className="font-code text-[13px] text-white/80 leading-[1.6]">
                  <code>{project.architecture.codeSnippet}</code>
                </pre>
              </div>
            )}
          </CaseStudySection>

          <CaseStudySection title="Technology Selection" isTechnical>
            <div className="flex flex-col gap-6 mt-4">
              {project.technologySelection.map((item, i) => (
                <div key={i} className="border-l-2 border-brand-primary pl-6">
                  <h4 className="text-white font-medium text-[18px] mb-2">{item.tech}</h4>
                  <p className="text-white/60 text-[15px]">{item.rationale}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Data Model" isTechnical>
            <p>{project.dataModel}</p>
          </CaseStudySection>

          <CaseStudySection title="User Flow">
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.userFlow.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="bg-background-tertiary px-4 py-2 rounded-full border border-border-strong text-[14px] text-white/80">
                    {step}
                  </div>
                  {i < project.userFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/30" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Design Decisions">
            <p>{project.designDecisions}</p>
          </CaseStudySection>

          <CaseStudySection title="Engineering Decisions" isTechnical>
            <p>{project.engineeringDecisions}</p>
          </CaseStudySection>

          <CaseStudySection title="Challenges & Resolutions">
            <div className="flex flex-col gap-8 mt-4">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="bg-background-tertiary p-8 rounded-md border border-[rgba(255,255,255,0.05)]">
                  <h4 className="text-[18px] font-medium text-status-error mb-3">Issue: {challenge.issue}</h4>
                  <p className="text-white/70 mb-4"><strong>Resolution:</strong> {challenge.resolution}</p>
                  <p className="text-accent-primary/80 font-code text-[13px]">Lesson: {challenge.learned}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Performance">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {project.performance.map((perf, i) => (
                <div key={i} className="bg-background-primary border border-border-strong p-6 rounded-md flex flex-col items-center justify-center text-center">
                  <p className="text-[32px] font-marketing text-white mb-2">{perf.value}</p>
                  <p className="font-code text-[11px] uppercase tracking-widest text-white/40">{perf.metric}</p>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection title="Security & Accessibility" isTechnical>
            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Security</h4>
                <p>{project.security}</p>
              </div>
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Accessibility</h4>
                <p>{project.accessibility}</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Responsive Strategy & Motion">
            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Responsive Layout</h4>
                <p>{project.responsiveStrategy}</p>
              </div>
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Motion & Interaction</h4>
                <p>{project.motion}</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Testing & Deployment" isTechnical>
            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Testing Strategy</h4>
                <p>{project.testing}</p>
              </div>
              <div>
                <h4 className="text-[20px] text-white mb-3 font-medium">Deployment Pipeline</h4>
                <p>{project.deployment}</p>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Results & Business Impact">
            <p className="text-[20px] leading-relaxed text-text-primary font-light border-l-4 border-accent-primary pl-6">{project.results}</p>
          </CaseStudySection>

          <CaseStudySection title="Lessons Learned">
            <p>{project.lessonsLearned}</p>
          </CaseStudySection>

          <CaseStudySection title="Future Roadmap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-white font-medium mb-4 flex items-center gap-2"><Code2 className="w-4 h-4 text-brand-primary" /> Planned</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/60 text-[15px]">
                  {project.futureRoadmap.planned.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4 flex items-center gap-2"><Monitor className="w-4 h-4 text-accent-primary" /> Experimental</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/60 text-[15px]">
                  {project.futureRoadmap.experimental.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </CaseStudySection>

        </div>

        {/* 5. Navigation Footer */}
        <section className="pt-32 border-t border-[rgba(255,255,255,0.05)] mt-16">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start gap-2 w-full sm:w-1/2 p-8 bg-background-tertiary border border-[rgba(255,255,255,0.05)] rounded-md hover:border-white/20 transition-colors">
                <span className="font-code text-[11px] text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous Project
                </span>
                <span className="text-[24px] font-marketing text-white">{prevProject.hero.title}</span>
              </Link>
            ) : <div className="w-full sm:w-1/2" />}
            
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col items-end text-right gap-2 w-full sm:w-1/2 p-8 bg-background-tertiary border border-[rgba(255,255,255,0.05)] rounded-md hover:border-white/20 transition-colors">
                <span className="font-code text-[11px] text-white/40 uppercase tracking-widest flex items-center gap-2">
                  Next Project <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[24px] font-marketing text-white">{nextProject.hero.title}</span>
              </Link>
            ) : <div className="w-full sm:w-1/2" />}
          </div>
        </section>

      </div>
    </main>
  );
}
