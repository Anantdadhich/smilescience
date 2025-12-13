"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function TeethCleaningPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Professional Teeth Cleaning
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Professional Teeth Cleaning in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Professional dental cleaning and polishing to remove plaque and tartar. Keep your teeth bright, healthy, and cavity-free.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS PROFESSIONAL CLEANING --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is Professional Teeth Cleaning?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Professional teeth cleaning is a preventive dental procedure performed by a dental hygienist or dentist.</p>
                <p>It removes plaque and tartar buildup that cannot be removed by regular brushing and flossing.</p>
                <p>Regular professional cleanings help prevent cavities, gum disease, and other dental problems.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Cleaning Process */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">The Cleaning Process</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Examination",
                    desc: "Visual examination of teeth and gums to identify any issues"
                  },
                  {
                    step: "2",
                    title: "Scaling",
                    desc: "Removal of plaque and tartar from tooth surfaces and below gum line"
                  },
                  {
                    step: "3",
                    title: "Root Planing",
                    desc: "Smoothing of tooth roots to prevent bacteria accumulation"
                  },
                  {
                    step: "4",
                    title: "Polishing",
                    desc: "Professional polishing to remove surface stains and brighten teeth"
                  },
                  {
                    step: "5",
                    title: "Fluoride Treatment",
                    desc: "Application of fluoride to strengthen enamel and prevent cavities"
                  }
                ].map((process, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-xl border border-[#1d5343]/5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#1d5343] text-white flex items-center justify-center font-bold shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] mb-1">{process.title}</h4>
                      <p className="text-gray-600 text-sm">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefits */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Benefits of Professional Cleaning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Removes plaque and tartar buildup",
                  "Prevents cavities and tooth decay",
                  "Reduces risk of gum disease",
                  "Brightens and whitens teeth",
                  "Eliminates bad breath",
                  "Detects early signs of problems",
                  "Improves overall oral health",
                  "Saves money on future treatments"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Frequency & Maintenance */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Cleaning Frequency & Maintenance</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Regular Patients",
                    desc: "Professional cleaning every 6 months for optimal oral health"
                  },
                  {
                    title: "Gum Disease Patients",
                    desc: "More frequent cleanings (every 3-4 months) to manage condition"
                  },
                  {
                    title: "Daily Maintenance",
                    desc: "Brush twice daily, floss daily, and use mouthwash"
                  },
                  {
                    title: "Diet & Lifestyle",
                    desc: "Limit sugary foods, avoid smoking, and drink plenty of water"
                  },
                  {
                    title: "Between Cleanings",
                    desc: "Maintain good oral hygiene to extend benefits of professional cleaning"
                  },
                  {
                    title: "Professional Advice",
                    desc: "Follow dentist recommendations for your specific oral health needs"
                  }
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
            <h2 className="text-3xl font-serif font-medium mb-4">Get Your Teeth Professionally Cleaned</h2>
            <p className="text-white/80 mb-8">Schedule a professional cleaning appointment to keep your teeth bright and healthy.</p>
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
