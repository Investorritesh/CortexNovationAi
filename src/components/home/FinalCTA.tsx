"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Send, ShieldCheck, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid business email address.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you! Our engineering leadership will reach out within 4 hours.");
      setEmail("");
    }, 800);
  };

  return (
    <section className="py-28 relative overflow-hidden bg-[#030818]">
      {/* Animated Aurora & Mountain Gradient Background Scene */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Aurora Glow Top */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-cyan-500/25 via-blue-600/20 to-purple-800/10 blur-[130px]" />
        
        {/* Mountain Silhouette Geometric Backdrop */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 right-0 w-full opacity-30 drop-shadow-[0_-10px_20px_rgba(45,140,255,0.2)]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A1435"
            d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-950/60 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(45,140,255,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Launch Your Next Architectural Benchmark</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Let’s Build Something <br />
          <span className="text-gradient">Great Together!</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a full-scale multi-tenant SaaS, mission-critical Spring Boot microservices, or an autonomous AI decision engine — we’re ready to execute.
        </p>

        {/* Email Capture & Get in Touch Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl sm:rounded-full bg-[#081230]/90 border border-blue-500/40 backdrop-blur-xl shadow-[0_0_35px_rgba(45,140,255,0.25)]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your enterprise work email..."
              className="w-full px-5 py-3.5 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
              disabled={status === "submitting" || status === "success"}
              required
            />
            <MagneticButton
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto btn-primary-glow px-7 py-3.5 text-sm font-bold flex items-center justify-center gap-2 shrink-0 rounded-xl sm:rounded-full shadow-lg"
            >
              <span>{status === "submitting" ? "Connecting..." : "Get in Touch"}</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>

          {/* Feedback message */}
          {message && (
            <div
              className={`text-xs font-medium px-4 py-2 rounded-lg inline-flex items-center gap-2 ${
                status === "success"
                  ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                  : "bg-red-950/80 text-red-300 border border-red-500/40"
              }`}
            >
              {status === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              <span>{message}</span>
            </div>
          )}
        </form>

        {/* Guarantee notes */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict NDA & 100% IP Protection</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Response Guaranteed Within 4 Hours</span>
          </span>
          <a
            href="mailto:cortexnovationai@gmail.com"
            className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>cortexnovationai@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}
