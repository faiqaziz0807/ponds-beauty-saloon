/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PackagesSection } from './components/PackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#FAFAFA] flex flex-col selection:bg-[#D4AF37] selection:text-[#121212]">
      {/* Sticky Header with Navigation & Top Bar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Full-width 5-second Auto-Slider Hero */}
        <HeroSlider onOpenBooking={() => handleOpenBooking()} />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Services Showcase (Strict matching imagery & content) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSection onOpenBooking={() => handleOpenBooking()} />

        {/* Bridal & Curated Packages */}
        <PackagesSection onOpenBooking={handleOpenBooking} />

        {/* Real Reviews & FAQs */}
        <TestimonialsSection />

        {/* Location, Contact, Google Maps & Quick Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={selectedServiceId}
      />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

