import React, { useState, useMemo } from "react";
import {
  Car,
  X,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Clock,
  Calendar,
  Smartphone,
  Copy,
  Check,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  ShieldAlert,
  Flame,
  Search,
} from "lucide-react";
import {
  useOrder,
  RESTAURANT_PHONE,
  RESTAURANT_UPI_ID,
  AddonOption,
  DriveThruCustomerDetails,
} from "./OrderContext";
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem, SizeOption } from "./menuData";

type DriveThruStep = "menu" | "cart" | "confirmed";

const AVAILABLE_ADDONS: AddonOption[] = [
  { name: "Extra Melted Cheese", price: 30 },
  { name: "Cheese Burst Crust", price: 50 },
  { name: "Brown Burst Crust", price: 50 },
  { name: "Cheesy Jalapeño Dip", price: 30 },
  { name: "Tandoori Garlic Dip", price: 30 },
];

export function DriveThruModal() {
  const {
    isDriveThruOpen,
    closeDriveThru,
    driveThruOrder,
    addToDriveThru,
    removeFromDriveThru,
    updateDriveThruQuantity,
    clearDriveThru,
    driveThruTotalCount,
    driveThruSubtotal,
    driveThruAddonsTotal,
    driveThruTotalPrice,
    driveThruAdvanceAmount,
    driveThruRemainingAmount,
    getDriveThruWhatsAppUrl,
  } = useOrder();

  // Directly start on the full menu so all dishes are instantly visible
  const [step, setStep] = useState<DriveThruStep>("menu");

  // Menu step state
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Item customization modal
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [itemSelectedSize, setItemSelectedSize] = useState<SizeOption | undefined>(undefined);
  const [itemSelectedAddons, setItemSelectedAddons] = useState<AddonOption[]>([]);

  // Customer pickup details
  const [customerDetails, setCustomerDetails] = useState<DriveThruCustomerDetails>({
    name: "",
    phone: "",
    pickupDate: "Today",
    pickupTime: "In 15-20 Mins",
    vehicleType: "Car",
    vehicleNumber: "",
    instructions: "",
  });

  const [formError, setFormError] = useState("");
  const [generatedOrderNo, setGeneratedOrderNo] = useState("");

  // Filter items
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

  // Categories to render for grouped section view
  const categoriesToRender = useMemo(() => {
    if (activeCategory !== "all") {
      return MENU_CATEGORIES.filter((c) => c.id === activeCategory);
    }
    return MENU_CATEGORIES.filter((c) => c.id !== "all");
  }, [activeCategory]);

  if (!isDriveThruOpen) return null;

  // Quantity of item currently in cart
  const getItemCartQuantity = (itemId: string) => {
    return driveThruOrder
      .filter((entry) => entry.item.id === itemId)
      .reduce((sum, entry) => sum + entry.quantity, 0);
  };

  const handleOpenCustomize = (item: MenuItem) => {
    setCustomizingItem(item);
    setItemSelectedSize(item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined);
    setItemSelectedAddons([]);
  };

  const handleQuickAdd = (item: MenuItem) => {
    if (item.sizes && item.sizes.length > 0) {
      handleOpenCustomize(item);
    } else {
      addToDriveThru(item);
    }
  };

  const handleAddCustomizedToCart = () => {
    if (!customizingItem) return;
    addToDriveThru(
      customizingItem,
      itemSelectedSize?.size,
      itemSelectedSize?.price || customizingItem.price,
      itemSelectedAddons
    );
    setCustomizingItem(null);
  };

  const toggleAddon = (addon: AddonOption) => {
    setItemSelectedAddons((prev) => {
      const exists = prev.some((a) => a.name === addon.name);
      if (exists) {
        return prev.filter((a) => a.name !== addon.name);
      }
      return [...prev, addon];
    });
  };

  const handleSubmitToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerDetails.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!customerDetails.phone.trim() || customerDetails.phone.length < 10) {
      setFormError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!customerDetails.vehicleNumber.trim()) {
      setFormError("Please enter your vehicle number (e.g. PB08-XX-1234).");
      return;
    }
    setFormError("");
    const orderNo = `#GKE-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedOrderNo(orderNo);

    // Open WhatsApp directly with full order and payment summary
    const url = getDriveThruWhatsAppUrl(customerDetails, orderNo);
    window.open(url, "_blank");

    // Move to confirmation step on website
    setStep("confirmed");
  };

  // Render a dish card
  const renderItemCard = (item: MenuItem) => {
    const qtyInCart = getItemCartQuantity(item.id);
    const cartEntriesForItem = driveThruOrder.filter((e) => e.item.id === item.id);

    return (
      <div
        key={item.id}
        className="p-3 sm:p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C]/60 flex flex-col justify-between transition-all group shadow-sm hover:shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
      >
        <div className="flex gap-3">
          <div className="relative size-20 sm:size-22 rounded-xl overflow-hidden bg-[#17120F] shrink-0 border border-[#3A2920]">
            <img
              src={item.image}
              alt={item.name}
              className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                if (item.fallbackImage) e.currentTarget.src = item.fallbackImage;
              }}
            />
            <span
              className="absolute top-1.5 left-1.5 size-2 rounded-full bg-[#16A34A] border border-white shadow-sm"
              title="100% Pure Vegetarian"
            />
            {item.tag && (
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#8B0000] text-[#FFFDF8] text-[8px] font-black uppercase tracking-wider">
                {item.tag}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {item.code && (
                <span className="text-[9px] font-black text-[#C9A45C] bg-[#17120F] px-1.5 py-0.5 rounded border border-[#C9A45C]/40">
                  {item.code}
                </span>
              )}
              <h4 className="font-bold text-xs sm:text-sm text-[#F3EBDD] truncate group-hover:text-[#C9A45C] transition-colors">
                {item.name}
              </h4>
            </div>

            <p className="text-[10px] sm:text-[11px] text-[#D1C2B0]/80 line-clamp-2 mt-1 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black text-[#C9A45C]">
                {item.sizes && item.sizes.length > 0
                  ? `From ₹${item.sizes[0].price}`
                  : `₹${item.price}`}
              </span>

              {item.sizes && item.sizes.length > 0 && (
                <span className="text-[9px] text-[#D1C2B0]/70 uppercase font-semibold">
                  Sizes Available
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action button: Stepper if in cart or Add/Customize */}
        <div className="mt-2.5 pt-2 border-t border-[#3A2920]/80 flex items-center justify-between gap-2">
          {qtyInCart > 0 ? (
            <div className="w-full flex items-center justify-between bg-[#17120F] rounded-xl p-1 border border-[#C9A45C]/60">
              <button
                type="button"
                onClick={() => {
                  if (cartEntriesForItem.length > 0) {
                    updateDriveThruQuantity(cartEntriesForItem[0].id, -1);
                  }
                }}
                className="size-7 rounded-lg bg-[#201814] text-[#D1C2B0] hover:text-[#C9A45C] flex items-center justify-center font-bold"
                aria-label="Decrease quantity"
              >
                <Minus className="size-3" />
              </button>

              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-[#FFFDF8]">
                  {qtyInCart} in Tray
                </span>
                {item.sizes && (
                  <button
                    type="button"
                    onClick={() => handleOpenCustomize(item)}
                    className="text-[9px] text-[#C9A45C] hover:underline font-bold"
                  >
                    +Size
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (cartEntriesForItem.length > 0) {
                    updateDriveThruQuantity(cartEntriesForItem[0].id, 1);
                  } else {
                    handleQuickAdd(item);
                  }
                }}
                className="size-7 rounded-lg bg-[#C9A45C] text-[#17120F] hover:bg-[#D8B772] flex items-center justify-center font-bold"
                aria-label="Increase quantity"
              >
                <Plus className="size-3" />
              </button>
            </div>
          ) : (
            <>
              <span className="text-[9px] sm:text-[10px] text-[#D1C2B0]/70 truncate">
                {item.sizes ? "Select Size & Extras" : "Drive-Thru Ready"}
              </span>

              <button
                type="button"
                onClick={() => handleQuickAdd(item)}
                className="whitespace-nowrap px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#C9A45C] hover:bg-[#D8B772] text-[#17120F] font-black text-[10px] sm:text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1"
              >
                <Plus className="size-3 stroke-[2.5]" />
                <span>{item.sizes ? "CUSTOMIZE" : "ADD TO TRAY"}</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-4xl bg-[#17120F] text-[#F3EBDD] rounded-2xl sm:rounded-3xl border-2 border-[#C9A45C]/50 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Header Bar */}
        <div className="p-3.5 sm:p-5 bg-gradient-to-r from-[#7F1D1D] via-[#5B0C16] to-[#7F1D1D] border-b border-[#C9A45C]/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="size-10 sm:size-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#C9A45C] to-[#E8C88B] text-[#17120F] flex items-center justify-center font-black shadow-lg shrink-0 border border-[#FFFDF8]/40">
              <span className="text-lg sm:text-xl">🚗</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-black text-base sm:text-xl text-[#FFFDF8] tracking-tight uppercase leading-none">
                  DRIVE-THRU MENU & ORDER
                </h2>
                <span className="px-1.5 sm:px-2 py-0.5 rounded bg-[#16A34A] text-[8px] sm:text-[9px] font-black text-white shadow-sm">
                  100% PURE VEG
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#FDE68A] font-semibold mt-0.5 sm:mt-1 block truncate">
                Grand Trunk Road, Dhilwan · Order Ahead · Pick Up Hot & Fresh
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {step === "menu" ? (
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="relative px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#201814] border border-[#C9A45C]/60 text-xs font-bold text-[#F3EBDD] hover:text-[#C9A45C] flex items-center gap-1.5 transition-colors"
              >
                <ShoppingBag className="size-3.5 text-[#C9A45C]" />
                <span className="hidden sm:inline">Drive-Thru Tray</span>
                <span className="size-4 sm:size-5 rounded-full bg-[#C9A45C] text-[#17120F] text-[9px] sm:text-[10px] font-black flex items-center justify-center">
                  {driveThruTotalCount}
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep("menu")}
                className="px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#201814] border border-[#C9A45C]/60 text-xs font-bold text-[#C9A45C] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>Back to Menu</span>
              </button>
            )}

            <button
              type="button"
              onClick={closeDriveThru}
              className="size-8 sm:size-9 rounded-full bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C] text-[#F3EBDD] hover:text-[#C9A45C] flex items-center justify-center transition-colors"
              aria-label="Close Drive-Thru window"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Modal Body with Multi-Step Flow */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6">
          {/* STEP 1: FULL DRIVE-THRU MENU BROWSING & CATEGORIES */}
          {step === "menu" && (
            <div className="space-y-5">
              {/* Drive-Thru Fast Guide Banner */}
              <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#201814] via-[#2A1D17] to-[#201814] border border-[#C9A45C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-[#C9A45C]/20 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <Car className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FFFDF8] block leading-tight">
                      Order Ahead for Express Drive-Thru Pickup
                    </span>
                    <span className="text-[10px] text-[#D1C2B0] block mt-0.5">
                      1. Add dishes · 2. Select pickup time & vehicle · 3. Confirm on WhatsApp
                    </span>
                  </div>
                </div>

                {driveThruTotalCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep("cart")}
                    className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#A81B1E] text-[#FFFDF8] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#E8C88B]/60 shadow shrink-0"
                  >
                    <span>Proceed to Pickup ({driveThruTotalCount})</span>
                    <ArrowRight className="size-3" />
                  </button>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#D1C2B0]/60" />
                <input
                  type="text"
                  placeholder="Search burgers, pizzas, wraps, shakes, fries, snacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-[#201814] border border-[#3A2920] focus:border-[#C9A45C] text-xs text-[#F3EBDD] placeholder:text-[#D1C2B0]/40 outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#D1C2B0] hover:text-[#C9A45C] bg-[#3A2920] px-2 py-0.5 rounded-md font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills Navigation */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar">
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
                        if (searchQuery) setSearchQuery("");
                      }}
                      className={`whitespace-nowrap px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border shrink-0 ${
                        isSelected
                          ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-sm font-black"
                          : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:text-[#F3EBDD] hover:border-[#C9A45C]/40"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-black ${
                          isSelected
                            ? "bg-[#17120F] text-[#C9A45C]"
                            : "bg-[#17120F] text-[#D1C2B0]/60"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Categorized Menu Section or Flat Filtered View */}
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center bg-[#201814] rounded-2xl border border-[#3A2920] p-6">
                  <span className="text-3xl block mb-2">🔍</span>
                  <h4 className="font-bold text-sm text-[#F3EBDD]">No dishes found</h4>
                  <p className="text-xs text-[#D1C2B0] mt-1">
                    No items match "{searchQuery}". Try searching for burger, pizza, wrap, or shake.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-3 px-4 py-1.5 rounded-full bg-[#C9A45C] text-[#17120F] text-xs font-bold"
                  >
                    View All Items
                  </button>
                </div>
              ) : activeCategory !== "all" || searchQuery ? (
                /* Filtered Flat Grid */
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-[#3A2920]">
                    <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
                      {searchQuery
                        ? `Search Results for "${searchQuery}" (${filteredItems.length})`
                        : `${MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label} (${filteredItems.length})`}
                    </span>
                    {activeCategory !== "all" && (
                      <button
                        type="button"
                        onClick={() => setActiveCategory("all")}
                        className="text-[10px] text-[#D1C2B0] hover:text-[#C9A45C] font-semibold"
                      >
                        Show All Categories
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {filteredItems.map((item) => renderItemCard(item))}
                  </div>
                </div>
              ) : (
                /* Complete Grouped Categories View - All sections displayed! */
                <div className="space-y-8">
                  {categoriesToRender.map((cat) => {
                    const catItems = MENU_ITEMS.filter((item) => item.category === cat.id);
                    if (catItems.length === 0) return null;

                    return (
                      <div key={cat.id} id={`drive-thru-cat-${cat.id}`} className="space-y-3">
                        <div className="flex items-center justify-between pb-1.5 border-b border-[#3A2920]">
                          <div className="flex items-center gap-2">
                            <span className="text-lg sm:text-xl">{cat.icon}</span>
                            <h3 className="font-display font-black text-sm sm:text-base text-[#F3EBDD] uppercase tracking-wide">
                              {cat.label}
                            </h3>
                          </div>
                          <span className="text-[10px] font-bold text-[#C9A45C] bg-[#201814] px-2.5 py-0.5 rounded-full border border-[#3A2920]">
                            {catItems.length} dishes
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                          {catItems.map((item) => renderItemCard(item))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* CUSTOMIZE ITEM MODAL OVERLAY */}
          {customizingItem && (
            <div className="fixed inset-0 z-60 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md">
              <div className="relative w-full max-w-lg bg-[#17120F] rounded-2xl border-2 border-[#C9A45C] p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between pb-3 border-b border-[#3A2920]">
                  <div className="flex items-center gap-3">
                    <img
                      src={customizingItem.image}
                      alt={customizingItem.name}
                      className="size-14 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-base text-[#F3EBDD]">
                        {customizingItem.name}
                      </h4>
                      <span className="text-xs text-[#C9A45C] font-semibold">
                        Base: ₹{itemSelectedSize?.price || customizingItem.price}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setCustomizingItem(null)}
                    className="p-1 rounded-full bg-[#201814] text-[#D1C2B0] hover:text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Size Selection (if multi-size) */}
                {customizingItem.sizes && customizingItem.sizes.length > 0 && (
                  <div className="py-3 border-b border-[#3A2920]">
                    <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider block mb-2">
                      Choose Size:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {customizingItem.sizes.map((s) => {
                        const isSelected = itemSelectedSize?.size === s.size;
                        return (
                          <button
                            key={s.size}
                            type="button"
                            onClick={() => setItemSelectedSize(s)}
                            className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C]"
                                : "bg-[#201814] text-[#D1C2B0] border-[#3A2920]"
                            }`}
                          >
                            <span>{s.label}</span>
                            <span>₹{s.price}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ADD EXTRAS / ADD-ONS */}
                <div className="py-3 border-b border-[#3A2920]">
                  <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider block mb-2">
                    ADD EXTRAS / ADD-ONS:
                  </span>
                  <div className="space-y-2">
                    {AVAILABLE_ADDONS.map((addon) => {
                      const isAdded = itemSelectedAddons.some((a) => a.name === addon.name);
                      return (
                        <button
                          key={addon.name}
                          type="button"
                          onClick={() => toggleAddon(addon)}
                          className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                            isAdded
                              ? "bg-[#7F1D1D] text-[#FFFDF8] border-[#F59E0B]"
                              : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:border-[#C9A45C]/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="size-4 rounded-md border flex items-center justify-center text-[10px]">
                              {isAdded ? "✓" : "+"}
                            </span>
                            <span>{addon.name}</span>
                          </div>
                          <span className="text-[#F59E0B]">+₹{addon.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Total for this customized item */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#D1C2B0] block">Item Total</span>
                    <span className="text-lg font-black text-[#F3EBDD]">
                      ₹
                      {(itemSelectedSize?.price || customizingItem.price) +
                        itemSelectedAddons.reduce((sum, a) => sum + a.price, 0)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddCustomizedToCart}
                    className="px-6 py-2.5 rounded-xl bg-[#C9A45C] hover:bg-[#D8B772] text-[#17120F] font-bold text-xs uppercase tracking-wider shadow"
                  >
                    ADD TO DRIVE-THRU CART
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DRIVE-THRU CART */}
          {step === "cart" && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between border-b border-[#3A2920] pb-3">
                <h3 className="font-display font-black text-xl text-[#F3EBDD]">
                  DRIVE-THRU CART ({driveThruTotalCount} items)
                </h3>
                <button
                  type="button"
                  onClick={() => setStep("menu")}
                  className="text-xs text-[#C9A45C] hover:underline font-bold"
                >
                  + Add More Dishes
                </button>
              </div>

              {driveThruOrder.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm text-[#D1C2B0]">Your Drive-Thru cart is empty.</p>
                  <button
                    type="button"
                    onClick={() => setStep("menu")}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#C9A45C] text-[#17120F] font-bold text-xs uppercase"
                  >
                    BROWSE MENU
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {driveThruOrder.map((entry) => (
                      <div
                        key={entry.id}
                        className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={entry.item.image}
                            alt={entry.item.name}
                            className="size-14 rounded-xl object-cover bg-[#17120F]"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-[#F3EBDD]">
                              {entry.item.name}
                            </h4>
                            {entry.size && (
                              <span className="text-[10px] text-[#C9A45C] font-semibold block">
                                Size: {entry.size} (₹{entry.basePrice})
                              </span>
                            )}
                            {entry.addons.length > 0 && (
                              <div className="text-[10px] text-[#D1C2B0] mt-0.5">
                                Add-ons:{" "}
                                {entry.addons.map((a) => `${a.name} (+₹${a.price})`).join(", ")}
                              </div>
                            )}
                            <span className="text-xs font-black text-[#F3EBDD] block mt-1">
                              ₹{entry.itemTotal} × {entry.quantity} ={" "}
                              <span className="text-[#C9A45C]">
                                ₹{entry.itemTotal * entry.quantity}
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center rounded-lg border border-[#3A2920] bg-[#17120F]">
                            <button
                              type="button"
                              onClick={() => updateDriveThruQuantity(entry.id, -1)}
                              className="p-1.5 text-[#D1C2B0] hover:text-[#C9A45C]"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#F3EBDD]">
                              {entry.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateDriveThruQuantity(entry.id, 1)}
                              className="p-1.5 text-[#D1C2B0] hover:text-[#C9A45C]"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromDriveThru(entry.id)}
                            className="p-1.5 text-[#D1C2B0] hover:text-red-400"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#201814] border border-[#3A2920] space-y-2 text-xs">
                    <div className="flex justify-between text-[#D1C2B0]">
                      <span>Items Subtotal:</span>
                      <span>₹{driveThruSubtotal}</span>
                    </div>
                    {driveThruAddonsTotal > 0 && (
                      <div className="flex justify-between text-[#D1C2B0]">
                        <span>Add-ons Total:</span>
                        <span>+₹{driveThruAddonsTotal}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-black text-[#F3EBDD] pt-2 border-t border-[#3A2920]">
                      <span>Total Order Amount:</span>
                      <span className="text-[#C9A45C]">₹{driveThruTotalPrice}</span>
                    </div>
                  </div>

                  {/* Advance notice */}
                  <div className="p-3.5 rounded-xl bg-[#7F1D1D]/30 border border-[#F59E0B]/40 text-xs text-[#FDE68A] flex items-start gap-2.5">
                    <ShieldAlert className="size-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">50% Advance Required:</span>
                      <span>
                        ₹{driveThruAdvanceAmount} advance via UPI to start kitchen preparation. Remaining ₹{driveThruRemainingAmount} payable at drive-thru pickup.
                      </span>
                    </div>
                  </div>

                  {/* Pickup & Vehicle Details Form - Directly on this screen */}
                  <form onSubmit={handleSubmitToWhatsApp} className="mt-6 pt-6 border-t border-[#3A2920] space-y-4">
                    <div className="border-b border-[#3A2920] pb-2 flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-black text-base sm:text-lg text-[#F3EBDD] uppercase">
                          🚗 ENTER PICKUP & VEHICLE DETAILS
                        </h4>
                        <p className="text-xs text-[#D1C2B0] mt-0.5">
                          Enter your details so our kitchen can prepare your food fresh for your arrival.
                        </p>
                      </div>
                    </div>

                    {formError && (
                      <div className="p-3 rounded-xl bg-red-950/80 border border-red-500 text-xs text-red-200 flex items-center gap-2">
                        <ShieldAlert className="size-4 shrink-0 text-red-400" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={customerDetails.name}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] focus:border-[#C9A45C] outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit Phone Number"
                          value={customerDetails.phone}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] focus:border-[#C9A45C] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Preferred Pickup Date *
                        </label>
                        <select
                          value={customerDetails.pickupDate}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, pickupDate: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] focus:border-[#C9A45C] outline-none"
                        >
                          <option value="Today">Today</option>
                          <option value="Tomorrow">Tomorrow</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Preferred Pickup Time *
                        </label>
                        <select
                          value={customerDetails.pickupTime}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, pickupTime: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] focus:border-[#C9A45C] outline-none"
                        >
                          <option value="In 15-20 Mins">In 15-20 Mins (Express Prep)</option>
                          <option value="In 30-45 Mins">In 30-45 Mins</option>
                          <option value="In 1 Hour">In 1 Hour</option>
                          <option value="This Evening (7:00 PM)">This Evening (7:00 PM)</option>
                          <option value="Dinner Time (8:30 PM)">Dinner Time (8:30 PM)</option>
                          <option value="Late Night (9:30 PM)">Late Night (9:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Vehicle Type & Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Vehicle Type *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {(["Car", "Bike", "Other"] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setCustomerDetails({ ...customerDetails, vehicleType: type })}
                              className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                                customerDetails.vehicleType === type
                                  ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C]"
                                  : "bg-[#201814] text-[#D1C2B0] border-[#3A2920]"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                          Vehicle Registration Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. PB08-AB-1234"
                          value={customerDetails.vehicleNumber}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, vehicleNumber: e.target.value.toUpperCase() })}
                          className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] uppercase font-mono focus:border-[#C9A45C] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#D1C2B0] block mb-1">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Please keep the order ready when I arrive at the Toll Plaza..."
                        value={customerDetails.instructions}
                        onChange={(e) => setCustomerDetails({ ...customerDetails, instructions: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#201814] border border-[#3A2920] text-xs text-[#F3EBDD] focus:border-[#C9A45C] outline-none resize-none"
                      />
                    </div>

                    {/* WhatsApp & Payment Notice */}
                    <div className="p-3.5 rounded-2xl bg-[#201814] border border-[#25D366]/40 flex items-start gap-3">
                      <div className="size-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                        <MessageSquare className="size-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-[#F3EBDD] block">
                          Payment & Verification Handled on WhatsApp
                        </span>
                        <span className="text-[#D1C2B0] text-[11px] block mt-0.5 leading-relaxed">
                          Submitting this order sends all details to <strong>Ghumans Kitchen Express (+91 {RESTAURANT_PHONE})</strong>. The restaurant owner will send payment details / QR code on WhatsApp to verify the 50% advance (₹{driveThruAdvanceAmount}). Remaining ₹{driveThruRemainingAmount} payable at pickup.
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setStep("menu")}
                        className="w-full sm:w-auto text-xs text-[#D1C2B0] hover:text-[#F3EBDD] flex items-center justify-center gap-1.5 py-2.5"
                      >
                        <ArrowLeft className="size-3.5" /> Back to Menu / Add More
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                      >
                        <MessageSquare className="size-4" />
                        <span>SUBMIT ORDER ON WHATSAPP</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}

          {/* STEP 5: ORDER SENT ON WHATSAPP & CONFIRMATION */}
          {step === "confirmed" && (
            <div className="space-y-6 max-w-xl mx-auto py-4">
              <div className="text-center">
                <div className="size-16 rounded-full bg-[#25D366]/20 border-2 border-[#25D366] flex items-center justify-center mx-auto mb-3 text-[#25D366]">
                  <MessageSquare className="size-8" />
                </div>
                <span className="text-xs font-black uppercase text-[#25D366] tracking-widest block">
                  ORDER SUBMITTED TO WHATSAPP
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F3EBDD] mt-1">
                  DRIVE-THRU ORDER RECEIVED
                </h3>
                <span className="inline-block mt-2 font-mono font-black text-base px-3 py-1 rounded-lg bg-[#201814] border border-[#C9A45C] text-[#C9A45C]">
                  {generatedOrderNo}
                </span>
              </div>

              {/* Notice that payment & prep are handled on WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#201814] border border-[#25D366]/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#25D366] font-bold">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>WhatsApp Chat Dispatched Successfully!</span>
                </div>
                <p className="text-[#D1C2B0] text-[11px] leading-relaxed">
                  Your order details, vehicle number, and preferred pickup time have been formatted and sent to <strong>Ghumans Kitchen Express (+91 {RESTAURANT_PHONE})</strong>.
                </p>
                <div className="mt-2 p-3 rounded-xl bg-[#17120F] border border-[#3A2920] space-y-1.5 text-[11px]">
                  <p className="text-[#FDE68A] font-bold">
                    💬 Payment & Verification on WhatsApp:
                  </p>
                  <p className="text-[#D1C2B0]">
                    1. Send the generated order message on WhatsApp.
                  </p>
                  <p className="text-[#D1C2B0]">
                    2. Complete your 50% advance payment (₹{driveThruAdvanceAmount}) via UPI directly with the restaurant team in chat.
                  </p>
                  <p className="text-[#D1C2B0]">
                    3. Drive in to collect your fresh food and pay the remaining 50% (₹{driveThruRemainingAmount}) at pickup!
                  </p>
                </div>
              </div>

              {/* Order Receipt Details */}
              <div className="p-4 rounded-2xl bg-[#201814] border border-[#3A2920] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#D1C2B0]">Customer Name:</span>
                  <span className="font-bold text-[#F3EBDD]">{customerDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D1C2B0]">Pickup Time:</span>
                  <span className="font-bold text-[#F3EBDD]">
                    {customerDetails.pickupDate} — {customerDetails.pickupTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D1C2B0]">Vehicle:</span>
                  <span className="font-bold text-[#C9A45C]">
                    {customerDetails.vehicleType} ({customerDetails.vehicleNumber})
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#3A2920]">
                  <span className="text-[#D1C2B0]">Total Order Amount:</span>
                  <span className="font-bold text-[#F3EBDD]">₹{driveThruTotalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#25D366] font-bold">50% Advance (on WhatsApp):</span>
                  <span className="font-bold text-[#25D366]">₹{driveThruAdvanceAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F59E0B] font-bold">50% Remaining (At Pickup):</span>
                  <span className="font-bold text-[#F59E0B]">₹{driveThruRemainingAmount}</span>
                </div>
              </div>

              {/* WhatsApp Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={getDriveThruWhatsAppUrl(customerDetails, generatedOrderNo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="size-4" />
                  OPEN WHATSAPP CHAT ({RESTAURANT_PHONE})
                </a>

                <button
                  type="button"
                  onClick={() => {
                    clearDriveThru();
                    closeDriveThru();
                    setStep("menu");
                  }}
                  className="w-full py-2.5 text-xs text-[#D1C2B0] hover:text-[#F3EBDD]"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Bottom Bar for Menu Step */}
        {step === "menu" && driveThruTotalCount > 0 && (
          <div className="p-3 sm:p-4 bg-[#1E1713] border-t border-[#C9A45C]/40 flex items-center justify-between gap-3 shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-[#C9A45C] text-[#17120F] flex items-center justify-center font-black shrink-0 shadow">
                <ShoppingBag className="size-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#F3EBDD] block leading-none">
                  {driveThruTotalCount} {driveThruTotalCount === 1 ? "dish" : "dishes"} in Tray
                </span>
                <span className="text-sm font-black text-[#C9A45C] mt-1 block leading-none">
                  Total: ₹{driveThruTotalPrice}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep("cart")}
              className="px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#8B0000] via-[#A81B1E] to-[#7B0000] hover:from-[#A81B1E] hover:to-[#8B0000] border border-[#E8C88B]/70 text-[#FFFDF8] font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all transform active:scale-95"
            >
              <span>PROCEED TO PICKUP</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
