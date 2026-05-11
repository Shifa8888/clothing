"use client";

import { useState } from "react";
import { ArrowLeft, Package, Search, CheckCircle, Truck, Clock, MapPin } from "lucide-react";

interface TrackOrderProps {
  onBack: () => void;
}

const mockOrder = {
  id: "LUX-2024-8842",
  status: "In Transit",
  estimatedDelivery: "May 14, 2026",
  items: ["Black Embroidered Kurta (M)", "Gold Dupatta"],
  steps: [
    { label: "Order Placed", date: "May 10, 2026", done: true, icon: CheckCircle },
    { label: "Processing", date: "May 11, 2026", done: true, icon: Package },
    { label: "Shipped", date: "May 12, 2026", done: true, icon: Truck },
    { label: "Out for Delivery", date: "May 14, 2026", done: false, icon: MapPin },
    { label: "Delivered", date: "—", done: false, icon: CheckCircle },
  ],
};

export default function TrackOrder({ onBack }: TrackOrderProps) {
  const [orderId, setOrderId] = useState("");
  const [tracked, setTracked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTracked(true);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <Package className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Track Order</h1>
          <p className="text-gray-400 text-sm">Enter your order ID to get real-time updates</p>
        </div>

        {/* Search Form */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/5 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. LUX-2024-8842"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl gradient-gold text-black font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-70"
            >
              {loading ? (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              ) : (
                <Search className="w-4 h-4" />
              )}
              Track
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-3">
            Your order ID can be found in your confirmation email.
          </p>
        </div>

        {/* Result */}
        {tracked && (
          <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/5 animate-fadeInUp">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Order ID</p>
                <p className="text-white font-semibold">{mockOrder.id}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
                <Truck className="w-3 h-3" />
                {mockOrder.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-amber-400" />
              Estimated Delivery: <span className="text-white font-medium">{mockOrder.estimatedDelivery}</span>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {mockOrder.steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === mockOrder.steps.length - 1;
                return (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${step.done ? "gradient-gold" : "bg-white/5 border border-white/10"}`}>
                        <Icon className={`w-4 h-4 ${step.done ? "text-black" : "text-gray-600"}`} />
                      </div>
                      {!isLast && <div className={`w-0.5 h-8 ${step.done ? "bg-amber-500/40" : "bg-white/5"}`} />}
                    </div>
                    <div className="pb-6">
                      <p className={`text-sm font-medium ${step.done ? "text-white" : "text-gray-600"}`}>{step.label}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{step.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Items */}
            <div className="mt-4 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Items in this order</p>
              {mockOrder.items.map((item) => (
                <div key={item} className="flex items-center gap-2 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
