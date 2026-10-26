"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { ScrollProgress } from "./ScrollProgress";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"solutions" | "products" | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Ensure permanently locked to Dark theme
    document.documentElement.removeAttribute("data-theme");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: "solutions" | "products") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions", hasDropdown: "solutions" as const },
    { label: "Products", href: "/products", hasDropdown: "products" as const },
    { label: "Research & Insights", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-2.5 bg-[#050B1F]/85 backdrop-blur-xl border-b border-blue-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.hasDropdown)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${
                        isActive || activeMegaMenu === link.hasDropdown
                          ? "text-cyan-400 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-blue-950/40"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMegaMenu === link.hasDropdown ? "rotate-180 text-cyan-400" : "text-slate-400"
                        }`}
                      />
                    </Link>

                    {/* MegaMenu Dropdown Content */}
                    {activeMegaMenu === link.hasDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                        <MegaMenu
                          type={link.hasDropdown}
                          onClose={() => setActiveMegaMenu(null)}
                        />
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-blue-950/40"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Active Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center space-x-3">
            {/* Desktop CTA Button */}
            <div className="hidden sm:block">
              <Link href="/contact">
                <MagneticButton className="btn-primary-glow px-5 py-2.5 text-sm flex items-center gap-2 group">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-blue-950/60 border border-blue-500/30 text-white hover:bg-blue-900/40 transition-colors"
              aria-label="Open Mobile Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar directly beneath the navbar */}
        <div className="absolute bottom-0 left-0 right-0">
          <ScrollProgress />
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
