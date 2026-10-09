"use client";

import React, { useState, useEffect } from "react";
import { Command, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? st / max : 0;
      setScrollProgress(progress);
      setIsSolid(st > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Contests", href: "#contests" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header className={`nav ${isSolid ? "solid" : ""}`} id="nav">
        <div className="nav-in">
          <a className="logo" href="#top">
            Amish Kumar Dubey
          </a>

          <nav aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.label} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}

            <button
              onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#c9c9d1] hover:text-[#f2477f] hover:border-[#e0115f]/50 transition-colors cursor-pointer"
              title="Open Command Palette (⌘K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#f2477f]"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-lg text-[#c9c9d1] hover:text-[#f2477f] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
