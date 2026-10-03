import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "./menuData";

export interface OrderItem {
  id: string; // unique cart item key: `${item.id}-${size || 'std'}`
  item: MenuItem;
  size?: string;
  price: number;
  quantity: number;
}

interface OrderContextType {
  order: OrderItem[];
  isOpen: boolean;
  openOrderDrawer: (initialItem?: MenuItem) => void;
  closeOrderDrawer: () => void;
  addToOrder: (item: MenuItem, size?: string, customPrice?: number) => void;
  removeFromOrder: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearOrder: () => void;
  totalCount: number;
  totalPrice: number;
  getWhatsAppOrderUrl: (notes?: string) => string;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const RESTAURANT_PHONE = "77078-13600";
export const RESTAURANT_WHATSAPP_NUMBER = "917707813600";
export const RESTAURANT_UPI_ID = "9501201215-1@okbizaxis";
export const RESTAURANT_OWNER = "Jaspreet Singh";

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from session if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("ghumans_cart_v3");
      if (saved) {
        setOrder(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("ghumans_cart_v3", JSON.stringify(order));
    } catch {
      // ignore
    }
  }, [order]);

  const addToOrder = (item: MenuItem, selectedSize?: string, customPrice?: number) => {
    const size = selectedSize || undefined;
    const price = customPrice !== undefined ? customPrice : item.price;
    const cartId = `${item.id}-${size || "std"}`;

    setOrder((prev) => {
      const existing = prev.find((entry) => entry.id === cartId || (entry.item.id === item.id && entry.size === size));
      if (existing) {
        return prev.map((entry) =>
          entry.id === existing.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { id: cartId, item, size, price, quantity: 1 }];
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

  const removeFromOrder = (cartId: string) => {
    setOrder((prev) => prev.filter((entry) => entry.id !== cartId && entry.item.id !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setOrder((prev) =>
      prev
        .map((entry) => {
          if (entry.id === cartId || entry.item.id === cartId) {
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
    (sum, entry) => sum + entry.price * entry.quantity,
    0
  );

  const getWhatsAppOrderUrl = (notes?: string) => {
    if (order.length === 0) {
      const defaultMsg = encodeURIComponent(
        "Hello Ghumans Kitchen Express! 👋\nI'd like to check today's live food truck menu and place an order at Grand Trunk Road, Dhilwan."
      );
      return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${defaultMsg}`;
    }

    let message = "Hello Ghumans Kitchen Express,\n";
    message += "I would like to place an order:\n\n";

    order.forEach((entry, i) => {
      const sizeNote = entry.size ? ` (${entry.size})` : "";
      message += `${i + 1}. ${entry.item.name}${sizeNote} × ${entry.quantity} - ₹${entry.price * entry.quantity}\n`;
    });

    message += `\nTotal: ₹${totalPrice}\n\n`;
    if (notes && notes.trim()) {
      message += `Special instructions: ${notes.trim()}\n\n`;
    }
    message += "Please confirm my order.";

    return `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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
