import React, { useState, useMemo } from "react";
import { Search, Flame, Sparkles, Filter } from "lucide-react";
import { CATEGORIES, DIGITAL_MENU_ITEMS, MenuItem, CategoryInfo } from "../../data/digitalMenuData";
import { MenuCard } from "./MenuCard";

export function MenuSystem() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter items by category & search
  const filteredItems = useMemo(() => {
    return DIGITAL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group items by category if "all" is selected
  const categoriesToRender = useMemo(() => {
    if (activeCategory !== "all") {
      const cat = CATEGORIES.find((c) => c.id === activeCategory);
      return cat ? [cat] : [];
    }
    // Return all categories that have items
    return CATEGORIES.filter((c) => c.id !== "all");
  }, [activeCategory]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-warm-canvas text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7F1D1D]/10 text-[#7F1D1D] text-xs font-black uppercase tracking-wider mb-3">
            <Flame className="size-3.5 fill-[#7F1D1D] text-[#7F1D1D]" />
            100% PURE VEGETARIAN DIGITAL MENU
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1C1917]">
            EXPLORE OUR FRESH MENU
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#57534E] font-medium">
            Stone-baked artisan pizzas, sizzling griddled paneer burgers, flaky wraps, and thick chilled milkshakes prepared fresh to order.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#78716C]" />
            <input
              type="text"
              placeholder="Search burgers, pizzas, wraps, shakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#EFE5D2] focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 text-sm font-semibold placeholder:text-[#A8A29E] text-[#1C1917] shadow-sm outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#78716C] hover:text-[#1C1917] bg-[#FBF4E6] px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Sticky Desktop & Mobile Category Bar */}
        <div className="sticky top-[60px] sm:top-[70px] z-30 py-3 bg-[#FAF4E8]/95 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-[#EFE5D2] mb-10 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? DIGITAL_MENU_ITEMS.length
                  : DIGITAL_MENU_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery("");
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95 shrink-0 ${
                    isActive
                      ? "bg-[#7F1D1D] text-[#FFFDF8] shadow-[#7F1D1D]/30 border border-[#7F1D1D]"
                      : "bg-white text-[#44403C] hover:bg-[#FEF3C7] hover:text-[#92400E] border border-[#EFE5D2]"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] font-black px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-[#F59E0B] text-[#1C1917]"
                        : "bg-[#F5EEDB] text-[#78716C]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Display */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EFE5D2] p-8 max-w-lg mx-auto">
            <span className="text-4xl mb-3 block">🔍</span>
            <h3 className="text-xl font-black text-[#1C1917]">No items found</h3>
            <p className="text-xs text-[#57534E] mt-1">
              We couldn't find any dishes matching "{searchQuery}". Try searching for pizza, paneer, burger or shake.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#F59E0B] text-[#1C1917] font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : activeCategory !== "all" || searchQuery ? (
          /* Single Flat Grid when Filtered */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Grouped Categorized View */
          <div className="space-y-16">
            {categoriesToRender.map((category) => {
              const catItems = DIGITAL_MENU_ITEMS.filter(
                (item) => item.category === category.id
              );
              if (catItems.length === 0) return null;

              return (
                <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-36">
                  {/* Category Section Header */}
                  <div className="flex items-center justify-between border-b-2 border-[#EFE5D2] pb-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1C1917]">
                          {category.label}
                        </h3>
                        <span className="text-xs text-[#78716C] font-semibold">
                          {catItems.length} fresh items ready to order
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {catItems.map((item) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
