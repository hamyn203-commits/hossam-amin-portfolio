import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { ArchitectureViewer } from "@/components/sections/ArchitectureViewer";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { ContactInquiry } from "@/components/sections/ContactInquiry";
import { Footer } from "@/components/layout/Footer";

export default function PortfolioHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesBento />
        <ProjectsShowcase />
        <ArchitectureViewer />
        <SkillsMatrix />
        <WorkProcess />
        <ContactInquiry />
      </main>
      <Footer />
    </div>
  );
}
