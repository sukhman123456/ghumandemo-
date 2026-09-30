import React, { useEffect, useState } from "react";
import { Sparkles, UtensilsCrossed } from "lucide-react";

export function CinematicLoader() {
  const [visible, setVisible] = useState(true);
  const [flicker, setFlicker] = useState(false);
  const [fadeExit, setFadeExit] = useState(false);

  useEffect(() => {
    // Light flicker at 300ms
    const t1 = setTimeout(() => setFlicker(true), 300);
    // Smooth fade exit at 1200ms
    const t2 = setTimeout(() => setFadeExit(true), 1200);
    // Unmount at 1600ms
    const t3 = setTimeout(() => setVisible(false), 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading Ghumans Kitchen Express"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] transition-opacity duration-500 ${
        fadeExit ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background warm headlight beam expanding */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          flicker ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(217, 164, 65, 0.28) 0%, rgba(138, 90, 59, 0.12) 40%, transparent 70%)",
        }}
      />

      {/* Headlight cone rays */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none transition-all duration-700 ${
          flicker ? "scale-100 opacity-60" : "scale-75 opacity-10"
        }`}
        style={{
          background:
            "radial-gradient(circle, rgba(245, 240, 230, 0.15) 0%, rgba(217, 164, 65, 0.08) 50%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />

      {/* Center glowing logo and truck vibe */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glowing circular badge inspired by the real truck sign */}
        <div
          className={`size-24 sm:size-28 rounded-full border-2 border-[#D9A441] bg-[#171411] flex items-center justify-center shadow-[0_0_35px_rgba(217,164,65,0.45)] transition-all duration-500 ${
            flicker ? "scale-100 opacity-100" : "scale-90 opacity-40"
          }`}
        >
          <div className="flex flex-col items-center text-[#D9A441]">
            <UtensilsCrossed className="size-7 sm:size-8 animate-pulse text-[#D9A441]" />
            <span className="font-display font-black text-[10px] tracking-widest mt-1 text-[#F5F0E6]">
              PURE VEG
            </span>
          </div>
        </div>

        {/* Brand name reveal */}
        <div className="mt-5 overflow-hidden">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-[#D9A441]/60" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#D9A441]">
              FOOD ON WHEELS
            </span>
            <span className="h-px w-6 bg-[#D9A441]/60" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-[#F5F0E6] mt-2">
            GHUMANS
            <span className="block font-sans text-xs tracking-[0.35em] text-[#D9A441] mt-0.5 font-medium">
              KITCHEN EXPRESS
            </span>
          </h1>
        </div>

        {/* Subtle engine/road progress line */}
        <div className="mt-6 w-36 h-[2px] bg-[#332B23] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#D9A441] via-[#F5F0E6] to-[#D9A441] transition-all duration-1000 ease-out"
            style={{ width: flicker ? "100%" : "20%" }}
          />
        </div>

        <p className="font-script text-base text-[#D9A441] mt-3 tracking-wide flex items-center gap-1.5">
          <Sparkles className="size-3.5" />
          Good Food. Happier People.
        </p>
      </div>

      {/* Skip button for instant responsiveness */}
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-[#A89E92] hover:text-[#D9A441] transition-colors py-1 px-2"
      >
        Skip intro &rarr;
      </button>
    </div>
  );
}
