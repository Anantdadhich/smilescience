"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function DenturesPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Dentures
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Comfortable Dentures in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Natural-looking dentures designed for full or partial tooth replacement. Restore your ability to eat, speak, and smile with confidence.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT ARE DENTURES --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What are Dentures?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Dentures are removable prosthetic devices designed to replace missing teeth and surrounding tissues.</p>
                <p>They are custom-made to fit your mouth and are designed to look natural and function like real teeth.</p>
                <p>Dentures can be full (replacing all teeth) or partial (replacing some teeth), depending on your needs.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Types of Dentures */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Types of Dentures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Complete Dentures",
                    desc: "Replace all upper or lower teeth for patients with complete tooth loss"
                  },
                  {
                    title: "Partial Dentures",
                    desc: "Replace some missing teeth while preserving remaining natural teeth"
                  },
                  {
                    title: "Immediate Dentures",
                    desc: "Placed immediately after tooth extraction without waiting for healing"
                  },
                  {
                    title: "Conventional Dentures",
                    desc: "Made after complete healing of extraction sites for optimal fit"
                  }
                ].map((type, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{type.title}</h4>
                    <p className="text-gray-600 text-sm">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefits */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Benefits of Dentures</h3>
              <div className="space-y-3">
                {[
                  "Restore ability to eat a variety of foods",
                  "Improve speech and pronunciation",
                  "Support facial structure and prevent sagging",
                  "Enhance appearance and smile confidence",
                  "More affordable than implants",
                  "Easy to clean and maintain",
                  "Non-invasive solution for tooth loss",
                  "Can be adjusted and modified as needed"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Denture Care */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Denture Care & Maintenance</h3>
              <div className="space-y-4">
                {[
                  { title: "Daily Cleaning", desc: "Brush dentures daily with a soft brush and denture cleaner" },
                  { title: "Soak Overnight", desc: "Soak dentures in water or denture solution to keep them moist" },
                  { title: "Handle Carefully", desc: "Avoid dropping dentures as they can break easily" },
                  { title: "Regular Check-ups", desc: "Visit your dentist regularly for adjustments and repairs" },
                  { title: "Proper Storage", desc: "Store dentures in a safe place away from children and pets" },
                  { title: "Oral Hygiene", desc: "Clean remaining natural teeth and gums thoroughly" }
                ].map((care, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{care.title}</h4>
                    <p className="text-gray-600 text-sm">{care.desc}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Get Your Custom Dentures</h2>
            <p className="text-white/80 mb-8">Schedule a consultation to discuss your denture options and find the perfect solution.</p>
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
