import React from "react";
import Link from "next/link";
import { ArrowLeft, Monitor } from "lucide-react";
import { notFound } from "next/navigation";

// Real Project Data from portfolio_2.0
const allProjects = [
  {
    slug: 'cropify-ml',
    title: 'Cropify',
    description: 'AI-powered crop recommendation system using machine learning to analyze soil conditions, climate data, and environmental factors.',
    longDescription: 'Cropify leverages machine learning algorithms to analyze multiple agricultural parameters including soil type, pH levels, temperature, humidity, and rainfall patterns to provide farmers with data-driven crop recommendations. The system uses ensemble learning techniques combining Random Forest, SVM, and Neural Networks to achieve high prediction accuracy.',
    image: '/projects/Cropify.png',
    github: 'https://github.com/vishwakarma-31/Cropify-final',
    link: 'https://vishwakarma-31-cropify-final-cropii-3w4pzw.streamlit.app/',
    category: 'Machine Learning',
    timeline: '2024-03-31',
    role: 'Lead Developer',
    tech: ['Streamlit', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Scikit-learn', 'Docker'],
    challenges: 'Handling missing agricultural data, balancing multiple ML models, and real-time weather API integration.',
    learnings: 'Advanced ensemble learning techniques, agricultural domain knowledge, and model deployment/scaling.'
  },
  {
    slug: 'trading-bot',
    title: 'Telegram Trading Bot',
    description: 'Automated trading bot integrated with Telegram for real-time market analysis, signal alerts, and trade execution management.',
    longDescription: 'A robust trading automation tool that interfaces with financial APIs to monitor market trends. It sends real-time buy/sell signals via Telegram and features an administrative dashboard for configuring strategies, setting stop-losses, and monitoring portfolio performance.',
    image: '/projects/Trading_Bot.png',
    github: 'https://github.com/vishwakarma-31/trading_bot',
    link: 'https://vishwakarma-31-trading-bot-uitrading-bot-ui-fyerl5.streamlit.app/',
    category: 'Full Stack',
    timeline: '2024-07-31',
    role: 'Full Stack Engineer',
    tech: ['Streamlit', 'Python', 'Telethon', 'FastAPI', 'MongoDB', 'Redis', 'Docker'],
    challenges: 'Managing API rate limits and latency, handling websocket disconnections, and securely managing API keys.',
    learnings: 'Asynchronous programming with Python, financial market mechanics, and Telegram Bot API development.'
  },
  {
    slug: 'ai-interview',
    title: 'AI Interview System',
    description: 'Intelligent interview platform that automates candidate screening using NLP for verbal analysis and Computer Vision for proctoring.',
    longDescription: 'An automated interview system designed to streamline the hiring process. It poses dynamic technical questions, transcribes responses in real-time, analyzes candidate sentiment and confidence via computer vision, and generates a comprehensive performance report for recruiters.',
    image: '/projects/AI_Interview.png',
    github: 'https://github.com/vishwakarma-31/AI-interview',
    link: 'https://ai-interview-kappa-one.vercel.app/',
    category: 'Machine Learning',
    timeline: '2024-09-30',
    role: 'Machine Learning Engineer',
    tech: ['React', 'Tailwind CSS', 'Python', 'Flask', 'OpenAI API', 'PostgreSQL', 'OpenCV', 'Whisper AI'],
    challenges: 'Minimizing audio transcription latency, detecting subtle cheating behaviors, and prompt engineering.',
    learnings: 'Integration of LLMs in production, real-time audio/video processing, and Natural Language Understanding.'
  },
  {
    slug: 'jarvis',
    title: 'Jarvis Virtual Assistant',
    description: 'A sophisticated AI virtual assistant capable of natural conversation, task automation, and system control.',
    longDescription: 'Jarvis is a personalized AI assistant built to handle daily tasks and queries. It utilizes Large Language Models to understand context and intent, wrapped in a futuristic web interface featuring 3D visualizations. It can manage schedules, answer complex queries, and simulate a human-like conversational partner.',
    image: '/projects/Jarvis.png',
    github: 'https://github.com/vishwakarma-31/jarvis-ultimate',
    link: '#',
    category: 'Web',
    timeline: '2024-08-31',
    role: 'Creator & Developer',
    tech: ['React 18', 'Three.js', 'React Three Fiber', 'Node.js', 'Express.js', 'OpenAI/Gemini API', 'Socket.io'],
    challenges: 'Reducing voice-to-response latency, synchronizing 3D animations with speech, and handling context.',
    learnings: 'Web Speech API implementation, 3D web graphics optimization, and WebSocket communication.'
  }
];

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = allProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-[#8a8f98] selection:bg-[#96FF00] selection:text-black font-ui pb-32">
      
      {/* 1. Apple-style Hero */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center pt-32 pb-16 px-6 lg:px-12 border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[1200px] mx-auto w-full">
          
          <Link href="/projects" className="inline-flex items-center text-white/40 hover:text-white transition-colors duration-200 mb-12 group text-[13px] font-code tracking-widest uppercase">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to Archive
          </Link>
          
          <h1 className="text-[48px] md:text-[84px] font-marketing font-extralight tracking-tight text-white mb-8 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-[20px] md:text-[28px] text-white/50 font-light leading-[1.5] max-w-[800px] mb-16">
            {project.description}
          </p>

          <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] rounded-[16px] border border-white/5 flex items-center justify-center overflow-hidden stripe-shadow relative group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-50" />
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col gap-32">
        
        {/* Stripe-style Role & Tech Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] border border-white/5 rounded-[12px] p-8 stripe-shadow hover:-translate-y-1 transition-transform duration-300">
            <h3 className="font-code text-[11px] uppercase tracking-widest text-[#635BFF] mb-4">Role & Timeline</h3>
            <p className="text-[20px] font-medium text-white mb-2">{project.role}</p>
            <p className="text-[14px] text-white/40 font-ui">Completed: {project.timeline}</p>
          </div>
          
          <div className="bg-[#111] border border-white/5 rounded-[12px] p-8 stripe-shadow hover:-translate-y-1 transition-transform duration-300">
            <h3 className="font-code text-[11px] uppercase tracking-widest text-[#635BFF] mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-3 py-1 rounded-[4px] bg-white/5 border border-white/10 text-[12px] font-code text-white/60">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Nike-style Section Header & Content */}
        <section className="flex flex-col gap-12">
          <h2 className="font-display font-black text-white uppercase leading-[0.85] tracking-[0.02em] text-[56px] md:text-[96px] break-words">
            THE <br/><span className="text-white/30">PROJECT.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-5 text-[18px] text-white/60 font-light leading-[1.8]">
              <p className="mb-6">
                {project.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Linear-style Content Block */}
        <section className="flex flex-col gap-8 border-l-2 border-[#635BFF] pl-8 py-2">
          <h2 className="text-[28px] font-marketing text-white tracking-tight">Challenges & Synthesis</h2>
          <p className="text-[16px] text-white/60 font-light leading-[1.7] max-w-[700px]">
            {project.challenges}
          </p>
          <h2 className="text-[28px] font-marketing text-white tracking-tight mt-4">Key Learnings</h2>
          <p className="text-[16px] text-white/60 font-light leading-[1.7] max-w-[700px]">
            {project.learnings}
          </p>
        </section>

        {/* Shopify-style CTA */}
        <section className="pt-20 border-t border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center text-center gap-8">
          <h2 className="text-[32px] md:text-[48px] font-marketing font-light tracking-tight text-white">
            Experience it live.
          </h2>
          <p className="text-[16px] text-white/50 font-light mb-4">
            Explore the deployed production build or review the source code on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#96FF00] text-black font-bold text-[15px] px-8 py-4 rounded-[4px] shopify-hover font-ui tracking-tight flex items-center w-full sm:w-auto justify-center">
                <Monitor className="w-4 h-4 mr-2" />
                View Live Project
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/20 text-white hover:border-white font-medium text-[15px] px-8 py-4 rounded-[4px] font-ui tracking-tight transition-colors w-full sm:w-auto justify-center flex">
              Source Code
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
