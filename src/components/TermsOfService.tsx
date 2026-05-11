"use client";

import { ArrowLeft, FileText, AlertCircle } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Luxora website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
  },
  {
    title: "2. Use of Website",
    content: "You agree to use this website only for lawful purposes. You must not use the site in any way that violates applicable local, national, or international laws or regulations. Unauthorized use of this website may give rise to a claim for damages.",
  },
  {
    title: "3. Product Information",
    content: "We strive to display product colors, sizes, and descriptions as accurately as possible. However, we cannot guarantee that your device's display accurately reflects the actual product. Prices are subject to change without notice.",
  },
  {
    title: "4. Orders & Payments",
    content: "All orders are subject to availability and confirmation. We reserve the right to refuse or cancel any order at our discretion. Payment must be completed before order processing. For COD orders, payment is due upon delivery.",
  },
  {
    title: "5. Intellectual Property",
    content: "All content on this website — including text, graphics, logos, images, and software — is the property of Luxora and is protected by Pakistani and international copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.",
  },
  {
    title: "6. Limitation of Liability",
    content: "Luxora shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the specific order in question.",
  },
  {
    title: "7. Privacy",
    content: "Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand our practices.",
  },
  {
    title: "8. Governing Law",
    content: "These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Lahore, Pakistan.",
  },
  {
    title: "9. Changes to Terms",
    content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes acceptance of the new terms.",
  },
  {
    title: "10. Contact",
    content: "For any questions regarding these Terms of Service, please contact us at hello@luxora.com or call +92 300 1234567.",
  },
];

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <FileText className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Terms of Service</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-xs text-gray-600 mt-2">Last updated: May 11, 2026</p>
        </div>

        <div className="glass-dark rounded-2xl p-5 border border-amber-500/20 flex gap-4 mb-8">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            These terms constitute a legally binding agreement between you and Luxora. By using our services, you agree to these terms.
          </p>
        </div>

        <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/5 space-y-8">
          {terms.map((term) => (
            <div key={term.title} className="border-b border-white/5 last:border-0 pb-6 last:pb-0">
              <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">{term.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            © 2026 Luxora. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
