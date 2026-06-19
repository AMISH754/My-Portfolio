"use client";

import React from "react";
import { Mail, ArrowUp, Award } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/AMISH754", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/amish-kumar-dubey", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Email", href: "mailto:amishkumardubey@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-navy-900/90 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-xl font-bold text-white tracking-wide">
            Amish Kumar <span className="text-secondary">Dubey</span>
          </div>
          <p className="text-slate-400 text-xs mt-1 text-center md:text-left">
            ECE Undergrad @ BIT Mesra | Full Stack Developer | Competitive Programmer
          </p>
        </div>

        {/* Middle Social icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/80 hover:bg-primary text-slate-300 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
          {/* Custom competitive programming visual icons */}
          <a
            href="https://codeforces.com/profile/amish_kr_dubey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/80 hover:bg-secondary text-slate-300 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center font-bold text-xs"
            title="Codeforces"
          >
            CF
          </a>
          <a
            href="https://leetcode.com/u/AMISH_KUMAR_DUBEY/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/80 hover:bg-secondary text-slate-300 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center font-bold text-xs"
            title="LeetCode"
          >
            LC
          </a>
        </div>

        {/* Right back-to-top & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 hover:bg-primary hover:border-primary hover:scale-105 active:scale-95 text-slate-400 hover:text-white transition-all shadow-md cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <div className="text-slate-500 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Amish Kumar Dubey. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
