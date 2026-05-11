"use client";

import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    items: [
      "Personal details: Name, email, phone number, shipping address",
      "Payment information: Processed securely via third-party gateways",
      "Order history and preferences",
      "Device and browser information for analytics",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    items: [
      "Process and fulfill your orders",
      "Send order confirmations, tracking updates, and delivery notifications",
      "Improve our website, products, and customer service",
      "Send promotional offers (you can opt out anytime)",
      "Prevent fraud and ensure secure transactions",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    items: [
      "We use SSL encryption to protect your data during transmission",
      "Payment details are never stored on our servers",
      "Access to personal information is restricted to authorized personnel only",
      "Regular security audits and updates to protect against breaches",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    items: [
      "Access, update, or delete your personal information anytime",
      "Opt out of marketing emails via the unsubscribe link",
      "Request a copy of your data by contacting us",
      "Withdraw consent for data processing (may affect service availability)",
    ],
  },
];

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <Shield className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Your privacy matters to us. Here&apos;s how we collect, use, and protect your information.
          </p>
          <p className="text-xs text-gray-600 mt-2">Last updated: May 11, 2026</p>
        </div>

        <div className="glass-dark rounded-2xl p-5 border border-amber-500/20 flex gap-4 mb-10">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            By using Luxora&apos;s website and services, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <div className="space-y-6">
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
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Sections */}
        <div className="glass-dark rounded-2xl p-6 border border-white/5 mt-6">
          <h2 className="text-base font-semibold text-white uppercase tracking-wider mb-4">Cookies & Tracking</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can disable cookies in your browser settings, but this may affect website functionality.
          </p>
        </div>

        <div className="glass-dark rounded-2xl p-6 border border-white/5 mt-6">
          <h2 className="text-base font-semibold text-white uppercase tracking-wider mb-4">Third-Party Services</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            We may share your information with trusted third-party service providers (payment gateways, courier services, analytics tools) to fulfill orders and improve our services. These partners are bound by confidentiality agreements.
          </p>
        </div>

        <div className="glass-dark rounded-2xl p-6 border border-white/5 mt-6">
          <h2 className="text-base font-semibold text-white uppercase tracking-wider mb-4">Changes to This Policy</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">Questions about our privacy practices?</p>
          <a href="mailto:hello@luxora.com" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
            hello@luxora.com
          </a>
        </div>
      </div>
    </div>
  );
}
