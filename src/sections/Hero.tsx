import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../components/Button';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const ridge1Ref = useRef<HTMLDivElement>(null);
  const ridge2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ridge3Ref = useRef<HTMLDivElement>(null);
  const ridge4Ref = useRef<HTMLDivElement>(null);

  const headlineWords = [
    'The', 'mountains', "don't", 'care', 'about', 'your', 'plans.', 'We', 'do.'
  ];

  useEffect(() => {
    // Check if GSAP and ScrollTrigger are available globally or imported
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) return;

    const win = window as any;
    if (win.gsap && win.ScrollTrigger && containerRef.current) {
      const gsap = win.gsap;
      const ScrollTrigger = win.ScrollTrigger;

      // Parallax timeline linked to ScrollTrigger scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Layer 0: Sky moves slightly
      if (skyRef.current) {
        tl.to(skyRef.current, { y: 80, ease: 'none' }, 0);
      }
      // Layer 1: Distant background ridge (slowest)
      if (ridge1Ref.current) {
        tl.to(ridge1Ref.current, { y: 140, ease: 'none' }, 0);
      }
      // Layer 2: Mid-distance ridge
      if (ridge2Ref.current) {
        tl.to(ridge2Ref.current, { y: 220, ease: 'none' }, 0);
      }
      // Text layer moves at moderate speed
      if (textRef.current) {
        tl.to(textRef.current, { y: 280, opacity: 0.2, ease: 'none' }, 0);
      }
      // Layer 3: Foreground ridge (passes over bottom of text)
      if (ridge3Ref.current) {
        tl.to(ridge3Ref.current, { y: 380, ease: 'none' }, 0);
      }
      // Layer 4: Close rocky ridge (fastest)
      if (ridge4Ref.current) {
        tl.to(ridge4Ref.current, { y: 460, ease: 'none' }, 0);
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center bg-[var(--bg-primary)] select-none"
    >
      {/* 0. SKY LAYER */}
      <div
        ref={skyRef}
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/50 to-[var(--bg-primary)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 1. LAYER 1: Deep Distant Himalayan Massif (Slowest) */}
      <div
        ref={ridge1Ref}
        className="absolute bottom-0 left-0 w-[120%] -left-[10%] h-[65%] z-10 pointer-events-none transition-transform will-change-transform"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 450" fill="none" preserveAspectRatio="none" className="w-full h-full opacity-30 text-[var(--secondary)]">
          <path
            d="M0 450L0 280L140 210L320 290L480 140L620 230L780 110L940 220L1120 130L1280 250L1440 180V450H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. LAYER 2: Mid-distance Serrated Peaks */}
      <div
        ref={ridge2Ref}
        className="absolute bottom-0 left-0 w-[115%] -left-[7%] h-[55%] z-15 pointer-events-none transition-transform will-change-transform"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none" className="w-full h-full opacity-50 text-[var(--secondary)]">
          <path
            d="M0 400L0 230L190 280L380 180L520 260L690 150L870 270L1020 160L1210 240L1350 170L1440 220V400H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 3. CENTER HEADLINE & ACTIONS (Sandwiched between Layer 2 and Layer 3) */}
      <div
        ref={textRef}
        className="relative z-20 max-w-[1280px] w-full mx-auto px-6 pt-16 sm:pt-20 text-left pointer-events-auto"
      >
        <div className="max-w-4xl">
          {/* Eyebrow Label */}
          <div className="overflow-hidden mb-4 inline-block">
            <span
              className="font-mono-tag text-[var(--accent)] block transform translate-y-0 opacity-100 transition-all duration-700"
            >
              Himalayan Guided Cohorts &bull; 6–10 Trekkers Only
            </span>
          </div>

          {/* Exactly ONE H1 on page - Staggered reveal word by word from mask */}
          <h1 className="fluid-h1 text-[var(--text-primary)] mb-6 flex flex-wrap gap-x-3 sm:gap-x-4">
            {headlineWords.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden py-1">
                <span
                  style={{
                    animationDelay: `${index * 80 + 120}ms`,
                    animationDuration: '800ms',
                    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    animationFillMode: 'both',
                  }}
                  className="inline-block animate-slide-up-word"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtitle / Body text */}
          <p
            style={{ animationDelay: '850ms', animationDuration: '800ms', animationFillMode: 'both' }}
            className="body-lead text-[var(--text-muted)] text-lg sm:text-xl mb-8 animate-fade-in"
          >
            Small-group Himalayan treks and athletic conditioning led by local guides who have walked every trail more than once.
          </p>

          {/* CTA Button and Text Link */}
          <div
            style={{ animationDelay: '1000ms', animationDuration: '800ms', animationFillMode: 'both' }}
            className="flex flex-wrap items-center gap-6 animate-fade-in"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
            >
              Find your trek
            </Button>

            <a
              href="#how-it-works"
              className="link-draw font-manrope font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors text-base"
            >
              See how it works &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* 4. LAYER 3: Pine-forested Foreground Ridge (Crosses OVER text bottom) */}
      <div
        ref={ridge3Ref}
        className="absolute -bottom-6 left-0 w-[110%] -left-[5%] h-[42%] z-25 pointer-events-none transition-transform will-change-transform"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none" className="w-full h-full text-[var(--secondary)] opacity-85">
          <path
            d="M0 320L0 140C90 140 180 180 270 160C380 135 460 70 560 95C660 120 740 190 850 165C960 140 1040 80 1150 110C1260 140 1350 200 1440 170V320H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 5. LAYER 4: Immediate Rocky Foothill & Trail Ridge (Fastest) */}
      <div
        ref={ridge4Ref}
        className="absolute -bottom-10 left-0 w-full h-[25%] z-30 pointer-events-none transition-transform will-change-transform"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" className="w-full h-full text-[var(--bg-primary)]">
          <path
            d="M0 200L0 80C140 100 240 60 380 85C520 110 640 40 790 70C940 100 1080 30 1240 60C1360 80 1410 45 1440 50V200H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Scroll indicator with animated bouncing line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-35 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono-tag text-[10px] text-[var(--text-muted)] tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--border)] overflow-hidden relative">
          <div className="w-full h-1/2 bg-[var(--accent)] animate-scroll-line" />
        </div>
      </div>
    </section>
  );
};

