"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  AlertCircle,
  Phone
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";


const benefits = [
  {
    title: "Zero Waiting Policy",
    desc: "We respect your time. Pre-booked appointments start on the dot."
  },
  {
    title: "100% Sterile Environment",
    desc: "6-step sterilization protocol for your absolute safety."
  },
  {
    title: "Painless Anesthesia",
    desc: "Advanced techniques ensuring a comfortable, fear-free experience."
  },
  {
    title: "Transparent Pricing",
    desc: "Know your treatment cost before we begin. No hidden fees."
  }
];

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", service: "", date: "", time: "" });
    }, 1500);
  };

  return (
    <div className="bg-[#FDFBF0] min-h-screen">
      
      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 mb-6 bg-[#1d5343]/5 px-4 py-1.5 rounded-full border border-[#1d5343]/10">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d5343] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d5343]"></span>
               </span>
               <span className="text-[11px] font-bold tracking-widest uppercase text-[#1d5343]">
                 Accepting New Patients
               </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight">
              Secure Your <span className="italic text-[#1d5343]">Slot.</span>
            </h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Skip the queue. Book your consultation online and get priority access to 
              Electronic City's finest dental care.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: BOOKING FORM (The Hero) - 7 Columns */}
          <div className="lg:col-span-7">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-[#1d5343]/5 border border-[#1d5343]/10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-medium text-[#1A1A1A]">Appointment Details</h2>
                  <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> SSL Secure
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium"
                          placeholder="+91 98765..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Treatment Type</label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        <option value="consultation">General Consultation (₹500)</option>
                        <option value="pain">Tooth Pain / Emergency</option>
                        <option value="cleaning">Cleaning & Polishing</option>
                        <option value="implants">Implants / Missing Teeth</option>
                        <option value="braces">Braces / Invisalign</option>
                        <option value="kids">Pediatric (Kids) Checkup</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium appearance-none cursor-pointer"
                        >
                          <option value="">Select time...</option>
                          <option value="morning">Morning (10 AM - 1 PM)</option>
                          <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 8 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl bg-green-50 text-green-800 text-sm font-medium flex items-center gap-3 border border-green-100">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-bold">Booking Request Received!</p>
                        <p className="text-xs opacity-80">Our front desk will call you shortly to confirm.</p>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-[#1A1A1A] text-white rounded-xl text-lg font-semibold hover:bg-[#1d5343] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Appointment"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    By booking, you agree to our privacy policy. No payment required now.
                  </p>
                </form>
              </div>
            </ScrollAnimation>
          </div>

          {/* RIGHT: VALUE PROP & TRUST (Replaces Map) - 5 Columns */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            
            {/* The "Why Us" Card */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-[#1d5343] rounded-4xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-xl font-serif font-medium mb-6 relative z-10">The Smile Science Promise</h3>
                
                <div className="space-y-6 relative z-10">
                  {benefits.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white/90">{item.title}</h4>
                        <p className="text-xs text-white/60 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Emergency / Walk-in Card */}
            <ScrollAnimation delay={0.3}>
              <div className="bg-white rounded-4xl p-8 border border-orange-100 shadow-sm relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-orange-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-3">
                     <AlertCircle className="w-5 h-5 text-orange-500" />
                     <h4 className="font-bold text-[#1A1A1A]">In a Hurry?</h4>
                   </div>
                   <p className="text-gray-500 text-sm leading-relaxed mb-4">
                     Walk-ins are welcome for emergencies! Visit us at <strong>Neeladri Layout</strong> (Above ICICI Bank).
                   </p>
                   <a href="tel:+916206700442" className="text-sm font-bold text-[#1d5343] hover:underline flex items-center gap-1">
                     Call Emergency Line <ArrowRight className="w-3 h-3" />
                   </a>
                 </div>
              </div>
            </ScrollAnimation>

          </div>

        </div>
      </section>
    </div>
  );
}