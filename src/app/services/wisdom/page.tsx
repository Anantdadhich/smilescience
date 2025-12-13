"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function WisdomTeethPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Wisdom Teeth Removal
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Wisdom Teeth Removal in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Safe and painless wisdom teeth extraction. Our experienced oral surgeons handle simple and complex extractions with minimal discomfort.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT ARE WISDOM TEETH --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What are Wisdom Teeth?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Wisdom teeth are the third and final set of molars that typically erupt in the late teens or early twenties.</p>
                <p>Many people don't have enough space in their mouth for wisdom teeth, causing them to become impacted or misaligned.</p>
                <p>Extraction is often necessary to prevent pain, infection, and damage to adjacent teeth.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* When Extraction is Needed */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">When is Wisdom Teeth Removal Needed?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Impaction", desc: "Wisdom teeth trapped in bone or gums" },
                  { title: "Overcrowding", desc: "Insufficient space causing misalignment" },
                  { title: "Infection", desc: "Pericoronitis or infection around the tooth" },
                  { title: "Decay", desc: "Cavities that are difficult to treat" },
                  { title: "Damage", desc: "Harm to adjacent teeth or bone" },
                  { title: "Orthodontic Needs", desc: "Removal for proper teeth alignment" }
                ].map((reason, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Extraction Process */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">The Extraction Process</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    desc: "Evaluation with X-rays to assess tooth position and complexity"
                  },
                  {
                    step: "2",
                    title: "Anesthesia",
                    desc: "Local or general anesthesia for comfort during procedure"
                  },
                  {
                    step: "3",
                    title: "Extraction",
                    desc: "Careful removal of wisdom tooth using specialized instruments"
                  },
                  {
                    step: "4",
                    title: "Closure",
                    desc: "Stitches if needed to promote proper healing"
                  },
                  {
                    step: "5",
                    title: "Recovery",
                    desc: "Post-operative care instructions and follow-up appointments"
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

          {/* Recovery Tips */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Recovery & Aftercare</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Rest for 24-48 hours after extraction",
                  "Apply ice pack for first 24 hours",
                  "Take prescribed pain medication",
                  "Avoid strenuous activities for 1 week",
                  "Eat soft foods for several days",
                  "Keep extraction area clean",
                  "Avoid smoking and alcohol",
                  "Sleep with head elevated",
                  "Attend follow-up appointments",
                  "Watch for signs of complications",
                  "Use salt water rinse after 24 hours",
                  "Gradually return to normal diet"
                ].map((tip, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{tip}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Wisdom Teeth Causing Problems?</h2>
            <p className="text-white/80 mb-8">Schedule a consultation with our oral surgeons for safe and painless wisdom teeth removal.</p>
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
