import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Flame, Plus, ShoppingBag, Sparkles } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from "./menuData";
import { useOrder } from "./OrderContext";

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { addToOrder, openOrderDrawer } = useOrder();

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative bg-[#171411] text-[#F5F0E6] py-20 lg:py-28 overflow-hidden border-t border-[#332B23]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              <span className="size-2 rounded-full bg-[#16A34A]" />
              100% PURE VEGETARIAN MENU
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F0E6] mt-3">
              WHAT’S <span className="text-[#D9A441]">COOKING?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A89E92] mt-2 font-script text-xl sm:text-2xl text-[#D9A441]">
              "Your cravings, our kitchen."
            </p>
          </div>

          {/* Quick Cart / Order View */}
          <button
            type="button"
            onClick={() => openOrderDrawer()}
            className="inline-flex items-center gap-2 rounded bg-[#201C18] border border-[#D9A441]/50 hover:border-[#D9A441] text-[#F5F0E6] hover:text-[#D9A441] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <ShoppingBag className="size-4 text-[#D9A441]" />
            <span>Open Order Tray</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-[#D9A441] text-[#0D0D0D] border-[#D9A441] shadow-[0_0_15px_rgba(217,164,65,0.4)]"
                    : "bg-[#201C18] text-[#A89E92] border-[#332B23] hover:text-[#F5F0E6] hover:border-[#D9A441]/50"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="food-card group rounded-2xl bg-[#201C18] border border-[#332B23] overflow-hidden flex flex-col justify-between"
            >
              {/* Food Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Pure Veg Badge */}
                <div
                  className="absolute top-3 left-3 bg-[#0D0D0D]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#16A34A]/60 flex items-center gap-1.5 shadow-md"
                  title="100% Pure Vegetarian"
                >
                  <span className="size-2 rounded-full bg-[#16A34A]" />
                  <span className="text-[9px] font-bold text-[#F5F0E6] uppercase tracking-wider">
                    Pure Veg
                  </span>
                </div>

                {/* Popular / Chef Special Tag */}
                {item.tag && (
                  <span className="absolute top-3 right-3 bg-[#D9A441] text-[#0D0D0D] text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Item Details */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#F5F0E6] group-hover:text-[#D9A441] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-display font-black text-lg text-[#D9A441] group-hover:scale-110 transition-transform origin-right">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#A89E92] mt-2.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="mt-5 pt-3.5 border-t border-[#332B23]/70 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A89E92]">
                    Freshly Prepared
                  </span>

                  <button
                    type="button"
                    onClick={() => addToOrder(item)}
                    className="inline-flex items-center gap-1.5 rounded bg-[#D9A441] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D0D0D] hover:bg-[#E8B452] shadow-sm hover:shadow-[0_0_12px_rgba(217,164,65,0.4)] transition-all group-hover:translate-x-0.5"
                  >
                    <span>Add</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pure Veg Guarantee Banner */}
        <div className="mt-14 rounded-2xl border border-[#D9A441]/30 bg-[#201C18]/90 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="size-10 rounded-full bg-[#16A34A]/20 border border-[#16A34A] flex items-center justify-center shrink-0">
              <span className="size-3 rounded-full bg-[#16A34A]" />
            </div>
            <div>
              <p className="font-display font-bold text-sm sm:text-base text-[#F5F0E6]">
                100% Pure Vegetarian Highway Kitchen
              </p>
              <p className="text-xs text-[#A89E92]">
                Strictly vegetarian kitchen with fresh ingredients, clean prep stations and zero compromise.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openOrderDrawer()}
            className="shrink-0 inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#D9A441] to-[#E8B452] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D0D0D] shadow"
          >
            <ShoppingBag className="size-3.5" />
            <span>ORDER YOUR TRAY</span>
          </button>
        </div>
      </div>
    </section>
  );
}
