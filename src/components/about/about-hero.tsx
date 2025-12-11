
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { ImageWithFallback } from '../figma/imagewirtfallback';
import { Award, GraduationCap, MapPin, Stethoscope } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-[#FDFBF0]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#1d5343]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <ScrollAnimation>
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <span className="h-[1px] w-8 bg-[#1d5343]"></span>
                 <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest">
                   Meet Dr. Pranjal
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                The Expert Behind <br/>
                <span className="italic text-[#1d5343]">Your Perfect Smile</span>
              </h1>
              
              <p className="text-[#4B5563] text-lg leading-relaxed mb-8 font-light">
                For over 15 years, Dr. Pranjal has been the trusted dental authority in <strong>Neeladri Nagar</strong> and <strong>Electronic City</strong>. 
                Combining advanced clinical expertise with a gentle touch, he has transformed thousands of smiles—one patient at a time.
              </p>

              {/* Stats / Badges */}
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#1d5343]/10">
                    <GraduationCap className="w-6 h-6 text-[#1d5343] mb-3" />
                    <h3 className="font-bold text-gray-900 text-lg">MDS</h3>
                    <p className="text-xs text-gray-500">Gold Medalist Specialist</p>
                 </div>
                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#1d5343]/10">
                    <Award className="w-6 h-6 text-[#1d5343] mb-3" />
                    <h3 className="font-bold text-gray-900 text-lg">15+ Years</h3>
                    <p className="text-xs text-gray-500">Clinical Excellence</p>
                 </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Doctor Image */}
          <ScrollAnimation delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-200 border-8 border-white shadow-xl relative z-10">
                {/* Replace with Dr. Pranjal's Real Photo */}
                <ImageWithFallback
                  src="/dr.png" 
                  alt="Dr. Pranjal - Best Dentist in Electronic City"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1d5343] rounded-full blur-2xl opacity-20 z-0"></div>
              <div className="absolute top-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-20 z-0"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION (Replacing Generic Values) --- */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
         <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-8">
                "My philosophy is simple: Treat every patient like family."
              </h2>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-12">
                At Smile Science, we don't just fix teeth; we build relationships. Whether you are coming in for a routine checkup or a complex implant procedure, 
                our clinic in <strong>Electronic City Phase 1</strong> is designed to make you feel safe, heard, and cared for.
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#FDFBF0] rounded-full flex items-center justify-center text-[#1d5343]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900">Local Expert</h4>
                  <p className="text-xs text-gray-500">Serving Neeladri Layout & E-City</p>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#FDFBF0] rounded-full flex items-center justify-center text-[#1d5343]">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900">Advanced Tech</h4>
                  <p className="text-xs text-gray-500">Latest Dental Equipment</p>
               </div>
               <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#FDFBF0] rounded-full flex items-center justify-center text-[#1d5343]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900">Patient First</h4>
                  <p className="text-xs text-gray-500">Honest & Transparent Care</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

// Simple Icon Component needed for the grid above
import { Heart } from 'lucide-react';