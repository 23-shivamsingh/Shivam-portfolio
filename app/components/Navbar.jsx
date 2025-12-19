"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Ensure hydration completes before scroll logic
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-gradient-to-br from-[#26134a]/60 via-[#05000f]/60 to-[#02000a]/60 shadow-2xl"
          : "bg-gradient-to-br from-[#281454] via-transparent to-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-xl font-bold text-white transition hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            S
          </div>
          <span className="hidden sm:block text-xs sm:text-sm opacity-80 hover:text-purple-300 transition-colors">
            shivams2307@gmail.com
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group pb-1 hover:text-purple-300 transition-colors"
            >
              {link.name}
              <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs sm:text-sm font-medium shadow-lg shadow-purple-500/30"
          >
            Hire me!
          </Link>

          <button
            className="md:hidden inline-flex items-center justify-center"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[2px] bg-white rounded-full" />
              <span className="block w-6 h-[2px] bg-white rounded-full" />
              <span className="block w-6 h-[2px] bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden absolute top-full left-0 right-0 px-4 pb-4">
          <div className="bg-[#05000f]/95 border border-white/10 rounded-xl p-4 space-y-3 text-sm font-medium backdrop-blur">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-purple-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
