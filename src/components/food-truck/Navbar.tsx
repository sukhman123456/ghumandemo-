import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, Phone, ShoppingBag, UtensilsCrossed, X, Sparkles, MapPin } from "lucide-react";
import { useOrder } from "./OrderContext";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "JOURNEY", href: "#journey" },
  { label: "ABOUT", href: "#about" },
  { label: "FROM TRUCK", href: "#from-truck" },
  { label: "CRAVINGS", href: "#cravings" },
  { label: "MENU", href: "#menu" },
  { label: "GALLERY", href: "#gallery" },
  { label: "LOCATION", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { openOrderDrawer, totalCount } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 shadow-[0_10px_30px_rgba(23,18,15,0.85)] border-b border-[#C9A45C]/15"
            : "bg-transparent py-4 sm:py-5 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo with Food Truck circular emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Ghumans Kitchen Express Home"
          >
            <div className="relative size-10 sm:size-11 rounded-full group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img
                src="/ghuman-logo.svg"
                alt="Ghumans Kitchen Express Official Logo Badge"
                className="size-full rounded-full object-cover shadow-[0_0_15px_rgba(201,164,92,0.45)] border border-[#D4AF67]/80"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-[#16A34A] border-2 border-[#17120F] shadow-sm z-10"
                title="100% Pure Vegetarian"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-base sm:text-lg font-black tracking-tight transition-colors leading-none ${
                  scrolled ? "text-[#F3EBDD] group-hover:text-[#C9A45C]" : "text-[#1C1815] group-hover:text-[#C9A45C]"
                }`}
              >
                GHUMANS
              </span>
              <span
                className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.24em] mt-1 transition-colors ${
                  scrolled ? "text-[#C9A45C]" : "text-[#6E645C]"
                }`}
              >
                KITCHEN EXPRESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden xl:flex items-center gap-6 2xl:gap-8"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[12px] font-bold tracking-[0.14em] transition-colors relative py-1 ${
                    scrolled
                      ? isActive
                        ? "text-[#C9A45C]"
                        : "text-[#F3EBDD]/80 hover:text-[#C9A45C]"
                      : isActive
                      ? "text-[#C9A45C]"
                      : "text-[#2E2824] hover:text-[#C9A45C]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A45C] rounded-full shadow-[0_0_8px_#C9A45C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Call */}
            <a
              href="tel:+919501201215"
              className={`hidden md:inline-flex items-center gap-2 text-xs font-semibold py-2 px-3.5 rounded-full transition-all border ${
                scrolled
                  ? "text-[#F3EBDD]/90 border-[#3A2920] bg-[#201814]/80 hover:border-[#C9A45C]/50"
                  : "text-[#2D2622] border-[#D4AF67]/60 bg-white/50 hover:bg-white/80 shadow-sm"
              }`}
            >
              <Phone className="size-3.5 text-[#C9A45C]" />
              <span>095012 01215</span>
            </a>

            {/* Order Now CTA */}
            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-r from-[#D4AF67] via-[#E8C88B] to-[#C9A45C] px-3 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1815] shadow-sm hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="size-3.5 text-[#1C1815]" />
              <span>ORDER NOW</span>
              {totalCount > 0 && (
                <span className="inline-flex size-4 sm:size-5 items-center justify-center rounded-full bg-[#17120F] text-[9px] sm:text-[10px] font-extrabold text-[#C9A45C]">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className={`xl:hidden inline-flex size-9 sm:size-10 items-center justify-center rounded border transition-colors ${
                scrolled
                  ? "border-[#3A2920] bg-[#201814] text-[#F3EBDD] hover:text-[#C9A45C]"
                  : "border-[#D4AF67]/60 bg-white/70 text-[#1C1815] hover:text-[#C9A45C]"
              }`}
            >
              <MenuIcon className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#17120F]/98 backdrop-blur-xl p-6 text-[#F3EBDD] border-l border-[#C9A45C]/20 animate-in fade-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#3A2920]">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(201,164,92,0.4)] shrink-0">
                <img
                  src="/ghuman-logo.svg"
                  alt="Ghumans Kitchen Express Official Logo Badge"
                  className="size-full rounded-full object-cover border border-[#D4AF67]/80"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-[#F3EBDD] block leading-none">
                  GHUMANS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                  KITCHEN EXPRESS
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="size-10 rounded border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#C9A45C]"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col py-6 space-y-4 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-lg font-display tracking-wider text-[#F3EBDD] hover:text-[#C9A45C] py-2 border-b border-[#3A2920]/50 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[11px] font-sans font-medium text-[#C9A45C]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-[#3A2920] space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openOrderDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#C9A45C] to-[#D8B772] py-3 text-sm font-bold uppercase tracking-wider text-[#17120F]"
            >
              <ShoppingBag className="size-4" />
              <span>Order Now {totalCount > 0 ? `(${totalCount})` : ""}</span>
            </button>
            <a
              href="tel:+919501201215"
              className="w-full flex items-center justify-center gap-2 rounded border border-[#3A2920] bg-[#201814] py-3 text-sm font-semibold text-[#F3EBDD] hover:border-[#C9A45C]"
            >
              <Phone className="size-4 text-[#C9A45C]" />
              <span>Call 095012 01215</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-[#D1C2B0] pt-2">
              <MapPin className="size-3.5 text-[#C9A45C]" />
              <span>Grand Trunk Road, Dhilwan</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
