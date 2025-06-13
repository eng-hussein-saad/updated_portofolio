import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Github, ExternalLink, FileText, Video } from "lucide-react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "The Daily Journey",
    description: "Personal Blog Website.",
    image: "/proj_1.png",
    tags: ["Ejs", "Node.js", "Express.Js"],
    liveUrl: "#",
    url: "#",
    demoUrl: "#",
    githubUrl:
      "https://github.com/eng-hussein-saad/The-Daily-Journey-Personal-Blog-Website-",
    fullDescription:
      "Personal Blog Website built with EJS, Node.js, and Express.js. It features a clean and modern design, contains CRUD operations, and allows users to create, read, update, and delete blog posts.",
  },
  {
    id: 2,
    title: "DBMS",
    description: "DBMS using bash scripting",
    image: "/proj_3.png",
    tags: ["Bash", "Database", "Scripting"],
    liveUrl: "#",
    url: "https://github.com/eng-hussein-saad/bash-dbms/blob/main/README.md",
    demoUrl:
      "https://drive.google.com/file/d/1N0CIaJKOzH6cTqYByKIiba9vlw-ws1HB/view?usp=sharing",
    githubUrl: "https://github.com/eng-hussein-saad/bash-dbms",
    fullDescription:
      "This project aims to develop a lightweight Database Management System (DBMS) using Bash scripting. The system allows users to store and retrieve data directly from the hard disk. It features a Command Line Interface (CLI) with an intuitive menu-based navigation system.",
  },
  {
    id: 3,
    title: "Trendify",
    description:
      "E-Commerce application with user authentication and product management.",
    image: "/proj_4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://e-commerce-vanilla.vercel.app/index.html",
    url: "https://github.com/eng-hussein-saad/e-commerce-vanilla/blob/main/README.md",
    demoUrl:
      "https://drive.google.com/file/d/1bcCC0dzvJqNNEUXB6Y-Qe_Y101d0jKAv/view?usp=sharing",
    githubUrl: "https://github.com/eng-hussein-saad/e-commerce-vanilla",
    fullDescription:
      "This project is an e-commerce website developed using vanilla HTML, CSS, and JavaScript as part of the ITI ICC JavaScript Course.",
  },
  {
    id: 4,
    title: "goodReads",
    description: "Full-Stack book management web application.",
    image: "/proj_5.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://goodreads-react-8o8l.vercel.app/",
    url: "https://github.com/eng-hussein-saad/goodreads-react/blob/dev/README.md",
    demoUrl:
      "https://drive.google.com/file/d/1G3s1o563ftUmeiWYulWV3MSfL4J4tGFo/view",
    githubUrl: "https://github.com/eng-hussein-saad/goodreads-react",
    fullDescription:
      "A web application that allows users to browse, search, and review books, built with React and integrated with a Node.js backend.",
  },
  {
    id: 5,
    title: "InTrack AI",
    description:
      "A Full Stack web application that is designed to enhance operational efficiency at the Information Technology Institute (ITI) by automating student attendance tracking, managing permission requests, enabling AI-powered recovery of lost and found items, and offering robust event management features. ",
    image: "/proj_6.png",
    tags: [
      "React",
      "Django-Rest-Framework",
      "PostgreSQL",
      "Docker",
      "shadcn",
      "Tailwind",
    ],
    liveUrl:
      "http://intrack-ai-frontend-istahm-4382f9-161-156-161-124.traefik.me/",
    url: "https://drive.google.com/file/d/1vJ8EVY7uxN2OAlguy5ZtVcFJtmAUkgUT/view?usp=sharing",
    demoUrl:
      "https://drive.google.com/file/d/1MBL5L6Sh8CRCpulVdgsQO5l0irnzQK2O/view",
    githubUrl:
      "https://docs.google.com/document/d/1UJlbXumoAMwDzVcrVXGrTyGXL2D1t5kc5D-TdHLUx6A/edit?tab=t.0",
    fullDescription:
      "The system aims to automate and streamline student attendance tracking, manage permission requests, AI-Powered Service that facilitate the reporting and recovery of lost and found items, and provide comprehensive event management capabilities within the Information Technology Institute (ITI).",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="section bg-muted dark:bg-secondary/20">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-center mb-4">Projects</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A selection of my recent work across various domains and
            technologies.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={400 + index * 100}
              className="h-full"
            >
              <div
                className="group relative overflow-hidden rounded-xl h-full cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-teal-500/20 dark:bg-cyber-yellow/20 text-teal-500 dark:text-cyber-yellow text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 glass-panel h-[calc(100%-16rem)] flex flex-col">
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    {" "}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-teal-500 hover:text-teal-500/80 dark:text-cyber-yellow dark:hover:text-cyber-yellow/80 hover:bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-yellow/0 group-hover:bg-cyber-yellow/50 transition-all duration-300 group-hover:animate-pulse-glow" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="sm:max-w-3xl glass-panel">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-cyber-yellow/20 text-cyber-yellow text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6">
                {selectedProject.fullDescription}
              </p>{" "}
              <div className="flex gap-4 flex-wrap">
                {" "}
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <Button
                    className="flex items-center gap-2 bg-teal-500 dark:bg-cyber-yellow text-white dark:text-black hover:bg-teal-600 dark:hover:bg-amber-500 border-0 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Preview
                    </a>
                  </Button>
                )}{" "}
                {selectedProject.url && selectedProject.url !== "#" && (
                  <Button
                    className="flex items-center gap-2 bg-secondary dark:bg-gray-700 text-foreground hover:bg-secondary/80 dark:hover:bg-gray-600 border border-border transition-all duration-300"
                    asChild
                    variant="secondary"
                  >
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4" />
                      View Documentation
                    </a>
                  </Button>
                )}
                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                  <Button
                    className="flex items-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                    asChild
                    variant="outline"
                  >
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Video className="h-4 w-4" />
                      Watch Demo
                    </a>
                  </Button>
                )}{" "}
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
