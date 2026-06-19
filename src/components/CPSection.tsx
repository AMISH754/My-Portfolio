"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { CometCard } from "./ui/CometCard";


const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function CPSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchStats = async () => {
      const stats = {
        codeforces: {
          rating: "980",
          maxRating: "980",
          rank: "Newbie",
          problemsSolved: "100+",
        },
        leetcode: {
          solved: "250+",
          easy: 100,
          medium: 120,
          hard: 30,
          rank: "Active Solver",
        },
        gfg: {
          solved: "62",
        },
        github: {
          repos: "15+",
          commits: "450+",
          contributions: "400+ this year",
        }
      };

      try {
        const cfRes = await fetch("https://codeforces.com/api/user.info?handles=amish_kr_dubey");
        const cfData = await cfRes.json();
        if (cfData.status === "OK" && cfData.result && cfData.result[0]) {
          const user = cfData.result[0];
          stats.codeforces.rating = String(user.rating || stats.codeforces.rating);
          stats.codeforces.maxRating = String(user.maxRating || stats.codeforces.maxRating);
          stats.codeforces.rank = user.rank ? (user.rank.charAt(0).toUpperCase() + user.rank.slice(1)) : stats.codeforces.rank;
        }

        // Fetch user status submissions to count unique questions solved
        const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=amish_kr_dubey");
        const cfStatusData = await cfStatusRes.json();
        if (cfStatusData.status === "OK" && Array.isArray(cfStatusData.result)) {
          const solvedProblems = new Set<string>();
          cfStatusData.result.forEach((sub: { verdict: string; problem?: { contestId: number; index: string } }) => {
            if (sub.verdict === "OK" && sub.problem) {
              const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
              solvedProblems.add(problemId);
            }
          });
          if (solvedProblems.size > 0) {
            stats.codeforces.problemsSolved = `${solvedProblems.size}`;
          }
        }
      } catch (e) {
        console.warn("Failed to fetch Codeforces stats:", e);
      }

      try {
        const lcRes = await fetch("https://leetcode-api-faisal.vercel.app/AMISH_KUMAR_DUBEY");
        const lcData = await lcRes.json();
        if (lcData && typeof lcData.totalSolved === "number") {
          stats.leetcode.solved = String(lcData.totalSolved);
          stats.leetcode.easy = lcData.easySolved ?? stats.leetcode.easy;
          stats.leetcode.medium = lcData.mediumSolved ?? stats.leetcode.medium;
          stats.leetcode.hard = lcData.hardSolved ?? stats.leetcode.hard;
        } else {
          const altRes = await fetch("https://alfa-leetcode-api.onrender.com/AMISH_KUMAR_DUBEY");
          const altData = await altRes.json();
          if (altData && typeof altData.totalSolved === "number") {
            stats.leetcode.solved = String(altData.totalSolved);
            stats.leetcode.easy = altData.easySolved ?? stats.leetcode.easy;
            stats.leetcode.medium = altData.mediumSolved ?? stats.leetcode.medium;
            stats.leetcode.hard = altData.hardSolved ?? stats.leetcode.hard;
          }
        }
      } catch (e) {
        console.warn("Failed to fetch LeetCode stats:", e);
      }

      try {
        const ghRes = await fetch("https://api.github.com/users/AMISH754");
        const ghData = await ghRes.json();
        if (ghData && typeof ghData.public_repos === "number") {
          stats.github.repos = String(ghData.public_repos);
        }

        // Fetch contributions scraper proxy to get exact counts
        const ghContribRes = await fetch("https://github-contributions-api.jogruber.de/v4/AMISH754");
        const ghContribData = await ghContribRes.json();
        if (ghContribData && ghContribData.total) {
          let totalContributions = 0;
          Object.values(ghContribData.total).forEach((val: unknown) => {
            totalContributions += Number(val || 0);
          });

          const currentYear = new Date().getFullYear();
          const currentYearContrib = ghContribData.total[String(currentYear)] || 0;

          stats.github.commits = String(totalContributions);
          stats.github.contributions = `${currentYearContrib} this year`;
        }
      } catch (e) {
        console.warn("Failed to fetch GitHub stats and contributions:", e);
      }

      try {
        const gfgRes = await fetch("https://gfgstatscard.vercel.app/kumardubpk5l?raw=true");
        const gfgData = await gfgRes.json();
        if (gfgData && typeof gfgData.total_problems_solved === "number") {
          stats.gfg.solved = String(gfgData.total_problems_solved);
        }
      } catch (e) {
        console.warn("Failed to fetch GFG stats:", e);
      }

      setData(stats);
      setLoading(false);
    };

    fetchStats();
  }, []);

  const profiles = [
    {
      platform: "Codeforces",
      handle: "amish_kr_dubey",
      rating: data?.codeforces?.rating ? `${data.codeforces.rating}` : "980",
      rank: data?.codeforces?.rank || "Newbie",
      colorClass: "text-slate-400 border-slate-500/20 bg-slate-950/10",
      stats: [
        { label: "Max Rating", value: data?.codeforces?.maxRating || "980" },
        { label: "Problems Solved", value: data?.codeforces?.problemsSolved || "100+" },
        { label: "Rank", value: data?.codeforces?.rank || "Newbie" },
      ],
      link: "https://codeforces.com/profile/amish_kr_dubey",
      accentColor: "#94a3b8",
    },
    {
      platform: "LeetCode",
      handle: "AMISH_KUMAR_DUBEY",
      rating: data?.leetcode?.solved ? `${data.leetcode.solved} Solved` : "250+ Solved",
      rank: data?.leetcode?.rank || "Active Solver",
      colorClass: "text-amber-500 border-amber-500/20 bg-amber-950/10",
      stats: [
        { label: "Problems Solved", value: data?.leetcode?.solved || "250+" },
        { label: "GFG Solved", value: data?.gfg?.solved || "62" },
        { label: "Rank", value: data?.leetcode?.rank || "Active Solver" },
      ],
      link: "https://leetcode.com/u/AMISH_KUMAR_DUBEY/",
      accentColor: "#f59e0b",
      details: {
        easy: data?.leetcode?.easy ?? 100,
        medium: data?.leetcode?.medium ?? 120,
        hard: data?.leetcode?.hard ?? 30,
      },
    },
    {
      platform: "GitHub",
      handle: "AMISH754",
      rating: data?.github?.commits ? `${data.github.commits} Commits` : "450+ Commits",
      rank: "Active Developer",
      colorClass: "text-purple-400 border-purple-500/20 bg-purple-950/10",
      stats: [
        { label: "Repositories", value: data?.github?.repos || "15+" },
        { label: "Total Contributions", value: data?.github?.contributions || "400+ this year" },
        { label: "Starred Repos", value: "5+" },
      ],
      link: "https://github.com/AMISH754",
      accentColor: "#c084fc",
    },
  ];

  return (
    <section id="cp" className="py-24 px-6 relative bg-transparent border-t border-slate-800/60">
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
            Competitive <span className="text-primary">Programming</span> & Open Source
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            Platform statistics and active coding ratings across major developer portals.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={profile.platform}
              className="h-full"
            >
              <CometCard
                duration={7}
                cometColor1={profile.accentColor}
                cometColor2="#ffffff"
                className="p-6 flex flex-col justify-between h-full relative"
              >
                {/* Subtle top color bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: profile.accentColor }}
                />

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      {profile.platform === "GitHub" ? (
                        <Github className="h-6 w-6 text-purple-400" />
                      ) : (
                        <Code className="h-6 w-6 text-primary" />
                      )}
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {profile.platform}
                      </h3>
                    </div>
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
                      title={`Visit ${profile.platform}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Handle
                    </div>
                    <div className="text-white font-bold text-sm">
                      @{profile.handle}
                    </div>
                  </div>

                  {/* Rating display badge */}
                  <div className="flex items-center gap-3 mb-6">
                    {loading ? (
                      <div className="h-9 w-28 bg-slate-800/80 animate-pulse rounded-lg" />
                    ) : (
                      <div className="text-3xl font-extrabold text-white tracking-tight">
                        {profile.rating}
                      </div>
                    )}

                    {loading ? (
                      <div className="h-5 w-20 bg-slate-800/80 animate-pulse rounded-full" />
                    ) : (
                      <span className={`inline-flex items-center border py-0.5 px-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${profile.colorClass}`}>
                        {profile.rank}
                      </span>
                    )}
                  </div>

                  {/* Stat grid */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-800/80 pt-6">
                    {profile.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                          {stat.label}
                        </div>
                        {loading ? (
                          <div className="h-4 w-12 bg-slate-800/50 animate-pulse rounded mx-auto mt-1" />
                        ) : (
                          <div className="text-white font-bold text-xs">
                            {stat.value}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* LeetCode custom difficulty visual if applicable */}
                {profile.details && (
                  <div className="mt-6 border-t border-slate-800/80 pt-4">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Problems breakdown
                    </div>
                    <div className="flex items-center justify-between text-xs gap-3">
                      <div className="flex flex-col items-center flex-1 bg-green-950/20 border border-green-900/20 p-2 rounded-xl">
                        {loading ? (
                          <div className="h-4 w-8 bg-slate-800/50 animate-pulse rounded mt-0.5" />
                        ) : (
                          <span className="text-green-400 font-bold">{profile.details.easy}</span>
                        )}
                        <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Easy</span>
                      </div>
                      <div className="flex flex-col items-center flex-1 bg-yellow-950/20 border border-yellow-900/20 p-2 rounded-xl">
                        {loading ? (
                          <div className="h-4 w-8 bg-slate-800/50 animate-pulse rounded mt-0.5" />
                        ) : (
                          <span className="text-yellow-500 font-bold">{profile.details.medium}</span>
                        )}
                        <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Medium</span>
                      </div>
                      <div className="flex flex-col items-center flex-1 bg-red-950/20 border border-red-900/20 p-2 rounded-xl">
                        {loading ? (
                          <div className="h-4 w-8 bg-slate-800/50 animate-pulse rounded mt-0.5" />
                        ) : (
                          <span className="text-red-400 font-bold">{profile.details.hard}</span>
                        )}
                        <span className="text-[9px] text-slate-400 mt-1 uppercase font-semibold">Hard</span>
                      </div>
                    </div>
                  </div>
                )}
              </CometCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
