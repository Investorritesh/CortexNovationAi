"use client";

import React from "react";
import { companyData } from "@/data/company";
import { CheckCircle2, Compass, Layers, Rocket, TrendingUp } from "lucide-react";

export function ProcessTimeline() {
  const steps = companyData.processSteps;

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Compass className="w-5 h-5 text-cyan-400" />;
      case 1: return <Layers className="w-5 h-5 text-blue-400" />;
      case 2: return <Rocket className="w-5 h-5 text-purple-400" />;
      case 3: return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-[#070E28] relative z-10 border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Vision to Production in <span className="text-gradient">4 Rigorous Phases</span>
          </h2>
          <p className="text-base text-slate-300">
            A deterministic delivery pipeline designed to eliminate architectural risk and accelerate time-to-market.
          </p>
        </div>

        {/* 4 Process Timeline Cards (01 to 04) */}
        <div className="relative">
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 -translate-y-8 z-0 opacity-40 shadow-[0_0_15px_rgba(45,140,255,0.7)]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/90 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-2"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(45,140,255,0.2)]">
                      {getStepIcon(idx)}
                    </div>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.name}
                  </h3>

                  <p className="text-xs text-cyan-400 font-medium mt-1 mb-3">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-points */}
                <div className="pt-3 border-t border-blue-900/40 space-y-1.5">
                  {step.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
