"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function TeethWhiteningPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Teeth Whitening
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Professional Teeth Whitening in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Safe and effective professional teeth whitening treatments. Achieve a brighter, more youthful smile in just one visit.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS TEETH WHITENING --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is Professional Teeth Whitening?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Professional teeth whitening is a cosmetic dental procedure that removes stains and discoloration from teeth.</p>
                <p>Using professional-grade bleaching agents, we can achieve results that are much more effective than over-the-counter products.</p>
                <p>The procedure is safe, fast, and can brighten your teeth by several shades in a single session.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Whitening Options */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our Whitening Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "In-Office Whitening",
                    desc: "Professional whitening performed at the clinic for immediate results"
                  },
                  {
                    title: "Take-Home Kits",
                    desc: "Custom trays and professional-grade gel for whitening at home"
                  },
                  {
                    title: "Combination Treatment",
                    desc: "In-office treatment followed by take-home maintenance"
                  },
                  {
                    title: "Touch-up Sessions",
                    desc: "Regular maintenance treatments to maintain whiteness"
                  }
                ].map((option, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{option.title}</h4>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Causes of Staining */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Common Causes of Tooth Staining</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Coffee and tea consumption",
                  "Red wine and dark beverages",
                  "Smoking and tobacco use",
                  "Poor oral hygiene",
                  "Aging and natural discoloration",
                  "Certain medications",
                  "Trauma or injury to teeth",
                  "Excessive fluoride exposure"
                ].map((cause, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{cause}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefits & Maintenance */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Benefits & Maintenance</h3>
              <div className="space-y-4">
                {[
                  { title: "Immediate Results", desc: "See dramatic whitening in just one appointment" },
                  { title: "Safe & Effective", desc: "Professional-grade treatment with minimal sensitivity" },
                  { title: "Long-lasting", desc: "Results can last 6-12 months with proper care" },
                  { title: "Boosts Confidence", desc: "A brighter smile enhances your appearance and confidence" },
                  { title: "Maintenance Tips", desc: "Avoid staining foods/drinks and maintain good oral hygiene" },
                  { title: "Touch-ups", desc: "Regular touch-up sessions maintain your bright smile" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 px-6 md:px-12 bg-[#1d5343]">
        <ScrollAnimation>
          <div className="max-w-[800px] mx-auto text-center text-white">
            <h2 className="text-3xl font-serif font-medium mb-4">Get a Brighter Smile Today</h2>
            <p className="text-white/80 mb-8">Schedule your professional teeth whitening appointment and achieve a radiant smile.</p>
            <div className="flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
              <a href="tel:+916206700442" className="w-full sm:w-auto">
                <Button className="h-12 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                  <Phone className="w-4 h-4 fill-current" /> Call Now
                </Button>
              </a>
              <Link href="/book" className="w-full sm:w-auto">
                <Button variant="outline" className="h-12 w-full rounded-full border border-white/30 text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-8">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
