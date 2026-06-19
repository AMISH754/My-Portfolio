"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Sparkles, Award } from "lucide-react";
import confetti from "canvas-confetti";
import { HoverEffectGrid, HoverEffectCard } from "@/components/ui/CardHoverEffect";

export default function AchievementsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const achievements = [
    {
      title: "Coding Achievements",
      metric: "400+ Problems Solved",
      description: "Solved 400+ Data Structures and Algorithms problems across platforms including LeetCode, CodeChef, and GeeksforGeeks.",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      tag: "Coding"
    },
    {
      title: "Codeforces Rating",
      metric: "980 Max Rating",
      description: "Achieved a maximum rating of 980 on Codeforces, demonstrating consistent participation in global competitive programming rounds.",
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      tag: "Competitive"
    },
    {
      title: "Value Education Cell",
      metric: "Web Developer",
      description: "Serving as a Web Developer at the Value Education Cell, contributing to the design and maintenance of digital platforms to support institutional initiatives.",
      icon: <Star className="h-6 w-6 text-primary" />,
      tag: "Leadership"
    },
    {
      title: "IETE Joint Secretary",
      metric: "Joint Secretary (2026 - 2027)",
      description: "Serving as the Joint Secretary of IETE (Institution of Electronics and Telecommunication Engineers) for the 2026-2027 tenure, coordinating the organization and execution of technical events, workshops, and seminars.",
      icon: <Award className="h-6 w-6 text-secondary" />,
      tag: "Leadership"
    }
  ];

  const triggerConfetti = (e: React.MouseEvent) => {
    // Generate burst of confetti centered on click location
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ["#216955", "#387766", "#b3e5d1", "#ffffff"]
    });
  };

  return (
    <section id="achievements" className="py-24 px-6 relative bg-transparent">
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
            Key <span className="text-primary">Achievements</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4">
            Click any milestone card to celebrate!
          </p>
        </div>

        {/* Grid Layout */}
        <HoverEffectGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-0">
          {achievements.map((item, idx) => (
            <HoverEffectCard
              key={item.title}
              idx={idx}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onClick={triggerConfetti}
              className="p-6 flex flex-row items-start gap-5 hover:translate-y-[-4px] border-slate-800 hover:border-primary/30 bg-navy-800/50"
            >
              <div className="p-4 bg-slate-900 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {item.icon}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {item.tag}
                  </span>
                </div>
                
                <div className="text-secondary font-extrabold text-sm mb-2 uppercase tracking-wider">
                  {item.metric}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </HoverEffectCard>
          ))}
        </HoverEffectGrid>

      </div>
    </section>
  );
}
