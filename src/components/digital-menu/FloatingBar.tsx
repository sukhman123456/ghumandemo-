import React from "react";
import { MessageCircle, ShoppingBag, Instagram, ArrowRight } from "lucide-react";
import { useOrder, RESTAURANT_WHATSAPP_NUMBER } from "../food-truck/OrderContext";

export function FloatingBar() {
  const { totalCount, totalPrice, openOrderDrawer } = useOrder();

  const whatsappDirectUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Ghumans Kitchen Express! 👋\nI'd like to check today's live food truck menu and place an order at Grand Trunk Road, Dhilwan."
  )}`;

  return (
    <>
      {/* Floating Action Icons (Bottom-Right) */}
      <div
        className="fixed z-40 flex flex-col items-end gap-2.5 pointer-events-none"
        style={{
          right: "max(16px, env(safe-area-inset-right, 16px))",
          bottom: totalCount > 0 ? "76px" : "max(16px, env(safe-area-inset-bottom, 16px))",
        }}
      >
        {/* Floating Instagram Action */}
        <a
          href="https://www.instagram.com/ghumanskitchenexpress/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow @ghumanskitchenexpress on Instagram"
          className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#18120F]/95 backdrop-blur-md text-[#FFFDF8] px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#F59E0B]/40 hover:border-[#E1306C]"
        >
          <span className="flex items-center justify-center size-5 rounded-full bg-gradient-to-tr from-[#FD1D1D]/20 via-[#E1306C]/20 to-[#833AB4]/20 border border-[#E1306C]/40 shrink-0">
            <Instagram className="size-3.5 text-[#E1306C]" />
          </span>
          <span className="text-xs font-bold tracking-wide text-[#FFFDF8] group-hover:text-[#FBBF24] transition-colors">
            @ghumanskitchenexpress
          </span>
        </a>

        {/* Floating WhatsApp Action */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order or Chat on WhatsApp with Ghumans Kitchen Express"
          className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-3.5 py-2.5 sm:px-4 sm:py-2.5 shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all border border-white/20"
        >
          <MessageCircle className="size-4 fill-white text-[#25D366] shrink-0" />
          <span className="text-xs font-bold tracking-wide">
            WhatsApp Order
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Cart Bar (when cart has items) */}
      {totalCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#EFE5D2] shadow-[0_-8px_25px_rgba(0,0,0,0.1)] sm:hidden">
          <button
            onClick={() => openOrderDrawer()}
            className="w-full py-3 px-4 rounded-2xl bg-[#7F1D1D] hover:bg-[#991B1B] text-[#FFFDF8] flex items-center justify-between font-black shadow-lg active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <span className="size-7 rounded-full bg-[#F59E0B] text-[#1C1917] text-xs flex items-center justify-center font-black">
                {totalCount}
              </span>
              <span className="text-xs uppercase tracking-wider">View Order Cart</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#FDE68A]">
              <span>₹{totalPrice}</span>
              <ArrowRight className="size-4" />
            </div>
          </button>
        </div>
      )}
    </>
  );
}
