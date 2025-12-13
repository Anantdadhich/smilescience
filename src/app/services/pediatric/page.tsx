"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PediatricDentistryPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Children's Dental Care
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Pediatric Dentistry in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Gentle and expert dental care for children in a stress-free, friendly environment. Our certified pediatric dentist specializes in making dental visits enjoyable for kids.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT IS PEDIATRIC DENTISTRY --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">What is Pediatric Dentistry?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Pediatric dentistry is a specialized branch of dentistry focused on providing dental care for infants, children, and adolescents.</p>
                <p>Our pediatric dentist is trained to handle the unique dental needs of growing children and create a comfortable, non-threatening environment.</p>
                <p>We focus on preventive care, early detection of problems, and establishing good oral hygiene habits from an early age.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Services Grid */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our Pediatric Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Cavity Care & Fillings", desc: "Safe and gentle treatment for cavities in children's teeth" },
                  { title: "Preventive Check-ups", desc: "Regular examinations to catch problems early" },
                  { title: "Habit Counseling", desc: "Guidance on thumb sucking and other oral habits" },
                  { title: "Fluoride Treatment", desc: "Protective fluoride application for strong teeth" },
                  { title: "Sealants", desc: "Protective coatings to prevent cavities on molars" },
                  { title: "Teeth Cleaning", desc: "Professional cleaning to remove plaque and tartar" }
                ].map((service, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Why Choose Us */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Why Parents Choose Us</h3>
              <div className="space-y-4">
                {[
                  "Certified pediatric dentist with specialized training",
                  "Child-friendly environment with colorful, welcoming clinic",
                  "Gentle approach to make dental visits stress-free",
                  "Experienced in handling anxious and nervous children",
                  "Focus on preventive care and education",
                  "Transparent communication with parents about treatment"
                ].map((reason, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600">{reason}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Schedule Your Child's Dental Visit</h2>
            <p className="text-white/80 mb-8">Give your child the gift of healthy teeth and a beautiful smile.</p>
            <div className="flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
              <a href="tel:+916206700442" className="w-full sm:w-auto">
                <Button className="h-12 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                  <Phone className="w-4 h-4 fill-current" /> Call Now
                </Button>
              </a>
              <Link href="/book" className="w-full sm:w-auto">
                <Button variant="outline" className="h-12 w-full rounded-full border border-white/30 text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-8">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
