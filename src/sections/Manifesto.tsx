import React, { useEffect, useRef } from 'react';

export const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const manifestoText = 
    "We do not trek for social feeds or souvenir photos. We walk for the cold predawn col, the oxygen-thin ridge where breath turns to mist, and the quiet certainty that your body and mind can endure whatever the Himalayan weather throws your way. Strictly small groups. Certified local coaches. Real mountain discipline. Zero compromises.";

  const words = manifestoText.split(' ');

  useEffect(() => {
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) return;

    const win = window as any;
    if (win.gsap && win.ScrollTrigger && sectionRef.current && textRef.current) {
      const gsap = win.gsap;
      const wordSpans = textRef.current.querySelectorAll('.manifesto-word');

      gsap.fromTo(
        wordSpans,
        { opacity: 0.18, color: 'var(--text-muted)' },
        {
          opacity: 1,
          color: 'var(--text-primary)',
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[var(--bg-primary)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-4xl">
          <span className="font-mono-tag text-[var(--accent)] block mb-6">
            The Altitude Manifesto &bull; Why We Walk
          </span>

          <p
            ref={textRef}
            className="font-fraunces text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug text-[var(--text-primary)] font-medium"
          >
            {words.map((word, index) => (
              <span
                key={index}
                className="manifesto-word inline-block mr-2 sm:mr-3 transition-opacity duration-150 opacity-20"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

