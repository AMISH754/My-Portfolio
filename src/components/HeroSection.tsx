"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Top Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 hairline-b mb-12">
        <div className="meta-label">
          DOC. 001 // SPECIMEN 2026
        </div>
        <div className="meta-label flex items-center gap-4">
          <span>LOC: RANCHI, IN</span>
          <span>·</span>
          <span>DISCIPLINE: ECE & SOFTWARE</span>
        </div>
      </div>

      {/* Main 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column (8 cols) - Big confident typography */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="meta-label mb-4 text-[#6B6A66]">
            Full Stack Developer & Competitive Programmer
          </div>

          <h1 className="text-[#151514] mb-8 max-w-3xl">
            Software engineered with precision and clarity.
          </h1>

          <p className="text-[#6B6A66] text-lg md:text-xl max-w-[62ch] leading-relaxed mb-10">
            Undergraduate in Electronics and Communication Engineering at{" "}
            <span className="text-[#151514] font-medium">Birla Institute of Technology, Mesra</span>.
            Building high-throughput web systems, algorithmic solutions, and hardware-software architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              id="hero-work-btn"
              className="btn-primary"
            >
              <span>Explore Selected Work</span>
              <span className="arrow-nudge">→</span>
            </a>

            <a
              href="/resume.pdf"
              id="hero-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-4 h-4 text-[#6B6A66]" />
            </a>

            <a
              href="#contact"
              className="link-specimen text-sm font-medium ml-2"
            >
              Initiate Contact
            </a>
          </div>
        </div>

        {/* Right Column (4 cols) - Specimen Data Index */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-6">
          <div className="specimen-card-surface flex flex-col gap-6">
            <div className="flex justify-between items-center hairline-b pb-3">
              <span className="meta-label">INDEX DATA</span>
              <span className="font-mono text-xs text-[#151514]">REV. 2026.09</span>
            </div>

            <dl className="space-y-4 text-sm font-mono">
              <div className="flex justify-between items-baseline hairline-b pb-2">
                <dt className="text-[#6B6A66] text-xs uppercase">Institution</dt>
                <dd className="text-[#151514] font-medium text-right">BIT Mesra</dd>
              </div>

              <div className="flex justify-between items-baseline hairline-b pb-2">
                <dt className="text-[#6B6A66] text-xs uppercase">Major / Dept</dt>
                <dd className="text-[#151514] font-medium text-right">B.Tech ECE</dd>
              </div>

              <div className="flex justify-between items-baseline hairline-b pb-2">
                <dt className="text-[#6B6A66] text-xs uppercase">Cumulative GPA</dt>
                <dd className="text-[#151514] font-medium text-right">8.67 / 10.0 (4th Sem)</dd>
              </div>

              <div className="flex justify-between items-baseline hairline-b pb-2">
                <dt className="text-[#6B6A66] text-xs uppercase">DSA Solved</dt>
                <dd className="text-[#151514] font-medium text-right">750+ Problems</dd>
              </div>

              <div className="flex justify-between items-baseline">
                <dt className="text-[#6B6A66] text-xs uppercase">Role</dt>
                <dd className="text-[#151514] font-medium text-right">IETE Joint Secretary</dd>
              </div>
            </dl>

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#6B6A66] hairline-t">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#151514]" />
                Status: Available
              </span>
              <a
                href="https://github.com/AMISH754"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#151514] underline underline-offset-2"
              >
                github.com/AMISH754
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
