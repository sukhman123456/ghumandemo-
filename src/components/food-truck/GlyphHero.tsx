"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, MapPin, Phone, ShoppingBag, Sparkles } from "lucide-react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { useOrder } from "./OrderContext";

const family = '"Playfair Display", Georgia, serif';

export function GlyphHero() {
  const { openOrderDrawer } = useOrder();
  const [face, setFace] = useState<string>('"Playfair Display", Georgia, serif');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Ghumans%20Kitchen%20Express%20Dhilwan%20Punjab%20144804";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });

    try {
      if (document.fonts) {
        document.fonts.load('900 100px "Playfair Display"').then(() => {
          setFace(family);
        });
      }
    } catch {
      setFace(family);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScrollToNext = () => {
    // If at top of hero, glide camera down into the food truck portal dive
    if (window.scrollY < 80) {
      const scrollDistance = window.innerHeight * (isMobile ? 1.1 : 1.6);
      window.scrollTo({ top: scrollDistance, behavior: "smooth" });
    } else {
      const nextSection = document.getElementById("journey");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      data-slipstream-hero
      className="relative w-full bg-[#F6F0E7] text-[#1C1815]"
      style={{
        fontFamily: face,
        containerType: "inline-size",
      }}
    >
      <style>{`
        /* 1. Master Cream & Silk Luxury Background */
        [data-slipstream-hero] {
          background-color: #F6F0E7;
          color: #1C1815;
        }
        [data-slipstream-hero] [data-gp-pin] {
          background-color: #F6F0E7;
          background-image:
            radial-gradient(ellipse 95% 70% at 50% 32%, #FCF8F2 0%, #F5EDE2 45%, #EADDCF 82%, #E0D0BD 100%),
            linear-gradient(128deg, rgba(255,255,255,0.7) 0%, rgba(245,237,226,0.3) 30%, rgba(230,217,200,0.4) 65%, rgba(255,255,255,0.5) 100%);
        }

        /* 2. Dimensional shadow for the food-filled letters */
        [data-slipstream-hero] [data-gp-field] {
          filter: drop-shadow(0 18px 35px rgba(95, 60, 25, 0.28)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.16));
        }

        /* 3. Hide default glyph-portal hint and touch picker */
        [data-slipstream-hero] [data-gp-hint] {
          display: none;
        }
        [data-slipstream-hero] [data-gp-touch-picker] {
          display: none !important;
        }
        [data-slipstream-hero] [data-gp-caption] {
          display: none;
        }

        /* 4. Eyebrow heading position */
        [data-ghuman-eyebrow] {
          position: absolute;
          inset: auto 12px calc(100% - var(--gp-word-top, 35%) + 16px);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 100%;
        }
        @media (min-width: 640px) {
          [data-ghuman-eyebrow] {
            inset: auto 24px calc(100% - var(--gp-word-top, 35%) + 24px);
            gap: 16px;
          }
        }

        /* 5. Subtitle position directly under the letters */
        [data-ghuman-support] {
          position: absolute;
          top: calc(var(--gp-word-bottom, 50%) + 12px);
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 480px;
          margin: 0;
          text-align: center;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.35;
          color: #3A332E;
          letter-spacing: 0.01em;
        }
        @media (min-width: 640px) {
          [data-ghuman-support] {
            top: calc(var(--gp-word-bottom, 50%) + 18px);
            font-size: clamp(15px, 2.2cqw, 22px);
            line-height: 1.4;
            max-width: none;
            width: auto;
          }
        }

        /* 6. Step Inside Food Truck Button */
        [data-ghuman-cta] {
          position: absolute;
          top: calc(var(--gp-word-bottom, 50%) + 56px);
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 22px;
          background: linear-gradient(135deg, #C99B48 0%, #E2BE78 50%, #BA8E3E 100%);
          border-radius: 8px;
          color: #1C1815;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          box-shadow: 0 6px 20px rgba(201, 164, 92, 0.4), 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          white-space: nowrap;
          text-decoration: none;
          touch-action: manipulation;
        }
        @media (min-width: 640px) {
          [data-ghuman-cta] {
            top: calc(var(--gp-word-bottom, 50%) + 74px);
            gap: 10px;
            min-height: 48px;
            padding: 0 32px;
            border-radius: 10px;
            font-size: 13px;
            letter-spacing: 0.1em;
          }
        }
        [data-ghuman-cta]:hover {
          background: linear-gradient(135deg, #E2BE78 0%, #C99B48 100%);
          transform: translateX(-50%) translateY(-2px);
          box-shadow: 0 10px 32px rgba(201, 164, 92, 0.55);
        }

        /* 7. Scroll Down Mouse Indicator */
        [data-ghuman-scroll] {
          position: absolute;
          inset: auto auto max(14px, env(safe-area-inset-bottom, 14px)) 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          text-align: center;
          width: max-content;
          touch-action: manipulation;
        }
        @media (min-width: 640px) {
          [data-ghuman-scroll] {
            inset: auto auto 3.5% 50%;
            gap: 8px;
          }
        }

        /* 8. Top-right location */
        [data-ghuman-location] {
          position: absolute;
          top: 96px;
          right: clamp(24px, 5cqw, 64px);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          text-align: right;
          cursor: pointer;
          text-decoration: none;
        }

        /* 9. Destination content styles inside the letter */
        [data-slipstream-hero] [data-gp-content] {
          padding: 4.5rem 1.25rem 5rem;
          font-family: inherit;
          background: #17120F;
          color: #F3EBDD;
        }
        @media (min-width: 640px) {
          [data-slipstream-hero] [data-gp-content] {
            padding: 6.5rem clamp(1.5rem, 5cqw, 6rem) 7.5rem;
          }
        }
        [data-slipstream-copy] {
          display: flex;
          width: min(100%, 80rem);
          margin: auto;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(1.5rem, 4svh, 3.5rem);
        }
        [data-slipstream-copy] h2 {
          max-width: 52rem;
          margin: 0;
          color: #F3EBDD;
          font-size: clamp(1.6rem, 1.2rem + 2.5cqw, 3rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }
        [data-slipstream-copy] h2 span {
          color: #C9A45C;
        }
        [data-slipstream-features] {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        [data-slipstream-feature] {
          border-top: 1px solid rgba(201, 164, 92, 0.25);
          padding-top: 1.25rem;
        }
        [data-slipstream-feature] h3 {
          margin: 0;
          color: #F3EBDD;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.3;
          display: flex;
          align-items: center;
        }
        [data-slipstream-feature] p {
          margin: 0.6rem 0 0;
          color: #D1C2B0;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        [data-slipstream-no] {
          display: inline-block;
          margin-right: 0.75rem;
          color: #C9A45C;
          font: 700 0.8rem ui-monospace, monospace;
          letter-spacing: 0.1em;
        }
        @container(min-width: 768px) {
          [data-slipstream-features] {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 3.5rem;
          }
        }
      `}</style>

      <GlyphPortal
        word="GHUMANS"
        scrollLength={isMobile ? 1.15 : 2.4}
        interactive={true}
        fontFamily={face}
        fontWeight={900}
        enterLabel="Step Inside Food Truck"
        style={{
          "--gp-paper": "#F6F0E7",
          "--gp-ink": "#1C1815",
          "--gp-field": "#17120F",
          "--gp-foreground": "#F3EBDD",
        }}
        background={
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Real Uploaded Indian Food Panorama with Sizzling Paneer, Naan, Tandoori & Curries */}
            <img
              src="/hero-punjabi-vegetarian.jpg"
              alt="Ghumans Kitchen Express Pure Vegetarian Cuisine"
              className="w-full h-full object-cover object-[center_46%] brightness-[1.08] contrast-[1.14] saturate-[1.18] will-change-transform"
            />
            {/* Warm Golden Atmosphere Radiating Through the Letters */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 70% at 50% 45%, rgba(201, 164, 92, 0.28) 0%, rgba(23, 18, 15, 0.12) 55%, rgba(23, 18, 15, 0.7) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-transparent to-[#17120F]/35" />
          </div>
        }
        front={
          <>
            {/* 1. Flowing Metallic Champagne-Gold Ribbon Curves */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="goldRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A45C" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#E2BE78" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#F5DFAB" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#D4AF67" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C9A45C" stopOpacity="0.3" />
                </linearGradient>
                <filter id="ribbonGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <path
                d="M -40,640 C 220,620 320,530 460,490 C 680,430 920,440 1140,320 C 1280,240 1380,180 1480,140"
                stroke="url(#goldRibbonGrad)"
                strokeWidth="1.8"
                fill="none"
                filter="url(#ribbonGlowFilter)"
              />
              <path
                d="M -40,620 C 240,590 340,510 480,470 C 700,410 940,420 1160,300 C 1300,220 1400,160 1480,120"
                stroke="url(#goldRibbonGrad)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
              <circle cx="980" cy="400" r="1.5" fill="#FFF8E7" filter="drop-shadow(0 0 6px #F5DFAB)" />
              <circle cx="380" cy="540" r="1.5" fill="#FFF8E7" filter="drop-shadow(0 0 6px #F5DFAB)" />
            </svg>

            {/* 2. Soft Botanical Leaf Shadow (Bottom Left) */}
            <svg
              className="absolute bottom-0 left-0 w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] pointer-events-none z-10 opacity-22 filter blur-[15px]"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M-50 450 C 40 360, 90 280, 110 180 C 130 195, 145 225, 150 255 C 175 190, 205 130, 260 70 C 255 120, 235 180, 200 240 C 240 210, 280 180, 340 150 C 310 210, 260 260, 210 295 C 240 310, 290 330, 360 330 C 290 370, 210 375, 140 370 Z"
                fill="#3E342B"
              />
            </svg>

            {/* 3. Top-Right Location Indicator (Desktop/Tablet) */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ghuman-location
              className="group hidden sm:flex"
              aria-label="View Grand Trunk Road location on Google Maps"
            >
              <MapPin className="size-4 text-[#C9A45C] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#3D3631] leading-tight group-hover:text-[#C9A45C] transition-colors">
                  Grand Trunk Road, Dhilwan
                </p>
                <p className="text-[11px] sm:text-xs text-[#6B6158] leading-tight mt-0.5">
                  Next to Toll Plaza
                </p>
              </div>
            </a>

            {/* 4. Eyebrow Heading */}
            <div data-ghuman-eyebrow>
              <span className="h-[1px] w-5 sm:w-16 md:w-28 bg-gradient-to-r from-transparent via-[#C9A45C]/70 to-[#C9A45C]" />
              <h1 className="text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#2B2521] whitespace-nowrap">
                FOOD ON WHEELS • HIGHWAY STOP
              </h1>
              <span className="h-[1px] w-5 sm:w-16 md:w-28 bg-gradient-to-l from-transparent via-[#C9A45C]/70 to-[#C9A45C]" />
            </div>

            {/* 5. Subtitle directly below "GHUMANS" */}
            <p data-ghuman-support>
              Follow your cravings. Good food, happier people.
            </p>

            {/* 6. Main CTA Button */}
            <button
              type="button"
              data-ghuman-cta
              onClick={handleScrollToNext}
            >
              <span>STEP INSIDE FOOD TRUCK</span>
              <ArrowRight className="size-4" />
            </button>

            {/* 7. Mouse Scroll Indicator */}
            <button
              type="button"
              data-ghuman-scroll
              onClick={handleScrollToNext}
              aria-label="Scroll down to dive into the truck portal"
            >
              <div className="w-[22px] h-[34px] rounded-full border-2 border-[#544B44] flex justify-center pt-1.5 transition-transform hover:translate-y-0.5">
                <span className="w-0.5 h-2 bg-[#544B44] rounded-full animate-bounce" />
              </div>
              <span className="text-[11px] sm:text-xs text-[#5D544E] font-medium tracking-wide">
                Scroll down to dive into the truck portal
              </span>
            </button>
          </>
        }
      >
        {/* Destination Content Revealed Inside the Letter */}
        <div data-slipstream-copy>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/35 bg-[#201814]/90 backdrop-blur-md px-3.5 py-1 mb-4 shadow-[0_0_20px_rgba(201,164,92,0.2)]">
              <Sparkles className="size-3.5 text-[#C9A45C]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A45C]">
                WELCOME INSIDE GHUMANS KITCHEN EXPRESS
              </span>
            </div>
            <h2>
              A highway stop becomes <span>an unforgettable experience.</span>
            </h2>
          </div>

          <div data-slipstream-features>
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>01</span>Double-Decker Truck
              </h3>
              <p>
                Punjab’s premier roadside icon on the Grand Trunk Road. 100% pure vegetarian kitchen with certified culinary integrity.
              </p>
            </div>
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>02</span>Stone-Baked at 350°C
              </h3>
              <p>
                Hand-stretched artisan pizzas, sizzling griddle paneer burgers, crispy wraps and thick cold shakes prepared hot to order.
              </p>
            </div>
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>03</span>Rooftop Glass Deck
              </h3>
              <p>
                Open-air highway road vibes, ambient evening fairy lights, and seating crafted for friends, road-trippers and families.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-4 w-full">
            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#C9A45C] to-[#D8B772] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#17120F] shadow-[0_4px_20px_rgba(201,164,92,0.35)] hover:brightness-110 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="size-4" />
              <span>ORDER NOW</span>
            </button>
            <a
              href="#journey"
              className="inline-flex items-center justify-center gap-2 rounded border border-[#C9A45C]/50 bg-[#201814]/90 hover:bg-[#C9A45C]/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#C9A45C] transition-all text-center"
            >
              <span>CONTINUE HIGHWAY JOURNEY</span>
              <ArrowRight className="size-4" />
            </a>
            <a
              href="tel:+919501201215"
              className="inline-flex items-center justify-center gap-2 rounded border border-[#3A2920] bg-[#201814]/60 px-5 py-3.5 text-xs font-semibold text-[#F3EBDD] hover:text-[#C9A45C] hover:border-[#C9A45C]/40 transition-colors text-center"
            >
              <Phone className="size-3.5 text-[#C9A45C]" />
              <span>095012 01215</span>
            </a>
          </div>
        </div>
      </GlyphPortal>
    </section>
  );
}
