import React from "react";
import { Heart, Sparkles, Star, UtensilsCrossed } from "lucide-react";

export function GoodFoodGoodVibes() {
  return (
    <section className="relative bg-[#17120F] text-[#F3EBDD] py-28 lg:py-36 overflow-hidden border-t border-b border-[#3A2920]">
      {/* Full-Width Background: Actual Truck Visual with Subtle Parallax Depth & Luxury Espresso Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Atmosphere"
          loading="lazy"
          className="w-full h-full object-cover object-[center_42%] filter brightness-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-[#17120F]/85 to-[#17120F]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201, 164, 92, 0.18) 0%, rgba(23, 18, 15, 0.85) 65%, #17120F 100%)",
          }}
        />
      </div>

      {/* Floating Decorative Elements inspired by Truck Branding */}
      <div className="absolute top-12 left-12 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#C9A45C]/40 rounded-full px-4 py-1.5 shadow-lg">
        <Sparkles className="size-3.5 text-[#C9A45C]" />
        <span className="font-script text-base text-[#C9A45C]">"Eat Good · Travel Far · Repeat"</span>
      </div>

      <div className="absolute top-20 right-16 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#16A34A]/50 rounded-full px-4 py-1.5 shadow-lg">
        <span className="size-2 rounded-full bg-[#16A34A]" />
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#F3EBDD]">100% Pure Veg</span>
      </div>

      <div className="absolute bottom-16 left-20 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#3A2920] rounded-full px-4 py-1.5 shadow-lg text-xs text-[#D1C2B0]">
        <Star className="size-3.5 text-[#C9A45C] fill-[#C9A45C]" />
        <span>Grand Trunk Road, Dhilwan</span>
      </div>

      <div className="absolute bottom-12 right-24 hidden lg:flex items-center gap-2 bg-[#201814]/90 backdrop-blur-md border border-[#C9A45C]/40 rounded-full px-4 py-1.5 shadow-lg">
        <span className="font-script text-base text-[#C9A45C]">"Happiness Anywhere"</span>
      </div>

      {/* Central Headline & Copy */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="size-16 sm:size-20 rounded-full border-2 border-[#C9A45C] bg-[#201814] flex items-center justify-center shadow-[0_0_30px_rgba(201,164,92,0.3)] mb-8">
          <UtensilsCrossed className="size-8 text-[#C9A45C]" />
        </div>

        <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F3EBDD] leading-tight">
          GOOD FOOD. <br />
          <span className="text-[#C9A45C] font-display">GOOD VIBES.</span>
        </h2>

        {/* Small Supporting Copy: "Come hungry. Leave happy." */}
        <p className="font-script text-2xl sm:text-3xl text-[#C9A45C] mt-5 tracking-wide">
          "Come hungry. Leave happy."
        </p>

        <p className="text-sm sm:text-base text-[#D1C2B0] mt-4 max-w-lg mx-auto leading-relaxed">
          Whether you're cruising on the highway or chilling on our rooftop glass deck with friends, every bite is crafted to bring a smile to your face.
        </p>
      </div>
    </section>
  );
}
