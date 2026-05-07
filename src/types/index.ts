export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  includes: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  relatedCaseStudy?: string;
}

export type CaseStudyCategory =
  | "Branding"
  | "Social Media"
  | "SEO"
  | "Paid Ads"
  | "Web Design";

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  category: CaseStudyCategory;
  problem: string;
  solution: string;
  result: string;
  kpi: { label: string; value: string }[];
  strategy: string;
  execution: string[];
  testimonial?: { quote: string; author: string; role: string };
  cover: string; // gradient placeholder id
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  isVideo?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  to: string;
}
