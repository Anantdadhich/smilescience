"use client";

import { useState } from 'react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
 
  {
    question: "Do you accept dental insurance?",
    answer: "We accept most major insurance plans and can assist you with the pre-authorization paperwork to maximize your benefits. Please bring your policy details, and our front desk will handle the rest."
  },
    {
    question: "How often should I get a dental cleaning?",
    answer: "We recommend a professional teeth cleaning every 6 months to prevent cavities, gum disease, and tartar buildup. Patients with sensitive gums or a history of gum infections may need more frequent cleanings. Regular cleanings help maintain long-term oral health."
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer: "If you experience severe tooth pain, swelling, bleeding, a knocked-out tooth, or a broken crown, contact us immediately. We offer same-day emergency dental appointments in Electronic City for quick relief and treatment."
  },
  {
    question: "Are teeth whitening treatments safe?",
    answer: "Yes, our professional teeth whitening treatments are 100% safe and deliver faster, more even results compared to over-the-counter kits. We use enamel-safe technology that brightens your smile while protecting your teeth and gums."
  },
  {
    question: "How long do dental crowns and bridges last?",
    answer: "With proper oral hygiene, our zirconia and ceramic crowns can last 10–15 years or more. We guide you on care routines to extend their lifespan. Regular checkups help ensure your crown or bridge stays intact and functional."
  },
  {
    question: "Can I fix gaps or crooked teeth without braces?",
    answer: "Yes. We offer clear aligners, cosmetic bonding, and veneers to correct gaps and misalignments without metal braces. During your consultation, we evaluate your smile and suggest the best solution based on your dental structure and goals."
  },
  {
    question: "Do you offer smile makeover treatments?",
    answer: "Yes. Our smile makeover services include veneers, crowns, whitening, gum contouring, and digital smile designing. This allows you to preview your new smile before starting treatment, ensuring predictable results."
  },
  {
    question: "Is teeth sensitivity treatable?",
    answer: "Yes. Sensitivity is commonly caused by enamel wear, gum recession, or cavities. We diagnose the root cause and provide treatments like desensitizing agents, fluoride therapy, bonding, or gum coverage procedures to eliminate sensitivity."
  },
  {
    question: "How do I know which dental treatment is right for me?",
    answer: "We provide a thorough oral examination using digital X-rays, intraoral cameras, and diagnostic tools. Based on your oral condition, lifestyle, and goals, we create a personalized treatment plan tailored to your needs."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`border-b border-[#1d5343]/10 last:border-0 transition-all duration-300 ${isOpen ? 'bg-[#FDFBF0]/50 rounded-2xl px-4 -mx-4' : 'bg-transparent px-0'}`}
    >
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <h3 className={`text-lg md:text-xl font-serif font-medium transition-colors ${isOpen ? 'text-[#1d5343]' : 'text-[#1A1A1A] group-hover:text-[#1d5343]'}`}>
          {question}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#1d5343] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#1d5343]/10 group-hover:text-[#1d5343]'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-relaxed text-base pr-8 font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 md:px-12 py-24 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
              Patient Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] tracking-tight mb-4">
              Common Questions <span className="italic text-[#1d5343]">Answered</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Clear answers about our treatments, pricing, and clinic policies to help you make informed decisions in Electronic City.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="bg-white rounded-[2.5rem] p-6 md:p-12 border border-[#1d5343]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                {...faq} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
              />
            ))}
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500 text-sm">Have a specific question?</p>
            <a 
              href="https://wa.me/916206700442" 
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#1A1A1A] text-white font-semibold hover:bg-[#1d5343] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};