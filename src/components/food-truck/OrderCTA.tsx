import React from "react";
import { MessageCircle, Phone, ShoppingBag, Sparkles } from "lucide-react";
import { useOrder } from "./OrderContext";

export function OrderCTA() {
  const { openOrderDrawer } = useOrder();
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I am craving food from your truck. Please take my order!");

  return (
    <section className="relative bg-[#17120F] text-[#F3EBDD] py-24 lg:py-32 overflow-hidden border-t border-b border-[#3A2920]">
      {/* Background Food Truck with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Food Truck background"
          loading="lazy"
          className="w-full h-full object-cover object-[center_40%] scale-105 filter brightness-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120F] via-[#17120F]/85 to-[#17120F]/90" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201, 164, 92, 0.2) 0%, rgba(23, 18, 15, 0.85) 60%, #17120F 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/50 bg-[#201814]/90 backdrop-blur-md px-4 py-1.5 shadow-lg mb-6">
          <Sparkles className="size-3.5 text-[#C9A45C]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
            FOOD ON WHEELS • FRESH & PURE VEG
          </span>
        </div>

        {/* Official Brand Logo Badge */}
        <div className="relative size-16 sm:size-20 rounded-full mb-5 p-1 bg-[#201814] border-2 border-[#C9A45C] shadow-[0_0_30px_rgba(201,164,92,0.45)]">
          <img
            src="/ghuman-logo.svg"
            alt="Ghumans Kitchen Express Official Logo"
            className="size-full rounded-full object-cover"
          />
        </div>

        {/* Primary Callout Typography */}
        <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#F3EBDD] leading-none">
          HUNGRY?
        </h2>

        <p className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#C9A45C] mt-4 tracking-normal">
          LET THE TRUCK COME TO YOU.
        </p>

        <p className="text-sm sm:text-base text-[#D1C2B0] mt-4 max-w-xl mx-auto leading-relaxed">
          Order for pickup on Grand Trunk Road, curb-side takeaway, or direct WhatsApp ordering. Sizzling hot pure veg favourites prepared fresh in minutes.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openOrderDrawer()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded bg-gradient-to-r from-[#C9A45C] via-[#D4B36D] to-[#C9A45C] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#17120F] shadow-[0_0_30px_rgba(201,164,92,0.4)] hover:shadow-[0_0_40px_rgba(201,164,92,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingBag className="size-4" />
            <span>ORDER NOW</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded border border-[#25D366] bg-[#201814]/90 backdrop-blur-md px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F3EBDD] hover:bg-[#25D366] hover:text-[#17120F] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            <MessageCircle className="size-4 text-[#25D366] group-hover:text-[#17120F]" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Phone line reassurance */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-[#D1C2B0]">
          <span>Direct Kitchen Line:</span>
          <a
            href="tel:+919501201215"
            className="text-[#C9A45C] font-bold hover:underline flex items-center gap-1.5"
          >
            <Phone className="size-3.5" />
            095012 01215
          </a>
          <span className="text-[#3A2920]">•</span>
          <span>Open Daily Until 10 PM</span>
        </div>
      </div>
    </section>
  );
}
