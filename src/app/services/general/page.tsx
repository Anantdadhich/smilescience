"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function GeneralDentistryPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                General Dentistry
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                General & Preventive Dentistry in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Comprehensive dental care including cleanings, fillings, emergency treatment, and routine check-ups to keep your oral health perfect year-round.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS GENERAL DENTISTRY --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is General Dentistry?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>General dentistry focuses on the prevention, diagnosis, and treatment of common dental problems.</p>
                <p>It includes routine check-ups, cleanings, fillings, and emergency dental care to maintain your oral health.</p>
                <p>Regular general dental care helps prevent serious dental issues and keeps your teeth and gums healthy.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Services */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our General Dental Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Routine Check-ups", desc: "Regular examinations to detect problems early" },
                  { title: "Professional Cleaning", desc: "Removal of plaque and tartar buildup" },
                  { title: "Dental Fillings", desc: "Treatment for cavities with tooth-colored materials" },
                  { title: "Gum Treatment", desc: "Care for gum disease and inflammation" },
                  { title: "Emergency Care", desc: "Immediate treatment for dental emergencies" },
                  { title: "Polishing", desc: "Professional polishing for a brighter smile" }
                ].map((service, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Preventive Care */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Preventive Care Tips</h3>
              <div className="space-y-3">
                {[
                  "Brush teeth twice daily with fluoride toothpaste",
                  "Floss daily to remove food between teeth",
                  "Limit sugary foods and drinks",
                  "Avoid smoking and tobacco products",
                  "Visit dentist every 6 months for check-ups",
                  "Use mouthwash to kill bacteria",
                  "Drink plenty of water throughout the day",
                  "Maintain a balanced diet rich in calcium"
                ].map((tip, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Why Regular Check-ups */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Why Regular Check-ups Matter</h3>
              <div className="space-y-4">
                {[
                  { title: "Early Detection", desc: "Catch dental problems before they become serious" },
                  { title: "Cost Savings", desc: "Preventive care is more affordable than emergency treatment" },
                  { title: "Healthy Gums", desc: "Regular cleaning prevents gum disease and tooth loss" },
                  { title: "Bright Smile", desc: "Professional cleaning keeps your teeth white and bright" },
                  { title: "Overall Health", desc: "Oral health is connected to your overall well-being" },
                  { title: "Confidence", desc: "Maintain a healthy smile and boost your confidence" }
                ].map((reason, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.desc}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Schedule Your Dental Check-up</h2>
            <p className="text-white/80 mb-8">Keep your teeth and gums healthy with regular general dental care.</p>
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
