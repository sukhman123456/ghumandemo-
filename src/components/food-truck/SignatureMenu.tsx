import React, { useState, useMemo } from "react";
import { ArrowRight, ShoppingBag, Plus, Minus, Search, Sparkles, Gift, Check, Flame } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, SizeOption } from "./menuData";
import { useOrder } from "./OrderContext";

export function SignatureMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { order, addToOrder, updateQuantity, removeFromOrder, openOrderDrawer, totalCount, openDriveThru } = useOrder();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-[#3A2920]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#C9A45C]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#7F1D1D]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
              <span className="size-2 rounded-full bg-[#2E8B57]" />
              100% PURE VEGETARIAN DIGITAL MENU
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
              WHAT’S <span className="text-[#C9A45C]">COOKING?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#D1C2B0] mt-2 font-script text-2xl text-[#C9A45C]">
              "Where Cravings Get Expressed"
            </p>
          </div>

          {/* Quick Order CTAs: Drive-Thru & Order Tray */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openDriveThru()}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A81B1E] to-[#7B0000] hover:from-[#A81B1E] hover:to-[#8B0000] text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all shadow-[0_2px_15px_rgba(139,0,0,0.5)] border border-[#E8C88B]/70 active:scale-95 group"
            >
              <span className="text-sm group-hover:scale-110 transition-transform">🚗</span>
              <span className="tracking-wide">DRIVE-THRU</span>
              <span className="bg-[#E8C88B] text-[#17120F] text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-normal">Order Ahead</span>
            </button>

            <button
              type="button"
              onClick={() => openOrderDrawer()}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#201814] border border-[#C9A45C]/50 hover:border-[#C9A45C] text-[#F3EBDD] hover:text-[#C9A45C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 group"
            >
              <ShoppingBag className="size-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
              <span>View Tray</span>
              {totalCount > 0 && (
                <span className="bg-[#C9A45C] text-[#17120F] text-[10px] font-black px-2 py-0.5 rounded-full">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar & Promo Banner */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="w-full md:max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#D1C2B0]/60" />
            <input
              type="text"
              placeholder="Search burgers, pizzas, wraps, fries, shakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#201814] border border-[#3A2920] focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] text-xs font-semibold placeholder:text-[#D1C2B0]/40 text-[#F3EBDD] outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#D1C2B0] hover:text-[#C9A45C] bg-[#3A2920] px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Offer Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#201814] border border-[#C9A45C]/30 text-xs font-bold text-[#C9A45C]">
            <Gift className="size-3.5" />
            <span>BUY 4 PIZZA (ANY SIZE) GET 1 PIZZA FREE!</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? MENU_ITEMS.length
                : MENU_ITEMS.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery("");
                }}
                className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border active:scale-95 shrink-0 ${
                  isSelected
                    ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-[0_0_15px_rgba(201,164,92,0.35)]"
                    : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:text-[#F3EBDD] hover:border-[#C9A45C]/50"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-[#17120F] text-[#C9A45C]"
                      : "bg-[#3A2920] text-[#D1C2B0]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* BUY 4 PIZZA GET 1 FREE BANNER (when viewing all, pizza, or deals) */}
        {(activeCategory === "all" || activeCategory === "pizza" || activeCategory === "deals") && !searchQuery && (
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#201814] via-[#2D1F17] to-[#201814] border-2 border-[#C9A45C]/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <Gift className="size-48 text-[#C9A45C]" />
            </div>
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="size-14 rounded-2xl bg-[#C9A45C] text-[#17120F] flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">
                <Gift className="size-7" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#C9A45C] tracking-widest block">
                  EVERYDAY PROMOTIONAL OFFER
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#F3EBDD] mt-0.5">
                  BUY 4 PIZZA (ANY SIZE) — GET 1 PIZZA FREE!
                </h3>
                <p className="text-xs text-[#D1C2B0] mt-1">
                  Enjoy Punjab's favorite stone-baked pizzas hot from the food truck oven. Valid on dine-in, takeaway, and WhatsApp delivery orders.
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveCategory("pizza")}
              className="px-5 py-2.5 rounded-full bg-[#C9A45C] hover:bg-[#D8B772] text-[#17120F] font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-sm"
            >
              Explore Pizzas
            </button>
          </div>
        )}

        {/* Food Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#201814] rounded-2xl border border-[#3A2920] p-8 max-w-md mx-auto">
            <span className="text-3xl mb-3 block">🔍</span>
            <h3 className="text-lg font-bold text-[#F3EBDD]">No dishes found</h3>
            <p className="text-xs text-[#D1C2B0] mt-1">
              No menu items match "{searchQuery}". Try searching for burger, paneer, fries, or shake.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#C9A45C] text-[#17120F] font-bold text-xs"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FoodItemCard({ item }: { item: MenuItem }) {
  const { order, addToOrder, updateQuantity, removeFromOrder, openDriveThru } = useOrder();

  // Size state
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined
  );

  const [justAdded, setJustAdded] = useState(false);

  const currentCartId = `${item.id}-${selectedSize ? selectedSize.size : "std"}`;
  const cartEntry = order.find((entry) => entry.cartId === currentCartId);
  const currentQuantity = cartEntry ? cartEntry.quantity : 0;
  const currentPrice = selectedSize ? selectedSize.price : item.price;

  const handleAdd = () => {
    addToOrder(
      item,
      selectedSize ? selectedSize.size : undefined,
      currentPrice
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="food-card group rounded-2xl bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C] overflow-hidden flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Food Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#17120F]">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            onError={(e) => {
              if (item.fallbackImage) e.currentTarget.src = item.fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Pure Veg Badge & Code */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <div
              className="bg-[#17120F]/90 backdrop-blur-md px-2 py-1 rounded-full border border-[#2E8B57]/60 flex items-center gap-1.5 shadow"
              title="100% Pure Vegetarian"
            >
              <span className="size-2 rounded-full bg-[#2E8B57]" />
              <span className="text-[9px] font-bold text-[#F3EBDD] uppercase tracking-wider">
                Pure Veg
              </span>
            </div>
            {item.code && (
              <span className="px-2 py-0.5 rounded-md bg-[#17120F]/90 text-[#C9A45C] text-[10px] font-black border border-[#C9A45C]/30 shadow">
                {item.code}
              </span>
            )}
            {item.quantityNote && (
              <span className="px-2 py-0.5 rounded-md bg-[#C9A45C] text-[#17120F] text-[9px] font-black uppercase shadow">
                {item.quantityNote}
              </span>
            )}
          </div>

          {/* Tag */}
          {item.tag && (
            <span className="absolute top-3 right-3 bg-[#C9A45C] text-[#17120F] text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow">
              {item.tag}
            </span>
          )}

          {/* Quick Price on Image */}
          <div className="absolute bottom-2.5 left-3">
            <span className="text-xl font-black text-[#F3EBDD] drop-shadow-md">
              ₹{currentPrice}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="font-display text-base sm:text-lg font-bold text-[#F3EBDD] group-hover:text-[#C9A45C] transition-colors leading-snug">
            {item.name}
          </h3>

          <p className="text-xs text-[#D1C2B0] mt-1.5 leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Deals Includes List */}
          {item.includes && item.includes.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-[#3A2920] space-y-1">
              <span className="text-[10px] font-bold uppercase text-[#C9A45C] tracking-wider block">
                Includes:
              </span>
              {item.includes.map((inc, i) => (
                <span key={i} className="text-[11px] text-[#D1C2B0] block">
                  • {inc}
                </span>
              ))}
            </div>
          )}

          {/* Size Selector for Items with Multiple Sizes */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[#3A2920]">
              <span className="text-[10px] font-bold text-[#C9A45C] uppercase tracking-wider block mb-1.5">
                Size:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {item.sizes.map((s) => {
                  const isSelected = selectedSize?.size === s.size;
                  return (
                    <button
                      key={s.size}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-sm"
                          : "bg-[#17120F] text-[#D1C2B0] hover:text-[#F3EBDD] border-[#3A2920]"
                      }`}
                    >
                      <span className="text-[11px]">{s.label}</span>
                      <span className={`text-[11px] font-black ${isSelected ? "text-[#17120F]" : "text-[#C9A45C]"}`}>
                        ₹{s.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Button / Stepper + Drive-Thru */}
      <div className="p-4 sm:p-5 pt-0 space-y-2">
        {currentQuantity > 0 ? (
          <>
            <div className="flex items-center justify-between bg-[#17120F] rounded-xl p-1 border border-[#C9A45C]">
              <button
                onClick={() => {
                  if (currentQuantity <= 1) removeFromOrder(currentCartId);
                  else updateQuantity(currentCartId, -1);
                }}
                className="size-8 rounded-lg bg-[#201814] text-[#D1C2B0] hover:text-[#C9A45C] flex items-center justify-center font-bold"
                aria-label="Decrease quantity"
              >
                <Minus className="size-3.5" />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-[#F3EBDD] leading-none">
                  {currentQuantity} in Tray
                </span>
                <span className="text-[10px] font-black text-[#C9A45C] mt-0.5">
                  ₹{currentPrice * currentQuantity}
                </span>
              </div>
              <button
                onClick={() => updateQuantity(currentCartId, 1)}
                className="size-8 rounded-lg bg-[#C9A45C] text-[#17120F] hover:bg-[#D8B772] flex items-center justify-center font-bold"
                aria-label="Increase quantity"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => openDriveThru(item)}
              className="w-full py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 bg-[#8B0000]/30 hover:bg-[#8B0000] text-[#FFFDF8] border border-[#E8C88B]/40 transition-all"
            >
              <span>🚗</span> Order via Drive-Thru
            </button>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`w-full py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95 ${
                justAdded
                  ? "bg-[#2E8B57] text-white"
                  : "bg-[#201814] hover:bg-[#C9A45C] text-[#C9A45C] hover:text-[#17120F] border border-[#C9A45C]/50 hover:border-[#C9A45C]"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="size-3.5" />
                  ADDED!
                </>
              ) : (
                <>
                  <Plus className="size-3.5 stroke-[2.5]" />
                  ADD TO CART
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => openDriveThru(item)}
              className="w-full py-2.5 rounded-xl font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95 bg-gradient-to-r from-[#8B0000] via-[#A81B1E] to-[#7B0000] hover:from-[#A81B1E] hover:to-[#8B0000] text-white border border-[#E8C88B]/50"
              title="Order this item via Drive-Thru"
            >
              <span>🚗</span>
              <span>DRIVE-THRU</span>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
