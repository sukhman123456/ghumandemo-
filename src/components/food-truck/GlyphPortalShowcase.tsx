import React, { useState } from "react";
import { Sparkles, Compass, Eye, ArrowRight, UtensilsCrossed } from "lucide-react";
import Demo from "@/components/ui/demo";
import GlyphPortal from "@/components/ui/glyph-portal";

export function GlyphPortalShowcase() {
  const [activeTab, setActiveTab] = useState<"demo" | "ghumans">("demo");

  return (
    <section id="portal" className="relative bg-[#0D0D0D] text-[#F5F0E6] py-20 lg:py-28 overflow-hidden border-t border-[#26221D]">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #D9A441 0%, #16A34A 50%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
            <Sparkles className="size-3.5 text-[#D9A441]" />
            SCROLL-DRIVEN CAMERA COMPONENT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F0E6] mt-3">
            STEP INSIDE <span className="text-[#D9A441]">THE PORTAL</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A89E92] mt-3">
            A scroll-driven camera through live type. Hover or tap any letter below, then scroll inside the container to step through the ink into the scene.
          </p>

          {/* Interactive Mode Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-[#171411] border border-[#332B23]">
            <button
              type="button"
              onClick={() => setActiveTab("demo")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === "demo"
                  ? "bg-[#D9A441] text-[#0D0D0D] shadow-[0_2px_10px_rgba(217,164,65,0.4)]"
                  : "text-[#A89E92] hover:text-[#F5F0E6]"
              }`}
            >
              <Eye className="size-3.5" />
              <span>Original Demo (SUBLIME)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ghumans")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeTab === "ghumans"
                  ? "bg-[#D9A441] text-[#0D0D0D] shadow-[0_2px_10px_rgba(217,164,65,0.4)]"
                  : "text-[#A89E92] hover:text-[#F5F0E6]"
              }`}
            >
              <UtensilsCrossed className="size-3.5" />
              <span>Ghumans Food Edition</span>
            </button>
          </div>
        </div>

        {/* Display Container with Window Mockup Frame */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#332B23] bg-[#12100E] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#26221D] bg-[#171411]">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#EF4444]/80" />
              <span className="size-3 rounded-full bg-[#EAB308]/80" />
              <span className="size-3 rounded-full bg-[#22C55E]/80" />
              <span className="ml-3 text-[11px] font-mono text-[#736B63] hidden sm:inline">
                {activeTab === "demo" ? "@/components/ui/demo.tsx" : "@/components/ui/glyph-portal.tsx"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#A89E92]">
              <Compass className="size-3.5 text-[#D9A441] animate-spin-slow" />
              <span className="hidden sm:inline">Scroll inside box to animate</span>
            </div>
          </div>

          {/* Interactive Component Body */}
          <div className="relative">
            {activeTab === "demo" ? (
              <Demo />
            ) : (
              <div
                data-demo-scroll
                className="w-full h-[620px] max-h-[85vh] overflow-y-auto bg-[#0A0908] text-[#F5F0E6]"
                tabIndex={0}
                role="region"
                aria-label="Ghumans Kitchen Express. Scroll to step inside."
              >
                <GlyphPortal
                  word="GHUMANS"
                  scrollLength={2.6}
                  interactive={true}
                  enterLabel="Enter Ghumans"
                  background={
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
                        alt="Restaurant ambiance"
                        className="w-full h-full object-cover brightness-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/60 to-transparent" />
                    </div>
                  }
                  front={
                    <div className="absolute inset-0 flex flex-col items-center justify-between p-8 sm:p-12 pointer-events-none">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
                        <UtensilsCrossed className="size-4 text-[#D9A441]" />
                        <span>GHUMANS KITCHEN EXPRESS</span>
                      </div>
                      <div className="text-center space-y-2 pointer-events-auto">
                        <p className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">
                          Grand Trunk Road • Pure Vegetarian
                        </p>
                        <p className="text-sm sm:text-base text-[#D4C9BC] max-w-md mx-auto">
                          Click any letter above, then scroll downward to step directly into our kitchen story.
                        </p>
                      </div>
                      <div className="text-[11px] tracking-wider text-[#A89E92]">
                        Scroll down to enter ↓
                      </div>
                    </div>
                  }
                >
                  <div className="max-w-2xl mx-auto py-12 px-6 text-center space-y-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 text-[#D9A441] text-xs font-bold uppercase tracking-wider">
                      Welcome to Ghumans
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F5F0E6]">
                      Highway Bites. Rooftop Vibes.
                    </h3>
                    <p className="text-sm sm:text-base text-[#D4C9BC] leading-relaxed">
                      Freshly hand-tossed artisan pizzas, crispy grilled burgers, loaded peri-peri fries, and ice-cold shakes served straight from our iconic double-decker food truck in Dhilwan.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                      <a
                        href="#menu"
                        className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#D9A441] to-[#E8B452] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0D0D0D] shadow-lg hover:brightness-110 transition-all"
                      >
                        <span>EXPLORE OUR MENU</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </GlyphPortal>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
