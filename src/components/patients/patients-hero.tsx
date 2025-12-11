"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Phone } from 'lucide-react';

export const PatientsHero = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#FDFBF0] overflow-hidden flex items-center pt-28 pb-16">
      <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-green-50/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 relative z-10">
        <ScrollAnimation>
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">
              For Patients
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#0F172A] leading-[1.1] mb-6">
              Everything you need to feel confident about your first visit
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
              Your initial appointment at Smile Science Dental Clinic in Electronic City is designed to be smooth, informative, and completely personalized. 
              Here’s what to expect before, during, and after your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:08048903967">
                <Button className="bg-[#1A1A1A] text-white rounded-full px-8 h-12 text-sm font-semibold hover:bg-black shadow-lg transition-all duration-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call to Schedule
                </Button>
              </a>
             
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};


