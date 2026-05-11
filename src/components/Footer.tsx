"use client";

import {
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 relative">
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-lg shadow-amber-500/20 hover:scale-110 transition-transform"
        >
          <ArrowUp className="w-5 h-5 text-black" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-widest">
                LUXORA
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Premium fashion house delivering exceptional quality and timeless
              style since 2018. Elevate your wardrobe with our curated
              collections.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Collections",
                "New Arrivals",
                "About Us",
                "Size Guide",
                "Track Order",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                "Shipping Policy",
                "Return & Exchange",
                "FAQs",
                "Privacy Policy",
                "Terms of Service",
                "Careers",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500">
                  123 Fashion Avenue, Gulberg III, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-500">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-sm text-gray-500">
                  hello@luxora.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-xs"
                />
                <button className="px-4 py-2 rounded-lg gradient-gold text-black text-xs font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Luxora. All rights reserved. Designed with passion for
            fashion.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect rx='3' width='40' height='25' fill='%231a1f71'/%3E%3Ctext x='20' y='16' text-anchor='middle' fill='white' font-size='8' font-weight='bold'%3EVISA%3C/text%3E%3C/svg%3E"
              alt="Visa"
              className="h-6 opacity-50"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect rx='3' width='40' height='25' fill='%23252525'/%3E%3Ccircle cx='16' cy='12.5' r='7' fill='%23eb001b' opacity='0.8'/%3E%3Ccircle cx='24' cy='12.5' r='7' fill='%23f79e1b' opacity='0.8'/%3E%3C/svg%3E"
              alt="Mastercard"
              className="h-6 opacity-50"
            />
            <span className="text-[10px] text-gray-600 px-2 py-1 rounded bg-white/5 border border-white/10">
              JazzCash
            </span>
            <span className="text-[10px] text-gray-600 px-2 py-1 rounded bg-white/5 border border-white/10">
              COD
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
