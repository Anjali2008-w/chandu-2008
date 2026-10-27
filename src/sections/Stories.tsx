import React from 'react';
import { Quote } from 'lucide-react';
import { STORIES_DATA } from '../data/academyData';

export const Stories: React.FC = () => {
  return (
    <section
      id="stories"
      className="py-20 lg:py-32 bg-[var(--surface)] border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono-tag text-[var(--accent)] block mb-3">
            Stories &bull; Athlete Dispatches
          </span>
          <h2 className="fluid-h2 text-[var(--text-primary)] mb-4">
            From university labs to 4,000 meters.
          </h2>
          <p className="body-lead text-[var(--text-muted)]">
            Read unfiltered field notes from college students and young professionals who completed their first high-altitude expeditions with Altitude.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative max-w-4xl mx-auto space-y-8 pb-16">
          {STORIES_DATA.map((story, index) => {
            // Slight top offset and scale effect for stacking
            const topOffset = 100 + index * 24;

            return (
              <div
                key={story.id}
                style={{
                  top: `${topOffset}px`,
                }}
                className="sticky radius-card bg-[var(--bg-primary)] border border-[var(--border)] p-8 sm:p-12 shadow-xl transition-all duration-300 transform"
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <Quote size={20} strokeWidth={1.5} className="text-[var(--accent)]" />
                  </div>

                  <span className="font-mono-tag px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--accent)]">
                    {story.program}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-fraunces text-xl sm:text-2xl md:text-3xl text-[var(--text-primary)] font-medium leading-relaxed mb-8">
                  &ldquo;{story.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[var(--border)] gap-2">
                  <div>
                    <h3 className="font-manrope font-bold text-base sm:text-lg text-[var(--text-primary)]">
                      {story.name}
                    </h3>
                    <p className="font-manrope text-xs sm:text-sm text-[var(--text-muted)]">
                      {story.role}
                    </p>
                  </div>

                  <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    {story.cohort}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

