"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import {
  Globe,
  Layout,
  Cpu,
  Database,
  Layers,
  BarChart3,
  ShieldCheck,
  Bot,
  Activity,
  Terminal,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface MegaMenuProps {
  type: "solutions" | "products";
  onClose: () => void;
}

export function MegaMenu({ type, onClose }: MegaMenuProps) {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Globe": return <Globe className="w-5 h-5 text-cyan-400" />;
      case "Layout": return <Layout className="w-5 h-5 text-blue-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Database": return <Database className="w-5 h-5 text-cyan-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-blue-400" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-purple-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const getProductIcon = (slug: string) => {
    switch (slug) {
      case "cortex-flow": return <Bot className="w-5 h-5 text-cyan-400" />;
      case "novation-pulse": return <Activity className="w-5 h-5 text-blue-400" />;
      case "synthex-bi": return <Terminal className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  if (type === "solutions") {
    return (
      <div className="w-[840px] p-6 rounded-2xl bg-[#070F2B]/95 backdrop-blur-2xl border border-blue-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(45,140,255,0.15)] animate-fade-in">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/40">
          <div>
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Core Capabilities
            </span>
            <h4 className="text-lg font-bold text-white">Engineered for Massive Scale</h4>
          </div>
          <Link
            href="/solutions"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2D8CFF] hover:text-cyan-300 transition-colors"
          >
            <span>Explore All 7 Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/solutions/${service.slug}`}
              onClick={onClose}
              className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-blue-900/25 border border-transparent hover:border-blue-500/30 transition-all duration-200"
            >
              <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all">
                {getServiceIcon(service.iconName)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {service.title}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40">
                    {service.category.split(" ")[0]}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                  {service.shortDesc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400 bg-blue-950/30 -mx-6 -mb-6 p-4 rounded-b-2xl">
          <span className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Zero-downtime microservices & 120 FPS frontends
          </span>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-white hover:text-cyan-300 font-semibold flex items-center gap-1"
          >
            <span>Book Architectural Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[680px] p-6 rounded-2xl bg-[#070F2B]/95 backdrop-blur-2xl border border-blue-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(45,140,255,0.15)] animate-fade-in">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/40">
        <div>
          <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
            Proprietary Software Platforms
          </span>
          <h4 className="text-lg font-bold text-white">Intelligent Platforms Ready to Deploy</h4>
        </div>
        <Link
          href="/products"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2D8CFF] hover:text-cyan-300 transition-colors"
        >
          <span>View All Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-3">
        {productsData.map((product) => (
          <Link
            key={product.id}
            href="/products"
            onClick={onClose}
            className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-blue-900/25 border border-transparent hover:border-purple-500/30 transition-all duration-200"
          >
            <div className="p-3 rounded-lg bg-blue-950/70 border border-blue-500/20 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
              {getProductIcon(product.slug)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {product.name}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    product.status === "Active"
                      ? "bg-emerald-950/60 text-emerald-400 border-emerald-500/30"
                      : "bg-purple-950/60 text-purple-300 border-purple-500/30"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{product.tagline}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all self-center" />
          </Link>
        ))}
      </div>

      <div className="mt-4 pt-3.5 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400 bg-blue-950/30 -mx-6 -mb-6 p-4 rounded-b-2xl">
        <span>Need a custom deployment or on-premise VPC?</span>
        <Link
          href="/contact"
          onClick={onClose}
          className="text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Request Enterprise Demo
        </Link>
      </div>
    </div>
  );
}
