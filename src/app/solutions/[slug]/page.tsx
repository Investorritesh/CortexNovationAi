import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find related case studies matching tech or category
  const relatedProjects = projectsData.filter((p) =>
    p.techStack.some((t) => service.techStack.includes(t)) ||
    p.industry.toLowerCase().includes(service.category.toLowerCase().split(" ")[0])
  ).slice(0, 2);

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Solutions</span>
        </Link>

        {/* Floating 3D Icon & Hero Header */}
        <div className="text-center space-y-6">
          {/* 3D Floating Icon Ring */}
          <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 p-[2px] shadow-[0_0_40px_rgba(45,140,255,0.6)] animate-bounce duration-1000">
            <div className="w-full h-full rounded-3xl bg-[#070F28] flex items-center justify-center">
              <Cpu className="w-10 h-10 text-cyan-400" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{service.category} Solution</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc}
          </p>

          {/* Metric highlights */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-4">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-blue-950/60 border border-blue-800/40 text-center">
                <div className="text-2xl font-extrabold text-white tracking-tight">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-red-500/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40">
              The Critical Challenge
            </span>
            <h3 className="text-xl font-bold text-white">Why Standard Implementations Break</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-emerald-500/20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40">
              Our Architectural Approach
            </span>
            <h3 className="text-xl font-bold text-white">How CortexNovation Ai Delivers</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.approach}
            </p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#0A1330]/90 border border-blue-500/30 space-y-6">
          <div className="flex items-center gap-2.5">
            <Layers className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Guaranteed Deliverables</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/30">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="space-y-4 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Production Technologies Utilized
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-blue-950/80 border border-blue-500/30 text-sm font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <div className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-blue-950/40 border border-blue-900/40 space-y-2">
                  <h4 className="text-base font-bold text-white">{faq.question}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Related Case Studies</h3>
              <Link href="/projects" className="text-xs text-[#2D8CFF] hover:text-cyan-300 font-semibold">
                View All Case Studies &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/80 border border-blue-500/20 hover:border-cyan-400/50 block group transition-all"
                >
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                    {p.industry}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {p.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#2D8CFF] font-semibold">
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
}
