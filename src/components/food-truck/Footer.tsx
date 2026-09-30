import React from "react";
import { ArrowUp, Facebook, Heart, Instagram, MessageCircle, Phone, Sparkles, UtensilsCrossed } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "About", href: "#about" },
    { label: "From The Truck", href: "#from-truck" },
    { label: "Cravings", href: "#cravings" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express!");

  return (
    <footer className="bg-[#0D0D0D] text-[#F5F0E6] border-t border-[#332B23] pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#332B23]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-full border border-[#D9A441] bg-[#171411] flex items-center justify-center shadow-[0_0_15px_rgba(217,164,65,0.3)]">
                  <span className="font-display font-black text-sm text-[#D9A441]">G</span>
                </div>
                <div>
                  <span className="font-display text-xl font-black text-[#F5F0E6] tracking-tight block leading-none">
                    GHUMANS
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D9A441] mt-1 block">
                    KITCHEN EXPRESS
                  </span>
                </div>
              </div>

              {/* Slogan */}
              <p className="font-script text-2xl text-[#D9A441] mt-5">
                "Good Food. Happier People."
              </p>

              <p className="text-xs sm:text-sm text-[#A89E92] mt-3 leading-relaxed max-w-sm">
                Punjab's signature double-decker pure vegetarian food truck and restaurant experience on Grand Trunk Road, Dhilwan.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-10 rounded-full bg-[#171411] border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#E1306C] hover:border-[#E1306C] transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 rounded-full bg-[#171411] border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-full bg-[#171411] border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="tel:+919501201215"
                aria-label="Phone"
                className="size-10 rounded-full bg-[#171411] border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#D9A441] hover:border-[#D9A441] transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441] mb-5">
              EXPLORE TRUCK
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#A89E92] hover:text-[#D9A441] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441] mb-5">
              LOCATION & HOURS
            </h3>
            <address className="not-italic text-xs text-[#A89E92] leading-relaxed">
              Grand Trunk Road <br />
              Next to Toll Plaza, Dhilwan <br />
              Punjab 144804, India
            </address>

            <div className="mt-4 pt-3 border-t border-[#332B23] text-xs">
              <span className="text-[#16A34A] font-semibold flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#16A34A]" />
                Open daily until 10:00 PM
              </span>
              <a
                href="tel:+919501201215"
                className="text-[#D9A441] font-bold block mt-2 hover:underline"
              >
                Call: 095012 01215
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89E92]">
          <p>© {new Date().getFullYear()} Ghumans Kitchen Express. 100% Pure Vegetarian.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D9A441] hover:text-[#E8B452] transition-colors"
          >
            <span>Back to top</span>
            <div className="size-6 rounded-full bg-[#171411] border border-[#332B23] flex items-center justify-center">
              <ArrowUp className="size-3 text-[#D9A441]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
