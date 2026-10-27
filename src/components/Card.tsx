import React, { useRef, useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tiltEnabled?: boolean;
  spotlightEnabled?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  tiltEnabled = true,
  spotlightEnabled = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (spotlightEnabled) {
      setMousePos({ x, y });
    }

    if (tiltEnabled) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt up to 6 degrees towards mouse
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transform,
        transition: isHovered
          ? 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`relative overflow-hidden radius-card bg-[var(--surface)] border border-[var(--border)] transition-colors duration-300 will-change-transform ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Soft radial cursor spotlight */}
      {spotlightEnabled && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 72, 15, 0.09), transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

