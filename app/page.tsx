'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import BookingModals from '@/components/BookingModals';

export default function Home() {
  const [modalType, setModalType] = useState<'consultation' | 'demo' | null>(null);

  const openConsultation = () => setModalType('consultation');
  const openDemo = () => setModalType('demo');
  const closeModal = () => setModalType(null);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent-purple/30 selection:text-white">
      {/* Top Header */}
      <Header onOpenConsultation={openConsultation} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero
          onOpenConsultation={openConsultation}
          onExploreSolutions={scrollToServices}
        />
        <Services />
        <About />
        <WhyChooseUs />
      </main>

      {/* Footer & Final Call to Action */}
      <Footer onOpenDemo={openDemo} />

      {/* Modal system */}
      <BookingModals
        key={modalType || 'closed'}
        isOpen={modalType !== null}
        type={modalType}
        onClose={closeModal}
      />
    </div>
  );
}
