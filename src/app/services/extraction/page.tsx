"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function ExtractionPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Tooth Extraction
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Painless Tooth Extraction in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Advanced, gentle extraction techniques for a stress-free, comfortable experience. Our experienced dentists ensure minimal discomfort and fast recovery.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS TOOTH EXTRACTION --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is Tooth Extraction?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Tooth extraction is the removal of a tooth from its socket in the bone. While we always try to save natural teeth, extraction may be necessary in certain situations.</p>
                <p>Our dentists use advanced techniques and anesthesia to ensure the procedure is as painless and comfortable as possible.</p>
                <p>We provide comprehensive aftercare instructions to promote fast healing and prevent complications.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* When Extraction is Needed */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">When is Tooth Extraction Needed?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Severe tooth decay beyond repair",
                  "Advanced gum disease",
                  "Impacted wisdom teeth",
                  "Broken or fractured teeth",
                  "Overcrowding before orthodontic treatment",
                  "Tooth infection or abscess",
                  "Trauma or injury to the tooth",
                  "Preparation for dentures or implants"
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-[#FDFBF0] p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Our Approach */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our Extraction Approach</h3>
              <div className="space-y-4">
                {[
                  { title: "Thorough Examination", desc: "X-rays and assessment to plan the best extraction method" },
                  { title: "Advanced Anesthesia", desc: "Effective pain management for complete comfort" },
                  { title: "Gentle Technique", desc: "Minimally invasive extraction to preserve bone" },
                  { title: "Quick Recovery", desc: "Proper aftercare instructions for fast healing" },
                  { title: "Replacement Options", desc: "Discussion of implants, bridges, or dentures" },
                  { title: "Follow-up Care", desc: "Regular check-ups to ensure proper healing" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Aftercare */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Aftercare Tips</h3>
              <div className="space-y-3">
                {[
                  "Bite on gauze for 30-45 minutes to stop bleeding",
                  "Apply ice pack for first 24 hours to reduce swelling",
                  "Take prescribed pain medication as directed",
                  "Avoid strenuous activities for 3-5 days",
                  "Eat soft foods and avoid hot beverages",
                  "Keep the extraction area clean but don't disturb it",
                  "Sleep with head elevated for better healing",
                  "Attend follow-up appointments as scheduled"
                ].map((tip, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-[#FDFBF0] p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600">{tip}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Need a Tooth Extraction?</h2>
            <p className="text-white/80 mb-8">Schedule a consultation with our experienced dentists for painless extraction.</p>
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
