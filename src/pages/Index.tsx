
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme } = useTheme();
  // Apply dark mode based on initial theme
  useEffect(() => {
    // Always ensure dark mode is applied first
    document.documentElement.classList.add("dark");
    
    // Then respect the theme setting
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
