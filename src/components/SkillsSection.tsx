"use client";

import React from "react";

interface SkillCategory {
  title: string;
  code: string;
  items: { name: string; level: string; note: string }[];
}

export default function SkillsSection() {
  const skillIndex: SkillCategory[] = [
    {
      title: "Core Languages & Systems",
      code: "CAT-01",
      items: [
        { name: "C / C++", level: "Proficient", note: "DSA, algorithmic problem solving & low-level memory" },
        { name: "TypeScript / JavaScript", level: "Proficient", note: "Modern ES6+, strict typing, async architectures" },
        { name: "SQL", level: "Working", note: "Relational modeling, indexing, ACID transactions" },
        { name: "HTML5 & CSS3", level: "Proficient", note: "Semantic layout, custom design tokens, responsive CSS" },
      ],
    },
    {
      title: "Frontend Engineering",
      code: "CAT-02",
      items: [
        { name: "React.js", level: "Proficient", note: "Hooks, component composition, state management" },
        { name: "Next.js (App Router)", level: "Proficient", note: "Server-side rendering, API routes, SEO architecture" },
        { name: "Tailwind CSS", level: "Proficient", note: "Utility composition, tokenized responsive styling" },
        { name: "Vanilla CSS & Motion", level: "Proficient", note: "Precise micro-interactions, CSS variables, layout grids" },
      ],
    },
    {
      title: "Backend & Databases",
      code: "CAT-03",
      items: [
        { name: "Node.js & Express.js", level: "Proficient", note: "RESTful API services, middleware, routing" },
        { name: "PostgreSQL", level: "Working", note: "Structured relational queries, schema constraints" },
        { name: "MongoDB & Mongoose", level: "Working", note: "Document store schema modeling and aggregation" },
        { name: "Firebase Suite", level: "Proficient", note: "Firestore real-time sync, Auth, Cloud Storage" },
      ],
    },
    {
      title: "Toolchain & Developer Workflow",
      code: "CAT-04",
      items: [
        { name: "Git & GitHub", level: "Proficient", note: "Version control, branching strategy, open source pull requests" },
        { name: "Postman", level: "Proficient", note: "API contract testing, endpoint diagnostics" },
        { name: "Cloudinary API", level: "Working", note: "Asset pipeline, transformations, media storage" },
        { name: "VS Code & Terminal", level: "Proficient", note: "CLI tooling, debugging, system administration" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">02</span>
          <h2 className="text-[#151514]">Technical Index</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          CATEGORIZED INVENTORY · 16 TECHNOLOGIES
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillIndex.map((category) => (
          <div
            key={category.code}
            className="border border-[#DAD9D4] rounded-[2px] bg-[#FAFAF8] overflow-hidden"
          >
            {/* Category Header */}
            <div className="bg-[#F1F1EE] px-5 py-3.5 hairline-b flex justify-between items-center">
              <h3 className="font-sans text-sm font-medium text-[#151514]">
                {category.title}
              </h3>
              <span className="meta-label text-[#6B6A66]">{category.code}</span>
            </div>

            {/* List of skills in table rows */}
            <div className="divide-y divide-[#DAD9D4]">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="px-5 py-4 hover:bg-[#F1F1EE] transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                >
                  <div className="flex-1">
                    <span className="font-sans font-medium text-[#151514] text-sm">
                      {skill.name}
                    </span>
                    <p className="text-xs text-[#6B6A66] mt-0.5 font-sans">
                      {skill.note}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="specimen-tag text-[10px]">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
