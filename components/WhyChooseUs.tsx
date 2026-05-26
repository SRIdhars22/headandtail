'use client';

import React from 'react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'All-in-One Tech Partner',
      desc: 'No need to handle multiple vendors. We manage your web presence, native mobile apps, and internal business systems under a single reliable roof.',
      icon: (
        <svg className="w-6 h-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Custom-Engineered Solutions',
      desc: "We don't do generic templates. Every CRM, ERP, web app, and database architecture is customized completely around your specific business workflow and operational requirements.",
      icon: (
        <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Security-First Coding',
      desc: 'Your business data is highly sensitive. We implement top-tier encryption, secure API integrations, input validation, and clean-code practices to keep your data safe, private, and fully compliant.',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Built to Scale',
      desc: 'We design software that grows dynamically with you. As your user base expands and transaction volume spikes, our scalable cloud architectures handle the workload seamlessly.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-teal mb-3">Our Edge</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Why Businesses Choose Head &amp; Tail
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-teal to-accent-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 shadow-inner">
                {point.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">{point.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
