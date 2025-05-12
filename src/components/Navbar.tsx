import React, { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrollY > 50
          ? "py-3 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-teal-100/20 dark:border-cyber-yellow/10 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          {" "}
          <div className="hexagon h-10 w-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600 dark:from-cyber-yellow dark:to-amber-500 border-2 border-teal-400 dark:border-cyber-yellow shadow-md transition-all duration-300 group-hover:shadow-teal-500/30 dark:group-hover:shadow-cyber-yellow/30">
            <Code className="h-5 w-5 text-white dark:text-black" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight hover:text-teal-700 dark:hover:text-cyber-yellow transition-colors">
            Eng Hussein Saad
          </span>
        </a>{" "}
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium py-2 px-1 transition-all duration-300",
                activeSection === link.href.substring(1)
                  ? "text-teal-700 dark:text-cyber-yellow font-semibold"
                  : "text-foreground hover:text-teal-700 dark:hover:text-cyber-yellow"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 dark:bg-cyber-yellow transform transition-transform duration-300",
                  activeSection === link.href.substring(1)
                    ? "scale-x-100"
                    : "scale-x-0 hover:scale-x-100 opacity-80"
                )}
              />
            </a>
          ))}
          {/* <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div> */}
          {/* <ThemeSwitcher /> */}
        </div>{" "}
        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          {/* <ThemeSwitcher />{" "} */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg border border-teal-300/20 dark:border-cyber-yellow/20 hover:bg-teal-500/10 dark:hover:bg-cyber-yellow/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-teal-700 dark:text-cyber-yellow" />
            ) : (
              <Menu className="h-5 w-5 text-teal-700 dark:text-cyber-yellow" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}{" "}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-md border-t border-teal-100/20 dark:border-cyber-yellow/10",
          isMenuOpen
            ? "max-h-[300px] py-4 px-6 bg-white/90 dark:bg-black/90 opacity-100 shadow-lg"
            : "max-h-0 py-0 px-6 opacity-0"
        )}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium py-3 border-b border-teal-100/10 dark:border-gray-800/50 transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-teal-700 dark:text-cyber-yellow font-semibold"
                  : "text-foreground hover:text-teal-700 dark:hover:text-cyber-yellow"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
