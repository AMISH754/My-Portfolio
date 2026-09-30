"use client";

import React from "react";

export default function EducationSection() {
  const academicLedger = [
    {
      period: "2024 — 2028",
      institution: "Birla Institute of Technology, Mesra",
      location: "Ranchi, Jharkhand",
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      score: "CGPA 8.67 / 10.0 (Till 4th Sem)",
      description: "Undergraduate curriculum covering digital logic design, signal processing, microprocessor systems, data structures, and computer network architecture.",
    },
    {
      period: "2022 — 2023",
      institution: "St. Xavier's College",
      location: "Ranchi, Jharkhand",
      degree: "Higher Secondary (Class XII · JAC Board)",
      score: "91.0%",
      description: "Primary concentration in Mathematics, Physics, and Chemistry with rigorous analytical training.",
    },
    {
      period: "2020 — 2021",
      institution: "Bishop Hartmann Academy",
      location: "Ranchi, Jharkhand",
      degree: "Secondary School Certificate (Class X · ICSE)",
      score: "93.0%",
      description: "Foundational coursework in science, mathematics, and introductory computing.",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">07</span>
          <h2 className="text-[#151514]">Academic Record</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          INSTITUTIONAL CURRICULA & QUALIFICATIONS
        </div>
      </div>

      {/* Chronological Specimen Table */}
      <div className="border border-[#DAD9D4] rounded-[2px] overflow-hidden bg-[#FAFAF8]">
        <div className="bg-[#F1F1EE] px-5 py-3.5 hairline-b flex justify-between items-center">
          <span className="meta-label text-[#151514]">CHRONOLOGICAL LEDGER</span>
          <span className="font-mono text-xs text-[#6B6A66]">2020 — PRESENT</span>
        </div>

        <div className="divide-y divide-[#DAD9D4]">
          {academicLedger.map((item, idx) => (
            <div
              key={item.institution}
              className="p-6 md:p-8 hover:bg-[#F1F1EE] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Left Column: Timeline & Location */}
              <div className="lg:col-span-4 flex flex-col gap-1">
                <span className="font-mono text-sm font-medium text-[#151514]">
                  {item.period}
                </span>
                <span className="font-sans font-medium text-base text-[#151514]">
                  {item.institution}
                </span>
                <span className="font-mono text-xs text-[#6B6A66]">
                  {item.location}
                </span>
              </div>

              {/* Right Column: Degree & Academic Score */}
              <div className="lg:col-span-8 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-sans font-medium text-base text-[#151514]">
                    {item.degree}
                  </h3>
                  <span className="specimen-tag text-xs font-mono font-medium text-[#151514] bg-[#F1F1EE] border-[#DAD9D4] shrink-0">
                    {item.score}
                  </span>
                </div>
                <p className="text-sm text-[#6B6A66] leading-relaxed max-w-[62ch]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
