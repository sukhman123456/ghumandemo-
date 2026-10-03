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

type DriveThruStep = "welcome" | "menu" | "cart" | "confirmed";

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

  const [step, setStep] = useState<DriveThruStep>("welcome");

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
    pickupTime: "In 20-30 Mins",
    vehicleType: "Car",
    vehicleNumber: "",
    instructions: "",
  });

  const [formError, setFormError] = useState("");
  const [generatedOrderNo, setGeneratedOrderNo] = useState("");

  // When opening, if items already exist, start at menu or welcome
  React.useEffect(() => {
    if (isDriveThruOpen && driveThruOrder.length > 0 && step === "welcome") {
      setStep("menu");
    }
  }, [isDriveThruOpen]);

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

  if (!isDriveThruOpen) return null;

  const handleOpenCustomize = (item: MenuItem) => {
    setCustomizingItem(item);
    setItemSelectedSize(item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined);
    setItemSelectedAddons([]);
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-4xl bg-[#17120F] text-[#F3EBDD] rounded-3xl border-2 border-[#C9A45C]/50 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#7F1D1D] via-[#5B0C16] to-[#7F1D1D] border-b border-[#C9A45C]/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="size-11 rounded-2xl bg-gradient-to-tr from-[#C9A45C] to-[#E8C88B] text-[#17120F] flex items-center justify-center font-black shadow-lg shrink-0 border border-[#FFFDF8]/40">
              <span className="text-xl">🚗</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-black text-lg sm:text-xl text-[#FFFDF8] tracking-tight uppercase leading-none">
                  DRIVE-THRU EXPRESS
                </h2>
                <span className="px-2 py-0.5 rounded-md bg-[#16A34A] text-[9px] font-black text-white shadow-sm">
                  100% PURE VEG
                </span>
              </div>
              <span className="text-xs text-[#FDE68A] font-semibold mt-1 block">
                Grand Trunk Road, Dhilwan · Order Ahead · Pick Up Hot & Fresh
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {step !== "welcome" && step !== "confirmed" && (
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="relative px-3 py-1.5 rounded-full bg-[#201814] border border-[#C9A45C]/50 text-xs font-bold text-[#F3EBDD] hover:text-[#C9A45C] flex items-center gap-1.5"
              >
                <ShoppingBag className="size-3.5 text-[#C9A45C]" />
                <span className="hidden sm:inline">Drive-Thru Cart</span>
                <span className="size-4 rounded-full bg-[#C9A45C] text-[#17120F] text-[10px] font-black flex items-center justify-center">
                  {driveThruTotalCount}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={closeDriveThru}
              className="size-9 rounded-full bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C] text-[#F3EBDD] hover:text-[#C9A45C] flex items-center justify-center transition-colors"
              aria-label="Close Drive-Thru order"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Modal Body with Multi-Step Flow */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* STEP 1: WELCOME SCREEN */}
          {step === "welcome" && (
            <div className="py-6 sm:py-10 text-center max-w-2xl mx-auto flex flex-col items-center">
              <div className="size-20 rounded-3xl bg-gradient-to-tr from-[#7F1D1D] to-[#991B1B] border-2 border-[#C9A45C] flex items-center justify-center shadow-xl mb-6">
                <Car className="size-10 text-[#F59E0B]" />
              </div>

              <span className="text-xs font-black uppercase text-[#C9A45C] tracking-[0.2em] block mb-2">
                FAST · CONTACTLESS · CURB PICKUP
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-[#F3EBDD] tracking-tight">
                Order Ahead & Pick Up Fresh From Our Drive-Thru
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#D1C2B0] max-w-lg leading-relaxed">
                Choose your food, customize your order with rich extras, select your preferred pickup time and drive in to collect it piping hot.
              </p>

              {/* 4-Step Process Indicator */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full text-left">
                <div className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920]">
                  <span className="text-[10px] font-black uppercase text-[#C9A45C] block">Step 01</span>
                  <span className="text-sm font-bold text-[#F3EBDD] block mt-0.5">SELECT FOOD</span>
                  <p className="text-[11px] text-[#D1C2B0]/80 mt-1">Select burgers, wraps, pizza & shakes</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920]">
                  <span className="text-[10px] font-black uppercase text-[#C9A45C] block">Step 02</span>
                  <span className="text-sm font-bold text-[#F3EBDD] block mt-0.5">CUSTOMIZE</span>
                  <p className="text-[11px] text-[#D1C2B0]/80 mt-1">Pick sizes & add cheese burst or dips</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920]">
                  <span className="text-[10px] font-black uppercase text-[#C9A45C] block">Step 03</span>
                  <span className="text-sm font-bold text-[#F3EBDD] block mt-0.5">VEHICLE DETAILS</span>
                  <p className="text-[11px] text-[#D1C2B0]/80 mt-1">Enter vehicle number & pickup time</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920]">
                  <span className="text-[10px] font-black uppercase text-[#C9A45C] block">Step 04</span>
                  <span className="text-sm font-bold text-[#F3EBDD] block mt-0.5">ORDER ON WHATSAPP</span>
                  <p className="text-[11px] text-[#D1C2B0]/80 mt-1">Confirm details & payment via WhatsApp</p>
                </div>
              </div>

              {/* Start Button */}
              <button
                type="button"
                onClick={() => setStep("menu")}
                className="mt-8 px-8 py-4 rounded-full bg-[#C9A45C] hover:bg-[#D8B772] text-[#17120F] font-black text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(201,164,92,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>START DRIVE-THRU ORDER</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          )}

          {/* STEP 2: COMPLETE MENU BROWSING & CUSTOMIZATION */}
          {step === "menu" && (
            <div className="space-y-6">
              {/* Category tabs & Search */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-[#3A2920]">
                {/* Search */}
                <div className="w-full sm:max-w-xs relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-[#D1C2B0]/60" />
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#201814] border border-[#3A2920] focus:border-[#C9A45C] text-xs text-[#F3EBDD] outline-none"
                  />
                </div>

                {/* View Cart shortcut */}
                {driveThruTotalCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep("cart")}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#7F1D1D] hover:bg-[#991B1B] text-[#FFFDF8] font-bold text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <span>Proceed to Cart ({driveThruTotalCount} items)</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Category Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {MENU_CATEGORIES.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C]"
                          : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:text-[#F3EBDD]"
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-[#201814] border border-[#3A2920] hover:border-[#C9A45C]/60 flex flex-col justify-between transition-all group"
                    >
                      <div className="flex gap-3">
                        <div className="relative size-20 rounded-xl overflow-hidden bg-[#17120F] shrink-0 border border-[#3A2920]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="size-full object-cover group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              if (item.fallbackImage) e.currentTarget.src = item.fallbackImage;
                            }}
                          />
                          <span className="absolute top-1 left-1 size-2 rounded-full bg-[#16A34A] border border-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            {item.code && (
                              <span className="text-[9px] font-black text-[#C9A45C] bg-[#17120F] px-1 py-0.2 rounded border border-[#C9A45C]/30">
                                {item.code}
                              </span>
                            )}
                            <h4 className="font-bold text-sm text-[#F3EBDD] truncate">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-[11px] text-[#D1C2B0] line-clamp-2 mt-1">
                            {item.description}
                          </p>
                          <span className="text-xs font-black text-[#C9A45C] block mt-1.5">
                            {item.sizes && item.sizes.length > 0
                              ? `From ₹${item.sizes[0].price}`
                              : `₹${item.price}`}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#3A2920] flex items-center justify-between">
                        <span className="text-[10px] text-[#D1C2B0]/80">
                          {item.sizes ? "Select Size & Extras" : "Drive-Thru Ready"}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleOpenCustomize(item)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#C9A45C] hover:bg-[#D8B772] text-[#17120F] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                        >
                          + CUSTOMIZE & ADD
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                    setStep("welcome");
                  }}
                  className="w-full py-2.5 text-xs text-[#D1C2B0] hover:text-[#F3EBDD]"
                >
                  Done / Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
