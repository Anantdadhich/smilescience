"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Phone,
  Award,
  MapPin,
  Car,
  XCircle,
  AlertTriangle,
  Calendar,
  MessageCircle,
  ArrowLeftRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DentalImplantsPage() {
  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans pb-24 md:pb-0">
      
     

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-[#1d5343]/10 border border-[#1d5343]/10 px-4 py-1.5 rounded-full">
                 <span className="text-[11px] font-bold tracking-widest uppercase text-[#1d5343]">
                   Local Authority + Transparency
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Dental Implants in Neeladri — <span className="text-[#1d5343]">Honest Pricing.</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-[#1A1A1A] text-lg font-medium">
                  Performed ONLY by Dr. Pranjal (15+ Years | Senior Implantologist)
                </p>
                <p className="text-[#4B5563]">
                  Not corporate chains. Not trainees. No rotating consultants.
                </p>
                
                <ul className="space-y-2 text-[#4B5563]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343]" /> FDA-approved implants (Osstem, Nobel, Straumann)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343]" /> Transparent fixed pricing (₹20,000–₹45,000)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343]" /> Lifetime implant warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1d5343]" /> Only 2 implant surgeries per day (maximum precision)
                  </li>
                </ul>

                <div className="pt-2 flex items-start gap-2 text-sm text-[#666]">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#1d5343]" />
                  <p>Trusted by Neeladri Road residents since 2010 — Wipro, Infosys, SFO, Concorde, Shriram, NCC</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20have%20a%20missing%20tooth.%20Can%20I%20send%20my%20X-ray%20to%20check%20if%20I%E2%80%99m%20eligible%20for%20an%20implant?" className="w-full sm:w-auto">
                  <Button className="w-full h-14 px-8 rounded-full bg-[#1d5343] hover:bg-[#153e32] text-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base font-bold">
                    <MessageCircle className="w-5 h-5" /> Check Eligibility on WhatsApp
                  </Button>
                </a>
                <Link href="#pricing" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full h-14 px-8 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-white transition-all flex items-center justify-center gap-2 text-base font-medium">
                    View Fixed Pricing
                  </Button>
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500 italic"> Senior doctor replies personally </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="relative">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] md:aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbnRhbCUyMGltcGxhbnRzfGVufDB8fDB8fHww" 
                   alt="" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#1d5343]/10">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#1d5343] text-white p-2 rounded-full">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-[#1A1A1A]">Lifetime Warranty</p>
                            
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- NEW SECTION: BEFORE & AFTER VISUAL PROOF --- */}
      <section className="py-14 px-5 md:px-10 bg-[#1d5343] text-white overflow-hidden">
        <div className="max-w-[800px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-10">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/70 mb-2 block">Real Results</span>
                    <h2 className="text-3xl font-serif font-medium text-white mb-4">Neeladri Smiles Restored</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        See the transformation. Implants restore not just your teeth, but your facial structure and confidence.
                    </p>
                </div>

                <div className="">
                    {/* Case 1 */}
                    <div className="bg-white/10 rounded-[2rem] p-4 backdrop-blur-sm border border-white/10">
                        <div className="relative h-64 md:h-72 rounded-[1.5rem] overflow-hidden group">
                            {/* Placeholder Images - In production use real before/after */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-6">
                                <div>
                                    <ArrowLeftRight className="w-10 h-10 mx-auto text-white/50 mb-2" />
                                    <p className="text-sm text-white/70">Hover/Tap to see transformation</p>
                                </div>
                            </div>
                            <img 
                                src="/beforeimp.png" 
                                alt="Before Implant"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500  group-hover:opacity-0" 
                            />
                            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-bold uppercase transition-opacity duration-500 group-hover:opacity-0">Before</div>
                            
                            <img 
                                src="/afterimp.png" 
                                alt="After Implant" 
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
                            />
                            <div className="absolute top-4 right-4 bg-[#25D366] px-3 py-1 rounded-full text-xs font-bold uppercase transition-opacity duration-500 opacity-0 group-hover:opacity-100">After</div>
                        </div>
                        <div className="mt-4 px-2">
                            <p className="font-bold text-lg">Single Molar Replacement</p>
                            <p className="text-sm text-white/70">34-year-old IT Professional from Wipro Gate</p>
                        </div>
                    </div>

                   
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- LOCAL DOMINATION STRATEGY: OWNER-DOCTOR ADVANTAGE --- */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
            <ScrollAnimation>
                <div className="bg-[#FDFBF0] border border-[#1d5343]/20 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[#1d5343]"></div>
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] mb-8 text-center">
                        Why Electronic City Residents Prefer Owner-Run Clinics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Same surgeon every visit",
                            "No sales targets",
                            "No corporate billing",
                            "No forced add-ons",
                            "Doctor has skin in the game"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#1d5343]/10 flex items-center justify-center text-[#1d5343] shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-[#1A1A1A]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- VIP SURGERY DAY --- */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
            <ScrollAnimation>
                <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 bg-white/5 w-64 h-64 rounded-full blur-3xl"></div>
                    
                    <div className="bg-white text-[#1A1A1A] p-4 rounded-2xl shrink-0">
                        <Car className="w-12 h-12" />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-medium text-[#cfa86e] mb-2">FREE Uber Premier on Implant Day</h3>
                        <p className="text-sm font-bold tracking-wider uppercase opacity-80 mb-4">Exclusive for Neeladri, Electronic City Phase 1 & 2</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-300">
                            <span className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 className="w-4 h-4 text-[#cfa86e]"/> Pick-up & Drop-off</span>
                            <span className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 className="w-4 h-4 text-[#cfa86e]"/> No driving after anesthesia</span>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- SOCIAL PROOF & GOOGLE REVIEWS (WITH MAP) --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation>
                <div className="sticky top-24">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">
                        Trusted in Electronic City for 15+ years
                    </h2>
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="flex items-center gap-2 text-yellow-500">
                            {[1,2,3,4,5].map(i => <Award key={i} className="w-6 h-6 fill-current" />)}
                            <span className="text-[#1A1A1A] font-bold text-lg ml-2">4.9/5 Google Rating</span>
                        </div>
                        <p className="text-gray-500">(200+ Reviews)</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-4 py-2 bg-[#FDFBF0] border border-[#1d5343]/10 rounded-lg text-[#1d5343] font-medium text-sm">
                            1000+ Successful Implants
                        </span>
                        <span className="px-4 py-2 bg-[#FDFBF0] border border-[#1d5343]/10 rounded-lg text-[#1d5343] font-medium text-sm">
                            Same Doctor, Every Visit
                        </span>
                        <span className="px-4 py-2 bg-[#FDFBF0] border border-[#1d5343]/10 rounded-lg text-[#1d5343] font-medium text-sm">
                            Honest Pricing Clinic
                        </span>
                    </div>
                    
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        We are located right above ICICI Bank on Neeladri Main Road. Easy parking available for patients.
                    </p>
                </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
                {/* ZERO-CLICK TRUST SIGNAL: REVIEW WIDGET + MAP */}
                <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-xl overflow-hidden">
                     {/* Review Header */}
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">R</div>
                        <div>
                            <p className="font-bold text-[#1A1A1A]">Ramesh K.</p>
                            <p className="text-xs text-gray-500">2 weeks ago</p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-5 ml-auto opacity-50" alt="Google" />
                     </div>
                     <div className="flex text-yellow-500 mb-2">★★★★★</div>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        "I live in Wipro Gate and got my implant with Dr. Pranjal. The best part was knowing exactly who would treat me. Seamless experience and honest pricing."
                     </p>
                     
                     {/* EMBEDDED GOOGLE MAP */}
                     <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                           <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                             <MapPin className="w-3 h-3" /> Neeladri Main Road
                           </p>
                           <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">OPEN NOW</span>
                        </div>
                        <div className="rounded-xl overflow-hidden h-[200px] w-full bg-gray-100 relative">
                             <iframe 
                               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.313100034036!2d77.6493779750761!3d12.822971987478335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c6cb77d7e3d%3A0x101375373673753!2sNeeladri%20Rd%2C%20Electronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin" 
                               width="100%" 
                               height="100%" 
                               style={{ border: 0 }} 
                               allowFullScreen 
                               loading="lazy" 
                               referrerPolicy="no-referrer-when-downgrade"
                               className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                             ></iframe>
                        </div>
                        <div className="mt-3 text-center">
                            <a 
                              href="https://goo.gl/maps/YOUR_LINK_HERE" 
                              target="_blank" 
                              className="text-xs font-bold text-[#1d5343] hover:underline"
                            >
                              Get Directions via Google Maps →
                            </a>
                        </div>
                     </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">Smile Science vs Corporate Chains</h2>
                </div>
                
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-[#1d5343]/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#1d5343] text-white">
                                    <th className="p-6 font-serif font-normal w-1/3">Feature</th>
                                    <th className="p-6 font-serif font-normal w-1/3 bg-[#1A1A1A]">Corporate Chains</th>
                                    <th className="p-6 font-serif font-bold w-1/3 bg-[#1d5343]">Smile Science (Dr. Pranjal)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Doctor</td>
                                    <td className="p-6 text-gray-500">Rotating interns & consultants</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Same senior doctor for 15 years</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Pricing</td>
                                    <td className="p-6 text-gray-500">Teaser → add-ons</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Transparent, fixed pricing</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Implants</td>
                                    <td className="p-6 text-gray-500">Economy, generic kits</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Osstem, Nobel, Straumann</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Care Style</td>
                                    <td className="p-6 text-gray-500">High volume</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Only 2 surgeries/day</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Warranty</td>
                                    <td className="p-6 text-gray-500">Limited</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Lifetime Warranty</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-medium text-gray-900">Trust</td>
                                    <td className="p-6 text-red-500">Sales-driven</td>
                                    <td className="p-6 font-bold text-[#1d5343] bg-[#FDFBF0]">Doctor-owned, no targets</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-4">
                        Fixed, All-Inclusive Implant Packages
                    </h2>
                    <div className="inline-block bg-[#FDFBF0] px-6 py-3 rounded-xl border border-[#1d5343]/10 text-sm text-[#4B5563]">
                        <strong>EVERY PLAN INCLUDES:</strong> Implant surgery • FDA-approved body • Healing abutment • Digital X-rays • Sterilization consumables • All follow-ups • Long-term care • Lifetime warranty • Zero hidden fees
                    </div>
                </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Standard Plan */}
                <ScrollAnimation delay={0.1}>
                    <div className="h-full border-2 border-[#1d5343] rounded-[2rem] p-8 relative bg-[#FDFBF0] shadow-xl transform scale-105 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1d5343] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                            Most Patients Choose This
                        </div>
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Standard Value Plan</h3>
                        <div className="text-3xl font-serif font-medium text-[#1d5343] mb-4">₹30,000–₹35,000</div>
                        <p className="text-sm text-gray-600 mb-6">Brand: Osstem / Hi-Tec</p>
                        <p className="text-sm font-medium text-[#1A1A1A] mb-8 bg-white p-3 rounded-lg border border-[#1d5343]/10">
                            Ideal: Back teeth & high chewing load
                        </p>
                        <a href="https://wa.me/918048903967?text=Hi%20Doctor,%20I%20want%20an%20exact%20quote%20for%20single%20implant." className="block">
                            <Button className="w-full rounded-full bg-[#1d5343] hover:bg-[#163f33] text-white">Get Exact Price Quote</Button>
                        </a>
                    </div>
                </ScrollAnimation>


                {/* Full Mouth */}
                <ScrollAnimation delay={0.3}>
                    <div className="h-full border border-gray-200 rounded-[2rem] p-8 relative bg-white hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Full Mouth Implants</h3>
                        <div className="text-3xl font-serif font-medium text-[#1A1A1A] mb-4">Custom Quote</div>
                        <p className="text-sm text-gray-600 mb-6">Brand: Customizable</p>
                        <p className="text-sm font-medium text-[#1A1A1A] mb-8 bg-gray-50 p-3 rounded-lg">
                            For denture replacement or multiple missing teeth.
                        </p>
                        <a href="https://wa.me/918048903967?text=Hi%20Doctor,%20I%20want%20an%20exact%20quote%20for%20full%20mouth." className="block">
                            <Button variant="outline" className="w-full rounded-full border-[#1A1A1A] text-[#1A1A1A] bg-[#1d5343] hover:bg-[#163f33]]">Get Exact Price Quote</Button>
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
      </section>

      {/* --- ELIGIBILITY FILTER (HONESTY) --- */}
      <section className="py-20 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-[1000px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-serif font-medium mb-4">Brutally Honest Eligibility</h2>
                     <p className="opacity-70">We prioritize your health over our revenue.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Good Candidate */}
                    <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10">
                        <h3 className="text-xl font-bold text-[#25D366] mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6"/> Who is a Great Candidate?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-2 shrink-0"></span>
                                Missing one or more teeth
                            </li>
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-2 shrink-0"></span>
                                Want treatment ONLY from a senior doctor
                            </li>
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-2 shrink-0"></span>
                                Want fixed pricing & lifetime warranty
                            </li>
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mt-2 shrink-0"></span>
                                Want implants that last 15–25+ years
                            </li>
                        </ul>
                    </div>

                    {/* Not Suitable */}
                    <div className="bg-red-900/10 rounded-[2rem] p-8 border border-red-500/20">
                        <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                            <XCircle className="w-6 h-6"/> Who is NOT Suitable?
                        </h3>
                        <ul className="space-y-4">
                             <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                                Uncontrolled diabetes
                            </li>
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                                Heavy smoking
                            </li>
                            <li className="flex items-start gap-3 opacity-90">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                                Severe bone loss without grafting
                            </li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- COST OF DELAY (URGENCY) --- */}
      <section className="py-16 px-6 md:px-12 bg-orange-50 border-b border-orange-100">
        <div className="max-w-[800px] mx-auto text-center">
             <ScrollAnimation>
                <div className="flex justify-center mb-4">
                    <AlertTriangle className="w-10 h-10 text-orange-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-orange-900 mb-4">
                    Every Month You Delay = More Bone Loss = Higher Future Cost
                </h2>
                <p className="text-orange-800 mb-6">
                    Bone loss begins within <span className="font-bold">6–12 months</span> of tooth loss.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm text-left inline-block w-full">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
                        <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Makes implant surgery harder</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Requires bone graft (extra ₹8k–₹15k)</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Causes teeth to shift</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Leads to early aging & sunken cheeks</li>
                    </ul>
                </div>
                <p className="mt-6 font-medium text-[#1A1A1A]">Treat now = easier, cheaper, stronger implants.</p>
             </ScrollAnimation>
        </div>
      </section>

      {/* --- MEET THE SURGEON --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
         <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
                 <div className="rounded-[2.5rem] overflow-hidden aspect-[3/4]">
                    {/* Smiling Headshot Placeholder */}
                    <img 
                        src="/drpic.jpg" 
                        alt="Dr. Pranjal" 
                        className="w-full h-full object-cover" 
                    />
                 </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
                <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-6">
                    Your Implant Surgeon — Dr. Pranjal
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-[#FDFBF0] rounded-xl border border-[#1d5343]/10">
                        <Award className="w-6 h-6 text-[#1d5343]" />
                        <span className="font-medium">Senior Implantologist</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#FDFBF0] rounded-xl border border-[#1d5343]/10">
                        <Clock className="w-6 h-6 text-[#1d5343]" />
                        <span className="font-medium">15+ years surgical experience</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#FDFBF0] rounded-xl border border-[#1d5343]/10">
                        <CheckCircle2 className="w-6 h-6 text-[#1d5343]" />
                        <span className="font-medium">1000+ implants placed</span>
                    </div>
                    
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        Known for ethical, transparent care and trusted by 200+ Neeladri families or Electronic City. 
                        Each implant is performed <strong className="text-[#1d5343]">PERSONALLY</strong>.
                    </p>
                </div>
            </ScrollAnimation>
         </div>
      </section>

      {/* --- JOURNEY & SCARCITY --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[1000px] mx-auto">
            <ScrollAnimation>
                <h2 className="text-3xl font-serif font-medium text-center text-[#1A1A1A] mb-12">Your 2-Visit Implant Journey</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm relative z-10 text-center">
                        <div className="w-12 h-12 bg-[#1d5343] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                        <h3 className="font-bold text-[#1A1A1A] mb-2">Visit 1: Planning</h3>
                        <p className="text-sm text-gray-500">CBCT scan → planning → implant placement (45 mins)</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm relative z-10 text-center border-t-4 border-dashed border-[#1d5343]/20 mt-8 md:mt-0">
                        <div className="w-12 h-12 bg-white border-2 border-[#1d5343] text-[#1d5343] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                            <Clock className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-[#1A1A1A] mb-2">Healing (8-12 wks)</h3>
                        <p className="text-sm text-gray-500">Implant integrates with bone</p>
                    </div>

                    <div className="bg-white p-6 rounded-[2rem] shadow-sm relative z-10 text-center">
                        <div className="w-12 h-12 bg-[#1d5343] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                        <h3 className="font-bold text-[#1A1A1A] mb-2">Visit 2: Crown</h3>
                        <p className="text-sm text-gray-500">Bite adjustment → final restoration → done</p>
                    </div>
                </div>
            </ScrollAnimation>

            {/* SCARCITY BLOCK */}
            <div className="mt-16 max-w-2xl mx-auto">
                 <ScrollAnimation delay={0.3}>
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                        <div className="flex justify-center mb-2">
                             <Calendar className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-lg font-bold text-red-900 mb-1">Only 1 Implant Slots Per Day</h3>
                        <p className="text-sm text-red-800 mb-4">To maintain strict sterilization & precision. Slots fill 3–5 days in advance.</p>
                        <a href="https://wa.me/918048903967?text=Hi%20Doctor,%20I%20want%20to%20check%20the%20next%20available%20slot." className="inline-block">
                             <span className="text-sm font-bold text-red-600 underline">Check Next Available Slot on WhatsApp →</span>
                        </a>
                    </div>
                 </ScrollAnimation>
            </div>
        </div>
      </section>

      {/* --- LOCAL AUTHORITY --- */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="flex items-center justify-center gap-2 text-gray-600 font-medium">
                <MapPin className="w-5 h-5 text-[#1d5343]" />
                Serving Neeladri Road, Electronic City Phase 1 & 2
            </p>
            <p className="text-sm text-gray-400 mt-2">
                Landmarks: SFO Aura, Wipro Gate, Concorde Manhattans (Within walking distance)
            </p>
          </div>
      </section>

      {/* --- ULTRA-STRONG FINAL CTA --- */}
      <section className="py-20 px-6 md:px-12 bg-[#1d5343]">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center text-white">
             <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
               Your New Smile Is Just <span className="underline decoration-white/30">2 Visits</span> Away
             </h2>
             <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-light">
               Send your X-ray for a free WhatsApp eligibility check.
             </p>
             
             <div className="flex flex-col items-stretch gap-4 justify-center sm:flex-row sm:items-center">
               <a href="https://wa.me/918048903967?text=Hi%20Dr.%20Pranjal,%20I%20have%20a%20missing%20tooth.%20Can%20I%20send%20my%20X-ray%20to%20check%20if%20I%E2%80%99m%20eligible%20for%20an%20implant?" className="w-full sm:w-auto">
                 <Button className="h-16 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-10 text-lg shadow-xl">
                   <MessageCircle className="w-5 h-5" /> Check Eligibility on WhatsApp
                 </Button>
               </a>
               <a href="#pricing" className="w-full sm:w-auto">
                 <Button variant="outline" className="h-16 w-full rounded-full border border-white/30 text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-10 text-lg hover:text-white hover:border-white/50 hover:cursor-pointer">
                   Get Exact Price Quote
                 </Button>
               </a>
             </div>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
}