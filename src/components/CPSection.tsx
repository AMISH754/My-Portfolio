"use client";

import React, { useEffect, useState } from "react";
import { Trophy, Code2, Star, Users } from "lucide-react";

// ─── GitHub SVG icon ───────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ─── Codeforces SVG icon ───────────────────────────────────────────────────
const CodeforcesIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
  </svg>
);

// ─── LeetCode SVG icon ─────────────────────────────────────────────────────
const LeetCodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

interface LeetCodeData {
  solved: number;
  ranking: number;
  easy: number;
  medium: number;
  hard: number;
  loading: boolean;
  error: boolean;
}

interface CFData {
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contribution: number;
  loading: boolean;
  error: boolean;
}

interface GHData {
  repos: number;
  followers: number;
  stars: number;
  contributions: number;
  loading: boolean;
  error: boolean;
}

const ACHIEVEMENTS = [
  {
    category: "DSA Problem Solving",
    title:
      "Solved 550+ Data Structures and Algorithms problems across platforms including LeetCode, CodeChef, and GeeksforGeeks.",
  },
  {
    category: "Codeforces Rating",
    title:
      "Achieved a max rating of 1126 on Codeforces through regular participation in global competitive programming contests.",
  },
  {
    category: "IETE Leadership",
    title:
      "Serving as Joint Secretary of IETE (Institution of Electronics and Telecommunication Engineers), leading coordination of technical events, workshops, and seminars.",
  },
  {
    category: "Value Education Cell",
    title:
      "Previously served as Web Developer at the Value Education Cell (BIT Mesra), designing and maintaining digital platforms for institutional initiatives.",
  },
];

export default function CPSection() {
  const [lc, setLc] = useState<LeetCodeData>({
    solved: 0,
    ranking: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    loading: true,
    error: false,
  });
  const [cf, setCf] = useState<CFData>({
    rating: 0,
    maxRating: 0,
    rank: "",
    maxRank: "",
    contribution: 0,
    loading: true,
    error: false,
  });
  const [gh, setGh] = useState<GHData>({
    repos: 0,
    followers: 0,
    stars: 0,
    contributions: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    // ── Fetch Codeforces data ──────────────────────────────────────────────
    fetch("https://codeforces.com/api/user.info?handles=amish_kr_dubey")
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "OK" && data.result?.[0]) {
          const u = data.result[0];
          setCf({
            rating: u.rating ?? 0,
            maxRating: u.maxRating ?? 0,
            rank: u.rank ?? "newbie",
            maxRank: u.maxRank ?? "newbie",
            contribution: u.contribution ?? 0,
            loading: false,
            error: false,
          });
        } else {
          setCf((p) => ({ ...p, loading: false, error: true }));
        }
      })
      .catch(() => setCf((p) => ({ ...p, loading: false, error: true })));

    // ── Fetch GitHub data ──────────────────────────────────────────────────
    Promise.all([
      fetch("https://api.github.com/users/AMISH754").then((r) => r.json()),
      fetch("https://api.github.com/users/AMISH754/repos?per_page=100").then(
        (r) => r.json()
      ),
    ])
      .then(([user, repos]) => {
        const stars = Array.isArray(repos)
          ? repos.reduce(
              (acc: number, r: { stargazers_count?: number }) =>
                acc + (r.stargazers_count ?? 0),
              0
            )
          : 0;
        setGh({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars,
          contributions: 0,
          loading: false,
          error: false,
        });
      })
      .catch(() => setGh((p) => ({ ...p, loading: false, error: true })));

    // ── Fetch LeetCode via alfa-leetcode-api (working, open-source) ───────────
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/AMISH_KUMAR_DUBEY")
      .then((r) => r.json())
      .then((data) => {
        // Stats are under matchedUserStats.acSubmissionNum
        const statsArr: { difficulty: string; count: number }[] =
          data?.matchedUserStats?.acSubmissionNum ?? [];
        const get = (d: string) =>
          statsArr.find((s) => s.difficulty === d)?.count ?? 0;

        const totalSolved = get("All");
        if (totalSolved > 0) {
          setLc({
            solved: totalSolved,
            ranking: data?.ranking ?? 0,
            easy: get("Easy"),
            medium: get("Medium"),
            hard: get("Hard"),
            loading: false,
            error: false,
          });
        } else {
          setLc((p) => ({ ...p, loading: false, error: true }));
        }
      })
      .catch(() => setLc((p) => ({ ...p, loading: false, error: true })));
  }, []);

  const Spin = () => (
    <span className="inline-block w-4 h-4 border-2 border-[#e0115f] border-t-transparent rounded-full animate-spin" />
  );

  return (
    <section id="contests">
      <div className="wrap">
        <div className="head rv">
          <div className="label">04 / competitive programming</div>
          <h2 className="h2">Battle-Tested on the Leaderboard</h2>
          <p>
            Real-time statistics fetched live from LeetCode, Codeforces, and
            GitHub APIs — reflecting my current standing.
          </p>
        </div>

        {/* ── Live stat cards ───────────────────────────────────────────── */}
        <div className="stats">
          {/* LeetCode card */}
          <a
            href="https://leetcode.com/u/AMISH_KUMAR_DUBEY/"
            target="_blank"
            rel="noopener noreferrer"
            className="stat rv-s block no-underline"
            data-d={0}
          >
            <div className="site font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <LeetCodeIcon />
                LeetCode
              </span>
              <span className="text-[#f2477f]">→</span>
            </div>
            <div className="big">
              {lc.loading ? <Spin /> : lc.error ? "N/A" : lc.solved}
            </div>
            <div className="small">Problems Solved</div>
            {!lc.loading && !lc.error && (
              <div className="flex gap-3 mt-2 text-xs font-mono">
                <span className="text-green-400">E:{lc.easy}</span>
                <span className="text-yellow-400">M:{lc.medium}</span>
                <span className="text-red-400">H:{lc.hard}</span>
              </div>
            )}
            {!lc.loading && !lc.error && lc.ranking > 0 && (
              <div className="text-[11px] text-[#8f8f9c] font-mono mt-1">
                Global Rank #{lc.ranking.toLocaleString()}
              </div>
            )}
            <div className="lnk text-xs uppercase font-mono mt-2 tracking-wider flex items-center gap-1">
              <span>View profile</span>
              <span className="ar">→</span>
            </div>
          </a>

          {/* Codeforces card */}
          <a
            href="https://codeforces.com/profile/amish_kr_dubey"
            target="_blank"
            rel="noopener noreferrer"
            className="stat rv-s block no-underline"
            data-d={120}
          >
            <div className="site font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CodeforcesIcon />
                Codeforces
              </span>
              <span className="text-[#f2477f]">→</span>
            </div>
            <div className="big">
              {cf.loading ? <Spin /> : cf.error ? "1126" : cf.maxRating}
            </div>
            <div className="small">Max Rating</div>
            {!cf.loading && !cf.error && (
              <>
                <div className="text-[12px] text-[#b9b9c4] font-mono mt-1 capitalize">
                  {cf.maxRank} (peak)
                </div>
                <div className="text-[11px] text-[#8f8f9c] font-mono">
                  Current: {cf.rating} · {cf.rank}
                </div>
              </>
            )}
            {(cf.loading || cf.error) && (
              <div className="text-[12px] text-[#b9b9c4] font-mono mt-1">
                Max Rating Achieved
              </div>
            )}
            <div className="lnk text-xs uppercase font-mono mt-2 tracking-wider flex items-center gap-1">
              <span>View profile</span>
              <span className="ar">→</span>
            </div>
          </a>

          {/* GitHub card */}
          <a
            href="https://github.com/AMISH754"
            target="_blank"
            rel="noopener noreferrer"
            className="stat rv-s block no-underline"
            data-d={240}
          >
            <div className="site font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <GithubIcon />
                GitHub
              </span>
              <span className="text-[#f2477f]">→</span>
            </div>
            <div className="big">
              {gh.loading ? <Spin /> : gh.error ? "AMISH754" : gh.repos}
            </div>
            <div className="small">
              {gh.loading || gh.error ? "Open Source Codebases" : "Public Repos"}
            </div>
            {!gh.loading && !gh.error && (
              <div className="flex gap-4 mt-2 text-xs font-mono text-[#b9b9c4]">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {gh.stars}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-[#e0115f]" />
                  {gh.followers}
                </span>
              </div>
            )}
            <div className="lnk text-xs uppercase font-mono mt-2 tracking-wider flex items-center gap-1">
              <span>View profile</span>
              <span className="ar">→</span>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href="https://www.linkedin.com/in/amish-kumar-dubey/"
            target="_blank"
            rel="noopener noreferrer"
            className="stat rv-s block no-underline"
            data-d={360}
          >
            <div className="site font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </span>
              <span className="text-[#f2477f]">→</span>
            </div>
            <div className="big">Open</div>
            <div className="small">Professional Network</div>
            <div className="text-[12px] text-[#b9b9c4] font-mono mt-1">
              amish-kumar-dubey
            </div>
            <div className="lnk text-xs uppercase font-mono mt-2 tracking-wider flex items-center gap-1">
              <span>View profile</span>
              <span className="ar">→</span>
            </div>
          </a>
        </div>

        {/* ── Achievements table ────────────────────────────────────────── */}
        <div className="hl rv">
          <h3>Coding Achievements &amp; Leadership Ledger</h3>
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className={`hrow ${idx % 2 === 0 ? "rv-l" : "rv-r"}`}
            >
              <b>[{item.category}]</b>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
