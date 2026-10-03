import React, { useState } from "react";
import { QrCode, Copy, Check, ShieldCheck, Smartphone, CreditCard } from "lucide-react";
import { RESTAURANT_UPI_ID, RESTAURANT_OWNER, RESTAURANT_PHONE } from "../food-truck/OrderContext";

export function PaymentUPISection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(RESTAURANT_UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payment" className="py-16 sm:py-20 bg-warm-canvas text-[#1C1917] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cream-card rounded-3xl p-6 sm:p-10 border-2 border-[#EFE5D2] shadow-xl relative overflow-hidden bg-white">
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#F59E0B] via-[#7F1D1D] to-[#F59E0B]" />

          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-xs font-black uppercase tracking-wider mb-3">
              <ShieldCheck className="size-4 text-[#16A34A]" />
              INSTANT DIGITAL UPI PAYMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1C1917] tracking-tight">
              PAY ONLINE
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#57534E]">
              Fast and seamless contactless UPI payment for your takeout, pickup or party orders.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: UPI Details Box */}
            <div className="md:col-span-7 bg-[#FAF4E8] rounded-2xl p-6 border border-[#EFE5D2]">
              <span className="text-xs font-black uppercase text-[#7F1D1D] tracking-wider block">
                Official Business UPI ID
              </span>

              {/* UPI ID Display & Copy Button */}
              <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border-2 border-[#F59E0B]">
                <code className="font-mono text-sm sm:text-base font-black text-[#1C1917] select-all break-all">
                  {RESTAURANT_UPI_ID}
                </code>

                <button
                  onClick={handleCopy}
                  className={`px-4 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-sm ${
                    copied
                      ? "bg-[#16A34A] text-white"
                      : "bg-[#F59E0B] hover:bg-[#FBBF24] text-[#1C1917]"
                  }`}
                  aria-label="Copy UPI ID"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      COPY UPI ID
                    </>
                  )}
                </button>
              </div>

              {/* Verified details */}
              <div className="mt-4 space-y-1.5 text-xs text-[#57534E]">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Account Name:</span>
                  <span className="font-bold text-[#1C1917]">{RESTAURANT_OWNER} / Ghumans Kitchen Express</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Shop Contact:</span>
                  <span className="font-bold text-[#1C1917]">{RESTAURANT_PHONE}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Supported Apps:</span>
                  <span className="font-bold text-[#1C1917]">Google Pay, PhonePe, Paytm, BHIM, CRED</span>
                </div>
              </div>
            </div>

            {/* Right: Payment Instructions */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-[#7F1D1D] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1C1917] uppercase tracking-wide">
                    Copy UPI ID
                  </h4>
                  <p className="text-[11px] text-[#57534E]">
                    Click the button to copy <span className="font-bold">{RESTAURANT_UPI_ID}</span> to your clipboard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-[#7F1D1D] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1C1917] uppercase tracking-wide">
                    Pay in Any UPI App
                  </h4>
                  <p className="text-[11px] text-[#57534E]">
                    Open GPay, PhonePe or Paytm, select "Pay UPI ID" and enter the exact bill amount.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-[#7F1D1D] text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1C1917] uppercase tracking-wide">
                    Share Screenshot on WhatsApp
                  </h4>
                  <p className="text-[11px] text-[#57534E]">
                    Send the payment screenshot on WhatsApp along with your order for instant confirmation!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
