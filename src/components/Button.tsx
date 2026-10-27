import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon: Icon,
  showArrow = true,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-medium',
  };

  if (variant === 'primary') {
    return (
      <button
        className={`group relative inline-flex items-center justify-center font-manrope font-medium text-white bg-[var(--accent)] radius-btn transition-transform duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 overflow-hidden ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {/* Sweep background effect */}
        <span
          className="absolute inset-0 w-full h-full bg-[var(--accent-hover)] -translate-x-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center gap-2">
          {Icon && <Icon size={18} strokeWidth={1.5} />}
          <span>{children}</span>
          {showArrow && (
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </span>
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className={`group inline-flex items-center justify-center font-manrope font-medium text-[var(--text-primary)] bg-[var(--surface)] border border-[var(--border)] radius-btn transition-all duration-200 hover:border-[var(--text-primary)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${sizeClasses[size]} ${className}`}
        {...props}
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon size={18} strokeWidth={1.5} />}
          <span>{children}</span>
          {showArrow && (
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      className={`group inline-flex items-center justify-center font-manrope font-medium text-[var(--text-primary)] radius-btn transition-all duration-200 hover:text-[var(--accent)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2">
        {Icon && <Icon size={18} strokeWidth={1.5} />}
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
};

