"use client";

import React from "react";

export default function AchievementsSection() {
  const records = [
    {
      index: "01",
      title: "Joint Secretary · IETE Student Forum",
      tenure: "2026 — 2027",
      organization: "Institution of Electronics and Telecommunication Engineers (BIT Mesra)",
      details: "Elected as Joint Secretary to coordinate technical operations, hardware hackathons, and engineering seminars across university departments.",
    },
    {
      index: "02",
      title: "Web Systems Developer · Value Education Cell",
      tenure: "2024 — Present",
      organization: "BIT Mesra Institutional Body",
      details: "Engineered and maintained institutional portals and digital initiative platforms to support university outreach programs.",
    },
    {
      index: "03",
      title: "Algorithmic Problem Solving Record",
      tenure: "2024 — Present",
      organization: "LeetCode, Codeforces, GeeksforGeeks",
      details: "Completed 750+ verified algorithmic problems spanning dynamic programming, graph theory, trees, and asymptotic analysis.",
    },
    {
      index: "04",
      title: "Competitive Programming Division Standing",
      tenure: "2024 — Present",
      organization: "Codeforces Global Contests",
      details: "Active contestant in global rated contest rounds with peak rating of 980.",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">06</span>
          <h2 className="text-[#151514]">Recognitions & Leadership</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          INSTITUTIONAL ROLES & VERIFIED MILESTONES
        </div>
      </div>

      {/* Structured Ledger Table */}
      <div className="border border-[#DAD9D4] rounded-[2px] overflow-hidden bg-[#FAFAF8]">
        <div className="bg-[#F1F1EE] px-5 py-3.5 hairline-b flex justify-between items-center">
          <span className="meta-label text-[#151514]">OFFICIAL RECORD OF ENGAGEMENTS</span>
          <span className="font-mono text-xs text-[#6B6A66]">INDEX TABLE</span>
        </div>

        <div className="divide-y divide-[#DAD9D4]">
          {records.map((item) => (
            <div
              key={item.index}
              className="p-6 md:p-8 hover:bg-[#F1F1EE] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
            >
              {/* Left meta / index */}
              <div className="lg:col-span-3 flex flex-col gap-1">
                <span className="font-mono text-xs text-[#6B6A66]">
                  {item.index} // {item.tenure}
                </span>
                <span className="font-sans text-xs text-[#A3A29D]">
                  {item.organization}
                </span>
              </div>

              {/* Center Title & details */}
              <div className="lg:col-span-9">
                <h3 className="font-sans font-medium text-lg text-[#151514] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6A66] leading-relaxed max-w-[64ch]">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
