import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CortexNovation Ai — Turning Ideas Into Impact | Build Smarter. Grow Faster.",
  description:
    "Production-grade digital engineering, high-throughput Spring Boot microservices, and autonomous neural architectures. Architecting software that competes with the world's best.",
  keywords: [
    "CortexNovation Ai",
    "Website Development",
    "Frontend Development",
    "Java & Spring Boot Development",
    "Database & SQL Services",
    "SaaS Solutions",
    "Data Analytics & Business Analytics",
    "Custom Business Software Development",
    "Artificial Intelligence",
    "Multi-Agent Systems",
    "Three.js WebGL",
  ],
  authors: [{ name: "CortexNovation Ai Engineering Team" }],
  creator: "CortexNovation Ai",
  publisher: "CortexNovation Ai",
  metadataBase: new URL("https://cortexnovation.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cortexnovation.ai",
    title: "CortexNovation Ai — Turning Ideas Into Impact",
    description: "Build Smarter. Grow Faster. Production-grade enterprise software, WebGL digital experiences, and neural architectures.",
    siteName: "CortexNovation Ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "CortexNovation Ai — Turning Ideas Into Impact",
    description: "Build Smarter. Grow Faster. Enterprise AI, high-concurrency microservices, and modern web applications.",
    creator: "@CortexNovationAi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CortexNovation Ai",
    "url": "https://cortexnovation.ai",
    "logo": "https://cortexnovation.ai/logo.png",
    "slogan": "Turning Ideas Into Impact — Build Smarter. Grow Faster.",
    "description": "Production-grade digital engineering, high-concurrency Spring Boot microservices, and autonomous neural architectures.",
    "sameAs": [
      "https://linkedin.com",
      "https://github.com",
      "https://twitter.com"
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#050B1F] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="noise-overlay" />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
