"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Zap } from "lucide-react";

export default function NewArrivals() {
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <section
      id="new-arrivals"
      className="py-24 bg-[#080808] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-widest uppercase">
              Just Dropped
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            New <span className="shine-text">Arrivals</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Fresh off the runway — discover the latest additions to our
            collection before anyone else.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
