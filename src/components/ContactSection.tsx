import React, { useState } from 'react';
import { Phone, Clock, MapPin, Send, MessageCircle, CheckCircle2, Navigation, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceInterest: 'Hair Styling & Cuts',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Also build a WhatsApp pre-filled text
    const text = encodeURIComponent(
      `*New Appointment / Query from The Pounds Saloon Website*\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✨ *Service:* ${formData.serviceInterest}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || 'Flexible'}\n` +
      `💬 *Note:* ${formData.message || 'None'}`
    );
    
    // Automatically prepare direct WhatsApp link for user convenience
    setTimeout(() => {
      window.open(`https://wa.me/923135434169?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#121212] relative overflow-hidden border-t border-neutral-800">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              06 / ATELIER RESERVATIONS & LOCATION
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            MAIN GT ROAD • WAH CANTT
          </span>
        </div>

        {/* Section Header */}
        <div className="text-left mb-14 max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Contact & <span className="italic gold-text">Location</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            We are located in the heart of Wah Cantt on Main GT Road. Book your appointment online, give us a call, or drop by for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-5 bg-[#181818] border-[0.5px] border-neutral-800 hover:border-[#D4AF37]/60 transition-all group flex flex-col justify-between"
                id="contact-phone-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border gold-border shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase letter-spacing-wide text-neutral-400 font-bold">Call / WhatsApp</h4>
                    <p className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <span className="text-[10px] gold-text uppercase letter-spacing-wide font-bold flex items-center gap-1">Direct Call Now →</span>
              </a>

              {/* Working Hours Card */}
              <div className="p-5 bg-[#181818] border-[0.5px] border-neutral-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border gold-border shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase letter-spacing-wide text-neutral-400 font-bold">Visiting Hours</h4>
                    <p className="text-xs font-bold text-white">Mon - Sat: 10 AM – 8 PM</p>
                  </div>
                </div>
                <span className="text-[10px] text-rose-400 uppercase letter-spacing-wide font-bold">Sunday: Closed</span>
              </div>

            </div>

            {/* Address & Google Maps Direction Card */}
            <div className="p-6 bg-[#181818] border-[0.5px] border-neutral-800">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border gold-border shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] uppercase letter-spacing-widest text-neutral-400 font-bold">Salon Address</h4>
                  <p className="serif text-sm font-semibold text-white mt-1 leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 font-light">
                    Landmark: Near UBL Bank, Barrier No. 2, GT Road, Wah Cantt.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800">
                <a
                  href={BUSINESS_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[180px] py-2.5 px-4 gold-bg text-[#121212] font-bold text-[11px] uppercase letter-spacing-wide flex items-center justify-center gap-2 transition-all shadow-md hover:opacity-90"
                  id="google-maps-btn"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-[#1C1C1C] hover:bg-[#252525] border border-neutral-700 text-white font-bold text-[11px] uppercase letter-spacing-wide flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="border-[0.5px] border-[#D4AF37]/50 shadow-xl h-64 sm:h-72 w-full relative bg-[#1E1E1E]">
              <iframe
                title="The Pounds Saloon Location Wah Cantt"
                src="https://maps.google.com/maps?q=Barrier%20No.%202,%20Main%20GT%20Road,%20Wah%20Cantt,%20Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-[#121212]/95 px-3 py-1.5 border border-[#D4AF37]/40 text-[10px] gold-text font-bold uppercase letter-spacing-wide flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#D4AF37]" /> Barrier No. 2, Main GT Road, Wah Cantt
              </div>
            </div>

          </div>

          {/* Right Column: Appointment & Query Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#181818] p-6 sm:p-8 border-[0.5px] border-neutral-800 shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-neutral-800">
                <span className="text-[10px] font-bold gold-text uppercase letter-spacing-widest block mb-1">
                  APPOINTMENT DESK
                </span>
                <h3 className="serif text-2xl font-bold text-white mb-2">
                  Reserve or Inquire Online
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light">
                  Complete the form below and our salon coordinator will confirm your preferred slot promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#141414] border border-[#D4AF37]/50 text-center animate-in zoom-in duration-300">
                  <div className="w-14 h-14 bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-4 border gold-border">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="serif text-xl font-bold text-white mb-2">
                    Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed font-light">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>! We have received your booking request for <strong className="gold-text">{formData.serviceInterest}</strong>. A WhatsApp message draft is prepared to connect you instantly with our reception desk.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        serviceInterest: 'Hair Styling & Cuts',
                        preferredDate: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold uppercase letter-spacing-wide bg-[#333333] text-white hover:bg-[#444444] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0313 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                        Desired Service
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-xs sm:text-sm cursor-pointer"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Signature Bridal Package">The Royal Bridal Package</option>
                        <option value="Party Ready Glamour">Party Ready Glamour</option>
                        <option value="General Consultation">Free Salon Consultation</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Message Note */}
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                      Special Requests or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your hair length, skin type, event date, or any special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-xs sm:text-sm resize-none font-light"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 gold-bg text-[#121212] font-bold text-[11px] uppercase letter-spacing-wide hover:opacity-90 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    id="submit-contact-form-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-[#121212]" />
                    <span>Confirm Booking & Connect WhatsApp</span>
                  </button>

                  <div className="flex items-center gap-2 justify-center text-[10px] text-neutral-400 pt-2 uppercase letter-spacing-wide">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>Instant confirmation • Exclusively for Ladies</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
