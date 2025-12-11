"use client";

import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { 
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Activity,
  MessageCircle,
  User,
  Check,
  Zap,
  HelpCircle,
  AlertCircle
} from "lucide-react";

export default function RootCanalPage() {
  // WhatsApp Message Encodings
  const WA_NUM = "918048903967";
  const PREFILL_MILD = "Hi%20Dr.%20Pranjal%2C%20I%20have%20mild%20tooth%20pain%20(%F0%9F%9F%A1).%20Can%20you%20advise%20earliest%20slot%3F%20I%E2%80%99m%20near...";
  const PREFILL_THROB = "Hi%20Dr.%20Pranjal%2C%20I%20have%20throbbing%20tooth%20pain%20(%F0%9F%9F%A0).%20Can%20you%20fit%20me%20in%20today%3F%20I%E2%80%99m%20at...";
  const PREFILL_SEVERE = "Hi%20Dr.%20Pranjal%2C%20I%E2%80%99m%20in%20UNBEARABLE%20pain%20(%F0%9F%94%B4)%20right%20now.%20Please%20help%20%E2%80%94%20any%20emergency%20slot%20available%3F";
  const PREFILL_GENERAL = "Hi%20Dr.%20Pranjal%2C%20I%E2%80%99m%20in%20pain%20and%20need%20an%20emergency%20appointment.%20When%20is%20your%20earliest%20slot%3F";
  const PREFILL_QUOTE = "Hi%20Doctor%2C%20I%20want%20an%20estimate%20for%20treatment.";

  return (
    <div className="bg-[#FDFBF0] min-h-screen font-sans pb-32 md:pb-0">
      
    

      {/* --- 🦷 HERO SECTION --- */}
      <section className="relative pt-28 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollAnimation>
            <div>
              {/* Location Pill */}
              <div className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#991B1B] rounded-full py-2 px-4 mb-8 border border-[#FECACA]">
                 <MapPin className="w-4 h-4" />
                 <span className="text-[11px] md:text-xs font-bold tracking-wide uppercase">
                   Just 500m from Wipro Gate — No Traffic
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
                Severe Tooth Pain? <br/>
                <span className="text-[#1d5343]">We Stop It Within 60 Minutes.</span>
              </h1>
              
              <h2 className="text-lg text-gray-600 font-light mb-8 leading-relaxed max-w-lg">
                Painless, Single-Sitting Root Canal Treatment in Neeladri Nagar. <br/>
                <span className="font-medium text-[#1A1A1A]">Consultation Fee Waived with Treatment.</span>
              </h2>
              
              {/* PAIN SCALE TRIGGER */}
              <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 mb-8 max-w-md">
                <p className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2 text-base">
                  <Activity className="w-5 h-5 text-red-500"/> How bad is your pain right now?
                </p>
                
                <div className="grid grid-cols-3 gap-2">
                  <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_MILD}`} className="group">
                    <div className="h-full bg-[#FEF3C7] hover:bg-[#FDE68A] border border-[#FCD34D] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105">
                      <span className="text-xl mb-1">🟡</span>
                      <span className="text-xs font-bold text-[#92400E]">Mild</span>
                    </div>
                  </a>
                  <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_THROB}`} className="group">
                    <div className="h-full bg-[#FFEDD5] hover:bg-[#FED7AA] border border-[#FDBA74] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105">
                      <span className="text-xl mb-1">🟠</span>
                      <span className="text-xs font-bold text-[#9A3412]">Throbbing</span>
                    </div>
                  </a>
                  <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_SEVERE}`} className="group">
                    <div className="h-full bg-[#FEE2E2] hover:bg-[#FECACA] border border-[#F87171] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 animate-pulse">
                      <span className="text-xl mb-1">🔴</span>
                      <span className="text-xs font-bold text-[#991B1B]">Unbearable</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700 font-medium mb-8">
                 <div className="flex items-center gap-1.5">
                   <Star className="w-4 h-4 text-yellow-500 fill-current" /> 
                   <span>4.9 Rated</span>
                 </div>
                 <div className="hidden sm:flex h-4 w-px bg-gray-300"></div>
                 <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#1d5343]" /> 
                    <span>Dr. Pranjal (Owner)</span>
                 </div>
                 <div className="hidden sm:flex h-4 w-px bg-gray-300"></div>
                 <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-blue-600" /> 
                    <span>1,200+ Painless RCTs</span>
                 </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex gap-4">
                <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_GENERAL}`}>
                  <Button className="h-12 px-8 rounded-full bg-[#1d5343] hover:bg-[#143d31] text-white shadow-lg text-base font-bold">
                    Check Emergency Availability
                  </Button>
                </a>
              </div>

            </div>
          </ScrollAnimation>

           {/* Hero Image / Map Visual */}
          <ScrollAnimation delay={0.2}>
            <div className="relative mt-8 lg:mt-0 hidden lg:block">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 aspect-square border-[8px] border-white">
                 {/* PLACEHOLDER FOR DOCTOR IMAGE - Replace src below */}
                 <img 
                   src="/rcthero.jpeg" 
                   alt="Dr Pranjal treatment" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#1d5343] text-white p-3 rounded-full shrink-0">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-serif font-bold text-[#1A1A1A] text-lg">60-Minute Relief</p>
                            <p className="text-sm text-gray-600">Walk out pain-free in one visit.</p>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- 😰 FEAR KILLER SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-white rounded-t-[3rem]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">Zero-Pain Protocol</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] mb-6">Scared of the Needle? Read This.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                If your biggest fear is “the injection”, you’re not alone. Dr. Pranjal uses a specialized <span className="font-bold text-[#1d5343]">2-Step Numbing Protocol</span> so you feel nothing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#FDFBF0] p-8 rounded-3xl border border-[#1d5343]/10">
                <div className="w-10 h-10 bg-[#1d5343] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">1</div>
                <h3 className="font-bold text-xl text-[#1A1A1A] mb-3">The Pre-Numb</h3>
                <p className="text-sm text-gray-600">We apply a flavoured gel to your gums and wait 2 minutes. Your gums go completely numb before we do anything else.</p>
              </div>

              <div className="bg-[#FDFBF0] p-8 rounded-3xl border border-[#1d5343]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-[10px] font-bold px-3 py-1 rounded-bl-xl">MOST POPULAR</div>
                <div className="w-10 h-10 bg-[#1d5343] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">2</div>
                <h3 className="font-bold text-xl text-[#1A1A1A] mb-3">Sleep-Gel Injection</h3>
                <p className="text-sm text-gray-600">Using a micro-thin needle, we administer the anesthesia. Because of Step 1, most patients ask, "Did you do it yet?"</p>
              </div>

              <div className="bg-[#FDFBF0] p-8 rounded-3xl border border-[#1d5343]/10">
                <div className="w-10 h-10 bg-[#1d5343] text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">3</div>
                <h3 className="font-bold text-xl text-[#1A1A1A] mb-3">Silent Technology</h3>
                <p className="text-sm text-gray-600">We use electric rotary instruments. They are quiet and vibration-free. No loud, scary air-drills.</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center italic text-gray-600 max-w-2xl mx-auto border-l-4 border-[#1d5343]">
              "I did my root canal treatment and tooth cavity filling. The doctor Pranjal explained everything very clearly and treatment was very smooth." 
              <span className="block not-italic font-bold text-[#1A1A1A] mt-2 text-sm">— 
Krithika Prabakaran, Electronic City</span>
            </div>
            
            <div className="text-center mt-8">
               <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_GENERAL}`} className="text-[#1d5343] font-bold underline underline-offset-4 hover:text-black">
                 See Emergency Slots on WhatsApp
               </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- 🧠 LOGIC BLOCK (Comparison) --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[900px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">Modern Science vs Old-School</h2>
                </div>
                
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-[#1A1A1A] text-white">
                                    <th className="p-5 font-sans font-medium text-xs uppercase tracking-wider w-1/3">Feature</th>
                                    <th className="p-5 font-sans font-medium text-xs text-gray-400 uppercase tracking-wider w-1/3">Typical Chain Clinic</th>
                                    <th className="p-5 font-sans font-bold text-xs text-white uppercase tracking-wider w-1/3 bg-[#1d5343]">Smile Science</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                <tr>
                                    <td className="p-5 font-bold text-[#1A1A1A]">Technique</td>
                                    <td className="p-5 text-gray-500">Hand Files (Slow, can hurt)</td>
                                    <td className="p-5 font-bold text-[#1d5343] bg-green-50/50">Silent Electric Rotary</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-bold text-[#1A1A1A]">Visits</td>
                                    <td className="p-5 text-gray-500">3–4 Visits</td>
                                    <td className="p-5 font-bold text-[#1d5343] bg-green-50/50">Single Sitting (45 min)</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-bold text-[#1A1A1A]">Doctor</td>
                                    <td className="p-5 text-gray-500">Junior Dentist</td>
                                    <td className="p-5 font-bold text-[#1d5343] bg-green-50/50">Owner-Doctor (15 Yrs)</td>
                                </tr>
                                <tr>
                                    <td className="p-5 font-bold text-[#1A1A1A]">Pain Control</td>
                                    <td className="p-5 text-gray-500">Standard Injection</td>
                                    <td className="p-5 font-bold text-[#1d5343] bg-green-50/50">Zero-Pain Protocol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-center mt-8">
                  <p className="text-sm text-gray-500 mb-4">We treat emergency pain first.</p>
                  <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_GENERAL}`}>
                    <Button variant="outline" className="border-[#1d5343] text-[#1d5343] hover:bg-green-50">Chat on WhatsApp</Button>
                  </a>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- 👨‍⚕️ DOCTOR'S NOTE --- */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
           <ScrollAnimation className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#FDFBF0] shadow-xl relative">
                {/* PLACEHOLDER FOR DR PHOTO */}
                 <img 
                   src="/drpic.jpg" 
                   alt="Dr Pranjal" 
                   className="w-full h-full object-cover"
                 />
              </div>
           </ScrollAnimation>
           <ScrollAnimation className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">A Personal Note from Dr. Pranjal</h2>
              <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6">
                “I don’t run a franchise. I own this practice and treat most emergency patients myself. When you walk in with pain, it becomes my responsibility. My only goal is simple: get you out of pain within an hour — without fear, without upselling, without wasting your time.”
              </blockquote>
              <div className="font-bold text-[#1A1A1A]">Dr. Pranjal</div>
              <div className="text-sm text-[#1d5343] mb-6">Chief Dentist, Smile Science</div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                 <a href="tel:08048903967">
                   <Button size="sm" className="rounded-full bg-[#1A1A1A] text-white">Call Dr. Pranjal</Button>
                 </a>
                 <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_GENERAL}`}>
                   <Button size="sm" variant="ghost" className="rounded-full text-[#1A1A1A]">Message on WhatsApp</Button>
                 </a>
              </div>
           </ScrollAnimation>
        </div>
      </section>

      {/* --- 💰 TRANSPARENT PRICING --- */}
      <section className="py-20 px-6 md:px-12 bg-[#FDFBF0]">
        <div className="max-w-[700px] mx-auto">
            <ScrollAnimation>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">Simple Pricing. No Surprises.</h2>
                </div>

                <div className="space-y-3">
                    {/* Consultation */}
                    <div className="p-5 rounded-xl bg-white flex justify-between items-center border-l-4 border-green-500 shadow-sm">
                        <span className="font-bold text-[#1A1A1A]">Emergency Consultation</span>
                        <div className="text-right">
                           <span className="block text-xs text-red-400 line-through">₹500</span>
                           <span className="font-bold text-green-600">FREE <span className="text-[10px] text-gray-500 font-normal uppercase">(If treated today)</span></span>
                        </div>
                    </div>
                    {/* Treatments */}
                    {[
                        { name: "Painless RCT (Standard)", price: "₹4,500 – ₹6,500" },
                        { name: "Rotary RCT (Premium)", price: "₹6,500 – ₹8,500", note: "Best for molars" },
                        { name: "Zirconia Crown (15yr Warranty)", price: "₹8,500 – ₹12,000" }
                    ].map((item, i) => (
                        <div key={i} className="p-5 rounded-xl bg-white border border-gray-100 flex justify-between items-center">
                            <div>
                                <p className="font-medium text-[#1A1A1A]">{item.name}</p>
                                {item.note && <p className="text-xs text-gray-400">{item.note}</p>}
                            </div>
                            <span className="font-bold text-[#1A1A1A]">{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                         <ShieldCheck className="w-4 h-4 text-[#1d5343]" /> 
                         Final price given <strong>before</strong> treatment starts.
                    </p>
                    <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_QUOTE}`}>
                        <Button variant="outline" className="rounded-full border-[#1A1A1A] text-[#1A1A1A] px-6 h-10 text-sm">Get Estimate on WhatsApp</Button>
                    </a>
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- 📍 LOCATION & FAQ --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Location */}
            <ScrollAnimation>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <MapPin className="text-[#1d5343]"/> Visit Us in Neeladri
                </h3>
                <address className="not-italic text-gray-600 space-y-2 mb-6">
                    <p className="font-medium text-[#1A1A1A]">Smile Science Dental Clinic</p>
                    <p>Above ICICI Bank, Neeladri Main Road</p>
                    <p>Opp. Ajmera Main Gate, Electronic City Phase 1</p>
                </address>
                <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 mb-6">
                    <p>🅿️ Easy parking for cars & bikes</p>
                    <p className="mt-2">🚶 ~5 min from Wipro Gate</p>
                </div>
                {/* Embed Map Placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                  <iframe
          src="https://maps.google.com/maps?q=Smile%20Science%20Dental%20Clinic%20Electronic%20City%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Smile Science Dental Clinic Location"
        ></iframe>
                </div>
            </ScrollAnimation>

            {/* FAQ */}
            <ScrollAnimation delay={0.1}>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <HelpCircle className="text-[#1d5343]"/> Common Questions
                </h3>
                <div className="space-y-4">
                    {[
                        { q: "Can I get an RCT in one visit?", a: "Yes. 90% of our cases are finished in 45-60 minutes using Rotary Endodontics." },
                        { q: "I have swelling, is it too late?", a: "No. Swelling means infection. Call immediately. Do not apply heat packs." },
                        { q: "Do you accept insurance?", a: "Yes, we provide full documentation for reimbursement claims." },
                        { q: "How long does numbness last?", a: "Usually 2-4 hours. Enough to get you home and rested without pain." }
                    ].map((item, i) => (
                        <div key={i} className="border-b border-gray-100 pb-3">
                            <p className="font-bold text-[#1A1A1A] text-sm mb-1">{item.q}</p>
                            <p className="text-sm text-gray-500">{item.a}</p>
                        </div>
                    ))}
                </div>
            </ScrollAnimation>
        </div>
      </section>

      {/* --- 🔥 FINAL CTA --- */}
      <section className="py-24 px-6 md:px-12 bg-[#1d5343] text-white rounded-t-[3rem] mb-20 md:mb-0">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">
               Don’t Sleep With That Toothache.
             </h2>
             <p className="text-white/80 text-lg mb-10 font-light">
               We have <span className="font-bold text-[#FCD34D] underline decoration-[#FCD34D]/30 underline-offset-4">2 emergency slots</span> open for this evening.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href={`https://wa.me/${WA_NUM}?text=${PREFILL_GENERAL}`} className="w-full sm:w-auto">
                 <Button className="h-16 w-full rounded-full bg-white text-[#1d5343] hover:bg-gray-100 px-10 text-lg font-bold shadow-2xl">
                   Chat on WhatsApp
                 </Button>
               </a>
               <a href="tel:08048903967" className="w-full sm:w-auto">
                 <Button variant="outline" className="h-16 w-full rounded-full border-white/20 text-white hover:text-white hover:bg-white/10 px-10 text-lg">
                   Call Clinic Directly
                 </Button>
               </a>
             </div>
             <p className="text-[10px] text-white/40 mt-8">
                By contacting us you agree to receive messages for appointment booking. Standard call charges may apply.
             </p>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
}