"use client";

import { Award, Leaf, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Every piece is crafted from the finest materials with meticulous attention to detail and superior workmanship.",
  },
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description:
      "We are committed to ethical sourcing and sustainable practices that respect our planet and its resources.",
  },
  {
    icon: Globe,
    title: "Global Design",
    description:
      "Our designs draw inspiration from fashion capitals worldwide, bringing international style to your wardrobe.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built by fashion lovers, for fashion lovers. Join a community of over 50,000 style-conscious individuals.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/3 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-6">
              <span className="text-xs font-medium text-amber-400 tracking-widest uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Crafting <span className="shine-text">Elegance</span> Since 2018
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Luxora was born from a simple vision: to create clothing that
              empowers individuals to express their unique style with confidence.
              What started as a small boutique has evolved into a globally
              recognized fashion house, known for our unwavering commitment to
              quality and design excellence.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Every garment in our collection tells a story of craftsmanship,
              from the careful selection of premium fabrics to the final stitch.
              We believe that great fashion should be accessible, sustainable,
              and above all, make you feel extraordinary.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold shine-text">8+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold shine-text">25+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  Countries Served
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold shine-text">100%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image & Values */}
          <div>
            <div className="relative mb-10">
              <div className="rounded-2xl overflow-hidden shine-card">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop"
                  alt="Luxora craftsmanship"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-gold flex items-center justify-center animate-pulse-glow">
                <span className="text-black font-bold text-sm text-center leading-tight">
                  Est.
                  <br />
                  2018
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/20 transition-all duration-300 group animate-fadeInUp opacity-0"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <value.icon className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
