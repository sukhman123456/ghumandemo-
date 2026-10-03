import React, { useEffect, useState } from "react";
import { Heart, Music, Sparkles, Star, UtensilsCrossed, Volume2, Zap } from "lucide-react";

export function GoodFoodGoodVibes() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Rotating mood taglines that fit "GOOD FOOD. GOOD VIBES."
  const vibeTags = [
    "GOOD VIBES.",
    "GREAT MEMORIES.",
    "HAPPIER PEOPLE.",
    "HIGHWAY NIGHTS.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % vibeTags.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="good-vibes"
      className="relative bg-[#17120F] text-[#F3EBDD] py-28 lg:py-36 overflow-hidden border-t border-b border-[#3A2920] select-none"
    >
      <style>{`
        /* Dynamic Metallic Gold & Cream Shimmer Animations */
        @keyframes textGoldSweep {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shimmer-headline-cream {
          background: linear-gradient(
            110deg,
            #F3EBDD 15%,
            #FFFFFF 30%,
            #E8C88B 45%,
            #FFFFFF 60%,
            #F3EBDD 85%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGoldSweep 6s ease-in-out infinite;
        }

        .shimmer-headline-gold {
          background: linear-gradient(
            110deg,
            #C9A45C 10%,
            #FFE6A3 30%,
            #D4AF67 48%,
            #FFF8E1 65%,
            #BA8E3E 85%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textGoldSweep 4.5s ease-in-out infinite reverse;
        }

        /* Floating Bobbing Badges */
        @keyframes floatSlow1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes floatSlow2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-1.5deg); }
        }
        .float-badge-1 {
          animation: floatSlow1 5.5s ease-in-out infinite;
        }
        .float-badge-2 {
          animation: floatSlow2 6.5s ease-in-out infinite;
        }

        /* Ambient Headlight Fairy Light Orbs */
        @keyframes ambientPulse {
          0%, 100% { transform: scale(1); opacity: 0.18; }
          50% { transform: scale(1.15); opacity: 0.32; }
        }
        .ambient-glow-orb {
          animation: ambientPulse 5s ease-in-out infinite;
        }

        /* Rotating Dashed Ring around Badge */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-dashed-ring {
          animation: spinSlow 24s linear infinite;
        }

        /* Vibe Equalizer Bars */
        @keyframes equalizerBar {
          0%, 100% { height: 6px; }
          50% { height: 22px; }
        }
        .eq-bar-1 { animation: equalizerBar 1.1s ease-in-out infinite 0.1s; }
        .eq-bar-2 { animation: equalizerBar 0.9s ease-in-out infinite 0.3s; }
        .eq-bar-3 { animation: equalizerBar 1.3s ease-in-out infinite 0.2s; }
        .eq-bar-4 { animation: equalizerBar 0.8s ease-in-out infinite 0.4s; }
        .eq-bar-5 { animation: equalizerBar 1.2s ease-in-out infinite 0.15s; }

        /* Smooth Hand-drawn Script Underline */
        @keyframes drawUnderline {
          0%, 10% { stroke-dashoffset: 280; opacity: 0.2; }
          50%, 80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -280; opacity: 0.2; }
        }
        .script-underline-path {
          stroke-dasharray: 280;
          animation: drawUnderline 6s ease-in-out infinite;
        }
      `}</style>

      {/* Full-Width Background: Actual Truck Visual with Ambient Vignette & Fairy Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Atmosphere"
          loading="lazy"
          className="w-full h-full object-cover object-[center_42%] filter brightness-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-[#17120F]/85 to-[#17120F]" />
        
        {/* Pulsing Warm Gold Radial Center Glow */}
        <div
          className="absolute inset-0 ambient-glow-orb"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201, 164, 92, 0.28) 0%, rgba(58, 41, 32, 0.2) 45%, transparent 75%)",
          }}
        />

        {/* Ambient Highway Fairy Dust Particles */}
        <div className="absolute top-1/4 left-1/5 size-2 rounded-full bg-[#FFE8B6] blur-[1px] opacity-70 animate-ping" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/3 right-1/4 size-2.5 rounded-full bg-[#C9A45C] blur-[1px] opacity-60 animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 left-1/3 size-1.5 rounded-full bg-[#FFE8B6] blur-[1px] opacity-50 animate-ping" style={{ animationDuration: "2.5s" }} />
      </div>

      {/* 4 Floating Decorative Highway Badges (Responsive) */}
      <div className="absolute top-10 left-8 sm:left-14 hidden lg:flex items-center gap-2.5 bg-[#201814]/90 backdrop-blur-md border border-[#C9A45C]/50 rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.6)] float-badge-1 z-10">
        <Sparkles className="size-4 text-[#C9A45C] animate-pulse" />
        <span className="font-script text-base text-[#C9A45C] tracking-wide">
          "Eat Good · Travel Far · Repeat"
        </span>
      </div>

      <div className="absolute top-16 right-8 sm:right-16 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#16A34A]/60 rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.6)] float-badge-2 z-10">
        <span className="size-2 rounded-full bg-[#16A34A] animate-ping" />
        <span className="text-[11px] uppercase font-black tracking-widest text-[#F3EBDD]">
          100% PURE VEG SANCTUARY
        </span>
      </div>

      <div className="absolute bottom-14 left-8 sm:left-20 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#3A2920] rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.6)] text-xs text-[#D1C2B0] float-badge-2 z-10">
        <Star className="size-3.5 text-[#C9A45C] fill-[#C9A45C]" />
        <span className="font-semibold">Grand Trunk Road, Dhilwan</span>
      </div>

      <div className="absolute bottom-12 right-12 sm:right-24 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#C9A45C]/50 rounded-full px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.6)] float-badge-1 z-10">
        <Heart className="size-3.5 text-[#C9A45C] fill-[#C9A45C]/40" />
        <span className="font-script text-base text-[#C9A45C] tracking-wide">
          "Happiness In Every Box"
        </span>
      </div>

      {/* Main Central Headline & Animated Typography */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Spinning Emblem Beacon */}
        <div
          className="relative size-20 sm:size-24 rounded-full flex items-center justify-center mb-8 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Ghumans Food on Wheels"
        >
          {/* Outer Pulsing Golden Halo */}
          <span className="absolute -inset-2 rounded-full bg-[#C9A45C]/25 blur-md animate-pulse" />

          {/* Outer Rotating Dashed Ring */}
          <svg className="absolute inset-0 size-full spin-dashed-ring pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#C9A45C"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.8"
            />
          </svg>

          {/* Inner Badge Container with Official Logo */}
          <div className="size-16 sm:size-20 rounded-full bg-[#201814] border-2 border-[#D4AF67] flex items-center justify-center shadow-[0_0_35px_rgba(201,164,92,0.45)] group-hover:scale-110 transition-transform duration-300 p-1">
            <img
              src="/ghuman-logo.svg"
              alt="Ghumans Kitchen Express Emblem"
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Primary Animated Kinetic Headlines */}
        <div className="space-y-1 sm:space-y-2">
          {/* Row 1: GOOD FOOD. with Cream-to-Gold Shimmer */}
          <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase filter drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            <span className="inline-block shimmer-headline-cream hover:scale-105 transition-transform duration-300">
              GOOD FOOD.
            </span>
          </h2>

          {/* Row 2: Rotating Vibe Word with Audio Equalizer & Gold Shimmer */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2">
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase filter drop-shadow-[0_4px_24px_rgba(201,164,92,0.4)]">
              <span className="inline-block shimmer-headline-gold transition-all duration-500 hover:scale-105">
                {vibeTags[activeWordIndex]}
              </span>
            </h2>

            {/* Highway Party Sound Equalizer Indicator */}
            <div
              className="inline-flex items-end gap-1 h-7 sm:h-9 px-2.5 py-1 rounded-full bg-[#201814]/90 border border-[#C9A45C]/50 shadow-md"
              title="Highway vibes & rhythm"
            >
              <div className="w-1 bg-[#C9A45C] rounded-full eq-bar-1" />
              <div className="w-1 bg-[#E8C88B] rounded-full eq-bar-2" />
              <div className="w-1 bg-[#FFE8B6] rounded-full eq-bar-3" />
              <div className="w-1 bg-[#D4AF67] rounded-full eq-bar-4" />
              <div className="w-1 bg-[#C9A45C] rounded-full eq-bar-5" />
            </div>
          </div>
        </div>

        {/* Animated Script Slogan with Hand-Drawn SVG Underline */}
        <div className="relative mt-7 sm:mt-8">
          <p className="font-script text-2xl sm:text-4xl text-[#E8C88B] tracking-wide filter drop-shadow-[0_2px_10px_rgba(201,164,92,0.3)]">
            "Come hungry. Leave happy."
          </p>

          {/* Golden Animated Flowing Underline */}
          <svg
            className="w-56 sm:w-72 h-3.5 mx-auto mt-1 pointer-events-none overflow-visible"
            viewBox="0 0 280 14"
            fill="none"
          >
            <path
              d="M 10,8 Q 70,1 140,7 Q 210,13 270,6"
              stroke="#C9A45C"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="script-underline-path"
            />
          </svg>
        </div>

        {/* Supporting Narrative */}
        <p className="text-sm sm:text-base md:text-lg text-[#D1C2B0] mt-5 max-w-xl mx-auto leading-relaxed font-sans">
          Whether you're cruising on the Grand Trunk Road or chilling on our rooftop glass deck with friends, every sizzle, crunch and bite is crafted to bring a smile to your face.
        </p>

        {/* Subtle Interactive Vibe Selector Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {vibeTags.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveWordIndex(idx)}
              aria-label={`Switch to vibe phrase ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeWordIndex === idx
                  ? "w-8 bg-[#C9A45C] shadow-[0_0_10px_#C9A45C]"
                  : "w-2 bg-[#3A2920] hover:bg-[#C9A45C]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
