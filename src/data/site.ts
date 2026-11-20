/**
 * Central laboratory configuration and copy.
 * Administrators can update affiliation, contact endpoints, and editorial copy here.
 */
export const SITE_CONFIG = {
  shortName: 'CLMI Lab',
  fullName: 'Casual Language and Multimodal Intelligence Lab',
  eyebrow: 'CASUAL LANGUAGE AND MULTIMODAL INTELLIGENCE LAB',
  heroHeadline: 'Understanding Language, Connecting Modalities, Advancing Intelligence.',
  heroDescription:
    'We explore fundamental and applied research in artificial intelligence, natural language processing, and multimodal intelligence to develop systems that understand, reason, and interact with the world.',
  heroImage: '/src/assets/images/hero_multimodal_research_1795142782872.jpg',
  labEnvironmentImage: '/src/assets/images/lab_environment_campus_1795142782888.jpg',
  introHeading: 'Bridging Everyday Discourse and Grounded Machine Reasoning',
  introParagraphs: [
    'Human communication is inherently informal, contextual, and multimodal. Everyday discourse weaves together colloquial language, implicit pragmatics, visual context, and shared cultural knowledge—phenomena that often challenge brittle, benchmark-bound AI systems.',
    'The Casual Language and Multimodal Intelligence Lab (CLMI Lab) investigates the mathematical foundations, neural architectures, and evaluation methodologies required for AI systems that comprehend natural human expression across text, vision, and structured knowledge while remaining transparent, verifiable, and equitable across global languages.'
  ],
  introPillars: [
    {
      index: '01',
      title: 'Pragmatic & Casual Language Understanding',
      detail: 'Modeling idiomatic, conversational, code-switched, and dialectal language beyond curated formal corpora.'
    },
    {
      index: '02',
      title: 'Cross-Modal Grounding & Alignment',
      detail: 'Connecting linguistic representations with visual scenes, spatial layout, and structured world knowledge.'
    },
    {
      index: '03',
      title: 'Verifiable & Inclusive Systems',
      detail: 'Designing retrieval-grounded, explainable, and resource-efficient architectures accessible to underrepresented languages.'
    }
  ],
  affiliation: {
    department: 'Department of Computer Science & Artificial Intelligence [Placeholder Affiliation]',
    university: '[Host University Name Placeholder]',
    building: '[Engineering & Computing Research Building, Suite Placeholder]',
    street: '[University Avenue / Campus Road Placeholder]',
    cityRegion: '[City, Postal Code, Country Placeholder]',
    coordinates: {
      lat: 37.4275,
      lng: -122.1697,
      label: '37.4275° N, 122.1697° W (Sample Campus Coordinates)'
    }
  },
  contact: {
    generalEmail: 'contact@clmi-lab.org (Placeholder)',
    admissionsEmail: 'join@clmi-lab.org (Placeholder)',
    officeHours: 'Monday – Friday, 09:00 – 17:30 (Local Academic Time)',
    seminarSchedule: 'Weekly Reading Group · Thursdays, 14:00 (Placeholder Schedule)'
  },
  socialLinks: [
    { label: 'GitHub Organization', href: 'https://github.com/clmi-lab-placeholder', handle: '@clmi-lab-placeholder' },
    { label: 'Google Scholar Profile', href: 'https://scholar.google.com/', handle: 'CLMI Lab Scholar [Placeholder]' },
    { label: 'Hugging Face Hub', href: 'https://huggingface.co/', handle: 'clmi-lab-datasets [Placeholder]' },
    { label: 'X / Academic Updates', href: 'https://x.com/', handle: '@clmi_lab [Placeholder]' }
  ],
  placeholderNotice:
    'Template Notice: All researcher names, publication citations, host university details, and announcements currently serve as clearly marked academic placeholders awaiting official CLMI Lab records.'
};
