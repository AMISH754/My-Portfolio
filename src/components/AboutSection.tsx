"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Flame, BookOpen } from "lucide-react";

export default function AboutSection() {
  const [cfMaxRating, setCfMaxRating] = React.useState<string>("980");
  const [dsaProblems, setDsaProblems] = React.useState<string>("400+");

  React.useEffect(() => {
    const fetchAboutStats = async () => {
      let cfSolved = 100;
      let lcSolved = 250;

      try {
        const cfRes = await fetch("https://codeforces.com/api/user.info?handles=amish_kr_dubey");
        const cfData = await cfRes.json();
        if (cfData.status === "OK" && cfData.result && cfData.result[0]) {
          const user = cfData.result[0];
          if (user.maxRating) {
            setCfMaxRating(String(user.maxRating));
          }
        }
      } catch (e) {
        console.warn("Failed to fetch CF max rating in About:", e);
      }

      try {
        const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=amish_kr_dubey");
        const cfStatusData = await cfStatusRes.json();
        if (cfStatusData.status === "OK" && Array.isArray(cfStatusData.result)) {
          const solved = new Set();
          cfStatusData.result.forEach((sub: any) => {
            if (sub.verdict === "OK" && sub.problem) {
              solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
            }
          });
          if (solved.size > 0) {
            cfSolved = solved.size;
          }
        }
      } catch (e) { }

      try {
        const lcRes = await fetch("https://leetcode-api-faisal.vercel.app/AMISH_KUMAR_DUBEY");
        const lcData = await lcRes.json();
        if (lcData && typeof lcData.totalSolved === "number") {
          lcSolved = lcData.totalSolved;
        } else {
          const altRes = await fetch("https://alfa-leetcode-api.onrender.com/AMISH_KUMAR_DUBEY");
          const altData = await altRes.json();
          if (altData && typeof altData.totalSolved === "number") {
            lcSolved = altData.totalSolved;
          }
        }
      } catch (e) { }

      let gfgSolved = 62;
      try {
        const gfgRes = await fetch("https://gfgstatscard.vercel.app/kumardubpk5l?raw=true");
        const gfgData = await gfgRes.json();
        if (gfgData && typeof gfgData.total_problems_solved === "number") {
          gfgSolved = gfgData.total_problems_solved;
        }
      } catch (e) {
        console.warn("Failed to fetch GFG solved stats in About:", e);
      }

      const totalDSA = cfSolved + lcSolved + gfgSolved;
      setDsaProblems(`${totalDSA}+`);
    };

    fetchAboutStats();
  }, []);

  const stats = [
    { label: "B.Tech CGPA", value: "8.61", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
    { label: "DSA Problems", value: dsaProblems, icon: <Code className="h-6 w-6 text-secondary" /> },
    { label: "Codeforces Max", value: cfMaxRating, icon: <Flame className="h-6 w-6 text-accent-foreground" /> },
    { label: "Projects Built", value: "5+", icon: <BookOpen className="h-6 w-6 text-secondary" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-transparent border-t border-slate-800/60">
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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Block - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                I am an Electronics and Communication Engineering undergraduate at{" "}
                <strong className="text-white">Birla Institute of Technology, Mesra</strong>, expected to graduate in 2028.
                My academic foundation blends hardware principles with advanced software concepts.
              </p>
              <p>
                My passion lies in <strong className="text-primary">Full-Stack Software Engineering</strong> and{" "}
                <strong className="text-secondary">Competitive Programming</strong>. I love solving algorithmic roadblocks
                and building scalable, high-performance web systems. I am highly comfortable with JavaScript/TypeScript, React/Next.js stack, and backend infrastructures.
              </p>
              <p>
                Whether optimization of database schemas or building pixel-perfect responsive layouts, I value code quality, clean architecture, and modern UX patterns.
              </p>
            </div>

            {/* Achievements Snippet */}
            <div className="mt-8 p-6 rounded-2xl bg-navy-800/50 border border-slate-800/80">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3">Core Philosophy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Writing clean code isn't just about making machines do what we want; it's about explaining to other developers what we intend for the machine to do."
              </p>
            </div>
          </motion.div>

          {/* Right Block - Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="card bg-navy-800/80 border border-slate-800 hover:border-slate-700/80 transition-all p-6 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] duration-300"
              >
                <div className="p-3 bg-slate-900 rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
