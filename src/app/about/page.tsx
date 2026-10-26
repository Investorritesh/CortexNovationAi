"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import {
  Sparkles,
  Target,
  Eye,
  Gem,
  Zap,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function AboutPage() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "Gem": return <Gem className="w-5 h-5 text-cyan-400" />;
      case "Eye": return <Eye className="w-5 h-5 text-blue-400" />;
      case "Zap": return <Zap className="w-5 h-5 text-purple-400" />;
      case "Handshake": return <Handshake className="w-5 h-5 text-pink-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400 shimmer-badge">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>The Team Behind The Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Turning Ideas Into Impact. <br />
            <span className="text-gradient">Build Smarter. Grow Faster.</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded by systems architects and AI researchers passionate about crafting resilient, high-concurrency software that powers market-defining enterprises.
          </p>
        </div>

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#0A1330]/90 border border-blue-500/30 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-cyan-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {companyData.mission}
            </p>
          </div>

          <div className="glass-panel-glow p-8 sm:p-10 rounded-3xl bg-[#0A1330]/90 border border-purple-500/30 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>

        {/* Global Reach Network & Stats */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl bg-[#081233]/90 border border-blue-500/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-blue-900/40">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Global Production Reach
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-1">
                Engineering Across Continents
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Multi-Region Active Clusters Worldwide</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyData.stats.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-blue-950/50 border border-blue-800/40 text-center">
                <div className="text-3xl sm:text-4xl font-black text-white">{s.value}</div>
                <div className="text-xs font-bold text-cyan-300 mt-1">{s.label}</div>
                <div className="text-[11px] text-slate-400 mt-1">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div id="values" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-extrabold text-white">Our Core Values</h3>
            <p className="text-xs text-slate-300">The engineering tenets that guide every pull request and architectural decision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((val) => (
              <div
                key={val.number}
                className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/90 border border-blue-500/25 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center">
                    {getIcon(val.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">{val.number}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{val.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-extrabold text-white">Company Milestones</h3>
            <p className="text-xs text-slate-300">Our trajectory of innovation and enterprise scaling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {companyData.timeline.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/80 border border-blue-500/20 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan-400 font-mono">
                    {item.year} {item.quarter}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-950 text-slate-300 border border-blue-900">
                    {item.highlight}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Cards with Hover Reveal */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-extrabold text-white">Engineering Leadership</h3>
            <p className="text-xs text-slate-300">Decades of collective experience building systems for top global brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.team.map((member, idx) => (
              <div
                key={idx}
                className="glass-panel-glow p-6 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  {/* Avatar with glow */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] mx-auto shadow-[0_0_20px_rgba(45,140,255,0.4)]">
                    <div className="w-full h-full rounded-2xl bg-[#081230] flex items-center justify-center font-bold text-xl text-white">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-cyan-400 font-medium mt-0.5">{member.role}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise tags */}
                <div className="pt-3 border-t border-blue-900/40 flex flex-wrap justify-center gap-1">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="text-[9px] px-2 py-0.5 rounded bg-blue-950 text-slate-300 border border-blue-900/40"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
