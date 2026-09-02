import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#181818] border-[0.5px] border-[#D4AF37] text-white px-4 py-3 shadow-2xl text-xs max-w-[220px] flex items-start gap-2 animate-bounce-subtle">
          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold text-[10px] gold-text uppercase letter-spacing-wide">Online Concierge</p>
            <p className="text-[11px] text-neutral-300 font-light mt-0.5">Chat directly on WhatsApp or book an appointment.</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-3">
        {/* Quick Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="w-12 h-12 bg-[#181818] hover:gold-bg text-[#D4AF37] hover:text-[#121212] border-[0.5px] border-[#D4AF37]/60 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          title="Call The Pounds Saloon"
          id="floating-call-btn"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl border-[0.5px] border-emerald-400/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative"
          title="Chat on WhatsApp (+92 313 5434169)"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 gold-bg border border-[#121212] flex items-center justify-center">
            <span className="w-1 h-1 bg-[#121212]" />
          </span>
        </a>
      </div>
    </div>
  );
};
