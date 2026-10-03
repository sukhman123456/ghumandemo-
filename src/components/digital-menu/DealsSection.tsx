import React, { useState } from "react";
import { Sparkles, Flame, CheckCircle, Plus, Gift, ShoppingBag } from "lucide-react";
import { DIGITAL_MENU_ITEMS, MenuItem } from "../../data/digitalMenuData";
import { useOrder } from "../food-truck/OrderContext";

export function DealsSection() {
  const { addToOrder, order } = useOrder();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const deals = DIGITAL_MENU_ITEMS.filter((item) => item.category === "deals");

  const handleAddDeal = (deal: MenuItem) => {
    addToOrder(deal);
    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1500);
  };

  return (
    <section id="deals" className="py-16 sm:py-20 bg-[#5B0C16] text-[#FFFDF8] relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#991B1B]/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40 text-xs font-black uppercase tracking-wider mb-3">
            <Flame className="size-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            EXPRESS COMBO MEALS & OFFERS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FFFDF8]">
            EXCLUSIVE RESTAURANT DEALS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#FDE68A] font-medium">
            Hand-crafted combo feasts designed for maximum savings, big smiles, and authentic Punjabi fast-food energy.
          </p>
        </div>

        {/* MAIN PROMOTIONAL BANNER: BUY 4 PIZZA GET 1 FREE */}
        <div className="mb-14 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] p-1 shadow-[0_20px_50px_rgba(245,158,11,0.25)] border-2 border-[#FEF3C7]/40">
          <div className="bg-[#1C1917]/95 rounded-[22px] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Background sparkle illustration */}
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Gift className="size-80 text-[#F59E0B]" />
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="size-16 sm:size-20 rounded-2xl bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] text-[#1C1917] flex items-center justify-center font-black text-2xl sm:text-3xl shrink-0 shadow-lg rotate-[-4deg]">
                <Gift className="size-8 sm:size-10" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7F1D1D] text-[#FFFDF8] text-[11px] font-black uppercase tracking-wider mb-2">
                  <Sparkles className="size-3 text-[#FBBF24]" />
                  SIGNATURE PIZZA OFFER
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFFDF8] tracking-tight">
                  BUY 4 PIZZA <span className="text-[#FBBF24]">(ANY SIZE)</span>
                </h3>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F59E0B] mt-0.5">
                  GET 1 PIZZA (ANY SIZE) FREE!
                </h4>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-[#FDE68A]">
                  Valid On Everyday · Valid for dine-in, truck pickup, and WhatsApp takeaway orders.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all text-center"
              >
                SELECT 4 PIZZAS NOW
              </a>
            </div>
          </div>
        </div>

        {/* 4 Combo Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => {
            const inCart = order.some((o) => o.id === deal.id);
            const isJustAdded = addedDealId === deal.id;

            return (
              <div
                key={deal.id}
                className="bg-[#FFFDF8] text-[#1C1917] rounded-3xl overflow-hidden border-2 border-[#EFE5D2] hover:border-[#F59E0B] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Deal Image Banner */}
                  <div className="relative h-48 overflow-hidden bg-[#1C1917]">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        if (deal.fallbackImage) e.currentTarget.src = deal.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="veg-badge" title="100% Pure Veg" />
                      {deal.code && (
                        <span className="px-2 py-0.5 rounded-md bg-[#1C1917]/90 text-[#FDE68A] text-xs font-black">
                          {deal.code}
                        </span>
                      )}
                    </div>

                    {deal.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#991B1B] text-[#FFFDF8] text-[10px] font-black uppercase tracking-wider shadow">
                        {deal.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#FFFDF8]">
                      <span className="text-xl font-black text-[#FBBF24]">₹{deal.price}</span>
                      <span className="text-[11px] font-bold text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
                        Combo Pack
                      </span>
                    </div>
                  </div>

                  {/* Deal Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#1C1917] tracking-tight leading-snug group-hover:text-[#991B1B] transition-colors">
                      {deal.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#57534E] leading-relaxed">
                      {deal.description}
                    </p>

                    {/* Includes List */}
                    {deal.includes && deal.includes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[#EFE5D2] space-y-1.5">
                        <span className="text-[11px] font-extrabold uppercase text-[#7F1D1D] tracking-wider block">
                          Includes:
                        </span>
                        {deal.includes.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#292524]">
                            <CheckCircle className="size-3.5 text-[#16A34A] shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer / Add Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleAddDeal(deal)}
                    className={`w-full py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                      isJustAdded
                        ? "bg-[#16A34A] text-white scale-[1.02]"
                        : inCart
                        ? "bg-[#FEF3C7] text-[#92400E] hover:bg-[#F59E0B] hover:text-[#1C1917] border border-[#F59E0B]"
                        : "bg-[#7F1D1D] hover:bg-[#991B1B] text-[#FFFDF8] active:scale-95"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <CheckCircle className="size-4" />
                        ADDED TO CART!
                      </>
                    ) : inCart ? (
                      <>
                        <ShoppingBag className="size-4" />
                        ADD ANOTHER COMBO (+₹{deal.price})
                      </>
                    ) : (
                      <>
                        <Plus className="size-4" />
                        + ADD DEAL · ₹{deal.price}
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
