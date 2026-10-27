import React, { useEffect, useState, useRef } from 'react';

export const Cursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHoveredInteractive, setIsHoveredInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check what is hovered
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering over card with data-cursor="view"
      const viewElement = target.closest('[data-cursor="view"]');
      if (viewElement) {
        setCursorText('View');
        setIsHoveredInteractive(true);
      } else {
        setCursorText(null);
        const interactive = target.closest('a, button, input, textarea, select, [role="button"]');
        setIsHoveredInteractive(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp loop for the lagging ring
    const renderLoop = () => {
      const ease = 0.15; // slight lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* 8px Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full bg-[var(--accent)] transition-opacity duration-200 ${
          cursorText ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      />

      {/* 32px Lagging Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[var(--accent)] flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-widest text-white transition-[width,height,background-color,border-color,opacity] duration-300 ${
          cursorText
            ? 'w-20 h-20 bg-[var(--accent)] text-white border-transparent shadow-lg'
            : isHoveredInteractive
            ? 'w-12 h-12 border-[var(--accent)] bg-transparent opacity-60'
            : 'w-8 h-8 border-[var(--accent)] bg-transparent opacity-40'
        }`}
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        {cursorText && (
          <span className="animate-fade-in select-none">{cursorText}</span>
        )}
      </div>
    </>
  );
};

