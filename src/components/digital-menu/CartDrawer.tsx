import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useOrder, RESTAURANT_PHONE } from "../food-truck/OrderContext";

export function CartDrawer() {
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

  const whatsappUrl = getWhatsAppOrderUrl(notes);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeOrderDrawer}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          aria-label="Order Cart"
          className="w-screen max-w-md bg-[#FFFDF8] text-[#1C1917] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l-2 border-[#EFE5D2]"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#7F1D1D] text-[#FFFDF8] flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-full bg-[#F59E0B] text-[#1C1917] flex items-center justify-center font-black">
                <ShoppingBag className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight leading-none text-[#FFFDF8]">
                  YOUR ORDER CART
                </h2>
                <span className="text-xs font-semibold text-[#FDE68A] mt-0.5 block">
                  {totalCount} {totalCount === 1 ? "item" : "items"} selected · 100% Pure Veg
                </span>
              </div>
            </div>

            <button
              onClick={closeOrderDrawer}
              className="p-2 rounded-full text-[#FFFDF8]/80 hover:text-white hover:bg-[#5B0C16] transition-colors"
              aria-label="Close cart"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {order.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="size-20 rounded-full bg-[#FAF4E8] text-[#7F1D1D] flex items-center justify-center mb-4 border border-[#EFE5D2]">
                  <ShoppingBag className="size-10 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-black text-[#1C1917]">Your Cart is Empty</h3>
                <p className="text-xs text-[#57534E] max-w-xs mt-1.5 leading-relaxed">
                  Browse our burgers, wraps, stone-baked pizzas, fries and thick shakes to start your order!
                </p>
                <button
                  onClick={closeOrderDrawer}
                  className="mt-6 px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  START EXPLORING MENU
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-[#57534E] pb-2 border-b border-[#EFE5D2]">
                  <span className="font-bold uppercase tracking-wider">Selected Items</span>
                  <button
                    onClick={clearOrder}
                    className="text-[#991B1B] hover:underline font-bold"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {order.map((entry) => (
                    <div
                      key={entry.cartId}
                      className="p-3.5 rounded-2xl bg-white border border-[#EFE5D2] shadow-sm flex items-center gap-3.5 hover:border-[#F59E0B] transition-colors"
                    >
                      {/* Thumbnail */}
                      <div className="relative size-16 rounded-xl overflow-hidden bg-[#FAF4E8] shrink-0 border border-[#EFE5D2]">
                        <img
                          src={entry.image}
                          alt={entry.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="veg-badge shrink-0" />
                          <h4 className="text-sm font-black text-[#1C1917] truncate leading-tight">
                            {entry.name}
                          </h4>
                        </div>
                        {entry.size && (
                          <span className="inline-block mt-0.5 text-[11px] font-bold text-[#7F1D1D] bg-[#FEF3C7] px-2 py-0.5 rounded-md">
                            Size: {entry.size}
                          </span>
                        )}
                        <div className="mt-1 text-xs font-black text-[#1C1917]">
                          ₹{entry.price} × {entry.quantity} ={" "}
                          <span className="text-[#7F1D1D]">₹{entry.price * entry.quantity}</span>
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <button
                          onClick={() => removeFromOrder(entry.cartId)}
                          className="text-[#A8A29E] hover:text-[#991B1B] p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                        <div className="flex items-center gap-1 bg-[#FAF4E8] rounded-lg p-0.5 border border-[#EFE5D2]">
                          <button
                            onClick={() => updateQuantity(entry.cartId, -1)}
                            className="size-6 rounded-md bg-white hover:bg-[#7F1D1D] hover:text-white text-[#1C1917] flex items-center justify-center font-bold text-xs shadow-sm transition-colors"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-black text-[#1C1917]">
                            {entry.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(entry.cartId, 1)}
                            className="size-6 rounded-md bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] flex items-center justify-center font-bold text-xs shadow-sm transition-colors"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Instructions */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-[#44403C] uppercase tracking-wider block mb-1.5">
                    Cooking or Delivery Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Extra spicy, less cheese, pack separately..."
                    className="w-full p-2.5 rounded-xl bg-[#FAF4E8] border border-[#EFE5D2] text-xs font-medium focus:border-[#F59E0B] outline-none resize-none placeholder:text-[#A8A29E]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Bottom Checkout & WhatsApp Order Summary */}
          {order.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-[#EFE5D2] shadow-[0_-10px_25px_rgba(0,0,0,0.05)] space-y-4">
              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#57534E]">
                <div className="flex items-center justify-between">
                  <span>Items Subtotal:</span>
                  <span className="font-bold text-[#1C1917]">₹{totalPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes & Kitchen Service:</span>
                  <span className="font-bold text-[#16A34A]">Included (₹0 Extra)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#EFE5D2] text-base sm:text-lg font-black text-[#1C1917]">
                  <span>Total Payable:</span>
                  <span className="text-[#7F1D1D] font-black text-xl">₹{totalPrice}</span>
                </div>
              </div>

              {/* Order Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all text-center"
                >
                  <MessageSquare className="size-4 fill-white" />
                  ORDER NOW VIA WHATSAPP (₹{totalPrice})
                </a>

                <button
                  type="button"
                  onClick={closeOrderDrawer}
                  className="w-full py-2.5 rounded-2xl bg-[#FAF4E8] hover:bg-[#F5EEDB] text-[#44403C] font-bold text-xs uppercase tracking-wider border border-[#EFE5D2] transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>

              <p className="text-[11px] text-center text-[#78716C] leading-tight">
                Clicking "ORDER NOW" automatically opens WhatsApp to <span className="font-bold text-[#1C1917]">{RESTAURANT_PHONE}</span> with your prepared item list.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
