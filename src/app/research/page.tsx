"use client";

import React, { useState } from "react";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const categories = [
    "All",
    "AI & Neural Systems",
    "System Architecture",
    "Data Engineering",
    "Frontend & UX",
  ];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = articlesData.find((a) => a.featured) || articlesData[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-xs font-semibold uppercase tracking-wider text-cyan-400 shimmer-badge">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Research & Engineering Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Architectural Insights & <br />
            <span className="text-gradient">AI Engineering Papers</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Technical whitepapers, deep benchmarks, and production-tested patterns from our senior systems architects and AI researchers.
          </p>
        </div>

        {/* Featured Whitepaper Banner */}
        {featured && (
          <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl bg-[#08112F]/90 border border-blue-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                    Featured Analysis
                  </span>
                  <span>{featured.category}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  <Link href={`/research/${featured.slug}`} className="hover:text-cyan-300 transition-colors">
                    {featured.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-cyan-300 border border-blue-500/30">
                    {featured.author.name.charAt(0)}
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-white">{featured.author.name}</p>
                    <p className="text-slate-400">{featured.author.role}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-center lg:text-right">
                <Link
                  href={`/research/${featured.slug}`}
                  className="btn-primary-glow px-6 py-4 text-sm font-bold inline-flex items-center justify-center gap-2 rounded-xl text-white shadow-xl"
                >
                  <span>Read Technical Paper</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter Bar */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                      : "bg-blue-950/40 text-slate-300 border border-blue-900/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search research topics, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0A1330] border border-blue-500/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="glass-panel-glow p-7 rounded-3xl bg-[#0A1330]/90 border border-blue-500/25 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold text-cyan-400 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    <Link href={`/research/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-slate-300">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-900/40 mt-6 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    By <span className="text-white font-medium">{article.author.name}</span>
                  </div>
                  <Link
                    href={`/research/${article.slug}`}
                    className="text-xs font-semibold text-white group-hover:text-cyan-400 flex items-center gap-1"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No technical whitepapers found matching "{searchQuery}".
            </div>
          )}
        </div>

        {/* Newsletter Signup Card */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl bg-[#091338]/90 border border-blue-500/30 text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-500/30 flex items-center justify-center mx-auto text-cyan-400">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Subscribe to Technical Briefings
          </h3>

          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Receive monthly engineering memos on distributed microservices, multi-agent LLM systems, and high-performance WebGL graphics. Zero marketing fluff.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex items-center gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="engineer@enterprise.com"
              className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-white placeholder-slate-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-primary-glow px-5 py-3 rounded-xl text-xs font-bold text-white shrink-0"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <div className="text-xs text-emerald-400 flex items-center justify-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>You’re subscribed! Next memo arrives on the first Tuesday of next month.</span>
            </div>
          )}
        </div>

      </div>

      <div className="mt-24">
        <FinalCTA />
      </div>
    </div>
  );
}
