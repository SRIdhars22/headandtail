'use client';

import React from 'react';

export default function About() {
  const steps = [
    { num: '01', name: 'Concept & Brainstorming', stage: 'Head', desc: 'Transforming raw ideas into technical requirements.' },
    { num: '02', name: 'Architecture & Design', stage: 'Body', desc: 'Crafting UI/UX prototypes and robust database architectures.' },
    { num: '03', name: 'Full-Stack Engineering', stage: 'Body', desc: 'Clean, security-first, high-performance coding.' },
    { num: '04', name: 'Security & QA Testing', stage: 'Body', desc: 'Rigorous stress, compliance, and regression testing.' },
    { num: '05', name: 'Deployment & Launch', stage: 'Tail', desc: 'Seamless migration to cloud infrastructure.' },
    { num: '06', name: 'Ongoing Maintenance', stage: 'Tail', desc: 'Continuous scaling, updates, and threat monitoring.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50 border-y border-zinc-200/50">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Narrative Content */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-accent-purple">About Us</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              About Head &amp; Tail Technology Company
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full" />

            <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
              <p className="border-l-2 border-accent-purple pl-4 italic text-zinc-800 font-medium">
                &ldquo;Our Philosophy: At Head &amp; Tail, we believe enterprise-grade technology should be elegant, simple to use, and entirely focused on ROI.&rdquo;
              </p>
              <p>
                We are a full-cycle IT solutions partner. The name **Head &amp; Tail** represents our core promise: we handle the entire lifecycle of your project.
              </p>
              <p>
                From the very initial concept brainstorming (the &ldquo;Head&rdquo;) to the final deployment, security testing, and post-launch maintenance (the &ldquo;Tail&rdquo;), our expert engineering team ensures a flawless delivery.
              </p>
            </div>
          </div>

          {/* Lifecycle Visual Timeline Diagram */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-md relative">
              <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-accent-purple animate-ping" />
                The Head-to-Tail Lifecycle
              </h3>

              <div className="relative border-l-2 border-zinc-200 ml-3 space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-8 group">
                    {/* Circle Node */}
                    <div className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-zinc-200 group-hover:border-accent-purple transition-all duration-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 group-hover:bg-accent-purple transition-all" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-accent-purple transition-colors flex items-center gap-2">
                        <span className="text-xs text-zinc-400 font-mono">{step.num}</span>
                        {step.name}
                      </h4>
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-2xs font-medium border uppercase tracking-wider self-start sm:self-auto ${
                        step.stage === 'Head'
                          ? 'bg-accent-purple/10 text-accent-purple border-accent-purple/20'
                          : step.stage === 'Tail'
                          ? 'bg-accent-teal/10 text-accent-teal border-accent-teal/20'
                          : 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                      }`}>
                        {step.stage} stage
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
