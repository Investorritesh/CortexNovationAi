import React from "react";
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
  CheckCircle2,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
  title: "Solutions & Technical Capabilities — CortexNovation Ai",
  description:
    "Explore our 7 core engineering solutions: Website Development, Frontend Engineering, Java & Spring Boot Microservices, SQL Databases, Multi-Tenant SaaS, Business Analytics, and Custom Software.",
};

export default function SolutionsOverviewPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe": return <Globe className="w-7 h-7 text-cyan-400" />;
      case "Layout": return <Layout className="w-7 h-7 text-blue-400" />;
      case "Cpu": return <Cpu className="w-7 h-7 text-purple-400" />;
      case "Database": return <Database className="w-7 h-7 text-cyan-400" />;
      case "Layers": return <Layers className="w-7 h-7 text-blue-400" />;
      case "BarChart3": return <BarChart3 className="w-7 h-7 text-purple-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
      default: return <Sparkles className="w-7 h-7 text-blue-400" />;
    }
  };

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400 shimmer-badge">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Full-Spectrum Digital & Systems Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Architected for Concurrency, <br />
            <span className="text-gradient">Engineered for Longevity</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We provide deep architectural rigor across web experiences, cloud-native microservices, multi-tenant SaaS, and analytical data lakes.
          </p>
        </div>

        {/* 7 Solutions Grid with Detailed Breakdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`glass-panel-glow p-8 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group ${
                index === 6 ? "md:col-span-2" : ""
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(45,140,255,0.25)]">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-950/80 text-cyan-300 border border-blue-800/40">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-cyan-400 mt-1">
                    {service.heroHeadline}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Deliverables Bullet Preview */}
                <div className="space-y-2 pt-2 border-t border-blue-900/40">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Primary Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {service.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-blue-950/50 border border-blue-800/30 text-center">
                      <div className="text-sm font-extrabold text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-blue-900/40 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/solutions/${service.slug}`}
                  className="btn-primary-glow px-4 py-2 text-xs font-bold inline-flex items-center gap-1.5 rounded-lg text-white"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
