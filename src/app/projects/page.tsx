"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Briefcase, ArrowRight, Sparkles, TrendingUp, Cpu } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ProjectsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Fintech", "HealthTech", "Logistics", "AI & Cloud"];

  const filtered = projectsData.filter(
    (p) => selectedIndustry === "All" || p.industry === selectedIndustry
  );

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400 shimmer-badge">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Proven Enterprise Outcomes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Case Studies in <br />
            <span className="text-gradient">High-Concurrency Scale</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Examine the architectures, data topologies, and measurable metrics behind our production deployments worldwide.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedIndustry === ind
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(45,140,255,0.4)] scale-105"
                  : "bg-[#0A1330] text-slate-300 border border-blue-900/40 hover:text-white"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 hover:border-cyan-400/50 flex flex-col justify-between group transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-950/90 text-cyan-400 border border-blue-800/40">
                    {project.industry}
                  </span>
                  <span className="text-xs text-slate-400">{project.clientCategory}</span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-cyan-300 font-medium mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Measurable Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/30">
                      <div className="text-lg sm:text-xl font-black text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{m.label}</div>
                      <div className="text-[9px] text-cyan-400 font-semibold">{m.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & CTA */}
              <div className="pt-6 border-t border-blue-900/40 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="btn-primary-glow px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 rounded-lg text-white"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
