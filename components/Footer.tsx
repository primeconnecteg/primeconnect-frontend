"use client";

import React from "react";
import { Download } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Egypt", href: "#why-egypt" },
    { label: "Process", href: "#process" },
    { label: "Guarantee", href: "#guarantee" },
    { label: "Leadership", href: "#leadership" },
    { label: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F2F4F7] border-t border-[#0A0C0D]/10 text-[#5F6C7C] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/Prime_Connect_Horizontal_Lockup_Transparent_3200.png"
              alt="Prime Connect EG Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-[11px] uppercase font-bold text-[#5F6C7C] tracking-wider">
              Egypt BPO Growth Engine
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-bold text-[#5F6C7C] hover:text-[#075CE0] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Prime_Connect_EG_Company_Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#075CE0] hover:underline inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Company Profile PDF</span>
            </a>
          </div>

          {/* Email Contacts */}
          <div className="text-right text-xs space-y-1 text-center md:text-right">
            <p className="font-semibold text-[#0A0C0D]">
              Email:{" "}
              <a href="mailto:info@primeconnecteg.com" className="text-[#075CE0] hover:underline font-bold">
                info@primeconnecteg.com
              </a>
            </p>
            <p className="text-[#5F6C7C]">
              Alt:{" "}
              <a href="mailto:primeconnect.eg@gmail.com" className="hover:underline">
                primeconnect.eg@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#0A0C0D]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5F6C7C] gap-4">
          <p>© 2026 Prime Connect EG · Cairo, Egypt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



