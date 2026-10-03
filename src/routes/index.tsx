import { createFileRoute } from "@tanstack/react-router";
import { OrderProvider } from "@/components/food-truck/OrderContext";
import { Header } from "@/components/digital-menu/Header";
import { HeroSection } from "@/components/digital-menu/HeroSection";
import { DealsSection } from "@/components/digital-menu/DealsSection";
import { MenuSystem } from "@/components/digital-menu/MenuSystem";
import { PizzaTruckPromo } from "@/components/digital-menu/PizzaTruckPromo";
import { PaymentUPISection } from "@/components/digital-menu/PaymentUPISection";
import { AboutSection } from "@/components/digital-menu/AboutSection";
import { Footer } from "@/components/digital-menu/Footer";
import { CartDrawer } from "@/components/digital-menu/CartDrawer";
import { FloatingBar } from "@/components/digital-menu/FloatingBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ghumans Kitchen Express | Where Cravings Get Expressed | Premium Pure Veg Digital Menu",
      },
      {
        name: "description",
        content:
          "Official digital menu of Ghumans Kitchen Express in Dhilwan, Punjab. Order stone-baked pizzas, crispy aloo & paneer burgers, tandoori wraps, loaded fries and thick milkshakes directly on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Ghumans Kitchen Express | Where Cravings Get Expressed",
      },
      {
        property: "og:description",
        content:
          "Where Cravings Get Expressed. Double-decker 100% pure vegetarian fast-food on Grand Trunk Road, Dhilwan, Punjab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/hero-fastfood-feast.jpg" },
      { property: "og:url", content: "http://localhost:8080/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Ghumans Kitchen Express — Digital Menu",
      },
      { name: "twitter:image", content: "/hero-fastfood-feast.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FastFoodRestaurant",
          name: "Ghumans Kitchen Express",
          telephone: "+917707813600",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Grand Trunk Road, Next to Toll Plaza",
            addressLocality: "Dhilwan",
            addressRegion: "Punjab",
            postalCode: "144804",
            addressCountry: "IN",
          },
          servesCuisine: "Pure Vegetarian Fast Food, Pizza, Burgers, Shakes",
          priceRange: "₹50 - ₹600",
          openingHours: "Mo-Su 11:00-22:00",
          image: "/hero-fastfood-feast.jpg",
        }),
      },
    ],
  }),
  component: DigitalMenuApp,
});

function DigitalMenuApp() {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-warm-canvas text-[#1C1917] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-[#1C1917]">
        {/* 1. Sticky Responsive Header with Cart & Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* 2. Hero Section: Brand Headline, Tagline, Visual Food Feast */}
          <HeroSection />

          {/* 3. Promotional Deals & Combos: Buy 4 Pizza Get 1 Free & 4 Meal Deals */}
          <DealsSection />

          {/* 4. Complete Interactive Digital Menu with Categories & Cards */}
          <MenuSystem />

          {/* 5. Bring A Pizza Truck To Your Party Catering Section */}
          <PizzaTruckPromo />

          {/* 6. Pay Online UPI Section with 9501201215-1@okbizaxis */}
          <PaymentUPISection />

          {/* 7. About Ghumans Kitchen Express & Highway Location */}
          <AboutSection />
        </main>

        {/* 8. Footer with Contact, UPI, 100% Veg Badge & Social Links */}
        <Footer />

        {/* 9. Interactive Cart Drawer */}
        <CartDrawer />

        {/* 10. Floating Actions: WhatsApp Order, Instagram @ghumanskitchenexpress, Mobile Cart */}
        <FloatingBar />
      </div>
    </OrderProvider>
  );
}
