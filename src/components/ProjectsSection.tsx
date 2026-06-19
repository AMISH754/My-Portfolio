"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter, Star, GitFork, Folder } from "lucide-react";
import { HoverEffectGrid, HoverEffectCard } from "@/components/ui/CardHoverEffect";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import Image from "next/image";

interface Project {
  title: string;
  category: "Web Dev" | "Applications";
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  features: string[];
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "github">("projects");
  const [activeFilter, setActiveFilter] = useState<"All" | "Web Dev" | "Applications">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [repos, setRepos] = useState<any[]>([]);
  const [reposLoading, setReposLoading] = useState(false);

  useEffect(() => {
    if (activeTab === "github" && repos.length === 0) {
      setReposLoading(true);
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
      title: "Heart Talk",
      category: "Applications",
      description: "A premium, real-time chat application built using React, Vite, Firebase, and Cloudinary, allowing users to chat, share media, and customize profiles.",
      image: "/hearttalk.png",
      tech: ["React", "Vite", "Firebase", "Cloudinary", "Vanilla CSS"],
      liveLink: "https://chat-app-59c85.web.app",
      githubLink: "https://github.com/AMISH754/HeartTalk",
      features: [
        "Real-Time Messaging: Instant text and image delivery powered by Firestore.",
        "Secure Authentication: User signup, login, logout, and password reset capability using Firebase Authentication.",
        "Media Uploads: Clean and lightweight image sharing uploaded directly to Cloudinary.",
        "Profile Updates: Personalize user avatar and bio on first login or profile settings.",
        "Online Presence: Dynamic green-dot indicators showing active status.",
        "Responsive Interface: Optimised layout with adaptive slide-out views for mobile, tablet, and desktop screens.",
        "Aesthetic Dark Mode UI: Harmonious HSL palettes, smooth fade-in animations, and a sleek modern aesthetic."
      ]
    },
    {
      title: "NexJyoti Education Foundation",
      category: "Web Dev",
      description: "A high-performance, responsive Single Page Application (SPA) designed to empower communities, promote educational transparency, and facilitate secure donations.",
      image: "/nexjyoti.png",
      tech: ["React 18", "React Router DOM 6", "Vite 5", "Vanilla CSS", "Firebase Hosting"],
      liveLink: "https://nexjyoti.org",
      githubLink: "https://github.com/AMISH754/NexJyoti",
      features: [
        "Single Page Application: Fast client-side routing powered by React Router DOM 6.",
        "Educational Portal: Built to showcase educational transparency and empower local communities.",
        "Community Outreach & Donations: Clean interfaces optimized to facilitate secure donation campaigns.",
        "Premium HSL Styling: Designed with dynamic HSL variable custom styling supporting Light/Dark modes.",
        "High-Performance Build: Optimized asset rendering and fast compilation with Vite.",
        "Robust Hosting: Deployed securely on Firebase Hosting."
      ]
    },
    {
      title: "BookPulse",
      category: "Web Dev",
      description: "Developed a full-stack web application for book management and discovery, leveraging Node.js and Express.js for a scalable backend.",
      image: "/bookpulse.png",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Bootstrap"],
      liveLink: "https://bookpulse-demo.example.com",
      githubLink: "https://github.com/AMISH754/Book_pulse-project",
      features: [
        "Developed a full-stack web application for book management and discovery, leveraging Node.js and Express.js.",
        "Integrated a Book Cover API to dynamically fetch and display metadata, paired with a PostgreSQL database.",
        "Designed a clean, responsive interface using Bootstrap and custom CSS, ensuring a seamless experience."
      ]
    },
    {
      title: "VortexCast Weather App",
      category: "Web Dev",
      description: "A premium, modern, glassmorphic weather dashboard providing real-time diagnostics, coordinates-based tracking, and fluid weather forecasts.",
      image: "/vortexcast.png",
      tech: ["React 19", "Vite 7", "Tailwind CSS v4", "Axios", "OpenWeatherMap API"],
      liveLink: "https://weather-app-opal-eight-42.vercel.app",
      githubLink: "https://github.com/AMISH754/Weather-App",
      features: [
        "Dynamic Background Gradients: The dashboard transitions smoothly between ambient color gradients depending on the weather state of the queried location.",
        "Premium Glassmorphic UI: Card overlays styled with subtle translucent borders, shadows, and deep backdrop-blur filters.",
        "Animated Local SVGs: Mapped static OpenWeatherMap API codes to clean, fluidly animated local SVG vector icons.",
        "5-Day & Hourly Forecasts: Horizontal hourly scrolling row (3h increments) and a detailed 5-day summary grid.",
        "Geolocation Finder: Built-in GPS locator to immediately pull weather metrics for your current coordinates.",
        "Celsius & Fahrenheit Support: Dynamic toggle of temperature, wind speed, and visibility units.",
        "Recent Searches & Quick Links: Caches top 5 searches using localStorage and presents quick city cards."
      ]
    },
    {
      title: "Music Website",
      category: "Web Dev",
      description: "Built a responsive music platform using Next.js and Aceternity UI, prioritizing modern UI design and high-performance component architecture.",
      image: "/musicweb.png",
      tech: ["Next.js", "Aceternity UI", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://musicwave-demo.example.com",
      githubLink: "https://github.com/AMISH754/Music-App",
      features: [
        "Built a responsive music platform using Next.js and Aceternity UI, prioritizing modern UI design.",
        "Implemented smooth, interactive animations and transitions to enhance user engagement and visual storytelling.",
        "Optimized frontend development by utilizing server-side rendering and efficient component-based structures."
      ]
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 relative bg-transparent">
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
            My Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            A handpicked selection of application stacks I designed, built, and polished.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center items-center gap-4 mb-10 select-none">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-5 py-2 text-xs font-extrabold tracking-wider uppercase rounded-xl border transition-all cursor-pointer ${
              activeTab === "projects"
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            Featured Projects
          </button>
          <button
            onClick={() => setActiveTab("github")}
            className={`px-5 py-2 text-xs font-extrabold tracking-wider uppercase rounded-xl border transition-all cursor-pointer ${
              activeTab === "github"
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            GitHub Activity
          </button>
        </div>

        {activeTab === "projects" ? (
          <>
            {/* Filter Controls */}
            <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
              <Filter className="h-4 w-4 text-slate-400" />
              {["All", "Web Dev", "Applications"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter as any)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                    activeFilter === filter
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid Layout for Featured Projects */}
            <HoverEffectGrid className="py-0 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <HoverEffectCard
                    key={project.title}
                    idx={idx}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    className="p-0 border-slate-800 hover:border-primary/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group flex flex-col h-full bg-navy-800/50"
                  >
                    {/* Project Image Preview Container */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60" />
                      
                      {/* Hover Actions Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                          title="GitHub Repository"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                          title="Live Demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>

                      {/* Category badge absolute on image */}
                      <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary border border-primary/20 text-white shadow-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded bg-slate-900 border border-slate-800 text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors cursor-pointer group/btn"
                        >
                          Learn More
                          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </HoverEffectCard>
                ))}
              </AnimatePresence>
            </HoverEffectGrid>
          </>
        ) : (
          /* Grid Layout for Live GitHub Repositories */
          <HoverEffectGrid className="py-0 gap-8">
            {reposLoading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="p-6 border border-slate-800 bg-navy-800/30 rounded-2xl animate-pulse h-48 flex flex-col justify-between">
                  <div>
                    <div className="h-6 w-6 bg-slate-800 rounded-lg mb-4" />
                    <div className="h-5 w-32 bg-slate-800 rounded mb-3" />
                    <div className="h-3 w-full bg-slate-800/60 rounded mb-2" />
                    <div className="h-3 w-2/3 bg-slate-800/60 rounded" />
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-900 pt-4 mt-4">
                    <div className="h-3 w-16 bg-slate-800/60 rounded" />
                    <div className="h-3.5 w-12 bg-slate-800/60 rounded" />
                  </div>
                </div>
              ))
            ) : (
              repos.map((repo, idx) => (
                <HoverEffectCard
                  key={repo.id}
                  idx={idx}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  className="p-6 border-slate-800 hover:border-primary/30 rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group flex flex-col justify-between h-full bg-navy-800/50"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                        <Folder className="h-5 w-5" />
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors"
                        title="Visit GitHub Repository"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 truncate group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                      {repo.description || "Public open-source code repository hosted on GitHub."}
                    </p>
                  </div>

                  <div>
                    {repo.language && (
                      <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold rounded bg-slate-900 border border-slate-800 text-slate-400 mb-4 uppercase tracking-wider">
                        {repo.language}
                      </span>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-900 text-xs text-slate-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500/10" />
                          <span className="font-bold text-white font-mono">{repo.stargazers_count}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5 text-slate-500" />
                          <span className="font-bold text-white font-mono">{repo.forks_count}</span>
                        </span>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-primary hover:text-white transition-colors"
                      >
                        Codebase &rarr;
                      </a>
                    </div>
                  </div>
                </HoverEffectCard>
              ))
            )}
          </HoverEffectGrid>
        )}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-navy-800 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900/40 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors border border-slate-800 cursor-pointer"
              >
                ✕
              </button>

              <div className="relative h-56 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-primary border border-primary/20 text-white shadow-md mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Features points list */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-secondary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-slate-300 text-xs flex items-start gap-2">
                        <span className="text-primary mt-0.5">&bull;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack items row */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 text-xs font-bold rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Redirect options CTA footer */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-slate-800">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full border border-slate-700 hover:bg-slate-700/40 text-slate-300 hover:text-white transition-all cursor-pointer"
                  >
                    <Github className="h-4 w-4 mr-1.5" />
                    Codebase
                  </a>
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full bg-primary hover:bg-primary/95 text-white transition-all cursor-pointer shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
