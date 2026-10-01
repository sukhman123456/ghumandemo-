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

    // Section reveal observer: subtle blur-to-sharp & 0.985 -> 1 scale
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".section-reveal");
    revealElements.forEach((el) => observer.observe(el));

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

      {/* 3. Soft Champagne-Gold Ambient Light Sweep (Moves gently with scroll) */}
      <div
        className="champagne-light-sweep fixed -top-[20vw] -left-[10vw] w-[50vw] h-[50vw] z-0 opacity-15"
        style={{
          transform: `translate3d(0, ${scrollProgress * 4.5}px, 0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      />
      <div
        className="champagne-light-sweep fixed top-[45vh] -right-[15vw] w-[45vw] h-[45vw] z-0 opacity-10"
        style={{
          transform: `translate3d(0, ${-scrollProgress * 3.5}px, 0)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
