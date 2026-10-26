"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Building2, HeartPulse, Truck, Bot } from "lucide-react";

export function IndustryTabs() {
  const industries = companyData.industries;
  const [activeTab, setActiveTab] = useState(0);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "fintech": return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "healthtech": return <HeartPulse className="w-5 h-5 text-red-400" />;
      case "saas": return <Cpu className="w-5 h-5 text-blue-400" />;
      case "logistics": return <Truck className="w-5 h-5 text-purple-400" />;
      case "ai": return <Bot className="w-5 h-5 text-cyan-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const active = industries[activeTab];

  return (
    <section className="py-24 bg-[#050B1F] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/25">
            Enterprise Domains
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tailored for <span className="text-gradient">Mission-Critical Sectors</span>
          </h2>
          <p className="text-base text-slate-300">
            Deep domain expertise configured for stringent regulatory compliance, fault tolerance, and massive concurrency.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {industries.map((ind, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(45,140,255,0.4)] scale-105"
                    : "bg-[#0A1330] text-slate-300 border border-blue-900/40 hover:text-white hover:border-blue-500/40"
                }`}
              >
                {getIndustryIcon(ind.id)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Morphing Tab Content Card */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-[#0A1330]/90 max-w-4xl mx-auto transition-all duration-500 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="md:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-950 border border-blue-500/30">
                  {getIndustryIcon(active.id)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{active.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">{active.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {active.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {active.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action / Pillar */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex flex-col justify-between space-y-6 text-center">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Compliance Level
                </span>
                <div className="text-lg font-bold text-white mt-1">
                  Enterprise Grade
                </div>
                <p className="text-xs text-cyan-300 mt-1">
                  SOC2 • HIPAA • ISO 27001 Ready
                </p>
              </div>

              <Link
                href="/contact"
                className="btn-primary-glow py-3 px-5 text-xs font-bold inline-flex items-center justify-center gap-2 rounded-xl text-white shadow-lg"
              >
                <span>Consult Industry Architect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
