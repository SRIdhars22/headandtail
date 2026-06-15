'use client';

import React, { useState } from 'react';

interface BookingModalsProps {
  isOpen: boolean;
  type: 'consultation' | 'demo' | null;
  onClose: () => void;
}

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '11:00 AM - 12:00 PM',
  '02:00 PM - 03:00 PM',
  '04:00 PM - 05:00 PM',
];

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export default function BookingModals({ isOpen, type, onClose }: BookingModalsProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [tomorrowDate] = useState(getTomorrowDateString);
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    date: getTomorrowDateString(),
    timeSlot: timeSlots[0],
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !type) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit booking. Please try again.');
      }

      setStep('success');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl border border-zinc-200 text-zinc-900 animate-float">
        {/* Glow effect */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors p-2 rounded-full hover:bg-zinc-100"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'form' ? (
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-zinc-900">
              {type === 'consultation' ? 'Get a Free Consultation' : '📅 Schedule a Live Demo'}
            </h3>
            <p className="text-sm text-zinc-500 mb-6">
              {type === 'consultation'
                ? 'Fill out the form below and our technical leads will analyze your requirements.'
                : 'Book a 1-on-1 walkthrough session with our lead system architects.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="John Doe"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="john@company.com"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    disabled={isSubmitting}
                    placeholder="+91 90805 25007"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Acme Corporation"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {type === 'demo' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Select Date
                    </label>
                    <input
                      type="date"
                      required
                      disabled={isSubmitting}
                      min={tomorrowDate}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:bg-white focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      disabled={isSubmitting}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 focus:outline-none focus:bg-white focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Tell us about your digital project vision or requirements..."
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all text-sm resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              )}

              {error && (
                <div className="p-3 text-xs bg-rose-50 border border-rose-100 text-rose-600 rounded-lg flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${
                  type === 'consultation'
                    ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:opacity-90'
                    : 'bg-gradient-to-r from-accent-teal to-accent-blue text-white hover:opacity-90'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  type === 'consultation' ? 'Send Request' : 'Confirm Live Demo Booking'
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-accent-teal to-accent-purple rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent-purple/25 animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-zinc-900">Awesome, {formData.name.split(' ')[0]}!</h3>
            <p className="text-zinc-600 max-w-sm mb-6 leading-relaxed">
              {type === 'consultation'
                ? `We have received your request. Our technical lead will reach out to you at ${formData.email} or ${formData.phone} within 24 hours.`
                : `Your Live Demo is confirmed for ${formData.date} at ${formData.timeSlot}. A calendar invitation has been sent to ${formData.email}.`}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full border border-zinc-200 text-sm font-semibold hover:bg-zinc-50 transition-colors text-zinc-800"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
