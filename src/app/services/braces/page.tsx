"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Smile, 
  Phone,
  Award,
  Zap,
  Heart,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function BracesPage() {
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
                   Dental Braces in Bangalore
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Achieve Your Perfect <br/>
                <span className="italic text-[#1d5343]">Smile Alignment.</span>
              </h1>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8 font-light max-w-lg">
                At <strong>Smile Science Dental Clinic</strong>, we understand the importance of a confident smile. Our orthodontic specialists offer traditional braces and invisible aligners to straighten your teeth and correct bite issues.
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
                   alt="Dental Braces and Aligners" 
                   className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-[#1d5343] mix-blend-multiply opacity-10 pointer-events-none" />
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHAT ARE DENTAL BRACES? --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">
                What are Dental Braces?
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>Dental braces are orthodontic appliances used to straighten and align teeth.</p>
                <p>They consist of brackets bonded to the teeth and connected by wires and elastic bands that gradually apply gentle pressure to move teeth into the desired position over time.</p>
                <p>Braces correct misaligned teeth and bite issues, improving both oral health and your smile aesthetics.</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corrected Alignment",
                desc: "Straighten misaligned teeth and correct bite issues for improved oral health.",
                icon: ShieldCheck
              },
              {
                title: "Enhanced Aesthetics",
                desc: "Improve smile symmetry and appearance with perfectly aligned teeth.",
                icon: Sparkles
              },
              {
                title: "Boosted Confidence",
                desc: "Gain self-confidence and self-esteem with a beautiful, straight smile.",
                icon: Smile
              },
              {
                title: "Prevents Dental Issues",
                desc: "Help prevent tooth decay, gum disease, and jaw pain caused by misalignment.",
                icon: Zap
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

      {/* --- TREATMENT PROCESS --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Treatment Process</h2>
              <p className="text-gray-600 text-lg">Our orthodontists follow a comprehensive approach to ensure optimal results</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Consultation & Examination",
                desc: "Our orthodontist thoroughly analyzes your teeth arrangement and recommends full mouth and side facial view X-rays for treatment planning."
              },
              {
                step: "2",
                title: "Mold Creation",
                desc: "Molds of your teeth are created as a reference for tracking the progression of treatment throughout the process."
              },
              {
                step: "3",
                title: "Treatment Planning",
                desc: "Based on the severity of misalignment, we select the appropriate treatment method tailored to your needs."
              },
              {
                step: "4",
                title: "Brace Placement",
                desc: "Brackets are bonded to your teeth and connected with wires and elastic bands for gradual tooth movement."
              },
              {
                step: "5",
                title: "Regular Adjustments",
                desc: "Periodic visits ensure proper alignment progression and make necessary adjustments to your braces."
              },
              {
                step: "6",
                title: "Retention",
                desc: "After braces are removed, retainers help maintain your new smile alignment for long-term results."
              }
            ].map((process, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-[#1d5343]/5 flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#1d5343] text-white flex items-center justify-center font-bold shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- TREATMENT DURATION --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Treatment Duration</h2>
                <div className="space-y-6">
                  <div className="bg-[#FDFBF0] p-6 rounded-2xl border border-[#1d5343]/5">
                    <div className="text-3xl font-bold text-[#1d5343] mb-2">6-24 Months</div>
                    <p className="text-gray-600">Typical treatment duration for dental braces</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    The duration depends on several factors including your age, severity of alignment issues, and the treatment method used. Our orthodontists will provide a personalized timeline during your consultation.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Invisalign Aligners</h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our Invisalign aligners are constructed of soft, clear plastic and are consequently more comfortable than traditional braces with their wire and brackets.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Nearly invisible for a discreet treatment option",
                      "Removable for easy eating and cleaning",
                      "More comfortable than traditional braces",
                      "Shorter treatment time in many cases",
                      "Custom-made for your unique smile"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-1" />
                        <p className="text-gray-600 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 md:px-12 bg-[#FDFBF0] border-t border-[#1d5343]/5">
        <div className="max-w-[1200px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
                Excellence in Orthodontics
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">
                Why Choose Smile Science?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Orthodontists",
                desc: "Highly qualified specialists with extensive experience in braces and aligner treatments.",
                icon: Award
              },
              {
                title: "Multiple Options",
                desc: "Choose from traditional braces, ceramic braces, or invisible Invisalign aligners.",
                icon: Sparkles
              },
              {
                title: "Personalized Plans",
                desc: "Customized treatment plans designed specifically for your unique dental needs.",
                icon: Heart
              },
              {
                title: "Proven Results",
                desc: "Achieve a perfectly aligned smile with our proven orthodontic techniques.",
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-4xl text-center border border-[#1d5343]/5 shadow-sm hover:shadow-md transition-all">
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
               Start Your Smile Journey Today
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light relative z-10">
               Schedule your orthodontic consultation and discover the perfect braces or aligner solution for your smile.
             </p>
             
             <div className="relative z-10 flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
               <a href="tel:+916206700442" className="w-full sm:w-auto">
                 <Button className="h-14 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                   <Phone className="w-4 h-4 fill-current" /> Call  62067 00442
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
