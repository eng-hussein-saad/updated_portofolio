
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 transition-all duration-300 hover:bg-cyber-yellow/20"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-cyber-yellow" />
      ) : (
        <Moon className="h-5 w-5 text-cyber-charcoal" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
