import { TeamMember, MemberCategory } from './types';

export const MEMBER_CATEGORIES: MemberCategory[] = [
  'Principal Investigator',
  'Faculty and Research Scientists',
  'Postdoctoral Researchers',
  'PhD Students',
  "Master's Students",
  'Undergraduate Researchers',
  'Alumni'
];

/**
 * Clearly marked placeholder team roster organized into all 7 academic tiers.
 * Replace placeholder entries with verified CLMI Lab members.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pi-placeholder',
    name: 'Dr. [Principal Investigator Name]',
    initials: 'PI',
    category: 'Principal Investigator',
    position: 'Director & Principal Investigator, CLMI Lab (Placeholder Profile)',
    affiliationNote: 'Associate Professor of Computer Science · [Host University Placeholder]',
    interests: [
      'Casual & Pragmatic NLP',
      'Multimodal Foundation Models',
      'Trustworthy Reasoning',
      'Low-Resource Languages'
    ],
    biography:
      'Placeholder biography: Leads the Casual Language and Multimodal Intelligence Lab, investigating how computational systems interpret informal human communication, connect linguistic and visual context, and maintain verifiable reasoning under real-world ambiguity.',
    email: 'pi@clmi-lab.org (Placeholder)',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'faculty-01',
    name: 'Dr. [Research Scientist 01 Placeholder]',
    initials: 'RS',
    category: 'Faculty and Research Scientists',
    position: 'Affiliated Research Scientist (Placeholder Profile)',
    affiliationNote: 'Visiting Faculty Collaborator · [Department Placeholder]',
    interests: ['Computer Vision', 'Open-Vocabulary Perception', 'Cross-Modal Alignment'],
    biography:
      'Placeholder biography: Focuses on compositional visual scene understanding and geometric grounding priors for multimodal transformers.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'postdoc-01',
    name: 'Dr. [Postdoctoral Fellow 01 Placeholder]',
    initials: 'PF',
    category: 'Postdoctoral Researchers',
    position: 'Postdoctoral Research Fellow (Placeholder Profile)',
    interests: ['Mechanistic Interpretability', 'Trustworthy AI', 'LLM Calibration'],
    biography:
      'Placeholder biography: Studies causal circuit analysis, uncertainty calibration, and faithful attribution in large language and vision-language models.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'phd-01',
    name: '[PhD Candidate 01 Placeholder]',
    initials: 'P1',
    category: 'PhD Students',
    position: 'PhD Student in Computer Science (Placeholder Profile)',
    interests: ['Retrieval-Augmented Generation', 'Provenance Verification', 'Multimodal Indexing'],
    biography:
      'Placeholder biography: Researches multimodal retrieval architectures and sentence-level citation verification for complex scientific documents.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'phd-02',
    name: '[PhD Candidate 02 Placeholder]',
    initials: 'P2',
    category: 'PhD Students',
    position: 'PhD Student in AI & Language (Placeholder Profile)',
    interests: ['Casual Language & Pragmatics', 'Code-Switching', 'Low-Resource NLP'],
    biography:
      'Placeholder biography: Develops morphology-consistent tokenization and pragmatic dialogue benchmarks across under-resourced and dialectal varieties.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'phd-03',
    name: '[PhD Candidate 03 Placeholder]',
    initials: 'P3',
    category: 'PhD Students',
    position: 'PhD Student in Machine Learning (Placeholder Profile)',
    interests: ['Agentic AI', 'Hierarchical Planning', 'Interactive Tool Verification'],
    biography:
      'Placeholder biography: Investigates state-invariant verification and safe recovery mechanisms for multi-step tool-using language agents.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      orcid: 'https://orcid.org/',
      github: 'https://github.com/'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'ms-01',
    name: "[Master's Researcher 01 Placeholder]",
    initials: 'M1',
    category: "Master's Students",
    position: "M.S. Research Student (Placeholder Profile)",
    interests: ['Multimodal Reasoning', 'Document Layout Analysis', 'Evaluation'],
    biography:
      'Placeholder biography: Working on multimodal benchmark construction for interpreting scientific charts, figures, and colloquial annotations.',
    links: {
      github: 'https://github.com/',
      orcid: 'https://orcid.org/'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'ms-02',
    name: "[Master's Researcher 02 Placeholder]",
    initials: 'M2',
    category: "Master's Students",
    position: "M.S. Research Student (Placeholder Profile)",
    interests: ['Deep Learning Optimization', 'Representation Geometry', 'Continual Learning'],
    biography:
      'Placeholder biography: Exploring out-of-distribution generalization and spectral properties of joint vision-language embedding spaces.',
    links: {
      github: 'https://github.com/',
      googleScholar: 'https://scholar.google.com/'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'ug-01',
    name: '[Undergraduate Researcher 01 Placeholder]',
    initials: 'U1',
    category: 'Undergraduate Researchers',
    position: 'Undergraduate Research Assistant (Placeholder Profile)',
    interests: ['Conversational NLP', 'Dataset Curation', 'Annotation Tooling'],
    biography:
      'Placeholder biography: Assisting with corpus curation, inter-annotator agreement tooling, and evaluation pipelines for informal dialogue.',
    links: {
      github: 'https://github.com/'
    },
    isPlaceholderProfile: true
  },
  {
    id: 'alumni-01',
    name: 'Dr. [Alumni Member 01 Placeholder]',
    initials: 'A1',
    category: 'Alumni',
    position: 'Former Lab Member · Next: [Post-Lab Position Placeholder]',
    interests: ['Discourse Parsing', 'Multimodal Dialogue'],
    biography:
      'Placeholder alumni record: Completed graduate research on pragmatic coherence and cross-modal grounding.',
    links: {
      googleScholar: 'https://scholar.google.com/',
      website: '#profile-placeholder'
    },
    isPlaceholderProfile: true
  }
];
