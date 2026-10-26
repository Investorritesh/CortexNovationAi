"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { ArrowUpRight, Shield, Heart, Mail } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#030712] border-t border-blue-950/80 text-slate-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-900/40">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering the next generation of scalable digital systems, high-concurrency microservices, and autonomous neural architectures.
            </p>
            <div className="text-xs space-y-1">
              <p className="font-semibold text-white">Turning Ideas Into Impact</p>
              <p className="text-cyan-400">Build Smarter. Grow Faster.</p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center hover:bg-white hover:text-black transition-all text-slate-400"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all text-slate-400"
                aria-label="X Profile"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="text-xs text-[#2D8CFF] hover:text-cyan-300 font-semibold"
                >
                  View All Solutions &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href="/products"
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                      {prod.status}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/research"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Values
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:cortexnovationai@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>cortexnovationai@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>Security Assurance</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All client source code and architecture remain 100% proprietary under zero-retention IP ownership agreements.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} <strong className="text-slate-300">CortexNovation Ai</strong>. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Portal</span>
            <span className="flex items-center gap-1 text-slate-400">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for Global Impact</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
