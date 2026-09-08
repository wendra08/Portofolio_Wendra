import login from '../../public/images/projects/asset-management-system/login.jpg';
import dashboard from '../../public/images/projects/asset-management-system/dashboard.jpg';
import type { CaseStudy } from './case-study';

export const assetManagementSystem: CaseStudy = {
  number: '04',
  category: 'Asset & inventory management',
  title: 'Asset Management System PT ITCI Kartika Utama',
  organization: 'PT ITCI Kartika Utama',
  role: 'Web application development & internal deployment',
  focus: 'Asset records, inventory & QR Code identification',
  url: '/projects/asset-management-system/',
  summary:
    'A web-based internal system for organizing company assets, inventory records, and QR Code-based asset identification.',
  overview:
    'I developed a web-based Asset Management System for PT ITCI Kartika Utama to support digital asset and inventory management within the company. It brings records for vehicles, motorcycles, speedboats, heavy equipment, IT inventory, and other operational equipment into a more structured and accessible internal workspace.',
  headings: {
    overview: ['Company assets.', 'One accessible inventory.'],
    problem: ['Operational assets vary.', 'Their records need structure.'],
    solution: ['From asset records', 'to QR identification.'],
    results: ['More accessible inventory.', 'More efficient asset checks.'],
    stack: ['Built with Laravel.', 'Hosted on the internal NAS.'],
  },
  problem:
    'Company assets span several operational categories and need reliable information for everyday management. The challenge was to centralize asset records, images, and category information while making individual items easy to locate, identify, and report on without relying on fragmented manual records.',
  challenges: [
    {
      title: 'A diverse asset catalogue',
      description:
        'Create a structured inventory that can represent vehicles, motorcycles, speedboats, heavy equipment, IT inventory, and other operational equipment.',
    },
    {
      title: 'Fast asset identification',
      description:
        'Make each physical asset easier to identify and review when users need its profile in the field or during an inventory check.',
    },
    {
      title: 'Practical inventory reporting',
      description:
        'Keep records searchable and available for Excel export so inventory information can support administrative reporting.',
    },
  ],
  solution:
    'The system provides category dashboards, CRUD asset management, image uploads, and Livewire-powered real-time search. Each asset receives a QR Code that can be printed as a sticker and scanned to display its profile, while Excel export supports inventory reporting from the same centralized data.',
  workflowTitle: 'From asset record to field identification',
  workflowDescription:
    'A high-level view of how asset information is maintained, identified, and prepared for reporting.',
  workflow: [
    'Create asset record',
    'Assign category & details',
    'Upload asset image',
    'Generate QR Code',
    'Print QR sticker',
    'Scan to open asset profile',
    'Search & update inventory',
    'Export Excel report',
  ],
  features: [
    {
      icon: 'storage',
      title: 'Category-based asset dashboard',
      description:
        'View inventory by vehicles, motorcycles, speedboats, heavy equipment, IT inventory, and other operational categories.',
    },
    {
      icon: 'code',
      title: 'Asset data & image management',
      description:
        'Create, update, and manage asset records with supporting images through a structured CRUD workflow.',
    },
    {
      icon: 'network',
      title: 'Livewire real-time search',
      description:
        'Find asset information quickly through responsive search interactions within the internal application.',
    },
    {
      icon: 'award',
      title: 'QR Code generation',
      description:
        'Generate an individual QR Code for each asset to connect the physical item with its digital profile.',
    },
    {
      icon: 'right',
      title: 'QR scanning & sticker printing',
      description:
        'Scan QR Codes to display asset profiles and print QR Code stickers for use on physical inventory.',
    },
    {
      icon: 'teach',
      title: 'Excel inventory export',
      description:
        'Export inventory data to Excel to support reporting and administrative follow-up.',
    },
  ],
  deployment:
    'The application was deployed on a Synology NAS as an internal company server, making the asset workspace available within PT ITCI Kartika Utama\'s own environment.',
  resultsIntro:
    'The result is a centralized internal workspace that gives the company a more structured way to manage records, find assets, and connect physical inventory to digital information.',
  results: [
    {
      title: 'Centralized asset information',
      description:
        'Asset details and images are managed within one application instead of across separate records.',
    },
    {
      title: 'Faster asset lookup',
      description:
        'Real-time search and QR Code scanning make asset profiles easier to retrieve when needed.',
    },
    {
      title: 'A structured inventory catalogue',
      description:
        'Category-based records provide a clearer view of operational equipment and company inventory.',
    },
    {
      title: 'Reporting-ready data',
      description:
        'Excel export provides a practical path from current inventory records to administrative reporting.',
    },
  ],
  impactLabel: 'Operational impact',
  intendedImpact:
    'A centralized asset system helps the company maintain accessible inventory data, identify physical assets more efficiently, and support operational reporting from current records.',
  stackIntro:
    'Built with Laravel, Tailwind CSS, Livewire, and MySQL, then deployed to a Synology NAS as an internal company server.',
  stack: [
    { name: 'Laravel', purpose: 'Application framework and inventory workflows' },
    { name: 'Livewire', purpose: 'Real-time search and interactive administration' },
    { name: 'Tailwind CSS', purpose: 'Styling and responsive interfaces' },
    { name: 'MySQL', purpose: 'Relational storage for asset and inventory data' },
    { name: 'QR Code integration', purpose: 'Asset identification, scanning, and sticker printing' },
    { name: 'Synology NAS', purpose: 'Internal company-server deployment' },
  ],
  screenshots: [
    {
      image: login,
      original: '/images/projects/asset-management-system/login.jpg',
      title: 'Asset Management System login',
      alt: 'Asset Management System login page for PT ITCI Kartika Utama with an email and password sign-in form.',
      caption:
        'The internal sign-in screen provides access to the company asset and inventory workspace.',
    },
    {
      image: dashboard,
      original: '/images/projects/asset-management-system/dashboard.jpg',
      title: 'Category-based inventory dashboard',
      alt: 'Asset Management System dashboard showing asset category totals and vehicle inventory cards for PT ITCI Kartika Utama.',
      caption:
        'The dashboard summarizes inventory by category and highlights recently recorded assets for quicker review.',
    },
  ],
};
