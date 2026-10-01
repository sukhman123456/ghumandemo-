import React from "react";
import { CheckCircle2, Flame, HeartHandshake, Leaf, Smile, Sparkles } from "lucide-react";

export function ExperiencePoints() {
  const points = [
    {
      number: "01",
      icon: Leaf,
      title: "PURE VEG",
      subtitle: "Zero Meat, Zero Compromise",
      description: "Dedicated 100% vegetarian kitchen with separate prep areas, premium paneer, farm-fresh produce and certified culinary integrity.",
    },
    {
      number: "02",
      icon: Flame,
      title: "FRESHLY MADE",
      subtitle: "Made Hot to Order",
      description: "No pre-fried patties or reheated pizzas. Hand-stretched dough, sizzling hot griddle burgers and fresh wraps rolled right as you order.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "BIG FLAVOUR",
      subtitle: "Street Soul & Gourmet Punch",
      description: "Authentic Punjabi spice marinades, house secret cheese sauces, fiery peri-peri dust and ice-cold shakes that hit the spot.",
    },
    {
      number: "04",
      icon: Smile,
      title: "HAPPY MOMENTS",
      subtitle: "Double-Decker Hangout",
      description: "A highway oasis with a glass-enclosed upper deck, evening fairy lights, open air road vibes and smiles with every single order.",
    },
  ];

  return (
    <section className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-[#3A2920]">
      {/* Background Subtle Champagne Ambient Glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none opacity-10 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #C9A45C 0%, #3A2920 50%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
            <HeartHandshake className="size-3.5 text-[#C9A45C]" />
            THE FOOD TRUCK EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
            GOOD FOOD. <br className="sm:hidden" />
            <span className="text-[#C9A45C]">GOOD VIBES.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D1C2B0] mt-3">
            Why road-trippers, foodies, and highway travelers make Ghumans their favorite stop on the GT Road.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="group p-6 sm:p-7 rounded-2xl bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(23,18,15,0.85)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-2xl text-[#C9A45C]/50 group-hover:text-[#C9A45C] transition-colors">
                      {pt.number}
                    </span>
                    <div className="size-10 rounded-xl bg-[#281F1A] border border-[#3A2920] flex items-center justify-center text-[#C9A45C] group-hover:scale-110 group-hover:border-[#C9A45C] transition-all">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl text-[#F3EBDD] mt-6 tracking-wide group-hover:text-[#C9A45C] transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C9A45C] mt-1 font-script text-base">
                    {pt.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D1C2B0] mt-3 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#3A2920]/60 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#C9A45C]">
                  <CheckCircle2 className="size-3.5 text-[#2E8B57]" />
                  <span>The Ghumans Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
