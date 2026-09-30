import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, Flame, MapPin, Phone, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useOrder } from "./OrderContext";

export function Hero() {
  const { openOrderDrawer } = useOrder();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0D0D0D] text-[#F5F0E6] pt-20 pb-16"
    >
      {/* Background: Actual Uploaded Food Truck Photograph Dominating the Viewport */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/ghumans-truck.jpg"
          alt="Ghumans Kitchen Express Food Truck - Actual Photograph"
          fetchPriority="high"
          style={{
            transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`,
          }}
          className="w-full h-full object-cover object-[72%_32%] lg:object-[82%_36%] transition-transform duration-300 ease-out will-change-transform"
        />

        {/* Sophisticated Cinematic Gradient: Dark & Crisp on Left, Revealing the Truck on Right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/60 lg:bg-gradient-to-r lg:from-[#0D0D0D] lg:via-[#0D0D0D]/88 lg:via-45% lg:to-transparent" />

        {/* Warm Golden Spotlight Glow from the Truck's Signboard & Headlights */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(217, 164, 65, 0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(217, 164, 65, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center min-h-[calc(100svh-120px)]">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Small Label: PURE VEG • FOOD ON WHEELS */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#171411]/90 backdrop-blur-md px-4 py-1.5 shadow-[0_0_20px_rgba(217,164,65,0.2)]">
            <span className="size-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              PURE VEG • FOOD ON WHEELS
            </span>
            <span className="hidden sm:inline-block text-[#332B23]">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#F5F0E6]/80">
              <MapPin className="size-3 text-[#D9A441]" /> GT Road, Dhilwan
            </span>
          </div>

          {/* Hero Typography: GHUMANS KITCHEN EXPRESS */}
          <div className="mt-5">
            <h1 className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-[#F5F0E6]">
              GHUMANS
              <span className="block text-[#D9A441] font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[54px] tracking-wider mt-1.5 font-display">
                KITCHEN EXPRESS
              </span>
            </h1>
          </div>

          {/* Main Statement: GOOD FOOD. HAPPIER PEOPLE. */}
          <div className="mt-6 pl-4 border-l-2 border-[#D9A441]">
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F0E6] tracking-tight leading-snug">
              GOOD FOOD. <br className="sm:hidden" />
              <span className="text-[#D9A441]">HAPPIER PEOPLE.</span>
            </h2>
            {/* Supporting Text */}
            <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#F5F0E6]/85 font-normal leading-relaxed max-w-lg">
              Freshly prepared favourites, bold flavours and good times — served straight from our kitchen on wheels.
            </p>
          </div>

          {/* Quick Specialties Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#F5F0E6]/80">
            <span className="bg-[#171411]/90 backdrop-blur-sm border border-[#332B23] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🍕 Hand-Tossed Pizzas
            </span>
            <span className="bg-[#171411]/90 backdrop-blur-sm border border-[#332B23] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🍔 Sizzling Gourmet Burgers
            </span>
            <span className="bg-[#171411]/90 backdrop-blur-sm border border-[#332B23] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🌯 Paneer Tikka Wraps
            </span>
            <span className="bg-[#171411]/90 backdrop-blur-sm border border-[#332B23] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              🍟 Loaded Cheesy Fries
            </span>
          </div>

          {/* Action Buttons: EXPLORE MENU & ORDER NOW */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#D9A441] to-[#E8B452] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0D0D0D] shadow-[0_4px_20px_rgba(217,164,65,0.4)] hover:shadow-[0_6px_28px_rgba(217,164,65,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE MENU</span>
              <ArrowUpRight className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="inline-flex items-center justify-center gap-2 rounded border border-[#D9A441] bg-[#171411]/90 backdrop-blur-md px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F5F0E6] hover:bg-[#D9A441] hover:text-[#0D0D0D] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-md"
            >
              <ShoppingBag className="size-4" />
              <span>ORDER NOW</span>
            </button>

            <a
              href="tel:+919501201215"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#A89E92] hover:text-[#D9A441] transition-colors py-2 px-3 sm:ml-2"
            >
              <Phone className="size-3.5 text-[#D9A441]" />
              <span>095012 01215</span>
            </a>
          </div>

          {/* Social Trust Metrics */}
          <div className="mt-8 pt-6 border-t border-[#332B23]/70 flex flex-wrap items-center gap-6 text-xs text-[#A89E92]">
            <div className="flex items-center gap-2">
              <div className="flex text-[#D9A441]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-[#D9A441]" />
                ))}
              </div>
              <span className="font-bold text-[#F5F0E6]">5.0 Rating</span>
              <span>on Google</span>
            </div>
            <span className="hidden sm:inline-block text-[#332B23]">•</span>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#16A34A]" />
              <span className="text-[#F5F0E6] font-medium">Open Daily until 10 PM</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Interactive Callout Badges on the Visible Right Side of the Truck */}
      <div className="hidden lg:block absolute right-12 top-28 z-20 pointer-events-auto">
        <a
          href="#from-truck"
          className="flex items-center gap-2.5 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#D9A441]/50 px-4 py-2 rounded-full text-xs font-bold text-[#F5F0E6] hover:bg-[#D9A441] hover:text-[#0D0D0D] transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <Sparkles className="size-3.5 text-[#D9A441]" />
          <span>Rooftop Glass Seating Deck</span>
        </a>
      </div>

      <div className="hidden lg:block absolute right-24 bottom-24 z-20 pointer-events-auto">
        <a
          href="#from-truck"
          className="flex items-center gap-2.5 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#D9A441]/50 px-4 py-2 rounded-full text-xs font-bold text-[#F5F0E6] hover:bg-[#D9A441] hover:text-[#0D0D0D] transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <span className="size-2 rounded-full bg-[#16A34A]" />
          <span>Double-Decker Pure Veg Kitchen</span>
        </a>
      </div>

      {/* Subtle Scroll Indicator: SCROLL TO EXPLORE */}
      <a
        href="#journey"
        aria-label="Scroll to explore the food truck journey"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[10px] uppercase font-bold tracking-[0.28em] text-[#A89E92] hover:text-[#D9A441] transition-colors group cursor-pointer"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="size-6 rounded-full border border-[#D9A441]/40 flex items-center justify-center group-hover:border-[#D9A441] group-hover:bg-[#D9A441]/10 transition-colors animate-bounce">
          <ArrowDown className="size-3 text-[#D9A441]" />
        </div>
      </a>
    </section>
  );
}
