import React from "react";
import { ArrowUp, Facebook, Heart, Instagram, Phone, Sparkles } from "lucide-react";
import { RESTAURANT_OWNER, RESTAURANT_PHONE, RESTAURANT_UPI_ID } from "../food-truck/OrderContext";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#450A0A] text-[#FFFDF8] pt-16 pb-12 border-t-2 border-[#F59E0B]/30 relative overflow-hidden">
      {/* Top subtle line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#F59E0B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FFFDF8]/15">
          {/* Col 1: Brand Info & 100% Veg */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full overflow-hidden bg-[#FEF3C7] border-2 border-[#F59E0B] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/ghuman-logo.png"
                  alt="Ghumans Kitchen Express"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/ghuman-official-logo.png";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#FFFDF8] tracking-tight uppercase">
                  GHUMANS <span className="text-[#FBBF24]">KITCHEN</span> EXPRESS
                </h3>
                <p className="text-xs font-bold text-[#FDE68A] uppercase tracking-wider">
                  "Where Cravings Get Expressed"
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#FFFDF8]/80 leading-relaxed max-w-sm">
              Punjab's signature double-decker pure vegetarian food truck and dining experience on Grand Trunk Road, Dhilwan. Stone-baked pizzas, griddled burgers, crispy wraps and chilled thick shakes.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 text-[#4ade80] border border-[#16A34A]/40 text-xs font-black">
              <span className="veg-badge" />
              100% CERTIFIED PURE VEGETARIAN
            </div>

            {/* Social Media Buttons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ghumanskitchenexpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow @ghumanskitchenexpress on Instagram"
                className="size-10 rounded-full bg-[#5B0C16] border border-[#F59E0B]/30 hover:border-[#E1306C] flex items-center justify-center text-[#FFFDF8] hover:text-[#E1306C] hover:scale-105 transition-all shadow-sm"
                title="Instagram: @ghumanskitchenexpress"
              >
                <Instagram className="size-4" />
              </a>

              {/* Facebook */}
              <a
                href="#contact"
                aria-label="Facebook - Ghumans Kitchen Express"
                className="size-10 rounded-full bg-[#5B0C16] border border-[#F59E0B]/30 hover:border-[#1877F2] flex items-center justify-center text-[#FFFDF8] hover:text-[#1877F2] hover:scale-105 transition-all shadow-sm"
                title="Facebook: Ghumans Kitchen Express"
              >
                <Facebook className="size-4" />
              </a>

              {/* Snapchat */}
              <a
                href="#contact"
                aria-label="Snapchat - Ghumans Kitchen Express"
                className="size-10 rounded-full bg-[#5B0C16] border border-[#F59E0B]/30 hover:border-[#FFFC00] flex items-center justify-center text-[#FFFDF8] hover:text-[#FFFC00] hover:scale-105 transition-all shadow-sm"
                title="Snapchat: Ghumans Kitchen Express"
              >
                <span className="font-black text-xs">👻</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase text-[#FBBF24] tracking-wider mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Digital Menu
                </a>
              </li>
              <li>
                <a href="#deals" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Deals & Combos
                </a>
              </li>
              <li>
                <a href="#pizza-truck" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Pizza Truck Catering
                </a>
              </li>
              <li>
                <a href="#payment" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Pay Online (UPI)
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#FFFDF8]/80 hover:text-[#FBBF24] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Payment Info */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-black uppercase text-[#FBBF24] tracking-wider mb-4">
              CONTACT & PAYMENT
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FFFDF8]/85">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#FDE68A] block">
                  Owner / Management
                </span>
                <span className="font-bold text-[#FFFDF8]">{RESTAURANT_OWNER}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase text-[#FDE68A] block">
                  Shop Telephone
                </span>
                <a
                  href={`tel:+91${RESTAURANT_PHONE.replace(/[^0-9]/g, "")}`}
                  className="font-bold text-[#FFFDF8] hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="size-3.5 text-[#F59E0B]" />
                  {RESTAURANT_PHONE}
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase text-[#FDE68A] block">
                  Address
                </span>
                <span>Grand Trunk Road, Dhilwan (Next to Toll Plaza), Punjab 144804</span>
              </div>

              <div className="pt-2 border-t border-[#FFFDF8]/15">
                <span className="text-[11px] font-bold uppercase text-[#FDE68A] block">
                  Online Payment
                </span>
                <span className="font-mono font-bold text-xs bg-[#5B0C16] px-2.5 py-1 rounded-lg border border-[#F59E0B]/30 inline-block mt-1 text-[#FFFDF8]">
                  UPI: {RESTAURANT_UPI_ID}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFDF8]/70">
          <p>© 2026 Ghumans Kitchen Express. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#FDE68A]">Where Cravings Get Expressed</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#5B0C16] hover:bg-[#F59E0B] hover:text-[#1C1917] text-[#FFFDF8] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
