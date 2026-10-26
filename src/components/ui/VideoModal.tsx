"use client";

import React, { useEffect } from "react";
import { X, Play, ShieldCheck, Cpu } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-[#050B1F]/85 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0A1330] border border-blue-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(45,140,255,0.3)] z-10">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/40 bg-[#050B1F]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-sm font-semibold tracking-wide text-white">
              CortexNovation Ai — Architectural Walkthrough
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Showcase area */}
        <div className="relative aspect-video bg-gradient-to-br from-[#050B1F] via-[#091438] to-[#0D1C4D] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
          {/* Animated decorative grid lines */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30" />
          <div className="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Interactive Player Simulation */}
          <div className="relative z-10 flex flex-col items-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_35px_rgba(45,140,255,0.7)] mb-6 cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Next-Gen Neural Architecture in Action
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Watch how our multi-agent orchestration, high-throughput Spring Boot 3 microservices, and reactive data meshes power modern enterprise software.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full text-xs text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-slate-200">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero-Latency Event Streaming</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Deterministic Guardrail Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 bg-[#070E28] border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400">
          <span>Enterprise Technical Overview • Duration: 3 min 45 sec</span>
          <span className="text-[#2D8CFF] font-medium">Confidential & Proprietary</span>
        </div>
      </div>
    </div>
  );
}
