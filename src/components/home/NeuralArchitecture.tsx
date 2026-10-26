"use client";

import React, { useState } from "react";
import { Database, Brain, Zap, LineChart, CheckCircle2, ArrowRight } from "lucide-react";

interface LayerData {
  id: string;
  name: string;
  tagline: string;
  depth: number;
  icon: React.ReactNode;
  specs: string[];
  tech: string[];
  color: string;
  metric: string;
}

export function NeuralArchitecture() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isExploded, setIsExploded] = useState<boolean>(true);

  const layers: LayerData[] = [
    {
      id: "data",
      name: "01. Data Ingestion & Storage Layer",
      tagline: "Resilient Multi-Region Data Mesh & Event Streaming",
      depth: 0,
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      specs: [
        "Distributed write-ahead logging with Apache Kafka & zero packet drop",
        "Multi-AZ PostgreSQL partitions with row-level security (RLS)",
        "Sub-second OLAP analytical warehousing via ClickHouse & TimescaleDB",
      ],
      tech: ["PostgreSQL", "Kafka", "ClickHouse", "TimescaleDB", "Redis"],
      color: "#22D3EE",
      metric: "10M+ events/sec",
    },
    {
      id: "model",
      name: "02. Model & Reasoning Layer",
      tagline: "Autonomous Multi-Agent Networks & Deterministic Guardrails",
      depth: 1,
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      specs: [
        "Hierarchical state machine coordination across specialized LLM swarms",
        "Cryptographic PII tokenization & strict JSON schema boundary validation",
        "Deterministic fallbacks ensuring zero hallucinations in production systems",
      ],
      tech: ["PyTorch", "ONNX Runtime", "CortexFlow Swarms", "OpenTelemetry"],
      color: "#2D8CFF",
      metric: "99.4% Deterministic Accuracy",
    },
    {
      id: "inference",
      name: "03. Real-Time Inference Layer",
      tagline: "Spring Boot 3 Microservices & High-Throughput Edge Routing",
      depth: 2,
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      specs: [
        "Java 21 Project Loom virtual threads handling 250k concurrent requests",
        "Low-overhead gRPC contracts and asynchronous reactive stream routing",
        "Sub-12ms distributed edge evaluation with automatic failover circuits",
      ],
      tech: ["Java 21", "Spring Boot 3", "gRPC", "Docker", "Kubernetes"],
      color: "#8B5CF6",
      metric: "<12ms P99 Latency",
    },
    {
      id: "insight",
      name: "04. Decision & Insight Layer",
      tagline: "Reactive WebGL Frontends & Autonomous Action Triggers",
      depth: 3,
      icon: <LineChart className="w-5 h-5 text-pink-400" />,
      specs: [
        "Interactive 120 FPS data visualization with Three.js & Framer Motion",
        "Automated operational trigger webhooks with human-in-the-loop overrides",
        "Real-time executive telemetry and conversational natural language queries",
      ],
      tech: ["Next.js 16", "React 19", "Three.js", "SynthexBI", "Tailwind CSS"],
      color: "#EC4899",
      metric: "120 FPS Rendering",
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-[#070E28] overflow-hidden border-y border-blue-950/60">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Under The Hood</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built on a <span className="text-gradient">Neural Architecture</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A cohesive stack engineered from the bottom metal to the visual interface. Each tier is decoupled, fault-tolerant, and optimized for sub-millisecond execution.
          </p>

          {/* Toggle explode state */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsExploded(!isExploded)}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-cyan-300 transition-colors flex items-center gap-2"
            >
              <span>{isExploded ? "Stack Layers Together" : "Explode Isometric 3D Stack"}</span>
            </button>
          </div>
        </div>

        {/* 3D Stack & Details Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Isometric Exploded Glass Stack */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center py-10 min-h-[440px]">
            {/* Light Beam Connector Line */}
            <div className="absolute top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-60 shadow-[0_0_12px_rgba(45,140,255,0.8)] z-0" />

            {/* Render 4 Glass Layers in reverse order so top is on top */}
            <div className="w-full max-w-md relative space-y-4 z-10">
              {layers.map((layer, idx) => {
                const isActive = activeLayer === idx;
                const translateY = isExploded ? idx * 16 : idx * 4;

                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    style={{
                      transform: `perspective(1000px) rotateX(48deg) rotateZ(-24deg) translateY(${translateY}px)`,
                      boxShadow: isActive
                        ? `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${layer.color}66`
                        : "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                    className={`relative cursor-pointer rounded-2xl p-5 backdrop-blur-2xl transition-all duration-500 border ${
                      isActive
                        ? "bg-[#0A163B]/95 border-cyan-400 scale-105 z-20"
                        : "bg-[#070F28]/80 border-blue-500/25 hover:border-blue-400/50 hover:scale-102 z-10"
                    }`}
                  >
                    {/* Layer indicator bar */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ color: layer.color, backgroundColor: layer.color }}
                        />
                        <span className="text-sm font-bold text-white tracking-wide">
                          {layer.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-cyan-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/40">
                        {layer.metric}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-medium">{layer.tagline}</p>

                    {/* Laser synapse node indicator */}
                    <div
                      className={`absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                        isActive
                          ? "bg-cyan-400 border-white scale-125 shadow-[0_0_15px_#22D3EE]"
                          : "bg-blue-950 border-blue-500/40"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layer Synchronized Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel-glow p-8 rounded-2xl border border-blue-500/30 bg-[#0A1330]/90">
              
              {/* Active Layer Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-950 border border-blue-500/30">
                  {layers[activeLayer].icon}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Active Architecture Tier
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {layers[activeLayer].name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                {layers[activeLayer].tagline}
              </p>

              {/* Specs Checklist */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Architecture Specifications & Guarantees
                </h4>
                {layers[activeLayer].specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Technologies In This Tier */}
              <div className="pt-4 border-t border-blue-900/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {layers[activeLayer].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-950/70 text-slate-200 border border-blue-700/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Interactive Step Navigator */}
            <div className="grid grid-cols-4 gap-2">
              {layers.map((l, i) => (
                <button
                  key={l.id}
                  onClick={() => setActiveLayer(i)}
                  className={`p-2.5 rounded-lg text-xs font-semibold transition-all text-center border ${
                    activeLayer === i
                      ? "bg-blue-600 text-white border-cyan-400 shadow-[0_0_15px_rgba(45,140,255,0.5)]"
                      : "bg-blue-950/40 text-slate-400 border-blue-900/40 hover:text-white"
                  }`}
                >
                  Tier 0{i + 1}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
