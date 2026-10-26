"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import {
  Globe,
  Layout,
  Cpu,
  Database,
  Layers,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ServicesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case "Database":
        return <Database className="w-6 h-6 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-blue-400" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-purple-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 relative z-10 bg-[#050B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Comprehensive Technical Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient">Maximum Impact</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From high-converting web applications to fault-tolerant Java & Spring Boot microservices, our technical capabilities span the entire modern digital engineering spectrum.
          </p>
        </div>

        {/* 7 Services Grid with 3D-Tilt Cursor Follow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <TiltCard
              key={service.id}
              service={service}
              icon={getIcon(service.iconName)}
              isWide={index === 6} // The 7th card spans nicely on large screens
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D8CFF] hover:text-cyan-300 transition-colors group"
          >
            <span>Explore deep technical breakdowns for all solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function TiltCard({
  service,
  icon,
  isWide = false,
}: {
  service: (typeof servicesData)[0];
  icon: React.ReactNode;
  isWide?: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-2xl p-7 bg-[#0A1330]/80 backdrop-blur-xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isWide ? "md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center" : ""
      }`}
      style={{
        boxShadow: isHovered
          ? "0 0 35px -5px rgba(45, 140, 255, 0.3), inset 0 0 20px -5px rgba(34, 211, 238, 0.15)"
          : "0 8px 30px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Cursor Follow Radial Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 140, 255, 0.15), transparent 70%)`,
          }}
        />
      )}

      {/* Card Content Top */}
      <div className={`space-y-4 relative z-10 ${isWide ? "lg:max-w-2xl" : ""}`}>
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(45,140,255,0.2)]">
            {icon}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-950/90 text-cyan-300 border border-blue-800/40">
            {service.category}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mt-2 line-clamp-3">
            {service.shortDesc}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-950/60 text-slate-300 border border-blue-900/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Bottom / Action */}
      <div className={`pt-6 relative z-10 ${isWide ? "lg:pt-0 lg:pl-8" : ""}`}>
        <Link
          href={`/solutions/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors py-1"
        >
          <span>Explore Solution Architecture</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
