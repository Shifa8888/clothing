"use client";

import { ArrowLeft, Truck, Clock, MapPin, Package, AlertCircle } from "lucide-react";

interface ShippingPolicyProps {
  onBack: () => void;
}

const sections = [
  {
    icon: Truck,
    title: "Delivery Options",
    content: [
      { label: "Standard Delivery", detail: "3–5 business days — Free on orders above Rs. 3,000" },
      { label: "Express Delivery", detail: "1–2 business days — Rs. 250 flat charge" },
      { label: "Same-Day Delivery", detail: "Available in Lahore, Karachi & Islamabad — Rs. 400" },
      { label: "Cash on Delivery (COD)", detail: "Available nationwide — Rs. 150 handling fee" },
    ],
  },
  {
    icon: MapPin,
    title: "Delivery Areas",
    content: [
      { label: "Major Cities", detail: "Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan" },
      { label: "Other Cities", detail: "All cities across Pakistan via TCS, Leopards & M&P" },
      { label: "Remote Areas", detail: "May take 5–7 business days. Additional charges may apply." },
    ],
  },
  {
    icon: Clock,
    title: "Processing Time",
    content: [
      { label: "Order Confirmation", detail: "Within 2 hours of placing your order" },
      { label: "Dispatch", detail: "Orders placed before 2 PM are dispatched same day" },
      { label: "Weekend Orders", detail: "Processed on the next business day (Monday)" },
    ],
  },
  {
    icon: Package,
    title: "Packaging",
    content: [
      { label: "Premium Packaging", detail: "All orders are packed in our signature Luxora boxes" },
      { label: "Gift Wrapping", detail: "Available for Rs. 200 — add a note at checkout" },
      { label: "Eco-Friendly", detail: "We use recyclable materials for all packaging" },
    ],
  },
];

export default function ShippingPolicy({ onBack }: ShippingPolicyProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <Truck className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Shipping Policy</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            We deliver across Pakistan with care and speed. Here&apos;s everything you need to know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="glass-dark rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-base font-semibold text-white uppercase tracking-wider">{section.title}</h2>
                </div>
                <div className="space-y-3">
                  {section.content.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white font-medium">{item.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="glass-dark rounded-2xl p-5 border border-amber-500/20 flex gap-4">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-white mb-1">Important Note</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Delivery times may vary during sale seasons, public holidays, or due to courier delays beyond our control.
              For urgent orders, please contact us on WhatsApp at <span className="text-amber-400">+92 300 1234567</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
