"use client";

import React, { useState } from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import {
  Bot,
  Activity,
  Terminal,
  Shield,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { VideoModal } from "@/components/ui/VideoModal";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getIcon = (slug: string) => {
    switch (slug) {
      case "cortex-flow": return <Bot className="w-6 h-6 text-cyan-400" />;
      case "novation-pulse": return <Activity className="w-6 h-6 text-blue-400" />;
      case "synthex-bi": return <Terminal className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const product = productsData[selectedProduct];

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-purple-400 shimmer-badge">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Proprietary Software Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Intelligent Products Built for <br />
            <span className="text-gradient">Autonomy & Speed</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Turnkey enterprise platforms engineered to orchestrate multi-agent swarms, monitor telemetry in real time, and query multi-terabyte data lakes.
          </p>
        </div>

        {/* Product Selector Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {productsData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(idx)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                selectedProduct === idx
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_25px_rgba(45,140,255,0.5)] scale-105"
                  : "bg-[#0A1330] text-slate-300 border border-blue-900/40 hover:text-white hover:border-blue-500/40"
              }`}
            >
              {getIcon(p.slug)}
              <span>{p.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-slate-300">
                {p.status}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Product Hero Card with Interactive UI Mockup */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl bg-[#08112E]/90 border border-blue-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Specs & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-blue-950 border border-blue-500/30">
                  {getIcon(product.slug)}
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white">{product.name}</h2>
                  <p className="text-xs text-cyan-400 font-semibold">{product.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-blue-950/60 border border-blue-900/40">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">{spec.label}</span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary-glow px-6 py-3.5 text-xs font-bold inline-flex items-center gap-2 rounded-xl text-white"
                >
                  <span>Request Technical Pilot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-secondary-glow px-5 py-3.5 text-xs font-semibold rounded-xl text-slate-200"
                >
                  Interactive Walkthrough
                </button>
              </div>
            </div>

            {/* Right Interactive UI Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-blue-500/30 bg-[#050C22] p-5 shadow-[0_0_35px_rgba(0,0,0,0.8)] space-y-4">
                {/* Mockup Titlebar */}
                <div className="flex items-center justify-between pb-3 border-b border-blue-950">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {product.slug}.cortexnovation.internal
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Mockup Body Content */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-900/40 flex items-center justify-between text-slate-300">
                    <span className="text-cyan-400">&gt; active_nodes.count()</span>
                    <span className="text-emerald-400 font-bold">128 clusters synced</span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#071026] border border-blue-900/30 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Inference Latency: 11.4ms</span>
                      <span className="text-cyan-300 font-bold">P99 SLA: 99.98%</span>
                    </div>
                    {/* Simulated visual waveform bar */}
                    <div className="w-full h-2 rounded-full bg-blue-950 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 w-3/4 animate-pulse" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2.5 rounded bg-blue-950/40 border border-blue-900/20 text-slate-300">
                      <span className="text-slate-500">POLICY:</span> DETERMINISTIC
                    </div>
                    <div className="p-2.5 rounded bg-blue-950/40 border border-blue-900/20 text-slate-300">
                      <span className="text-slate-500">FALLBACK:</span> AUTONOMOUS
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white">Engineered Architectural Features</h3>
            <p className="text-xs text-slate-300">Every feature is designed for zero-downtime mission-critical reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feat, i) => (
              <div
                key={i}
                className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/80 border border-blue-500/20 hover:border-cyan-400/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white">{feat.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing / Early Access Tiers */}
        <div className="space-y-10 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-3xl font-extrabold text-white">Pricing & Early-Access Tiers</h3>
            <p className="text-xs text-slate-300">Transparent enterprise scaling models with zero hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {product.pricing.map((tier, i) => (
              <div
                key={i}
                className={`glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border flex flex-col justify-between space-y-6 relative ${
                  tier.isPopular ? "border-cyan-400 ring-2 ring-cyan-400/30" : "border-blue-500/25"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">{tier.plan}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs text-slate-400">{tier.period}</span>
                  </div>

                  <div className="pt-4 border-t border-blue-900/40 space-y-2.5">
                    {tier.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-xl text-xs font-bold text-center transition-all ${
                    tier.isPopular
                      ? "btn-primary-glow text-white shadow-lg"
                      : "btn-secondary-glow text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
