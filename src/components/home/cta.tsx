"use client"

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CalendarCheck } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      
      {/* --- BACKGROUND DESIGN --- */}
      {/* We use the Deep Brand Green to create a 'Premium Box' feel */}
      <div className="absolute inset-0 bg-[#1d5343]">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
        
        {/* Abstract Shapes/Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollAnimation>
          
     
          {/* Headline - Mixed Typography */}
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
            Stop hiding your smile. <br />
            <span className="font-serif italic text-white/90">Start living confidently.</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Expert care in Electronic City is just one click away. 
            Join the Smile Science Dentistry family today.
          </p>

          {/* Buttons - High Contrast */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            
            {/* Primary Action */}
            <a href="/book">
              <Button className="group bg-white text-[#1d5343] rounded-full pl-8 pr-2 h-[64px] min-w-[240px] text-base font-semibold hover:bg-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between">
                <span className="ml-1">Book Appointment</span>
                <div className="w-[48px] h-[48px] bg-[#1d5343] rounded-full flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform duration-300">
                   <CalendarCheck className="w-5 h-5" />
                </div>
              </Button>
            </a>

            {/* Secondary Action */}
            <a href="tel:+916206700442">
              <Button 
                variant="outline" 
                className="group border border-white/20 text-white hover:text-white bg-transparent rounded-full px-8 h-[64px] text-base font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                <span>+91 62067 00442</span>
              </Button>
            </a>
            
          </div>
          
          <p className="mt-8 text-white/40 text-xs tracking-widest uppercase font-semibold">
            No Hidden Fees • Instant Confirmation
          </p>

        </ScrollAnimation>
      </div>
    </section>
  );
};