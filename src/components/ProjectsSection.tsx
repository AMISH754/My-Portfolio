"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

interface Project {
  id: string;
  caseNum: string;
  year: string;
  title: string;
  category: "Web Application" | "Full Stack System" | "UI Architecture";
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "github">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repos, setRepos] = useState<any[]>([]);
  const [reposLoading, setReposLoading] = useState(false);

  useEffect(() => {
    if (activeTab === "github" && repos.length === 0) {
      setTimeout(() => {
        setReposLoading(true);
      }, 0);
      fetch("https://api.github.com/users/AMISH754/repos?sort=updated&per_page=6")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            const sorted = [...data].sort((a, b) => b.stargazers_count - a.stargazers_count);
            setRepos(sorted);
          }
          setReposLoading(false);
        })
        .catch(() => {
          setReposLoading(false);
        });
    }
  }, [activeTab, repos.length]);

  const projects: Project[] = [
    {
      id: "hearttalk",
      caseNum: "CASE 01",
      year: "2026",
      title: "Heart Talk",
      category: "Full Stack System",
      description: "A real-time messaging application engineered with React, Firebase Firestore synchronization, and Cloudinary media pipeline.",
      image: "/hearttalk.png",
      tech: ["React", "Vite", "Firebase Auth", "Firestore", "Cloudinary", "Vanilla CSS"],
      liveLink: "https://chat-app-59c85.web.app",
      githubLink: "https://github.com/AMISH754/HeartTalk",
      features: [
        "Real-time event-driven messaging layer with instant sync across active sessions.",
        "Firebase Authentication supporting multi-factor session persistence and password recovery.",
        "Direct-to-cloud asset delivery pipeline powered by Cloudinary API.",
        "Real-time presence tracking with deterministic state updates.",
        "Pure tokenized CSS layout ensuring responsive execution without heavy utility frameworks."
      ]
    },
    {
      id: "nexjyoti",
      caseNum: "CASE 02",
      year: "2025",
      title: "NexJyoti Foundation",
      category: "Web Application",
      description: "A single-page foundation portal built for high reliability, fast compilation with Vite, and transparent initiative dissemination.",
      image: "/nexjyoti.png",
      tech: ["React 18", "React Router 6", "Vite", "Firebase Hosting"],
      liveLink: "https://nexjyoti.org",
      githubLink: "https://github.com/AMISH754/NexJyoti",
      features: [
        "Client-side routing architecture with optimized asset splitting and sub-second initial paint.",
        "Standardized component tokens ensuring uniform spacing, typography, and contrast across all viewports.",
        "Integrated institutional initiative verification feeds and secure donation pathways.",
        "Continuous deployment and edge caching configured on Firebase Hosting."
      ]
    },
    {
      id: "bookpulse",
      caseNum: "CASE 03",
      year: "2025",
      title: "BookPulse",
      category: "Full Stack System",
      description: "A relational discovery and inventory platform powered by Node.js, Express.js REST endpoints, and PostgreSQL.",
      image: "/bookpulse.png",
      tech: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
      liveLink: "https://book-pulse-project.onrender.com/",
      githubLink: "https://github.com/AMISH754/Book_pulse-project",
      features: [
        "Relational database schema with optimized primary/foreign key constraints and SQL queries.",
        "External metadata enrichment integrating Open Library APIs for live book details.",
        "Modular MVC backend architecture with strict input validation and parameterized queries."
      ]
    },
    {
      id: "vortexcast",
      caseNum: "CASE 04",
      year: "2025",
      title: "VortexCast Weather System",
      category: "UI Architecture",
      description: "A high-precision meteorological client with GPS coordinates tracking, hourly delta charts, and dynamic state-driven layouts.",
      image: "/vortexcast.png",
      tech: ["React 19", "Vite", "OpenWeather API", "Axios"],
      liveLink: "https://weather-app-opal-eight-42.vercel.app",
      githubLink: "https://github.com/AMISH754/Weather-App",
      features: [
        "Geolocation-driven coordinate query pipeline with fallback to historical local storage cache.",
        "5-day predictive interval model with 3-hour granular timeline breakdown.",
        "Direct SVG vector rendering mapped dynamically to meteorological weather codes."
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
        <div className="flex items-baseline gap-4">
          <span className="meta-label">05</span>
          <h2 className="text-[#151514]">Selected Works</h2>
        </div>
        <div className="meta-label text-[#6B6A66]">
          CASE STUDIES & CODEBASE ARCHIVES
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-6 mb-12 hairline-b pb-4">
        <button
          onClick={() => setActiveTab("projects")}
          className={`font-mono text-xs uppercase tracking-wider transition-colors pb-2 cursor-pointer ${
            activeTab === "projects"
              ? "text-[#151514] font-semibold border-b-2 border-[#151514]"
              : "text-[#6B6A66] hover:text-[#151514]"
          }`}
        >
          Featured Case Studies ({projects.length})
        </button>
        <button
          onClick={() => setActiveTab("github")}
          className={`font-mono text-xs uppercase tracking-wider transition-colors pb-2 cursor-pointer ${
            activeTab === "github"
              ? "text-[#151514] font-semibold border-b-2 border-[#151514]"
              : "text-[#6B6A66] hover:text-[#151514]"
          }`}
        >
          Public Repositories Archive
        </button>
      </div>

      {activeTab === "projects" ? (
        /* Case Studies Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <article
              key={item.id}
              className="specimen-card bg-[#FAFAF8] flex flex-col justify-between"
            >
              <div>
                {/* Top Meta Line */}
                <div className="flex justify-between items-baseline hairline-b pb-3 mb-5">
                  <span className="meta-label text-[#6B6A66]">
                    {item.caseNum} · {item.year}
                  </span>
                  <span className="specimen-tag text-[10px]">
                    {item.category}
                  </span>
                </div>

                {/* Grayscale/Muted Image Preview */}
                <div className="relative h-56 w-full border border-[#DAD9D4] rounded-[2px] overflow-hidden mb-6 bg-[#F1F1EE]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Heading & description */}
                <h3 className="font-sans font-medium text-xl text-[#151514] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6A66] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-[#6B6A66] border border-[#DAD9D4] px-2 py-0.5 rounded-[2px] bg-[#F1F1EE]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between hairline-t pt-4 text-xs font-mono">
                <button
                  onClick={() => setSelectedProject(item)}
                  className="link-specimen text-[#151514] font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Review Case Data</span>
                  <span className="arrow-nudge">→</span>
                </button>

                <div className="flex items-center gap-4">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6A66] hover:text-[#151514] inline-flex items-center gap-1"
                  >
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6A66] hover:text-[#151514] inline-flex items-center gap-1"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* GitHub Repositories Table */
        <div className="border border-[#DAD9D4] rounded-[2px] overflow-hidden bg-[#FAFAF8]">
          <div className="bg-[#F1F1EE] px-5 py-3 hairline-b flex justify-between items-center">
            <span className="meta-label text-[#151514]">PUBLIC REPOSITORIES</span>
            <span className="font-mono text-xs text-[#6B6A66]">GITHUB API</span>
          </div>

          <div className="divide-y divide-[#DAD9D4]">
            {reposLoading ? (
              <div className="p-8 text-center font-mono text-xs text-[#6B6A66]">
                Querying GitHub repository endpoints...
              </div>
            ) : (
              repos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-5 hover:bg-[#F1F1EE] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-1">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm font-medium text-[#151514] hover:underline"
                      >
                        {repo.name}
                      </a>
                      {repo.language && (
                        <span className="specimen-tag text-[10px]">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B6A66]">
                      {repo.description || "Public open-source repository on GitHub."}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 font-mono text-xs text-[#6B6A66] shrink-0">
                    <span>★ {repo.stargazers_count}</span>
                    <span>⑂ {repo.forks_count}</span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-specimen text-[#151514] inline-flex items-center gap-1"
                    >
                      <span>Codebase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#151514]/60 backdrop-blur-none">
          <div className="relative w-full max-w-2xl bg-[#FAFAF8] border border-[#151514] rounded-[2px] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-[#151514] hover:bg-[#F1F1EE] p-1.5 rounded-[2px] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="meta-label mb-2 text-[#6B6A66]">
              {selectedProject.caseNum} // SPECIFICATION BREAKDOWN
            </div>
            <h3 className="font-sans font-medium text-2xl sm:text-3xl text-[#151514] mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-base text-[#6B6A66] leading-relaxed mb-6 hairline-b pb-6">
              {selectedProject.description}
            </p>

            {/* Architectural Features */}
            <div className="mb-6">
              <div className="meta-label mb-3 text-[#151514]">TECHNICAL ARCHITECTURE</div>
              <ul className="space-y-2 text-sm text-[#151514]">
                {selectedProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-sans">
                    <span className="font-mono text-xs text-[#6B6A66] shrink-0 mt-0.5">
                      {`0${i + 1}.`}
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <div className="meta-label mb-3 text-[#151514]">DEPENDENCIES & PROTOCOLS</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-[#151514] bg-[#F1F1EE] border border-[#DAD9D4] px-2.5 py-1 rounded-[2px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between hairline-t pt-6">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs"
              >
                <span>Examine Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                <span>Launch Deployment</span>
                <span className="arrow-nudge">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
