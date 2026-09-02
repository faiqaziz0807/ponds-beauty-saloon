import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, MessageCircle, Phone, CheckCircle2, User, Scissors } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('11:00 AM – 01:00 PM');
  const [stylistPreference, setStylistPreference] = useState('Any Expert Beautician');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES_DATA.find((s) => s.id === preselectedServiceId);
      if (match) {
        setSelectedService(match.title);
      } else {
        setSelectedService(preselectedServiceId); // If it was a package title
      }
    } else if (!selectedService && SERVICES_DATA.length > 0) {
      setSelectedService(SERVICES_DATA[0].title);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM – 12:00 PM (Morning Slot)',
    '12:00 PM – 02:00 PM (Afternoon Slot)',
    '02:00 PM – 04:00 PM (Mid-day Slot)',
    '04:00 PM – 06:00 PM (Evening Slot)',
    '06:00 PM – 08:00 PM (Late Evening Slot)'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    const message = encodeURIComponent(
      `*🌟 NEW APPOINTMENT BOOKING - The Pounds Saloon Wah Cantt*\n\n` +
      `👤 *Client Name:* ${fullName}\n` +
      `📞 *Phone Number:* ${phone}\n` +
      `✨ *Service Requested:* ${selectedService}\n` +
      `📅 *Preferred Date:* ${preferredDate || 'Earliest Available'}\n` +
      `⏰ *Time Slot:* ${preferredTimeSlot}\n` +
      `💇‍♀️ *Stylist Preference:* ${stylistPreference}\n` +
      `📝 *Notes/Requests:* ${notes || 'None'}\n\n` +
      `_Submitted via The Pounds Saloon Website_`
    );

    setTimeout(() => {
      window.open(`https://wa.me/923135434169?text=${message}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181818] border-[0.5px] border-[#D4AF37] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#181818]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border gold-border">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="serif text-lg font-bold text-white leading-tight">
                Reserve an Appointment
              </h3>
              <p className="text-[10px] gold-text uppercase letter-spacing-wide">The Pounds Saloon • Atelier Wah Cantt</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 bg-neutral-800 hover:bg-[#D4AF37] text-neutral-300 hover:text-[#121212] flex items-center justify-center transition-colors text-lg cursor-pointer"
            id="modal-close-btn"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 animate-in zoom-in duration-300">
              <div className="w-14 h-14 bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-4 border gold-border">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="serif text-2xl font-bold text-white mb-2">
                Appointment Requested!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mb-6 max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-white">{fullName}</strong>. We have generated your appointment summary for <strong className="gold-text">{selectedService}</strong> on <strong className="text-white">{preferredDate || 'upcoming date'}</strong>.
              </p>

              <div className="p-4 bg-[#141414] border border-neutral-800 text-left text-xs text-neutral-300 mb-6 space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Salon Location:</span>
                  <span className="text-white font-medium">Barrier No. 2, GT Road, Wah Cantt</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Direct Support:</span>
                  <span className="gold-text font-bold">+92 313 5434169</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Operating Hours:</span>
                  <span className="text-white font-medium">Mon-Sat (10 AM – 8 PM)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-[#333333] text-white hover:bg-[#444444] text-xs font-bold uppercase letter-spacing-wide"
                >
                  Close Window
                </button>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 gold-bg text-[#121212] text-xs font-bold uppercase letter-spacing-wide flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Farooq"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                    Contact Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0313 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                  Select Desired Service or Package *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm cursor-pointer"
                >
                  <optgroup label="Core Atelier Services">
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.startingPrice})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Signature Bridal & Beauty Packages">
                    <option value="The Royal Bridal Affair (Rs. 25,000)">The Royal Bridal Affair (Rs. 25,000)</option>
                    <option value="Party Ready Glamour (Rs. 7,500)">Party Ready Glamour (Rs. 7,500)</option>
                    <option value="Total Hair Revival & Gloss (Rs. 12,000)">Total Hair Revival & Gloss (Rs. 12,000)</option>
                    <option value="The Pounds Signature Pamper Day (Rs. 8,500)">The Pounds Signature Pamper Day (Rs. 8,500)</option>
                  </optgroup>
                  <optgroup label="Consultation">
                    <option value="General Hair & Skin Consultation">Free Hair & Skin Consultation</option>
                  </optgroup>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm cursor-pointer"
                  >
                    {timeSlots.map((ts, i) => (
                      <option key={i} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Stylist & Special Notes */}
              <div>
                <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                  Stylist or Beautician Preference
                </label>
                <select
                  value={stylistPreference}
                  onChange={(e) => setStylistPreference(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm cursor-pointer"
                >
                  <option value="Senior Bridal Makeup Specialist">Senior Bridal Makeup Specialist</option>
                  <option value="Master Hair Colorist & Keratin Expert">Master Hair Colorist & Keratin Expert</option>
                  <option value="Clinical Skincare & HydraFacial Expert">Clinical Skincare & HydraFacial Expert</option>
                  <option value="Any Available Expert Beautician">Any Available Expert Beautician</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-neutral-300 mb-1.5 uppercase letter-spacing-wide">
                  Special Notes or Queries (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any allergies, hair length, event details, or specific preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm resize-none font-light"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 gold-bg text-[#121212] text-xs font-bold uppercase letter-spacing-wide hover:opacity-90 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  id="modal-confirm-booking-btn"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#121212]" />
                  <span>Confirm Reservation via WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-400 text-center uppercase letter-spacing-wide">
                Strict client privacy • Exclusively for Ladies • Female staff only
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
