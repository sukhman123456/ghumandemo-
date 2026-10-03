import React from "react";
import { Truck, Calendar, Sparkles, Check, MessageSquare, Phone } from "lucide-react";
import { useOrder, RESTAURANT_PHONE } from "../food-truck/OrderContext";

export function PizzaTruckPromo() {
  const { getPizzaTruckWhatsAppUrl } = useOrder();

  const cateringFeatures = [
    "Live Stone-Baked Pizzas baked hot at 350°C on-site",
    "Sizzling Double-Decker Burgers & Crispy Wraps",
    "Loaded Fries & Shakes Station right at your venue",
    "100% Pure Vegetarian certified culinary integrity",
    "Perfect for Weddings, Birthdays, Corporate Galas & Anniversaries",
    "Self-contained power and commercial kitchen equipment",
  ];

  return (
    <section id="pizza-truck" className="py-16 sm:py-24 bg-[#7F1D1D] text-[#FFFDF8] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#5B0C16] border-2 border-[#F59E0B]/40 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40 text-xs font-black uppercase tracking-wider mb-4">
                <Truck className="size-4" />
                PARTY & EVENT CATERING SERVICE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFFDF8] tracking-tight leading-tight">
                BRING A PIZZA TRUCK <br />
                <span className="text-[#FBBF24]">TO YOUR PARTY</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#FDE68A] font-medium leading-relaxed">
                Make your party unforgettable with Ghumans Kitchen Express pizza truck service.
              </p>

              <p className="mt-2 text-xs sm:text-sm text-[#FFFDF8]/80 leading-relaxed max-w-xl">
                Roll the excitement of Punjab's favorite double-decker kitchen straight to your lawn, farmhouse, or banquet. We serve fresh, steaming hot pizzas, burgers and gourmet street fast food live for your guests!
              </p>

              {/* Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cateringFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="size-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-[#FFFDF8]/90 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={getPizzaTruckWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] font-black text-sm uppercase tracking-wider shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="size-4" />
                  BOOK PIZZA TRUCK
                </a>

                <a
                  href={`tel:+91${RESTAURANT_PHONE.replace(/[^0-9]/g, "")}`}
                  className="px-6 py-3.5 rounded-full bg-[#450A0A] hover:bg-[#1C1917] text-[#FFFDF8] font-bold text-sm border border-[#F59E0B]/30 flex items-center gap-2 transition-all"
                >
                  <Phone className="size-4 text-[#F59E0B]" />
                  Call: {RESTAURANT_PHONE}
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#F59E0B]/50 shadow-2xl bg-[#1C1917] group">
                <img
                  src="/ghumans-truck.jpg"
                  alt="Ghumans Kitchen Express Double Decker Food Truck"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8]">
                  <span className="text-[11px] font-black uppercase text-[#FBBF24] block">
                    Ghumans Kitchen Express
                  </span>
                  <span className="text-base sm:text-lg font-black block">
                    Punjab's Signature Double-Decker Truck
                  </span>
                  <span className="text-xs text-white/80">Stationed at Grand Trunk Road, Dhilwan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
