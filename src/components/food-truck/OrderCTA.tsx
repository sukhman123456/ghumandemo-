import React from "react";
import { MessageCircle, Phone, ShoppingBag, Sparkles } from "lucide-react";
import { useOrder } from "./OrderContext";

export function OrderCTA() {
  const { openOrderDrawer } = useOrder();
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I am craving food from your truck. Please take my order!");

  return (
    <section className="relative bg-[#0D0D0D] text-[#F5F0E6] py-24 lg:py-32 overflow-hidden border-t border-b border-[#332B23]">
      {/* Background Food Truck with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Food Truck background"
          loading="lazy"
          className="w-full h-full object-cover object-[center_40%] scale-105 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/85 to-[#0D0D0D]/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(217, 164, 65, 0.25) 0%, rgba(13, 13, 13, 0.85) 60%, #0D0D0D 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/50 bg-[#171411]/90 backdrop-blur-md px-4 py-1.5 shadow-lg mb-6">
          <Sparkles className="size-3.5 text-[#D9A441]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D9A441]">
            FOOD ON WHEELS • FRESH & PURE VEG
          </span>
        </div>

        {/* Primary Callout Typography */}
        <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#F5F0E6] leading-none">
          HUNGRY?
        </h2>

        <p className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#D9A441] mt-4 tracking-normal">
          LET THE TRUCK COME TO YOU.
        </p>

        <p className="text-sm sm:text-base text-[#F5F0E6]/80 mt-4 max-w-xl mx-auto leading-relaxed">
          Order for pickup on Grand Trunk Road, curb-side takeaway, or direct WhatsApp ordering. Sizzling hot pure veg favourites prepared fresh in minutes.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openOrderDrawer()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded bg-gradient-to-r from-[#D9A441] via-[#E8B452] to-[#D9A441] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0D0D0D] shadow-[0_0_30px_rgba(217,164,65,0.5)] hover:shadow-[0_0_40px_rgba(217,164,65,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingBag className="size-4" />
            <span>ORDER NOW</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded border border-[#25D366] bg-[#171411]/90 backdrop-blur-md px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F5F0E6] hover:bg-[#25D366] hover:text-[#0D0D0D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            <MessageCircle className="size-4 text-[#25D366] group-hover:text-[#0D0D0D]" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Phone line reassurance */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-[#A89E92]">
          <span>Direct Kitchen Line:</span>
          <a
            href="tel:+919501201215"
            className="text-[#D9A441] font-bold hover:underline flex items-center gap-1.5"
          >
            <Phone className="size-3.5" />
            095012 01215
          </a>
          <span className="text-[#332B23]">•</span>
          <span>Open Daily Until 10 PM</span>
        </div>
      </div>
    </section>
  );
}
