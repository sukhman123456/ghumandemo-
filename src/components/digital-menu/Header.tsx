import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu as MenuIcon, X, Phone, Flame, Sparkles } from "lucide-react";
import { useOrder, RESTAURANT_PHONE } from "../food-truck/OrderContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, openOrderDrawer } = useOrder();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Deals", href: "#deals" },
    { label: "Pizza Truck", href: "#pizza-truck" },
    { label: "Pay Online", href: "#payment" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#5B0C16]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(91,12,22,0.35)] py-2.5 border-b border-[#F59E0B]/30"
            : "bg-[#7F1D1D] py-3.5 border-b border-[#F59E0B]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & 100% Veg Badge */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ghumans Kitchen Express Home"
          >
            <div className="relative size-10 sm:size-12 rounded-full overflow-hidden bg-[#FEF3C7] border-2 border-[#F59E0B] p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/ghuman-logo.png"
                alt="Ghumans Kitchen Express"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/ghuman-official-logo.png";
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-[#FFFDF8] uppercase leading-none group-hover:text-[#FBBF24] transition-colors">
                  GHUMANS <span className="text-[#F59E0B]">KITCHEN</span> EXPRESS
                </span>
                <span className="veg-badge shrink-0" title="100% Pure Vegetarian" />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-[#FDE68A] tracking-wider uppercase mt-0.5">
                Where Cravings Get Expressed
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-[#FFFDF8]/90 hover:text-[#F59E0B] hover:bg-[#450A0A]/50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Cart & Order Now button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call button (desktop) */}
            <a
              href={`tel:+91${RESTAURANT_PHONE.replace(/[^0-9]/g, "")}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#FEF3C7] bg-[#450A0A]/70 hover:bg-[#450A0A] border border-[#F59E0B]/30 px-3 py-2 rounded-full transition-colors"
            >
              <Phone className="size-3.5 text-[#F59E0B]" />
              <span>{RESTAURANT_PHONE}</span>
            </a>

            {/* Cart Icon with Live Count */}
            <button
              onClick={() => openOrderDrawer()}
              className="relative p-2.5 sm:px-3.5 sm:py-2 rounded-full bg-[#F59E0B] text-[#1C1917] hover:bg-[#FBBF24] active:scale-95 transition-all shadow-md flex items-center gap-2 font-bold text-xs sm:text-sm group"
              aria-label={`View Cart with ${totalCount} items`}
            >
              <div className="relative">
                <ShoppingBag className="size-4 sm:size-5 text-[#1C1917]" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#7F1D1D] text-white text-[10px] font-black rounded-full size-4 flex items-center justify-center animate-bounce shadow">
                    {totalCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Cart</span>
              {totalCount > 0 && (
                <span className="bg-[#1C1917] text-[#FEF3C7] text-xs font-black px-1.5 py-0.5 rounded-full">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Order Now CTA (desktop) */}
            <button
              onClick={() => openOrderDrawer()}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#FFFDF8] hover:bg-[#FEF3C7] text-[#7F1D1D] font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md active:scale-95 transition-all uppercase tracking-wider"
            >
              <Flame className="size-4 text-[#F59E0B] fill-[#F59E0B]" />
              Order Now
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#FFFDF8] hover:bg-[#450A0A] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] inset-x-0 bg-[#5B0C16] border-b border-[#F59E0B]/30 shadow-2xl p-6 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-bold text-[#FFFDF8] hover:bg-[#7F1D1D] hover:text-[#F59E0B] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#FDE68A]">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#7F1D1D] flex flex-col gap-3">
                <a
                  href={`tel:+91${RESTAURANT_PHONE.replace(/[^0-9]/g, "")}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#450A0A] text-[#FEF3C7] font-bold text-sm border border-[#F59E0B]/30"
                >
                  <Phone className="size-4 text-[#F59E0B]" />
                  Call: {RESTAURANT_PHONE}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openOrderDrawer();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] font-extrabold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="size-4" />
                  View Cart & Order ({totalCount} items)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
