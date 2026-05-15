"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechSection } from "@/components/sections/tech-section";
import { Navbar } from "@/components/navbar";

export function SiteShell() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="space-y-2 pb-10 pt-16 sm:pt-20">
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
