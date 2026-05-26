'use client';

import React from 'react';

interface FooterProps {
  onOpenDemo: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="relative border-t border-zinc-200 bg-zinc-50 text-zinc-800 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-teal/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-200">
          {/* Final CTA Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
              Ready to Automate <span className="text-gradient-teal-blue">&amp; Scale</span> Your Business?
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xl">
              Let&rsquo;s build the digital tools your company needs to lead the market. Share your requirements with our technical team today, and let&rsquo;s turn your ideas into functional, secure, and scaling software.
            </p>
            <button
              onClick={onOpenDemo}
              className="px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-accent-teal to-accent-blue text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-accent-teal/20"
            >
              📅 Schedule a Live Demo
            </button>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6 lg:pl-8">
            <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-zinc-200 shrink-0">
                  <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xs uppercase tracking-wider text-zinc-500 font-semibold">Phone / WhatsApp</span>
                  <a href="https://wa.me/15552345678" target="_blank" rel="noopener noreferrer" className="hover:text-accent-teal transition-colors font-medium">
                    +1 (555) 234-5678
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-zinc-200 shrink-0">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xs uppercase tracking-wider text-zinc-500 font-semibold">Email Support</span>
                  <a href="mailto:contact@headandtailtech.com" className="hover:text-accent-purple transition-colors font-medium">
                    contact@headandtailtech.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4 text-zinc-600 hover:text-zinc-900 transition-colors text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-zinc-200 shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xs uppercase tracking-wider text-zinc-500 font-semibold">Headquarters</span>
                  <span className="font-medium">San Francisco, CA / London, UK</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-zinc-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Head &amp; Tail Technology Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
