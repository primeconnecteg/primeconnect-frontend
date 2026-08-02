"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#0A0C0D]/10 text-[#5F6C7C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#082A78] flex items-center justify-center">
            <span className="text-xs font-extrabold text-white tracking-tight">P</span>
          </div>
          <span className="text-[15px] font-bold tracking-tight text-[#0A0C0D]">
            PrimeConnect
          </span>
        </div>

        <div className="flex items-center gap-6 text-[14px] font-medium">
          <span className="hidden sm:block">All rights reserved</span>
          <span>Designed and built with precision</span>
          <span>Copyright © 2026</span>
        </div>

      </div>
    </footer>
  );
}
