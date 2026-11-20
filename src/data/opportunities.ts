import { OpportunityRole } from './types';

export const OPPORTUNITY_ROLES: OpportunityRole[] = [
  {
    id: 'role-phd',
    title: 'PhD Students',
    level: 'Doctoral Track · Full-Time Research',
    commitment: '4–5 Years (Institutional Admissions Cycle)',
    summary:
      'We welcome prospective doctoral candidates passionate about foundational questions in NLP, LLMs, multimodal grounding, trustworthy AI, or low-resource language technologies.',
    qualifications: [
      'Strong academic foundation in Computer Science, Mathematics, Computational Linguistics, or Machine Learning.',
      'Proficiency in Python and modern deep learning frameworks (PyTorch / JAX).',
      'Demonstrated curiosity in open research problems; prior publications or independent technical projects are valued.'
    ],
    applicationSteps: [
      'Apply through the host department’s formal graduate admissions portal (placeholder link) and mention CLMI Lab in your statement of purpose.',
      'Email your CV, research statement, and 1–2 representative papers or code repositories to join@clmi-lab.org (Placeholder).'
    ]
  },
  {
    id: 'role-masters',
    title: "Master's Students",
    level: 'Graduate Thesis & Directed Research',
    commitment: '1–2 Semesters or Thesis Track',
    summary:
      'Current or incoming M.S. students interested in conducting thesis research or intensive independent studies across multimodal learning, RAG, and agentic systems.',
    qualifications: [
      'Enrolled in a relevant graduate degree program with coursework in ML, NLP, or Computer Vision.',
      'Ability to commit 15–20 hours per week to research execution, experiments, and weekly reading seminars.',
      'Clear interest in publishing reproducible research artifacts.'
    ],
    applicationSteps: [
      'Prepare a brief 1-page note describing the CLMI Lab research area that aligns with your goals.',
      'Send your academic transcript, CV, and GitHub profile prior to the start of the academic term.'
    ]
  },
  {
    id: 'role-undergrad',
    title: 'Undergraduate Research Assistants',
    level: 'Undergraduate Directed Research',
    commitment: '10–15 Hours / Week (Academic Term or Summer)',
    summary:
      'Motivated undergraduates eager to gain hands-on experience in dataset curation, model probing, multimodal evaluation, and open-source research engineering.',
    qualifications: [
      'Solid programming fundamentals in Python and data analysis libraries.',
      'Completed introductory algorithms, linear algebra, and probability coursework.',
      'Dependable collaboration habits and willingness to learn experimental rigor.'
    ],
    applicationSteps: [
      'Submit a short statement of interest (300 words), unofficial transcript, and links to coursework or open-source projects.',
      'Participate in a short technical conversation with a mentoring PhD student or the PI.'
    ]
  },
  {
    id: 'role-visiting',
    title: 'Visiting Researchers',
    level: 'Academic & Sabbatical Collaborations',
    commitment: '3–12 Months',
    summary:
      'Faculty visitors, postdoctoral fellows, and external doctoral scholars seeking collaborative research stays on shared multimodal or language intelligence projects.',
    qualifications: [
      'Active research agenda intersecting with one or more CLMI Lab themes.',
      'Institutional sponsorship or fellowship support for the duration of the visit.'
    ],
    applicationSteps: [
      'Reach out 3–6 months ahead of your proposed visit with a brief collaboration proposal and CV.',
      'Include proposed dates and alignment with ongoing laboratory projects.'
    ]
  },
  {
    id: 'role-intern',
    title: 'Research Interns',
    level: 'Summer & Term-Time Research Internships',
    commitment: '10–16 Weeks',
    summary:
      'Focused short-term research placements for advanced undergraduate or graduate students targeting an end-to-end research prototype or benchmark paper.',
    qualifications: [
      'Prior experience training, fine-tuning, or evaluating neural language or vision models.',
      'Strong technical writing and experimental documentation habits.'
    ],
    applicationSteps: [
      'Send your CV, preferred dates, and a concise pitch (1–2 paragraphs) outlining a concrete project idea.',
      'Applications are reviewed on a rolling basis ahead of summer and fall terms.'
    ]
  }
];
