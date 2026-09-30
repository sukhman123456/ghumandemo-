import { createFileRoute } from "@tanstack/react-router";
import { OrderProvider } from "@/components/food-truck/OrderContext";
import { CinematicLoader } from "@/components/food-truck/CinematicLoader";
import { Navbar } from "@/components/food-truck/Navbar";
import { Hero } from "@/components/food-truck/Hero";
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
      {/* Short cinematic loading experience */}
      <CinematicLoader />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="min-h-screen bg-[#0D0D0D] text-[#F5F0E6]">
        {/* 1. Hero: Truck is the Main Character */}
        <Hero />

        {/* 2. Innovative Truck Scroll Journey */}
        <TruckScrollJourney />

        {/* 3. Brand Story: More Than Just Food */}
        <BrandStory />

        {/* 4. Interactive "From The Truck" Section */}
        <FromTheTruck />

        {/* 5. What's Your Craving? Interactive Selector */}
        <CravingSelector />

        {/* 6. Signature Menu & Interactive Food Cards */}
        <SignatureMenu />

        {/* 7. Experience Points: Good Food. Good Vibes. */}
        <ExperiencePoints />

        {/* 8. Editorial Food & Truck Gallery */}
        <FoodGallery />

        {/* 9. Where's The Truck? Stylized Route Map */}
        <FindTheTruck />

        {/* 10. Good Food. Good Vibes. Full-Width Section */}
        <GoodFoodGoodVibes />

        {/* 11. Order CTA Banner */}
        <OrderCTA />

        {/* 12. Contact & Location Information */}
        <ContactSection />
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
