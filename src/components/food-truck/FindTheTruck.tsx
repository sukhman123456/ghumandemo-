import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Check,
  Clock,
  Compass,
  Copy,
  ExternalLink,
  Layers,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Radio,
  Route,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

const CITY_ROUTES = {
  jalandhar: {
    city: "Jalandhar",
    distance: "24 KM",
    time: "25–30 Mins",
    direction: "North-West on NH 44 (towards Amritsar)",
    landmark: "Take left service lane right before Dhilwan Toll Plaza",
    badge: "Direct Highway Drive",
  },
  amritsar: {
    city: "Amritsar",
    distance: "56 KM",
    time: "45–50 Mins",
    direction: "South-East on NH 44 (towards Jalandhar)",
    landmark: "Cross Beas River bridge, pull over adjacent to Toll Plaza",
    badge: "Scenic GT Road Route",
  },
  beas: {
    city: "Beas",
    distance: "11 KM",
    time: "12–15 Mins",
    direction: "Eastbound along GT Road corridor",
    landmark: "5 minutes past the Beas river bridge on GT Road",
    badge: "Quick 10-Min Run",
  },
  kapurthala: {
    city: "Kapurthala",
    distance: "16 KM",
    time: "18–20 Mins",
    direction: "Via Dhilwan-Kapurthala Link Road to NH 44",
    landmark: "Merge onto Grand Trunk Road and look for glowing bus",
    badge: "Fast Connector Link",
  },
};

export function FindTheTruck() {
  const [viewMode, setViewMode] = useState<"radar" | "photo" | "routes">("radar");
  const [selectedCity, setSelectedCity] = useState<"jalandhar" | "amritsar" | "beas" | "kapurthala">("jalandhar");
  const [copied, setCopied] = useState(false);

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Ghumans%20Kitchen%20Express%20Dhilwan%20Punjab%20144804";
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I am traveling on GT Road. Please share your live GPS location & menu.");

  const handleCopyAddress = () => {
    try {
      navigator.clipboard.writeText(
        "Ghumans Kitchen Express, Grand Trunk Road, Next to Toll Plaza, Dhilwan, Punjab 144804"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  const currentRoute = CITY_ROUTES[selectedCity];

  return (
    <section
      id="location"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden border-t border-[#3A2920]"
    >
      {/* Ambient Headlight & Gold Glow in Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A45C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#2E8B57]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/40 bg-[#201814]/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C] shadow-sm">
              <span className="size-2 rounded-full bg-[#16A34A] animate-ping" />
              LIVE HIGHWAY POSITION • NH 44
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-4 leading-tight tracking-tight">
              WHERE’S THE <span className="text-[#C9A45C]">TRUCK?</span>
            </h2>
            <p className="text-[#D1C2B0] text-sm sm:text-base mt-2.5 max-w-xl">
              Permanently stationed at Punjab's most famous roadside stop on the historic Grand Trunk Road, Dhilwan.
            </p>
          </div>

          {/* Quick Highway Coordinates & Status */}
          <div className="flex items-center gap-4 bg-[#201814]/90 border border-[#3A2920] px-4 py-3 rounded-2xl shadow-lg">
            <div className="size-10 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C] flex items-center justify-center shrink-0">
              <Radio className="size-5 text-[#C9A45C] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C9A45C]">
                  GPS 31.5230° N, 75.3440° E
                </span>
                <span className="size-1.5 rounded-full bg-[#16A34A]" />
              </div>
              <span className="text-xs font-black text-[#F3EBDD] block mt-0.5">
                Next to Dhilwan Toll Plaza
              </span>
            </div>
          </div>
        </div>

        {/* Main 2-Column High-Impact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Luxury Roadside Station Terminal */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Station Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#241B16] to-[#1C1612] border-2 border-[#C9A45C]/50 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Subtle Road Milestone Stamp */}
              <div className="absolute top-4 right-4 bg-[#17120F] border border-[#C9A45C]/50 rounded-lg px-2.5 py-1 text-center shadow-md">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#C9A45C] block">
                  MILESTONE
                </span>
                <span className="font-impact text-base text-[#F3EBDD] leading-none block mt-0.5">
                  GT ROAD
                </span>
              </div>

              <div>
                {/* Station Status Badge */}
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A] px-3 py-0.5 text-xs font-bold text-[#4ADE80]">
                    <span className="size-2 rounded-full bg-[#16A34A] animate-ping" />
                    OPEN NOW • SERVING HOT
                  </span>
                  <span className="text-[11px] font-semibold text-[#D1C2B0]">
                    Until 10:00 PM
                  </span>
                </div>

                {/* Truck Name & Full Address */}
                <div className="mt-6 flex items-start gap-4">
                  <div className="relative size-12 sm:size-14 rounded-full shrink-0 flex items-center justify-center p-0.5">
                    <img
                      src="/ghuman-logo.svg"
                      alt="Ghumans Kitchen Express"
                      className="size-full rounded-full object-cover shadow-[0_0_20px_rgba(201,164,92,0.4)] border border-[#C9A45C]"
                    />
                    <span
                      className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-[#16A34A] border-2 border-[#1C1612]"
                      title="100% Pure Veg"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#F3EBDD] tracking-tight">
                      Ghumans Kitchen Express
                    </h3>
                    <p className="text-xs text-[#C9A45C] font-bold uppercase tracking-wider mt-0.5">
                      Double-Decker Food Truck & Dining
                    </p>
                    <address className="not-italic text-xs sm:text-sm text-[#D1C2B0] mt-2.5 leading-relaxed">
                      Jalandhar to Amritsar Highway, <br />
                      Grand Trunk Road (NH 44), Adjacent to Toll Plaza, <br />
                      <strong className="text-[#F3EBDD] font-bold">Dhilwan, Punjab 144804</strong>
                    </address>
                  </div>
                </div>

                {/* Copy Address Button */}
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#17120F]/90 border border-[#3A2920] hover:border-[#C9A45C]/60 px-4 py-2.5 text-xs font-bold text-[#D1C2B0] hover:text-[#F3EBDD] transition-all shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="size-4 text-[#16A34A]" />
                      <span className="text-[#4ADE80]">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4 text-[#C9A45C]" />
                      <span>Copy Full GT Road Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* 4 Roadside Amenities Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-6 pt-5 border-t border-[#3A2920]/80">
                <div className="flex items-center gap-2.5 rounded-xl bg-[#17120F]/60 p-2.5 border border-[#3A2920]">
                  <Car className="size-4 text-[#C9A45C] shrink-0" />
                  <span className="text-xs font-semibold text-[#F3EBDD] leading-tight">
                    Free Car & Bus Parking
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-[#17120F]/60 p-2.5 border border-[#3A2920]">
                  <Truck className="size-4 text-[#C9A45C] shrink-0" />
                  <span className="text-xs font-semibold text-[#F3EBDD] leading-tight">
                    Rooftop Deck Seating
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-[#17120F]/60 p-2.5 border border-[#3A2920]">
                  <Zap className="size-4 text-[#C9A45C] shrink-0" />
                  <span className="text-xs font-semibold text-[#F3EBDD] leading-tight">
                    10-Min Fast Takeaway
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-[#17120F]/60 p-2.5 border border-[#3A2920]">
                  <ShieldCheck className="size-4 text-[#16A34A] shrink-0" />
                  <span className="text-xs font-semibold text-[#F3EBDD] leading-tight">
                    100% Pure Veg Integrity
                  </span>
                </div>
              </div>
            </div>

            {/* High-Impact Action CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#C9A45C] to-[#E8C88B] text-[#17120F] px-5 py-3.5 font-display font-black text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(201,164,92,0.35)] hover:shadow-[0_12px_35px_rgba(201,164,92,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <Navigation className="size-4 text-[#17120F] group-hover:rotate-45 transition-transform" />
                <span>START GPS ROUTE</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] text-white px-5 py-3.5 font-display font-black text-sm uppercase tracking-wider shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <MessageCircle className="size-4 fill-white text-[#25D366]" />
                <span>WHATSAPP LOCATION</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Highway Radar & Corridor Dashboard */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-3xl bg-[#201814] border-2 border-[#3A2920] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col h-full">
              {/* Interactive View Mode Switcher Header */}
              <div className="p-4 sm:p-5 bg-[#1C1612] border-b border-[#3A2920] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#17120F] border border-[#3A2920]">
                  <button
                    type="button"
                    onClick={() => setViewMode("radar")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === "radar"
                        ? "bg-[#C9A45C] text-[#17120F] shadow"
                        : "text-[#D1C2B0] hover:text-[#F3EBDD]"
                    }`}
                  >
                    <Compass className="size-3.5" />
                    <span>Live Radar Map</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("photo")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === "photo"
                        ? "bg-[#C9A45C] text-[#17120F] shadow"
                        : "text-[#D1C2B0] hover:text-[#F3EBDD]"
                    }`}
                  >
                    <Layers className="size-3.5" />
                    <span>Truck Photo & Landmark</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("routes")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      viewMode === "routes"
                        ? "bg-[#C9A45C] text-[#17120F] shadow"
                        : "text-[#D1C2B0] hover:text-[#F3EBDD]"
                    }`}
                  >
                    <Route className="size-3.5" />
                    <span>Distance Calculator</span>
                  </button>
                </div>

                <a
                  href="tel:+919501201215"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A45C] hover:text-[#D8B772] transition-colors"
                >
                  <Phone className="size-3.5" />
                  <span>Call Kitchen: 095012 01215</span>
                </a>
              </div>

              {/* View 1: Live Radar & GT Road Corridor Map */}
              {viewMode === "radar" && (
                <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[380px] bg-gradient-to-b from-[#1E1713] via-[#17120F] to-[#120E0C]">
                  {/* Radar Background Circular Sweeps & Grid */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 50% 50%, #C9A45C 1px, transparent 1px), linear-gradient(to right, #3A2920 1px, transparent 1px), linear-gradient(to bottom, #3A2920 1px, transparent 1px)",
                      backgroundSize: "28px 28px, 40px 40px, 40px 40px",
                    }}
                  />

                  {/* Concentric Radar Pulse Rings Centered on Dhilwan */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 rounded-full border border-[#C9A45C]/20 pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full border border-[#C9A45C]/15 pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[480px] rounded-full border border-[#C9A45C]/10 pointer-events-none" />

                  {/* Corridor Title Bar */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#3A2920]/80">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#C9A45C] uppercase block">
                        GT ROAD HIGHWAY CORRIDOR • NH 44
                      </span>
                      <h4 className="font-display font-black text-lg text-[#F3EBDD]">
                        Jalandhar ➔ Dhilwan ➔ Amritsar Route
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#17120F] border border-[#2E8B57]/50 text-[10px] font-bold text-[#4ADE80]">
                      <span className="size-2 rounded-full bg-[#16A34A] animate-ping" />
                      RADAR ACTIVE
                    </span>
                  </div>

                  {/* Stylized Visual Highway Track with Double-Decker Truck Beacon */}
                  <div className="relative my-6 z-10">
                    <div className="relative bg-gradient-to-b from-[#18120F] via-[#140F0D] to-[#100C0A] rounded-2xl border-2 border-[#C9A45C]/40 p-4 sm:p-6 shadow-2xl overflow-hidden">
                      {/* TOP ROW: Highway Road Track & Waypoint Nodes */}
                      <div className="relative h-20 sm:h-24 flex items-center justify-between px-4 sm:px-10">
                        {/* Continuous Animated Highway Divider Line */}
                        <div className="absolute inset-x-8 sm:inset-x-16 top-1/2 -translate-y-1/2 h-2 bg-[#1A1410] border-y border-[#3A2920] flex items-center z-0">
                          <div className="w-full border-b-2 border-dashed border-[#C9A45C]/60" />
                        </div>

                        {/* Highway Stop 1: JALANDHAR PIN */}
                        <div className="relative z-10 flex items-center justify-center">
                          <span className="absolute -inset-2 rounded-full bg-[#D1C2B0]/20 animate-pulse pointer-events-none" />
                          <div className="size-8 sm:size-9 rounded-full bg-[#201814] border-2 border-[#D1C2B0] flex items-center justify-center shadow-lg">
                            <span className="size-2.5 sm:size-3 rounded-full bg-[#D1C2B0]" />
                          </div>
                        </div>

                        {/* Center Landmark: GHUMANS LOGO BEACON */}
                        <div className="relative z-10 flex items-center justify-center">
                          {/* Glowing Radar Pulse Halos */}
                          <span className="absolute -inset-3.5 sm:-inset-4 rounded-full bg-[#C9A45C]/30 animate-ping pointer-events-none" />
                          <span className="absolute -inset-7 sm:-inset-9 rounded-full bg-[#D4AF67]/20 animate-pulse pointer-events-none" />
                          
                          {/* Official Scalloped Chef Emblem */}
                          <div className="relative size-18 sm:size-22 rounded-full bg-[#201814] border-2 sm:border-[2.5px] border-[#D4AF67] p-1 shadow-[0_0_35px_rgba(201,164,92,0.65)] hover:scale-105 transition-transform shrink-0">
                            <img
                              src="/ghuman-logo.svg"
                              alt="Ghumans Kitchen Express"
                              className="size-full rounded-full object-cover"
                            />
                            {/* 100% Pure Veg Green Dot */}
                            <span
                              className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-[#16A34A] border-2 border-[#17120F] shadow-sm z-20"
                              title="100% Pure Vegetarian"
                            />
                          </div>
                        </div>

                        {/* Highway Stop 2: AMRITSAR PIN */}
                        <div className="relative z-10 flex items-center justify-center">
                          <span className="absolute -inset-2 rounded-full bg-[#D1C2B0]/20 animate-pulse pointer-events-none" />
                          <div className="size-8 sm:size-9 rounded-full bg-[#201814] border-2 border-[#D1C2B0] flex items-center justify-center shadow-lg">
                            <span className="size-2.5 sm:size-3 rounded-full bg-[#D1C2B0]" />
                          </div>
                        </div>
                      </div>

                      {/* BOTTOM ROW: Clean Station Details & Distance Pills (Zero Overlap) */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3 text-center items-start">
                        {/* Jalandhar Station Details */}
                        <div className="flex flex-col items-center">
                          <span className="font-display font-black text-xs sm:text-sm text-[#F3EBDD] tracking-wide">
                            JALANDHAR
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-[#C9A45C] bg-[#17120F] px-2.5 py-0.5 rounded-full border border-[#C9A45C]/40 mt-1 shadow-sm whitespace-nowrap">
                            24 KM (25 Min)
                          </span>
                        </div>

                        {/* Ghumans Dhilwan Station Details */}
                        <div className="flex flex-col items-center">
                          <span className="font-display font-black text-xs sm:text-base text-[#F3EBDD] tracking-wide leading-tight whitespace-nowrap">
                            GHUMANS FOOD TRUCK
                          </span>
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/70 px-3 py-0.5 text-[10px] sm:text-[11px] font-black text-[#4ADE80] mt-1 shadow-sm whitespace-nowrap">
                            <span className="size-1.5 rounded-full bg-[#16A34A] animate-ping" />
                            <span>DHILWAN TOLL PLAZA</span>
                          </div>
                          <span className="text-[10px] font-semibold text-[#D1C2B0] mt-1 hidden sm:block">
                            Grand Trunk Road • Double-Decker Dine-In
                          </span>
                        </div>

                        {/* Amritsar Station Details */}
                        <div className="flex flex-col items-center">
                          <span className="font-display font-black text-xs sm:text-sm text-[#F3EBDD] tracking-wide">
                            AMRITSAR
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-[#C9A45C] bg-[#17120F] px-2.5 py-0.5 rounded-full border border-[#C9A45C]/40 mt-1 shadow-sm whitespace-nowrap">
                            56 KM (48 Min)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Driver Instruction Tip */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#D1C2B0]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="size-3.5 text-[#C9A45C] shrink-0" />
                        <span>Look for the glowing double-decker lights right next to Dhilwan Toll</span>
                      </span>
                      <span className="font-script text-[#C9A45C] text-base">
                        "Easiest highway pull-over in Punjab"
                      </span>
                    </div>
                  </div>

                  {/* Highway Station Footer Strip */}
                  <div className="relative z-10 pt-4 border-t border-[#3A2920]/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-[#D1C2B0]">
                      Dhilwan, Dist. Kapurthala • Punjab 144804
                    </span>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-black text-[#C9A45C] hover:text-[#D8B772] uppercase tracking-wider"
                    >
                      <span>Open Satellite Map</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* View 2: Actual Food Truck Landmark Photograph */}
              {viewMode === "photo" && (
                <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[380px] bg-[#17120F]">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#C9A45C]/50 shadow-2xl group">
                    <img
                      src="/ghumans-truck.jpg"
                      alt="Ghumans Kitchen Express Food Truck Real Landmark Photograph at Dhilwan"
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-transparent to-black/40" />

                    {/* Photo Overlays */}
                    <div className="absolute top-3 left-3 bg-[#17120F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A45C]/60 flex items-center gap-1.5 shadow">
                      <span className="size-2 rounded-full bg-[#16A34A] animate-ping" />
                      <span className="text-[11px] font-bold text-[#F3EBDD]">
                        Actual Landmark Photograph
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-[#C9A45C] text-[#17120F] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                      Dhilwan Toll Plaza
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-[#17120F]/90 backdrop-blur-md p-4 rounded-xl border border-[#3A2920] shadow-xl">
                      <p className="font-display font-black text-sm sm:text-base text-[#F3EBDD]">
                        Look for our custom red double-decker food truck!
                      </p>
                      <p className="text-xs text-[#D1C2B0] mt-1">
                        Located immediately on the roadside at Grand Trunk Road with warm amber fairy lights and second-floor rooftop glass dining.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#3A2920] flex items-center justify-between text-xs">
                    <span className="text-[#D1C2B0]">Dedicated curb-side parking available for road-trippers</span>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#C9A45C] hover:underline flex items-center gap-1"
                    >
                      <span>Navigate directly here</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* View 3: Distance & Route Calculator */}
              {viewMode === "routes" && (
                <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between min-h-[380px] bg-gradient-to-b from-[#1C1612] to-[#120E0C]">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#C9A45C] uppercase block mb-2">
                      SELECT YOUR DEPARTURE CITY
                    </span>

                    {/* City Selector Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                      {(["jalandhar", "amritsar", "beas", "kapurthala"] as const).map((cityKey) => {
                        const isSelected = selectedCity === cityKey;
                        const data = CITY_ROUTES[cityKey];
                        return (
                          <button
                            key={cityKey}
                            type="button"
                            onClick={() => setSelectedCity(cityKey)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "bg-[#C9A45C] text-[#17120F] border-[#C9A45C] shadow-lg font-black"
                                : "bg-[#17120F] text-[#D1C2B0] border-[#3A2920] hover:border-[#C9A45C]/50"
                            }`}
                          >
                            <span className="text-[11px] uppercase tracking-wider block font-bold">
                              {data.city}
                            </span>
                            <span className="text-xs font-black block mt-0.5">
                              {data.distance}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Route Detailed Card */}
                    <div className="p-5 rounded-2xl bg-[#17120F] border-2 border-[#C9A45C]/40 shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-[#3A2920] pb-3">
                        <div>
                          <span className="text-[10px] font-bold text-[#C9A45C] uppercase tracking-wider">
                            {currentRoute.badge}
                          </span>
                          <h4 className="font-display font-black text-xl text-[#F3EBDD] mt-0.5">
                            {currentRoute.city} ➔ Ghumans Dhilwan
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-display font-black text-2xl text-[#C9A45C] block leading-none">
                            {currentRoute.time}
                          </span>
                          <span className="text-[10px] text-[#D1C2B0] font-semibold mt-1 block">
                            Distance: {currentRoute.distance}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2.5 text-xs text-[#D1C2B0]">
                        <div className="flex items-start gap-2.5">
                          <Route className="size-4 text-[#C9A45C] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#F3EBDD]">Highway Direction:</strong>{" "}
                            {currentRoute.direction}
                          </span>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <MapPin className="size-4 text-[#4ADE80] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#F3EBDD]">Turn-Off Point:</strong>{" "}
                            {currentRoute.landmark}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculator CTA */}
                  <div className="mt-6 pt-4 border-t border-[#3A2920] flex items-center justify-between">
                    <span className="text-xs text-[#D1C2B0]">
                      Ready for the road? Call ahead to have your food hot on arrival.
                    </span>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#C9A45C] text-[#17120F] px-4 py-2 text-xs font-black uppercase tracking-wider hover:bg-[#D8B772] transition-colors"
                    >
                      <span>Navigate Now</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
