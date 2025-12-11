
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ImageWithFallback } from '../figma/imagewirtfallback'; // Adjust path if needed based on your project structure
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#FDFBF0] overflow-hidden flex items-center pt-32 pb-20">
      
      {/* --- Ambient Background --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT: SEO CONTENT --- */}
          <ScrollAnimation>
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-[1px] w-8 bg-[#1d5343]"></span>
                <span className="text-xs font-bold text-[#1d5343] uppercase tracking-[0.25em]">
                  World-Class Care
                </span>
              </div>

              {/* H1 - High SEO Value */}
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                Comprehensive Dental Services <br/>
                <span className="italic text-[#1d5343]">in Electronic City.</span>
              </h1>

              {/* Description - Local Keywords */}
              <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light max-w-lg">
                From <strong>Painless Root Canals</strong> and <strong>Invisible Aligners</strong> to complete <strong>Smile Makeovers</strong>. 
                We combine advanced technology with gentle care to deliver the best dental outcomes in <strong>Electronic City , Banglore</strong>.
              </p>

              {/* Quick Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Painless Procedures", "Advanced Diagnostics", "Family Friendly"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white border border-[#1d5343]/10 text-sm font-medium text-[#1d5343] shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* --- RIGHT: OPTIMIZED IMAGE --- */}
          <ScrollAnimation delay={0.2}>
            <div className="relative w-full h-[400px] lg:h-[500px]">
               {/* Image Container with Soft Mask */}
               <div 
                  className="w-full h-full rounded-[3rem] overflow-hidden relative z-10 shadow-2xl shadow-[#1d5343]/10"
                  style={{
                    // Creates a soft, premium blend into the background
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
                  }}
               >
                 <ImageWithFallback
                   src="/serv.jpeg"
                   alt="Advanced Dental Services in Electronic City Bangalore"
                   className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                  
                 />
                 
                 {/* Overlay for depth */}
                 <div className="absolute inset-0 bg-[#1d5343] mix-blend-color opacity-10 pointer-events-none" />
               </div>

               {/* Decorative Elements */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1d5343]/10 rounded-full blur-2xl -z-10" />
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100/50 rounded-full blur-2xl -z-10" />
             
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
};