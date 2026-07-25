"use client";

import React from "react";

export default function Footer() {
  const navLinks = [
    { label: "What We Do", href: "#what-we-do" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Guarantee", href: "#guarantee" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <footer className="bg-[#0a192f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Bigger Footer Logo Image */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Prime Connect EG"
              className="h-16 md:h-20 w-auto object-contain transition-all"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-white/40 hover:text-[#F4821F] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm text-center md:text-left">
            Prime Connect EG © 2026 · Cairo, Egypt ·{" "}
            <a
              href="mailto:info@primeconnecteg.com"
              className="text-[#F4821F]/60 hover:text-[#F4821F] transition-colors"
            >
              info@primeconnecteg.com
            </a>
          </p>
          <p className="text-white/20 text-xs font-mono">
            Powered by All States Careers
          </p>
        </div>
      </div>
    </footer>
  );
}
