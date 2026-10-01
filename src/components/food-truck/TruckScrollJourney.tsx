import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ShoppingBag, Sparkles, Truck } from "lucide-react";
import { useOrder } from "./OrderContext";
import { MENU_ITEMS, MenuItem } from "./menuData";

interface JourneyStop {
  id: string;
  category: "pizza" | "burger" | "wraps" | "fries" | "shakes";
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlightDish: string;
  highlightPrice: number;
  featuredDishes: { name: string; price: number; desc: string }[];
  truckPerspective: string;
}

const JOURNEY_STOPS: JourneyStop[] = [
  {
    id: "pizza",
    category: "pizza",
    number: "01",
    title: "HAND-TOSSED PIZZA",
    tagline: "Stone-Baked at 350°C",
    description: "Hand-stretched dough fermented for 24 hours, spread with San Marzano style herb sauce, layered with 100% pure mozzarella and freshly diced farm veggies.",
    image: "/food-pizza.jpg",
    highlightDish: "Farmhouse Gourmet Pizza",
    highlightPrice: 229,
    featuredDishes: [
      { name: "Farmhouse Gourmet", price: 229, desc: "Sweet corn, bell peppers, olives & mozzarella" },
      { name: "Paneer Makhani Feast", price: 259, desc: "Tandoori paneer, makhani sauce & kasuri methi" },
      { name: "Classic Margherita", price: 189, desc: "Double cheese melt with fresh garden basil" },
    ],
    truckPerspective: "Stop 1: Live Pizza Station on Ground Deck",
  },
  {
    id: "burger",
    category: "burger",
    number: "02",
    title: "GOURMET BURGERS",
    tagline: "Golden Brioche & Crisp Patties",
    description: "Thick hand-pressed vegetarian patties griddled sizzling hot, crowned with melted cheese, crisp garden iceberg lettuce and house secret tangy burger dressing.",
    image: "/food-burger.jpg",
    highlightDish: "Double Decker Paneer Burger",
    highlightPrice: 149,
    featuredDishes: [
      { name: "Double Decker Paneer", price: 149, desc: "Tandoori paneer steak with melted cheddar" },
      { name: "Crispy Aloo Herb Supreme", price: 89, desc: "Golden spiced potato patty with house relish" },
      { name: "Ghumans Royal Veggie", price: 119, desc: "Crispy veggie patty with chipotle cream" },
    ],
    truckPerspective: "Stop 2: Sizzling Burger Griddle Window",
  },
  {
    id: "wraps",
    category: "wraps",
    number: "03",
    title: "PUNJABI TIKKA WRAPS",
    tagline: "Rolled Fresh on the Flattop",
    description: "Tandoor-charred paneer cubes and crunchy veggies tossed in zesty cilantro-mint dressing, wrapped snugly inside a flaky, golden-toasted flatbread.",
    image: "/food-wrap.jpg",
    highlightDish: "Punjabi Paneer Tikka Wrap",
    highlightPrice: 149,
    featuredDishes: [
      { name: "Punjabi Paneer Tikka", price: 149, desc: "Grilled paneer cubes, mint chutney & onions" },
      { name: "Mexican Salsa Crunch", price: 129, desc: "Corn, beans, fire salsa & warm cheese melt" },
      { name: "Crispy Veg Roll", price: 109, desc: "Crispy veggies tossed in spicy mayo glaze" },
    ],
    truckPerspective: "Stop 3: Street-Style Roll & Wrap Station",
  },
  {
    id: "fries",
    category: "fries",
    number: "04",
    title: "LOADED CRINKLE FRIES",
    tagline: "Molten Cheese & Peri-Peri Spiced",
    description: "Crinkle-cut potatoes fried to an audible crunch, drenched with velvety hot cheddar cheese sauce and dusted with fiery African peri-peri spices.",
    image: "/food-fries.jpg",
    highlightDish: "Loaded Cheesy Crinkle Fries",
    highlightPrice: 129,
    featuredDishes: [
      { name: "Loaded Cheesy Crinkle", price: 129, desc: "Warm molten cheddar, jalapeños & spring onion" },
      { name: "Fiery Peri-Peri Fries", price: 99, desc: "Signature African peri-peri spice with dip" },
      { name: "Classic Salted Crisp", price: 79, desc: "Hot, golden & lightly sea-salted" },
    ],
    truckPerspective: "Stop 4: Double-Fry Crisp Window",
  },
  {
    id: "shakes",
    category: "shakes",
    number: "05",
    title: "THICK SHAKES & MOJITOS",
    tagline: "Ice-Cold Highway Refreshers",
    description: "Rich blended shakes whipped with decadent Belgian chocolate, creamy cold coffee frappes, and crystal-clear sparkling virgin mint mojitos.",
    image: "/food-shake.jpg",
    highlightDish: "Belgian Chocolate Thick Shake",
    highlightPrice: 129,
    featuredDishes: [
      { name: "Belgian Chocolate Shake", price: 129, desc: "Dark chocolate, whipped swirl & choco chips" },
      { name: "Cold Coffee Frappe", price: 109, desc: "Espresso roast, cream & vanilla ice cream" },
      { name: "Virgin Mint Mojito", price: 89, desc: "Hand-muddled mint, zesty lime & bubbly soda" },
    ],
    truckPerspective: "Stop 5: Rooftop Beverage & Shake Bar",
  },
];

export function TruckScrollJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToOrder, openOrderDrawer } = useOrder();

  const currentStop = JOURNEY_STOPS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % JOURNEY_STOPS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + JOURNEY_STOPS.length) % JOURNEY_STOPS.length);
  };

  const handleOrderHighlight = () => {
    const item = MENU_ITEMS.find((m) => m.name === currentStop.highlightDish);
    if (item) {
      addToOrder(item);
    } else {
      openOrderDrawer();
    }
  };

  return (
    <section
      id="journey"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-b border-[#3A2920]"
    >
      {/* Background Ambient Champagne Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-15 blur-[130px]"
        style={{
          background: "radial-gradient(circle, #C9A45C 0%, #3A2920 50%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
              <span className="size-2 rounded-full bg-[#C9A45C]" />
              THE FOOD TRUCK JOURNEY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
              TASTE THE STOPS. <br className="hidden sm:block" />
              <span className="text-[#C9A45C]">ONE WINDOW AT A TIME.</span>
            </h2>
            <p className="text-[#D1C2B0] text-sm sm:text-base mt-3 max-w-xl">
              As Ghumans rolls into your day, discover the signature culinary stations aboard our double-decker kitchen.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous truck stop"
              className="size-11 rounded-full border border-[#3A2920] bg-[#201814] flex items-center justify-center text-[#F3EBDD] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-all"
            >
              <ArrowLeft className="size-4" />
            </button>
            <span className="text-xs font-bold tracking-widest text-[#C9A45C]">
              {currentStop.number} / 0{JOURNEY_STOPS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next truck stop"
              className="size-11 rounded-full border border-[#3A2920] bg-[#201814] flex items-center justify-center text-[#F3EBDD] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-all"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Highway Progress Route Bar */}
        <div className="relative mb-12 pt-4 pb-2">
          {/* Animated Highway Track */}
          <div className="h-1.5 w-full bg-[#201814] rounded-full relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C9A45C] via-[#D8B772] to-[#C9A45C] transition-all duration-500 ease-out"
              style={{
                width: `${((activeIndex + 1) / JOURNEY_STOPS.length) * 100}%`,
              }}
            />
          </div>

          {/* Category Stop Pills */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 mt-4">
            {JOURNEY_STOPS.map((stop, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={stop.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left p-2 sm:p-3 rounded border transition-all ${
                    isSelected
                      ? "bg-[#201814] border-[#C9A45C] shadow-[0_0_15px_rgba(201,164,92,0.25)]"
                      : "bg-[#17120F]/70 border-[#3A2920] hover:border-[#C9A45C]/50 text-[#D1C2B0]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold tracking-wider">
                    <span className={isSelected ? "text-[#C9A45C]" : "text-[#D1C2B0]"}>
                      STOP {stop.number}
                    </span>
                    {isSelected && <Truck className="size-3.5 text-[#C9A45C] animate-pulse" />}
                  </div>
                  <div
                    className={`font-display text-xs sm:text-sm font-bold truncate mt-1 ${
                      isSelected ? "text-[#F3EBDD]" : "text-[#D1C2B0]"
                    }`}
                  >
                    {stop.category.toUpperCase()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Journey Stop Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#201814]/95 rounded-2xl border border-[#3A2920] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(23,18,15,0.9)]">
          {/* Left: Large Food Image with Pure Veg Stamp & Price Pill */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-xl aspect-[4/3] bg-[#17120F] border border-[#3A2920]">
            <img
              key={currentStop.image}
              src={currentStop.image}
              alt={currentStop.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-transparent to-black/20" />

            {/* Pure Veg Stamp */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#17120F]/90 backdrop-blur-md px-3 py-1 border border-[#2E8B57]/50 shadow-md">
              <span className="size-2 rounded-full bg-[#2E8B57]" />
              <span className="text-[10px] font-bold tracking-widest text-[#F3EBDD]">
                100% PURE VEG
              </span>
            </div>

            {/* Highlighted Dish Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C9A45C] block">
                  FEATURED DISH
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-[#F3EBDD] truncate">
                  {currentStop.highlightDish}
                </p>
              </div>
              <div className="shrink-0 bg-gradient-to-r from-[#C9A45C] to-[#D8B772] text-[#17120F] font-display font-black text-lg px-3.5 py-1 rounded shadow-md">
                ₹{currentStop.highlightPrice}
              </div>
            </div>
          </div>

          {/* Right: Stop Details & Featured Items */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Stop Number & Perspective */}
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#C9A45C]">
                  {currentStop.number}
                </span>
                <div className="h-6 w-px bg-[#3A2920]" />
                <span className="text-xs uppercase font-semibold tracking-widest text-[#D1C2B0]">
                  {currentStop.truckPerspective}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] mt-3">
                {currentStop.title}
              </h3>
              <p className="font-script text-lg text-[#C9A45C] mt-0.5">
                {currentStop.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-[#F3EBDD]/85 leading-relaxed mt-4">
                {currentStop.description}
              </p>

              {/* Featured Items List */}
              <div className="mt-6 space-y-2.5">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#D1C2B0]">
                  TOP PICKS IN THIS CATEGORY:
                </p>
                {currentStop.featuredDishes.map((dish) => (
                  <div
                    key={dish.name}
                    className="flex items-center justify-between p-2.5 rounded bg-[#17120F] border border-[#3A2920] hover:border-[#C9A45C]/50 transition-colors"
                  >
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#F3EBDD] block">
                        {dish.name}
                      </span>
                      <span className="text-[11px] text-[#D1C2B0]">{dish.desc}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-display font-bold text-[#C9A45C] shrink-0 ml-3">
                      ₹{dish.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-[#3A2920]">
              <button
                type="button"
                onClick={handleOrderHighlight}
                className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-[#C9A45C] to-[#D8B772] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#17120F] shadow-[0_4px_16px_rgba(201,164,92,0.35)] hover:shadow-[0_6px_22px_rgba(201,164,92,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="size-4" />
                <span>ORDER {currentStop.category.toUpperCase()} NOW</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D1C2B0] hover:text-[#C9A45C] transition-colors py-2 px-3"
              >
                <span>View Full Menu</span>
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
