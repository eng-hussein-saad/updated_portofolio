import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  // Initialize with user preference or default to dark mode
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if there's a theme saved in localStorage
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    // Default to dark mode instead of checking system preference
    return "dark";
  });

  // Apply dark mode class immediately on component mount
  useEffect(() => {
    // Ensure dark mode is applied on initial render
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    window.localStorage.setItem("theme", theme);
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
