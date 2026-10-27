import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Program } from '../types';
import { Button } from './Button';

interface ProgramModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'Intermediate',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border)] radius-card shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Hero image header */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="font-mono-tag px-3 py-1 bg-[var(--accent)] text-white rounded-full">
              {program.difficulty} Difficulty
            </span>
            <h2 id="modal-title" className="font-fraunces text-2xl sm:text-3xl text-[var(--text-primary)] mt-2">
              {program.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
            <div>
              <p className="font-mono-tag text-[var(--text-muted)] text-[10px]">Duration</p>
              <p className="font-manrope font-semibold text-[var(--text-primary)] flex items-center gap-1.5 mt-1">
                <Calendar size={14} className="text-[var(--accent)]" /> {program.days} Days
              </p>
            </div>
            <div>
              <p className="font-mono-tag text-[var(--text-muted)] text-[10px]">Max Altitude</p>
              <p className="font-manrope font-semibold text-[var(--text-primary)] flex items-center gap-1.5 mt-1">
                <TrendingUp size={14} className="text-[var(--accent)]" /> {program.maxAltitude}
              </p>
            </div>
            <div>
              <p className="font-mono-tag text-[var(--text-muted)] text-[10px]">Group Cap</p>
              <p className="font-manrope font-semibold text-[var(--text-primary)] flex items-center gap-1.5 mt-1">
                <Users size={14} className="text-[var(--accent)]" /> {program.cohortSize}
              </p>
            </div>
            <div>
              <p className="font-mono-tag text-[var(--text-muted)] text-[10px]">Price From</p>
              <p className="font-manrope font-semibold text-[var(--accent)] mt-1">
                ₹{program.price.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <p className="body-lead text-[var(--text-muted)] text-sm sm:text-base">
            {program.summary}
          </p>

          {/* Highlights */}
          <div>
            <h3 className="font-fraunces text-lg text-[var(--text-primary)] mb-3">
              Cohort Key Highlights
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {program.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-primary)]">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <div className="pt-4 border-t border-[var(--border)]">
            {submitted ? (
              <div className="p-6 text-center rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
                <CheckCircle2 size={36} strokeWidth={1.5} className="text-[var(--accent)] mx-auto mb-2" />
                <h4 className="font-fraunces text-xl text-[var(--text-primary)]">
                  Application Received
                </h4>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  Our head guide will review your conditioning profile and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="font-fraunces text-lg text-[var(--text-primary)]">
                  Reserve Your Spot in Next Cohort
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tag text-[10px] text-[var(--text-muted)] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border)] radius-btn text-[var(--text-primary)] focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-tag text-[10px] text-[var(--text-muted)] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-primary)] border border-[var(--border)] radius-btn text-[var(--text-primary)] focus:border-[var(--accent)]"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[var(--text-muted)]">
                    No payment charged today. Free date transfers up to 21 days out.
                  </p>
                  <Button type="submit" variant="primary">
                    Submit Application
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

