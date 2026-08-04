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
      initParticles();
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

    // Dynamic Floating Particles System
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      phase: number;
      color: string;
    }

    let particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 18000));

    const colors = ["#08BEEA", "#38BDF8", "#60A5FA", "#FFFFFF"];

    const initParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    let waveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      waveTime += 0.015;

      // 1. Draw Gentle Glowing Sine Mesh Waves in Background
      ctx.save();
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(8, 190, 234, ${0.05 + w * 0.02})`;
        ctx.lineWidth = 1.5 + w;
        for (let x = 0; x < width; x += 15) {
          const y =
            height * (0.45 + w * 0.15) +
            Math.sin(x * 0.003 + waveTime + w * 1.5) * 35 +
            Math.cos(x * 0.006 - waveTime * 0.8) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // 2. Update & Draw Particles & Constellation Beams
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Magnetism & Hover Effect
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = p.baseAlpha + Math.sin(waveTime * p.pulseSpeed * 60 + p.phase) * 0.15;

        if (dist < 180 && mouseX > 0) {
          const force = (1 - dist / 180);
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
          alpha = Math.min(1, alpha + force * 0.6);
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (dist < 180 ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, alpha);
        ctx.shadowBlur = dist < 180 ? 12 : 6;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Connect nearby particles with glowing beams
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
          const maxLinkDist = 135;

          if (pDist < maxLinkDist) {
            const linkAlpha = (1 - pDist / maxLinkDist) * 0.18 * alpha;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(8, 190, 234, 1)";
            ctx.globalAlpha = linkAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
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

      {/* Seamless linear fade to the white/gray background of the next section to mix the colors perfectly */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#F2F4F7] z-0 pointer-events-none" />

      {/* Localized Hover-Interactive Diagonal Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      />

      {/* Center Ambient Glow with Breathing Pulse */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] bg-[#08BEEA]/20 rounded-full blur-3xl pointer-events-none z-0 animate-ambient-pulse" />

      {/* Centered Modern Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 flex flex-col items-center">
        
        {/* Modern Bold Sans Headline with Larger Text & Animated Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] font-sans drop-shadow-xl animate-hero-fade-in-1">
          Scale Your BPO
          <br />
          <span className="animate-gradient-text inline-block">Client Pipeline</span>
        </h1>

        {/* Summarized Subtitle with Larger Font */}
        <p className="text-base sm:text-xl md:text-2xl text-blue-100 font-medium max-w-2xl leading-relaxed font-sans drop-shadow-md px-2 animate-hero-fade-in-2">
          We find, close, and manage end-client relationships for offshore outsourcing companies.
        </p>

        {/* Dark Navy Blue CTA Button with Larger Touch Area & Animated Entrance */}
        <div className="pt-3 sm:pt-6 animate-hero-fade-in-3">
          <button
            onClick={handleScrollDown}
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-[#04143F] hover:bg-[#082A78] text-white font-black text-base md:text-lg rounded-full border border-[#08BEEA]/50 hover:border-[#08BEEA] shadow-2xl shadow-blue-950/60 hover:shadow-[#08BEEA]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 group font-sans cursor-pointer"
          >
            <span>Explore BPO Engine</span>
            <svg
              className="w-5 h-5 ml-2.5 text-[#08BEEA] group-hover:text-white transition-all duration-200 group-hover:translate-y-1"
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
