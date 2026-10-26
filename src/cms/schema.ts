/**
 * CortexNovation Ai — Headless CMS (Sanity / Contentful) Typed Schemas
 * 
 * Defines schemas for:
 * 1. Research & Insights (Articles / Whitepapers)
 * 2. Enterprise Case Studies (Projects)
 * 3. Products & Software Systems
 */

export interface CMSArticleSchema {
  _id: string;
  _type: "article";
  title: string;
  slug: { current: string };
  category: "AI & Neural Systems" | "System Architecture" | "Data Engineering" | "Frontend & UX";
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  excerpt: string;
  tags: string[];
  featured: boolean;
  content: Array<{
    _key: string;
    heading: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      code: string;
    };
  }>;
}

export interface CMSProjectSchema {
  _id: string;
  _type: "project";
  title: string;
  slug: { current: string };
  clientCategory: string;
  industry: "Fintech" | "HealthTech" | "Enterprise SaaS" | "Logistics" | "AI & Cloud";
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: Array<{
    value: string;
    label: string;
    change: string;
  }>;
}

export interface CMSProductSchema {
  _id: string;
  _type: "product";
  name: string;
  slug: { current: string };
  tagline: string;
  category: string;
  status: "Active" | "Beta" | "Early Access";
  description: string;
  features: Array<{
    title: string;
    desc: string;
    icon: string;
  }>;
  specs: Array<{
    label: string;
    value: string;
  }>;
  pricing: Array<{
    plan: string;
    price: string;
    period: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
  }>;
}

/**
 * Example GROQ Queries for Sanity CMS Integration:
 * 
 * export const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
 *   _id, title, "slug": slug.current, category, publishedAt, readTime, author, excerpt, tags, featured
 * }`;
 * 
 * export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
 *   _id, title, "slug": slug.current, clientCategory, industry, tagline, summary, metrics, techStack
 * }`;
 */
