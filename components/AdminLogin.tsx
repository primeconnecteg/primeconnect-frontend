"use client";

import React, { useState } from "react";
import { Lock, User, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Exact requested credentials check
    const isValidUser = username.trim() === "admin";
    const isValidPass = password === "Admin#@2@26#";

    if (isValidUser && isValidPass) {
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center p-4 selection:bg-[#F4821F] selection:text-[#0a192f]">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0a192f]/80">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#F4821F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#F4821F]/20">
            <ShieldCheck className="w-8 h-8 text-[#F4821F]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white">
            Admin <span className="text-[#F4821F]">Portal</span>
          </h1>
          <p className="text-white/50 text-sm mt-2">
            Prime Connect EG Lead Requests Management
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
              Admin Username
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Enter username..."
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/10 border text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm transition-all ${
                  error ? "border-red-500 bg-red-500/10" : "border-white/10"
                }`}
              />
              <User className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
              Admin Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-white/10 border text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm transition-all ${
                  error ? "border-red-500 bg-red-500/10" : "border-white/10"
                }`}
              />
              <Lock className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-xs pt-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Invalid username or password.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-[#F4821F] text-[#0a192f] font-bold text-base rounded-xl hover:bg-[#F69947] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F4821F]/20 mt-2"
          >
            <span>Access Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-white/30 text-xs mt-8">
          Authorized Prime Connect EG Staff Only
        </p>
      </div>
    </div>
  );
}
