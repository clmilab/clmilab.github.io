import { ResearchProject } from './types';

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: 'proj-casual-grounding',
    slug: 'pragmatic-multimodal-grounding',
    title: '[Placeholder Project] Pragmatic Grounding in Colloquial Multimodal Dialogue',
    domain: 'Multimodal Learning & NLP',
    researchAreaSlug: 'multimodal-learning',
    status: 'Active',
    timeframe: '2025 – Present',
    abstract:
      'Investigates how vision-language models interpret informal, elliptical, and context-dependent human utterances when grounded in real-world visual scenes and multi-turn conversation histories.',
    methodology: [
      'Constructing paired colloquial discourse and scene-graph annotations capturing implicit pragmatics and referent ambiguity.',
      'Training cross-modal alignment objectives that condition visual region selection on conversational intent rather than literal lexical overlap.',
      'Evaluating robustness against dialectal phrasing, ellipsis, and corrective follow-up turns.'
    ],
    expectedOutcomes: [
      'Open benchmark dataset for pragmatic multimodal reference resolution.',
      'Reproducible alignment training codebase and diagnostic evaluation scripts.',
      'Empirical analysis of modality dominance under informal linguistic queries.'
    ],
    teamMembers: ['[PI Placeholder]', '[Placeholder Author A]', '[Placeholder Author B]'],
    relatedPublicationIds: ['pub-2026-pragmatic-vlm', 'pub-2024-casual-bench'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    featured: true,
    image: '/src/assets/images/research_multimodal_vision_1795142782813.jpg',
    isPlaceholderRecord: true
  },
  {
    id: 'proj-verifiable-rag',
    slug: 'provenance-verified-multimodal-rag',
    title: '[Placeholder Project] Provenance-Verified Multimodal Retrieval-Augmented Generation',
    domain: 'Retrieval-Augmented Generation & Trustworthy AI',
    researchAreaSlug: 'retrieval-augmented-generation',
    status: 'Active',
    timeframe: '2025 – Present',
    abstract:
      'Develops hybrid neural-symbolic retrieval and attribution verification pipelines capable of synthesizing answers across scholarly documents, tables, and figures with auditable sentence-level citations.',
    methodology: [
      'Jointly indexing paragraph spans, structured table cells, and visual figure regions within a unified late-interaction retrieval store.',
      'Training lightweight claim-verification models to detect unsupported extrapolations prior to output emission.',
      'Designing human-centered inspection interfaces showing direct source evidence spans.'
    ],
    expectedOutcomes: [
      'Open-source provenance verification library for academic and scientific RAG workflows.',
      'Benchmarks measuring citation precision, recall, and abstention calibration.'
    ],
    teamMembers: ['[PI Placeholder]', '[Placeholder Author C]', '[Placeholder Author A]'],
    relatedPublicationIds: ['pub-2026-faithful-rag', 'pub-2025-causal-explain'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    featured: true,
    image: '/src/assets/images/research_trustworthy_agents_1795142783270.jpg',
    isPlaceholderRecord: true
  },
  {
    id: 'proj-low-resource-kit',
    slug: 'equitable-low-resource-language-toolkit',
    title: '[Placeholder Project] Morphology-Aware Tooling for Low-Resource & Dialectal NLP',
    domain: 'Low-Resource Language Technologies',
    researchAreaSlug: 'low-resource-languages',
    status: 'Open-Source Tool & Dataset',
    timeframe: '2024 – Present',
    abstract:
      'An open-source tokenization, alignment, and evaluation toolkit reducing subword fragmentation and compute overhead for morphologically rich and under-represented languages.',
    methodology: [
      'Incorporating morphological boundary priors into subword vocabulary induction without requiring large-scale annotated corpora.',
      'Benchmarking cross-lingual transfer efficiency across conversational, educational, and civic domains.'
    ],
    expectedOutcomes: [
      'Drop-in Hugging Face compatible tokenizer adaptation modules.',
      'Community-reviewed evaluation guidelines for script-diverse NLP.'
    ],
    teamMembers: ['[Placeholder Author D]', '[Placeholder Author E]', '[PI Placeholder]'],
    relatedPublicationIds: ['pub-2025-low-resource-tok'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    datasetUrl: 'https://huggingface.co/',
    featured: true,
    image: '/src/assets/images/research_nlp_llm_1795142782660.jpg',
    isPlaceholderRecord: true
  },
  {
    id: 'proj-state-safe-agents',
    slug: 'state-verified-tool-agents',
    title: '[Placeholder Project] State-Verified Planning for Interactive Scientific AI Agents',
    domain: 'Agentic AI and AI Agents',
    researchAreaSlug: 'agentic-ai',
    status: 'Collaborative',
    timeframe: '2025 – Present',
    abstract:
      'A collaborative initiative designing pre-condition and post-condition verification layers for tool-using agents operating in computational notebooks, codebases, and structured data environments.',
    methodology: [
      'Modeling tool invocations as typed state transitions with explicit invariant checks.',
      'Evaluating error-recovery trajectories under noisy API responses and partial observability.'
    ],
    expectedOutcomes: [
      'Deterministic sandbox harness for benchmarking multi-step agent safety.',
      'Verification middleware for reproducible scientific workflows.'
    ],
    teamMembers: ['[Placeholder Author B]', '[Placeholder Author F]', '[PI Placeholder]'],
    relatedPublicationIds: ['pub-2025-agentic-guardrails'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    featured: false,
    image: '/src/assets/images/research_trustworthy_agents_1795142783270.jpg',
    isPlaceholderRecord: true
  },
  {
    id: 'proj-casual-bench',
    slug: 'casualbench-evaluation-suite',
    title: '[Placeholder Dataset] CasualBench: Diagnostic Suite for Informal & Code-Switched Language',
    domain: 'Natural Language Processing (NLP)',
    researchAreaSlug: 'natural-language-processing',
    status: 'Completed',
    timeframe: '2023 – 2024',
    abstract:
      'Completed benchmark release characterizing how modern language models handle colloquial expressions, discourse ellipsis, pragmatic repair, and multilingual code-switching.',
    methodology: [
      'Stratified sampling across conversational registers with multi-annotator pragmatic validity checks.',
      'Baseline evaluation across open-weight and frontier foundation models.'
    ],
    expectedOutcomes: [
      'Publicly archived evaluation split and scoring harness.',
      'Error taxonomy for colloquial language failures.'
    ],
    teamMembers: ['[Placeholder Author A]', '[Placeholder Author D]', '[Placeholder Author G]'],
    relatedPublicationIds: ['pub-2024-casual-bench'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    datasetUrl: 'https://huggingface.co/',
    featured: false,
    image: '/src/assets/images/research_nlp_llm_1795142782660.jpg',
    isPlaceholderRecord: true
  },
  {
    id: 'proj-spatial-vision',
    slug: 'relational-depth-open-vocabulary-vision',
    title: '[Placeholder Project] Compositional Spatial Reasoning in Open-Vocabulary Computer Vision',
    domain: 'Computer Vision & Deep Learning',
    researchAreaSlug: 'computer-vision',
    status: 'Completed',
    timeframe: '2023 – 2024',
    abstract:
      'Explores geometric depth conditioning and relational graph layers to strengthen open-vocabulary object grounding under spatial prepositions and occlusion.',
    methodology: [
      'Integrating monocular depth priors with cross-modal transformer attention.',
      'Testing compositional generalization on synthetic and real-world cluttered indoor scenes.'
    ],
    expectedOutcomes: [
      'Pretrained spatial grounding checkpoints and ablation benchmarks.'
    ],
    teamMembers: ['[Placeholder Author F]', '[Placeholder Author B]'],
    relatedPublicationIds: ['pub-2024-spatial-cv'],
    repositoryUrl: 'https://github.com/clmi-lab-placeholder',
    featured: false,
    image: '/src/assets/images/research_multimodal_vision_1795142782813.jpg',
    isPlaceholderRecord: true
  }
];
