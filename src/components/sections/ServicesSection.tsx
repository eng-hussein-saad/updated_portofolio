import React from "react";
import ScrollReveal from "../ScrollReveal";
import { Code, Database, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import OdooLogo from "../icons/OdooLogo";

const services = [
  {
    title: "Frontend Development",
    icon: Code,
    description:
      "Building modern, responsive user interfaces with React, Next.js and TypeScript.",
    details: [
      "Single Page Applications (SPAs)",
      "Server Side Rendering (SSR)",
      "Progressive Web Apps (PWAs)",
      "Responsive Web Design",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    description:
      "Creating robust server-side applications with Node.js, Express, Django and PostgreSQL.",
    details: [
      "RESTful API Development",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Server-side Logic",
      "API Integration",
    ],
  },
  {
    title: "Odoo Development",
    icon: ({ className }) => <OdooLogo className={className} />,
    description:
      "Customizing and extending Odoo ERP to meet specific business requirements and processes.",
    details: [
      "Module Development",
      "Business Process Modeling",
      "Custom Reports & Dashboards",
      "Integration with External Systems",
      "User Training & Support",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-center mb-4">Services</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Specialized services to help businesses and individuals bring their
            digital visions to life.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={400 + index * 200}>
              {/* Card wrapper with hover state */}
              <div className="service-card-wrapper">
                <div className="relative h-[400px] perspective-1000">
                  <div className="card-3d h-full w-full">
                    {/* Card Front */}
                    <div className="card-front glass-panel p-6 rounded-xl flex flex-col items-center justify-center cyber-border">
                      {" "}
                      <div className="w-20 h-20 rounded-full bg-teal-500/20 dark:bg-cyber-yellow/20 flex items-center justify-center mb-6">
                        <service.icon className="h-10 w-10 text-teal-500 dark:text-cyber-yellow" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-center text-muted-foreground">
                        {service.description}
                      </p>{" "}
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-1 bg-teal-500/50 dark:bg-cyber-yellow/50",
                          "animate-pulse-glow"
                        )}
                      />
                    </div>

                    {/* Card Back */}
                    <div className="card-back glass-panel p-6 rounded-xl cyber-border">
                      <h3 className="text-xl font-bold mb-6 text-center text-teal-500 dark:text-cyber-yellow">
                        {service.title}
                      </h3>

                      <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 mt-1.5 mr-2 bg-teal-500 dark:bg-cyber-yellow rounded-full" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
