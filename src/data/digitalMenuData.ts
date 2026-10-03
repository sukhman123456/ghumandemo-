export interface SizeOption {
  size: "Medium" | "Large" | "Standard";
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  code?: string;
  name: string;
  category:
    | "burgers"
    | "wraps"
    | "starters"
    | "pizza"
    | "pizza-addons"
    | "deals"
    | "soda"
    | "shakes"
    | "salad"
    | "snacks"
    | "hot-beverages"
    | "beverages";
  description: string;
  price: number;
  sizes?: SizeOption[];
  image: string;
  fallbackImage?: string;
  badge?: "BEST SELLER" | "POPULAR" | "CHEF SPECIAL" | "VALUE MEAL" | "PARTY DEAL";
  isVeg: boolean;
  quantityNote?: string;
  includes?: string[];
}

export interface CategoryInfo {
  id: MenuItem["category"] | "all";
  label: string;
  icon: string;
  count?: number;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", label: "All Items", icon: "✨" },
  { id: "burgers", label: "Burgers", icon: "🍔" },
  { id: "wraps", label: "Wraps", icon: "🌯" },
  { id: "starters", label: "Starters & Fries", icon: "🍟" },
  { id: "pizza", label: "Fresh Base Pizza", icon: "🍕" },
  { id: "deals", label: "Deals & Combos", icon: "🔥" },
  { id: "soda", label: "Fresh Soda Drinks", icon: "🍹" },
  { id: "shakes", label: "Milk Shakes", icon: "🥤" },
  { id: "salad", label: "Salad", icon: "🥗" },
  { id: "snacks", label: "Snacks", icon: "🍢" },
  { id: "hot-beverages", label: "Hot Beverages", icon: "☕" },
  { id: "beverages", label: "Cold Drinks", icon: "🍾" },
  { id: "pizza-addons", label: "Pizza Add-Ons", icon: "🧀" },
];

export const DIGITAL_MENU_ITEMS: MenuItem[] = [
  // 1. BURGERS
  {
    id: "b1",
    code: "B1",
    name: "Aloo Tikki Burger",
    category: "burgers",
    description: "Crispy seasoned golden potato herb patty, shredded crunchy iceberg lettuce, house secret sauces in a toasted bun.",
    price: 50,
    image: "/menu-burger-aloo-herb.jpg",
    fallbackImage: "/food-burger.jpg",
    isVeg: true,
  },
  {
    id: "b2",
    code: "B2",
    name: "Cheese Burger",
    category: "burgers",
    description: "Classic grilled cheeseburger layered with rich melted cheese slice, crisp fresh lettuce, tomato & creamy signature dressing.",
    price: 60,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-burger.jpg",
    isVeg: true,
  },
  {
    id: "b3",
    code: "B3",
    name: "Crispy Veggie Burger",
    category: "burgers",
    description: "Golden crispy vegetable patty packed with farm-fresh garden greens, cheese sauce, tangy relish and toasted brioche bun.",
    price: 80,
    image: "/menu-burger-royal-veg.jpg",
    fallbackImage: "/food-burger.jpg",
    isVeg: true,
  },
  {
    id: "b4",
    code: "B4",
    name: "Crispy Paneer Burger",
    category: "burgers",
    description: "Generous crispy fried cottage cheese paneer steak with crisp lettuce, secret tandoori dressing and soft sesame bun.",
    price: 100,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-burger-paneer-double.jpg",
    isVeg: true,
  },
  {
    id: "b5",
    code: "B5",
    name: "Bus Special Burger",
    category: "burgers",
    description: "Our signature double-decker truck loaded burger with chef's crisp patty, extra cheese, onion rings and signature truck sauces.",
    price: 130,
    badge: "CHEF SPECIAL",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-burger-paneer-double.jpg",
    isVeg: true,
  },
  {
    id: "b6",
    code: "B6",
    name: "Double Paneer Burger",
    category: "burgers",
    description: "Substantial double-stack burger with two thick crispy paneer patties, melted cheddar slices, lettuce and jalapeño mayo.",
    price: 160,
    badge: "POPULAR",
    image: "/menu-burger-paneer-double.jpg",
    fallbackImage: "/food-burger.jpg",
    isVeg: true,
  },

  // 2. WRAPS
  {
    id: "w1",
    code: "W1",
    name: "Crispy Paneer Wrap",
    category: "wraps",
    description: "Crispy spiced paneer batons wrapped in a toasted soft tortilla with sliced onions, crunchy capsicum and creamy sauces.",
    price: 130,
    image: "/food-wrap.jpg",
    fallbackImage: "/menu-wrap-paneer-tikka.jpg",
    isVeg: true,
  },
  {
    id: "w2",
    code: "W2",
    name: "Crispy Veggie Wrap",
    category: "wraps",
    description: "Crispy fried vegetable filling with garden-fresh greens, bell peppers and zesty spicy herb mayonnaise inside a toasted wrap.",
    price: 150,
    badge: "BEST SELLER",
    image: "/menu-wrap-mexican-salsa.jpg",
    fallbackImage: "/food-wrap.jpg",
    isVeg: true,
  },
  {
    id: "w3",
    code: "W3",
    name: "Paneer Tikka Wrap",
    category: "wraps",
    description: "Charcoal tandoori marinated paneer tikka, capsicum, pickled onions and aromatic Indian mint chutney wrapped in soft flatbread.",
    price: 190,
    badge: "POPULAR",
    image: "/menu-wrap-paneer-tikka.jpg",
    fallbackImage: "/food-wrap.jpg",
    isVeg: true,
  },

  // 3. STARTERS (FRIES)
  {
    id: "f1",
    code: "F1",
    name: "French Fries (Salty)",
    category: "starters",
    description: "Classic hot, crispy golden French fries lightly tossed in sea salt.",
    price: 60,
    sizes: [
      { size: "Medium", label: "M (Medium)", price: 60 },
      { size: "Large", label: "L (Large)", price: 80 },
    ],
    image: "/food-fries.jpg",
    fallbackImage: "/menu-fries-peri-peri.jpg",
    isVeg: true,
  },
  {
    id: "f2",
    code: "F2",
    name: "Peri-Peri Fries (Spicy)",
    category: "starters",
    description: "Crispy golden skin-on fries generously coated with fiery, aromatic peri-peri seasoning dust.",
    price: 80,
    sizes: [
      { size: "Medium", label: "M (Medium)", price: 80 },
      { size: "Large", label: "L (Large)", price: 100 },
    ],
    image: "/menu-fries-peri-peri.jpg",
    fallbackImage: "/food-fries.jpg",
    isVeg: true,
  },
  {
    id: "f3",
    code: "F3",
    name: "Cheesy Fries",
    category: "starters",
    description: "Golden crinkle-cut fries smothered in warm molten cheddar cheese sauce and Italian herb sprinkle.",
    price: 100,
    badge: "POPULAR",
    sizes: [
      { size: "Medium", label: "M (Medium)", price: 100 },
      { size: "Large", label: "L (Large)", price: 120 },
    ],
    image: "/menu-fries-loaded-cheesy.jpg",
    fallbackImage: "/food-fries.jpg",
    isVeg: true,
  },

  // 4. FRESH BASE PIZZA
  {
    id: "p1",
    code: "P1",
    name: "Margarita Pizza",
    category: "pizza",
    description: "The Classic Italian Pizza With Hot Cheese Topping & Italian Herb Seasoning.",
    price: 180,
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 180 },
      { size: "Large", label: "Large (12\")", price: 300 },
    ],
    image: "/menu-pizza-margherita.jpg",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },
  {
    id: "p2",
    code: "P2",
    name: "Cheese Corn Pizza",
    category: "pizza",
    description: "Hot Cheese, Corn, Best Fragrant With Spices & Herb Crust.",
    price: 230,
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 230 },
      { size: "Large", label: "Large (12\")", price: 330 },
    ],
    image: "/images/cheese-corn-pizza.jpg",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },
  {
    id: "p3",
    code: "P3",
    name: "Mix Veg Lover",
    category: "pizza",
    description: "Loaded Cheese, Onion, Capsicum, Tomato, Olive, Corn on stone-baked crust.",
    price: 300,
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 300 },
      { size: "Large", label: "Large (12\")", price: 380 },
    ],
    image: "/food-pizza.jpg",
    fallbackImage: "/menu-pizza-farmhouse.jpg",
    isVeg: true,
  },
  {
    id: "p4",
    code: "P4",
    name: "Chilli Paneer Pizza",
    category: "pizza",
    description: "Masala Paneer, Corn, Green Capsicum with spicy herb sauce and mozzarella.",
    price: 310,
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 310 },
      { size: "Large", label: "Large (12\")", price: 390 },
    ],
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-pizza-paneer-makhani.jpg",
    isVeg: true,
  },
  {
    id: "p5",
    code: "P5",
    name: "Butter Paneer Pizza",
    category: "pizza",
    description: "Marinated Chunky Paneer, Onion, Capsicum, Red Paprika with Makhni Sauce.",
    price: 320,
    badge: "BEST SELLER",
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 320 },
      { size: "Large", label: "Large (12\")", price: 420 },
    ],
    image: "/menu-pizza-paneer-makhani.jpg",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },
  {
    id: "p6",
    code: "P6",
    name: "Farm Fresh Pizza",
    category: "pizza",
    description: "Onion, Capsicum, Corn, Jalapeno, Mushroom, Paneer, Tomato & mozzarella.",
    price: 350,
    badge: "POPULAR",
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 350 },
      { size: "Large", label: "Large (12\")", price: 450 },
    ],
    image: "/menu-pizza-farmhouse.jpg",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },
  {
    id: "p7",
    code: "P7",
    name: "Our Spl. Pizza",
    category: "pizza",
    description: "Olive, Paneer, Jalapeno, Red Paprika, Mushroom, Tomato, Capsicum, Corn.",
    price: 400,
    badge: "CHEF SPECIAL",
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 400 },
      { size: "Large", label: "Large (12\")", price: 500 },
    ],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-pizza-farmhouse.jpg",
    isVeg: true,
  },
  {
    id: "p8",
    code: "P8",
    name: "Super Loaded Pizza",
    category: "pizza",
    description: "Fully Loaded Cheese with Masala Paneer, Olive, Paneer, Jalapeno, Red Paprika, Mushroom, Potato Fries.",
    price: 500,
    badge: "BEST SELLER",
    sizes: [
      { size: "Medium", label: "Medium (10\")", price: 500 },
      { size: "Large", label: "Large (12\")", price: 600 },
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-pizza-farmhouse.jpg",
    isVeg: true,
  },

  // 5. PIZZA ADD-ONS
  {
    id: "addon-cheese-burst",
    name: "Cheese Burst Crust",
    category: "pizza-addons",
    description: "Infuse your pizza crust with molten, velvety liquid cheese that oozes with every single bite.",
    price: 50,
    sizes: [
      { size: "Medium", label: "Medium Crust (+₹50)", price: 50 },
      { size: "Large", label: "Large Crust (+₹80)", price: 80 },
    ],
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },
  {
    id: "addon-brown-burst",
    name: "Brown Burst Crust",
    category: "pizza-addons",
    description: "Crispy roasted whole wheat multi-grain crust burst with secret aromatic savory filling.",
    price: 50,
    sizes: [
      { size: "Medium", label: "Medium Crust (+₹50)", price: 50 },
      { size: "Large", label: "Large Crust (+₹80)", price: 80 },
    ],
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-pizza.jpg",
    isVeg: true,
  },

  // 6. DEALS
  {
    id: "deal-bf",
    code: "BF",
    name: "Budget Friendly Meal",
    category: "deals",
    description: "2 Cheese Burger + Medium Fries + 2 Coke 200ml. The ultimate value road trip companion!",
    price: 190,
    badge: "VALUE MEAL",
    includes: ["2 × Cheese Burger", "1 × Medium French Fries", "2 × Chilled Coke 200ml"],
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/hero-fastfood-feast.jpg",
    isVeg: true,
  },
  {
    id: "deal-pl",
    code: "PL",
    name: "Paneer Lover Combo",
    category: "deals",
    description: "2 Crispy Paneer Burger + Medium Fries + 2 Coke 200ml. Created specifically for authentic cottage cheese connoisseurs.",
    price: 270,
    badge: "BEST SELLER",
    includes: ["2 × Crispy Paneer Burger", "1 × Medium French Fries", "2 × Chilled Coke 200ml"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/hero-fastfood-feast.jpg",
    isVeg: true,
  },
  {
    id: "deal-wm",
    code: "WM",
    name: "Wrap Meal Fiesta",
    category: "deals",
    description: "2 Crispy Paneer Wrap + Medium Fries + 2 Coke 200ml. Rolled fresh with spices, dips and chilled refreshments.",
    price: 330,
    badge: "POPULAR",
    includes: ["2 × Crispy Paneer Wrap", "1 × Medium French Fries", "2 × Chilled Coke 200ml"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/hero-fastfood-feast.jpg",
    isVeg: true,
  },
  {
    id: "deal-fl",
    code: "FL",
    name: "Farmer Lover Feast",
    category: "deals",
    description: "1 Farm Fresh Pizza (Medium) + 1 Crispy Paneer Wrap + 2 Coke. Our flagship family feast hot from the food truck oven!",
    price: 490,
    badge: "PARTY DEAL",
    includes: ["1 × Farm Fresh Pizza (Medium)", "1 × Crispy Paneer Wrap", "2 × Chilled Coke"],
    image: "/hero-fastfood-feast.jpg",
    fallbackImage: "/menu-pizza-farmhouse.jpg",
    isVeg: true,
  },

  // 7. FRESH SODA DRINKS
  {
    id: "m1",
    code: "M1",
    name: "Mint Mojito",
    category: "soda",
    description: "Refreshing sparkling soda with fresh crushed garden mint leaves, zesty Persian lime, simple syrup and ice.",
    price: 80,
    badge: "POPULAR",
    image: "/menu-drink-mint-mojito.jpg",
    fallbackImage: "/food-mojito.jpg",
    isVeg: true,
  },

  // 8. MILK SHAKES
  {
    id: "s1",
    code: "S1",
    name: "Mango Shake",
    category: "shakes",
    description: "Rich and thick tropical milkshake blended with sweet golden Alphonso mangoes, creamy milk and vanilla scoop.",
    price: 100,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },
  {
    id: "s2",
    code: "S2",
    name: "Chocolate Shake",
    category: "shakes",
    description: "Decadent dark Belgian chocolate sauce churned thick with chilled whole milk and chocolate curls on top.",
    price: 100,
    image: "/menu-shake-belgian-chocolate.jpg",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },
  {
    id: "s3",
    code: "S3",
    name: "Strawberry Shake",
    category: "shakes",
    description: "Velvety sweet strawberry milkshake made with real strawberry crush, whipped cream and a cherry swirl.",
    price: 100,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },
  {
    id: "s4",
    code: "S4",
    name: "Cold Coffee",
    category: "shakes",
    description: "Smooth, velvety cold-brewed espresso blended with chilled milk and ice cream. The classic highway energizer.",
    price: 100,
    image: "/menu-shake-cold-coffee.jpg",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },
  {
    id: "s5",
    code: "S5",
    name: "Butter Scotch Shake",
    category: "shakes",
    description: "Rich butterscotch milkshake infused with buttery caramel sauce and crispy praline butterscotch bits.",
    price: 120,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },
  {
    id: "s6",
    code: "S6",
    name: "Oreo Shake",
    category: "shakes",
    description: "Ultra-thick milkshake blended with crunchy chocolate Oreo cookies, topped with whipped cream and crushed Oreos.",
    price: 120,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-shake.jpg",
    isVeg: true,
  },

  // 9. SALAD
  {
    id: "sd1",
    code: "SD1",
    name: "Paneer Tikka Salad",
    category: "salad",
    description: "Fresh healthy bowl loaded with charcoal grilled paneer tikka, crisp lettuce, cucumber, tomatoes, bell peppers and lemon herb dressing.",
    price: 160,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-paneer.jpg",
    isVeg: true,
  },

  // 10. SNACKS
  {
    id: "gm1",
    code: "GM1",
    name: "Golden Mushroom",
    category: "snacks",
    description: "Crispy golden crumb-fried juicy button mushrooms seasoned with Punjabi spices, served steaming hot.",
    price: 90,
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-bread.jpg",
    isVeg: true,
  },
  {
    id: "pf2",
    code: "PF2",
    name: "Paneer Finger",
    category: "snacks",
    description: "6 pieces of succulent spiced cottage cheese fingers coated in golden crunchy batter, served with house special dip.",
    price: 90,
    badge: "BEST SELLER",
    quantityNote: "6 pcs",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-paneer.jpg",
    isVeg: true,
  },
  {
    id: "dip-sauce",
    name: "Any Dip Sauce",
    category: "snacks",
    description: "Your choice of rich creamy dipping sauce: Cheesy Jalapeño, Tandoori Garlic Dip, or Spicy Chipotle Dip.",
    price: 30,
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-fries.jpg",
    isVeg: true,
  },

  // 11. HOT BEVERAGES
  {
    id: "c1",
    code: "C1",
    name: "Spl. Kadak Chai",
    category: "hot-beverages",
    description: "Traditional highway kadak tea brewed rich with fresh grated ginger, crushed green cardamom and mountain spices.",
    price: 20,
    badge: "BEST SELLER",
    image: "/menu-drink-kulhad-chai.jpg",
    fallbackImage: "/menu-drink-kulhad-chai.jpg",
    isVeg: true,
  },
  {
    id: "c2",
    code: "C2",
    name: "Coffee",
    category: "hot-beverages",
    description: "Hot, creamy, frothed cafe-style coffee prepared fresh with aromatic roasted coffee beans and whole milk.",
    price: 40,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/menu-drink-kulhad-chai.jpg",
    isVeg: true,
  },

  // 12. COLD DRINKS / BOTTLED BEVERAGES
  {
    id: "cold-drinks",
    name: "Cold Drinks / Bottled Beverages",
    category: "beverages",
    description: "Selection of chilled canned/bottled cold drinks (Coca-Cola, Thums Up, Sprite, Fanta, Diet Coke, and Chilled Mineral Water).",
    price: 25,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    fallbackImage: "/food-mojito.jpg",
    isVeg: true,
  },
];
