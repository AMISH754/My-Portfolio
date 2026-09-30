"use client";

import React from "react";

export default function AboutSection() {
  const metrics = [
    { label: "B.Tech CGPA", value: "8.67 / 10", note: "Birla Institute of Technology, Mesra (Till 4th Sem)" },
    { label: "Algorithmic Problems", value: "750+", note: "LeetCode, Codeforces, and GeeksforGeeks" },
    { label: "Codeforces Max Rating", value: "1134", note: "Division 2 / Division 3 active participation" },
    { label: "Institutional Office", value: "Joint Secretary", note: "IETE Student Forum, BIT Mesra (2026–2027)" },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">01</span>
          <h2 className="text-[#151514]">Biography & Specifications</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          ACADEMIC & ENGINEERING PROFILE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Text */}
        <div className="lg:col-span-7 space-y-6 text-[#151514] text-base md:text-lg leading-relaxed max-w-[64ch]">
          <p>
            I am an undergraduate student in Electronics and Communication Engineering at{" "}
            <strong>Birla Institute of Technology, Mesra</strong>. My technical interest centers
            on the intersection of full-stack web software, computational algorithms, and digital system design.
          </p>

          <p className="text-[#6B6A66]">
            In software development, I prioritize clean architectural patterns, type safety, deterministic state management,
            and responsive frontends using TypeScript, React, Next.js, and Node.js.
          </p>

          <p className="text-[#6B6A66]">
            Parallel to product engineering, I routinely solve data structures and algorithm challenges on Codeforces and LeetCode,
            cultivating rigorous problem-solving discipline and asymptotic optimization skills.
          </p>

          <div className="pt-6 hairline-t">
            <div className="meta-label mb-2 text-[#6B6A66]">DESIGN ETHOS</div>
            <p className="text-sm font-mono text-[#6B6A66] leading-relaxed">
              &ldquo;Good software, like good typography, is quiet, intentional, and robust. Every line of code and every visual element must have a clear purpose.&rdquo;
            </p>
          </div>
        </div>

        {/* Structured Specimen Table */}
        <div className="lg:col-span-5">
          <div className="border border-[#DAD9D4] rounded-[2px] overflow-hidden">
            <div className="bg-[#F1F1EE] px-5 py-3 hairline-b flex justify-between items-center">
              <span className="meta-label text-[#151514]">VERIFIED METRICS</span>
              <span className="font-mono text-[11px] text-[#6B6A66]">INDEX TABLE</span>
            </div>

            <div className="divide-y divide-[#DAD9D4]">
              {metrics.map((item, idx) => (
                <div
                  key={item.label}
                  className="p-5 hover:bg-[#F1F1EE] transition-colors"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-mono text-xs text-[#6B6A66] uppercase tracking-wider">
                      {`0${idx + 1}. ${item.label}`}
                    </span>
                    <span className="font-mono text-sm font-medium text-[#151514]">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6A66] mt-1 font-sans">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
