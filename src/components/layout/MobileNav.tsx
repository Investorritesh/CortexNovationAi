"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Sparkles, Globe, Layers, BookOpen, Briefcase, Info, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/", icon: Sparkles },
    { label: "Solutions", href: "/solutions", icon: Globe },
    { label: "Products", href: "/products", icon: Layers },
    { label: "Research & Insights", href: "/research", icon: BookOpen },
    { label: "Projects", href: "/projects", icon: Briefcase },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed inset-0 z-[10005] bg-[#050B1F]/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-blue-900/40">
        <Logo size="md" />
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-950/60 border border-blue-500/30 text-white"
          aria-label="Close Navigation Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Links */}
      <div className="flex flex-col space-y-4 my-auto py-6">
        {navLinks.map((link, idx) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between p-3.5 rounded-xl text-lg font-bold transition-all duration-300 ${
                isActive
                  ? "text-cyan-400 bg-blue-950/60 border border-blue-500/40"
                  : "text-slate-200 hover:text-white hover:bg-white/5"
              }`}
              style={{
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              <div className="flex items-center gap-3.5">
                <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-blue-400"}`} />
                <span>{link.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="pt-6 border-t border-blue-900/40 space-y-4">
        <Link
          href="/contact"
          onClick={onClose}
          className="w-full block py-4 text-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base shadow-[0_0_25px_rgba(45,140,255,0.6)]"
        >
          Get in Touch
        </Link>
        <p className="text-center text-xs text-slate-400">
          Turning Ideas Into Impact • Build Smarter. Grow Faster.
        </p>
      </div>
    </div>
  );
}
