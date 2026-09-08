import type { ImageMetadata } from 'astro';
import graduateCertificate from '../../public/images/achievements/best-graduate-2024.jpg';
import hackathonPhoto from '../../public/images/achievements/hackathon-2024-second-place.jpg';
import { procurement } from './procurement';
import { sdmSystem } from './sdm-system';
import { timesheetSystem } from './timesheet-system';
import { assetManagementSystem } from './asset-management-system';

// Update content here. Only publish claims, links, and assets you have verified.
export const profile = {
  name: 'Muhammad Wendra Suryananda',
  shortName: 'Wendra',
  title: 'IT Developer & IT Specialist',
  description:
    'The professional portfolio of Muhammad Wendra Suryananda. A journey through technology education, IT infrastructure, and software development.',
  email: 'wendrawork@gmail.com',
  github: 'https://github.com/wendra08',
  linkedin: 'https://www.linkedin.com/in/wendrasuryananda/',
  // Put your actual PDF in public/, then rebuild. The link activates when it exists.
  cvFile: 'Muhammad-Wendra-Suryananda-CV.pdf',
};

export const experiences = [
  {
    company: 'PT Graha Prima Energy',
    role: 'Staff IT Developer',
    discipline: 'Software development',
    current: true,
    period: '2026 — Present',
  },
  {
    company: 'PT ITCI Kartika Utama',
    role: 'Staff IT Specialist',
    discipline: 'IT infrastructure & systems',
    current: false,
    period: '2025 — 2026',
  },
  {
    company: 'Koding Next',
    role: 'IT Advanced Teacher',
    discipline: 'Technology education',
    current: false,
    period: '2024 — 2025',
  },
];

export const education = {
  institution: 'Universitas Mulawarman',
  program: 'Informatics',
  period: '2020 — 2024',
  gpa: '3.93 / 4.00',
  recognition: 'Best Graduate',
  description:
    'Graduated from the Informatics program at Universitas Mulawarman with a GPA of 3.93.',
};

export const skills = [
  { name: 'MikroTik', icon: 'mikrotik', group: 'Infrastructure' },
  { name: 'NAS', icon: 'storage', group: 'Infrastructure' },
  { name: 'Python', icon: 'python', group: 'Python & ML' },
  { name: 'TensorFlow', icon: 'tensorflow', group: 'Python & ML' },
  { name: 'Odoo', icon: 'odoo', group: 'Web & business apps' },
  { name: 'Laravel', icon: 'laravel', group: 'Web & business apps' },
  { name: 'PHP', icon: 'php', group: 'Web & business apps' },
  { name: 'MySQL', icon: 'mysql', group: 'Web & business apps' },
  { name: 'Alpine.js', icon: 'alpinejs-icon', group: 'Web & business apps' },
  { name: 'Livewire', icon: 'livewire', group: 'Web & business apps' },
  {
    name: 'Tailwind CSS',
    icon: 'tailwindcss-icon',
    group: 'Web & business apps',
  },
  { name: 'Next.js', icon: 'nextjs-icon', group: 'Web & business apps' },
  { name: 'GitHub', icon: 'github-icon', group: 'Developer tools' },
  {
    name: 'Visual Studio Code',
    icon: 'visual-studio-code',
    group: 'Developer tools',
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string | ImageMetadata;
  imageAlt?: string;
  linkLabel?: string;
  url?: string;
  placeholder: boolean;
};

// Only publish projects with verified details and approved documentation.
export const projects: Project[] = [
  {
    title: procurement.title,
    category: procurement.organization,
    description: procurement.summary,
    tags: ['Laravel', 'Livewire', 'Alpine.js', 'Tailwind CSS', 'MySQL'],
    image: procurement.screenshots[0].image,
    imageAlt: procurement.screenshots[0].alt,
    url: procurement.url,
    linkLabel: 'Read case study',
    placeholder: false,
  },
  {
    title: sdmSystem.title,
    category: sdmSystem.organization,
    description: sdmSystem.summary,
    tags: [
      'Laravel',
      'Tailwind CSS',
      'JavaScript',
      'MySQL / MariaDB',
      'Synology NAS',
    ],
    image: sdmSystem.screenshots[0].image,
    imageAlt: sdmSystem.screenshots[0].alt,
    url: sdmSystem.url,
    linkLabel: 'Read case study',
    placeholder: false,
  },
  {
    title: timesheetSystem.title,
    category: timesheetSystem.organization,
    description: timesheetSystem.summary,
    tags: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Synology NAS'],
    image: timesheetSystem.screenshots[0].image,
    imageAlt: timesheetSystem.screenshots[0].alt,
    url: timesheetSystem.url,
    linkLabel: 'Read case study',
    placeholder: false,
  },
  {
    title: assetManagementSystem.title,
    category: assetManagementSystem.organization,
    description: assetManagementSystem.summary,
    tags: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'QR Code'],
    image: assetManagementSystem.screenshots[0].image,
    imageAlt: assetManagementSystem.screenshots[0].alt,
    url: assetManagementSystem.url,
    linkLabel: 'Read case study',
    placeholder: false,
  },
];

export type Achievement = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  url?: string;
  category?: string;
  highlight?: string;
  contribution?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  linkLabel?: string;
};
export const achievements: Achievement[] = [
  {
    title: 'Best Graduate',
    issuer: 'Faculty of Engineering, Universitas Mulawarman',
    year: '2024',
    category: 'Academic excellence',
    highlight: 'GPA 3.93 · With honors',
    description:
      'Recognized as Best Graduate by the Faculty of Engineering at Universitas Mulawarman, graduating with a GPA of 3.93 and honors.',
    image: graduateCertificate,
    imageAlt:
      'Universitas Mulawarman certificate recognizing Muhammad Wendra Suryananda as Best Graduate with a GPA of 3.93 and honors, 2024.',
    url: '/images/achievements/best-graduate-2024.jpg',
    linkLabel: 'View certificate',
  },
  {
    title: '2nd Place — Hackathon',
    issuer: 'Team achievement',
    year: '2024',
    category: 'AI & innovation',
    highlight: 'CCTV accident detection',
    description:
      'Our team earned second place in a 2024 hackathon with a startup concept for detecting accidents through CCTV footage.',
    contribution:
      'I contributed by developing the AI model to detect accidents in CCTV footage.',
    image: hackathonPhoto,
    imageAlt:
      'Hackathon team holding a second-place award sign after the 2024 competition.',
    url: '/images/achievements/hackathon-2024-second-place.jpg',
    linkLabel: 'View team photo',
  },
];
