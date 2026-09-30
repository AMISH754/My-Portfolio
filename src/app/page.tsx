import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CPSection from "@/components/CPSection";
import ECESimulator from "@/components/ECESimulator";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#FAFAF8] text-[#151514]">
      {/* Specimen Sections Flow */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CPSection />
      <ECESimulator />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
