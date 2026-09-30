"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface CPData {
  codeforces: {
    rating: string;
    maxRating: string;
    rank: string;
    problemsSolved: string;
  };
  leetcode: {
    solved: string;
    easy: number;
    medium: number;
    hard: number;
    rank: string;
  };
  gfg: {
    solved: string;
  };
  github: {
    repos: string;
    commits: string;
    contributions: string;
  };
}

export default function CPSection() {
  const [data, setData] = useState<CPData>({
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
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const stats = { ...data };

      try {
        const cfRes = await fetch("https://codeforces.com/api/user.info?handles=amish_kr_dubey");
        const cfData = await cfRes.json();
        if (cfData.status === "OK" && cfData.result?.[0]) {
          const user = cfData.result[0];
          stats.codeforces.rating = String(user.rating || stats.codeforces.rating);
          stats.codeforces.maxRating = String(user.maxRating || stats.codeforces.maxRating);
          if (user.rank) {
            stats.codeforces.rank = user.rank.charAt(0).toUpperCase() + user.rank.slice(1);
          }
        }

        const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=amish_kr_dubey");
        const cfStatusData = await cfStatusRes.json();
        if (cfStatusData.status === "OK" && Array.isArray(cfStatusData.result)) {
          const solvedProblems = new Set<string>();
          cfStatusData.result.forEach((sub: { verdict: string; problem?: { contestId: number; index: string } }) => {
            if (sub.verdict === "OK" && sub.problem) {
              solvedProblems.add(`${sub.problem.contestId}-${sub.problem.index}`);
            }
          });
          if (solvedProblems.size > 0) {
            stats.codeforces.problemsSolved = `${solvedProblems.size}`;
          }
        }
      } catch {}

      try {
        const lcRes = await fetch("https://leetcode-api-faisal.vercel.app/AMISH_KUMAR_DUBEY");
        const lcData = await lcRes.json();
        if (lcData?.totalSolved) {
          stats.leetcode.solved = String(lcData.totalSolved);
          stats.leetcode.easy = lcData.easySolved ?? stats.leetcode.easy;
          stats.leetcode.medium = lcData.mediumSolved ?? stats.leetcode.medium;
          stats.leetcode.hard = lcData.hardSolved ?? stats.leetcode.hard;
        }
      } catch {}

      try {
        const ghRes = await fetch("https://api.github.com/users/AMISH754");
        const ghData = await ghRes.json();
        if (typeof ghData?.public_repos === "number") {
          stats.github.repos = String(ghData.public_repos);
        }

        const ghContribRes = await fetch("https://github-contributions-api.jogruber.de/v4/AMISH754");
        const ghContribData = await ghContribRes.json();
        if (ghContribData?.total) {
          let totalContributions = 0;
          Object.values(ghContribData.total).forEach((val) => {
            totalContributions += Number(val || 0);
          });
          const currentYear = new Date().getFullYear();
          const currentYearContrib = ghContribData.total[String(currentYear)] || 0;
          stats.github.commits = String(totalContributions);
          stats.github.contributions = `${currentYearContrib} in ${currentYear}`;
        }
      } catch {}

      try {
        const gfgRes = await fetch("https://gfgstatscard.vercel.app/kumardubpk5l?raw=true");
        const gfgData = await gfgRes.json();
        if (typeof gfgData?.total_problems_solved === "number") {
          stats.gfg.solved = String(gfgData.total_problems_solved);
        }
      } catch {}

      setData(stats);
      setLoading(false);
    };

    fetchStats();
  }, []);

  const benchmarks = [
    {
      code: "BENCHMARK 01",
      platform: "Codeforces",
      handle: "amish_kr_dubey",
      primaryMetric: data.codeforces.rating,
      metricLabel: "Active Rating",
      url: "https://codeforces.com/profile/amish_kr_dubey",
      metrics: [
        { label: "Max Rating", val: data.codeforces.maxRating },
        { label: "Problems Solved", val: data.codeforces.problemsSolved },
        { label: "Rank Tier", val: data.codeforces.rank },
      ],
    },
    {
      code: "BENCHMARK 02",
      platform: "LeetCode",
      handle: "AMISH_KUMAR_DUBEY",
      primaryMetric: data.leetcode.solved,
      metricLabel: "Problems Solved",
      url: "https://leetcode.com/u/AMISH_KUMAR_DUBEY/",
      metrics: [
        { label: "Easy", val: String(data.leetcode.easy) },
        { label: "Medium", val: String(data.leetcode.medium) },
        { label: "Hard", val: String(data.leetcode.hard) },
      ],
    },
    {
      code: "BENCHMARK 03",
      platform: "GitHub",
      handle: "AMISH754",
      primaryMetric: data.github.commits,
      metricLabel: "Recorded Commits",
      url: "https://github.com/AMISH754",
      metrics: [
        { label: "Repositories", val: data.github.repos },
        { label: "Contributions", val: data.github.contributions },
        { label: "Active Track", val: "TypeScript / Next" },
      ],
    },
  ];

  return (
    <section
      id="cp"
      className="specimen-dark-section py-24 md:py-32 px-6 lg:px-12 w-full transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16 hairline-b pb-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A3A29D]">03</span>
            <h2 className="text-[#FAFAF8] font-medium">Algorithmic Benchmarks</h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#A3A29D]">
            LIVE API TELEMETRY · GLOBAL PORTALS
          </div>
        </div>

        {/* 3-Column Specimen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benchmarks.map((b) => (
            <div
              key={b.platform}
              className="border border-[#262624] bg-[#121211] p-6 sm:p-8 flex flex-col justify-between hover:border-[#FAFAF8] transition-colors rounded-[2px]"
            >
              <div>
                <div className="flex justify-between items-baseline mb-6 hairline-b pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#A3A29D]">
                    {b.code}
                  </span>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[#A3A29D] hover:text-[#FAFAF8] transition-colors"
                  >
                    <span>{b.platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mb-8">
                  <div className="font-mono text-xs text-[#A3A29D] mb-1 uppercase tracking-wider">
                    @{b.handle}
                  </div>
                  <div className="text-4xl sm:text-5xl font-sans font-medium text-[#FAFAF8] tracking-tight">
                    {loading ? "..." : b.primaryMetric}
                  </div>
                  <div className="font-mono text-[11px] text-[#A3A29D] mt-1 uppercase tracking-wider">
                    {b.metricLabel}
                  </div>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="border-t border-[#262624] pt-6 grid grid-cols-3 gap-2">
                {b.metrics.map((m) => (
                  <div key={m.label} className="text-left">
                    <div className="font-mono text-[10px] text-[#A3A29D] uppercase tracking-wider truncate mb-1">
                      {m.label}
                    </div>
                    <div className="font-mono text-xs font-medium text-[#FAFAF8] truncate">
                      {loading ? "—" : m.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
