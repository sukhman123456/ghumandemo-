import React, { useState } from "react";
import { Plus, ShoppingBag, Sparkles } from "lucide-react";
import { useOrder } from "./OrderContext";
import { MENU_ITEMS } from "./menuData";

interface CravingCategory {
  id: "pizza" | "burger" | "wraps" | "fries" | "shakes";
  icon: string;
  label: string;
  tagline: string;
  heroImage: string;
  popularDish: string;
}

const CRAVINGS: CravingCategory[] = [
  {
    id: "pizza",
    icon: "🍕",
    label: "PIZZA",
    tagline: "Hand-tossed crust, bubbling cheese & fragrant basil",
    heroImage: "/food-pizza.jpg",
    popularDish: "Farmhouse Gourmet Pizza",
  },
  {
    id: "burger",
    icon: "🍔",
    label: "BURGER",
    tagline: "Golden toasted brioche & sizzling double paneer",
    heroImage: "/food-burger.jpg",
    popularDish: "Double Decker Paneer Burger",
  },
  {
    id: "wraps",
    icon: "🌯",
    label: "WRAP",
    tagline: "Grilled tandoori paneer & zesty mint rolls",
    heroImage: "/food-wrap.jpg",
    popularDish: "Punjabi Paneer Tikka Wrap",
  },
  {
    id: "fries",
    icon: "🍟",
    label: "FRIES",
    tagline: "Hot crinkle fries swimming in rich cheddar sauce",
    heroImage: "/food-fries.jpg",
    popularDish: "Loaded Cheesy Crinkle Fries",
  },
  {
    id: "shakes",
    icon: "🥤",
    label: "SHAKES",
    tagline: "Creamy Belgian chocolate & cold coffee frappe",
    heroImage: "/food-shake.jpg",
    popularDish: "Belgian Chocolate Thick Shake",
  },
];

export function CravingSelector() {
  const [selectedCraving, setSelectedCraving] = useState<"pizza" | "burger" | "wraps" | "fries" | "shakes">("burger");
  const { addToOrder, openOrderDrawer } = useOrder();

  const activeCategory = CRAVINGS.find((c) => c.id === selectedCraving) || CRAVINGS[1];
  const categoryItems = MENU_ITEMS.filter((item) => item.category === selectedCraving);

  return (
    <section
      id="cravings"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
            <Sparkles className="size-3.5 text-[#C9A45C]" />
            INSTANT CRAVING FINDER
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
            WHAT ARE YOU <span className="text-[#C9A45C]">CRAVING?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D1C2B0] mt-3">
            Pick your craving below — we'll bring up the sizzling favourites crafted on the truck right now.
          </p>
        </div>

        {/* Large Visual Emoji Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {CRAVINGS.map((craving) => {
            const isSelected = selectedCraving === craving.id;
            return (
              <button
                key={craving.id}
                type="button"
                onClick={() => setSelectedCraving(craving.id)}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 transform active:scale-95 ${
                  isSelected
                    ? "bg-[#281F1A] border-[#C9A45C] shadow-[0_0_25px_rgba(201,164,92,0.3)] -translate-y-1"
                    : "bg-[#201814] border-[#3A2920] hover:border-[#C9A45C]/50 hover:bg-[#251D18]"
                }`}
              >
                <span className="text-3xl sm:text-4xl filter drop-shadow-md">
                  {craving.icon}
                </span>
                <span
                  className={`font-display font-extrabold text-sm sm:text-base tracking-wider mt-2 ${
                    isSelected ? "text-[#C9A45C]" : "text-[#F3EBDD]"
                  }`}
                >
                  {craving.label}
                </span>
                <span className="text-[10px] text-[#D1C2B0] mt-0.5 uppercase tracking-wider font-semibold">
                  Pure Veg
                </span>
                {isSelected && (
                  <span className="absolute -bottom-1 size-2 rounded-full bg-[#C9A45C] shadow-[0_0_8px_#C9A45C]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Expanded Craving Showcase */}
        <div className="bg-[#201814] border border-[#3A2920] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(23,18,15,0.9)] relative overflow-hidden animate-in fade-in zoom-in-95 duration-400">
          {/* Top category banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#3A2920]">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeCategory.icon}</span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#F3EBDD]">
                  {activeCategory.label} HEADQUARTERS
                </h3>
                <p className="text-xs sm:text-sm text-[#C9A45C] font-script text-base">
                  {activeCategory.tagline}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#C9A45C] to-[#D8B772] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#17120F] shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="size-4" />
              <span>ORDER ALL {activeCategory.label}</span>
            </button>
          </div>

          {/* Dishes in this category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {categoryItems.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-2xl bg-[#281F1A] border border-[#3A2920] overflow-hidden hover:border-[#C9A45C] transition-all flex flex-col justify-between"
              >
                {/* Food Image with pure veg tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#17120F]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#17120F]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#2E8B57]/50 flex items-center gap-1.5 shadow-md">
                    <span className="size-2 rounded-full bg-[#2E8B57]" />
                    <span className="text-[9px] font-bold text-[#F3EBDD] uppercase tracking-wider">
                      Pure Veg
                    </span>
                  </div>
                  {dish.tag && (
                    <div className="absolute top-3 right-3 bg-[#C9A45C] text-[#17120F] px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider shadow">
                      {dish.tag}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#F3EBDD] group-hover:text-[#C9A45C] transition-colors">
                        {dish.name}
                      </h4>
                      <span className="font-display font-black text-base text-[#C9A45C] shrink-0">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#D1C2B0] mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {/* Add button */}
                  <div className="mt-5 pt-3 border-t border-[#3A2920]/60 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#D1C2B0]">
                      Freshly Prepared
                    </span>
                    <button
                      type="button"
                      onClick={() => addToOrder(dish)}
                      className="inline-flex items-center gap-1.5 rounded bg-[#C9A45C]/15 border border-[#C9A45C]/60 px-3.5 py-1.5 text-xs font-bold text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#17120F] transition-all"
                    >
                      <Plus className="size-3.5" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
