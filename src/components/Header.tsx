import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Calendar, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'before-after', 'packages', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Before & After', href: '#before-after', id: 'before-after' },
    { label: 'Bridal & Packages', href: '#packages', id: 'packages' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Editorial Top Contact & Announcement Bar */}
      <div className="charcoal-bg text-[#FAFAFA] min-h-[32px] py-1.5 flex items-center justify-between px-4 sm:px-10 text-[10px] letter-spacing-wide uppercase border-b border-[#D4AF37]">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Contact: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span>Mon - Sat: 10:00 AM - 8:00 PM | Sun: Closed</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[9px] gold-text font-bold tracking-widest uppercase">
              Wah Cantt • Barrier No. 2
            </span>
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-emerald-400 hover:text-white transition-colors"
              id="top-bar-whatsapp"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#141414]/98 backdrop-blur-md shadow-2xl py-3 border-b border-[#D4AF37]/40' 
          : 'bg-[#181818] py-4 border-b border-neutral-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between">
          {/* Official Logo & Brand Emblem */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 border-2 gold-border rounded-full flex items-center justify-center overflow-hidden text-[18px] serif font-bold gold-text bg-[#1A1A1A] p-0.5">
              <img 
                src="/logo.jpg" 
                alt="The Pounds Saloon" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors leading-none">
                THE POUNDS
              </span>
              <span className="text-[9px] uppercase letter-spacing-wide gold-text font-bold mt-0.5">
                Saloon • Ladies Premium
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase font-semibold letter-spacing-wide">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-1 transition-all duration-200 ${
                  activeSection === item.id
                    ? 'gold-text border-b-2 gold-border font-bold'
                    : 'text-neutral-300 hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="gold-bg text-[#121212] px-6 py-2.5 text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 shadow-lg transition-all cursor-pointer"
              id="header-book-btn"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="gold-bg text-[#121212] px-3 py-1.5 text-[10px] uppercase font-bold letter-spacing-wide"
              title="Book Appointment"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-300 hover:text-white rounded border border-neutral-700 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden charcoal-bg border-b border-[#D4AF37] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-2 text-xs uppercase font-semibold letter-spacing-wide transition-colors ${
                  activeSection === item.id
                    ? 'gold-text border-b gold-border font-bold'
                    : 'text-neutral-200 hover:text-[#D4AF37]'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="pt-4 border-t border-neutral-800 mt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 gold-bg text-[#121212] text-xs font-bold uppercase letter-spacing-wide shadow-lg"
              >
                Book Your Appointment
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-emerald-400 border border-emerald-500/40 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +92 313 5434169</span>
              </a>

              <div className="text-[10px] text-neutral-400 text-center pt-2 uppercase letter-spacing-wide">
                <p>Barrier No. 2, Main GT Road, Wah Cantt</p>
                <p className="mt-0.5">Mon - Sat: 10:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
