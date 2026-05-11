"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
          alt="Luxury fashion"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600/3 rounded-full blur-3xl animate-float delay-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8 animate-fadeInUp">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-widest uppercase">
              New Season Collection 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fadeInUp delay-100">
            Elevate Your
            <br />
            <span className="shine-text">Style Statement</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-lg animate-fadeInUp delay-200">
            Discover our curated collection of premium fashion pieces designed
            for the modern trendsetter. Where luxury meets everyday elegance.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fadeInUp delay-300">
            <a
              href="#featured-products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-gold text-black font-semibold text-sm tracking-wider uppercase btn-premium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm tracking-wider uppercase hover:bg-white/5 hover:border-amber-500/50 transition-all duration-300"
            >
              New Arrivals
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-12 animate-fadeInUp delay-400">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">
                Premium Styles
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">
                Happy Customers
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">
                Star Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-[10px] text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
