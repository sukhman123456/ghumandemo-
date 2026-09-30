import React from "react";
import { Award, Clock, Heart, Leaf, MapPin, ShieldCheck, Sparkles, Utensils } from "lucide-react";

export function BrandStory() {
  const pillars = [
    {
      icon: Leaf,
      title: "100% PURE VEG",
      desc: "Strictly vegetarian kitchen with zero meat, dedicated griddles, and certified ingredients.",
      badge: "Pure Veg Guaranteed",
    },
    {
      icon: Clock,
      title: "FRESHLY PREPARED",
      desc: "Every burger griddled, pizza hand-stretched and wrap rolled only upon your order.",
      badge: "Made to Order",
    },
    {
      icon: Utensils,
      title: "BIG FLAVOUR",
      desc: "Bold Punjabi spices meet gourmet street speed. Big punch in every single bite.",
      badge: "Signature Spices",
    },
    {
      icon: Heart,
      title: "GOOD VIBES",
      desc: "A double-decker food truck hangout designed for highway road trips, friends & families.",
      badge: "Rooftop Deck",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0D0D0D] text-[#F5F0E6] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              <span className="h-px w-6 bg-[#D9A441]" />
              BRAND PHILOSOPHY
            </div>

            {/* Section Title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F0E6] mt-4 leading-tight">
              MORE THAN <br />
              <span className="text-[#D9A441]">JUST FOOD</span>
            </h2>

            {/* Core Copy */}
            <p className="text-base sm:text-lg text-[#F5F0E6]/90 mt-5 leading-relaxed font-normal">
              Ghumans Kitchen Express brings together fresh ingredients, bold flavours and the energy of food on wheels.
            </p>

            <p className="text-sm text-[#A89E92] mt-4 leading-relaxed">
              Stationed prominently on the historic Grand Trunk Road in Dhilwan near the Toll Plaza, our custom-engineered double-decker kitchen is Punjab’s premier roadside food stop. Whether you are driving between Jalandhar and Amritsar or craving a late-night street bite, Ghumans serves happiness in every box.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#171411] border border-[#332B23] hover:border-[#D9A441]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-[#201C18] border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441]">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-xs font-bold text-[#D9A441] tracking-wider uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#F5F0E6] mt-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A89E92] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High Detail Cropped Portion of the Actual Food Truck */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Gold Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D9A441]/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-[#171411]">
              <img
                src="/ghumans-truck.jpg"
                alt="Ghumans Kitchen Express detail showing chef mascot logo and lower counter"
                className="w-full h-[480px] sm:h-[540px] object-cover object-[55%_45%] hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none" />

              {/* Float Badge 1: Top Script Sticker */}
              <div className="absolute top-4 left-4 bg-[#171411]/95 backdrop-blur-md border border-[#D9A441]/40 rounded-full px-4 py-1.5 shadow-lg">
                <span className="font-script text-base text-[#D9A441] flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  "Serving Good Times One Bite at a Time"
                </span>
              </div>

              {/* Float Badge 2: Overlapping Real Rooftop Dining Inset */}
              <div className="absolute bottom-4 right-4 z-20 w-44 sm:w-56 rounded-xl overflow-hidden border-2 border-[#D9A441] bg-[#171411]/95 shadow-2xl backdrop-blur-md p-1.5 group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src="/rooftop-dining.jpg"
                    alt="Upper deck rooftop dining seating at Ghumans Kitchen Express"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-1.5 left-2 text-[9px] sm:text-[10px] font-bold text-[#F5F0E6] uppercase tracking-wider">
                    Rooftop Deck Inside
                  </span>
                </div>
              </div>

              {/* Float Badge 3: GT Road Toll Plaza Location */}
              <div className="absolute bottom-4 left-4 right-52 sm:right-64 bg-[#171411]/95 backdrop-blur-md border border-[#332B23] rounded-xl p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="size-8 sm:size-10 rounded-full bg-[#D9A441]/15 border border-[#D9A441] flex items-center justify-center shrink-0">
                    <MapPin className="size-4 sm:size-5 text-[#D9A441]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#D9A441] block truncate">
                      GRAND TRUNK ROAD
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#F5F0E6] block truncate">
                      Next to Toll Plaza, Dhilwan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D9A441]/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
