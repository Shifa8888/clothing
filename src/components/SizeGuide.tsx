"use client";

import { ArrowLeft, Ruler } from "lucide-react";

interface SizeGuideProps {
  onBack: () => void;
}

const sizeData = {
  women: [
    { size: "XS", chest: "32\"", waist: "24\"", hips: "34\"", pk: "6-8" },
    { size: "S",  chest: "34\"", waist: "26\"", hips: "36\"", pk: "8-10" },
    { size: "M",  chest: "36\"", waist: "28\"", hips: "38\"", pk: "10-12" },
    { size: "L",  chest: "38\"", waist: "30\"", hips: "40\"", pk: "12-14" },
    { size: "XL", chest: "40\"", waist: "32\"", hips: "42\"", pk: "14-16" },
    { size: "XXL",chest: "42\"", waist: "34\"", hips: "44\"", pk: "16-18" },
  ],
  men: [
    { size: "S",  chest: "36\"", waist: "30\"", shoulder: "17\"", pk: "38" },
    { size: "M",  chest: "38\"", waist: "32\"", shoulder: "18\"", pk: "40" },
    { size: "L",  chest: "40\"", waist: "34\"", shoulder: "19\"", pk: "42" },
    { size: "XL", chest: "42\"", waist: "36\"", shoulder: "20\"", pk: "44" },
    { size: "XXL",chest: "44\"", waist: "38\"", shoulder: "21\"", pk: "46" },
    { size: "3XL",chest: "46\"", waist: "40\"", shoulder: "22\"", pk: "48" },
  ],
};

const tips = [
  { title: "Chest / Bust", desc: "Measure around the fullest part of your chest, keeping the tape parallel to the ground." },
  { title: "Waist", desc: "Measure around your natural waistline, the narrowest part of your torso." },
  { title: "Hips", desc: "Measure around the fullest part of your hips, about 8 inches below your waist." },
  { title: "Shoulder", desc: "Measure from the edge of one shoulder to the edge of the other across your back." },
];

export default function SizeGuide({ onBack }: SizeGuideProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <Ruler className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Size Guide</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Find your perfect fit with our comprehensive size chart. When in doubt, size up for a more relaxed fit.
          </p>
        </div>

        {/* How to Measure */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 mb-10 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">How to Measure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-400">{tip.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Women's Table */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 mb-8 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Women&apos;s Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Size", "Chest", "Waist", "Hips", "PK Size"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-amber-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.women.map((row, i) => (
                  <tr key={row.size} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""} hover:bg-amber-500/5 transition-colors`}>
                    <td className="py-3 px-4 font-semibold text-white">{row.size}</td>
                    <td className="py-3 px-4 text-gray-400">{row.chest}</td>
                    <td className="py-3 px-4 text-gray-400">{row.waist}</td>
                    <td className="py-3 px-4 text-gray-400">{row.hips}</td>
                    <td className="py-3 px-4 text-gray-400">{row.pk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Men's Table */}
        <div className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/5">
          <h2 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Men&apos;s Sizes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Size", "Chest", "Waist", "Shoulder", "PK Size"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-semibold text-amber-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.men.map((row, i) => (
                  <tr key={row.size} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""} hover:bg-amber-500/5 transition-colors`}>
                    <td className="py-3 px-4 font-semibold text-white">{row.size}</td>
                    <td className="py-3 px-4 text-gray-400">{row.chest}</td>
                    <td className="py-3 px-4 text-gray-400">{row.waist}</td>
                    <td className="py-3 px-4 text-gray-400">{row.shoulder}</td>
                    <td className="py-3 px-4 text-gray-400">{row.pk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-600 mt-8">
          All measurements are approximate. For assistance, contact us at{" "}
          <span className="text-amber-400">hello@luxora.com</span>
        </p>
      </div>
    </div>
  );
}
