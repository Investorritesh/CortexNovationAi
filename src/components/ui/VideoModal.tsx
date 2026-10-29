"use client";

import React, { useEffect, useRef } from "react";
import { X, ShieldCheck, Cpu } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc = "/videos/demo.mp4",
  title = "CortexNovation Ai — Architectural Walkthrough",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Auto-play when opened
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Browser may block unmuted autoplay; user can click play
        });
      }
    } else {
      // Pause video when modal is closed
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-[#050B1F]/90 backdrop-blur-xl transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-[#0A1330] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.25)] z-10 flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-blue-900/50 bg-[#050B1F]/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white truncate max-w-[280px] sm:max-w-none">
              {title}
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

        {/* Video Canvas / Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer info strip */}
        <div className="px-5 sm:px-6 py-3 bg-[#070E28] border-t border-blue-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <Cpu className="w-3.5 h-3.5" />
              <span>Multi-Agent Orchestration Demo</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enterprise Ready</span>
            </span>
          </div>
          <span className="text-[#2D8CFF] font-medium text-[11px] sm:text-xs">
            CortexNovation AI • Technical Walkthrough
          </span>
        </div>
      </div>
    </div>
  );
}

