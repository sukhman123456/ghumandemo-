import React, { useState } from "react";
import { MessageCircle, Minus, Phone, Plus, ShoppingBag, Trash2, UtensilsCrossed, X } from "lucide-react";
import { useOrder } from "./OrderContext";

export function OrderDrawer() {
  const {
    order,
    isOpen,
    closeOrderDrawer,
    updateQuantity,
    removeFromOrder,
    clearOrder,
    totalCount,
    totalPrice,
    getWhatsAppOrderUrl,
  } = useOrder();

  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeOrderDrawer}
    >
      <div
        className="relative w-full max-w-md bg-[#171411] text-[#F5F0E6] h-full flex flex-col justify-between border-l border-[#332B23] shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#332B23] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#D9A441]/10 border border-[#D9A441] flex items-center justify-center text-[#D9A441]">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-lg text-[#F5F0E6] leading-none">
                Your Food Truck Order
              </h2>
              <span className="text-[11px] text-[#D9A441] font-semibold mt-1 block">
                {totalCount} item{totalCount === 1 ? "" : "s"} selected
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeOrderDrawer}
            aria-label="Close order drawer"
            className="size-9 rounded-full bg-[#201C18] border border-[#332B23] flex items-center justify-center text-[#F5F0E6] hover:text-[#D9A441] transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Order Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {order.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="size-16 rounded-full bg-[#201C18] border border-[#332B23] flex items-center justify-center text-[#A89E92] mb-4">
                <UtensilsCrossed className="size-8" />
              </div>
              <h3 className="font-display font-bold text-base text-[#F5F0E6]">
                Your tray is empty
              </h3>
              <p className="text-xs text-[#A89E92] mt-1 max-w-xs">
                Explore the menu to add freshly prepared pure veg pizzas, burgers, wraps and shakes!
              </p>
            </div>
          ) : (
            <>
              {order.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#201C18] border border-[#332B23] justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-14 rounded-lg object-cover bg-[#0D0D0D] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-[#F5F0E6] truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#D9A441] block mt-0.5">
                      ₹{item.price} each
                    </span>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg border border-[#332B23] bg-[#171411]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="p-1.5 text-[#A89E92] hover:text-[#D9A441]"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#F5F0E6]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="p-1.5 text-[#A89E92] hover:text-[#D9A441]"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromOrder(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="p-1.5 text-[#A89E92] hover:text-red-400"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Special Instructions Note */}
              <div className="pt-2">
                <label
                  htmlFor="order-notes"
                  className="block text-[11px] font-bold uppercase tracking-wider text-[#A89E92] mb-1.5"
                >
                  Special instructions (e.g. Extra spicy / Highway pickup)
                </label>
                <input
                  id="order-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes for the chef..."
                  className="w-full text-xs p-3 rounded-lg bg-[#201C18] border border-[#332B23] text-[#F5F0E6] focus:border-[#D9A441] focus:outline-none"
                />
              </div>

              {/* Clear button */}
              <button
                type="button"
                onClick={clearOrder}
                className="text-[11px] text-[#A89E92] hover:text-red-400 underline font-medium"
              >
                Clear all items
              </button>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-[#332B23] bg-[#201C18]/90 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#A89E92]">Total Bill Amount:</span>
            <span className="font-display font-black text-2xl text-[#D9A441]">
              ₹{totalPrice}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#16A34A] font-semibold">
            <span className="size-2 rounded-full bg-[#16A34A]" />
            <span>100% Pure Vegetarian Preparation</span>
          </div>

          {/* WhatsApp Order Button */}
          <a
            href={getWhatsAppOrderUrl(notes)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3.5 text-xs font-bold uppercase tracking-widest text-[#0D0D0D] shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" />
            <span>Send Order via WhatsApp</span>
          </a>

          {/* Direct Call Button */}
          <a
            href="tel:+919501201215"
            className="w-full flex items-center justify-center gap-2 rounded border border-[#332B23] bg-[#171411] py-3 text-xs font-semibold text-[#F5F0E6] hover:border-[#D9A441] hover:text-[#D9A441] transition-all"
          >
            <Phone className="size-3.5 text-[#D9A441]" />
            <span>Call Kitchen (095012 01215)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
