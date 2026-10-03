import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "./menuData";

export interface OrderItem {
  id: string; // unique cart item key: `${item.id}-${size || 'std'}`
  item: MenuItem;
  size?: string;
  price: number;
  quantity: number;
}

export interface AddonOption {
  name: string;
  price: number;
}

export interface DriveThruItem {
  id: string; // unique key: `${item.id}-${size || 'std'}-${addonsKey}`
  item: MenuItem;
  size?: string;
  basePrice: number;
  addons: AddonOption[];
  itemTotal: number; // basePrice + addons total
  quantity: number;
}

export interface DriveThruCustomerDetails {
  name: string;
  phone: string;
  pickupDate: string;
  pickupTime: string;
  vehicleType: "Car" | "Bike" | "Other";
  vehicleNumber: string;
  instructions?: string;
}

interface OrderContextType {
  // Standard Tray Order
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

  // Drive-Thru System
  isDriveThruOpen: boolean;
  openDriveThru: (initialItem?: MenuItem) => void;
  closeDriveThru: () => void;
  driveThruOrder: DriveThruItem[];
  addToDriveThru: (item: MenuItem, size?: string, customPrice?: number, addons?: AddonOption[]) => void;
  removeFromDriveThru: (cartId: string) => void;
  updateDriveThruQuantity: (cartId: string, delta: number) => void;
  clearDriveThru: () => void;
  driveThruTotalCount: number;
  driveThruSubtotal: number;
  driveThruAddonsTotal: number;
  driveThruTotalPrice: number;
  driveThruAdvanceAmount: number;
  driveThruRemainingAmount: number;
  getDriveThruWhatsAppUrl: (details: DriveThruCustomerDetails, orderNo: string) => string;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const RESTAURANT_PHONE = "77078-13600";
export const RESTAURANT_WHATSAPP_NUMBER = "917707813600";
export const RESTAURANT_UPI_ID = "9501201215-1@okbizaxis";
export const RESTAURANT_OWNER = "Jaspreet Singh";

export function OrderProvider({ children }: { children: React.ReactNode }) {
  // Standard Tray Order
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Drive-Thru System
  const [isDriveThruOpen, setIsDriveThruOpen] = useState(false);
  const [driveThruOrder, setDriveThruOrder] = useState<DriveThruItem[]>([]);

  // Load carts from session if available
  useEffect(() => {
    try {
      const savedTray = sessionStorage.getItem("ghumans_cart_v3");
      if (savedTray) setOrder(JSON.parse(savedTray));

      const savedDriveThru = sessionStorage.getItem("ghumans_drivethru_v1");
      if (savedDriveThru) setDriveThruOrder(JSON.parse(savedDriveThru));
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

  useEffect(() => {
    try {
      sessionStorage.setItem("ghumans_drivethru_v1", JSON.stringify(driveThruOrder));
    } catch {
      // ignore
    }
  }, [driveThruOrder]);

  // Standard Tray Functions
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

  // Drive-Thru Functions
  const openDriveThru = (initialItem?: MenuItem) => {
    if (initialItem) {
      addToDriveThru(initialItem);
    }
    setIsDriveThruOpen(true);
  };

  const closeDriveThru = () => setIsDriveThruOpen(false);

  const addToDriveThru = (
    item: MenuItem,
    selectedSize?: string,
    customPrice?: number,
    selectedAddons: AddonOption[] = []
  ) => {
    const size = selectedSize || undefined;
    const basePrice = customPrice !== undefined ? customPrice : item.price;
    const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const itemTotal = basePrice + addonsTotal;

    const addonsKey = selectedAddons
      .map((a) => a.name)
      .sort()
      .join("|");
    const cartId = `${item.id}-${size || "std"}-${addonsKey || "none"}`;

    setDriveThruOrder((prev) => {
      const existing = prev.find((entry) => entry.id === cartId);
      if (existing) {
        return prev.map((entry) =>
          entry.id === cartId
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [
        ...prev,
        {
          id: cartId,
          item,
          size,
          basePrice,
          addons: selectedAddons,
          itemTotal,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromDriveThru = (cartId: string) => {
    setDriveThruOrder((prev) => prev.filter((entry) => entry.id !== cartId));
  };

  const updateDriveThruQuantity = (cartId: string, delta: number) => {
    setDriveThruOrder((prev) =>
      prev
        .map((entry) => {
          if (entry.id === cartId) {
            const newQty = entry.quantity + delta;
            return newQty > 0 ? { ...entry, quantity: newQty } : null;
          }
          return entry;
        })
        .filter((entry): entry is DriveThruItem => entry !== null)
    );
  };

  const clearDriveThru = () => setDriveThruOrder([]);

  const driveThruTotalCount = driveThruOrder.reduce((sum, entry) => sum + entry.quantity, 0);
  const driveThruSubtotal = driveThruOrder.reduce(
    (sum, entry) => sum + entry.basePrice * entry.quantity,
    0
  );
  const driveThruAddonsTotal = driveThruOrder.reduce(
    (sum, entry) =>
      sum + entry.addons.reduce((aSum, a) => aSum + a.price, 0) * entry.quantity,
    0
  );
  const driveThruTotalPrice = driveThruSubtotal + driveThruAddonsTotal;

  // Strict 50% calculation rules from prompt:
  // advance = total * 0.50
  // remaining = total - advance
  const driveThruAdvanceAmount = Math.round(driveThruTotalPrice * 0.5);
  const driveThruRemainingAmount = driveThruTotalPrice - driveThruAdvanceAmount;

  // Exact WhatsApp Message Format required by the user prompt:
  const getDriveThruWhatsAppUrl = (details: DriveThruCustomerDetails, orderNo: string) => {
    let msg = "Hello Ghumans Kitchen Express 👋\n\n";
    msg += "I want to place a Drive-Thru order.\n\n";
    msg += `Order No: ${orderNo}\n\n`;
    msg += `Customer Name:\n${details.name}\n\n`;
    msg += `Mobile:\n${details.phone}\n\n`;
    msg += `Pickup Date:\n${details.pickupDate}\n\n`;
    msg += `Pickup Time:\n${details.pickupTime}\n\n`;
    msg += `Vehicle:\n${details.vehicleType}\n\n`;
    msg += `Vehicle Number:\n${details.vehicleNumber}\n\n`;
    if (details.instructions && details.instructions.trim()) {
      msg += `Special Instructions:\n${details.instructions.trim()}\n\n`;
    }
    msg += "ORDER DETAILS:\n\n";

    driveThruOrder.forEach((entry, i) => {
      const addonsStr =
        entry.addons.length > 0
          ? entry.addons.map((a) => `${a.name} (+₹${a.price})`).join(", ")
          : "None";
      msg += `${i + 1}. ${entry.item.name}\n`;
      msg += `Size: ${entry.size || "Standard"}\n`;
      msg += `Add-ons: ${addonsStr}\n`;
      msg += `Qty: ${entry.quantity}\n`;
      msg += `Price: ₹${entry.itemTotal * entry.quantity}\n\n`;
    });

    msg += "--------------------\n\n";
    msg += `Order Total: ₹${driveThruTotalPrice}\n\n`;
    msg += `50% Advance Required: ₹${driveThruAdvanceAmount}\n\n`;
    msg += `Remaining at Pickup: ₹${driveThruRemainingAmount}\n\n`;
    msg += "I have submitted my Drive-Thru order.\n\n";
    msg += "Please confirm my order and send your payment details / UPI QR code to complete the 50% advance.\n\n";
    msg += "Thank you,\nGhumans Kitchen Express";

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

        isDriveThruOpen,
        openDriveThru,
        closeDriveThru,
        driveThruOrder,
        addToDriveThru,
        removeFromDriveThru,
        updateDriveThruQuantity,
        clearDriveThru,
        driveThruTotalCount,
        driveThruSubtotal,
        driveThruAddonsTotal,
        driveThruTotalPrice,
        driveThruAdvanceAmount,
        driveThruRemainingAmount,
        getDriveThruWhatsAppUrl,
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
