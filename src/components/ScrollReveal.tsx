
import React, { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = "up",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible-element");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  let initialClass = "hidden-element";
  
  if (direction === "down") {
    initialClass = "opacity-0 -translate-y-[50px] transition-all duration-700";
  } else if (direction === "left") {
    initialClass = "opacity-0 translate-x-[50px] transition-all duration-700";
  } else if (direction === "right") {
    initialClass = "opacity-0 -translate-x-[50px] transition-all duration-700";
  }

  return (
    <div ref={elementRef} className={cn(initialClass, className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
