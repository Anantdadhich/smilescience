"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

export default function EmergencyDentalPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 px-6 md:px-12 bg-white border-b border-[#1d5343]/5">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-8">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Emergency Dental Care
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] mb-4">
                Emergency Dental Care in Bangalore
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Immediate relief for dental emergencies. We provide urgent care for severe pain, broken teeth, and other dental emergencies.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- EMERGENCY SITUATIONS --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Common Dental Emergencies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Dental emergencies require immediate attention to prevent complications and relieve pain.</p>
                <p>We provide prompt emergency dental care to address urgent dental problems.</p>
                <p>If you experience severe dental pain or injury, contact us immediately for emergency treatment.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Emergency Types */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Types of Dental Emergencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Severe Toothache", desc: "Intense pain that may indicate infection or decay" },
                  { title: "Broken or Chipped Tooth", desc: "Trauma or injury resulting in tooth damage" },
                  { title: "Knocked Out Tooth", desc: "Complete loss of a tooth due to impact" },
                  { title: "Loose Tooth", desc: "Tooth mobility due to trauma or gum disease" },
                  { title: "Abscess or Infection", desc: "Swelling and pus indicating serious infection" },
                  { title: "Lost Filling or Crown", desc: "Exposed tooth structure requiring immediate repair" }
                ].map((emergency, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{emergency.title}</h4>
                    <p className="text-gray-600 text-sm">{emergency.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* First Aid Tips */}
          <ScrollAnimation>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">First Aid for Dental Emergencies</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Severe Pain",
                    desc: "Rinse mouth with warm water, apply cold compress, take pain reliever, and call immediately"
                  },
                  {
                    title: "Broken Tooth",
                    desc: "Rinse area, save tooth fragments, apply cold compress, and seek immediate treatment"
                  },
                  {
                    title: "Knocked Out Tooth",
                    desc: "Handle by crown only, rinse gently, try to reinsert, or place in milk and come immediately"
                  },
                  {
                    title: "Abscess",
                    desc: "Rinse with salt water, apply warm compress, take antibiotics if prescribed, and call urgently"
                  },
                  {
                    title: "Lost Filling",
                    desc: "Avoid chewing on that side, use temporary filling material, and schedule emergency visit"
                  },
                  {
                    title: "Bleeding",
                    desc: "Apply pressure with gauze, rinse gently, avoid disturbing area, and contact us"
                  }
                ].map((tip, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Our Emergency Services */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8">Our Emergency Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Same-day emergency appointments",
                  "Rapid pain relief and treatment",
                  "Temporary and permanent repairs",
                  "Infection management and antibiotics",
                  "X-rays and diagnosis",
                  "Follow-up care and prevention",
                  "Available for urgent calls",
                  "Experienced emergency dentists"
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-[#FDFBF0] p-4 rounded-xl border border-[#1d5343]/5">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{service}</p>
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
            <h2 className="text-3xl font-serif font-medium mb-4">Dental Emergency? Call Us Now</h2>
            <p className="text-white/80 mb-8">We provide immediate emergency dental care to relieve your pain and address urgent issues.</p>
            <div className="flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
              <a href="tel:+916206700442" className="w-full sm:w-auto">
                <Button className="h-12 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                  <Phone className="w-4 h-4 fill-current" /> Call Now
                </Button>
              </a>
              <Link href="/book" className="w-full sm:w-auto">
                <Button variant="outline" className="h-12 w-full rounded-full border border-white/30 text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-8">
                  Book Urgent Slot
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
