"use client";
import { NAV_LINKS } from "@/lib/data/data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => {
        const id = link.href.replace("/#", "");
        return document.getElementById(id);
      }).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    // For hash links, check if it's the active section
    if (href.split("/")[1].startsWith("#")) {
      return activeSection === href.split("/")[1];
    }
    // For regular routes, check pathname
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-gradient-to-b from-[#02040a] to-[#02040a]/0">
      {/* Logo */}
      <Link
        href="/"
        onClick={handleNavigation}
        className="group flex items-center gap-3 relative z-50"
      >
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
            onClick={handleNavigation}
            className={cn(
              "px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300",
              isLinkActive(link.href)
                ? "bg-brand-primary text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-white"
                : "text-white/60 hover:text-white hover:bg-white/10",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden relative z-50 p-2 text-white hover:text-brand-primary transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-[#02040a]/95 backdrop-blur-lg md:hidden transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-bold uppercase tracking-[0.15em] transition-all duration-300",
                "animate-in fade-in slide-in-from-bottom-4",
                link.highlight
                  ? "text-brand-primary drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]"
                  : isLinkActive(link.href)
                    ? "text-white scale-110"
                    : "text-white/60 hover:text-white hover:scale-105",
              )}
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "backwards",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
