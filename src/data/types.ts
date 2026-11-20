export type ResearchAreaSlug =
  | 'natural-language-processing'
  | 'large-language-models'
  | 'multimodal-learning'
  | 'computer-vision'
  | 'trustworthy-explainable-ai'
  | 'retrieval-augmented-generation'
  | 'agentic-ai'
  | 'low-resource-languages'
  | 'machine-learning-deep-learning';

export interface ResearchArea {
  id: string;
  slug: ResearchAreaSlug;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  keyQuestions: string[];
  methodologies: string[];
  image: string;
  figureCaption: string;
  motif: 'lattice' | 'attention' | 'crossmodal' | 'spatial' | 'verifiable' | 'retrieval' | 'agent' | 'lingual' | 'manifold';
}

export type PublicationType =
  | 'Conference Paper'
  | 'Journal Article'
  | 'Workshop Paper'
  | 'Preprint'
  | 'Dataset / Benchmark';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  researchArea: string;
  researchAreaSlug: ResearchAreaSlug;
  publicationType: PublicationType;
  abstract: string;
  doi: string;
  paperUrl: string;
  pdfUrl: string;
  codeUrl?: string;
  bibtex: string;
  isPlaceholderRecord: boolean;
}

export type MemberCategory =
  | 'Principal Investigator'
  | 'Faculty and Research Scientists'
  | 'Postdoctoral Researchers'
  | 'PhD Students'
  | "Master's Students"
  | 'Undergraduate Researchers'
  | 'Alumni';

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  category: MemberCategory;
  position: string;
  affiliationNote?: string;
  interests: string[];
  biography: string;
  email?: string;
  links: {
    googleScholar?: string;
    orcid?: string;
    github?: string;
    website?: string;
  };
  isPlaceholderProfile: boolean;
}

export type ProjectStatus = 'Active' | 'Completed' | 'Collaborative' | 'Open-Source Tool & Dataset';

export interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  domain: string;
  researchAreaSlug: ResearchAreaSlug;
  status: ProjectStatus;
  timeframe: string;
  abstract: string;
  methodology: string[];
  expectedOutcomes: string[];
  teamMembers: string[];
  relatedPublicationIds: string[];
  repositoryUrl?: string;
  datasetUrl?: string;
  featured: boolean;
  image: string;
  isPlaceholderRecord: boolean;
}

export type NewsCategory =
  | 'Publications'
  | 'Conference Acceptances'
  | 'Research Awards'
  | 'Team'
  | 'Workshops & Seminars'
  | 'Collaborations'
  | 'Releases';

export interface NewsItem {
  id: string;
  date: string;
  isoDate: string;
  category: NewsCategory;
  title: string;
  summary: string;
  linkLabel?: string;
  linkPath?: string;
  isPlaceholderRecord: boolean;
}

export interface OpportunityRole {
  id: string;
  title: string;
  level: string;
  commitment: string;
  summary: string;
  qualifications: string[];
  applicationSteps: string[];
}
