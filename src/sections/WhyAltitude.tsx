import React from 'react';
import { Users, ShieldCheck, HeartPulse, BadgePercent } from 'lucide-react';
import { Card } from '../components/Card';
import { BENTO_DATA } from '../data/academyData';

export const WhyAltitude: React.FC = () => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Users':
        return <Users size={28} strokeWidth={1.5} className="text-[var(--accent)]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} strokeWidth={1.5} className="text-[var(--accent)]" />;
      case 'HeartPulse':
        return <HeartPulse size={28} strokeWidth={1.5} className="text-[var(--accent)]" />;
      case 'BadgePercent':
        return <BadgePercent size={28} strokeWidth={1.5} className="text-[var(--accent)]" />;
      default:
        return null;
    }
  };

  const largeCard = BENTO_DATA.find((c) => c.isLarge)!;
  const smallCards = BENTO_DATA.filter((c) => !c.isLarge);

  return (
    <section
      id="why-altitude"
      className="py-20 lg:py-32 bg-[var(--bg-primary)] border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono-tag text-[var(--accent)] block mb-3">
            Why Altitude &bull; Standards &amp; Safety
          </span>
          <h2 className="fluid-h2 text-[var(--text-primary)] mb-4">
            Built for adventure. Engineered for safety.
          </h2>
          <p className="body-lead text-[var(--text-muted)]">
            We stripped away commercial trekking clutter to build high-altitude expeditions that treat young trekkers like athletes, not tourists.
          </p>
        </div>

        {/* Asymmetric Bento Grid of 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Large card with photo spanning 2 cols or row */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <Card className="h-full min-h-[380px] flex flex-col justify-end p-8 relative overflow-hidden group">
              <img
                src={largeCard.image}
                alt={largeCard.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="relative z-10 text-white max-w-xl">
                <span className="font-mono-tag text-[var(--accent)] px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10 inline-block mb-3">
                  Local Master Guides
                </span>
                <h3 className="font-fraunces text-2xl sm:text-3xl font-semibold mb-3">
                  {largeCard.title}
                </h3>
                <p className="font-manrope text-sm sm:text-base text-gray-200 leading-relaxed">
                  {largeCard.description}
                </p>
              </div>
            </Card>
          </div>

          {/* Cards 2 - 5: Four smaller cards with Lucide icons */}
          {smallCards.map((card) => (
            <div key={card.id} className="col-span-1">
              <Card className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-6">
                    {getIcon(card.icon)}
                  </div>
                  <h3 className="font-fraunces text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {card.title}
                  </h3>
                </div>
                <p className="font-manrope text-sm text-[var(--text-muted)] leading-relaxed mt-4">
                  {card.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

