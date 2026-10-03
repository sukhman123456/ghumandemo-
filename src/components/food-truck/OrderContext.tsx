import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  cartId: string;
  id: string;
  code?: string;
  name: string;
  category?: string;
  price: number;
  size?: string;
  image: string;
  quantity: number;
  isVeg?: boolean;
}

interface AddItemParams {
  id: string;
  code?: string;
  name: string;
  category?: string;
  price: number;
  size?: string;
  image: string;
  quantity?: number;
  isVeg?: boolean;
}

interface OrderContextType {
  order: CartItem[];
  isOpen: boolean;
  openOrderDrawer: (initialItem?: any) => void;
  closeOrderDrawer: () => void;
  addToOrder: (item: any, size?: string, customPrice?: number) => void;
  removeFromOrder: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearOrder: () => void;
  totalCount: number;
  totalPrice: number;
  getWhatsAppOrderUrl: (notes?: string) => string;
  getPizzaTruckWhatsAppUrl: () => string;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const RESTAURANT_PHONE = "77078-13600";
export const RESTAURANT_WHATSAPP_NUMBER = "917707813600";
export const RESTAURANT_UPI_ID = "9501201215-1@okbizaxis";
export const RESTAURANT_OWNER = "Jaspreet Singh";

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from session if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("ghumans_cart_v2") || sessionStorage.getItem("ghumans_cart");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Normalize legacy structure if needed
          const normalized: CartItem[] = parsed.map((entry: any) => {
            if (entry.item) {
              const it = entry.item;
              return {
                cartId: `${it.id}-${entry.size || "std"}`,
                id: it.id,
                name: it.name,
                price: entry.price || it.price,
                size: entry.size,
                image: it.image,
                quantity: entry.quantity || 1,
                isVeg: true,
              };
            }
            return {
              ...entry,
              cartId: entry.cartId || `${entry.id}-${entry.size || "std"}`,
            };
          });
          setOrder(normalized);
        }
      }
    } catch {
      // ignore parse error
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("ghumans_cart_v2", JSON.stringify(order));
    } catch {
      // ignore
    }
  }, [order]);

  const addToOrder = (item: any, selectedSize?: string, customPrice?: number) => {
    const size = selectedSize || item.selectedSize || undefined;
    const price = customPrice !== undefined ? customPrice : item.selectedPrice || item.price;
    const cartId = `${item.id}-${size || "std"}`;

    setOrder((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.cartId === cartId);
      if (existingIndex > -1) {
        return prev.map((entry, index) =>
          index === existingIndex
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      const newItem: CartItem = {
        cartId,
        id: item.id,
        code: item.code,
        name: item.name,
        category: item.category,
        price,
        size,
        image: item.image,
        quantity: 1,
        isVeg: item.isVeg !== undefined ? item.isVeg : true,
      };
      return [...prev, newItem];
    });

    setIsOpen(true);
  };

  const openOrderDrawer = (initialItem?: any) => {
    if (initialItem) {
      addToOrder(initialItem);
    } else {
      setIsOpen(true);
    }
  };

  const closeOrderDrawer = () => setIsOpen(false);

  const removeFromOrder = (cartId: string) => {
    setOrder((prev) => prev.filter((entry) => entry.cartId !== cartId && entry.id !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setOrder((prev) =>
      prev
        .map((entry) => {
          if (entry.cartId === cartId || entry.id === cartId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is CartItem => entry !== null)
    );
  };

  const clearOrder = () => setOrder([]);

  const totalCount = order.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalPrice = order.reduce(
    (sum, entry) => sum + entry.price * entry.quantity,
    0
  );

  const getWhatsAppOrderUrl = (notes?: string) => {
    if (order.length === 0) {
      const defaultMsg =
        "Hello Ghumans Kitchen Express,\nI would like to explore today's fresh menu and place an order.\nPlease share details!";
      return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
    }

    // Exact requested format from user specification
    let message = "Hello Ghumans Kitchen Express,\n";
    message += "I would like to place an order:\n\n";

    order.forEach((entry, i) => {
      const sizeNote = entry.size ? ` (${entry.size})` : "";
      message += `${i + 1}. ${entry.name}${sizeNote} × ${entry.quantity}\n`;
    });

    message += `\nTotal: ₹${totalPrice}\n\n`;
    if (notes && notes.trim()) {
      message += `Note: ${notes.trim()}\n\n`;
    }
    message += "Please confirm my order.";

    return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const getPizzaTruckWhatsAppUrl = () => {
    const msg =
      "Hello Ghumans Kitchen Express! 🍕🚚\nI am interested in booking your Pizza Truck / Catering service for an upcoming party/event.\nPlease share package details, pricing, and availability.\nThank you!";
    return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        isOpen,
        openOrderDrawer,
        closeOrderDrawer,
        addToOrder,
        removeFromOrder,
        updateQuantity,
        clearOrder,
        totalCount,
        totalPrice,
        getWhatsAppOrderUrl,
        getPizzaTruckWhatsAppUrl,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
