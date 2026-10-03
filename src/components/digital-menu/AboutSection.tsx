import React from "react";
import { MapPin, Phone, Clock, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { RESTAURANT_OWNER, RESTAURANT_PHONE } from "../food-truck/OrderContext";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#5B0C16] text-[#FFFDF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-[#F59E0B]/50 shadow-2xl bg-[#1C1917] relative group">
              <img
                src="/rooftop-dining.jpg"
                alt="Rooftop Dining & Food Truck at Ghumans Kitchen Express"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-black uppercase text-[#FBBF24] block">
                  Grand Trunk Road · Dhilwan
                </span>
                <span className="text-base sm:text-lg font-black text-white">
                  Rooftop Lounge & Double-Decker Kitchen
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40 text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles className="size-3.5" />
              ABOUT GHUMANS KITCHEN EXPRESS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFFDF8] tracking-tight leading-tight">
              WHERE CRAVINGS <br />
              <span className="text-[#FBBF24]">GET EXPRESSED</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#FDE68A] font-medium leading-relaxed">
              Founded and managed by {RESTAURANT_OWNER}, Ghumans Kitchen Express is Punjab's premiere double-decker pure vegetarian fast-food sensation.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-[#FFFDF8]/80 leading-relaxed">
              Situated right on the historic Grand Trunk Road near the Dhilwan Toll Plaza, we bridge the speed of gourmet street food with the soul of authentic Punjabi hospitality. Whether it's hand-stretched 350°C stone-baked pizzas, sizzling tandoori paneer burgers, crispy wraps or rich milkshakes, every item is crafted fresh to order with certified 100% vegetarian ingredients.
            </p>

            {/* Quick Details Badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#450A0A] p-4 rounded-2xl border border-[#F59E0B]/30 flex items-start gap-3">
                <MapPin className="size-5 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-[#FFFDF8]">Prime Highway Location</h4>
                  <p className="text-xs text-[#FDE68A] mt-0.5">
                    Grand Trunk Road, Dhilwan, Punjab (Next to Toll Plaza)
                  </p>
                </div>
              </div>

              <div className="bg-[#450A0A] p-4 rounded-2xl border border-[#F59E0B]/30 flex items-start gap-3">
                <Clock className="size-5 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-[#FFFDF8]">Opening Hours</h4>
                  <p className="text-xs text-[#FDE68A] mt-0.5">
                    Open Daily 11:00 AM – 10:00 PM for lunch, snacks & late road trip dinner
                  </p>
                </div>
              </div>

              <div className="bg-[#450A0A] p-4 rounded-2xl border border-[#F59E0B]/30 flex items-start gap-3">
                <Phone className="size-5 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-[#FFFDF8]">Direct Contact</h4>
                  <p className="text-xs text-[#FDE68A] mt-0.5">
                    {RESTAURANT_OWNER} · {RESTAURANT_PHONE}
                  </p>
                </div>
              </div>

              <div className="bg-[#450A0A] p-4 rounded-2xl border border-[#F59E0B]/30 flex items-start gap-3">
                <ShieldCheck className="size-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-[#FFFDF8]">100% Pure Veg</h4>
                  <p className="text-xs text-[#FDE68A] mt-0.5">
                    Strictly pure vegetarian kitchen with zero compromise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
