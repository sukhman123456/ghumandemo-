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
    <footer className="bg-[#17120F] text-[#F3EBDD] border-t border-[#3A2920] pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#3A2920]">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative size-11 rounded-full shrink-0 flex items-center justify-center">
                  <img
                    src="/ghuman-logo.svg"
                    alt="Ghumans Kitchen Express Official Logo"
                    className="size-full rounded-full object-cover shadow-[0_0_15px_rgba(201,164,92,0.35)] border border-[#D4AF67]/70"
                  />
                  <span
                    className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-[#16A34A] border-2 border-[#17120F] shadow-sm z-10"
                    title="100% Pure Vegetarian"
                  />
                </div>
                <div>
                  <span className="font-display text-xl font-black text-[#F3EBDD] tracking-tight block leading-none">
                    GHUMANS
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A45C] mt-1 block">
                    KITCHEN EXPRESS
                  </span>
                </div>
              </div>

              {/* Slogan */}
              <p className="font-script text-2xl text-[#C9A45C] mt-5">
                "Good Food. Happier People."
              </p>

              <p className="text-xs sm:text-sm text-[#D1C2B0] mt-3 leading-relaxed max-w-sm">
                Punjab's signature double-decker pure vegetarian food truck and restaurant experience on Grand Trunk Road, Dhilwan.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/ghumanskitchenexpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow @ghumanskitchenexpress on Instagram"
                className="size-10 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#E1306C] hover:border-[#E1306C] transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-10 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-10 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="tel:+919501201215"
                aria-label="Phone"
                className="size-10 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A45C] mb-5">
              EXPLORE TRUCK
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#D1C2B0] hover:text-[#C9A45C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A45C] mb-5">
              LOCATION & HOURS
            </h3>
            <address className="not-italic text-xs text-[#D1C2B0] leading-relaxed">
              Grand Trunk Road <br />
              Next to Toll Plaza, Dhilwan <br />
              Punjab 144804, India
            </address>

            <div className="mt-4 pt-3 border-t border-[#3A2920] text-xs">
              <span className="text-[#16A34A] font-semibold flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#16A34A]" />
                Open daily until 10:00 PM
              </span>
              <a
                href="tel:+919501201215"
                className="text-[#C9A45C] font-bold block mt-2 hover:underline"
              >
                Call: 095012 01215
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D1C2B0]">
          <p>© {new Date().getFullYear()} Ghumans Kitchen Express. 100% Pure Vegetarian.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A45C] hover:text-[#D4B36D] transition-colors"
          >
            <span>Back to top</span>
            <div className="size-6 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center">
              <ArrowUp className="size-3 text-[#C9A45C]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
