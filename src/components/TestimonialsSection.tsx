import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronDown, CheckCircle, HelpCircle } from 'lucide-react';
import { TESTIMONIALS_DATA, SALON_FAQS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#181818] relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              05 / CLIENT EDITORIALS & REVIEWS
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            TESTIMONIALS • 4.9 ★ RATING
          </span>
        </div>

        {/* Section Header */}
        <div className="text-left mb-14 max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Loved by Women Across <span className="italic gold-text">Wah Cantt</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Read authentic reviews from brides, professionals, and students who trust The Pounds Saloon for their signature looks.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] p-6 border-[0.5px] border-neutral-800 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-neutral-700 group-hover:text-[#D4AF37]/50 transition-colors" />
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-light italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 object-cover border gold-border shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="serif text-sm font-bold text-white truncate">{item.name}</h4>
                  <p className="text-[10px] gold-text uppercase letter-spacing-wide truncate">{item.role} • {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-neutral-800">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold gold-text uppercase letter-spacing-widest block mb-2">
              CLIENT INQUIRIES & POLICIES
            </span>
            <h3 className="serif text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {SALON_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#141414] border-[0.5px] border-neutral-800 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <span className="serif font-semibold text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800 pt-3 animate-in fade-in duration-200 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
