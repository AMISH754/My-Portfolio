"use client";

import React, { useState } from "react";
import { Menu, X, Command } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Specimen", href: "#home", num: "00" },
    { label: "About", href: "#about", num: "01" },
    { label: "Technical Index", href: "#skills", num: "02" },
    { label: "Benchmarks", href: "#cp", num: "03" },
    { label: "Signal Lab", href: "#ece-lab", num: "04" },
    { label: "Selected Works", href: "#projects", num: "05" },
    { label: "Contact", href: "#contact", num: "06" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm hairline-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-3 group text-[#151514]">
          <span className="font-sans font-medium text-base tracking-tight">
            Amish Kumar Dubey
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#6B6A66] tracking-wider uppercase">
            / ECE BIT Mesra
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div className="flex items-center gap-6">
            {navLinks.slice(1, 6).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6B6A66] hover:text-[#151514] transition-colors py-1 flex items-center gap-1.5 text-[13px]"
              >
                <span className="font-mono text-[10px] text-[#A3A29D]">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-4 hairline-l">
            <button
              onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
              className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono text-[#6B6A66] hover:text-[#151514] bg-[#F1F1EE] hover:bg-[#DAD9D4] border border-[#DAD9D4] rounded-[4px] transition-colors cursor-pointer"
              title="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>

            <a
              href="#contact"
              className="btn-primary py-2 px-3.5 text-xs"
            >
              <span>Transmit</span>
              <span className="arrow-nudge">→</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => window.dispatchEvent(new Event("toggle-command-palette"))}
            className="p-2 text-xs font-mono text-[#6B6A66] bg-[#F1F1EE] border border-[#DAD9D4] rounded-[4px]"
            title="Search"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#151514] hover:bg-[#F1F1EE] rounded-[4px] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF8] hairline-b px-6 py-6 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-2 hairline-b text-[#151514] hover:text-[#6B6A66] transition-colors text-base"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-[#A3A29D]">{item.num}</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full mt-2 py-3 text-center"
          >
            Transmit Message →
          </a>
        </div>
      )}
    </header>
  );
}
