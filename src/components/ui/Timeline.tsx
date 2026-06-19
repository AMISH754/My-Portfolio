"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

interface TimelineProps {
  data: TimelineEntry[];
}

export default function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  // Scale the height of the active line from 0 to 100%
  const heightScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-10 px-4">
      {/* Vertical center/side line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2">
        <motion.div
          style={{ height: heightScale }}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent-foreground to-secondary origin-top"
        />
      </div>

      <div className="space-y-12">
        {data.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row relative items-start md:items-center ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Bullet indicator */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary z-10 shadow-lg shadow-primary/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
              </div>

              {/* Spacing placeholder for layout on desktop */}
              <div className="hidden md:block w-1/2" />

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
              >
                <div className="bg-navy-800 border border-slate-800 hover:border-slate-700/80 rounded-2xl shadow-xl p-6 transition-all duration-300">
                  <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border border-secondary/40 bg-secondary/5 text-secondary">
                      {item.date}
                    </span>
                  </div>

                  <ul className="list-disc list-inside mt-4 text-slate-300 text-sm space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
