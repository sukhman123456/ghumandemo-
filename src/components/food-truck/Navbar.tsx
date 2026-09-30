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
            ? "glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo with Food Truck circular emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Ghumans Kitchen Express Home"
          >
            <div className="relative size-10 sm:size-11 rounded-full border border-[#D9A441] bg-[#171411] flex items-center justify-center shadow-[0_0_12px_rgba(217,164,65,0.3)] group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-sm text-[#D9A441]">G</span>
              <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-[#16A34A] border-2 border-[#171411]" title="Pure Vegetarian" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#F5F0E6] group-hover:text-[#D9A441] transition-colors leading-none">
                GHUMANS
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.25em] text-[#D9A441] mt-1">
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
                  className={`text-[11px] font-semibold tracking-[0.18em] transition-colors relative py-1 ${
                    isActive
                      ? "text-[#D9A441]"
                      : "text-[#F5F0E6]/80 hover:text-[#D9A441]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
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
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-[#F5F0E6]/90 hover:text-[#D9A441] transition-colors py-2 px-3 rounded border border-[#332B23] bg-[#171411]/80 hover:border-[#D9A441]/50"
            >
              <Phone className="size-3.5 text-[#D9A441]" />
              <span>095012 01215</span>
            </a>

            {/* Order Now CTA */}
            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="relative inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#D9A441] to-[#E8B452] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0D0D0D] shadow-[0_4px_16px_rgba(217,164,65,0.35)] hover:shadow-[0_6px_22px_rgba(217,164,65,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="size-4" />
              <span>ORDER NOW</span>
              {totalCount > 0 && (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#0D0D0D] text-[10px] font-extrabold text-[#D9A441]">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="xl:hidden inline-flex size-10 items-center justify-center rounded border border-[#332B23] bg-[#171411] text-[#F5F0E6] hover:text-[#D9A441] hover:border-[#D9A441] transition-colors"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#171411]/98 backdrop-blur-xl p-6 text-[#F5F0E6] border-l border-[#D9A441]/20 animate-in fade-in slide-in-from-right duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#332B23]">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full border border-[#D9A441] bg-[#0D0D0D] flex items-center justify-center">
                <UtensilsCrossed className="size-5 text-[#D9A441]" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-[#F5F0E6] block leading-none">
                  GHUMANS
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D9A441] font-semibold">
                  KITCHEN EXPRESS
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              className="size-10 rounded border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#D9A441]"
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
                className="flex items-center justify-between text-lg font-display tracking-wider text-[#F5F0E6] hover:text-[#D9A441] py-2 border-b border-[#332B23]/50 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[11px] font-sans font-medium text-[#D9A441]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Footer CTAs */}
          <div className="pt-6 border-t border-[#332B23] space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openOrderDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#D9A441] to-[#E8B452] py-3 text-sm font-bold uppercase tracking-wider text-[#0D0D0D]"
            >
              <ShoppingBag className="size-4" />
              <span>Order Now {totalCount > 0 ? `(${totalCount})` : ""}</span>
            </button>
            <a
              href="tel:+919501201215"
              className="w-full flex items-center justify-center gap-2 rounded border border-[#332B23] bg-[#201C18] py-3 text-sm font-semibold text-[#F5F0E6] hover:border-[#D9A441]"
            >
              <Phone className="size-4 text-[#D9A441]" />
              <span>Call 095012 01215</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-[#A89E92] pt-2">
              <MapPin className="size-3.5 text-[#D9A441]" />
              <span>Grand Trunk Road, Dhilwan</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
