"use client";

import React from "react";
import { companyData } from "@/data/company";
import { Cpu, Database, Cloud, Code2, Terminal, Layers } from "lucide-react";

export function TechMarquee() {
  const techs = companyData.technologies;

  const getTechIcon = (category: string) => {
    switch (category) {
      case "Backend": return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Database": return <Database className="w-4 h-4 text-blue-400" />;
      case "Cloud": return <Cloud className="w-4 h-4 text-purple-400" />;
      case "Frontend": return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "Analytics": return <Terminal className="w-4 h-4 text-pink-400" />;
      default: return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section className="py-14 bg-[#050B1F] relative overflow-hidden border-b border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
          Technologies We Master & Deploy
        </span>
      </div>

      {/* Infinite Marquee Track with Fade Gradient Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050B1F] to-transparent z-10 pointer-events-none" />
        
        {/* Right Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050B1F] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Inner */}
        <div className="animate-marquee flex items-center space-x-6 py-2">
          {/* Double array for seamless loop */}
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0A1330]/90 border border-blue-500/25 hover:border-cyan-400/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:scale-105 shrink-0 group"
            >
              <div className="p-1 rounded-full bg-blue-950/60 group-hover:bg-cyan-500/20 transition-colors">
                {getTechIcon(tech.category)}
              </div>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono uppercase px-1.5 py-0.5 rounded bg-blue-950 border border-blue-900/40">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
