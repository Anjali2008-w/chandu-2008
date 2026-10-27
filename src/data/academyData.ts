import { Program, StatItem, BentoCard, StepItem, Testimonial, FAQItem, GalleryPhoto } from '../types';

export const STATS_DATA: StatItem[] = [
  { id: '1', value: 38, suffix: ' trails', label: 'High-altitude routes mapped' },
  { id: '2', value: 4200, suffix: '+ trekkers', label: 'Athletes trained to date' },
  { id: '3', value: 0, suffix: ' compromises', label: 'Zero compromises on safety' },
  { id: '4', value: 4.9, suffix: ' / 5.0', label: 'Average verified athlete rating' },
];

export const BENTO_DATA: BentoCard[] = [
  {
    id: 'guides',
    title: 'Certified Local Guides & Master Coaches',
    description: 'Every trail coach holds national mountaineering badges and has lived on these ridgelines since childhood. They read mountain weather by instinct, not just radar forecasts.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    isLarge: true,
  },
  {
    id: 'cohort',
    title: 'Groups Capped at 10',
    description: 'Never a bloated tourist herd. You train in tight crews of 6 to 10 athletes with a strict 1:4 coach-to-athlete ratio.',
    icon: 'Users',
    isLarge: false,
  },
  {
    id: 'permits',
    title: 'All Permits Handled',
    description: 'Forest clearances, wildlife sanctuary approvals, and border checkpoint paperwork are finalized before you touch basecamp.',
    icon: 'ShieldCheck',
    isLarge: false,
  },
  {
    id: 'evac',
    title: 'Emergency Evacuation Cover',
    description: 'Comprehensive wilderness medical backup, portable oxygen concentrators on trail, and dedicated heli-evacuation insurance on every ridge.',
    icon: 'HeartPulse',
    isLarge: false,
  },
  {
    id: 'pricing',
    title: 'Fixed Price, Zero Hidden Costs',
    description: 'Nutrition, technical high-altitude gear, mountain transit, and emergency provisions included. What you see is what you pay.',
    icon: 'BadgePercent',
    isLarge: false,
  },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'kedarkantha-endurance',
    name: 'Kedarkantha Alpine Run',
    days: 6,
    maxAltitude: '3,810 m',
    difficulty: 'Moderate',
    price: 18500,
    discipline: 'Mountain Trail & Cold Acclimatization',
    summary: 'A fast-paced winter alpine endurance camp traversing dense pine ridges and crisp snowfields to Kedarkantha Peak.',
    elevationGain: '+1,820 m',
    cohortSize: '8 Athletes',
    highlights: [
      'Pre-dawn summit ridge push for 360° Himalayan vista',
      'Cold-adaptation and breathing cadence clinics',
      'Micro-spike technical footwork over glazed verglas',
      'Wilderness bivouac under sub-zero clear skies'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hampta-pass-technical',
    name: 'Hampta Pass Technical Crossing',
    days: 5,
    maxAltitude: '4,270 m',
    difficulty: 'Hard',
    price: 24000,
    discipline: 'Glacial Moraine & High-Altitude Speed',
    summary: 'From the lush green valleys of Kullu to the stark barren moonscape of Spiti over an unforgiving high-mountain notch.',
    elevationGain: '+2,350 m',
    cohortSize: '8 Athletes',
    highlights: [
      'Freezing glacial torrent crossing techniques',
      'Scree descent mechanics and balance recovery',
      'High-altitude sleep camp beside Chandra Taal lake',
      'Navigation with topo sheets and altimeters'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'valley-of-flowers-conditioning',
    name: 'Valley of Flowers & Hemkund',
    days: 6,
    maxAltitude: '4,329 m',
    difficulty: 'Moderate',
    price: 21500,
    discipline: 'High-Altitude Aerobic Climbing',
    summary: 'Sustained vertical power climbing up to the glacial lake of Hemkund Sahib surrounded by seven rugged snow peaks.',
    elevationGain: '+2,100 m',
    cohortSize: '10 Athletes',
    highlights: [
      'Steep grade power-hiking economy drills',
      'Sustained lactate threshold maintenance at 4,000m+',
      'Glacial cirque training protocols',
      'Active recovery sessions in alpine alpine meadows'
    ],
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'brahmatal-winter-ridge',
    name: 'Brahmatal Winter Ridge Camp',
    days: 6,
    maxAltitude: '3,850 m',
    difficulty: 'Moderate',
    price: 19500,
    discipline: 'Sub-Zero Ridge Traversing',
    summary: 'Ridge-line running overlooking Trishul and Nanda Ghunti with front-row exposure to intense Himalayan wind currents.',
    elevationGain: '+1,950 m',
    cohortSize: '8 Athletes',
    highlights: [
      'Gale-force ridge pacing and windbreak pacing',
      'Frozen lake bivouac and metabolic fueling',
      'Snow-trench shelter construction masterclass',
      'Sunset tactical conditioning drills'
    ],
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'goechala-high-crucible',
    name: 'Goechala Kanchenjunga Crucible',
    days: 10,
    maxAltitude: '4,600 m',
    difficulty: 'Hard',
    price: 36500,
    discipline: 'Expedition-Grade Mountain Crucible',
    summary: 'The ultimate high-altitude test looking straight into the colossal eastern face of Mt. Kanchenjunga, third highest peak on Earth.',
    elevationGain: '+3,400 m',
    cohortSize: '6 Athletes',
    highlights: [
      'Hypoxic threshold training above 4,500m',
      'Ten uninterrupted days of remote alpine endurance',
      'Rhododendron cloud-forest to raw glacial moraine',
      'Graduation pin and lifetime Altitude alumni status'
    ],
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80',
  },
];

export const STEPS_DATA: StepItem[] = [
  {
    number: '01',
    title: 'Pick a trek and discipline',
    description: 'Filter our calendar by elevation, intensity, and terrain. Check honest prerequisites before putting your deposit down.',
    detail: 'We assess your current running or athletic baseline to ensure you match the cohort speed and energy.',
  },
  {
    number: '02',
    title: 'Get your kit list & prep plan',
    description: 'Receive an uncompromising 4-week training plan and gear checklist tested in sub-zero Himalayan storms.',
    detail: 'No guesswork. We tell you the exact base layers, crampons, headlamps, and electrolyte ratios that hold up.',
  },
  {
    number: '03',
    title: 'Meet your group in base camp',
    description: 'Rendezvous in the foothills. Eight to ten athletes, two certified coaches, hot mountain stew, and a pre-trail briefing.',
    detail: 'Acclimatize deliberately over 36 hours. Run pulse-oximetry checks and dial in every backpack strap.',
  },
  {
    number: '04',
    title: 'Summit with zero excuses',
    description: 'Walk out before dawn under headlamps. Push the pass together as a disciplined unit and earn every single meter.',
    detail: 'No hurried sprints. Steady cadence, synchronized rhythm, and safe descent back to warm fires.',
  },
];

export const STORIES_DATA: Testimonial[] = [
  {
    id: 'rohan',
    name: 'Rohan Mehta',
    role: 'IIT Delhi, Final Year Mechanical',
    cohort: 'Cohort 24B',
    program: 'Kedarkantha Alpine Run',
    quote: 'Most campus trips are chaotic mess. Altitude was the complete opposite: clockwork logistics, coaches who actually pushed our pacing, and an absurd pre-dawn ridge summit that made our city stress vanish in ten minutes.',
  },
  {
    id: 'ananya',
    name: 'Ananya Sen',
    role: 'Financial Analyst, Mumbai',
    cohort: 'Cohort 31A',
    program: 'Hampta Pass Technical Crossing',
    quote: 'Crossing waist-deep freezing glacial melt at 4,000 meters requires real trust in the team ahead of you. The 1:4 coach ratio meant I never once felt out of depth. I came back to Bombay with sharper focus and zero burnout.',
  },
  {
    id: 'kabir',
    name: 'Kabir Varma',
    role: 'NLSIU Bangalore, 4th Year Law',
    cohort: 'Cohort 19D',
    program: 'Valley of Flowers & Hemkund',
    quote: 'The steep climb up to Hemkund tests your lungs and your patience. But when your group of eight moves in sync and nobody gets left behind, you understand why Altitude caps groups at ten. Pure class.',
  },
  {
    id: 'tanya',
    name: 'Tanya Saxena',
    role: 'Software Engineer, Bengaluru',
    cohort: 'Cohort 42C',
    program: 'Goechala Kanchenjunga Crucible',
    quote: 'Ten days without cell reception staring down the Kanchenjunga wall. No fluff, no luxury glamping nonsense—just pure mountain grit and warm dal-chawal at 4,000 meters. The best physical investment I have made in my twenties.',
  },
];

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Pre-dawn ridge pacing at 3,800m',
    location: 'Kedarkantha Ridge, Uttarakhand',
    column: 1,
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bivouac under the winter Milky Way',
    location: 'Brahmatal Basecamp, 3,200m',
    column: 2,
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    caption: 'Local coach reading the cirque cloud shifts',
    location: 'Pir Panjal Range, Himachal',
    column: 1,
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Glacial scree crossing in Spiti valley',
    location: 'Hampta Pass Exit, Spiti',
    column: 2,
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    caption: 'Prayer flags marking the highest wind pass',
    location: 'Hemkund Col, 4,329m',
    column: 1,
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80',
    caption: 'Athletes descending the Kanchenjunga moraine',
    location: 'Goechala Ridge, Sikkim',
    column: 2,
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What baseline fitness is needed before I join a cohort?',
    answer: 'You should comfortably run 5 kilometers in under 32 minutes or sustain 45 minutes of brisk incline walking without distress. We provide a tailored 4-week pre-trail conditioning program to dial in your aerobic base.',
  },
  {
    id: 'faq-2',
    question: 'What do I need to pack versus what Altitude provides?',
    answer: 'Altitude supplies certified four-season alpine tents, micro-spikes, sleeping bags rated to -10°C, oxygen cylinders, medical kits, and dining provisions. You bring your broken-in hiking boots, thermal layers, waterproof shell, and personal daypack.',
  },
  {
    id: 'faq-3',
    question: 'How do you handle acute mountain sickness and trail safety?',
    answer: 'Every cohort travels with two certified Wilderness First Responders. We run twice-daily pulse-oximeter and Lake Louise AMS symptom checks. If an athlete shows persistent altitude sickness, an immediate assisted descent is initiated with satellite SOS backup.',
  },
  {
    id: 'faq-4',
    question: 'What is your refund and date transfer policy?',
    answer: 'Cancel up to 21 days before day zero for a 100% credit transfer to any cohort within 12 months, or a full refund minus a 5% banking fee. If college exam dates shift, reach out and we will transfer you to the next batch with zero penalty.',
  },
  {
    id: 'faq-5',
    question: 'Can I join solo, or do people usually sign up in pairs?',
    answer: 'Over 65% of our athletes apply solo. Our small-cohort model (6 to 10 athletes) is specifically designed so people bond quickly over morning oatmeal and steep ridgelines. By day two, you will feel like you have known your crew for years.',
  },
  {
    id: 'faq-6',
    question: 'What are the best seasons for high-altitude training in the Himalayas?',
    answer: 'We run two distinct seasons: Pre-monsoon (April to June) for crisp air, alpine flowers, and high passes; and Post-monsoon / Winter (September to January) for crystal-clear Himalayan views, stable weather, and high-altitude snow conditioning.',
  },
];

