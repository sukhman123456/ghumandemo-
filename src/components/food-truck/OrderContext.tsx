import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "./menuData";

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderContextType {
  order: OrderItem[];
  isOpen: boolean;
  openOrderDrawer: (initialItem?: MenuItem) => void;
  closeOrderDrawer: () => void;
  addToOrder: (item: MenuItem) => void;
  removeFromOrder: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearOrder: () => void;
  totalCount: number;
  totalPrice: number;
  getWhatsAppOrderUrl: (notes?: string) => string;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from session if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("ghumans_cart");
      if (saved) {
        setOrder(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("ghumans_cart", JSON.stringify(order));
    } catch {
      // ignore
    }
  }, [order]);

  const addToOrder = (item: MenuItem) => {
    setOrder((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const openOrderDrawer = (initialItem?: MenuItem) => {
    if (initialItem) {
      addToOrder(initialItem);
    } else {
      setIsOpen(true);
    }
  };

  const closeOrderDrawer = () => setIsOpen(false);

  const removeFromOrder = (itemId: string) => {
    setOrder((prev) => prev.filter((entry) => entry.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setOrder((prev) =>
      prev
        .map((entry) => {
          if (entry.item.id === itemId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is OrderItem => entry !== null)
    );
  };

  const clearOrder = () => setOrder([]);

  const totalCount = order.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalPrice = order.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );

  const getWhatsAppOrderUrl = (notes?: string) => {
    const phoneNumber = "919501201215";
    if (order.length === 0) {
      const defaultMsg = encodeURIComponent(
        "Hello Ghumans Kitchen Express! 👋\nI'd like to check today's live food truck menu and place an order at Grand Trunk Road, Dhilwan."
      );
      return `https://wa.me/${phoneNumber}?text=${defaultMsg}`;
    }

    let message = "🍔 *GHUMANS KITCHEN EXPRESS ORDER* 🍕\n";
    message += "📍 Location: GT Road, Dhilwan (Near Toll Plaza)\n";
    message += "──────────────────────\n";
    order.forEach((entry, i) => {
      message += `${i + 1}. *${entry.item.name}* x ${entry.quantity} = ₹${entry.item.price * entry.quantity}\n`;
    });
    message += "──────────────────────\n";
    message += `💰 *Total Amount: ₹${totalPrice}*\n`;
    message += `🌱 *Pure Vegetarian Order*\n`;
    if (notes && notes.trim()) {
      message += `📝 Special instructions: ${notes.trim()}\n`;
    }
    message += "\nPlease confirm preparation time. Thank you!";

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
