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
        className="relative w-full max-w-md bg-[#17120F] text-[#F3EBDD] h-full flex flex-col justify-between border-l border-[#3A2920] shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#3A2920] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative size-11 rounded-full shrink-0 flex items-center justify-center p-0.5 bg-[#201814] border border-[#C9A45C] shadow-[0_0_15px_rgba(201,164,92,0.35)]">
              <img
                src="/ghuman-logo.svg"
                alt="Ghumans Kitchen Express"
                className="size-full rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display font-black text-lg text-[#F3EBDD] leading-none">
                Your Food Truck Order
              </h2>
              <span className="text-[11px] text-[#C9A45C] font-semibold mt-1 block">
                {totalCount} item{totalCount === 1 ? "" : "s"} selected
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeOrderDrawer}
            aria-label="Close order drawer"
            className="size-9 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#F3EBDD] hover:text-[#C9A45C] transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Order Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {order.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="size-16 rounded-full bg-[#201814] border border-[#3A2920] flex items-center justify-center text-[#D1C2B0] mb-4">
                <UtensilsCrossed className="size-8" />
              </div>
              <h3 className="font-display font-bold text-base text-[#F3EBDD]">
                Your tray is empty
              </h3>
              <p className="text-xs text-[#D1C2B0] mt-1 max-w-xs">
                Explore the menu to add freshly prepared pure veg pizzas, burgers, wraps and shakes!
              </p>
            </div>
          ) : (
            <>
              {order.map(({ id, item, size, price, quantity }) => (
                <div
                  key={id}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#201814] border border-[#3A2920] justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-14 rounded-lg object-cover bg-[#17120F] shrink-0"
                    onError={(e) => {
                      if (item.fallbackImage) e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-[#F3EBDD] truncate">
                      {item.name}
                    </h4>
                    {size && (
                      <span className="text-[10px] font-bold text-[#17120F] bg-[#C9A45C] px-1.5 py-0.2 rounded inline-block mt-0.5">
                        {size}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-[#C9A45C] block mt-0.5">
                      ₹{price} each
                    </span>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-lg border border-[#3A2920] bg-[#17120F]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, -1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="p-1.5 text-[#D1C2B0] hover:text-[#C9A45C]"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-[#F3EBDD]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="p-1.5 text-[#D1C2B0] hover:text-[#C9A45C]"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromOrder(id)}
                      aria-label={`Remove ${item.name}`}
                      className="p-1.5 text-[#D1C2B0] hover:text-red-400"
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
                  className="block text-[11px] font-bold uppercase tracking-wider text-[#D1C2B0] mb-1.5"
                >
                  Special instructions (e.g. Extra spicy / Highway pickup)
                </label>
                <input
                  id="order-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes for the chef..."
                  className="w-full text-xs p-3 rounded-lg bg-[#201814] border border-[#3A2920] text-[#F3EBDD] focus:border-[#C9A45C] focus:outline-none"
                />
              </div>

              {/* Clear button */}
              <button
                type="button"
                onClick={clearOrder}
                className="text-[11px] text-[#D1C2B0] hover:text-red-400 underline font-medium"
              >
                Clear all items
              </button>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-[#3A2920] bg-[#201814]/90 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#D1C2B0]">Total Bill Amount:</span>
            <span className="font-display font-black text-2xl text-[#C9A45C]">
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
            className="w-full flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3.5 text-xs font-bold uppercase tracking-widest text-[#17120F] shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" />
            <span>Send Order via WhatsApp</span>
          </a>

          {/* Direct Call Button */}
          <a
            href="tel:+919501201215"
            className="w-full flex items-center justify-center gap-2 rounded border border-[#3A2920] bg-[#17120F] py-3 text-xs font-semibold text-[#F3EBDD] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all"
          >
            <Phone className="size-3.5 text-[#C9A45C]" />
            <span>Call Kitchen (095012 01215)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
