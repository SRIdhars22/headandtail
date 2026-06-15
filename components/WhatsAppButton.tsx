'use client';

import React, { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for a nice entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90 pointer-events-none'
      }`}
    >
      {/* Tooltip / Message Box */}
      <div className="relative hidden sm:block">
        <div className="whitespace-nowrap bg-white text-zinc-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200/80 shadow-lg pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out flex items-center gap-1.5 glass">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Chat with our team on WhatsApp!</span>
        </div>
      </div>

      {/* Button link container (wrapping group for hover states) */}
      <div className="relative group">
        {/* Tooltip inside group (so hover on button triggers it) */}
        <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-3 whitespace-nowrap bg-white text-zinc-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-zinc-200/80 shadow-xl pointer-events-none opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out flex items-center gap-1.5 glass hidden sm:flex">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Got questions? Chat on WhatsApp!</span>
        </div>

        <a
          href="https://wa.me/919080525007"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl hover:shadow-green-500/40 cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping -z-10 transition-opacity duration-300" />
          <span className="absolute -inset-3 rounded-full bg-[#25D366]/10 animate-pulse -z-10" />

          {/* WhatsApp Icon SVG */}
          <svg
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6 drop-shadow-sm"
            viewBox="0 0 24 24"
          >
            {/* White speech bubble */}
            <path
              fill="#FFFFFF"
              d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2 22l4.27-1.39C7.84 21.36 9.85 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            />
            {/* Green phone receiver */}
            <path
              fill="#25D366"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
