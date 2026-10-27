import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { Button } from '../components/Button';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur & hairline border after 80px
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Treks', href: '#featured-treks' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Why Altitude', href: '#why-altitude' },
    { label: 'Stories', href: '#stories' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Wordmark in Fraunces */}
          <a
            href="#"
            className="font-fraunces font-bold text-2xl tracking-tighter text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            ALTITUDE
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-draw font-manrope text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & Accent Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
            >
              Book a trek
            </Button>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors radius-btn border border-[var(--border)]"
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu with Staggered Links */}
      <div
        className={`fixed inset-0 z-30 bg-[var(--bg-primary)] flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 80 + 100}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity: mobileMenuOpen ? 1 : 0,
              }}
              className="font-fraunces text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-all duration-400 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={24} strokeWidth={1.5} className="text-[var(--text-muted)]" />
            </a>
          ))}

          <div
            style={{
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 80 + 100}ms` : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(24px)',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            className="pt-6 border-t border-[var(--border)] transition-all duration-400"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
            >
              Book a trek
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

