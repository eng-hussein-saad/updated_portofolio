import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    if (!cursor || !trail) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Position cursor dot
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Position trail with slight delay (using CSS transition)
      setTimeout(() => {
        if (trail) {
          trail.style.left = `${clientX}px`;
          trail.style.top = `${clientY}px`;
        }
      }, 50);

      // Make cursor visible once we have a position
      cursor.style.opacity = "1";
      trail.style.opacity = "1";

      // Check for interactive elements
      const element = document.elementFromPoint(clientX, clientY);
      const isClickable =
        element?.tagName === "A" ||
        element?.tagName === "BUTTON" ||
        element?.closest("a") ||
        element?.closest("button");

      if (isClickable) {
        cursor.classList.add("cursor-expanded");
      } else {
        cursor.classList.remove("cursor-expanded");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed w-8 h-8 rounded-full bg-cyber-yellow/10 mix-blend-difference pointer-events-none z-50 opacity-0 transition-transform duration-300"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full bg-cyber-yellow mix-blend-difference pointer-events-none z-50 opacity-0 transition-all duration-150"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <style>
        {`
          .cursor-expanded {
            transform: translate(-50%, -50%) scale(1.5);
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
