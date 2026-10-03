import { createFileRoute } from "@tanstack/react-router";
import { OrderProvider } from "@/components/food-truck/OrderContext";
import { Navbar } from "@/components/food-truck/Navbar";
import { GlyphHero } from "@/components/food-truck/GlyphHero";
import { LuxuryScrollEnhancements } from "@/components/food-truck/LuxuryScrollEnhancements";
import { TruckScrollJourney } from "@/components/food-truck/TruckScrollJourney";
import { BrandStory } from "@/components/food-truck/BrandStory";
import { FromTheTruck } from "@/components/food-truck/FromTheTruck";
import { CravingSelector } from "@/components/food-truck/CravingSelector";
import { SignatureMenu } from "@/components/food-truck/SignatureMenu";
import { ExperiencePoints } from "@/components/food-truck/ExperiencePoints";
import { FoodGallery } from "@/components/food-truck/FoodGallery";
import { FindTheTruck } from "@/components/food-truck/FindTheTruck";
import { OrderCTA } from "@/components/food-truck/OrderCTA";
import { ContactSection } from "@/components/food-truck/ContactSection";
import { GoodFoodGoodVibes } from "@/components/food-truck/GoodFoodGoodVibes";
import { FloatingActions } from "@/components/food-truck/FloatingActions";
import { Footer } from "@/components/food-truck/Footer";
import { OrderDrawer } from "@/components/food-truck/OrderDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ghumans Kitchen Express | Pure Veg Food Truck & Dining Experience" },
      {
        name: "description",
        content:
          "Modern Pure Vegetarian Food Truck & Restaurant Experience in Dhilwan, Punjab on GT Road next to Toll Plaza. Enjoy freshly tossed pizzas, gourmet burgers, paneer wraps, loaded fries & thick shakes.",
      },
      { property: "og:title", content: "Ghumans Kitchen Express | Food on Wheels" },
      {
        property: "og:description",
        content:
          "Good Food. Happier People. Double-decker pure vegetarian food truck on Grand Trunk Road, Dhilwan, Punjab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/ghumans-truck.jpg" },
      { property: "og:url", content: "http://localhost:8080/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ghumans Kitchen Express" },
      { name: "twitter:image", content: "/ghumans-truck.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          name: "Ghumans Kitchen Express",
          telephone: "+919501201215",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jalandhar to Amritsar Road, Grand Trunk Road, Next to Toll Plaza",
            addressLocality: "Dhilwan",
            addressRegion: "Punjab",
            postalCode: "144804",
            addressCountry: "IN",
          },
          servesCuisine: "Vegetarian Fast Food",
          priceRange: "₹₹",
          openingHours: "Mo-Su 11:00-22:00",
          image: "/ghumans-truck.jpg",
        }),
      },
    ],
  }),
  component: FoodTruckApp,
});

function FoodTruckApp() {
  return (
    <OrderProvider>
      {/* Luxury Cinematic Enhancements: Subtle film grain, champagne scroll spine & ambient light sweep */}
      <LuxuryScrollEnhancements />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="min-h-screen bg-[#17120F] text-[#F3EBDD] relative">
        {/* 1. Main Home: Full Scroll-Animated Glyph Portal Hero */}
        <GlyphHero />

        {/* 2. Innovative Truck Scroll Journey */}
        <div className="section-reveal">
          <TruckScrollJourney />
        </div>

        {/* 3. Brand Story: More Than Just Food */}
        <div className="section-reveal">
          <BrandStory />
        </div>

        {/* 4. Interactive "From The Truck" Section */}
        <div className="section-reveal">
          <FromTheTruck />
        </div>

        {/* 5. What's Your Craving? Interactive Selector */}
        <div className="section-reveal">
          <CravingSelector />
        </div>

        {/* 6. Signature Menu & Interactive Food Cards (Updated with Full Digital Menu) */}
        <div className="section-reveal">
          <SignatureMenu />
        </div>

        {/* 7. Experience Points: Good Food. Good Vibes. */}
        <div className="section-reveal">
          <ExperiencePoints />
        </div>

        {/* 8. Editorial Food & Truck Gallery */}
        <div className="section-reveal">
          <FoodGallery />
        </div>

        {/* 9. Where's The Truck? Stylized Route Map */}
        <div className="section-reveal">
          <FindTheTruck />
        </div>

        {/* 10. Good Food. Good Vibes. Full-Width Section */}
        <div className="section-reveal">
          <GoodFoodGoodVibes />
        </div>

        {/* 11. Order CTA Banner */}
        <div className="section-reveal">
          <OrderCTA />
        </div>

        {/* 12. Contact & Location Information */}
        <div className="section-reveal">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order Drawer & Cart */}
      <OrderDrawer />

      {/* Floating Actions: WhatsApp & Order Buttons */}
      <FloatingActions />
    </OrderProvider>
  );
}
