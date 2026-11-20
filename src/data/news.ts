import { NewsItem } from './types';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-01',
    date: 'October 2026',
    isoDate: '2026-10-14',
    category: 'Conference Acceptances',
    title: '[Placeholder Announcement] Two Manuscripts Accepted to Upcoming Computational Linguistics & Learning Venues',
    summary:
      'Sample update: Placeholder manuscripts on colloquial multimodal grounding and verifiable multimodal RAG have been added to the publications index.',
    linkLabel: 'View publications',
    linkPath: '/publications',
    isPlaceholderRecord: true
  },
  {
    id: 'news-02',
    date: 'September 2026',
    isoDate: '2026-09-22',
    category: 'Workshops & Seminars',
    title: '[Placeholder Seminar] Fall Reading Group on Pragmatics, Multimodal Alignment & Agent Safety',
    summary:
      'Sample update: Weekly lab reading group sessions resume for the academic term, open to affiliated graduate and undergraduate researchers.',
    linkLabel: 'Join & attend',
    linkPath: '/join',
    isPlaceholderRecord: true
  },
  {
    id: 'news-03',
    date: 'August 2026',
    isoDate: '2026-08-18',
    category: 'Releases',
    title: '[Placeholder Release] Open-Source Morphology-Consistent Tokenizer Toolkit v1.0',
    summary:
      'Sample update: Released modular tokenizer adaptation scripts and reproducible evaluation notebooks supporting twelve low-resource languages.',
    linkLabel: 'Explore project',
    linkPath: '/projects/equitable-low-resource-language-toolkit',
    isPlaceholderRecord: true
  },
  {
    id: 'news-04',
    date: 'July 2026',
    isoDate: '2026-07-05',
    category: 'Team',
    title: '[Placeholder Update] Welcoming Incoming PhD and Master’s Researchers for the Academic Year',
    summary:
      'Sample update: New graduate researchers join CLMI Lab to investigate retrieval provenance, causal interpretability, and multimodal grounding.',
    linkLabel: 'Meet the team',
    linkPath: '/people',
    isPlaceholderRecord: true
  },
  {
    id: 'news-05',
    date: 'May 2026',
    isoDate: '2026-05-12',
    category: 'Collaborations',
    title: '[Placeholder Collaboration] Cross-Disciplinary Working Group on Transparent Scientific AI Agents',
    summary:
      'Sample update: Joint research initiative establishing deterministic evaluation sandboxes for tool-using agents in scientific workflows.',
    linkLabel: 'View collaborative project',
    linkPath: '/projects/state-verified-tool-agents',
    isPlaceholderRecord: true
  },
  {
    id: 'news-06',
    date: 'March 2026',
    isoDate: '2026-03-19',
    category: 'Research Awards',
    title: '[Placeholder Recognition] Sample Fellowship / Best Paper Recognition Slot',
    summary:
      'Sample update: Reserved placeholder entry for laboratory fellowships, travel grants, or venue recognitions.',
    linkLabel: 'See research areas',
    linkPath: '/research',
    isPlaceholderRecord: true
  }
];
