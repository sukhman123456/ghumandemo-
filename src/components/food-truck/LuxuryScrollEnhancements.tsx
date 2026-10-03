import React, { useEffect, useState } from "react";

export function LuxuryScrollEnhancements() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Section reveal observer: smooth fade-in as user scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".section-reveal");
    revealElements.forEach((el) => {
      observer.observe(el);
      // If already in or near viewport on mount, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add("is-visible");
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Subtle Cinematic Film Grain (Ultra-low opacity, non-interactive) */}
      <div className="film-grain" aria-hidden="true" />

      {/* 2. Thin Elegant Champagne-Gold Scroll Spine on Right Edge */}
      <div className="champagne-scroll-spine" aria-hidden="true">
        <div
          className="champagne-scroll-progress"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* 3. Soft Champagne-Gold Ambient Light Sweep (Contained strictly to prevent horizontal overflow) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div
          className="champagne-light-sweep absolute -top-[20vw] -left-[10vw] w-[50vw] h-[50vw] opacity-15"
          style={{
            transform: `translate3d(0, ${scrollProgress * 4.5}px, 0)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <div
          className="champagne-light-sweep absolute top-[45vh] -right-[15vw] w-[45vw] h-[45vw] opacity-10"
          style={{
            transform: `translate3d(0, ${-scrollProgress * 3.5}px, 0)`,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </>
  );
}
