"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Car, Map, Navigation } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FDFBF0] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden text-center">
        {/* Ambient Background */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 mb-6">
               <span className="h-[1px] w-8 bg-[#1d5343]"></span>
               <span className="text-xs font-bold text-[#1d5343] uppercase tracking-[0.2em]">
                 Get In Touch
               </span>
               <span className="h-[1px] w-8 bg-[#1d5343]"></span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight">
              We'd love to <span className="italic text-[#1d5343]">hear from you.</span>
            </h1>
            
            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Whether you have a question about our services, need to schedule a consultation, 
              or just want to say hello, our team in <strong>Neeladri Nagar , Electronic City</strong> is ready to help.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="px-6 md:px-12 pb-24 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* LEFT: CONTACT INFO & SEO LANDMARKS */}
          <div className="space-y-10">
            
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#1d5343]/5">
                <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#FDFBF0] flex items-center justify-center text-[#1d5343] group-hover:bg-[#1d5343] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</p>
                 
                      <a href="tel:+916206700442" className="block text-[#1A1A1A] font-medium hover:text-[#1d5343] transition-colors">+91 62067 00442</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#FDFBF0] flex items-center justify-center text-[#1d5343] group-hover:bg-[#1d5343] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:drpranjal@smilescience.in" className="text-[#1A1A1A] font-medium hover:text-[#1d5343] transition-colors break-all">
                        drpranjal@smilescience.in
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#FDFBF0] flex items-center justify-center text-[#1d5343] group-hover:bg-[#1d5343] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">WhatsApp</p>
                      <a href="https://wa.me/916206700442" className="text-[#1A1A1A] font-medium hover:text-[#1d5343] transition-colors">
                        Chat with us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Local SEO / Directions Card */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-[#1d5343] rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-xl font-serif font-medium mb-6 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-green-300" /> How to Reach Us
                </h3>
                
                <div className="space-y-4 text-sm text-white/90 leading-relaxed font-light">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 shrink-0 mt-1 text-green-300" />
                    <p>Located on <strong>Neeladri Main Road</strong>, directly above ICICI Bank.</p>
                  </div>
                  <div className="flex gap-3">
                    <Map className="w-4 h-4 shrink-0 mt-1 text-green-300" />
                    <p>Just <strong>2 mins</strong> from the Wipro Gate, Electronic City Phase 1.</p>
                  </div>
                  <div className="flex gap-3">
                    <Car className="w-4 h-4 shrink-0 mt-1 text-green-300" />
                    <p><strong>Free Parking</strong> available for patients in the basement.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-2">
            <ScrollAnimation delay={0.3}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-[#1d5343]/5 border border-[#1d5343]/5">
                <div className="mb-8">
                  <h2 className="text-3xl font-serif font-medium text-[#1A1A1A] mb-2">Send us a Message</h2>
                  <p className="text-gray-500 font-light">We usually respond within 2-4 hours during working days.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] placeholder:text-gray-400 font-medium"
                        placeholder="Ramesh Kumar"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] placeholder:text-gray-400 font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] placeholder:text-gray-400 font-medium"
                      placeholder="rameshkumar@gmail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select a topic...</option>
                      <option value="appointment">New Appointment</option>
                      <option value="consultation">General Consultation</option>
                      <option value="pricing">Pricing & Insurance</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#1d5343] uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl bg-[#FDFBF0] border-transparent focus:bg-white focus:border-[#1d5343] focus:ring-0 transition-all text-[#1A1A1A] placeholder:text-gray-400 font-medium resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm font-medium flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      Message sent successfully! We'll call you shortly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A1A1A] text-white h-14 rounded-xl text-base font-semibold hover:bg-[#1d5343] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </Button>
                </form>
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="relative h-[400px] md:h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src="https://maps.google.com/maps?q=Smile%20Science%20Dental%20Clinic%20Electronic%20City%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Smile Science Dental Clinic Location"
        ></iframe>
        
        {/* Overlay Card for Mobile */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:w-80 bg-white p-6 rounded-2xl shadow-2xl md:hidden">
           <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#1d5343] mt-1" />
              <div>
                <h4 className="font-bold text-[#1A1A1A]">Smile Science</h4>
                <p className="text-xs text-gray-500 mt-1">4th Floor, Above ICICI Bank, Neeladri Nagar, Electronic City Phase 1</p>
                <a href="https://maps.google.com/?q=Smile%20Science%20Dental%20Clinic%20Electronic%20City" target="_blank" className="text-xs font-bold text-[#1d5343] mt-3 block hover:underline">
                  Get Directions →
                </a>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}