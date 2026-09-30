import React from "react";
import { Heart, Sparkles, Star, UtensilsCrossed } from "lucide-react";

export function GoodFoodGoodVibes() {
  return (
    <section className="relative bg-[#0D0D0D] text-[#F5F0E6] py-28 lg:py-36 overflow-hidden border-t border-b border-[#332B23]">
      {/* Full-Width Background: Actual Truck Visual with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Atmosphere"
          loading="lazy"
          className="w-full h-full object-cover object-[center_42%] filter brightness-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/85 to-[#0D0D0D]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(217, 164, 65, 0.22) 0%, rgba(13, 13, 13, 0.8) 65%, #0D0D0D 100%)",
          }}
        />
      </div>

      {/* Floating Decorative Elements inspired by Truck Branding */}
      <div className="absolute top-12 left-12 hidden lg:flex items-center gap-2 bg-[#171411]/90 backdrop-blur-md border border-[#D9A441]/40 rounded-full px-4 py-1.5 shadow-lg animate-pulse">
        <Sparkles className="size-3.5 text-[#D9A441]" />
        <span className="font-script text-base text-[#D9A441]">"Eat Good · Travel Far · Repeat"</span>
      </div>

      <div className="absolute top-20 right-16 hidden lg:flex items-center gap-2 bg-[#171411]/90 backdrop-blur-md border border-[#16A34A]/50 rounded-full px-4 py-1.5 shadow-lg">
        <span className="size-2 rounded-full bg-[#16A34A]" />
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5F0E6]">100% Pure Veg</span>
      </div>

      <div className="absolute bottom-16 left-20 hidden lg:flex items-center gap-2 bg-[#171411]/90 backdrop-blur-md border border-[#332B23] rounded-full px-4 py-1.5 shadow-lg text-xs text-[#A89E92]">
        <Star className="size-3.5 text-[#D9A441] fill-[#D9A441]" />
        <span>Grand Trunk Road, Dhilwan</span>
      </div>

      <div className="absolute bottom-12 right-24 hidden lg:flex items-center gap-2 bg-[#171411]/90 backdrop-blur-md border border-[#D9A441]/40 rounded-full px-4 py-1.5 shadow-lg">
        <span className="font-script text-base text-[#D9A441]">"Happiness Anywhere"</span>
      </div>

      {/* Central Headline & Copy */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="size-16 sm:size-20 rounded-full border-2 border-[#D9A441] bg-[#171411] flex items-center justify-center shadow-[0_0_30px_rgba(217,164,65,0.4)] mb-8">
          <UtensilsCrossed className="size-8 text-[#D9A441]" />
        </div>

        <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F0E6] leading-tight">
          GOOD FOOD. <br />
          <span className="text-[#D9A441] font-display">GOOD VIBES.</span>
        </h2>

        {/* Small Supporting Copy: "Come hungry. Leave happy." */}
        <p className="font-script text-2xl sm:text-3xl text-[#D9A441] mt-5 tracking-wide">
          "Come hungry. Leave happy."
        </p>

        <p className="text-sm sm:text-base text-[#A89E92] mt-4 max-w-lg mx-auto leading-relaxed">
          Whether you're cruising on the highway or chilling on our rooftop glass deck with friends, every bite is crafted to bring a smile to your face.
        </p>
      </div>
    </section>
  );
}
