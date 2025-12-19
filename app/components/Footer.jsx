"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        {/* Wrapper */}
        <div className="relative flex flex-col items-center text-center gap-4">
          {/* Logo */}
          <div
            className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-xl font-bold text-white transition hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          >
            S
          </div>

          {/* Text */}
          <p className="text-sm text-white/70">
            Made with लव <span className="inline-block animate-pulse">❤️</span>{" "}
            in India
          </p>

          <p className="text-sm text-white/50">
            © 2025 Shivam Singh. All rights reserved.
          </p>

          {/* Back to top - Right on Desktop */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 cursor-pointer transition hover:border-purple-400 hover:text-purple-400"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
