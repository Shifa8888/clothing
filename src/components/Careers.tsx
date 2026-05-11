"use client";

import { useState } from "react";
import { ArrowLeft, Briefcase, MapPin, Clock, ChevronDown, Send } from "lucide-react";

interface CareersProps {
  onBack: () => void;
}

const openings = [
  {
    title: "Fashion Designer",
    department: "Design",
    location: "Lahore",
    type: "Full-time",
    desc: "We're looking for a creative fashion designer with a passion for South Asian aesthetics and contemporary trends. You'll work closely with our product team to develop seasonal collections.",
    requirements: ["3+ years of fashion design experience", "Proficiency in Adobe Illustrator & Photoshop", "Strong understanding of fabrics and garment construction", "Portfolio showcasing relevant work"],
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Lahore / Remote",
    type: "Full-time",
    desc: "Drive Luxora's brand presence across Instagram, TikTok, and Facebook. Create compelling content, manage campaigns, and grow our community of fashion enthusiasts.",
    requirements: ["2+ years of social media management", "Experience with content creation and video editing", "Strong understanding of fashion and lifestyle trends", "Excellent communication skills in Urdu and English"],
  },
  {
    title: "Customer Service Executive",
    department: "Operations",
    location: "Lahore",
    type: "Full-time",
    desc: "Be the voice of Luxora. Handle customer inquiries, resolve issues, and ensure every customer has an exceptional experience with our brand.",
    requirements: ["1+ year of customer service experience", "Excellent communication skills", "Proficiency in WhatsApp Business and email", "Ability to handle high-volume inquiries calmly"],
  },
  {
    title: "E-Commerce Executive",
    department: "Technology",
    location: "Lahore / Remote",
    type: "Full-time",
    desc: "Manage and optimize our online store. Work on product listings, inventory management, and collaborate with the tech team to improve the shopping experience.",
    requirements: ["Experience with e-commerce platforms", "Basic understanding of SEO and digital marketing", "Attention to detail for product descriptions and images", "Analytical mindset with Excel/Sheets proficiency"],
  },
];

const perks = [
  { emoji: "💰", title: "Competitive Salary", desc: "Market-competitive packages with annual reviews" },
  { emoji: "🎁", title: "Employee Discount", desc: "40% off on all Luxora products" },
  { emoji: "📈", title: "Growth Opportunities", desc: "Fast-track career growth in a scaling startup" },
  { emoji: "🏖️", title: "Paid Leaves", desc: "20 annual leaves + public holidays" },
  { emoji: "☕", title: "Flexible Hours", desc: "Work-life balance is a priority at Luxora" },
  { emoji: "🎓", title: "Learning Budget", desc: "Annual budget for courses and skill development" },
];

function JobCard({ job }: { job: typeof openings[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-dark rounded-2xl border border-white/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/2 transition-colors"
      >
        <div>
          <h3 className="text-base font-semibold text-white mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Briefcase className="w-3 h-3 text-amber-400" />{job.department}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3 text-amber-400" />{job.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3 text-amber-400" />{job.type}
            </span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-white/5 pt-5 animate-fadeIn">
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{job.desc}</p>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Requirements</h4>
          <ul className="space-y-2 mb-5">
            {job.requirements.map((req) => (
              <li key={req} className="flex gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:careers@luxora.com?subject=Application: ${job.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-gold text-black text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
          >
            <Send className="w-4 h-4" />
            Apply Now
          </a>
        </div>
      )}
    </div>
  );
}

export default function Careers({ onBack }: CareersProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-4">
            <Briefcase className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold shine-text mb-3">Careers</h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Join the Luxora family. We&apos;re building Pakistan&apos;s most loved premium fashion brand — and we need passionate people.
          </p>
        </div>

        {/* Perks */}
        <h2 className="text-lg font-semibold text-white uppercase tracking-wider mb-5">Why Luxora?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {perks.map((perk) => (
            <div key={perk.title} className="glass-dark rounded-2xl p-4 border border-white/5 text-center">
              <div className="text-2xl mb-2">{perk.emoji}</div>
              <p className="text-sm font-medium text-white mb-1">{perk.title}</p>
              <p className="text-xs text-gray-500">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Openings */}
        <h2 className="text-lg font-semibold text-white uppercase tracking-wider mb-5">Open Positions</h2>
        <div className="space-y-4">
          {openings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>

        <div className="mt-10 glass-dark rounded-2xl p-6 border border-white/5 text-center">
          <p className="text-sm text-gray-400 mb-2">Don&apos;t see a role that fits?</p>
          <p className="text-xs text-gray-500 mb-4">Send us your CV and we&apos;ll keep you in mind for future openings.</p>
          <a
            href="mailto:careers@luxora.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-gold text-black text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
          >
            <Send className="w-4 h-4" />
            careers@luxora.com
          </a>
        </div>
      </div>
    </div>
  );
}
