"use client";

import React, { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only display once per session if desired, or quick 1.2s entrance on initial page load
    const timer = setTimeout(() => {
      setFading(true);
      const closeTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(closeTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050B1F] transition-opacity duration-700 ease-in-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient background glow */}
        <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

        {/* Drawing Hexagon Logo */}
        <div className="w-24 h-24 relative mb-6">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_20px_rgba(45,140,255,0.8)]">
            <defs>
              <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#2D8CFF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {/* Hexagon Outline with stroke animation */}
            <polygon
              points="50,6 88,28 88,72 50,94 12,72 12,28"
              stroke="url(#loaderGrad)"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-[draw_1.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            />

            {/* C curve */}
            <path
              d="M 68 34 C 62 26 42 22 28 36 C 14 50 18 70 34 78 C 48 84 66 78 70 66"
              stroke="url(#loaderGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-[draw_1.4s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
            />

            {/* Pulsing Core */}
            <circle cx="50" cy="50" r="4" fill="#22D3EE" className="animate-ping" />
          </svg>
        </div>

        {/* Wordmark with subtle fade */}
        <div className="flex items-center space-x-1.5 text-xl font-bold tracking-tight">
          <span className="text-white">CortexNovation</span>
          <span className="text-[#2D8CFF] drop-shadow-[0_0_10px_rgba(45,140,255,0.9)]">Ai</span>
        </div>

        {/* Tagline */}
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mt-2 font-medium">
          Turning Ideas Into Impact
        </p>

        {/* Micro loading progress line */}
        <div className="w-36 h-0.5 bg-blue-950/60 rounded-full mt-6 overflow-hidden relative border border-blue-500/20">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 w-full animate-[progress_1.2s_ease-in-out]" />
        </div>
      </div>
    </div>
  );
}
