import React, { useState } from "react";
import { ArrowUpRight, Info, Sparkles } from "lucide-react";
import { useOrder } from "./OrderContext";
import { TRUCK_HOTSPOTS } from "./menuData";

export function FromTheTruck() {
  const [activeHotspotId, setActiveHotspotId] = useState<string>("pizza-window");
  const { openOrderDrawer } = useOrder();

  const activeHotspot = TRUCK_HOTSPOTS.find((h) => h.id === activeHotspotId) || TRUCK_HOTSPOTS[3];

  return (
    <section
      id="from-truck"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-[#3A2920]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
            <span className="h-px w-6 bg-[#C9A45C]" />
            INTERACTIVE DIGITAL SHOWCASE
            <span className="h-px w-6 bg-[#C9A45C]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
            FROM OUR <span className="text-[#C9A45C]">TRUCK</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D1C2B0] mt-3">
            Explore the authentic food truck stations where your pure vegetarian favourites come alive.
          </p>

          {/* Quick Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {[
              { id: "pizza-window", label: "PIZZA" },
              { id: "burger-sign", label: "BURGERS" },
              { id: "wraps-counter", label: "WRAPS" },
              { id: "fries-window", label: "FRIES" },
              { id: "shakes-bar", label: "SHAKES" },
            ].map((cat) => {
              const isSelected = activeHotspotId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveHotspotId(cat.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                    isSelected
                      ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-[0_0_12px_rgba(201,164,92,0.4)]"
                      : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:border-[#C9A45C]/50 hover:text-[#F3EBDD]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Truck Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Truck Visual with Overlaid Hotspots */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border-2 border-[#3A2920] bg-[#17120F] shadow-[0_20px_60px_rgba(23,18,15,0.95)]">
            <img
              src="/ghumans-truck.jpg"
              alt="Ghumans Kitchen Express Food Truck interactive exploration"
              className="w-full h-auto max-h-[620px] object-cover object-center"
            />

            {/* Dark Vignette Overlay for Hotspot Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/70 via-transparent to-black/20 pointer-events-none" />

            {/* Interactive Radar Hotspots */}
            {TRUCK_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspotId === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveHotspotId(spot.id)}
                  style={{ top: spot.position.top, left: spot.position.left }}
                  aria-label={`Inspect ${spot.title}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                >
                  <span className="relative flex items-center justify-center">
                    {/* Pulsing Radar Ring */}
                    <span
                      className={`absolute size-9 rounded-full ${
                        isSelected
                          ? "bg-[#C9A45C] opacity-75 animate-ping"
                          : "bg-[#C9A45C] opacity-40 hotspot-ping"
                      }`}
                    />

                    {/* Central Glowing Pin */}
                    <span
                      className={`relative size-6 sm:size-7 rounded-full flex items-center justify-center border-2 transition-all ${
                        isSelected
                          ? "bg-[#C9A45C] border-[#F3EBDD] text-[#17120F] scale-110 shadow-[0_0_15px_#C9A45C]"
                          : "bg-[#201814] border-[#C9A45C] text-[#C9A45C] group-hover:scale-110"
                      }`}
                    >
                      <Sparkles className="size-3" />
                    </span>

                    {/* Desktop Tooltip Label */}
                    <span className="hidden md:inline-block absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-[#17120F]/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#F3EBDD] px-2.5 py-1 rounded border border-[#C9A45C]/40 shadow-lg pointer-events-none">
                      {spot.tag}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Instruction helper tag */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-[#17120F]/90 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-medium text-[#D1C2B0] border border-[#3A2920]">
              <Info className="size-3.5 text-[#C9A45C]" />
              <span>Tap any hotspot on the truck to inspect stations</span>
            </div>
          </div>

          {/* Right Column: Animated Information Panel */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-[#201814] border border-[#C9A45C]/40 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-all duration-300">
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#C9A45C] via-[#D8B772] to-[#C9A45C]" />

              {/* Station Tag & Category */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#17120F] text-[#C9A45C] px-3 py-1 rounded border border-[#3A2920]">
                  {activeHotspot.tag}
                </span>
                <span className="text-xs font-semibold text-[#D1C2B0]">
                  {activeHotspot.category}
                </span>
              </div>

              {/* Station Name */}
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#F3EBDD] mt-4">
                {activeHotspot.title}
              </h3>

              {/* Station Description */}
              <p className="text-xs sm:text-sm text-[#D1C2B0] leading-relaxed mt-3">
                {activeHotspot.description}
              </p>

              {/* Highlight Image Preview */}
              <div className="mt-5 rounded-xl overflow-hidden border border-[#3A2920] aspect-[16/10] bg-[#17120F] relative group">
                <img
                  key={activeHotspot.highlightImage}
                  src={activeHotspot.highlightImage}
                  alt={activeHotspot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#C9A45C]">
                  Fresh Pure Veg Station
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-[#3A2920]">
                <button
                  type="button"
                  onClick={() => openOrderDrawer()}
                  className="w-full inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#C9A45C] to-[#D8B772] py-3 text-xs font-bold uppercase tracking-wider text-[#17120F] shadow-[0_4px_16px_rgba(201,164,92,0.3)] hover:shadow-[0_6px_22px_rgba(201,164,92,0.45)] transition-all"
                >
                  <span>ORDER FROM THIS STATION</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
