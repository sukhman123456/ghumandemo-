import React, { useState } from "react";
import { Plus, Minus, Check, Sparkles, ShoppingBag } from "lucide-react";
import { MenuItem, SizeOption } from "../../data/digitalMenuData";
import { useOrder } from "../food-truck/OrderContext";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { order, addToOrder, updateQuantity, removeFromOrder } = useOrder();

  // Selected size state for multi-sized items
  const [selectedSize, setSelectedSize] = useState<SizeOption | undefined>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0] : undefined
  );

  const [justAdded, setJustAdded] = useState(false);

  // Compute current cart ID for this specific size
  const currentCartId = `${item.id}-${selectedSize ? selectedSize.size : "std"}`;
  const cartItem = order.find((entry) => entry.cartId === currentCartId);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

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

  const handleIncrement = () => {
    updateQuantity(currentCartId, 1);
  };

  const handleDecrement = () => {
    if (currentQuantity <= 1) {
      removeFromOrder(currentCartId);
    } else {
      updateQuantity(currentCartId, -1);
    }
  };

  return (
    <div className="cream-card rounded-3xl overflow-hidden flex flex-col justify-between group relative bg-white border border-[#EFE5D2] hover:border-[#F59E0B] shadow-md hover:shadow-xl transition-all duration-300">
      <div>
        {/* Food Image Container */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1C1917]/5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              if (item.fallbackImage) {
                e.currentTarget.src = item.fallbackImage;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top Indicators */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="veg-badge shadow-sm" title="100% Pure Vegetarian" />
            {item.code && (
              <span className="px-2 py-0.5 rounded-md bg-[#1C1917]/90 text-[#FDE68A] text-xs font-black shadow-sm tracking-wide">
                {item.code}
              </span>
            )}
            {item.quantityNote && (
              <span className="px-2 py-0.5 rounded-md bg-[#7F1D1D] text-[#FFFDF8] text-[10px] font-black uppercase tracking-wider shadow-sm">
                {item.quantityNote}
              </span>
            )}
          </div>

          {/* Best Seller / Popular Badge */}
          {item.badge && (
            <span
              className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md ${
                item.badge === "BEST SELLER"
                  ? "bg-[#991B1B] text-[#FFFDF8]"
                  : item.badge === "CHEF SPECIAL"
                  ? "bg-[#F59E0B] text-[#1C1917]"
                  : "bg-[#1C1917] text-[#FDE68A]"
              }`}
            >
              {item.badge}
            </span>
          )}

          {/* Quick Price Overlay on Image for mobile clarity */}
          <div className="absolute bottom-3 left-3">
            <span className="text-xl sm:text-2xl font-black text-[#FFFDF8] drop-shadow-md">
              ₹{currentPrice}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base sm:text-lg font-black text-[#1C1917] tracking-tight leading-snug group-hover:text-[#991B1B] transition-colors">
              {item.name}
            </h3>
          </div>

          <p className="mt-1.5 text-xs text-[#57534E] leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Size Selector for Items with Multiple Sizes (Pizza, Fries, Crust Add-ons) */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-[#F5EEDB]">
              <span className="text-[10px] font-black text-[#7F1D1D] uppercase tracking-wider block mb-1.5">
                Select Size:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {item.sizes.map((s) => {
                  const isSelected = selectedSize?.size === s.size;
                  return (
                    <button
                      key={s.size}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center justify-center ${
                        isSelected
                          ? "bg-[#7F1D1D] text-[#FFFDF8] shadow-sm border border-[#7F1D1D]"
                          : "bg-[#FBF4E6] text-[#44403C] hover:bg-[#F5EEDB] border border-[#EFE5D2]"
                      }`}
                    >
                      <span className="leading-none text-[11px]">{s.label}</span>
                      <span className={`text-[11px] font-black mt-0.5 ${isSelected ? "text-[#FDE68A]" : "text-[#7F1D1D]"}`}>
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

      {/* Card Action / Cart Stepper */}
      <div className="p-4 sm:p-5 pt-0">
        {currentQuantity > 0 ? (
          <div className="flex items-center justify-between bg-[#FAF4E8] rounded-2xl p-1 border border-[#F59E0B]">
            <button
              onClick={handleDecrement}
              className="size-9 rounded-xl bg-white text-[#7F1D1D] hover:bg-[#7F1D1D] hover:text-white transition-colors flex items-center justify-center font-black shadow-sm"
              aria-label="Decrease quantity"
            >
              <Minus className="size-4" />
            </button>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-[#1C1917] leading-none">
                {currentQuantity} in Cart
              </span>
              <span className="text-[10px] font-bold text-[#7F1D1D] mt-0.5">
                ₹{currentPrice * currentQuantity}
              </span>
            </div>
            <button
              onClick={handleIncrement}
              className="size-9 rounded-xl bg-[#F59E0B] text-[#1C1917] hover:bg-[#FBBF24] transition-colors flex items-center justify-center font-black shadow-sm"
              aria-label="Increase quantity"
            >
              <Plus className="size-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 ${
              justAdded
                ? "bg-[#16A34A] text-white"
                : "bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917]"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="size-4" />
                ADDED!
              </>
            ) : (
              <>
                <Plus className="size-4 stroke-[3]" />
                ADD TO CART · ₹{currentPrice}
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
