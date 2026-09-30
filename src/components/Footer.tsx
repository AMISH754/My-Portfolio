"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "GitHub", href: "https://github.com/AMISH754" },
    { label: "LinkedIn", href: "https://linkedin.com/in/amish-kumar-dubey" },
    { label: "Codeforces", href: "https://codeforces.com/profile/amish_kr_dubey" },
    { label: "LeetCode", href: "https://leetcode.com/u/AMISH_KUMAR_DUBEY/" },
    { label: "Email", href: "mailto:amishkumardubey@gmail.com" },
  ];

  return (
    <footer className="bg-[#0C0C0B] text-[#FAFAF8] pt-20 pb-12 px-6 lg:px-12 border-t border-[#262624]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262624]">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-wider text-[#A3A29D] mb-4">
              COLOPHON // AMISH KUMAR DUBEY
            </div>
            <h2 className="text-[#FAFAF8] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              Quiet engineering. Exact typography. Robust systems.
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A3A29D] hover:text-[#FAFAF8] border border-[#262624] hover:border-[#FAFAF8] px-4 py-2.5 rounded-[2px] transition-colors self-start lg:self-end cursor-pointer"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata & Links */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-mono text-[#A3A29D]">
          {/* Copyright & Typography Note */}
          <div className="space-y-1">
            <div>
              &copy; {new Date().getFullYear()} Amish Kumar Dubey · Department of ECE, BIT Mesra
            </div>
            <div className="text-[11px] text-[#6B6A66]">
              Set in Schibsted Grotesk and IBM Plex Mono.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="hover:text-[#FAFAF8] transition-colors inline-flex items-center gap-1"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
