import type { ImageMetadata } from 'astro';

type Detail = { title: string; description: string };
export type CaseStudy = {
  number: string;
  category: string;
  title: string;
  organization: string;
  role: string;
  focus: string;
  url: string;
  summary: string;
  overview: string;
  problem: string;
  challenges: Detail[];
  solution: string;
  workflowTitle: string;
  workflowDescription: string;
  workflowOrdered?: boolean;
  workflow: string[];
  features: (Detail & { icon: string })[];
  documentWorkflows?: Detail[];
  deployment?: string;
  resultsIntro: string;
  results: Detail[];
  impactLabel?: string;
  intendedImpact: string;
  stackIntro: string;
  stack: { name: string; purpose: string }[];
  headings: Record<
    'overview' | 'problem' | 'solution' | 'results' | 'stack',
    [string, string]
  >;
  screenshots: {
    image: ImageMetadata;
    original: string;
    title: string;
    alt: string;
    caption: string;
  }[];
};
