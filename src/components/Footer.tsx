import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import LeetcodeLogo from "./icons/LeetcodeLogo";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour (just to be safe)

    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="bg-secondary py-12 px-6 border-t border-teal-500/10 dark:border-cyber-yellow/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500 dark:text-cyber-yellow">
              Hussein Saad
            </h3>
            <p className="text-muted-foreground mb-4">
              Crafting modern digital experiences with clean code and intuitive
              design. Specializing in full-stack development with React and
              Node.js.
            </p>
            <div className="flex gap-4 items-center mt-6">
              {" "}
              <a
                href="https://github.com/eng-hussein-saad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/enghusseinsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>{" "}
              <a
                href="https://leetcode.com/u/enghusseinsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors"
                aria-label="LeetCode"
              >
                <LeetcodeLogo className="h-5 w-5" />
              </a>{" "}
              <a
                href="mailto:eng.hussein.saad1@gmail.com"
                className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            {" "}
            <h3 className="text-xl font-semibold mb-4 text-teal-500 dark:text-cyber-yellow">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <span className="text-xs">→</span> Home
                </a>
              </li>{" "}
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <span className="text-xs">→</span> Skills
                </a>
              </li>{" "}
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <span className="text-xs">→</span> Services
                </a>
              </li>{" "}
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <span className="text-xs">→</span> Projects
                </a>
              </li>{" "}
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <span className="text-xs">→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            {" "}
            <h3 className="text-xl font-semibold mb-4 text-teal-500 dark:text-cyber-yellow">
              Contact
            </h3>
            <ul className="space-y-4">
              {" "}
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-teal-500 dark:text-cyber-yellow mt-0.5" />
                <span className="text-muted-foreground">Cairo, Egypt</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-teal-500 dark:text-cyber-yellow mt-0.5" />
                <span className="text-muted-foreground">+20 1091035533</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-teal-500 dark:text-cyber-yellow mt-0.5" />
                <span className="text-muted-foreground">
                  eng.hussein.saad1@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: External Links */}
          <div>
            {" "}
            <h3 className="text-xl font-semibold mb-4 text-teal-500 dark:text-cyber-yellow">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Hussein_Saad_CV.pdf"
                  target="_blank"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" /> Download CV
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://github.com/eng-hussein-saad?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" /> GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" /> Latest Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary-foreground/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          {" "}
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {year}{" "}
            <span className="text-teal-500 dark:text-cyber-yellow">
              Hussein Saad
            </span>
            . All rights reserved. Professional Full-Stack Developer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
