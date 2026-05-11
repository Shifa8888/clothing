"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/products";
import { useState } from "react";

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
            <Quote className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-widest uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What Our <span className="shine-text">Customers</span> Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Real stories from real customers who have experienced the Luxora
            difference.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentReviews.map((review, index) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-amber-500/20 transition-all duration-500 shine-card animate-fadeInUp opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-amber-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-black font-bold text-xs">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">
                      {review.date}
                    </span>
                    {review.verified && (
                      <span className="text-[10px] text-green-400 font-medium">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.max(0, prev - 1))
              }
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-amber-400 w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={currentIndex === totalPages - 1}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
