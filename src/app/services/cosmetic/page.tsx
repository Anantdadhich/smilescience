"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Smile, 
  Phone,
  Award,
  Zap,
  Heart,
  Star
} from "lucide-react";
import Link from "next/link";

export default function CosmeticDentistryPage() {
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
                   Cosmetic Dentistry in Bangalore
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Transform Your Smile <br/>
                <span className="italic text-[#1d5343]">with Confidence.</span>
              </h1>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8 font-light max-w-lg">
                At <strong>Smile Science Dental Clinic</strong>, we understand the importance of a confident smile. Our cosmetic dentistry services are designed to help you achieve the smile you've always wanted using advanced techniques and personalized care.
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
                   alt="Cosmetic Dentistry" 
                   className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-[#1d5343] mix-blend-multiply opacity-10 pointer-events-none" />
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- COSMETIC TREATMENTS --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">
                Our Cosmetic Dentistry Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Explore the range of treatments we offer to transform your smile and boost your confidence.
              </p>
            </div>
          </ScrollAnimation>

          {/* Treatment Cards */}
          <div className="space-y-8">
            {[
              {
                title: "Teeth Whitening",
                desc: "Professional-grade whitening treatments to remove stains and discoloration.",
                features: [
                  "In-office whitening for immediate results",
                  "Take-home whitening kits for convenience",
                  "Safe and effective methods",
                  "Brighter, more youthful smile"
                ],
                icon: Sparkles
              },
              {
                title: "Dental Veneers",
                desc: "Thin, custom-made shells that cover the front surface of your teeth to correct imperfections.",
                features: [
                  "Correct tooth discoloration",
                  "Fix chipped or cracked teeth",
                  "Close gaps between teeth",
                  "Reshape misaligned teeth"
                ],
                icon: Star
              },
              {
                title: "Gum Contouring",
                desc: "Reshape and redefine the gum line for a more symmetrical and attractive smile.",
                features: [
                  "Laser technology for precision",
                  "Comfortable and painless procedure",
                  "Enhanced tooth appearance",
                  "Improved smile symmetry"
                ],
                icon: Zap
              },
              {
                title: "Smile Makeovers",
                desc: "Comprehensive treatment plans tailored to your unique smile goals.",
                features: [
                  "Combination of cosmetic procedures",
                  "Address multiple concerns",
                  "Personalized treatment plan",
                  "Complete smile transformation"
                ],
                icon: Smile
              }
            ].map((treatment, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-[#FDFBF0] p-8 rounded-4xl border border-[#1d5343]/5 hover:border-[#1d5343]/20 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#1d5343] shadow-sm shrink-0">
                      <treatment.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-2">{treatment.title}</h3>
                      <p className="text-gray-600 mb-4">{treatment.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {treatment.features.map((feature, fidx) => (
                          <div key={fidx} className="flex gap-2 items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                            <p className="text-gray-600 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY COSMETIC DENTISTRY --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">Why Cosmetic Dentistry?</h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Boost Confidence",
                desc: "A beautiful smile enhances your self-esteem and confidence in social and professional settings."
              },
              {
                title: "Improved Appearance",
                desc: "Correct imperfections and achieve the smile you've always wanted with advanced techniques."
              },
              {
                title: "Better Oral Health",
                desc: "Many cosmetic procedures also improve your oral health and functionality."
              },
              {
                title: "Long-lasting Results",
                desc: "Our treatments provide durable, beautiful results that last for years with proper care."
              }
            ].map((benefit, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-4xl border border-[#1d5343]/5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-[#1d5343] shrink-0 mt-1" />
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
                Excellence in Cosmetic Dentistry
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A]">
                Why Choose Smile Science?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Cosmetic Dentists",
                desc: "Highly skilled specialists with extensive experience in smile transformations.",
                icon: Award
              },
              {
                title: "Advanced Technology",
                desc: "State-of-the-art equipment and techniques for superior cosmetic results.",
                icon: Zap
              },
              {
                title: "Personalized Plans",
                desc: "Customized treatment plans designed to achieve your unique smile goals.",
                icon: Sparkles
              },
              {
                title: "Comprehensive Care",
                desc: "From consultation to final results, we ensure your complete satisfaction.",
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
               Achieve Your Dream Smile
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-light relative z-10">
               Schedule your cosmetic dentistry consultation today and discover how we can transform your smile.
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
