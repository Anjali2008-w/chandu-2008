import React, { useState } from 'react';
import { Instagram, Youtube, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)] pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[var(--border)]">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="font-fraunces font-bold text-3xl tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block"
            >
              ALTITUDE
            </a>
            <p className="font-manrope text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
              Small-cohort Himalayan treks and high-altitude training for college students and young professionals. Led by local mountain masters.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Altitude on Instagram"
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Subscribe to Altitude on YouTube"
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Expeditions */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tag text-[var(--text-primary)] mb-4 text-[11px]">
              Expeditions
            </h3>
            <ul className="space-y-3 font-manrope text-sm text-[var(--text-muted)]">
              <li>
                <a href="#featured-treks" className="link-draw hover:text-[var(--text-primary)]">
                  Kedarkantha Run
                </a>
              </li>
              <li>
                <a href="#featured-treks" className="link-draw hover:text-[var(--text-primary)]">
                  Hampta Pass Col
                </a>
              </li>
              <li>
                <a href="#featured-treks" className="link-draw hover:text-[var(--text-primary)]">
                  Valley of Flowers
                </a>
              </li>
              <li>
                <a href="#featured-treks" className="link-draw hover:text-[var(--text-primary)]">
                  Brahmatal Ridge
                </a>
              </li>
              <li>
                <a href="#featured-treks" className="link-draw hover:text-[var(--text-primary)]">
                  Goechala Crucible
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Academy & Safety */}
          <div className="lg:col-span-2">
            <h3 className="font-mono-tag text-[var(--text-primary)] mb-4 text-[11px]">
              Standards
            </h3>
            <ul className="space-y-3 font-manrope text-sm text-[var(--text-muted)]">
              <li>
                <a href="#how-it-works" className="link-draw hover:text-[var(--text-primary)]">
                  The Protocol
                </a>
              </li>
              <li>
                <a href="#why-altitude" className="link-draw hover:text-[var(--text-primary)]">
                  Wilderness Medicine
                </a>
              </li>
              <li>
                <a href="#why-altitude" className="link-draw hover:text-[var(--text-primary)]">
                  Permits &amp; Sanctuaries
                </a>
              </li>
              <li>
                <a href="#stories" className="link-draw hover:text-[var(--text-primary)]">
                  Athlete Dispatches
                </a>
              </li>
              <li>
                <a href="#faq" className="link-draw hover:text-[var(--text-primary)]">
                  FAQ &amp; Packing
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="font-mono-tag text-[var(--text-primary)] mb-2 text-[11px]">
              Field Dispatches &bull; Weekly Intel
            </h3>
            <p className="font-manrope text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
              No marketing noise. Only mountain weather reports, trail opening notices, and conditioning tips from our guides.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[var(--surface)] border border-[var(--border)] radius-btn text-xs text-[var(--accent)] font-medium">
                <Check size={16} strokeWidth={1.5} />
                <span>You are on the dispatch list. See you on the trail.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu"
                  className="flex-1 px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] radius-btn text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--accent)] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2.5 bg-[var(--accent)] text-white radius-btn hover:bg-[var(--accent-hover)] transition-colors flex items-center justify-center shrink-0"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* GIANT FULL-WIDTH WORDMARK IN FRAUNCES */}
        <div className="py-12 sm:py-16 text-center overflow-hidden border-b border-[var(--border)]">
          <span className="font-fraunces font-bold text-[18vw] leading-none tracking-tight text-[var(--text-primary)] opacity-[0.07] select-none block uppercase">
            ALTITUDE
          </span>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
          <p>
            &copy; {new Date().getFullYear()} Altitude Mountaineering &amp; Athletic Academy Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy &amp; Wilderness Waiver
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">
              Terms of Expedition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

