"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[2px] bg-blue-950/40 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#22D3EE] via-[#2D8CFF] to-[#8B5CF6] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(45,140,255,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
