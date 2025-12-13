"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function GumDiseasePage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Gum Disease Treatment
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Gum Disease Treatment in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Comprehensive treatment for gum disease including gingivitis and periodontitis. Restore your gum health and prevent tooth loss.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS GUM DISEASE --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is Gum Disease?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Gum disease, also known as periodontal disease, is an infection of the tissues that support your teeth.</p>
                <p>It ranges from simple gum inflammation (gingivitis) to serious disease (periodontitis) that can lead to tooth loss.</p>
                <p>Early detection and treatment can prevent progression and preserve your natural teeth.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Stages of Gum Disease */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Stages of Gum Disease</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Gingivitis",
                    desc: "Early stage with red, swollen gums that bleed easily. Reversible with proper treatment."
                  },
                  {
                    title: "Mild Periodontitis",
                    desc: "Infection spreads below gum line. Requires professional treatment to stop progression."
                  },
                  {
                    title: "Moderate Periodontitis",
                    desc: "Significant bone loss and deeper pockets. Needs intensive treatment and maintenance."
                  },
                  {
                    title: "Severe Periodontitis",
                    desc: "Advanced bone loss and tooth mobility. May require extraction if not treated."
                  }
                ].map((stage, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{stage.title}</h4>
                    <p className="text-gray-600 text-sm">{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Symptoms */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Signs of Gum Disease</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Red or swollen gums",
                  "Bleeding gums while brushing or flossing",
                  "Persistent bad breath",
                  "Receding gums",
                  "Loose or shifting teeth",
                  "Pus between teeth and gums",
                  "Changes in bite alignment",
                  "Discomfort while chewing"
                ].map((symptom, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Treatment Options */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our Treatment Options</h3>
              <div className="space-y-4">
                {[
                  { title: "Scaling & Root Planing", desc: "Deep cleaning to remove tartar and bacteria below gum line" },
                  { title: "Antibiotic Therapy", desc: "Prescription antibiotics to control infection" },
                  { title: "Gum Grafting", desc: "Surgical procedure to restore receded gums" },
                  { title: "Flap Surgery", desc: "Surgical treatment for advanced periodontitis" },
                  { title: "Bone Grafting", desc: "Regeneration of lost bone structure" },
                  { title: "Maintenance Therapy", desc: "Regular follow-up care to prevent recurrence" }
                ].map((treatment, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{treatment.title}</h4>
                    <p className="text-gray-600 text-sm">{treatment.desc}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Treat Your Gum Disease Today</h2>
            <p className="text-white/80 mb-8">Schedule a consultation to assess your gum health and discuss treatment options.</p>
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
