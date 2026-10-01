import React from "react";
import { Clock, Compass, Instagram, MapPin, MessageCircle, Navigation, Phone, Share2, Sparkles } from "lucide-react";

export function ContactSection() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Ghumans%20Kitchen%20Express%20Dhilwan%20Punjab%20144804";
  const whatsappUrl =
    "https://wa.me/919501201215?text=" +
    encodeURIComponent("Hello Ghumans Kitchen Express! I'd like to get in touch.");
  const phone = "095012 01215";
  const phoneHref = "tel:+919501201215";

  return (
    <section
      id="contact"
      className="relative bg-[#17120F] text-[#F3EBDD] py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A45C]">
              <Compass className="size-3.5 text-[#C9A45C]" />
              GET IN TOUCH
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#F3EBDD] mt-4 leading-tight">
              GHUMANS <br />
              <span className="text-[#C9A45C]">KITCHEN EXPRESS</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D1C2B0] mt-4 max-w-xl leading-relaxed">
              We look forward to serving you on your highway journey. Stop by for hot pure veg fast food, panoramic rooftop views, or reach out directly for pre-orders.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#201814] border border-[#3A2920] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                    <MapPin className="size-4" />
                    <span>Location</span>
                  </div>
                  <address className="not-italic text-sm text-[#F3EBDD] mt-3 leading-relaxed">
                    Jalandhar to Amritsar Road, <br />
                    Grand Trunk Road, Next to Toll Plaza, <br />
                    <span className="text-[#C9A45C] font-semibold">Dhilwan, Punjab 144804</span>
                  </address>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A45C] hover:text-[#D4B36D] mt-4 pt-3 border-t border-[#3A2920]"
                >
                  <Navigation className="size-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Hours & Phone Card */}
              <div className="p-5 rounded-2xl bg-[#201814] border border-[#3A2920] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                    <Clock className="size-4" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-sm text-[#F3EBDD] font-bold mt-3">
                    Open Daily until 10:00 PM
                  </p>
                  <p className="text-xs text-[#D1C2B0] mt-1">
                    Serving lunch, evening snacks & late road trip dinner.
                  </p>

                  <div className="mt-3">
                    <span className="text-[10px] uppercase font-bold text-[#D1C2B0] tracking-wider block">
                      Direct Kitchen Phone
                    </span>
                    <a
                      href={phoneHref}
                      className="text-base font-display font-extrabold text-[#C9A45C] hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A45C] hover:text-[#D4B36D] mt-4 pt-3 border-t border-[#3A2920]"
                >
                  <Phone className="size-3.5" />
                  <span>Call Kitchen</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Direct Action Channels */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl bg-[#201814] border-2 border-[#3A2920] shadow-2xl space-y-3.5">
              <h3 className="font-display font-black text-xl text-[#F3EBDD] mb-4">
                Connect Directly
              </h3>

              {/* Call Button */}
              <a
                href={phoneHref}
                className="flex items-center justify-between p-4 rounded-xl bg-[#17120F] border border-[#3A2920] hover:border-[#C9A45C] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:scale-105 transition-transform">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#F3EBDD] block">Phone Call</span>
                    <span className="text-xs text-[#D1C2B0]">{phone}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Call &rarr;
                </span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#17120F] border border-[#3A2920] hover:border-[#25D366] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#F3EBDD] block">WhatsApp Message</span>
                    <span className="text-xs text-[#D1C2B0]">Instant Chat & Orders</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Chat &rarr;
                </span>
              </a>

              {/* Directions Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#17120F] border border-[#3A2920] hover:border-[#C9A45C] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-lg bg-[#C9A45C]/10 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:scale-105 transition-transform">
                    <Navigation className="size-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#F3EBDD] block">GPS Navigation</span>
                    <span className="text-xs text-[#D1C2B0]">Google Maps Route</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Navigate &rarr;
                </span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#17120F] border border-[#3A2920] hover:border-[#E1306C] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="size-10 rounded-lg bg-[#E1306C]/10 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] group-hover:scale-105 transition-transform">
                    <Instagram className="size-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#F3EBDD] block">Instagram</span>
                    <span className="text-xs text-[#D1C2B0]">Follow the Food Truck Journey</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#E1306C] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Follow &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
