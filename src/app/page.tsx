"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CPSection from "@/components/CPSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-d");
            if (delay) {
              (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".rv, .rv-l, .rv-r, .rv-s");
    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-[#f3f3f6]">
      {/* Dark Crimson Portfolio Flow */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CPSection />
      <JourneySection />
      <ContactSection />
    </div>
  );
}
