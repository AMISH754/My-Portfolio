"use client";

import React from "react";
import { Code2, Globe } from "lucide-react";
import Image from "next/image";

interface Project {
  idx: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  delay: number;
}

const PROJECTS: Project[] = [
  {
    idx: "01",
    title: "NexJyoti Education Foundation",
    subtitle: "Educational Transparency & Management SPA",
    description:
      "A high-performance Single Page Application (SPA) designed to empower communities, manage official staff credentials, and facilitate secure donations.",
    features: [
      "Real-time admin dashboard for staff, volunteer, and inquiry management with CRUD operations.",
      "Public ID verification portal with searchable credentials & dynamically generated digital cards.",
      "Automated application acceptance/rejection email notifications via EmailJS.",
    ],
    tags: ["React 18", "Vite 5", "Firebase Auth", "Firestore", "EmailJS"],
    liveUrl: "https://nexjyoti.org/",
    githubUrl: "https://github.com/AMISH754",
    image: "/nexjyoti.png",
    delay: 0,
  },
  {
    idx: "02",
    title: "Heart Talk 💬",
    subtitle: "Real-Time Chat & Media App",
    description:
      "Premium, real-time chat application allowing users to message seamlessly, share images instantly, and manage online profiles with dynamic active indicators.",
    features: [
      "Instant text & image delivery powered by Cloud Firestore real-time listeners.",
      "Lightweight media sharing uploaded directly to Cloudinary API.",
      "Secure authentication, dynamic green-dot online presence, and aesthetic dark UI.",
    ],
    tags: ["React 18", "Vite", "Cloud Firestore", "Cloudinary API", "Firebase"],
    liveUrl: "https://chat-app-59c85.web.app/",
    githubUrl: "https://github.com/AMISH754",
    image: "/hearttalk.png",
    delay: 120,
  },
  {
    idx: "03",
    title: "VortexCast Weather App 🌀",
    subtitle: "Glassmorphic Atmospheric Dashboard",
    description:
      "Modern atmospheric diagnostics dashboard featuring coordinates-based GPS tracking, dynamic background color gradients, and fluid forecast summaries.",
    features: [
      "Dynamic background gradients transitioning seamlessly according to weather states.",
      "Horizontal 24h hourly forecast row + 5-day summary grid with high/low temp bounds.",
      "Built-in GPS location finder, °C/°F unit toggling, and top-5 recent searches via localStorage.",
    ],
    tags: ["React 19", "Vite 7", "Tailwind CSS v4", "Axios", "OpenWeatherMap API"],
    liveUrl: "https://weather-app-opal-eight-42.vercel.app/",
    githubUrl: "https://github.com/AMISH754",
    image: "/vortexcast.png",
    delay: 240,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="head rv">
          <div className="label">03 / projects</div>
          <h2 className="h2">Featured Applications</h2>
          <p>
            Deployed web products engineered with focus on real-time databases, sleek UIs, automated workflows, and high performance.
          </p>
        </div>

        <div className="cards">
          {PROJECTS.map((project) => (
            <article
              key={project.idx}
              className="pcard rv"
              data-d={project.delay}
            >
              <div className="pin">
                <div className="shot">
                  <span className="idx">{project.idx}</span>
                  <span className="live">
                    <i></i>live
                  </span>
                  {/* Project screenshot from public folder */}
                  <div className="absolute inset-0 overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
                  </div>
                  <div className="flex flex-col items-center gap-1.5 z-10 px-6 text-center">
                    <span className="ph font-mono text-base font-bold text-white drop-shadow-lg">
                      {project.title}
                    </span>
                    <span className="text-[12px] font-mono text-[#e8e8f0] drop-shadow">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                <div className="pbody">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ul className="text-xs text-[#b9b9c4] space-y-1.5 list-disc list-inside my-1">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>

                  <div className="tags mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="ptag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="plinks pt-2">
                    <a
                      className="lnk inline-flex items-center gap-1.5"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <span className="ar">→</span>
                    </a>
                    <a
                      className="lnk inline-flex items-center gap-1.5 text-[#b9b9c4] hover:text-[#f2477f]"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 className="w-4 h-4 inline-block" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="more rv">
          <a
            className="btn btn-ghost"
            href="https://github.com/AMISH754"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 className="w-5 h-5 mr-1" />
            See all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
