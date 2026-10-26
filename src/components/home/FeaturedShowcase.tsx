"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { articlesData } from "@/data/articles";
import { ArrowRight, BookOpen, Briefcase, Sparkles, TrendingUp, Cpu } from "lucide-react";

export function FeaturedShowcase() {
  const featuredProjects = projectsData.slice(0, 2);
  const featuredArticle = articlesData[0];

  return (
    <section className="py-24 bg-[#070E28] relative z-10 border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Featured Case Studies Header */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25">
                Verified Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Case Studies
              </h2>
              <p className="text-sm text-slate-300">
                Real technical challenges solved for high-throughput enterprise architectures.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D8CFF] hover:text-cyan-300 transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2 Featured Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/40">
                      {project.industry}
                    </span>
                    <span className="text-xs text-slate-400">{project.clientCategory}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Metrics preview */}
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-xl bg-blue-950/50 border border-blue-800/30">
                        <div className="text-lg font-extrabold text-white">{m.value}</div>
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-900/40 mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-white group-hover:text-cyan-400 flex items-center gap-1"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Research & Insight Banner */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl bg-[#08102C]/90 border border-blue-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400">
                <BookOpen className="w-4 h-4" />
                <span>Featured Engineering Whitepaper</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{featuredArticle.readTime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-cyan-300">
                  {featuredArticle.author.name.charAt(0)}
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">{featuredArticle.author.name}</p>
                  <p className="text-slate-400">{featuredArticle.author.role}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-center lg:text-right">
              <Link
                href={`/research/${featuredArticle.slug}`}
                className="btn-primary-glow px-6 py-4 text-sm font-bold inline-flex items-center justify-center gap-2 rounded-xl text-white shadow-xl"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Browse All Research & Insights &rarr;
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
