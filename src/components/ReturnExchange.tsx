"use client";

import { ArrowLeft, RefreshCw, CheckCircle, XCircle, AlertCircle, Phone } from "lucide-react";

interface ReturnExchangeProps {
  onBack: () => void;
}

const eligible = [
  "Item received is damaged or defective",
  "Wrong item delivered",
  "Size issue (exchange only — within 7 days)",
  "Item significantly different from product description",
];

const notEligible = [
  "Items worn, washed, or altered",
  "Sale or discounted items",
  "Accessories (scarves, jewelry, bags)",
  "Custom or stitched orders",
  "Items without original tags and packaging",
];

const steps = [
  { num: "01", title: "Contact Us", desc: "WhatsApp or email us within 7 days of delivery with your order ID and photos of the issue." },
  { num: "02", title: "Approval", desc: "Our team reviews your request within 24 hours and sends a return approval confirmation." },
  { num: "03", title: "Ship Back", desc: "Pack the item securely in original packaging and drop it at any TCS or Leopards outlet." },
  { num: "04", title: "Refund / Exchange", desc: "Once received and inspected, your exchange is dispatched or refund is processed within 3–5 days." },
];

export default function ReturnExchange({ onBack }: ReturnExchangeProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <RefreshCw className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Return & Exchange</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Your satisfaction is our priority. We&apos;ve made returns and exchanges as simple as possible.
          </p>
        </div>

        {/* Policy Window */}
        <div className="glass-dark rounded-2xl p-5 border border-amber-500/20 flex gap-4 mb-8">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            Return & exchange requests must be raised within <span className="text-amber-400 font-semibold">7 days</span> of delivery.
            Refunds are processed within <span className="text-amber-400 font-semibold">3–5 business days</span> after item inspection.
          </p>
        </div>

        {/* Eligible / Not Eligible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="glass-dark rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Eligible for Return</h2>
            </div>
            <ul className="space-y-3">
              {eligible.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-dark rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="w-5 h-5 text-red-400" />
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Not Eligible</h2>
            </div>
            <ul className="space-y-3">
              {notEligible.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <h2 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="glass-dark rounded-2xl p-5 border border-white/5 text-center">
              <div className="text-3xl font-bold shine-text mb-3">{step.num}</div>
              <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="glass-dark rounded-2xl p-6 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-white mb-1">Need help with a return?</p>
            <p className="text-xs text-gray-500">Our team is available Mon–Sat, 10 AM – 7 PM</p>
          </div>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-gold text-black text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
