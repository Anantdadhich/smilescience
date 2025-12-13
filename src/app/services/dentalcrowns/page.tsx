"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Phone,
  Award,
  Zap,
  Heart,
  Gem
} from "lucide-react";
import Link from "next/link";

export default function DentalCrownsPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-white/50 border border-[#1d5343]/10 px-4 py-1.5 rounded-full">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d5343] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d5343]"></span>
                 </span>
                 <span className="text-[11px] font-bold tracking-widest uppercase text-[#1d5343]">
                   Dental Crowns & Caps in Bangalore
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Restore Your Smile <br/>
                <span className="italic text-[#1d5343]">with Precision.</span>
              </h1>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8 font-light max-w-lg">
                At <strong>Smile Science Dental Clinic</strong>, we offer premium Zirconia dental crowns and caps to restore the functionality and aesthetics of your smile. Our expert team utilizes state-of-the-art technology for superior results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button className="h-14 px-8 rounded-full bg-[#1A1A1A] text-white hover:bg-[#1d5343] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-base font-medium">
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="h-14 px-8 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-white transition-all flex items-center gap-2 text-base font-medium">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="relative">
               <div className="rounded-4xl overflow-hidden shadow-2xl relative z-10 aspect-4/3">
                 <img 
                   src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1080" 
                   alt="Dental Crowns and Caps" 
                   className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-[#1d5343] mix-blend-multiply opacity-10 pointer-events-none" />
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT ARE DENTAL CROWNS? --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">
                What are Dental Crowns & Caps?
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>Dental crowns, also known as caps, are custom-made prosthetic restorations designed to cover a damaged or decayed tooth.</p>
                <p>These dental crowns provide strength, protection, and an improved appearance to the tooth, restoring both function and aesthetics.</p>
                <p>A crown encases the entire visible portion of a tooth, providing a durable and natural-looking solution for tooth restoration.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Crown Types */}
          <ScrollAnimation>
            <div className="mb-16">
              <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-8 text-center">Types of Dental Crowns & Caps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Porcelain Crowns",
                    desc: "Mimic the natural color and translucency of your teeth, providing a seamless blend with your smile."
                  },
                  {
                    title: "Metal Crowns",
                    desc: "Made from gold or other metal alloys, offering exceptional durability and strength."
                  },
                  {
                    title: "Porcelain-Fused-to-Metal",
                    desc: "Combine the strength of metal with the aesthetic appeal of porcelain for optimal results."
                  },
                  {
                    title: "All-Ceramic Crowns",
                    desc: "Provide a metal-free option with excellent aesthetics and biocompatibility."
                  }
                ].map((crown, idx) => (
                  <div key={idx} className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <h4 className="font-semibold text-[#1A1A1A] mb-2">{crown.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{crown.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Reasons for Crowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Tooth Restoration",
                desc: "Repair severely decayed, damaged, or fractured teeth and restore functionality.",
                icon: ShieldCheck
              },
              {
                title: "Cosmetic Enhancement",
                desc: "Improve the appearance of misshapen or discolored teeth for a confident smile.",
                icon: Sparkles
              },
              {
                title: "Protection & Strength",
                desc: "Strengthen weak teeth and support teeth after root canal treatment.",
                icon: Zap
              },
              {
                title: "Functional Improvement",
                desc: "Restore the ability to bite, chew, and speak comfortably with natural function.",
                icon: Smile
              }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-[#FDFBF0] p-8 rounded-4xl border border-[#1d5343]/5 hover:border-[#1d5343]/20 transition-all hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1d5343] mb-4 shadow-sm shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-medium text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Benefits of Dental Crowns & Caps</h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Improved Appearance",
                desc: "Enhance the aesthetics of your smile with natural-looking restorations that blend seamlessly."
              },
              {
                title: "Durability",
                desc: "Enjoy long-lasting results with durable materials that withstand daily wear and tear."
              },
              {
                title: "Protection",
                desc: "Strengthen weakened teeth and prevent further damage with complete tooth coverage."
              },
              {
                title: "Comfort",
                desc: "Custom-made crowns ensure a comfortable fit and feel for natural functionality."
              }
            ].map((benefit, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-4xl border border-[#1d5343]/5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#1d5343] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[#1d5343]/5">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Excellence in Restorative Dentistry
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">
                Why Choose Smile Science?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Prosthodontists",
                desc: "Highly skilled specialists with extensive experience in crown and cap procedures.",
                icon: Award
              },
              {
                title: "Premium Materials",
                desc: "We use high-quality Zirconia and ceramic materials for superior aesthetics and durability.",
                icon: Gem
              },
              {
                title: "Precision Fit",
                desc: "Custom-designed crowns that fit perfectly and feel natural in your mouth.",
                icon: Sparkles
              },
              {
                title: "Comprehensive Care",
                desc: "From consultation to placement and follow-up, we ensure your complete satisfaction.",
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-[#FDFBF0] p-8 rounded-4xl text-center border border-[#1d5343]/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 mx-auto bg-[#1d5343]/5 rounded-full flex items-center justify-center text-[#1d5343] mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 px-6 md:px-12">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto bg-[#1d5343] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 relative z-10">
               Transform Your Smile Today
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light relative z-10">
               Schedule your consultation with our crown specialists and discover how dental crowns can restore your smile.
             </p>
             
             <div className="relative z-10 flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
               <a href="tel:+916206700442" className="w-full sm:w-auto">
                 <Button className="h-14 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                   <Phone className="w-4 h-4 fill-current" /> Call 6206700442
                 </Button>
               </a>
               <Link href="/book" className="w-full sm:w-auto">
                 <Button variant="outline" className="h-14 w-full rounded-full border border-white/30 text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-8">
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
