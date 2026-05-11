"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles } from "lucide-react";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);

  return (
    <section
      id="featured-products"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-widest uppercase">
              Handpicked for You
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="shine-text">Collection</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Our most coveted pieces, curated for those who appreciate
            exceptional craftsmanship and timeless design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
