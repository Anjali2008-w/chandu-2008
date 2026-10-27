import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_DATA } from '../data/academyData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-32 bg-[var(--surface)] border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Left Header */}
          <div className="lg:col-span-4">
            <span className="font-mono-tag text-[var(--accent)] block mb-3">
              Frequently Asked Questions
            </span>
            <h2 className="fluid-h2 text-[var(--text-primary)] mb-4">
              Everything you need to know before the pass.
            </h2>
            <p className="body-lead text-[var(--text-muted)] mb-6">
              Clear answers on gear, baseline fitness, permits, and how our small-group safety net operates.
            </p>
            <p className="font-manrope text-sm text-[var(--text-muted)]">
              Got a specific question not covered here? Reach out directly to our mountain desk at{' '}
              <a
                href="mailto:trail@altitude-treks.in"
                className="link-draw font-semibold text-[var(--accent)]"
              >
                trail@altitude-treks.in
              </a>
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8 divide-y divide-[var(--border)]">
            {FAQ_DATA.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg p-2"
                  >
                    <span className="font-fraunces text-lg sm:text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {faq.question}
                    </span>

                    {/* Plus icon rotating 45deg into cross */}
                    <div
                      className={`w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--bg-primary)] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 border-[var(--accent)] text-[var(--accent)]' : 'rotate-0 text-[var(--text-muted)]'
                      }`}
                    >
                      <Plus size={18} strokeWidth={1.5} />
                    </div>
                  </button>

                  {/* Smooth height answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-manrope text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pl-2 pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

