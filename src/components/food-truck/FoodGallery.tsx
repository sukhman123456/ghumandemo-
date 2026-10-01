import React, { useState } from "react";
import { ArrowUpRight, Camera, Sparkles, X } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "truck" | "food" | "drinks" | "ambience" | "branding";
  title: string;
  subtitle: string;
  image: string;
  span: string; // Tailwind grid span classes
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "truck",
    title: "Double-Decker Food Truck",
    subtitle: "Exterior evening view on Grand Trunk Road, Dhilwan",
    image: "/ghumans-truck.jpg",
    span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "g-rooftop",
    category: "ambience",
    title: "Double-Decker Rooftop Lounge",
    subtitle: "Real indoor ambience with thatched bamboo canopy & hanging Edison filament lights",
    image: "/rooftop-dining.jpg",
    span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    id: "g2",
    category: "food",
    title: "Artisan Farmhouse Pizza",
    subtitle: "Stone-baked with molten mozzarella",
    image: "/food-pizza.jpg",
    span: "aspect-square",
  },
  {
    id: "g3",
    category: "food",
    title: "Crispy Sizzling Veg Burger",
    subtitle: "Toasted sesame brioche & golden fries",
    image: "/food-burger.jpg",
    span: "aspect-square",
  },
  {
    id: "g4",
    category: "drinks",
    title: "Belgian Chocolate Thick Shake",
    subtitle: "Churned ice cream & cold coffee",
    image: "/food-shake.jpg",
    span: "aspect-square",
  },
  {
    id: "g5",
    category: "drinks",
    title: "Zesty Virgin Mint Mojito",
    subtitle: "Crushed ice, fresh mint & bubbly soda",
    image: "/food-mojito.jpg",
    span: "aspect-square",
  },
  {
    id: "g6",
    category: "food",
    title: "Punjabi Paneer Tikka Wrap",
    subtitle: "Grilled paneer cubes & mint chutney",
    image: "/food-wrap.jpg",
    span: "md:col-span-2 aspect-[16/9] md:aspect-auto",
  },
  {
    id: "g7",
    category: "food",
    title: "Loaded Cheesy Crinkle Fries",
    subtitle: "Warm cheddar cheese & peri-peri spice",
    image: "/food-fries.jpg",
    span: "aspect-square",
  },
];

export function FoodGallery() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "ALL MOMENTS" },
    { id: "truck", label: "THE TRUCK" },
    { id: "ambience", label: "ROOFTOP LOUNGE" },
    { id: "food", label: "FOOD" },
    { id: "drinks", label: "DRINKS" },
  ];

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-[#3A2920]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
              <Camera className="size-3.5 text-[#C9A45C]" />
              VISUAL JOURNAL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-3">
              THE GHUMANS <span className="text-[#C9A45C]">GALLERY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#D1C2B0] mt-2">
              A feast for your eyes. Real truck photos, sizzling street food and refreshers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((cat) => {
              const isSelected = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                    isSelected
                      ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-md"
                      : "bg-[#201814] text-[#D1C2B0] border-[#3A2920] hover:border-[#C9A45C]/50 hover:text-[#F3EBDD]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Overlapping Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedPhoto(item);
              }}
              className={`group relative overflow-hidden rounded-2xl border border-[#3A2920] bg-[#17120F] cursor-pointer hover:border-[#C9A45C] transition-all duration-500 shadow-md ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Item Info on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A45C] block">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-sm sm:text-base text-[#F3EBDD]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#D1C2B0] line-clamp-1">{item.subtitle}</p>
                </div>
                <div className="size-8 rounded-full bg-[#C9A45C] text-[#17120F] flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#201814] border border-[#C9A45C]/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-10 size-10 rounded-full bg-[#17120F]/80 border border-[#3A2920] text-[#F3EBDD] hover:text-[#C9A45C] flex items-center justify-center transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-[#201814] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#3A2920]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A45C]">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F3EBDD]">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-[#D1C2B0] mt-1">{selectedPhoto.subtitle}</p>
                </div>
                <div className="text-xs font-semibold text-[#C9A45C] flex items-center gap-1.5">
                  <Sparkles className="size-4" />
                  Ghumans Kitchen Express
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
