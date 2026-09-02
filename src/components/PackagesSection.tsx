import React from 'react';
import { Sparkles, Check, Crown, Calendar, Heart, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../data/salonData';

interface PackagesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#121212] relative overflow-hidden border-t border-neutral-800">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              04 / CURATED BRIDAL PACKAGES & RITUALS
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            BRIDAL ATELIER • WAH CANTT
          </span>
        </div>

        {/* Section Header */}
        <div className="text-left mb-14 max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Signature <span className="italic gold-text">Bridal & Beauty</span> Packages
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            All-inclusive pampering bundles designed for brides, wedding guests, and complete luxury self-care days in Wah Cantt.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#181818] border-2 gold-border shadow-2xl'
                  : 'bg-[#161616] border-[0.5px] border-neutral-800 hover:border-[#D4AF37]/50'
              }`}
              id={`package-card-${pkg.id}`}
            >
              {/* Popular Crown Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 text-[9px] font-black uppercase letter-spacing-widest gold-bg text-[#121212] shadow-lg flex items-center gap-1">
                  <Crown className="w-3 h-3" /> Atelier Pick
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="serif text-xl font-bold text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed min-h-[32px] font-light">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-neutral-800 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="serif text-2xl sm:text-3xl font-bold gold-text">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-xs line-through text-neutral-500">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase letter-spacing-wide text-neutral-400 mt-1 block">
                    Duration: <strong className="text-neutral-300">{pkg.duration}</strong>
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase letter-spacing-wide mb-3">
                    Package Inclusions:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full gold-bg shrink-0 mt-1.5"></span>
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800 mt-4">
                <button
                  onClick={() => onOpenBooking(pkg.name)}
                  className={`w-full py-3 text-[11px] uppercase font-bold letter-spacing-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.popular
                      ? 'gold-bg text-[#121212] hover:opacity-90 shadow-lg'
                      : 'bg-[#222222] text-white hover:bg-[#D4AF37] hover:text-[#121212] border border-neutral-700'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Package</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Bridal Consultation Callout */}
        <div className="mt-14 p-6 bg-[#181818] border-[0.5px] border-[#D4AF37]/40 text-center">
          <p className="text-xs sm:text-sm text-neutral-300 font-light">
            Planning a custom multi-day wedding event (Mehndi, Mayun, Barat, Walima)?{' '}
            <button
              onClick={() => onOpenBooking('Custom Wedding Event')}
              className="gold-text underline font-bold uppercase letter-spacing-wide hover:opacity-80 ml-1 cursor-pointer"
            >
              Contact our Bridal Concierge for tailored packages →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
