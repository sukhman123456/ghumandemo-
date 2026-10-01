import React from "react";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { useOrder } from "./OrderContext";

export function FloatingActions() {
  const { openOrderDrawer, totalCount } = useOrder();
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I'd like to place an order from your food truck.");

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-none">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp"
        className="pointer-events-auto group flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#34C759] text-white px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_4px_16px_rgba(52,199,89,0.35)] hover:shadow-[0_6px_22px_rgba(52,199,89,0.5)] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="size-3.5 sm:size-4 fill-white text-[#34C759]" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          WHATSAPP US
        </span>
      </a>

      {/* Floating Order Button with Cart Count */}
      <button
        type="button"
        onClick={() => openOrderDrawer()}
        aria-label="Open food truck order tray"
        className="pointer-events-auto group flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#E8C88B] border border-[#D4AF67]/50 text-[#1C1815] px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_4px_16px_rgba(201,164,92,0.3)] hover:shadow-[0_6px_22px_rgba(201,164,92,0.45)] hover:scale-105 active:scale-95 transition-all"
      >
        <ShoppingBag className="size-3.5 sm:size-4 text-[#1C1815]" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          ORDER FOOD
        </span>
        {totalCount > 0 && (
          <span className="inline-flex size-4 sm:size-5 items-center justify-center rounded-full bg-[#1C1815] text-[9px] sm:text-[10px] font-black text-[#E8C88B]">
            {totalCount}
          </span>
        )}
      </button>
    </div>
  );
}
