"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { CheckCircle2, ClipboardCheck, ScanFace, Stethoscope, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    step: "Phase 01",
    title: "Comprehensive Consultation",
    description: `Your journey begins with a relaxed conversation. Dr. Pranjal and the team will review your medical history, discuss your dental goals, and address any anxiety you might have. We believe in listening first, treating second.`,
  },
  {
    icon: ScanFace,
    step: "Phase 02",
    title: "Digital Diagnostics",
    description: `We don't guess; we verify. Using advanced low-radiation digital X-rays and intraoral cameras, we capture a complete picture of your oral health right here in our Electronic City clinic. No need to visit external diagnostic centers.`,
  },
  {
    icon: Stethoscope,
    step: "Phase 03",
    title: "The Expert Diagnosis",
    description: `Dr. Pranjal performs a detailed visual inspection of your teeth, gums, and jaw alignment. Combining this with your scans, we create a transparent diagnosis that identifies root causes, not just symptoms.`,
  },
  {
    icon: HeartHandshake,
    step: "Phase 04",
    title: "Transparent Care Plan",
    description: `No hidden fees or surprise procedures. We walk you through your personalized treatment plan, explaining timelines, costs, and insurance coverage before we begin. You stay in control of your dental health decisions.`,
  },
];

export const WhatToExpect = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1200px] mx-auto">
        <ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                 <span className="h-[1px] w-8 bg-[#1d5343]"></span>
                 <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest">
                   The Patient Journey
                 </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.15]">
                What to expect during <br />
                <span className="italic text-[#1d5343]">your first visit.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-light">
                We have streamlined our process to ensure your visit to our  Electonic City , clinic is efficient, comfortable, and anxiety-free.
              </p>
            </div>
            
            {/* Quick Stat */}
            <div className="hidden md:flex items-center gap-3 bg-[#FDFBF0] px-6 py-3 rounded-full border border-[#1d5343]/10">
                <CheckCircle2 className="w-5 h-5 text-[#1d5343]" />
                <span className="text-sm font-semibold text-[#1A1A1A]">Avg. First Visit: 45 Mins</span>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-[#1d5343]/20 via-[#1d5343]/10 to-transparent z-0"></div>

          {steps.map((item, index) => (
            <ScrollAnimation key={item.step} delay={index * 0.15}>
              <div className="relative z-10 group">
                {/* Step Marker */}
                <div className="w-24 h-24 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-8 group-hover:border-[#1d5343]/20 group-hover:-translate-y-2 transition-all duration-500">
                   <div className="w-12 h-12 bg-[#FDFBF0] rounded-xl flex items-center justify-center text-[#1d5343]">
                      <item.icon className="w-6 h-6" />
                   </div>
                </div>

                {/* Content */}
                <div className="pr-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block group-hover:text-[#1d5343] transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-[#1A1A1A] mb-4 group-hover:text-[#1d5343] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};