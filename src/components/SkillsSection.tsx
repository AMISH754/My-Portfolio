"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

// Inline SVG Icon components for each technology
const CplusplusIcon = () => (
  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 128 128" fill="currentColor">
    <path fill="#00599C" d="M12.016 85.03l40.063 23.13v-86.26l-40.063 23.13zm103.968 0v-40l-34.646-20v80z"/>
    <path fill="#00599C" d="M81.338 65v-6h18v-8h-18v-18h-8v18h-18v8h18v18h8zM41.338 65v-6h18v-8h-18v-18h-8v18h-18v8h18v18h8z" opacity=".2"/>
    <path fill="#00599C" d="M103.984 25.03L64.016 1.97v86.26l39.968-23.13zM64.016 126.03l39.968-23.13v-34.64l-39.968 23.13zm-52-41v34.64l39.968 23.13v-34.64z"/>
    <path fill="#004482" d="M64.016 1.97v86.26l39.968-23.13z"/>
  </svg>
);

const SqlIcon = () => (
  <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg className="h-6 w-6 text-yellow-500 bg-black/40 rounded" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h18v18H3V3zm11.5 12.3c0-.8-.5-1.3-1.6-1.7l-1-.4c-.5-.2-.7-.4-.7-.7s.3-.5.7-.5c.5 0 .8.2.9.6h1.4c-.1-1.1-.9-1.8-2.3-1.8-1.4 0-2.3.8-2.3 1.8 0 .8.5 1.3 1.5 1.7l1 .4c.6.2.8.5.8.8 0 .4-.3.6-.8.6-.6 0-1-.3-1.1-.8H8.5c.1 1.2.9 1.9 2.4 1.9 1.5 0 2.4-.8 2.4-2zm5.7-1.5H19v2.5c0 .6-.3.8-.8.8-.5 0-.7-.3-.7-.8V11h-1.5v2.8c0 1.5.9 2.3 2.2 2.3 1.4 0 2.2-.8 2.2-2.3v-1.1z"/>
  </svg>
);

const HtmlCssIcon = () => (
  <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const ReactIcon = () => (
  <svg className="h-6 w-6 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const NextjsIcon = () => (
  <svg className="h-6 w-6 text-white" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.7 93.3l-28-36.2v36.2h-7.8V53.2h7.8l26.2 34v-34h7.8v40.1zM64 53.2c4.1 0 7.8 3.5 7.8 7.8v1.1l-7.8-10.1v1.2z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const NodejsIcon = () => (
  <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3.5 6.9v9.8L12 22l8.5-5.3V6.9L12 2zm6.8 13.6l-6.8 4.2-6.8-4.2V8.4l6.8-4.2 6.8 4.2v7.2zM9.5 8.7h1.4v4.5H9.5V8.7zm3.4 0h1.4v1.5h-.1c.2-.5.8-1.7 2.1-1.7v1.5c-1.3 0-2 1.1-2 2.1v1.1h-1.4V8.7z"/>
  </svg>
);

const ExpressIcon = () => (
  <svg className="h-6 w-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <path d="M6 10h4M6 14h4M14 10l2 2 2-2M14 14l4-4" />
  </svg>
);

const JqueryIcon = () => (
  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-3-.5-.5-1-.5-1-1s.5-1 1-1 1 .5 1 1" />
    <path d="M15.5 9.5a2.5 2.5 0 0 1-2.5 2.5c0 1.38.5 2 1.5 3 .5.5 1 .5 1 1s-.5 1-1 1-1-.5-1-1" />
  </svg>
);

const EjsIcon = () => (
  <svg className="h-6 w-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    <path d="M15 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);

const MongooseIcon = () => (
  <svg className="h-6 w-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const BootstrapIcon = () => (
  <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.17 11.66c0 1.63-1.07 2.34-2.82 2.34H9.13V8h3.22c1.65 0 2.61.73 2.61 2.07 0 1-.58 1.63-1.48 1.89.98.24 1.69.83 1.69 1.7zm-4.32-4.23v2.24h1.1c.91 0 1.32-.33 1.32-1.1s-.41-1.14-1.32-1.14h-1.1zm0 3.73v2.54h1.22c1 0 1.48-.38 1.48-1.25S13 13.16 12 13.16h-1.17z"/>
  </svg>
);

const PostgresIcon = () => (
  <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5H9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h2.5c.83 0 1.5.67 1.5 1.5zM15 11c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5z"/>
  </svg>
);

const MongodbIcon = () => (
  <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-.15 0-.29.02-.43.05C9.4 2.5 5.5 8.1 5.5 12c0 3.25 2.5 6.2 6.07 6.9.14.03.28.05.43.05s.29-.02.43-.05c3.57-.7 6.07-3.65 6.07-6.9 0-3.9-3.9-9.5-6.07-9.95-.14-.03-.28-.05-.43-.05zM12 4.5v12c-2.36-.6-4-2.75-4-4.5 0-2.5 2.5-6.15 4-7.5zm0 0c1.5 1.35 4 5 4 7.5 0 1.75-1.64 3.9-4 4.5V4.5z"/>
  </svg>
);

const GitIcon = () => (
  <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.66 10.66a2 2 0 1 1-2.83-2.83l1.83-1.83a4.012 4.012 0 0 0-5.66 0L10.17 7.83a2.006 2.006 0 0 1 .5 1.17c0 .5-.19.96-.5 1.31l1.83 1.83a2.012 2.012 0 0 1 2.83 2.83l-1.83 1.83a4.012 4.012 0 0 0 5.66 0l1.83-1.83a2.006 2.006 0 0 1-.5-1.17c0-.5.19-.96.5-1.31l-1.83-1.83zM7.34 13.34a2 2 0 1 1 2.83 2.83l-1.83 1.83a4.012 4.012 0 0 0 5.66 0l1.83-1.83a2.006 2.006 0 0 1-.5-1.17c0-.5.19-.96.5-1.31l1.83 1.83a2.012 2.012 0 0 1-2.83-2.83l1.83-1.83a4.012 4.012 0 0 0-5.66 0L5.34 11.5a2.006 2.006 0 0 1-.5-1.17c0-.5.19-.96.5-1.31l1.83 1.83z"/>
  </svg>
);

const VscodeIcon = () => (
  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <rect width="8" height="8" x="8" y="8" rx="1" />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.75L12 2.1l8.11 13.65H3.89z" fill="#FFA611" />
    <path d="M12 2.1l8.11 13.65H12V2.1z" fill="#F48220" />
    <path d="M3.89 15.75l8.11-13.65 1.54 9.17-9.65 4.48z" fill="#FFCA28" />
  </svg>
);

const CloudinaryIcon = () => (
  <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M12 16v-8M8 12h8" />
  </svg>
);

const PostmanIcon = () => (
  <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20M2 12h20" />
  </svg>
);

const NodemailerIcon = () => (
  <svg className="h-6 w-6 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

interface Skill {
  name: string;
  logo: React.ReactNode;
}

function MarqueeColumn({
  skills,
  direction = "up",
  duration = "20s",
  className = "",
}: {
  skills: Skill[];
  direction?: "up" | "down";
  duration?: string;
  className?: string;
}) {
  const doubledSkills = [...skills, ...skills];

  return (
    <div className={`overflow-hidden h-full flex flex-col ${className}`}>
      <div
        className={`flex flex-col gap-4 py-2 hover:[animation-play-state:paused] cursor-pointer ${
          direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
        }`}
        style={{ "--duration": duration } as React.CSSProperties}
      >
        {doubledSkills.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex flex-col items-center justify-center p-4 rounded-[20px] border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_0_30px_rgba(33,105,85,0.15)] transition-all duration-300 group hover:scale-[1.05]"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 mb-2.5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              {skill.logo}
            </div>
            <span className="text-[11px] font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors text-center truncate w-full">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const col1Skills = [
    { name: "Next.js", logo: <NextjsIcon /> },
    { name: "JavaScript", logo: <JavaScriptIcon /> },
    { name: "React", logo: <ReactIcon /> },
    { name: "HTML/CSS", logo: <HtmlCssIcon /> },
    { name: "SQL", logo: <SqlIcon /> },
  ];

  const col2Skills = [
    { name: "MongoDB", logo: <MongodbIcon /> },
    { name: "PostgreSQL", logo: <PostgresIcon /> },
    { name: "Firebase", logo: <FirebaseIcon /> },
    { name: "Git", logo: <GitIcon /> },
    { name: "GitHub", logo: <Code2 className="h-6 w-6 text-purple-400" /> },
    { name: "VS Code", logo: <VscodeIcon /> },
  ];

  const col3Skills = [
    { name: "Node.js", logo: <NodejsIcon /> },
    { name: "Express.js", logo: <ExpressIcon /> },
    { name: "Tailwind CSS", logo: <TailwindIcon /> },
    { name: "Bootstrap", logo: <BootstrapIcon /> },
    { name: "jQuery", logo: <JqueryIcon /> },
  ];

  const col4Skills = [
    { name: "C/C++", logo: <CplusplusIcon /> },
    { name: "Cloudinary", logo: <CloudinaryIcon /> },
    { name: "Postman", logo: <PostmanIcon /> },
    { name: "Nodemailer", logo: <NodemailerIcon /> },
    { name: "EJS", logo: <EjsIcon /> },
    { name: "Mongoose", logo: <MongooseIcon /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-transparent overflow-hidden">
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
            My <span className="text-secondary">Skills</span> & Technologies
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
            An interactive, multi-column vertical scrolling showcase of my developer tools and technical competencies.
          </p>
        </div>

        {/* Categories Marquees grid container */}
        <div className="relative rounded-3xl border border-white/5 bg-navy-800/40 backdrop-blur-xl p-6 md:p-8 h-[480px] overflow-hidden tech-mask shadow-2xl max-w-4xl mx-auto z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full relative z-10">
            <MarqueeColumn skills={col1Skills} direction="up" duration="18s" className="flex" />
            <MarqueeColumn skills={col2Skills} direction="down" duration="22s" className="flex" />
            <MarqueeColumn skills={col3Skills} direction="up" duration="20s" className="hidden md:flex" />
            <MarqueeColumn skills={col4Skills} direction="down" duration="24s" className="hidden lg:flex" />
          </div>
          <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
}
