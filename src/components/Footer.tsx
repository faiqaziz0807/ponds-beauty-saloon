import React from 'react';
import { Phone, Clock, MapPin, MessageCircle, Heart, Instagram, Facebook, Sparkles, Navigation, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-neutral-300 border-t border-neutral-800 relative overflow-hidden">
      {/* Top Gold Hairline Border */}
      <div className="h-[1px] w-full gold-bg opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-0.5 border gold-border">
                <img
                  src="/logo.jpg"
                  alt="The Pounds Saloon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="serif text-xl font-bold tracking-wide text-white block">
                  THE POUNDS SALOON
                </span>
                <span className="text-[10px] gold-text letter-spacing-widest uppercase font-bold">
                  Ladies Salon • Wah Cantt
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Wah Cantt's premier sanctuary for bespoke bridal glamour, luxury hair treatments, and clinical skincare rejuvenation. Exclusively tailored for women with strict privacy and authentic international beauty products.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1C1C1C] hover:gold-bg text-neutral-300 hover:text-[#121212] border border-neutral-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1C1C1C] hover:gold-bg text-neutral-300 hover:text-[#121212] border border-neutral-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#1C1C1C] hover:bg-emerald-600 text-neutral-300 hover:text-white border border-neutral-700 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="serif text-sm font-bold text-white uppercase letter-spacing-wide">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  About Atelier
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  Salon Menu
                </a>
              </li>
              <li>
                <a href="#before-after" onClick={(e) => handleNavClick(e, '#before-after')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  Transformations
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  Bridal Rituals
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-neutral-400 hover:text-[#D4AF37] transition-colors uppercase letter-spacing-wide">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Salon Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="serif text-sm font-bold text-white uppercase letter-spacing-wide">
              Signature Treatments
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • HD & Airbrush Bridal Makeup
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • Brazilian Keratin & Hair Botox
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • 7-Step Medical HydraFacials
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • Honey & Ash Blonde Balayage
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • Spa Pedicure & Gel Nail Art
              </li>
              <li className="hover:text-[#D4AF37] transition-colors cursor-default">
                • Painless Italian Rica Fruit Wax
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="serif text-sm font-bold text-white uppercase letter-spacing-wide">
              Atelier Coordinates
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="font-light">Barrier No. 2, near UBL Bank, Main GT Road, Wah Cantt, Pakistan</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-[#D4AF37] font-semibold transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-light">Mon - Sat: 10:00 AM – 8:00 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold uppercase letter-spacing-wide transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local SEO Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} The Pounds Saloon. All Rights Reserved. Ladies Salon in Wah Cantt.</p>
          <div className="flex items-center gap-2">
            <span>Crafted for the women of Wah Cantt & Taxila</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
