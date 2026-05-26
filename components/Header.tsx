'use client';

import React from 'react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-purple to-accent-teal shadow-md shadow-accent-purple/20 transition-transform group-hover:scale-105">
              {/* Custom Tech/Binary SVG Logo */}
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">
              Head <span className="text-accent-teal font-medium">&amp;</span> Tail
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              Core Services
            </a>
            <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              About Us
            </a>
            <a href="#why-choose-us" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              Why Businesses Choose Us
            </a>
          </nav>

          {/* Consultation Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-accent-purple to-accent-teal group-hover:from-accent-purple group-hover:to-accent-teal text-zinc-900 group-hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 cursor-pointer transition-all hover:shadow-lg hover:shadow-accent-purple/20"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                Free Consultation
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
