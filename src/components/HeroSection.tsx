"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail, Terminal } from "lucide-react";
import Typewriter from "./ui/Typewriter";
import { Spotlight } from "./ui/Spotlight";
import FloatingParticles from "./ui/FloatingParticles";
import { Ripple } from "./ui/Ripple";
import { BackgroundLines } from "./ui/background-lines";

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


export default function HeroSection() {
  const roles = [
    "Full Stack Developer",
    "Competitive Programmer",
    "IETE Joint Secretary",
    "ECE Student @ BIT Mesra",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      <BackgroundLines className="flex items-center justify-center w-full flex-col min-h-screen pt-24 pb-16 px-6 relative">
        {/* Premium Aceternity Spotlight Lighting */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#216955" />
        <Spotlight className="top-10 right-0 md:right-20" fill="#b3e5d1" />

        {/* Background Floating Sparks */}
        <FloatingParticles />

        {/* Concentric waves radar ripple */}
        <Ripple />
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Terminal className="h-4 w-4 animate-pulse" />
            <span>return "Open to Internship Opportunities"</span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Amish Kumar <span className="text-gradient-primary font-black">Dubey</span>
          </motion.h1>

          {/* Typewriter Subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-3xl text-slate-300 font-medium mb-8 flex flex-col sm:flex-row items-center gap-2"
          >
            <span>I am a</span>
            <Typewriter words={roles} className="text-gradient-orange font-bold" />
          </motion.div>

          {/* Bio Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            Undergrad in Electronics & Communication Engineering at{" "}
            <span className="text-white font-medium">BIT Mesra</span>.
            Building modern, high-performance web applications and solving complex algorithmic challenges.
          </motion.p>

          {/* Buttons / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <a
              href="#contact"
              id="hero-contact-btn"
              className="inline-flex items-center justify-center gap-2 w-48 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold uppercase tracking-wider text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.05] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              id="hero-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-48 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-[1.05] active:scale-[0.98] transition-all text-sm font-semibold uppercase tracking-wider cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </motion.div>

          {/* Fast Social Hooks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/AMISH754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/amish-kumar-dubey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Diagonal Bottom Separator Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
      </BackgroundLines>
    </section>
  );
}
