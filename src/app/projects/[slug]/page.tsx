import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Hero Section */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.industry} Infrastructure</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">{project.clientCategory}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {project.tagline}
          </p>

          {/* Metrics Spotlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-center">
                <div className="text-3xl font-black text-white">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                <div className="text-[11px] text-cyan-400 font-bold mt-1">{m.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-red-500/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40">
              The Architecture Bottleneck
            </span>
            <h3 className="text-2xl font-bold text-white">The Engineering Challenge</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-emerald-500/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40">
              CortexNovation Solution
            </span>
            <h3 className="text-2xl font-bold text-white">The Architectural Solution</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Details */}
        <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#0A1330]/90 border border-blue-500/30 space-y-6">
          <div className="flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Architectural Specifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.architectureDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Employed */}
        <div className="text-center space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-500/30 text-xs font-bold text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Next Project Transition */}
        <div className="pt-8 border-t border-blue-900/40">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-panel-glow p-8 rounded-3xl bg-[#07102C]/90 border border-blue-500/30 flex items-center justify-between group block transition-all"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Next Case Study &rarr;
              </span>
              <h4 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mt-1">
                {nextProject.title}
              </h4>
              <p className="text-xs text-cyan-400 mt-1 font-medium">{nextProject.tagline}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600/30 group-hover:bg-cyan-500/30 border border-blue-400/40 flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </div>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
}
