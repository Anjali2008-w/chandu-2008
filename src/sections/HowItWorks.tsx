import React, { useEffect, useRef, useState } from 'react';
import { STEPS_DATA } from '../data/academyData';

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineFillRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress of this section through the viewport
      const startOffset = windowHeight * 0.7;
      const totalScrollable = containerHeight;
      const scrolled = startOffset - rect.top;

      let progress = scrolled / totalScrollable;
      progress = Math.min(1, Math.max(0, progress));

      // Fill line height
      lineFillRef.current.style.height = `${progress * 100}%`;

      // Determine active step
      const stepElements = containerRef.current.querySelectorAll('.step-item');
      stepElements.forEach((el, index) => {
        const stepRect = el.getBoundingClientRect();
        if (stepRect.top < windowHeight * 0.6) {
          setActiveStepIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-20 lg:py-32 bg-[var(--bg-primary)] border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Sticky Heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="font-mono-tag text-[var(--accent)] block mb-3">
                How It Works &bull; The Altitude Protocol
              </span>
              <h2 className="fluid-h2 text-[var(--text-primary)] mb-6">
                Four stages. Zero guesswork.
              </h2>
              <p className="body-lead text-[var(--text-muted)] mb-8">
                From the moment you reserve your spot to the final summit ridge, every milestone is systematically mapped so you can focus entirely on your rhythm.
              </p>

              <div className="hidden lg:block p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] max-w-sm">
                <span className="font-mono text-xs text-[var(--accent)] block mb-1">
                  Preparation Guarantee
                </span>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Personal coach consultations, WhatsApp group synchronization 30 days prior, and direct gear vetting over video call.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Numbered Steps with vertical fill line */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12">
            {/* Background vertical line */}
            <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-[2px] bg-[var(--border)] -translate-x-1/2" />

            {/* Accent filling vertical line */}
            <div
              ref={lineFillRef}
              className="absolute top-4 left-3 sm:left-4 w-[2px] bg-[var(--accent)] -translate-x-1/2 transition-[height] duration-150 ease-out"
              style={{ height: '0%' }}
            />

            {/* Steps List */}
            <div className="space-y-16 sm:space-y-24">
              {STEPS_DATA.map((step, index) => {
                const isActive = index <= activeStepIndex;
                return (
                  <div
                    key={step.number}
                    className={`step-item relative transition-all duration-500 transform ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'
                    }`}
                  >
                    {/* Step Node Dot */}
                    <div
                      className={`absolute -left-8 sm:-left-12 top-1 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center -translate-x-1/2 ${
                        isActive
                          ? 'border-[var(--accent)] bg-[var(--surface)] text-[var(--accent)]'
                          : 'border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-muted)]'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? 'bg-[var(--accent)]' : 'bg-transparent'
                        }`}
                      />
                    </div>

                    {/* Step Content */}
                    <div>
                      <span className="font-mono text-sm sm:text-base font-semibold text-[var(--accent)] block mb-1">
                        STAGE {step.number}
                      </span>
                      <h3 className="font-fraunces text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] mb-3">
                        {step.title}
                      </h3>
                      <p className="font-manrope text-base text-[var(--text-primary)] font-medium mb-2 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="font-manrope text-sm text-[var(--text-muted)] leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

