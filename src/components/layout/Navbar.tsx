"use client";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-[#02040a] to-transparent">
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-3">
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Animated Hexagon Logo */}
          <div className="absolute inset-0 border border-brand-primary/50 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
          <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#00F0FF]" />
        </div>
        <span className="font-sans font-black text-xl tracking-tight text-white">
          DO<span className="text-brand-primary">.26</span>
        </span>
      </Link>

      {/* Desktop Links - Glass Effect */}
      <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/5 px-2 py-2 rounded-full">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300",
              link.highlight
                ? "bg-brand-primary text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-white"
                : "text-white/60 hover:text-white hover:bg-white/10",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
