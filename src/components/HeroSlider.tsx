import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Sparkles, ShieldCheck, Award, MessageCircle, Star, MapPin } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/salonData';

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBeforeAfter = () => {
    const el = document.getElementById('before-after');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative w-full bg-[#121212] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience & Editorial Texture */}
      <div className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center">
        
        {/* Carousel Background with Deep Editorial Dark Grading */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform', transitionDuration: '1000ms' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/85" />
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at center, #D4AF37 0%, transparent 70%)' }} />
          </div>
        ))}

        {/* Hero Editorial Composition */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="w-full lg:w-3/5 text-left relative">
            {/* Editorial Gold Hairline Rule */}
            <div className="w-24 h-[1px] gold-bg opacity-50 mb-6 hidden sm:block"></div>

            {/* Editorial Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border gold-border text-[#D4AF37] text-[10px] uppercase font-bold letter-spacing-wide mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{HERO_SLIDES[currentSlide].badge} • WAH CANTT</span>
            </div>

            {/* Large Magazine-Scale Headline */}
            <h1 className="serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6 drop-shadow-2xl">
              Unveil Your <br />
              <span className="italic gold-text">Inner Beauty</span>
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-xl font-light leading-relaxed mb-8">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>

            {/* Sharp Editorial Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="gold-bg text-[#121212] px-8 py-4 text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                id="hero-book-now-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={scrollToServices}
                className="charcoal-bg text-white px-7 py-4 text-[11px] uppercase font-bold letter-spacing-wide border border-neutral-700 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer"
                id="hero-explore-services-btn"
              >
                Explore Services
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border gold-border gold-text px-6 py-4 text-[11px] uppercase font-bold letter-spacing-wide hover:bg-[#D4AF37] hover:text-[#121212] transition-all flex items-center gap-2"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Micro-Badges */}
            <div className="flex items-center gap-6 mt-10 pt-6 border-t border-neutral-800/80 text-[11px] text-neutral-400 uppercase letter-spacing-wide">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Private Ladies Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span>4.9★ Google Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Framed Showcase Frame with Gold Inset */}
          <div className="w-full lg:w-2/5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] p-2.5 border-[0.5px] border-[#D4AF37] bg-[#1A1A1A]/80 shadow-2xl">
              <div className="w-full h-full bg-[#2A2A2A] relative overflow-hidden group">
                <img
                  src={HERO_SLIDES[currentSlide].image}
                  alt="Editorial Hair and Bridal Artistry"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase letter-spacing-wide gold-text font-bold block mb-1">
                    Editorial Feature
                  </span>
                  <p className="serif text-white text-base sm:text-lg italic leading-tight">
                    {HERO_SLIDES[currentSlide].title}
                  </p>
                </div>
              </div>

              {/* Gold Stamp Badge */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 gold-bg rounded-full flex items-center justify-center text-[#121212] p-2 text-[9px] uppercase font-black leading-tight text-center rotate-12 shadow-2xl border-2 border-[#121212]">
                Since 2023 Excellence
              </div>
            </div>
          </div>

        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-[#1A1A1A] border border-[#D4AF37]/50 hover:bg-[#D4AF37] text-white hover:text-[#121212] transition-all shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-[#1A1A1A] border border-[#D4AF37]/50 hover:bg-[#D4AF37] text-white hover:text-[#121212] transition-all shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-8 h-1 bg-[#D4AF37]'
                  : 'w-3 h-1 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Editorial 4-Column Feature Strip (Directly extracted from Design HTML) */}
      <div className="w-full charcoal-bg border-t border-[#D4AF37] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1 */}
        <div 
          onClick={scrollToServices}
          className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[#D4AF37]/20 flex flex-col justify-center hover:bg-[#222222] transition-colors cursor-pointer group"
        >
          <span className="gold-text text-[10px] uppercase font-bold letter-spacing-wide mb-2 block">
            01. Hair Artistry
          </span>
          <h3 className="text-white serif text-lg sm:text-xl group-hover:text-[#D4AF37] transition-colors">
            Styling & Color
          </h3>
          <p className="text-[#FAFAFA] opacity-60 text-[11px] mt-2 leading-relaxed font-light">
            Expert treatments including Keratin, Rebonding, and bespoke Balayage.
          </p>
        </div>

        {/* Col 2 */}
        <div 
          onClick={scrollToServices}
          className="p-6 sm:p-8 border-b sm:border-b-0 lg:border-r border-[#D4AF37]/20 flex flex-col justify-center hover:bg-[#222222] transition-colors cursor-pointer group"
        >
          <span className="gold-text text-[10px] uppercase font-bold letter-spacing-wide mb-2 block">
            02. Aesthetics
          </span>
          <h3 className="text-white serif text-lg sm:text-xl group-hover:text-[#D4AF37] transition-colors">
            Skincare & Facials
          </h3>
          <p className="text-[#FAFAFA] opacity-60 text-[11px] mt-2 leading-relaxed font-light">
            Revitalizing HydraFacials and treatments designed for the modern woman's skin.
          </p>
        </div>

        {/* Col 3: Transformation Box */}
        <div 
          onClick={scrollToBeforeAfter}
          className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[#D4AF37]/20 flex flex-col justify-center bg-[#202020] hover:bg-[#252525] transition-colors cursor-pointer group"
        >
          <span className="gold-text text-[10px] uppercase font-bold letter-spacing-wide mb-2 block">
            03. Transformation
          </span>
          <div className="flex gap-3 items-center mt-1">
            <div className="w-12 h-14 bg-neutral-800 border border-neutral-700 relative overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=150&auto=format&fit=crop"
                alt="Before"
                className="w-full h-full object-cover filter grayscale"
              />
              <span className="absolute bottom-0.5 left-0.5 text-[7px] bg-black/80 px-1 text-white uppercase font-bold">
                Before
              </span>
            </div>
            <div className="w-[1px] h-10 gold-bg opacity-70"></div>
            <div className="w-12 h-14 bg-neutral-800 border gold-border relative overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=150&auto=format&fit=crop"
                alt="After"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 left-0.5 text-[7px] gold-bg px-1 text-[#121212] uppercase font-black">
                After
              </span>
            </div>
            <div className="ml-1">
              <h4 className="text-white serif text-sm group-hover:text-[#D4AF37] transition-colors">
                Result Driven
              </h4>
              <p className="text-[#FAFAFA] opacity-60 text-[10px]">Keratin & Glass Skin</p>
            </div>
          </div>
        </div>

        {/* Col 4: Visit Us */}
        <div className="p-6 sm:p-8 flex flex-col justify-center gold-bg">
          <span className="text-[#1A1A1A] text-[10px] uppercase font-black letter-spacing-wide mb-2 block">
            Visit Us
          </span>
          <div className="text-[#1A1A1A] text-[11px] leading-relaxed font-bold">
            Barrier No. 2, Near UBL Bank,<br />
            Main GT Road, Wah Cantt,<br />
            Pakistan
          </div>
          <a
            href={BUSINESS_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-[10px] underline uppercase font-black tracking-widest text-[#1A1A1A] hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>View Map</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};

