"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Activity, Cpu, ShieldCheck } from "lucide-react";
import { NeuralBrainScene } from "@/components/3d/NeuralBrainScene";
import { VideoModal } from "@/components/ui/VideoModal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background radial glow & mesh */}
      <div className="bg-hero-glow" />
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline & Motto Announcement Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 backdrop-blur-md shimmer-badge shadow-[0_0_20px_rgba(45,140,255,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                Turning Ideas Into Impact
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-medium text-slate-300">
                Build Smarter. Grow Faster.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Your Vision. <br className="hidden sm:inline" />
              <span className="text-gradient">Our Technology.</span>
            </h1>

            {/* Sub-line */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
              We engineer enterprise-grade web applications, high-concurrency Spring Boot microservices, and autonomous neural architectures. Transforming ambitious visions into scalable, market-defining digital impact.
            </p>

            {/* CTA Action Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto btn-primary-glow px-8 py-4 text-base flex items-center justify-center gap-3">
                  <span className="font-bold">Start Building</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto btn-secondary-glow px-6 py-4 text-base flex items-center justify-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500/20 group-hover:bg-cyan-400/30 flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-blue-900/30 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise SOC2 & HIPAA Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>High-Throughput Concurrency</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>99.98% Managed SLA</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Premium 3D AI Brain Scene & Unclipped Glassmorphic Stat Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full">
            
            {/* 3D Brain Stage Container with safe relative bounds */}
            <div className="w-full max-w-[560px] relative rounded-2xl p-1">
              
              {/* 3D Interactive WebGL Scene */}
              <div className="w-full h-[440px] sm:h-[500px] lg:h-[540px] relative z-10">
                <NeuralBrainScene showCaption={true} />
              </div>

              {/* Floating Stat Card 1: Global Availability (Top Left/Center on tablet, Top Right on desktop) */}
              <div className="hidden sm:block absolute top-4 left-4 z-20 glass-panel-glow px-3.5 py-2 rounded-xl text-left backdrop-blur-xl bg-[#050d26]/85 border border-cyan-500/25 shadow-[0_4px_24px_rgba(0,115,255,0.18)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                    Global Availability
                  </span>
                </div>
                <div className="text-lg font-bold text-white tracking-tight">99.98%</div>
                <div className="text-[10px] text-cyan-400">High-Availability SLAs</div>
              </div>

              {/* Floating Stat Card 2: Time to Market (Bottom Left) */}
              <div className="hidden sm:block absolute bottom-4 left-4 z-20 glass-panel-glow px-3.5 py-2 rounded-xl text-left backdrop-blur-xl bg-[#050d26]/85 border border-blue-500/25 shadow-[0_4px_24px_rgba(0,115,255,0.18)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                    Time to Market
                  </span>
                </div>
                <div className="text-lg font-bold text-white tracking-tight">3.5x Faster</div>
                <div className="text-[10px] text-purple-400">Modular Microservices</div>
              </div>

              {/* Floating Stat Card 3: Edge Inference (Bottom Right) */}
              <div className="hidden sm:block absolute bottom-4 right-4 z-20 glass-panel-glow px-3.5 py-2 rounded-xl text-left backdrop-blur-xl bg-[#050d26]/85 border border-purple-500/25 shadow-[0_4px_24px_rgba(168,85,247,0.18)]">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wider">
                    Edge Inference
                  </span>
                </div>
                <div className="text-lg font-bold text-white tracking-tight">&lt;12ms</div>
                <div className="text-[10px] text-blue-400">Zero-Overhead Pipelines</div>
              </div>

            </div>

            {/* Mobile Metric Strip (Visible exclusively on mobile < 640px to prevent visual clipping & obscuring 3D brain) */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-[560px] mt-3 sm:hidden px-1">
              <div className="glass-panel-glow p-2 rounded-lg text-left bg-[#050d26]/85 border border-cyan-500/25">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] font-medium text-slate-400 uppercase truncate">Uptime</span>
                </div>
                <div className="text-sm font-bold text-white">99.98%</div>
                <div className="text-[8px] text-cyan-400 truncate">Managed SLA</div>
              </div>

              <div className="glass-panel-glow p-2 rounded-lg text-left bg-[#050d26]/85 border border-blue-500/25">
                <div className="flex items-center gap-1 mb-0.5">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="text-[8px] font-medium text-slate-400 uppercase truncate">Speed</span>
                </div>
                <div className="text-sm font-bold text-white">3.5x</div>
                <div className="text-[8px] text-purple-400 truncate">Time to Market</div>
              </div>

              <div className="glass-panel-glow p-2 rounded-lg text-left bg-[#050d26]/85 border border-purple-500/25">
                <div className="flex items-center gap-1 mb-0.5">
                  <Cpu className="w-2.5 h-2.5 text-purple-400" />
                  <span className="text-[8px] font-medium text-slate-400 uppercase truncate">Latency</span>
                </div>
                <div className="text-sm font-bold text-white">&lt;12ms</div>
                <div className="text-[8px] text-blue-400 truncate">Edge Pipeline</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal Dialog */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
