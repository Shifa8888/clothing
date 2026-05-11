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
import SizeGuide from "@/components/SizeGuide";
import TrackOrder from "@/components/TrackOrder";
import ShippingPolicy from "@/components/ShippingPolicy";
import ReturnExchange from "@/components/ReturnExchange";
import FAQs from "@/components/FAQs";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";
import Careers from "@/components/Careers";

type Page =
  | "home"
  | "checkout"
  | "size-guide"
  | "track-order"
  | "shipping-policy"
  | "return-exchange"
  | "faqs"
  | "privacy-policy"
  | "terms-of-service"
  | "careers";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const goHome = () => setCurrentPage("home");

  // Pages without cart/footer
  const subPages: Record<string, React.ReactNode> = {
    checkout: <Checkout onBack={goHome} />,
    "size-guide": <SizeGuide onBack={goHome} />,
    "track-order": <TrackOrder onBack={goHome} />,
    "shipping-policy": <ShippingPolicy onBack={goHome} />,
    "return-exchange": <ReturnExchange onBack={goHome} />,
    faqs: <FAQs onBack={goHome} />,
    "privacy-policy": <PrivacyPolicy onBack={goHome} />,
    "terms-of-service": <TermsOfService onBack={goHome} />,
    careers: <Careers onBack={goHome} />,
  };

  if (currentPage !== "home" && subPages[currentPage]) {
    return (
      <>
        <Navbar onCartClick={() => {}} onLogoClick={goHome} />
        {subPages[currentPage]}
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Navbar onCartClick={() => {}} onLogoClick={goHome} />
      <HeroBanner />
      <FeaturedProducts />
      <NewArrivals />
      <AboutUs />
      <CustomerReviews />
      <Footer onNavigate={(page) => setCurrentPage(page as Page)} />
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
