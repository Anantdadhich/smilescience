"use client";

import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Custom WhatsApp Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
   
    { label: "About us", path: "/about" },
    { label: "Book Appointment", path: "/book" },
    { label: "For Patients", path: "/patients" },
    { label: "Contact us", path: "/contact" },
     { label: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen 
            ? 'py-2 bg-white/90 backdrop-blur-lg shadow-sm border-b border-[#1d5343]/5' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Group: Logo + Nav */}
          <div className="flex items-center gap-8 xl:gap-14">
            
            {/* Logo Group - ADJUSTED FOR PROPER SPACING AND STACKING */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              {/* Image Container */}
              <div className="relative w-10 h-10 flex items-center justify-center p-0.5 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="Smile Science Dental Clinic logo"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Text Container - Optimized alignment */}
              <div className="flex flex-col justify-center -space-y-1">
                <span className="text-lg font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
                  Smile Science
                </span>
                <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase leading-none">
                  Dentistry
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-6 xl:gap-8">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.path}>
                            <Link 
                                href={item.path}
                                className={`
                                    relative text-sm font-sans font-medium tracking-wide transition-all duration-300 py-2 group
                                    ${isActive ? 'text-[#1d5343] font-bold' : 'text-[#4B5563] hover:text-[#1d5343]'}
                                `}
                            >
                                {item.label}
                                <span className={`
                                  absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#1d5343] transition-all duration-300 ease-out
                                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                `} />
                            </Link>
                        </li>
                      );
                    })}
                </ul>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            
            {/* Desktop Phone */}
            <a href="tel:+916206700442" className="hidden xl:flex items-center gap-2 text-sm font-semibold text-[#1d5343] hover:text-[#153e32] transition-colors">
               <Phone className="w-4 h-4 fill-current" />
               <span className="tracking-wide font-sans">+91 62067 00442</span>
            </a>

            {/* Chat Us Button - Desktop */}
            <a 
              href="https://wa.me/916206700442?text=Hi%20Smile%20Science,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#1d5343] hover:bg-[#153e32] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon />
              <span>Chat Us</span>
            </a>

            {/* Mobile Actions - Buttons made smaller here */}
            <div className="lg:hidden flex items-center gap-2">
              <a 
                href="https://wa.me/916206700442" 
                // CHANGED: w-10 h-10 -> w-9 h-9
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1d5343] text-white shadow-md active:scale-95 transition-transform"
              >
                <WhatsAppIcon />
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                // CHANGED: w-10 h-10 -> w-9 h-9
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[#1A1A1A] active:scale-95 transition-transform hover:bg-gray-50"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#FDFBF0] pt-24 px-6 pb-6 lg:hidden animate-in slide-in-from-top-5 fade-in duration-300 flex flex-col"
        >
          <nav className="flex-1 mt-6 overflow-y-auto">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center justify-between text-xl font-serif py-4 border-b border-[#1d5343]/5 transition-all
                      ${pathname === item.path ? 'text-[#1d5343] pl-4 border-[#1d5343]/20 font-bold' : 'text-[#1A1A1A] hover:text-[#1d5343] hover:pl-4'}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 mb-4">
            

            <a href="tel:08048903967" className="block">
              {/* CHANGED: h-12 -> h-11 */}
              <Button className="w-[80%] bg-[#1A1A1A] hover:bg-black text-white h-11 rounded-xl text-lg font-medium shadow-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 fill-current" /> Call Clinic
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};