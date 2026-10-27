import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/academyData';
import { Program } from '../types';

interface FeaturedTreksProps {
  onSelectProgram: (program: Program) => void;
}

export const FeaturedTreks: React.FC<FeaturedTreksProps> = ({ onSelectProgram }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply GSAP pinned horizontal scroll on desktop (> 1024px)
    const isDesktop = window.innerWidth >= 1024;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || hasReducedMotion) return;

    const win = window as any;
    if (win.gsap && win.ScrollTrigger && containerRef.current && trackRef.current) {
      const gsap = win.gsap;
      const track = trackRef.current;
      const scrollDistance = track.scrollWidth - window.innerWidth + 120;

      const st = gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollDistance + 200}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        if (st.scrollTrigger) st.scrollTrigger.kill();
      };
    }
  }, []);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Moderate':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Hard':
        return 'bg-[var(--accent)]/20 text-[var(--accent)] border-[var(--accent)]/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section
      id="featured-treks"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[var(--surface)] py-20 lg:py-24 border-t border-[var(--border)] transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono-tag text-[var(--accent)] block mb-3">
            Featured Treks &bull; High-Altitude Cohorts
          </span>
          <h2 className="fluid-h2 text-[var(--text-primary)]">
            Five classic trails. No crowds.
          </h2>
        </div>
        <p className="font-manrope text-sm sm:text-base text-[var(--text-muted)] max-w-md">
          Scroll vertically to inspect each route. Every cohort is capped at 10 trekkers with guaranteed dates.
        </p>
      </div>

      {/* Horizontal Scroll Track (Pinned on Desktop, Swipeable on Mobile) */}
      <div
        ref={trackRef}
        className="flex gap-8 px-6 lg:px-16 overflow-x-auto lg:overflow-visible no-scrollbar pb-6 lg:pb-0"
      >
        {PROGRAMS_DATA.map((trek) => (
          <div
            key={trek.id}
            data-cursor="view"
            onClick={() => onSelectProgram(trek)}
            className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] group cursor-pointer"
          >
            {/* Card Frame with Radius 20px */}
            <div className="relative h-[480px] sm:h-[540px] radius-card overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)] transition-all duration-400 group-hover:shadow-xl">
              {/* Photo with Slow Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </div>

              {/* Atmospheric Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span
                  className={`font-mono-tag px-3 py-1 rounded-full border backdrop-blur text-[11px] ${getDifficultyColor(
                    trek.difficulty
                  )}`}
                >
                  {trek.difficulty}
                </span>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-white text-xs font-mono">
                  <TrendingUp size={14} className="text-[var(--accent)]" />
                  <span>{trek.maxAltitude}</span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <div className="flex items-center gap-2 text-xs font-manrope text-gray-300 mb-2">
                  <Calendar size={14} className="text-[var(--accent)]" />
                  <span>{trek.days} Days expedition</span>
                  <span>&bull;</span>
                  <span>{trek.cohortSize}</span>
                </div>

                <h3 className="font-fraunces text-2xl sm:text-3xl font-semibold mb-2 text-white group-hover:text-[var(--accent)] transition-colors">
                  {trek.name}
                </h3>

                <p className="font-manrope text-xs sm:text-sm text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                  {trek.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  <div>
                    <span className="font-mono-tag text-[10px] text-gray-400 block">From</span>
                    <span className="font-mono text-lg font-semibold text-white">
                      ₹{trek.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* "View trek →" link sliding up */}
                  <span className="flex items-center gap-1.5 font-manrope text-sm font-semibold text-[var(--accent)] transition-all duration-300 transform group-hover:translate-x-1">
                    <span>View trek</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

