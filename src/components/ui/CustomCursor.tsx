"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch screens or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || 
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.classList.contains("cursor-pointer")
        );
        setIsPointer(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-blue-400/40 bg-blue-500/10 backdrop-blur-[1px] transition-all duration-200 ${
            isPointer
              ? "w-14 h-14 border-cyan-400 bg-cyan-400/20 scale-110 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              : "w-8 h-8 scale-100 shadow-[0_0_15px_rgba(45,140,255,0.25)]"
          }`}
        />
      </div>

      {/* Tiny sharp center point */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-0"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-150 ${
            isPointer ? "w-1.5 h-1.5 bg-cyan-300" : "w-1 h-1"
          }`}
        />
      </div>
    </>
  );
}
