'use client';

import React from 'react';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
      title: 'Web Development (Static & Dynamic)',
      desc: 'We build lightning-fast, ultra-secure websites that convert casual visitors into paying customers.',
      details: [
        {
          label: 'Static Websites:',
          text: 'Perfect for business profiles, portfolios, and high-converting landing pages that need clean, secure, and blazing-fast performance.',
        },
        {
          label: 'Dynamic Web Apps:',
          text: 'Fully customized, data-driven web applications built with user dashboards, secure databases, and seamless real-time functionality.',
        },
      ],
      color: 'border-zinc-200/60 hover:border-accent-teal/40 hover:shadow-[0_10px_30px_rgba(13,148,136,0.08)]',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: 'Mobile Applications (iOS & Android)',
      desc: "Bring your business straight to your customers' pockets. We design and build intuitive cross-platform and native mobile applications with exceptional UI/UX design, smooth workflows, and offline capabilities.",
      details: null,
      color: 'border-zinc-200/60 hover:border-accent-purple/40 hover:shadow-[0_10px_30px_rgba(147,51,234,0.08)]',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      title: 'Custom CRM Systems',
      desc: 'Stop losing track of your leads. Our tailor-made Customer Relationship Management (CRM) tools centralize your customer data, automate follow-ups, track sales pipelines, and dramatically boost your team\'s conversion rates.',
      details: null,
      color: 'border-zinc-200/60 hover:border-blue-600/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-1.03m7.45-10.858l.707-1.03M12 5.875V3m0 18v-2.875m0-13.062a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75z" />
        </svg>
      ),
      title: 'Enterprise ERP Solutions',
      desc: 'Streamline and automate your entire operations. From inventory tracking and HR management to finance, billing, and supply chain tracking, our robust Enterprise Resource Planning (ERP) systems put total business control right at your fingertips.',
      details: null,
      color: 'border-zinc-200/60 hover:border-indigo-600/40 hover:shadow-[0_10px_30px_rgba(79,70,229,0.08)]',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-teal mb-3">Our Offerings</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Core Technical Services
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-teal to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-zinc-600 mt-5 leading-relaxed">
            A clean, structured breakdown of exactly what we do, engineered to drive growth and operational efficiency for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm ${service.color}`}
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.desc}</p>

                {service.details && (
                  <ul className="space-y-4 border-t border-zinc-100 pt-5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-zinc-500 leading-relaxed">
                        <strong className="text-zinc-800 block mb-1 font-semibold">{detail.label}</strong>
                        {detail.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
