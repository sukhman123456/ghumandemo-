import React from "react";
import { Instagram, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { useOrder } from "./OrderContext";

export function FloatingActions() {
  const { openOrderDrawer, totalCount, openDriveThru, driveThruTotalCount } = useOrder();
  const instagramUrl = "https://www.instagram.com/ghumanskitchenexpress/";
  const whatsappUrl =
    "https://wa.me/917707813600?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express 👋 I want to place an order from your menu.");

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed z-40 flex flex-col items-end gap-2.5 pointer-events-none"
      style={{
        right: "max(16px, env(safe-area-inset-right, 16px))",
        bottom: "max(16px, env(safe-area-inset-bottom, 16px))",
      }}
    >
      {/* Floating Drive-Thru Action - Prominent */}
      <button
        type="button"
        onClick={() => openDriveThru()}
        aria-label="Open Drive-Thru Ordering System"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] text-white px-4 py-2.5 shadow-[0_4px_25px_rgba(220,38,38,0.5)] hover:shadow-[0_6px_30px_rgba(220,38,38,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-yellow-400 whitespace-nowrap animate-bounce duration-1000"
      >
        <span className="text-base group-hover:scale-110 transition-transform">🚗</span>
        <div className="flex flex-col items-start text-left leading-tight">
          <span className="text-xs font-black tracking-wider uppercase text-yellow-300">
            DRIVE-THRU
          </span>
          <span className="text-[9px] font-bold text-white/90">
            Order Ahead · Pick Up
          </span>
        </div>
        {driveThruTotalCount > 0 && (
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-black text-black ml-1 shadow">
            {driveThruTotalCount}
          </span>
        )}
      </button>

      {/* Floating Instagram Action */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Ghumans Kitchen Express on Instagram"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#18120F]/95 backdrop-blur-md text-[#F3EBDD] px-3.5 py-2 sm:px-4 sm:py-2 shadow-[0_4px_20px_rgba(201,164,92,0.25)] hover:shadow-[0_6px_25px_rgba(225,48,108,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C9A45C]/40 hover:border-[#E1306C]/70 whitespace-nowrap"
      >
        <span className="relative flex items-center justify-center size-5 rounded-full bg-gradient-to-tr from-[#FD1D1D]/20 via-[#E1306C]/20 to-[#833AB4]/20 border border-[#E1306C]/40 group-hover:border-[#E1306C] transition-colors shrink-0">
          <Instagram className="size-3.5 text-[#E1306C] group-hover:text-[#F3EBDD] transition-colors" />
        </span>
        <span className="text-xs font-bold tracking-wide leading-none text-[#F3EBDD] group-hover:text-[#E8C88B] transition-colors">
          Instagram
        </span>
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat or order with Ghumans Kitchen Express on WhatsApp"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-3.5 py-2 sm:px-4 sm:py-2 shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 whitespace-nowrap"
      >
        <MessageCircle className="size-4 fill-white text-[#25D366] shrink-0" />
        <span className="text-xs font-bold tracking-wide leading-none">
          WhatsApp
        </span>
      </a>

      {/* Floating Order Cart Action */}
      <button
        type="button"
        onClick={() => openOrderDrawer()}
        aria-label={`Open food truck order tray (${totalCount} items)`}
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF67] to-[#E8C88B] text-[#1C1815] px-3.5 py-2 sm:px-4 sm:py-2 shadow-[0_4px_20px_rgba(212,175,103,0.45)] hover:shadow-[0_6px_25px_rgba(212,175,103,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[#F3EBDD]/40 whitespace-nowrap"
      >
        <ShoppingBag className="size-4 text-[#1C1815] shrink-0" />
        <span className="text-xs font-extrabold tracking-wide leading-none">
          Tray
        </span>
        {totalCount > 0 && (
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#1C1815] text-[10px] font-black text-[#E8C88B] ring-1 ring-[#D4AF67]/60 ml-0.5 animate-in zoom-in-75">
            {totalCount}
          </span>
        )}
      </button>
    </aside>
  );
}
