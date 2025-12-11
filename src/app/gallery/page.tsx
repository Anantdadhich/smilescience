"use client"
import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/imagewirtfallback";
import { ArrowUpRight} from "lucide-react";
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from "@/components/ui/button";

const GalleryItem = ({
  image,
  title,
  category,
  description,
  alt,
  index
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  alt: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-4xl overflow-hidden aspect-4/3 relative bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
        <ImageWithFallback
          src={image}
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Content Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-2 text-xs font-medium text-[#1d5343] bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 mb-3">
            {category}
          </div>
          <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
          <p className="text-sm text-white/90 line-clamp-2">{description}</p>
        </div>
        
        {/* Floating Action */}
        <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transition-all duration-500 transform ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <ArrowUpRight className="w-4 h-4 text-[#1d5343]" />
        </div>
      </div>
    </div>
  );
};

const galleryData = [
  {
    id: 1,
    title: "Modern Dental Facility",
    category: "Clinic Interior",
    description: "Our clinic is equipped with a state-of-the-art facility designed for comfort and efficiency.",
    image: "/one.jpeg",
    alt: "Smile Science Dentistry modern facility"
  },
  {
    id: 2,
    title: "Advanced Treatments",
    category: "Treatment Room",
    description: "We provide advanced dental treatments with precision and care, ensuring the best outcomes for our patients.",
    image: "/equip.jpeg",
    alt: "Advanced dental treatment room"
  },
  {
    id: 3,
    title: "High-Tech Equipment",
    category: "Technology",
    description: "We use modern dental technology including digital X-rays and intraoral scanners to ensure accurate treatments.",
    image: "/hightech.jpeg",
    alt: "Modern dental technology equipment"
  },
  {
    id: 4,
    title: "Relaxing Waiting Area",
    category: "Patient Comfort",
    description: "We've created a calming environment for our patients to feel comfortable and at ease.",
    image: "/wait.jpeg",
    alt: "Comfortable dental clinic waiting area"
  }
];

const categories = ["All", "Clinic Interior", "Treatment Room", "Technology", "Patient Comfort"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredGallery = selectedCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF0]">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1d5343]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1d5343]/3 rounded-full blur-3xl" />
        
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-xs font-bold text-[#1d5343] uppercase tracking-widest mb-4 block">
              Gallery — Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-[#1A1A1A] mb-6 tracking-tight leading-[1.1]">
              Our <br/>
              <span className="italic text-[#1d5343]">Facility.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
              Experience modern dentistry in our state-of-the-art facility in Electronic City. 
              Every detail is designed for your comfort and care.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1d5343] mb-1">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Happy Smiles</div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1d5343] mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1d5343] mb-1">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

     

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, index) => (
                <ScrollAnimation key={item.id} delay={index * 0.1}>
                  <GalleryItem
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    alt={item.alt}
                    index={index}
                  />
                </ScrollAnimation>
              ))}
            </div>
          
          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1d5343] px-6 md:px-12 py-20">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Visit Our <span className="italic">Modern Facility</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              See our advanced equipment and comfortable spaces firsthand. Schedule your visit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+916206700442" className="w-full sm:w-auto">
                <Button className="h-14 w-full rounded-full bg-white text-[#1d5343] transition-all hover:bg-gray-100 flex items-center justify-center gap-2 font-bold sm:w-auto sm:px-8">
                  Call +91 62067 00442
                </Button>
              </a>
              <a href="/book" className="w-full sm:w-auto">
                <Button variant="outline" className="h-14 w-full rounded-full border border-white/30 text-white hover:text-white transition-all hover:bg-white/10 font-medium sm:w-auto sm:px-8">
                  Book Consultation
                </Button>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}
