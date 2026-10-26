import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
}

export function Logo({ className = "", size = "md", showWordmark = true }: LogoProps) {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }[size];

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl"
  }[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Hexagonal "C" Mark */}
      <div className={`relative ${iconDimensions} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        {/* Ambient neon backglow */}
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md group-hover:bg-cyan-400/40 transition-colors" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(45,140,255,0.6)]"
        >
          <defs>
            <linearGradient id="cortexHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="50%" stopColor="#2D8CFF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="innerCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D8CFF" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>

          {/* Hexagon Outer Shield */}
          <polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            stroke="url(#cortexHexGrad)"
            strokeWidth="5"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-[6]"
            fill="rgba(5, 11, 31, 0.6)"
          />

          {/* Styled Futuristic "C" Curve with Neural Nodes */}
          <path
            d="M 68 34 C 62 26 42 22 28 36 C 14 50 18 70 34 78 C 48 84 66 78 70 66"
            stroke="url(#cortexHexGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Core Synaptic Node */}
          <circle cx="50" cy="50" r="5" fill="url(#innerCoreGrad)">
            <animate
              attributeName="r"
              values="4;6;4"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Spark Accent Lines */}
          <line x1="50" y1="50" x2="68" y2="34" stroke="#22D3EE" strokeWidth="2" strokeDasharray="3,3" opacity="0.8" />
          <line x1="50" y1="50" x2="34" y2="78" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3,3" opacity="0.8" />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className={`font-semibold tracking-tight ${textSizes} leading-none flex items-center`}>
          <span className="text-white group-hover:text-slate-100 transition-colors">
            CortexNovation
          </span>
          <span className="ml-1.5 text-[#2D8CFF] font-bold group-hover:text-[#22D3EE] transition-colors drop-shadow-[0_0_8px_rgba(45,140,255,0.8)]">
            Ai
          </span>
        </div>
      )}
    </Link>
  );
}
