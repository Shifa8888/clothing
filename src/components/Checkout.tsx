"use client";

import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Banknote,
  Smartphone,
  CheckCircle2,
  Lock,
  Truck,
  MapPin,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CheckoutProps {
  onBack: () => void;
}

type PaymentMethod = "card" | "jazzcash" | "cod";
type Step = "shipping" | "payment" | "confirmation";

export default function Checkout({ onBack }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shipping, setShipping] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const [jazzCashInfo, setJazzCashInfo] = useState({
    mobileNumber: "",
  });

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      setStep("confirmation");
      clearCart();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-scaleIn">
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">
            Order Confirmed!
          </h1>
          <p className="text-gray-400 mb-2">
            Thank you for shopping with Luxora.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Your order #{Math.floor(Math.random() * 900000 + 100000)} has been
            placed successfully. You will receive a confirmation email shortly.
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Truck className="w-5 h-5 text-amber-400" />
              <span>Estimated delivery: 3-5 business days</span>
            </div>
          </div>
          <button
            onClick={onBack}
            className="px-8 py-3.5 rounded-xl gradient-gold text-black font-semibold text-sm tracking-wider uppercase btn-premium hover:shadow-lg hover:shadow-amber-500/25 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Shopping</span>
        </button>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {["Shipping", "Payment", "Confirmation"].map((label, i) => {
            const stepIndex = ["shipping", "payment", "confirmation"].indexOf(step);
            const isActive = i <= stepIndex;
            return (
              <div key={label} className="flex items-center gap-4">
                {i > 0 && (
                  <div
                    className={`w-12 sm:w-20 h-px ${
                      isActive ? "bg-amber-400" : "bg-white/10"
                    }`}
                  />
                )}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? "gradient-gold text-black"
                        : "bg-white/5 text-gray-500 border border-white/10"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-sm font-medium hidden sm:block ${
                      isActive ? "text-amber-400" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "shipping" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5 animate-fadeIn">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          value={shipping.fullName}
                          onChange={(e) =>
                            setShipping({ ...shipping, fullName: e.target.value })
                          }
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          value={shipping.email}
                          onChange={(e) =>
                            setShipping({ ...shipping, email: e.target.value })
                          }
                          placeholder="john@email.com"
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        value={shipping.phone}
                        onChange={(e) =>
                          setShipping({ ...shipping, phone: e.target.value })
                        }
                        placeholder="+92 300 1234567"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                      Street Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={shipping.address}
                        onChange={(e) =>
                          setShipping({ ...shipping, address: e.target.value })
                        }
                        placeholder="123 Main Street, Apt 4B"
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        City
                      </label>
                      <input
                        type="text"
                        value={shipping.city}
                        onChange={(e) =>
                          setShipping({ ...shipping, city: e.target.value })
                        }
                        placeholder="Lahore"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={shipping.postalCode}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder="54000"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStep("payment")}
                  className="w-full mt-8 py-4 rounded-xl gradient-gold text-black font-semibold text-sm tracking-wider uppercase btn-premium hover:shadow-lg hover:shadow-amber-500/25 transition-all"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === "payment" && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5 animate-fadeIn">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-400" />
                  Payment Method
                </h2>

                {/* Payment Options */}
                <div className="space-y-3 mb-8">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      paymentMethod === "card"
                        ? "border-amber-500/50 bg-amber-500/5"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === "card"
                          ? "gradient-gold"
                          : "bg-white/10"
                      }`}
                    >
                      <CreditCard
                        className={`w-5 h-5 ${
                          paymentMethod === "card"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm font-semibold text-white">
                        Debit / Credit Card
                      </div>
                      <div className="text-xs text-gray-500">
                        Visa, Mastercard, AMEX accepted
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "card"
                          ? "border-amber-400"
                          : "border-white/20"
                      }`}
                    >
                      {paymentMethod === "card" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("jazzcash")}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      paymentMethod === "jazzcash"
                        ? "border-amber-500/50 bg-amber-500/5"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === "jazzcash"
                          ? "gradient-gold"
                          : "bg-white/10"
                      }`}
                    >
                      <Smartphone
                        className={`w-5 h-5 ${
                          paymentMethod === "jazzcash"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm font-semibold text-white">
                        JazzCash
                      </div>
                      <div className="text-xs text-gray-500">
                        Pay securely with your JazzCash mobile wallet
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "jazzcash"
                          ? "border-amber-400"
                          : "border-white/20"
                      }`}
                    >
                      {paymentMethod === "jazzcash" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("cod")}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      paymentMethod === "cod"
                        ? "border-amber-500/50 bg-amber-500/5"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "gradient-gold"
                          : "bg-white/10"
                      }`}
                    >
                      <Banknote
                        className={`w-5 h-5 ${
                          paymentMethod === "cod"
                            ? "text-black"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="text-left flex-1">
                      <div className="text-sm font-semibold text-white">
                        Cash on Delivery
                      </div>
                      <div className="text-xs text-gray-500">
                        Pay when you receive your order
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "border-amber-400"
                          : "border-white/20"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 p-5 rounded-xl bg-white/5 border border-white/10 mb-8 animate-fadeIn">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardInfo.cardNumber}
                        onChange={(e) =>
                          setCardInfo({
                            ...cardInfo,
                            cardNumber: e.target.value,
                          })
                        }
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardInfo.expiry}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, expiry: e.target.value })
                          }
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardInfo.cvv}
                          onChange={(e) =>
                            setCardInfo({ ...cardInfo, cvv: e.target.value })
                          }
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        value={cardInfo.nameOnCard}
                        onChange={(e) =>
                          setCardInfo({
                            ...cardInfo,
                            nameOnCard: e.target.value,
                          })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                  </div>
                )}

                {/* JazzCash Details */}
                {paymentMethod === "jazzcash" && (
                  <div className="space-y-4 p-5 rounded-xl bg-white/5 border border-white/10 mb-8 animate-fadeIn">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">
                        JazzCash Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={jazzCashInfo.mobileNumber}
                        onChange={(e) =>
                          setJazzCashInfo({
                            ...jazzCashInfo,
                            mobileNumber: e.target.value,
                          })
                        }
                        placeholder="0300 1234567"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      You will receive a payment request on your JazzCash app.
                      Please approve it to complete your order.
                    </p>
                  </div>
                )}

                {/* COD Info */}
                {paymentMethod === "cod" && (
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 mb-8 animate-fadeIn">
                    <p className="text-sm text-gray-400">
                      Your order will be delivered to your address. Please have
                      the exact amount ready at the time of delivery. Our
                      delivery partner will collect the payment upon arrival.
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("shipping")}
                    className="px-6 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="flex-1 py-4 rounded-xl gradient-gold text-black font-semibold text-sm tracking-wider uppercase btn-premium hover:shadow-lg hover:shadow-amber-500/25 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Place Order — ${totalPrice.toFixed(2)}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl bg-[#111] border border-white/5 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-6">
                Order Summary
              </h3>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto scrollbar-hide">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-white truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">
                        Size: {item.size} × {item.quantity}
                      </p>
                      <p className="text-xs font-semibold text-amber-400 mt-0.5">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white">
                    ${(totalPrice * 0.05).toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-lg font-bold shine-text">
                    ${(totalPrice * 1.05).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                <Lock className="w-3 h-3" />
                <span>Secure checkout — SSL encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
