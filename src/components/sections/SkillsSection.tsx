import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ReactLogo from "../icons/ReactLogo";
import TypeScriptLogo from "../icons/TypeScriptLogo";
import NodeJsLogo from "../icons/NodeJsLogo";
import ExpressLogo from "../icons/ExpressLogo";
import NextJsLogo from "../icons/NextJsLogo";
import DjangoLogo from "../icons/DjangoLogo";
import PythonLogo from "../icons/PythonLogo";
import PostgreSQLLogo from "../icons/PostgreSQLLogo";
import MongoDBLogo from "../icons/MongoDBLogo";
import DockerLogo from "../icons/DockerLogo";
import GitLogo from "../icons/GitLogo";
import BootstrapLogo from "../icons/BootstrapLogo";
import LinuxLogo from "../icons/LinuxLogo";
import RestApiLogo from "../icons/RestApiLogo";
import OdooLogo from "../icons/OdooLogo";
import { BarChart, Terminal } from "lucide-react";

const categories = ["All", "Frontend", "Backend", "Design", "Other"];

const skills = [
  {
    name: "ReactJS",
    category: "Frontend",
    level: 90,
    icon: (
      <ReactLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 80,
    icon: (
      <TypeScriptLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 80,
    icon: (
      <NodeJsLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Express.js",
    category: "Backend",
    level: 80,
    icon: (
      <ExpressLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 80,
    icon: (
      <NextJsLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "MongoDB",
    category: "Backend",
    level: 85,
    icon: (
      <MongoDBLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    level: 85,
    icon: (
      <PostgreSQLLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Python",
    category: "Backend",
    level: 85,
    icon: (
      <PythonLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Django",
    category: "Backend",
    level: 85,
    icon: (
      <DjangoLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "RESTFUL APIs",
    category: "Backend",
    level: 90,
    icon: (
      <RestApiLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Odoo",
    category: "Other",
    level: 75,
    icon: <OdooLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />,
  },
  {
    name: "Docker",
    category: "Backend",
    level: 75,
    icon: (
      <DockerLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Agile",
    category: "Other",
    level: 70,
    icon: <BarChart className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />,
  },
  {
    name: "Bash Script",
    category: "Other",
    level: 75,
    icon: <Terminal className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: 80,
    icon: (
      <BootstrapLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
  {
    name: "Git",
    category: "Other",
    level: 85,
    icon: <GitLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />,
  },
  {
    name: "Linux",
    category: "Frontend",
    level: 75,
    icon: (
      <LinuxLogo className="h-6 w-6 text-teal-500 dark:text-cyber-yellow" />
    ),
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section bg-muted dark:bg-secondary/20">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-center mb-4">Skills Matrix</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A comprehensive overview of my technical expertise and proficiency
            levels across various programming languages, frameworks, and tools.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={cn(
                    "transition-all relative",
                    activeCategory === category &&
                      "bg-teal-500 dark:bg-cyber-yellow text-white dark:text-black hover:bg-teal-500/90 dark:hover:bg-cyber-yellow/90"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}{" "}
                  {activeCategory === category && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 dark:bg-cyber-yellow" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={200 + index * 100}>              <div className="hexagon bg-card hover:bg-teal-500/10 dark:hover:bg-cyber-yellow/10 transition-all duration-300 p-6 relative group overflow-hidden" style={{ height: '180px' }}>                <div className="flex flex-col items-center justify-between h-full relative z-10">                  <div className="w-16 h-16 mb-2 flex items-center justify-center">                    <div className="w-12 h-12 rounded-full bg-teal-500/20 dark:bg-cyber-yellow/20 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500/30 dark:group-hover:bg-cyber-yellow/30 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] dark:group-hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] group-hover:scale-110">
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                    </div>
                  </div>                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-base font-medium mb-3 group-hover:text-teal-600 dark:group-hover:text-cyber-yellow transition-all duration-300 group-hover:scale-105 group-hover:font-semibold">{skill.name}</h3>
                      <div className="w-full px-1 opacity-0 group-hover:opacity-100 transition-all duration-300">                      <div className="w-full h-2 bg-secondary/40 dark:bg-secondary/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-500 dark:bg-cyber-yellow shadow-[0_0_5px_rgba(20,184,166,0.5)] dark:shadow-[0_0_5px_rgba(255,215,0,0.5)] transition-all duration-500 origin-left transform scale-x-0 group-hover:scale-x-100"
                          style={{ 
                            width: `${skill.level}%`
                          }}
                        />
                      </div>
                      <p className="text-xs mt-1 text-center font-medium text-teal-600 dark:text-cyber-yellow">{skill.level}%</p>
                    </div>
                  </div>                </div>                <div 
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 dark:from-cyber-yellow/0 dark:to-cyber-yellow/0 group-hover:from-teal-500/10 group-hover:to-teal-500/0 dark:group-hover:from-cyber-yellow/10 dark:group-hover:to-cyber-yellow/0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                ></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-teal-500/10 dark:via-cyber-yellow/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-1000 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
