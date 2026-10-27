import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { GALLERY_DATA } from '../data/academyData';

export const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const col1Photos = GALLERY_DATA.filter((p) => p.column === 1);
  const col2Photos = GALLERY_DATA.filter((p) => p.column === 2);

  useEffect(() => {
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReducedMotion) return;

    const win = window as any;
    if (win.gsap && win.ScrollTrigger && containerRef.current) {
      const gsap = win.gsap;

      // Col 1 moves slightly slower, Col 2 moves faster for parallax depth
      if (col1Ref.current) {
        gsap.to(col1Ref.current, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (col2Ref.current) {
        gsap.to(col2Ref.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-[var(--bg-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono-tag text-[var(--accent)] block mb-3">
            Field Archive &bull; High Altitude Photography
          </span>
          <h2 className="fluid-h2 text-[var(--text-primary)] mb-4">
            The raw reality of the trail.
          </h2>
          <p className="body-lead text-[var(--text-muted)]">
            Captured on 35mm and medium format by guides and athletes during live expeditions across Himachal, Uttarakhand, and Sikkim.
          </p>
        </div>

        {/* Masonry Parallax Grid (2 Columns on Tablet/Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div ref={col1Ref} className="space-y-8 lg:space-y-12">
            {col1Photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative radius-card overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-md"
              >
                <div className="img-zoom-container aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex items-center justify-between bg-[var(--surface)]">
                  <div>
                    <p className="font-fraunces text-base font-medium text-[var(--text-primary)]">
                      {photo.caption}
                    </p>
                    <p className="font-manrope text-xs text-[var(--text-muted)] flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-[var(--accent)]" /> {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Offset / Faster Scroll Speed) */}
          <div ref={col2Ref} className="space-y-8 lg:space-y-12 md:pt-16">
            {col2Photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative radius-card overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-md"
              >
                <div className="img-zoom-container aspect-[4/5] overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex items-center justify-between bg-[var(--surface)]">
                  <div>
                    <p className="font-fraunces text-base font-medium text-[var(--text-primary)]">
                      {photo.caption}
                    </p>
                    <p className="font-manrope text-xs text-[var(--text-muted)] flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-[var(--accent)]" /> {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

