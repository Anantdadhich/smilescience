"use client"
import { ArrowRight, Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
  className?: string;
}

export const Footer = () => {
  
  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
 
    { label: 'For Patients', href: '/patients' },
    { label: 'Book Appointment', href: '/book' },
    { label: 'Contact', href: '/contact' },
       { label: 'Gallery', href: '/gallery' },
  ];

  // Trimmed list to make footer shorter
  const serviceLinks: FooterLink[] = [
    { label: 'Root Canal Treatment', href: '/services/rootcanal' },
    { label: 'Dental Implants', href: '/services/dentalimplant' },
    { label: 'Crowns & Bridges', href: '/services/dentalcrowns' },
    { label: 'Cosmetic Dentistry', href: '/services/cosmetic' },
    { label: 'Braces & Aligners', href: '/services/braces' },
    { label: 'Teeth Whitening', href: '/services/whitening' },
    { label: 'Professional Cleaning', href: '/services/cleaning' },
    { label: 'View All Services', href: '/services', className: 'font-semibold text-[#1d5343] hover:underline' }
  ];

  return (
    <footer className="bg-[#FDFBF0] pt-16 pb-8 font-sans border-t border-[#1d5343]/5">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
           
           {/* --- COLUMN 1: BRAND & SOCIALS --- */}
           <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-1 group w-fit">
                <div className="relative w-8 h-8">
                  <Image 
                    src="/logo.png" 
                    alt="Smile Science Dental Clinic Logo" 
                    width={30} 
                    height={30} 
                    className="object-contain"
                  />
                </div>
                <span className="text-md font-bold text-[#1A1A1A] group-hover:text-[#1d5343] transition-colors">
                  Smile Science Dentistry
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-[#4B5563] text-sm leading-relaxed max-w-[280px]">
                Expert dental care in Electronic City. Painless treatments, modern technology, and compassionate service.
              </p>

              {/* Button */}
              <Link href="/book" className="inline-block">
                <button className="group bg-[#1d5343] text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all hover:bg-[#153e32] hover:shadow-lg hover:-translate-y-0.5">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Social Icons (Moved Here) */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: Instagram, href: "https://instagram.com" },
                  { icon: Facebook, href: "https://facebook.com" },
                  { icon: Linkedin, href: "https://linkedin.com" }
                ].map((Social, idx) => (
                  <a 
                    key={idx} 
                    href={Social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-[#1d5343]/10 rounded-full flex items-center justify-center text-[#4B5563] hover:bg-[#1d5343] hover:text-white hover:border-[#1d5343] transition-all duration-300"
                  >
                    <Social.icon className="w-4 h-4" strokeWidth={1.5} /> 
                  </a>
                ))}
              </div>
           </div>

           {/* --- COLUMN 2: QUICK LINKS --- */}
           <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Quick Links</h4>
              <ul className="space-y-2">
                 {quickLinks.map((item) => (
                   <li key={item.label}>
                     <Link href={item.href} className={`text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium ${item.className || ''}`}>
                       {item.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* --- COLUMN 3: SERVICES --- */}
           <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Our Services</h4>
              <ul className="space-y-2">
                 {serviceLinks.map((item) => (
                   <li key={item.label}>
                     <Link href={item.href} className={`text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium ${item.className || ''}`}>
                       {item.label}
                     </Link>
                   </li>
                 ))}
              </ul>
           </div>

           {/* --- COLUMN 4: CONTACT --- */}
           <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#1A1A1A] text-base font-serif">Contact Info</h4>
              <div className="space-y-4">
                 {/* Address */}
                 <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                    <div>
                       <p className="text-[#4B5563] text-sm leading-relaxed">
                          5th Floor, 224, 3rd Cross Road, Neeladri Nagar, Above ICICI Bank, Electronic City Phase 1, Karnataka 560100
                       </p>
                    </div>
                 </div>

                 {/* Phone */}
                 <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      
                       <a href="tel:+916206700442" className="text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium block">
                          +91 62067 00442
                       </a>
                       <a href="tel:+919023555755" className="text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium block">
                          +91 9023555755
                       </a>
                    </div>
                 </div>

                 {/* Email */}
                 <div className="flex gap-3 items-start">
                    <Mail className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                    <a href="mailto:drpranjal@smilesciencedentistry.in" className="text-[#4B5563] hover:text-[#1d5343] transition-colors text-sm font-medium">
                        drpranjal@smilesciencedentistry.in
                    </a>
                 </div>

                 {/* Hours */}
                 <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-[#1d5343] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                       <p className="text-[#4B5563] text-sm font-medium">Mon-Sat: 11:30 AM - 8:30 PM</p>
                       <p className="text-[#4B5563] text-sm font-medium">Sun: 11:30 AM - 6:00 PM</p>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px w-full bg-[#1d5343]/10 mb-6"></div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <p className="text-[#4B5563] text-xs font-medium">
             © {new Date().getFullYear()} Smile Science Dentistry Dental Clinic. All rights reserved.
           </p>

           <a 
             href="https://comacks.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-[#4B5563] text-xs hover:text-[#1d5343] transition-colors"
           >
             Powered by <span className="font-bold">Comacks</span>
           </a>
        </div>

      </div>
    </footer>
  );
};