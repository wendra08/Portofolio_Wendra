import dashboard from '../../public/images/projects/procurement/admin-dashboard.jpg';
import tracking from '../../public/images/projects/procurement/request-tracking.jpg';
import type { CaseStudy } from './case-study';

export const procurement: CaseStudy = {
  number: '01',
  category: 'Business application',
  focus: 'Procurement & payment workflows',
  headings: {
    overview: ['One place to follow', 'the entire request.'],
    problem: ['Many departments.', 'One shared process.'],
    solution: ['From submission', 'to payment request.'],
    results: ['A clearer view.', 'A traceable workflow.'],
    stack: ['Built with', 'the Laravel ecosystem.'],
  },
  workflowTitle: 'The procurement journey',
  workflowDescription:
    'A high-level view of the stages represented in the system.',
  resultsIntro:
    'The result is an integrated application that brings together request management, approvals, document preparation, and process history.',
  stackIntro:
    'A PHP-based application with interactive interfaces, relational data storage, and automated office document generation.',
  title: 'Procurement and Payment Request Tracking',
  organization: 'PT ITCI Kartika Utama',
  role: 'Web application development',
  url: '/projects/procurement-payment-tracking/',
  summary:
    'An integrated web application connecting procurement submissions, approvals, purchasing, and payment requests in one traceable workflow.',
  overview:
    'I developed a web-based Procurement and Payment Request Tracking System for PT ITCI Kartika Utama to digitalize the end-to-end procurement workflow. It connects PPBJ submissions, Purchase Orders, Work Orders, Payment Recommendations, and Payment Requests through role-based approvals.',
  problem:
    'Procurement crosses several departments, each with its own decisions, documents, and responsibilities. The design challenge was to make that process easier to follow: who needs to act, which documents are required, and where a request stands from submission through payment.',
  challenges: [
    {
      title: 'Visibility across handoffs',
      description:
        'Keep the current stage and responsible role clear as a request moves between departments.',
    },
    {
      title: 'Document-heavy administration',
      description:
        'Reduce repeated document preparation and keep supporting files connected to the relevant request.',
    },
    {
      title: 'Traceable decisions',
      description:
        'Preserve approvals, revisions, and activity history so the process can be reviewed and followed up.',
    },
  ],
  solution:
    'The platform brings the workflow into a shared system with role-based approvals for requesters, managers, logistics, budgeting, finance, and operational management. Each participant can follow request progress and act on tasks assigned to their role.',
  workflow: [
    'PPBJ submission',
    'Manager approval',
    'Logistics verification',
    'Budget review',
    'Purchase / Work Order',
    'Payment recommendation',
    'Payment request',
    'Completion',
  ],
  features: [
    {
      icon: 'network',
      title: 'Status tracking & task queues',
      description:
        'Real-time request status and centralized task queues show what needs attention and who handles the next step.',
    },
    {
      icon: 'teach',
      title: 'Role-based approvals',
      description:
        'Approval and revision workflows connect requesters, managers, and the departments involved in procurement and payment.',
    },
    {
      icon: 'code',
      title: 'Automated document generation',
      description:
        'Generate Excel and Word documents using PhpSpreadsheet and PHPWord to support procurement administration.',
    },
    {
      icon: 'award',
      title: 'Digital signature integration',
      description:
        'Integrate digital signatures into the document and approval process.',
    },
    {
      icon: 'storage',
      title: 'Supporting document management',
      description:
        'Keep supporting files linked to procurement and payment requests for review and follow-up.',
    },
    {
      icon: 'right',
      title: 'Dashboards & audit trails',
      description:
        'Administrative dashboards provide an overview while activity histories record changes and decisions across the process.',
    },
  ],
  results: [
    {
      title: 'A connected procurement workflow',
      description:
        'Submissions, purchasing documents, payment recommendations, and payment requests can be managed within one application.',
    },
    {
      title: 'Clearer ownership and progress',
      description:
        'Request status, responsible roles, and task queues give participants a shared view of the process.',
    },
    {
      title: 'Repeatable document preparation',
      description:
        'Automated Excel and Word generation supports consistent document preparation alongside the approval workflow.',
    },
    {
      title: 'A reviewable process history',
      description:
        'Audit trails and revision records keep the sequence of actions available for follow-up and accountability.',
    },
  ],
  intendedImpact:
    'Together, these capabilities are designed to improve process visibility, reduce manual administration, strengthen accountability, and support more efficient collaboration across departments.',
  stack: [
    { name: 'Laravel', purpose: 'Application framework and workflow logic' },
    { name: 'Livewire', purpose: 'Interactive interfaces within Laravel' },
    { name: 'Alpine.js', purpose: 'Client-side interface interactions' },
    { name: 'Tailwind CSS', purpose: 'Styling and responsive layouts' },
    { name: 'MySQL', purpose: 'Relational data storage' },
    { name: 'PhpSpreadsheet', purpose: 'Excel document generation' },
    { name: 'PHPWord', purpose: 'Word document generation' },
  ],
  screenshots: [
    {
      image: dashboard,
      original: '/images/projects/procurement/admin-dashboard.jpg',
      title: 'Administrator workspace',
      alt: 'Procurement administrator dashboard with request totals, active processes, task queue, and departmental activity.',
      caption:
        'An administrative overview of PPBJ submissions, active processes, the task queue, and departmental activity.',
    },
    {
      image: tracking,
      original: '/images/projects/procurement/request-tracking.jpg',
      title: 'Request tracking & activity history',
      alt: 'Procurement request detail showing approval stages from PPBJ submission to payment and a chronological activity history.',
      caption:
        'A request timeline brings workflow stages, the responsible department, and recorded activities into one view.',
    },
  ],
};
