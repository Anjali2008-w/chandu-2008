import React, { useRef, useState, useEffect } from 'react';
import { Button } from '../components/Button';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonWrapperRef.current) return;

      const rect = buttonWrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Magnetic pull within 40px radius outside element
      const triggerRadius = rect.width / 2 + 50;

      if (distance < triggerRadius) {
        // Subtle magnetic pull up to 14px
        const pullFactor = 0.22;
        setBtnOffset({
          x: distX * pullFactor,
          y: distY * pullFactor,
        });
      } else {
        setBtnOffset({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setBtnOffset({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full bg-[#1F3A2E] text-white py-24 sm:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Subtle organic contour background shape */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1000 600" fill="none" className="w-full h-full object-cover">
          <path
            d="M-100 300C200 150 400 450 700 200C1000 -50 1100 400 1200 350V600H-100Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="font-mono-tag text-[var(--accent)] bg-black/30 px-4 py-1.5 rounded-full border border-white/10 mb-6">
          Limited To 8–10 Trekkers Per Cohort
        </span>

        {/* Large Fraunces headline */}
        <h2 className="font-fraunces text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl mb-8 leading-tight">
          Your first summit is closer than you think.
        </h2>

        <p className="font-manrope text-base sm:text-lg text-emerald-100 max-w-xl mb-10 leading-relaxed">
          Book your spot with guaranteed dates, verified local guides, and zero administrative hassles. We handle every permit so you can focus on the trail.
        </p>

        {/* Big accent button with magnetic hover effect */}
        <div
          ref={buttonWrapperRef}
          className="transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `translate3d(${btnOffset.x}px, ${btnOffset.y}px, 0)`,
          }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            className="text-lg px-10 py-5 shadow-2xl hover:shadow-[0_0_30px_rgba(217,72,15,0.4)]"
          >
            Apply for next cohort
          </Button>
        </div>
      </div>
    </section>
  );
};

