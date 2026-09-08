import employeeDetail from '../../public/images/projects/sdm-system/employee-detail.jpg';
import login from '../../public/images/projects/sdm-system/internal-login.jpg';
import type { CaseStudy } from './case-study';

export const sdmSystem: CaseStudy = {
  number: '02',
  category: 'Human resources information system',
  title: 'SDM-System PT ITCI Kartika Utama',
  organization: 'PT ITCI Kartika Utama',
  role: 'HRIS development & internal deployment',
  focus: 'Employee administration & HR documents',
  url: '/projects/sdm-system/',
  summary:
    'An integrated HRIS centralizing employee records, contract monitoring, and automated HR documents on the company’s internal infrastructure.',
  overview:
    'I developed SDM-System, an integrated Human Resources Information System for PT ITCI Kartika Utama, to digitalize employee administration and improve the efficiency, accuracy, and accessibility of HR data. The application brings employee records, contracts, supporting documents, and administrative workflows into a centralized system.',
  headings: {
    overview: ['One employee record.', 'A connected HR workspace.'],
    problem: ['Every employee matters.', 'Every detail needs a home.'],
    solution: ['Centralized records.', 'Structured HR workflows.'],
    results: ['Less manual handling.', 'More accessible information.'],
    stack: ['A Laravel application.', 'Hosted on internal infrastructure.'],
  },
  problem:
    'Several HR processes were previously handled manually. Employee information, contract dates, and employment documents needed a more structured way to be stored, retrieved, and maintained. The challenge was to centralize this administration while supporting the different responsibilities of HR users.',
  challenges: [
    {
      title: 'Accessible employee information',
      description:
        'Bring employee master data and related records together so HR users can retrieve information without repeatedly assembling it by hand.',
    },
    {
      title: 'Contract lifecycle visibility',
      description:
        'Keep PKWT and PKWTT contract status, expiration dates, and follow-up documents visible within employee administration.',
    },
    {
      title: 'Repetitive document preparation',
      description:
        'Structure recurring document workflows, including compensation calculations, to reduce repeated manual preparation.',
    },
  ],
  solution:
    'The system combines employee master data, contract monitoring, training and certification records, exit management, insurance and administrative information, and employee documents in one web application. Role-based access control supports HR users, while import/export and automated document workflows support day-to-day administration.',
  workflowTitle: 'Connected HR administration',
  workflowDescription:
    'These areas share an employee-centered workspace. They support different HR activities rather than a single mandatory sequence.',
  workflowOrdered: false,
  workflow: [
    'Employee master data',
    'PKWT & PKWTT contracts',
    'Employment documents',
    'Expiration reminders',
    'Training & certifications',
    'Employee exits',
    'Insurance & administration',
    'Excel import / export',
  ],
  features: [
    {
      icon: 'storage',
      title: 'Employee master data',
      description:
        'Centralized employee profiles combine personal, employment, insurance, and administrative information.',
    },
    {
      icon: 'network',
      title: 'Contract monitoring & reminders',
      description:
        'Monitor PKWT and PKWTT contracts and keep expiration dates visible with reminders and related notices.',
    },
    {
      icon: 'code',
      title: 'Automated HR documents',
      description:
        'Generate Word documents for employment contracts, expiration notices, employment certificates, and compensation agreements.',
    },
    {
      icon: 'award',
      title: 'Training & certification records',
      description:
        'Maintain employee training and certification records alongside the wider employee administration system.',
    },
    {
      icon: 'right',
      title: 'Exit & document management',
      description:
        'Manage employee exits and maintain the supporting documents associated with an employee’s record.',
    },
    {
      icon: 'teach',
      title: 'Excel exchange & role-based access',
      description:
        'Import and export Excel data while controlling access according to the roles assigned to HR users.',
    },
  ],
  documentWorkflows: [
    {
      title: 'Employment contracts',
      description:
        'Automated preparation and Word generation support recurring employment contract administration.',
    },
    {
      title: 'Contract expiration notices',
      description:
        'Produce notices for contracts approaching their end date as part of the contract follow-up workflow.',
    },
    {
      title: 'Employment certificates',
      description:
        'Generate employment certificates through a structured HR document workflow.',
    },
    {
      title: 'PKWT compensation agreements',
      description:
        'Automatic calculations and Word document generation support the preparation of fixed-term contract compensation agreements.',
    },
  ],
  deployment:
    'The application was deployed on the company’s internal infrastructure using a Synology NAS, making the HRIS available within the organization’s own environment.',
  resultsIntro:
    'The project transformed several previously manual HR processes into a more structured and centralized digital system, supporting everyday HR administration.',
  results: [
    {
      title: 'Faster information retrieval',
      description:
        'Centralized employee records and related information support quicker access for HR users.',
    },
    {
      title: 'Better documentation',
      description:
        'Employee documents and automated Word workflows provide a more organized approach to recurring HR paperwork.',
    },
    {
      title: 'Improved data accuracy',
      description:
        'Structured records and automated calculations support more consistent data handling across HR processes.',
    },
    {
      title: 'More efficient HR operations',
      description:
        'Contract monitoring, reminders, and connected administrative modules help HR users manage routine work in one system.',
    },
  ],
  impactLabel: 'Operational impact',
  intendedImpact:
    'A more accessible and structured HR workspace helps the team maintain employee information, prepare documents, and follow up on contract administration with less manual handling.',
  stackIntro:
    'Built with Laravel, Tailwind CSS, JavaScript, and MySQL/MariaDB, with deployment on a Synology NAS within the company’s internal infrastructure.',
  stack: [
    { name: 'Laravel', purpose: 'Application framework and HR workflow logic' },
    { name: 'Tailwind CSS', purpose: 'Styling and responsive interfaces' },
    { name: 'JavaScript', purpose: 'Client-side interface interactions' },
    {
      name: 'MySQL / MariaDB',
      purpose: 'Relational storage for employee and administrative data',
    },
    {
      name: 'Synology NAS',
      purpose: 'Deployment on company-managed internal infrastructure',
    },
  ],
  screenshots: [
    {
      image: employeeDetail,
      original: '/images/projects/sdm-system/employee-detail.jpg',
      title: 'Employee detail & contract overview',
      alt: 'SDM-System employee detail interface showing employment status, contract type and expiration date, employee document access, and personal data fields.',
      caption:
        'An employee-centered view brings employment status, contract information, reminders, and document access together.',
    },
    {
      image: login,
      original: '/images/projects/sdm-system/internal-login.jpg',
      title: 'Internal system login',
      alt: 'PT ITCI Kartika Utama internal system login screen with email and password fields and access to the SDM environment.',
      caption:
        'The internal sign-in screen provides an entry point to the company’s employee administration environment.',
    },
  ],
};
