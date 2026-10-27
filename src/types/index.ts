export interface Program {
  id: string;
  name: string;
  days: number;
  maxAltitude: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  price: number;
  image: string;
  discipline: string;
  summary: string;
  elevationGain: string;
  cohortSize: string;
  highlights: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface BentoCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  isLarge?: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  program: string;
  cohort: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  location: string;
  column: 1 | 2;
}

