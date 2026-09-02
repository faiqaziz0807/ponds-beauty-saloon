import React from 'react';
import { Sparkles, Check, Heart, Award, Shield, Users, Clock, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      num: "01",
      title: "100% Female-Staffed Sanctuary",
      desc: "Absolute privacy and modesty guaranteed in our dedicated ladies-only suites."
    },
    {
      num: "02",
      title: "Original Branded Products",
      desc: "Strictly authentic L’Oréal, Olaplex, Dermalogica, and Janssen formulas."
    },
    {
      num: "03",
      title: "Master Certified Stylists",
      desc: "Trained in contemporary bridal aesthetics, skin science, and modern hair color."
    },
    {
      num: "04",
      title: "Hospital-Grade Sanitization",
      desc: "Hospital-grade UV sterilization for all scissors, nail implements, and facial tips."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#181818] relative overflow-hidden border-t border-[#262626]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-14">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              01 / ABOUT OUR ATELIER
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            EST. 2023 • WAH CANTT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Fine Editorial Gold Border Inset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Showcase Image in Editorial Frame */}
              <div className="relative border-[0.5px] border-[#D4AF37] p-2.5 bg-[#141414] shadow-2xl group">
                <div className="relative h-[380px] sm:h-[460px] overflow-hidden bg-[#242424]">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                    alt="The Pounds Saloon Atmosphere"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent" />
                  
                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#1A1A1A]/95 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                    <div>
                      <h4 className="text-white serif text-sm font-semibold">Wah Cantt's Premier Ladies Salon</h4>
                      <p className="text-[11px] text-neutral-400">Barrier No. 2 • Main GT Road • Certified Artistry</p>
                    </div>
                    <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  </div>
                </div>
              </div>

              {/* Secondary Floating Emblem Stamp */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-[#121212] p-1 border-2 gold-border shadow-2xl flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="The Pounds Saloon Crest"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-6">
              Where Elegance Meets Excellence in <span className="italic gold-text">Wah Cantt</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              Welcome to <strong className="text-white font-semibold">The Pounds Saloon</strong>, the premier luxury haven for women's beauty, grooming, hair artistry, and clinical skincare in Wah Cantt. Located conveniently on Main GT Road near UBL Bank at Barrier No. 2, we offer a tranquil, opulent space designed exclusively for modern women.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
              Whether you are a bride preparing for your once-in-a-lifetime wedding day, seeking restorative Brazilian Keratin and Balayage color for your hair, or indulging in deep HydraFacial skin therapy, our certified master beauticians deliver personalized treatments that accentuate your natural grace.
            </p>

            {/* Core Values Grid with Editorial Numbering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#202020] border-l-2 gold-border flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold letter-spacing-widest gold-text">
                      {item.num}
                    </span>
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Action and Location summary */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800">
              <button
                onClick={onOpenBooking}
                className="gold-bg text-[#121212] px-7 py-3.5 text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Your Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={BUSINESS_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-[11px] uppercase font-bold letter-spacing-wide text-neutral-300 hover:text-white bg-[#222222] border border-neutral-700 hover:border-[#D4AF37] transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Visit At Barrier No. 2</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

