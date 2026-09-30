import React from "react";
import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { useOrder } from "./OrderContext";

export function FloatingActions() {
  const { openOrderDrawer, totalCount } = useOrder();
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I'd like to place an order from your food truck.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order or Chat on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-[#25D366] text-[#0D0D0D] p-3 sm:px-4 sm:py-2.5 shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="size-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-extrabold uppercase tracking-wider">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Order Button with Cart Count */}
      <button
        type="button"
        onClick={() => openOrderDrawer()}
        aria-label="Open food truck order tray"
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#E8B452] text-[#0D0D0D] p-3 sm:px-4 sm:py-2.5 shadow-[0_6px_20px_rgba(217,164,65,0.45)] hover:shadow-[0_8px_25px_rgba(217,164,65,0.65)] hover:scale-105 active:scale-95 transition-all"
      >
        <ShoppingBag className="size-5" />
        <span className="hidden sm:inline-block text-xs font-extrabold uppercase tracking-wider">
          Order Food
        </span>
        {totalCount > 0 && (
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#0D0D0D] text-[10px] font-black text-[#D9A441]">
            {totalCount}
          </span>
        )}
      </button>
    </div>
  );
}
