"use client";

import { useState, useEffect } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  User,
  Heart,
  ChevronDown,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  onCartClick?: () => void;
  onLogoClick: () => void;
}

export default function Navbar({ onCartClick, onLogoClick }: NavbarProps) {
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = ["Men", "Women", "Kids", "Accessories"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Collections", "New Arrivals", "About"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-dark shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={onLogoClick}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-widest">
                LUXORA
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="relative">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors duration-300 tracking-wider uppercase font-medium flex items-center gap-1"
                >
                  Categories <ChevronDown className="w-4 h-4" />
                </button>
                {categoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg py-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setCategoriesOpen(false);
                          console.log(`Selected category: ${category}`);
                        }}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors duration-300 tracking-wider uppercase font-medium"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex p-2 text-gray-300 hover:text-amber-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2 text-gray-300 hover:text-amber-400 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="hidden sm:flex p-2 text-gray-300 hover:text-amber-400 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(true);
                  onCartClick?.();
                }}
                className="relative p-2 text-gray-300 hover:text-amber-400 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold text-black text-[10px] font-bold flex items-center justify-center animate-scaleIn">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-amber-400 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 w-72 h-full bg-[#111] shadow-2xl animate-slideInRight p-6 pt-20">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all text-sm tracking-wider uppercase font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 text-gray-400">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-400">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Wishlist</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-gray-400">
                <User className="w-4 h-4" />
                <span className="text-sm">Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
