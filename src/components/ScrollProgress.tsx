import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[var(--accent)] origin-left transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
};

