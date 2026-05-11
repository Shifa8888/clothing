"use client";

import { useState } from "react";
import { Star, ShoppingBag, Heart, Eye } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div
      className="group animate-fadeInUp opacity-0"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-hover shine-card rounded-2xl overflow-hidden bg-[#111] border border-white/5">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider">
                New
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-all"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                liked ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>

          {/* Quick Actions */}
          <div
            className={`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                addedToCart
                  ? "bg-green-500 text-white"
                  : "gradient-gold text-black hover:shadow-lg hover:shadow-amber-500/25"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {addedToCart ? "Added!" : "Add to Cart"}
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all text-white">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="text-[10px] text-amber-400 uppercase tracking-widest font-medium mb-1">
            {product.category}
          </div>
          <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-600"
                }`}
              />
            ))}
            <span className="text-[10px] text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Sizes */}
          <div className="flex gap-1.5 mb-3">
            {product.sizes.slice(0, 4).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                  selectedSize === size
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
