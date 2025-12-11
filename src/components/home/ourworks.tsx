"use client"
import React from "react";
import { ImageWithFallback } from "../figma/imagewirtfallback";
import { ArrowUpRight } from "lucide-react";
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const WorkCard = ({
  image,
  title,
  description,
  alt
}: {
  image: string;
  title: string;
  description: string;
  alt: string;
}) => (
  <div className="flex flex-col gap-5 group cursor-pointer">
    <div className="rounded-[2rem] overflow-hidden aspect-[3/4] relative bg-gray-100">
      <ImageWithFallback
        src={image}
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Subtle Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="px-2">
      <h3 className="text-2xl font-serif font-medium text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#1d5343] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  </div>
);

export const OurWorks = () => {
  return (
    <section className="bg-[#F0FDF4] px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
              002 — Transformations
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] text-left max-w-md tracking-tight leading-[1.1]">
              Real Results, <br/>
              <span className="italic text-[#1d5343]">Real Smiles.</span>
            </h2>
          </div>
          
          <p className="text-gray-500 text-sm max-w-xs mb-2 leading-relaxed hidden md:block">
            See how we have transformed smiles across Electronic City using advanced cosmetic and restorative techniques.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-24">
        
        {/* Card 1: Invisalign - Image: Confident smile */}
        <ScrollAnimation delay={0.1}>
          <WorkCard
            image="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1280&auto=format&fit=crop"
            title="Invisalign & Aligners"
            description="Straighten teeth discreetly without metal wires. The clear choice for adults."
            alt="Patient smiling after invisible braces treatment"
          />
        </ScrollAnimation>

        {/* Card 2: Veneers - Image: Close up perfect teeth */}
        <ScrollAnimation delay={0.2}>
          <WorkCard
            image="https://plus.unsplash.com/premium_photo-1702598533345-57ecc9b1992d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9yY2VsYWluJTIwVmVuZWVycyUyMGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
            title="Porcelain Veneers"
            description="Fix gaps, chips, and discoloration instantly with custom-crafted ceramic shells."
            alt="Cosmetic dentistry veneers"
          />
        </ScrollAnimation>

        {/* Card 3: Implants - Image: Happy older adult */}
        <ScrollAnimation delay={0.3}>
          <WorkCard
            image="https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVybWFuZW50JTIwSW1wbGFudHMlMjBkZW50YWx8ZW58MHx8MHx8fDA%3D"
            title="Permanent Implants"
            description="Replace missing teeth with natural-looking, durable implants that last a lifetime."
            alt="Dental implant result"
          />
        </ScrollAnimation>
      </div>

      <ScrollAnimation delay={0.4}>
        <div className="flex flex-col items-center text-center gap-10">
          <div className="w-28 h-28 rounded-full border border-[#1d5343]/20 flex items-center justify-center relative group cursor-pointer hover:bg-white hover:scale-105 transition-all bg-[#FDFBF0] shadow-sm">
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-60">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[#1d5343]"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text
                  fontSize="11"
                  fill="currentColor"
                  fontWeight="bold"
                  letterSpacing="1.8"
                >
                  <textPath
                    href="#circlePath"
                    className="uppercase"
                  >
                    View All Gallery • View All Gallery •
                  </textPath>
                </text>
              </svg>
            </div>
            <ArrowUpRight className="w-8 h-8 text-[#1A1A1A]" />
          </div>

          <div className="max-w-lg space-y-6">
            <p className="text-gray-500 text-base leading-relaxed font-light">
              Expert Dental Care in <strong>Neeladri Nagar, Electronic City</strong>. We combine art and science to give you the confidence you deserve.
            </p>
            <div className="h-px w-12 bg-[#1d5343]/30 mx-auto"></div>
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Smile Science Dentistry
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};