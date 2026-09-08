import dashboard from '../../public/images/projects/timesheet-system/dashboard.jpg';
import combinedRecap from '../../public/images/projects/timesheet-system/combined-recap.jpg';
import type { CaseStudy } from './case-study';

export const timesheetSystem: CaseStudy = {
  number: '03',
  category: 'Timesheet & HR administration',
  title: 'Timesheet-System PT ITCI Kartika Utama',
  organization: 'PT ITCI Kartika Utama',
  role: 'Web application development & internal deployment',
  focus: 'Timesheet recap, attendance & leave monitoring',
  url: '/projects/timesheet-system/',
  summary:
    'A web-based internal system that turns division timesheet uploads into structured attendance recaps and leave monitoring.',
  overview:
    'I developed a web-based Timesheet Recap System for PT ITCI Kartika Utama to support internal timesheet management and HR administration. The system simplifies the upload, validation, monitoring, and consolidation of timesheet data from multiple divisions, giving administrators a more structured view of attendance and leave records.',
  headings: {
    overview: ['Many divisions.', 'One structured recap.'],
    problem: ['Manual recaps take time.', 'Attendance data needs clarity.'],
    solution: ['From uploads', 'to actionable records.'],
    results: ['Less manual recap work.', 'More reliable monitoring.'],
    stack: ['Built with Laravel.', 'Deployed internally.'],
  },
  problem:
    'Timesheet data arrived from multiple divisions and required manual consolidation before it could support attendance and leave administration. The system needed to make uploads easier to manage, distinguish employee and daily-worker data, and turn attendance codes into a consistent recap without losing visibility of each division and reporting period.',
  challenges: [
    {
      title: 'Distributed timesheet submissions',
      description:
        'Track which divisions have uploaded their timesheets for an active period and make outstanding submissions easy to identify.',
    },
    {
      title: 'Attendance and leave interpretation',
      description:
        'Apply attendance-code and leave-calculation logic consistently across records while keeping the resulting information reviewable.',
    },
    {
      title: 'Administrative reporting',
      description:
        'Generate a consolidated recap that supports HR administration without repeated manual compilation in spreadsheets.',
    },
  ],
  solution:
    'The application provides a division-based upload workflow, period management, automatic recap generation, and dedicated administration for employee leave and collective leave. It separates employee and daily-worker data, calculates attendance codes, and presents monitoring views that connect uploaded timesheet records with leave administration.',
  workflowTitle: 'From timesheet upload to recap',
  workflowDescription:
    'A high-level view of how division records move through the system for administration and reporting.',
  workflow: [
    'Create reporting period',
    'Upload division timesheets',
    'Validate upload status',
    'Separate employee & daily-worker data',
    'Calculate attendance codes',
    'Generate combined recap',
    'Monitor leave records',
    'Export administrative reports',
  ],
  features: [
    {
      icon: 'network',
      title: 'Division-based uploads',
      description:
        'Manage timesheet submissions by division and monitor which areas have completed uploads for the selected period.',
    },
    {
      icon: 'storage',
      title: 'Automatic recap generation',
      description:
        'Consolidate submitted records into a structured recap while separating employee and daily-worker data.',
    },
    {
      icon: 'code',
      title: 'Attendance-code calculation',
      description:
        'Implement attendance logic that translates timesheet codes into a consistent recap for administrative review.',
    },
    {
      icon: 'award',
      title: 'Leave monitoring',
      description:
        'Maintain employee leave settings, monitor leave from timesheet records, and manage collective leave information.',
    },
    {
      icon: 'right',
      title: 'Period management',
      description:
        'Create and manage reporting periods so uploads, recaps, and monitoring are organized around the correct timeframe.',
    },
    {
      icon: 'teach',
      title: 'Excel & QR-supported reporting',
      description:
        'Export Excel recaps and support administrative reporting with QR- and Excel-enabled workflows.',
    },
  ],
  deployment:
    'The application was deployed on a Synology NAS as an internal company server, keeping the system available within PT ITCI Kartika Utama\'s own environment.',
  resultsIntro:
    'The system replaces a more manual recap process with a centralized workspace for period-based uploads, attendance information, and leave administration.',
  results: [
    {
      title: 'Reduced manual recap work',
      description:
        'Automatic recap generation reduces repeated manual consolidation of division timesheet data.',
    },
    {
      title: 'More structured data handling',
      description:
        'Period, division, employee, and daily-worker records are handled through a clearer administrative workflow.',
    },
    {
      title: 'Improved attendance & leave visibility',
      description:
        'Attendance code processing and leave monitoring make relevant HR information easier to review from timesheet records.',
    },
    {
      title: 'Ready-to-export reporting',
      description:
        'Consolidated records can be exported for administrative reporting and follow-up.',
    },
  ],
  impactLabel: 'Operational impact',
  intendedImpact:
    'A centralized timesheet workflow helps administrators spend less time compiling records, maintain clearer attendance and leave information, and retrieve period-based reporting from one internal system.',
  stackIntro:
    'Built with Laravel, Tailwind CSS, Livewire, JavaScript, and MySQL, then deployed to a Synology NAS as an internal company server.',
  stack: [
    { name: 'Laravel', purpose: 'Application framework and business logic' },
    { name: 'Livewire', purpose: 'Interactive search and administration workflows' },
    { name: 'Tailwind CSS', purpose: 'Styling and responsive interfaces' },
    { name: 'JavaScript', purpose: 'Client-side interface interactions' },
    { name: 'MySQL', purpose: 'Relational storage for timesheet and leave data' },
    { name: 'Synology NAS', purpose: 'Internal company-server deployment' },
  ],
  screenshots: [
    {
      image: dashboard,
      original: '/images/projects/timesheet-system/dashboard.jpg',
      title: 'Timesheet dashboard & upload status',
      alt: 'Timesheet Recap dashboard showing the active period, total divisions, uploaded and missing submissions, an import control, and division upload status.',
      caption:
        'The dashboard gives administrators an overview of the active period and each division\'s upload status before generating the recap.',
    },
    {
      image: combinedRecap,
      original: '/images/projects/timesheet-system/combined-recap.jpg',
      title: 'Combined employee timesheet recap',
      alt: 'Combined Timesheet Recap interface showing employee identifiers, roles, daily attendance codes, and grouping by division for August 2026.',
      caption:
        'A combined view brings employee attendance records from multiple divisions into a single period-based recap.',
    },
  ],
};
