import React from "react";
import { ArrowUpRight, Compass, ExternalLink, MapPin, MessageCircle, Navigation, Phone, Sparkles, Truck } from "lucide-react";

export function FindTheTruck() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Ghumans%20Kitchen%20Express%20Dhilwan%20Punjab%20144804";
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I am on GT Road looking for your food truck location.");

  return (
    <section
      id="location"
      className="relative bg-[#0D0D0D] text-[#F5F0E6] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Location Info & Quick Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">
              <Compass className="size-3.5 text-[#D9A441]" />
              LIVE HIGHWAY POSITION
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F0E6] mt-4 leading-tight">
              WHERE’S THE <br />
              <span className="text-[#D9A441]">TRUCK?</span>
            </h2>

            {/* Today's Location Badge */}
            <div className="mt-6 p-5 rounded-2xl bg-[#171411] border-2 border-[#D9A441]/40 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest bg-[#D9A441] text-[#0D0D0D] px-2.5 py-1 rounded">
                  <span className="size-2 rounded-full bg-[#0D0D0D] animate-ping" />
                  TODAY'S STATION
                </span>
                <span className="text-xs font-bold text-[#16A34A] flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#16A34A]" />
                  Open Today until 10 PM
                </span>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <div className="size-10 rounded-full bg-[#D9A441]/15 border border-[#D9A441] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="size-5 text-[#D9A441]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F0E6]">
                    Ghumans Kitchen Express
                  </h3>
                  <address className="not-italic text-sm text-[#A89E92] mt-1 leading-relaxed">
                    Jalandhar to Amritsar Road, <br />
                    Grand Trunk Road, Next to Toll Plaza, <br />
                    <span className="text-[#F5F0E6] font-semibold">Dhilwan, Punjab 144804</span>
                  </address>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#332B23] flex items-center justify-between text-xs text-[#A89E92]">
                <span>Highway Landmark: Dhilwan Toll Plaza</span>
                <span className="text-[#D9A441] font-semibold">Easy Parking Available</span>
              </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#201C18] border border-[#332B23] hover:border-[#D9A441] hover:text-[#D9A441] text-center transition-all group shadow"
              >
                <Navigation className="size-5 text-[#D9A441] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold uppercase tracking-wider">DIRECTIONS</span>
              </a>

              <a
                href="tel:+919501201215"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#201C18] border border-[#332B23] hover:border-[#D9A441] hover:text-[#D9A441] text-center transition-all group shadow"
              >
                <Phone className="size-5 text-[#D9A441] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold uppercase tracking-wider">CALL NOW</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#201C18] border border-[#332B23] hover:border-[#25D366] hover:text-[#25D366] text-center transition-all group shadow"
              >
                <MessageCircle className="size-5 text-[#25D366] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold uppercase tracking-wider">WHATSAPP</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-[#201C18] border border-[#332B23] hover:border-[#D9A441] hover:text-[#D9A441] text-center transition-all group shadow"
              >
                <ExternalLink className="size-5 text-[#D9A441] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-bold uppercase tracking-wider">VIEW MAP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Highway Road Visual with Moving Mini Truck */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl bg-[#171411] border-2 border-[#332B23] p-6 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] min-h-[460px] flex flex-col justify-between">
              {/* Background Road Grid Lines */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#332B23 1px, transparent 1px), linear-gradient(90deg, #332B23 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />

              {/* Highway Banner Header */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#332B23]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9A441] block">
                    NATIONAL HIGHWAY 44 / GRAND TRUNK ROAD
                  </span>
                  <span className="font-display font-black text-lg text-[#F5F0E6]">
                    Jalandhar ➔ Dhilwan ➔ Amritsar Corridor
                  </span>
                </div>
                <div className="size-8 rounded-full bg-[#0D0D0D] border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]">
                  <Compass className="size-4 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
              </div>

              {/* Stylized Highway Visual Track */}
              <div className="relative my-8 py-6 z-10">
                {/* Asymmetrical Highway Ribbon */}
                <div className="relative h-28 bg-[#0D0D0D] rounded-2xl border border-[#332B23] overflow-hidden flex items-center justify-between px-6 shadow-inner">
                  {/* Highway Dashed Line */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-repeat-x border-b border-dashed border-[#D9A441]/60" />

                  {/* Highway Lane Marker 1: Jalandhar */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="size-3.5 rounded-full bg-[#332B23] border border-[#A89E92]" />
                    <span className="text-[10px] font-bold text-[#A89E92] mt-1">JALANDHAR</span>
                    <span className="text-[9px] text-[#A89E92]/70">~25 KM</span>
                  </div>

                  {/* Highway Central Stop: GHUMANS FOOD TRUCK */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      {/* Pulsing beacon */}
                      <span className="absolute -inset-2 rounded-full bg-[#D9A441] opacity-35 animate-ping" />
                      <div className="size-11 rounded-full bg-[#D9A441] text-[#0D0D0D] flex items-center justify-center font-bold shadow-[0_0_20px_#D9A441]">
                        <Truck className="size-5" />
                      </div>
                    </div>
                    <span className="text-xs font-black text-[#D9A441] mt-2 tracking-wide uppercase bg-[#171411] px-2 py-0.5 rounded border border-[#D9A441]/40 shadow">
                      GHUMANS TRUCK
                    </span>
                    <span className="text-[10px] text-[#16A34A] font-bold">NEXT TO TOLL PLAZA</span>
                  </div>

                  {/* Highway Lane Marker 2: Amritsar */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="size-3.5 rounded-full bg-[#332B23] border border-[#A89E92]" />
                    <span className="text-[10px] font-bold text-[#A89E92] mt-1">AMRITSAR</span>
                    <span className="text-[9px] text-[#A89E92]/70">~55 KM</span>
                  </div>
                </div>

                {/* Animated Truck Journey Callout */}
                <div className="mt-4 flex items-center justify-between text-xs text-[#A89E92]">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#16A34A]" />
                    Safe double-decker parking
                  </span>
                  <span className="font-script text-[#D9A441] text-base">
                    "Look for the glowing double-decker lights"
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 pt-4 border-t border-[#332B23] flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-[#A89E92]">Contact for live location: </span>
                  <a href="tel:+919501201215" className="text-[#D9A441] font-bold hover:underline">
                    095012 01215
                  </a>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9A441] hover:text-[#E8B452] uppercase tracking-wider"
                >
                  <span>Open GPS</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
