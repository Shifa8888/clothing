"use client";

import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import LoginPage from "@/components/LoginPage";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import AboutUs from "@/components/AboutUs";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import WhatsAppButton from "@/components/WhatsAppButton";

type Page = "home" | "checkout";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  if (currentPage === "checkout") {
    return (
      <>
        <Navbar
          onCartClick={() => {}}
          onLogoClick={() => setCurrentPage("home")}
        />
        <Checkout onBack={() => setCurrentPage("home")} />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Navbar
        onCartClick={() => {}}
        onLogoClick={() => setCurrentPage("home")}
      />
      <HeroBanner />
      <FeaturedProducts />
      <NewArrivals />
      <AboutUs />
      <CustomerReviews />
      <Footer />
      <Cart onCheckout={() => setCurrentPage("checkout")} />
      <WhatsAppButton />
    </>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
