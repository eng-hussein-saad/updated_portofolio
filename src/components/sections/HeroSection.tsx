import React from "react";
import TypewriterText from "../TypewriterText";
import ScrollReveal from "../ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Code,
  Terminal,
  Cpu,
  Layers,
  Server,
  Monitor,
  Braces,
  Code2,
  Globe,
  Smartphone,
  Layout,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {" "}
      {/* Background code snippet */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <pre className="text-xs md:text-sm text-foreground font-mono whitespace-pre-wrap p-4">
          {`// PortfolioApp.tsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import { ProjectType, SkillCategory, ContactFormData } from '@/lib/types';
import { HeroSection, ProjectsSection, SkillsSection, ContactSection } from '@/components/sections';
import { sendContactEmail } from '@/lib/api';

export const PortfolioApp: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  
  useEffect(() => {
    // Load portfolio data
    const loadPortfolioData = async () => {
      try {
        const projectsData = await fetchProjects();
        const skillsData = await fetchSkills();
        
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error('Failed to fetch portfolio data:', error);
      }
    };
    
    loadPortfolioData();
    
    // Set availability status
    const checkAvailability = () => setIsAvailable(true);
    window.addEventListener('opportunity', checkAvailability);
    return () => window.removeEventListener('opportunity', checkAvailability);
  }, []);

  const handleContactSubmit = async (data: ContactFormData) => {
    return await sendContactEmail(data);
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="portfolio-container">
        <HeroSection />
        <SkillsSection categories={skills} />
        <ProjectsSection projects={projects} />
        {isAvailable && <ContactSection onSubmit={handleContactSubmit} />}
      </div>
    </ThemeProvider>
  );
};

export default PortfolioApp;`}
        </pre>
      </div>
      {/* Cyber grid background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>{" "}
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-cyber-yellow shadow-[0_0_5px_rgba(20,184,166,0.8)] dark:shadow-[0_0_5px_rgba(255,215,0,0.8)] animate-particle-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              opacity: 0.8,
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        <div className="flex flex-col justify-center">
          <ScrollReveal delay={200}>
            <div className="flex items-center mb-4">
              {" "}
              <div className="h-px w-8 bg-teal-500 dark:bg-cyber-yellow mr-4"></div>
              <p className="text-teal-600 dark:text-cyber-yellow font-mono">
                Hello, World!
              </p>
            </div>
          </ScrollReveal>{" "}
          <ScrollReveal delay={500}>
            <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight shadow-[0_0_15px_rgba(20,184,166,0.4)] dark:shadow-[0_0_15px_rgba(255,215,0,0.5)] dark:bg-black p-6">
              <span className="block text-foreground dark:text-white">
                My name is
              </span>{" "}
              <span className="block font-bold bg-gradient-to-r from-teal-500 to-teal-700 dark:from-cyber-yellow dark:to-amber-500 bg-clip-text text-transparent">
                Hussein Saad
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              A Communications and Information Technology Engineer with
              expertise in{" "}
              <span className="text-teal-600 dark:text-cyber-yellow">
                {" "}
                Full-Stack Development
              </span>
              . I build scalable, high-performance web applications with clean
              architecture and exceptional user experiences.
            </p>
          </ScrollReveal>{" "}
          <ScrollReveal delay={1100}>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Hussein_Saad_CV.pdf"
                download
                className="cyber-button group inline-flex items-center"
                aria-label="Download CV"
              >
                <span className="flex items-center">
                  Download CV
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-md border border-teal-500/50 dark:border-cyber-yellow/50 hover:bg-teal-500/10 dark:hover:bg-cyber-yellow/10 transition-colors duration-300"
                aria-label="Contact me"
              >
                Contact Me <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Cyber Terminal Display */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full h-[450px] perspective-1000">
            {/* Main Holographic Display */}
            <div className="absolute inset-0 rounded-lg glass-panel cyber-border flex flex-col overflow-hidden z-30">
              {" "}
              {/* Terminal header */}
              <div className="bg-gradient-to-r from-teal-700/40 to-teal-500/20 dark:from-cyber-charcoal dark:to-cyber-charcoal/80 h-10 flex items-center px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 hover:opacity-80 transition-opacity"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity"></div>
                </div>{" "}
                <div className="flex-1 text-center font-mono text-sm text-white/80">
                  <span className="text-teal-400 dark:text-cyber-yellow">
                    EngHussein
                  </span>
                  @<span className="text-blue-400">developer</span>{" "}
                  <span className="text-gray-400">~</span> main
                </div>
                <div className="flex gap-2">
                  <Braces className="h-4 w-4 text-teal-500 dark:text-cyber-yellow" />
                  <Code2 className="h-4 w-4 text-teal-500 dark:text-cyber-yellow" />
                </div>
              </div>
              {/* Terminal content */}
              <div className="flex-1 bg-gradient-to-br from-slate-900/90 to-slate-800/90 dark:from-black dark:to-cyber-charcoal/90 p-4 font-mono text-sm">
                {" "}
                <div className="text-blue-500 dark:text-cyber-yellow flex items-center gap-2">
                  <span>~/dev-portfolio $</span>
                  <TypewriterText text="npm run showcase" />
                </div>
                <div className="mt-4 text-white">
                  <span className="text-teal-400 dark:text-cyber-yellow">
                    ▶
                  </span>{" "}
                  Initializing development environment...
                </div>{" "}
                <div className="mt-2 text-gray-400">
                  <span className="inline-block w-4"></span>🔧 Loading React
                  components
                  <span className="text-teal-400 dark:text-cyber-yellow ml-2">
                    ✓
                  </span>
                </div>{" "}
                <div className="mt-1 text-gray-400">
                  <span className="inline-block w-4"></span>🔧 Optimizing
                  stylesheets
                  <span className="text-teal-400 dark:text-cyber-yellow ml-2">
                    ✓
                  </span>
                </div>{" "}
                <div className="mt-1 text-gray-400">
                  <span className="inline-block w-4"></span>🔧 Creating API
                  endpoints
                  <span className="text-teal-400 dark:text-cyber-yellow ml-2">
                    ✓
                  </span>
                </div>{" "}
                <div className="mt-1 text-gray-400">
                  <span className="inline-block w-4"></span>🔧 Setting up API
                  connections
                  <span className="text-teal-400 dark:text-cyber-yellow ml-2">
                    ✓
                  </span>
                </div>{" "}
                <div className="mt-4 text-white">
                  <span className="text-teal-400 dark:text-cyber-yellow">
                    ▶
                  </span>{" "}
                  Launching portfolio showcase...
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {" "}
                  <div className="col-span-2 h-40 rounded border border-teal-500/30 dark:border-cyber-yellow/30 p-2 flex flex-col">
                    <div className="text-teal-500 dark:text-cyber-yellow text-xs mb-1">
                      PROJECT VIEWPORT
                    </div>
                    <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="h-full w-full bg-grid-small-pattern"></div>
                      </div>
                      <div className="text-center">
                        {" "}
                        <Layout className="h-10 w-10 text-teal-500 dark:text-cyber-yellow mx-auto mb-2 animate-pulse" />
                        <div className="text-teal-500 dark:text-cyber-yellow text-sm animate-pulse">
                          PROJECTS READY
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="space-y-3">
                    <div className="h-[72px] rounded border border-teal-500/30 dark:border-cyber-yellow/30 p-2 flex items-center justify-center">
                      <Monitor className="h-5 w-5 text-teal-500 dark:text-cyber-yellow mr-2" />
                      <span className="text-gray-300 text-sm">Frontend</span>
                    </div>
                    <div className="h-[72px] rounded border border-teal-500/30 dark:border-cyber-yellow/30 p-2 flex items-center justify-center">
                      <Code className="h-5 w-5 text-teal-500 dark:text-cyber-yellow mr-2" />
                      <span className="text-gray-300 text-sm">Backend</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-6 flex items-center">
                  <div className="h-px flex-1 bg-teal-500/20 dark:bg-cyber-yellow/20"></div>
                  <div className="px-2 text-teal-500 dark:text-cyber-yellow text-xs">
                    SYSTEM READY
                  </div>
                  <div className="h-px flex-1 bg-teal-500/20 dark:bg-cyber-yellow/20"></div>
                </div>{" "}
                <div className="mt-4 text-white flex items-center">
                  <span className="text-blue-500 dark:text-cyber-yellow">
                    ~/dev-portfolio $
                  </span>
                  <span className="ml-2 h-4 w-2 bg-teal-500 dark:bg-cyber-yellow animate-pulse"></span>
                </div>
              </div>
            </div>{" "}
            {/* Decorative cyber elements */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-full bg-teal-500/5 dark:bg-cyber-yellow/5 animate-pulse"></div>
            <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-teal-500 dark:border-cyber-yellow"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-teal-500 dark:border-cyber-yellow"></div>
            <div className="absolute top-[15%] -left-3 h-10 w-1 bg-teal-500/50 dark:bg-cyber-yellow/50"></div>
            <div className="absolute bottom-[15%] -right-3 h-10 w-1 bg-teal-500/50 dark:bg-cyber-yellow/50"></div>
            <div className="absolute top-0 left-[15%] h-1 w-10 bg-teal-500/50 dark:bg-cyber-yellow/50"></div>
            <div className="absolute bottom-0 right-[15%] h-1 w-10 bg-teal-500/50 dark:bg-cyber-yellow/50"></div>
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#skills"
          className="text-teal-600 dark:text-cyber-yellow flex flex-col items-center"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
