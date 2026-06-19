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
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import { MouseGlow } from "@/components/ui/Spotlight";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-navy-900 overflow-x-hidden">
      {/* Background radial blobs */}
      <BackgroundBlobs />

      {/* Dotted Shimmering Glow Background */}
      <DottedGlowBackground
        className="pointer-events-none -z-10"
        opacity={0.3}
        gap={18}
        radius={1.3}
        color="rgba(148, 163, 184, 0.1)"
        glowColor="rgba(33, 105, 85, 0.65)"
        darkColor="rgba(148, 163, 184, 0.1)"
        darkGlowColor="rgba(179, 229, 209, 0.65)"
        speedMin={0.3}
        speedMax={1.0}
      />

      {/* Mouse Follow Glow Flashlight */}
      <MouseGlow />

      {/* Stitching sections */}
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
