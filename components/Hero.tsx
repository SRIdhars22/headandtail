'use client';

import React from 'react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export default function Hero({ onOpenConsultation, onExploreSolutions }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 flex flex-col justify-center items-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-blue/20 blur-3xl opacity-60 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-accent-teal/15 blur-3xl animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="text-left flex flex-col items-start">
            {/* Subtle top pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-100/80 text-xs font-semibold text-zinc-800 mb-8 hover:border-zinc-300 hover:bg-zinc-200/80 transition-all cursor-pointer shadow-sm"
              onClick={onOpenConsultation}
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse" />
              Full-Cycle IT Development Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              We Code Your Vision. <br />
              <span className="text-gradient-purple-blue">From Head to Tail.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-zinc-600 mb-10 leading-relaxed font-light max-w-xl">
              Transforming complex business ideas into high-performance digital realities. From stunning websites and native mobile apps to powerhouse CRM and ERP systems—we build your complete digital ecosystem, end-to-end.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-blue text-white shadow-xl shadow-accent-purple/20 hover:shadow-2xl hover:shadow-accent-purple/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Get a Free Consultation
              </button>
              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Explore Our Solutions
              </button>
            </div>

            {/* Trust Badges / Mini Social Proof */}
            <div className="mt-12 flex items-center gap-6 text-sm text-zinc-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                99% Client Retention
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-10 lg:mt-0 lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-white/40 glass">
              <img
                src="/tech_hero_illustration.png"
                alt="Head and Tail Tech Solutions"
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-zinc-900/10"></div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-teal rounded-full blur-2xl opacity-40 -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-accent-blue to-accent-purple rounded-full blur-2xl opacity-40 -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
