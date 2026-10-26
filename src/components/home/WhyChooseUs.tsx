"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Lock, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      title: "100% Intellectual Property Ownership",
      desc: "All source code, Docker manifests, architecture blueprints, and machine learning weights are 100% owned by your organization from day one.",
    },
    {
      title: "Senior Architectural Caliber",
      desc: "No outsourced junior developers. You work directly with systems architects who have built and scaled systems for top-tier global tech brands.",
    },
    {
      title: "Zero-Downtime Microservices & SLAs",
      desc: "We back our architectures with strict 99.98%+ availability SLAs and automated blue-green deployment pipelines with sub-second rollbacks.",
    },
    {
      title: "Deterministic AI with Guardrail Governance",
      desc: "We engineer production-safe agent systems with token caps, PII redaction, and deterministic schemas that eliminate hallucinations.",
    },
    {
      title: "Obsessive Performance Standards",
      desc: "Every web page is optimized for Lighthouse 95+ scores, sub-second TTFB, and buttery 120 FPS WebGL micro-interactions.",
    },
    {
      title: "Long-Term Engineering Continuity",
      desc: "We provide comprehensive architecture documentation, developer runbooks, continuous telemetry monitoring, and proactive scaling.",
    },
  ];

  return (
    <section className="py-24 bg-[#050B1F] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              <span>The CortexNovation Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Why Global Leaders Partner With <span className="text-gradient">CortexNovation Ai</span>
            </h2>

            {/* Core Motto & Partnership Promise */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-purple-950/40 border border-blue-500/30 space-y-2">
              <p className="text-lg font-bold text-white tracking-tight">
                "{companyData.partnershipPromise}"
              </p>
              <p className="text-sm text-cyan-300 font-medium">
                Tagline: {companyData.tagline} • {companyData.motto}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We operate as a high-velocity extension of your core executive and engineering team, transforming ambitious technological concepts into resilient, award-winning reality.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-primary-glow px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
              >
                <span>Read Our Story & Values</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Checklist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="glass-panel-glow p-5 rounded-xl bg-[#0A1330]/90 border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pt.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-8">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
