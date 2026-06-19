"use client";

import React from "react";
import { motion } from "framer-motion";
import Timeline, { TimelineEntry } from "./ui/Timeline";

export default function EducationSection() {
  const educationData: TimelineEntry[] = [
    {
      title: "Birla Institute of Technology",
      subtitle: "Bachelor of Technology in Electronics and Communication Engineering; CGPA: 8.61",
      date: "2024 - 2028",
      details: [
        "Major: Electronics & Communication Engineering (ECE).",
        "B.Tech CGPA: 8.61.",
        "Located at Mesra, Jharkhand.",
        "Deepening knowledge in digital systems, logic design, and full-stack software development."
      ]
    },
    {
      title: "St Xavier's College",
      subtitle: "Class XII (JAC); Percentage: 91%",
      date: "2022 - 2023",
      details: [
        "Major Streams: Science (PCM).",
        "Passed with JAC Board honors at Ranchi, Jharkhand.",
        "Maintained strong analytical skills in physics, mathematics, and computing."
      ]
    },
    {
      title: "Bishop Hartmann Academy",
      subtitle: "Class X (ICSE); Percentage: 93%",
      date: "2020 - 2021",
      details: [
        "Completed ICSE board with high distinction at Ranchi, Jharkhand.",
        "Core focus in science, mathematics, and foundations of computer science."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-transparent border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            My <span className="text-secondary">Education</span> Timeline
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            Academic milestones and foundations that shaped my engineering path.
          </p>
        </div>

        {/* Dynamic Timeline Component */}
        <Timeline data={educationData} />

      </div>
    </section>
  );
}
