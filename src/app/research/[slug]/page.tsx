import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData } from "@/data/articles";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Copy,
  CheckCircle2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articlesData.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pt-32 pb-16 bg-[#050B1F] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Research & Insights</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30">
              {article.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          {/* Author Byline & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-y border-blue-900/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                {article.author.name.charAt(0)}
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">{article.author.name}</p>
                <p className="text-slate-400">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/40 cursor-pointer hover:text-white">
                <Share2 className="w-3.5 h-3.5" />
                Share Analysis
              </span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="space-y-10 text-slate-200 leading-relaxed">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Code Snippet Box */}
              {section.codeSnippet && (
                <div className="rounded-2xl border border-blue-500/30 bg-[#070E28] overflow-hidden my-6">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#050A1E] border-b border-blue-900/40 text-xs text-slate-400 font-mono">
                    <span>{section.codeSnippet.language}</span>
                    <span className="flex items-center gap-1 text-[11px] text-cyan-400">
                      <Copy className="w-3 h-3" />
                      Strict Type Safety
                    </span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-xs font-mono text-cyan-300 leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </article>

        {/* Tags */}
        <div className="pt-8 border-t border-blue-900/40 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Categorization Tags:
          </span>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-slate-300 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12 space-y-6">
          <h3 className="text-xl font-bold text-white">Recommended Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/research/${r.slug}`}
                className="glass-panel-glow p-6 rounded-2xl bg-[#0A1330]/80 border border-blue-500/20 hover:border-cyan-400/50 block group transition-all"
              >
                <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                  {r.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                  {r.title}
                </h4>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#2D8CFF] font-semibold">
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
}
