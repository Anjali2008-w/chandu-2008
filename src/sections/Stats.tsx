import React, { useEffect, useRef, useState } from 'react';
import { STATS_DATA } from '../data/academyData';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // 1.8s
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts([
              Math.floor(easeProgress * STATS_DATA[0].value),
              Math.floor(easeProgress * STATS_DATA[1].value),
              STATS_DATA[2].value, // 0 compromises
              parseFloat((easeProgress * STATS_DATA[3].value).toFixed(1)),
            ]);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 border-y border-[var(--border)] bg-[var(--surface)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col border-l border-[var(--border)] pl-6 first:border-l-0 lg:first:border-l-0"
            >
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] tracking-tight">
                {index === 1
                  ? `${counts[index].toLocaleString()}+`
                  : index === 3
                  ? counts[index].toFixed(1)
                  : counts[index]}
                <span className="text-[var(--accent)] text-2xl sm:text-3xl ml-1 font-normal">
                  {index === 0 ? ' trails' : index === 2 ? ' compromises' : ''}
                </span>
              </div>
              <p className="font-mono-tag text-[var(--text-muted)] text-[11px] sm:text-xs mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

