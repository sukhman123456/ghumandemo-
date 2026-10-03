import React from "react";
import { ArrowDown, Flame, Sparkles, Utensils, Star, ShieldCheck, Clock, Award } from "lucide-react";
import { useOrder } from "../food-truck/OrderContext";

export function HeroSection() {
  const { openOrderDrawer } = useOrder();

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#7F1D1D] via-[#5B0C16] to-[#FAF4E8]"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F59E0B]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-[#FBBF24]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Brand Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] text-[#16A34A] text-xs font-black tracking-wide border border-[#16A34A]/30 shadow-sm">
                <span className="veg-badge" />
                100% PURE VEGETARIAN
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-extrabold tracking-wide border border-[#F59E0B]/40 shadow-sm">
                <Sparkles className="size-3.5 text-[#D97706]" />
                Starting at just ₹50
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#450A0A]/80 text-[#FDE68A] text-xs font-semibold border border-[#F59E0B]/20">
                <Clock className="size-3.5 text-[#F59E0B]" />
                Live Stone-Baked & Griddled
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#FFFDF8] tracking-tight leading-[1.08] drop-shadow-md">
              GHUMANS <br />
              <span className="text-[#FBBF24] inline-block relative">
                KITCHEN EXPRESS
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#F59E0B] rounded-full" />
              </span>
            </h1>

            {/* Tagline Subheading */}
            <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-[#FEF3C7] tracking-wide flex items-center justify-center lg:justify-start gap-2">
              <Flame className="size-6 text-[#F59E0B] fill-[#F59E0B] shrink-0 animate-pulse" />
              <span>Where Cravings Get Expressed</span>
            </p>

            {/* Supporting Text */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#FDE68A]/90 max-w-2xl leading-relaxed font-normal">
              Fresh pizzas, burgers, wraps, fries, shakes and more — made to satisfy every craving.
              Stationed prominently on Grand Trunk Road, Dhilwan near the Toll Plaza. Pure vegetarian culinary speed with authentic taste.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] font-black text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <Utensils className="size-4 group-hover:rotate-12 transition-transform" />
                VIEW MENU
                <ArrowDown className="size-4 animate-bounce" />
              </a>

              <button
                onClick={() => openOrderDrawer()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFDF8] hover:bg-[#FEF3C7] text-[#7F1D1D] font-black text-sm uppercase tracking-wider shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Flame className="size-4 text-[#F59E0B] fill-[#F59E0B]" />
                ORDER NOW
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="mt-10 pt-6 border-t border-[#FFFDF8]/15 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-[#FFFDF8]">350°C</span>
                <span className="text-xs text-[#FDE68A]">Stone-Baked Pizza</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-[#FBBF24]">100%</span>
                <span className="text-xs text-[#FDE68A]">Pure Veg Integrity</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-[#FFFDF8]">Instant</span>
                <span className="text-xs text-[#FDE68A]">WhatsApp Ordering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feast Collage with Subtle Floating Animations */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative back glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F59E0B]/30 to-[#991B1B]/40 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Feast Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#F59E0B]/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-[#1C1917] group">
                <img
                  src="/hero-fastfood-feast.jpg"
                  alt="Ghumans Kitchen Express Food Feast - Pizzas, Burgers, Fries, Wraps"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/menu-pizza-farmhouse.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#FBBF24] tracking-wider uppercase block">
                      Chef's Highway Selection
                    </span>
                    <span className="text-base sm:text-lg font-black text-[#FFFDF8]">
                      Crisp Burgers, Wraps & Artisan Pizza
                    </span>
                  </div>
                  <span className="size-10 rounded-full bg-[#F59E0B] text-[#1C1917] flex items-center justify-center font-black text-sm shrink-0 shadow-lg">
                    ★
                  </span>
                </div>
              </div>

              {/* Floating Pill 1: Aloo Tikki / Burger starting ₹50 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FFFDF8] text-[#1C1917] p-2.5 sm:p-3 rounded-2xl shadow-xl border border-[#F59E0B]/40 flex items-center gap-3 animate-in fade-in zoom-in duration-700 hover:scale-105 transition-transform">
                <img
                  src="/menu-burger-aloo-herb.jpg"
                  alt="Aloo Tikki Burger"
                  className="size-11 sm:size-12 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] font-black uppercase text-[#991B1B] block">
                    Fast Food Legend
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold block text-[#1C1917]">
                    Aloo Tikki Burger
                  </span>
                  <span className="text-xs font-black text-[#D97706]">Only ₹50</span>
                </div>
              </div>

              {/* Floating Pill 2: Fresh Base Pizza */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#7F1D1D] text-[#FFFDF8] p-2.5 sm:p-3 rounded-2xl shadow-2xl border-2 border-[#F59E0B] flex items-center gap-3 animate-in fade-in zoom-in duration-700 hover:scale-105 transition-transform">
                <div className="size-11 sm:size-12 rounded-xl overflow-hidden bg-[#FAF4E8] shrink-0">
                  <img
                    src="/menu-pizza-paneer-makhani.jpg"
                    alt="Butter Paneer Pizza"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-black uppercase bg-[#F59E0B] text-[#1C1917] px-1.5 py-0.5 rounded">
                      BEST SELLER
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-black block mt-0.5">
                    Butter Paneer Pizza
                  </span>
                  <span className="text-xs font-bold text-[#FDE68A]">Medium ₹320 / Large ₹420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
