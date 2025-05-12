
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className,
  delay = 0,
  speed = 50,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Delay start of typing
    timeoutId = setTimeout(() => {
      setIsTyping(true);
      
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [text, delay, speed]);

  return (
    <span 
      className={cn(
        "inline-block",
        isTyping ? "typewriter cursor-blink" : "",
        className
      )}
    >
      {displayedText}
    </span>
  );
};

export default TypewriterText;
