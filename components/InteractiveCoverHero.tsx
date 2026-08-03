"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveCoverHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Spacious distance between diagonal lines
    const lineSpacing = 135;
    const segmentLength = 15;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const minK = -height;
      const maxK = width;

      // Draw Diagonal Lines with Localized Mouse Hover Highlight
      for (let k = minK; k < maxK; k += lineSpacing) {
        const xStart = Math.max(0, k);
        const xEnd = Math.min(width, height + k);

        for (let x = xStart; x < xEnd; x += segmentLength) {
          const nextX = Math.min(xEnd, x + segmentLength);
          const y1 = x - k;
          const y2 = nextX - k;

          const midX = (x + nextX) / 2;
          const midY = (y1 + y2) / 2;

          const dx = mouseX - midX;
          const dy = mouseY - midY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(nextX, y2);

          if (dist < 160 && mouseX > 0 && mouseY > 0) {
            const hoverFactor = (1 - dist / 160) ** 2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.04 + hoverFactor * 0.75})`;
            ctx.lineWidth = 0.7 + hoverFactor * 1.3;
          } else {
            // Very low opacity for unhovered lines
            ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
            ctx.lineWidth = 0.7;
          }
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById("hero-main");
    if (target) {
      const navHeight = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-[#04143F]">
      
      {/* Linear Sky Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04143F] via-[#082A78] via-45% to-[#075CE0] z-0" />

      {/* Atmospheric Soft Radial Glow fading toward white at the lower portion */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 50% 92%, rgba(242, 244, 247, 1) 0%, rgba(242, 244, 247, 0.85) 30%, rgba(8, 190, 234, 0.25) 60%, transparent 85%)",
        }}
      />

      {/* Localized Hover-Interactive Diagonal Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      />

      {/* Center Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#08BEEA]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Centered Modern Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 space-y-8 flex flex-col items-center">
        
        {/* Modern Bold Sans Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] font-sans drop-shadow-lg">
          Scale Your BPO
          <br />
          <span className="text-[#08BEEA]">Client Pipeline</span>
        </h1>

        {/* Summarized Subtitle */}
        <p className="text-base sm:text-lg text-blue-100 font-medium max-w-lg leading-relaxed font-sans drop-shadow-sm">
          We find, close, and manage end-client relationships for offshore outsourcing companies.
        </p>

        {/* Brand-Colored CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#08BEEA] hover:bg-[#075CE0] text-[#04143F] hover:text-white font-black text-sm md:text-base rounded-full shadow-xl shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95 group font-sans"
          >
            Explore BPO Engine
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

      </div>

    </section>
  );
}
