export interface MenuItem {
  id: string;
  name: string;
  category: "pizza" | "burger" | "wraps" | "fries" | "shakes" | "drinks";
  description: string;
  price: number;
  image: string;
  tag?: string;
  isPopular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: "all", label: "ALL ITEMS", icon: "✨" },
  { id: "pizza", label: "PIZZA", icon: "🍕" },
  { id: "burger", label: "BURGERS", icon: "🍔" },
  { id: "wraps", label: "WRAPS", icon: "🌯" },
  { id: "fries", label: "FRIES", icon: "🍟" },
  { id: "shakes", label: "SHAKES", icon: "🥤" },
  { id: "drinks", label: "DRINKS", icon: "🍹" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas
  {
    id: "p1",
    name: "Farmhouse Gourmet Pizza",
    category: "pizza",
    description: "Crispy hand-stretched crust topped with golden sweet corn, bell peppers, sliced black olives, button mushrooms & gooey mozzarella.",
    price: 229,
    image: "/menu-pizza-farmhouse.jpg",
    tag: "Chef's Special",
    isPopular: true,
  },
  {
    id: "p2",
    name: "Paneer Makhani Pizza",
    category: "pizza",
    description: "Rich spiced Punjabi makhani sauce base, marinated soft paneer chunks, crisp red onions and aromatic kasuri methi.",
    price: 259,
    image: "/menu-pizza-paneer-makhani.jpg",
    tag: "Bestseller",
    isPopular: true,
  },
  {
    id: "p3",
    name: "Classic Cheese Margherita",
    category: "pizza",
    description: "San Marzano style tomato concassé, generous double mozzarella melt and fresh basil leaves.",
    price: 189,
    image: "/menu-pizza-margherita.jpg",
  },

  // Burgers
  {
    id: "b1",
    name: "Crispy Aloo Herb Supreme",
    category: "burger",
    description: "Crispy spiced potato herb patty nestled in toasted sesame brioche, crisp iceberg lettuce, tangy house secret relish.",
    price: 89,
    image: "/menu-burger-aloo-herb.jpg",
    tag: "Popular",
    isPopular: true,
  },
  {
    id: "b2",
    name: "Double Decker Paneer Burger",
    category: "burger",
    description: "Thick grilled tandoori spiced paneer steak with melted cheddar slice, crunchy onions, and creamy jalapeño mayo.",
    price: 149,
    image: "/menu-burger-paneer-double.jpg",
    tag: "Signature",
    isPopular: true,
  },
  {
    id: "b3",
    name: "Ghumans Royal Veggie Burger",
    category: "burger",
    description: "Golden crispy veggie patty layered with melted cheese, juicy tomato slices, sweet gherkins and smoky chipotle cream.",
    price: 119,
    image: "/menu-burger-royal-veg.jpg",
  },

  // Wraps
  {
    id: "w1",
    name: "Punjabi Paneer Tikka Wrap",
    category: "wraps",
    description: "Charcoal grilled paneer cubes tossed in mint chutney, pickled onions and crunchy bell peppers in a toasted flaky paratha wrap.",
    price: 149,
    image: "/menu-wrap-paneer-tikka.jpg",
    tag: "Must Try",
    isPopular: true,
  },
  {
    id: "w2",
    name: "Mexican Salsa & Cheese Wrap",
    category: "wraps",
    description: "Seasoned crispy corn & bean filling with fire-roasted tomato salsa, melted cheese sauce and shredded cabbage crunch.",
    price: 129,
    image: "/menu-wrap-mexican-salsa.jpg",
  },

  // Fries
  {
    id: "f1",
    name: "Loaded Cheesy Crinkle Fries",
    category: "fries",
    description: "Crispy golden crinkle-cut fries smothered in warm molten cheddar cheese sauce, roasted jalapeños and herb sprinkle.",
    price: 129,
    image: "/menu-fries-loaded-cheesy.jpg",
    tag: "Crowd Favorite",
    isPopular: true,
  },
  {
    id: "f2",
    name: "Spicy Peri-Peri Crisp Fries",
    category: "fries",
    description: "Skin-on French fries tossed in our signature fiery African peri-peri seasoning dust, served with garlic dip.",
    price: 99,
    image: "/menu-fries-peri-peri.jpg",
    isPopular: true,
  },

  // Shakes & Drinks
  {
    id: "s1",
    name: "Belgian Chocolate Thick Shake",
    category: "shakes",
    description: "Ultra-thick churned ice cream shake blended with rich dark Belgian chocolate sauce, whipped cream and choco crisps.",
    price: 129,
    image: "/menu-shake-belgian-chocolate.jpg",
    tag: "Bestseller",
    isPopular: true,
  },
  {
    id: "s2",
    name: "Creamy Cold Coffee Frappe",
    category: "shakes",
    description: "Slow-brewed dark espresso blended with whole milk and vanilla ice cream, topped with rich coffee drizzle.",
    price: 109,
    image: "/menu-shake-cold-coffee.jpg",
    isPopular: true,
  },
  {
    id: "m1",
    name: "Refreshing Virgin Mint Mojito",
    category: "drinks",
    description: "Fresh hand-muddled mint leaves, zesty lemon slices, bubbly club soda and crushed ice. The ultimate highway thirst quencher.",
    price: 89,
    image: "/menu-drink-mint-mojito.jpg",
    tag: "Refresher",
    isPopular: true,
  },
  {
    id: "m2",
    name: "Masala Kulhad Chai",
    category: "drinks",
    description: "Traditional highway kadak tea brewed with fresh ginger, cardamom and aromatic whole spices in earthen clay cups.",
    price: 40,
    image: "/menu-drink-kulhad-chai.jpg",
  },
];

export const TRUCK_HOTSPOTS = [
  {
    id: "top-deck",
    title: "Double-Decker Rooftop Glass Lounge",
    tag: "Rooftop Experience",
    position: { top: "18%", left: "32%" },
    category: "Eat Good · Travel Far · Repeat",
    description: "Our signature climate-controlled glass upper deck with authentic thatched bamboo ceiling and warm Edison filament lamps. Enjoy panoramic views of Grand Trunk Road with friends and family.",
    highlightImage: "/rooftop-dining.jpg",
    buttonLabel: "Explore Ambience",
  },
  {
    id: "burger-sign",
    title: "Good Food Happier People",
    tag: "Brand Signboard",
    position: { top: "12%", left: "74%" },
    category: "Burgers & Fries",
    description: "Our signature illuminated rooftop billboard displaying our pure vegetarian burger & crispy golden fries. 'Good Food Happier People' is our daily promise.",
    highlightImage: "/menu-burger-paneer-double.jpg",
    buttonLabel: "View Burgers",
  },
  {
    id: "logo-badge",
    title: "Glowing Chef Mascot Badge",
    tag: "Authentic Identity",
    position: { top: "48%", left: "59%" },
    category: "Ghumans Kitchen Express",
    description: "The illuminated circular badge of Chef Ghuman holding the golden pizza slice. Pure vegetarian culinary excellence on wheels.",
    highlightImage: "/ghumans-truck.jpg",
    buttonLabel: "Our Story",
  },
  {
    id: "pizza-window",
    title: "Live Stone-Baked Pizza Oven",
    tag: "Window 01",
    position: { top: "52%", left: "71%" },
    category: "Artisan Pizzas",
    description: "Watch your pizza being freshly hand-tossed and baked at over 350°C right before your eyes with molten mozzarella and fresh veggies.",
    highlightImage: "/menu-pizza-farmhouse.jpg",
    buttonLabel: "View Pizzas",
  },
  {
    id: "wraps-counter",
    title: "Tandoori Wraps & Rolls Station",
    tag: "Window 02",
    position: { top: "53%", left: "80%" },
    category: "Wraps & Kebabs",
    description: "Freshly rolled parathas stuffed with sizzling marinated paneer tikka, spicy mint chutney and crisp garden onions.",
    highlightImage: "/menu-wrap-paneer-tikka.jpg",
    buttonLabel: "View Wraps",
  },
  {
    id: "shakes-bar",
    title: "Chilled Shakes & Mint Mojito Bar",
    tag: "Window 03",
    position: { top: "55%", left: "87%" },
    category: "Beverages",
    description: "Ice-cold Belgian shakes, thick cold coffee frappes and fizzy refreshing mint mojitos crafted on-the-spot.",
    highlightImage: "/menu-drink-mint-mojito.jpg",
    buttonLabel: "View Shakes",
  },
];
