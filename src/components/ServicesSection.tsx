import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Star, HeartHandshake, Eye, Calendar } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Cuts & Color' },
    { id: 'makeup', label: 'Bridal & Makeup' },
    { id: 'skin', label: 'Facials & Skincare' },
    { id: 'treatments', label: 'Keratin & Rebonding' },
    { id: 'nails', label: 'Nails & Pedicure' },
    { id: 'spa', label: 'Waxing & Spa' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#121212] relative overflow-hidden border-t border-neutral-800">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              02 / ATELIER SERVICES MENU
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            BESPOKE LADIES CARE • WAH CANTT
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-left mb-12 max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Crafted with Artistry, Designed for <span className="italic gold-text">You</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Every treatment at The Pounds Saloon is performed by certified beauty specialists using 100% authentic, dermatologically-approved international formulations.
          </p>

          {/* Filter Tabs with Editorial Tracking */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-[11px] uppercase font-bold letter-spacing-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'gold-bg text-[#121212] shadow-lg'
                    : 'bg-[#1C1C1C] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#D4AF37]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with Editorial Magazine Catalogue Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#181818] border-[0.5px] border-neutral-800 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Image Container with precise aspect ratio */}
              <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30" />
                
                {/* Category & Popular Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase letter-spacing-wide bg-[#121212]/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                    {service.categoryLabel}
                  </span>
                  {service.popular && (
                    <span className="px-2.5 py-0.5 text-[9px] font-black uppercase letter-spacing-widest gold-bg text-[#121212] shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#121212]" /> Featured
                    </span>
                  )}
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 text-[10px] uppercase font-bold letter-spacing-wide bg-black/80 backdrop-blur-sm text-neutral-300 flex items-center gap-1.5 border border-white/10">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Details Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2 gap-2">
                    <h3 className="serif text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {service.shortDesc}
                  </p>

                  {/* Feature Highlights Bullets */}
                  <ul className="space-y-1.5 mb-6 pt-3 border-t border-neutral-800/80">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1 h-1 rounded-full gold-bg shrink-0"></span>
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] uppercase letter-spacing-wide text-neutral-400 block">Starting from</span>
                    <span className="serif text-lg font-bold gold-text">{service.startingPrice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="p-2 text-neutral-300 hover:text-white bg-[#262626] hover:bg-[#333333] transition-colors text-xs font-medium flex items-center gap-1 border border-neutral-700"
                      title="View Full Details"
                      id={`view-details-${service.id}`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="gold-bg text-[#121212] px-4 py-2 text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                      id={`book-service-${service.id}`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181818] border-[0.5px] border-[#D4AF37]/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 border gold-border">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="serif text-white font-semibold text-lg">Customized Beauty Consultations Available</h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-light mt-0.5">
                Not sure which facial or hair treatment suits your skin tone & hair texture? Walk in at Barrier No. 2 for a free expert assessment!
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3.5 gold-bg text-[#121212] text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 transition-all cursor-pointer shadow-lg"
          >
            Free Assessment
          </button>
        </div>

      </div>

      {/* Service Details Modal Popup */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#1C1C1C] border border-[#D4AF37]/50 max-w-lg w-full overflow-hidden shadow-2xl relative">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent" />
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/80 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#121212] transition-colors text-lg"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] gold-text font-bold uppercase letter-spacing-widest">
                  {activeModalService.categoryLabel}
                </span>
                <span className="text-xs text-neutral-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> {activeModalService.duration}
                </span>
              </div>

              <h3 className="serif text-2xl font-bold text-white mb-3">
                {activeModalService.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-light">
                {activeModalService.fullDesc}
              </p>

              <div className="bg-[#141414] p-4 border border-neutral-800 mb-6">
                <h5 className="text-[10px] font-bold text-white uppercase letter-spacing-wide mb-2">
                  What’s Included:
                </h5>
                <ul className="space-y-1.5">
                  {activeModalService.features.map((f, i) => (
                    <li key={i} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gold-bg"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 border-t border-neutral-800">
                <div>
                  <span className="text-[9px] text-neutral-400 block uppercase letter-spacing-wide">Price</span>
                  <span className="serif text-lg font-bold gold-text">{activeModalService.startingPrice}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="px-4 py-2.5 text-xs font-bold uppercase letter-spacing-wide text-neutral-300 bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const sId = activeModalService.id;
                      setActiveModalService(null);
                      onOpenBooking(sId);
                    }}
                    className="px-5 py-2.5 gold-bg text-[#121212] text-xs font-bold uppercase letter-spacing-wide hover:opacity-90 transition-colors flex items-center gap-1.5 shadow-lg"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
