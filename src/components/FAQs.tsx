"use client";

import { useState } from "react";
import { ArrowLeft, HelpCircle, ChevronDown } from "lucide-react";

interface FAQsProps {
  onBack: () => void;
}

const categories = [
  {
    label: "Orders & Payment",
    faqs: [
      { q: "How do I place an order?", a: "Browse our collections, select your size and quantity, add to cart, and proceed to checkout. You can pay via JazzCash, bank transfer, or Cash on Delivery." },
      { q: "What payment methods do you accept?", a: "We accept JazzCash, EasyPaisa, bank transfer (HBL, Meezan, UBL), Visa/Mastercard, and Cash on Delivery (COD) nationwide." },
      { q: "Can I modify or cancel my order?", a: "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters processing and cannot be changed. Contact us immediately on WhatsApp." },
      { q: "Is COD available everywhere?", a: "Yes, Cash on Delivery is available across all cities in Pakistan. A handling fee of Rs. 150 applies." },
    ],
  },
  {
    label: "Shipping & Delivery",
    faqs: [
      { q: "How long does delivery take?", a: "Standard delivery takes 3–5 business days. Express delivery (1–2 days) is available for an additional Rs. 250. Same-day delivery is available in Lahore, Karachi, and Islamabad." },
      { q: "How do I track my order?", a: "Once your order is dispatched, you'll receive a tracking number via SMS and email. You can also use our Track Order page on the website." },
      { q: "Do you offer free shipping?", a: "Yes! Orders above Rs. 3,000 qualify for free standard shipping across Pakistan." },
    ],
  },
  {
    label: "Returns & Exchanges",
    faqs: [
      { q: "What is your return policy?", a: "We accept returns within 7 days of delivery for damaged, defective, or incorrectly delivered items. Items must be unworn, unwashed, and in original packaging with tags." },
      { q: "How do I exchange a size?", a: "Contact us within 7 days of delivery via WhatsApp with your order ID and the size you need. Subject to availability, we'll arrange an exchange." },
      { q: "When will I receive my refund?", a: "Refunds are processed within 3–5 business days after we receive and inspect the returned item." },
    ],
  },
  {
    label: "Products & Sizing",
    faqs: [
      { q: "How do I find my size?", a: "Visit our Size Guide page for detailed measurements. If you're between sizes, we recommend sizing up for a more comfortable fit." },
      { q: "Are the colors accurate in photos?", a: "We do our best to represent colors accurately. However, slight variations may occur due to screen settings and lighting. Contact us for fabric swatches on select items." },
      { q: "Do you offer custom stitching?", a: "Yes! We offer custom stitching on select unstitched fabrics. Please allow 7–10 additional business days for custom orders." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{q}</span>
        <ChevronDown className={`w-4 h-4 text-amber-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-4 animate-fadeIn">
          <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs({ onBack }: FAQsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <HelpCircle className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">FAQs</h1>
          <p className="text-gray-400 text-sm">Everything you need to know about shopping at Luxora</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === i
                  ? "gradient-gold text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-amber-500/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/5">
          {categories[activeCategory].faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-3">Still have questions?</p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-black text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
