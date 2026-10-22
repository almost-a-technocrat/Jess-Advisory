export type ClientCategory = 'sme' | 'property' | 'salaried';

export interface ComparisonItem {
  dimension: string;
  directBank: string;
  directBankRisk: string;
  jessAdvisory: string;
  jessAdvantage: string;
}

export interface ServiceItem {
  id: string;
  category: 'business' | 'personal' | 'refinance';
  title: string;
  subtitle: string;
  description: string;
  quantum: string;
  tenure: string;
  idealFor: string[];
  keyHighlights: string[];
  commonPitfall: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeframe: string;
  securityNote: string;
}

export interface ChecklistCategory {
  id: string;
  name: string;
  targetPersona: string;
  description: string;
  items: {
    name: string;
    description: string;
    importance: 'Essential' | 'Conditional' | 'Supporting';
  }[];
}

export interface RepaymentRow {
  amount: number;
  label: string;
  term5yr: number;
  term10yr: number;
  term15yr: number;
  term20yr: number;
  term30yr?: number;
  minGrossIncomeEst: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  highlight?: string;
}
