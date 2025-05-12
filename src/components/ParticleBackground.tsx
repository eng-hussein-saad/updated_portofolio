
import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 20;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle(container, particles);
    }

    // Re-use particles when they complete animation
    const handleAnimationEnd = (event: AnimationEvent) => {
      const particle = event.target as HTMLDivElement;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = "100%";
      particle.style.opacity = "0";
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = `${Math.random() * 5 + 2}px`;
      particle.style.animationDuration = `${Math.random() * 30 + 10}s`;
      particle.style.animationDelay = "0s";
    };

    // Add event listeners
    particles.forEach(particle => {
      particle.addEventListener("animationend", handleAnimationEnd);
    });

    // Cleanup
    return () => {
      particles.forEach(particle => {
        particle.removeEventListener("animationend", handleAnimationEnd);
        particle.remove();
      });
    };
  }, []);

  const createParticle = (
    container: HTMLDivElement,
    particles: HTMLDivElement[]
  ) => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    // Random properties
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = "100%";
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.animationDuration = `${Math.random() * 30 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particle.style.opacity = "0";

    // Add animation class
    particle.classList.add("animate-particle-flow");
    
    container.appendChild(particle);
    particles.push(particle);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
