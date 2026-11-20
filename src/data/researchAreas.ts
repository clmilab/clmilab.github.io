import { ResearchArea } from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'area-nlp',
    slug: 'natural-language-processing',
    index: '01',
    title: 'Natural Language Processing (NLP)',
    shortTitle: 'Natural Language Processing',
    summary:
      'Computational modeling of informal, conversational, and pragmatic language across discourse parsing, semantics, and sociolinguistic variation.',
    overview:
      'Our NLP group studies how language operates in real-world, non-canonical contexts—including casual dialogue, social media discourse, code-switching, and implicit pragmatic inference. Rather than assuming clean, edited prose, we develop syntactic, semantic, and discourse representations resilient to linguistic diversity.',
    keyQuestions: [
      'How do neural representations encode conversational implicature, irony, and pragmatic presupposition?',
      'How can semantic parsers remain robust under dialectal variation and informal orthography?',
      'What evaluation protocols faithfully measure human-aligned discourse coherence?'
    ],
    methodologies: ['Discourse Representation Theory', 'Pragmatic Inference Benchmarks', 'Cross-Dialectal Probing'],
    image: '/src/assets/images/research_nlp_llm_1795142782660.jpg',
    figureCaption: 'Fig. 1 — Geometric representation of semantic lattices and pragmatic discourse structures.',
    motif: 'lattice'
  },
  {
    id: 'area-llm',
    slug: 'large-language-models',
    index: '02',
    title: 'Large Language Models (LLMs)',
    shortTitle: 'Large Language Models',
    summary:
      'Investigating reasoning dynamics, alignment, context-window scaling, and mechanistic interpretability in foundation language models.',
    overview:
      'We analyze the internal mechanisms, post-training alignment properties, and inference-time reasoning behaviors of large language models. Our research bridges theoretical scaling behavior with practical efficiency, calibration, and instruction-following fidelity across complex multi-step tasks.',
    keyQuestions: [
      'Which attention circuits govern multi-hop compositional reasoning versus surface heuristic shortcuts?',
      'How does preference optimization reshape calibration and epistemic uncertainty?',
      'Can compact, domain-specialized models match frontier reliability at lower compute budgets?'
    ],
    methodologies: ['Mechanistic Interpretability', 'Calibration & Uncertainty Estimation', 'Parameter-Efficient Adaptation'],
    image: '/src/assets/images/research_nlp_llm_1795142782660.jpg',
    figureCaption: 'Fig. 2 — Structured attention topology across transformer layers.',
    motif: 'attention'
  },
  {
    id: 'area-multimodal',
    slug: 'multimodal-learning',
    index: '03',
    title: 'Multimodal Learning and Intelligence',
    shortTitle: 'Multimodal Learning',
    summary:
      'Unified architectures aligning language, vision, audio, and structured signals for grounded perception and cross-modal reasoning.',
    overview:
      'Intelligence rarely operates through a single sensory channel. Our multimodal research investigates joint embedding spaces, fine-grained vision-language grounding, and temporal synchronization across text, imagery, video, and acoustic streams.',
    keyQuestions: [
      'How can cross-modal models prevent modality collapse and genuinely fuse complementary evidence?',
      'What inductive biases support fine-grained spatial and temporal grounding from weak supervision?',
      'How do multimodal foundation models resolve ambiguity using conversational context?'
    ],
    methodologies: ['Cross-Modal Contrastive Alignment', 'Vision-Language Grounding', 'Unified Tokenization'],
    image: '/src/assets/images/research_multimodal_vision_1795142782813.jpg',
    figureCaption: 'Fig. 3 — Layered cross-modal feature projection between visual and linguistic subspaces.',
    motif: 'crossmodal'
  },
  {
    id: 'area-vision',
    slug: 'computer-vision',
    index: '04',
    title: 'Computer Vision',
    shortTitle: 'Computer Vision',
    summary:
      'Scene understanding, open-vocabulary visual recognition, document layout parsing, and compositional spatial perception.',
    overview:
      'Our computer vision agenda examines open-world perception, dense visual-spatial reasoning, and structured document and scene understanding. We focus on bridging low-level visual geometry with high-level semantic abstraction.',
    keyQuestions: [
      'How can visual encoders represent compositional object relations under occlusion and domain shift?',
      'What architectures best unify dense pixel prediction with open-vocabulary semantic queries?',
      'How do visual systems extract structured semantics from complex scientific and everyday imagery?'
    ],
    methodologies: ['Open-Vocabulary Segmentation', 'Spatial Relation Graphs', 'Document & Diagram Understanding'],
    image: '/src/assets/images/research_multimodal_vision_1795142782813.jpg',
    figureCaption: 'Fig. 4 — Hierarchical spatial feature planes and geometric depth encoding.',
    motif: 'spatial'
  },
  {
    id: 'area-trustworthy',
    slug: 'trustworthy-explainable-ai',
    index: '05',
    title: 'Trustworthy and Explainable AI',
    shortTitle: 'Trustworthy & Explainable AI',
    summary:
      'Faithful attribution, hallucination mitigation, fairness auditing, and robustness guarantees for high-stakes deployment.',
    overview:
      'As language and multimodal systems enter educational, clinical, and public-interest workflows, empirical accuracy alone is insufficient. We design faithful explanation methods, causal attribution probes, and rigorous red-teaming suites to ensure predictable behavior.',
    keyQuestions: [
      'When do post-hoc rationales reflect true model computation rather than plausible post-rationalization?',
      'How can we formally bound hallucination rates under distribution shift?',
      'What auditing frameworks expose demographic and linguistic disparities across modalities?'
    ],
    methodologies: ['Causal Feature Attribution', 'Faithfulness Auditing', 'Adversarial Robustness Testing'],
    image: '/src/assets/images/research_trustworthy_agents_1795142783270.jpg',
    figureCaption: 'Fig. 5 — Verifiable attribution pathways over structured reasoning nodes.',
    motif: 'verifiable'
  },
  {
    id: 'area-rag',
    slug: 'retrieval-augmented-generation',
    index: '06',
    title: 'Retrieval-Augmented Generation (RAG)',
    shortTitle: 'Retrieval-Augmented Generation',
    summary:
      'Dynamic knowledge grounding, multimodal retrieval indices, citation verification, and provenance-aware synthesis.',
    overview:
      'Static parametric memory struggles with evolving facts and verifiable provenance. We build dense and hybrid retrieval architectures, multimodal document indices, and fine-grained citation verification pipelines that anchor model outputs in inspectable primary sources.',
    keyQuestions: [
      'How can retrieval pipelines jointly index text, tables, charts, and visual figures without lossy serialization?',
      'How should generative models dynamically decide when to retrieve, abstain, or reconcile conflicting evidence?',
      'What metrics accurately evaluate sentence-level source attribution and provenance?'
    ],
    methodologies: ['Late-Interaction Multimodal Retrieval', 'Evidence Attribution Verification', 'Adaptive Query Decomposition'],
    image: '/src/assets/images/research_trustworthy_agents_1795142783270.jpg',
    figureCaption: 'Fig. 6 — Provenance-linked knowledge graph and multi-hop retrieval routing.',
    motif: 'retrieval'
  },
  {
    id: 'area-agentic',
    slug: 'agentic-ai',
    index: '07',
    title: 'Agentic AI and AI Agents',
    shortTitle: 'Agentic AI & Agents',
    summary:
      'Tool-using reasoning loops, hierarchical planning, interactive memory, and controllable multi-step problem solving.',
    overview:
      'We study interactive AI agents capable of planning over long horizons, invoking external scientific and software tools, recovering from execution errors, and collaborating safely with human researchers under explicit verification constraints.',
    keyQuestions: [
      'How can agents maintain coherent episodic memory across multi-turn interactive environments?',
      'What formal guardrails prevent cascading errors in autonomous tool-use trajectories?',
      'How do multimodal agents ground GUI, code, and environmental feedback into reliable action selection?'
    ],
    methodologies: ['Hierarchical Task Planning', 'Tool-Use Verification', 'Interactive Evaluation Sandboxes'],
    image: '/src/assets/images/research_trustworthy_agents_1795142783270.jpg',
    figureCaption: 'Fig. 7 — State-verified planning graph for interactive tool-using agents.',
    motif: 'agent'
  },
  {
    id: 'area-lowresource',
    slug: 'low-resource-languages',
    index: '08',
    title: 'Low-Resource Language Technologies',
    shortTitle: 'Low-Resource Languages',
    summary:
      'Cross-lingual transfer, script-resilient tokenization, community-centered benchmarks, and equitable language access.',
    overview:
      'Most advances in language intelligence remain concentrated in a small fraction of the world’s languages. Our lab investigates sample-efficient adaptation, script-agnostic tokenization, and participatory dataset design to broaden language technology equity.',
    keyQuestions: [
      'How can cross-lingual transfer preserve morphological and cultural nuance without English-centric bias?',
      'What tokenization strategies avoid severe fertility penalties on underrepresented scripts?',
      'How do we build sustainable evaluation benchmarks in partnership with native speaker communities?'
    ],
    methodologies: ['Morphology-Aware Tokenization', 'Zero-Shot Cross-Lingual Transfer', 'Participatory Corpus Curation'],
    image: '/src/assets/images/research_nlp_llm_1795142782660.jpg',
    figureCaption: 'Fig. 8 — Cross-lingual representational alignment across typologically diverse languages.',
    motif: 'lingual'
  },
  {
    id: 'area-mldl',
    slug: 'machine-learning-deep-learning',
    index: '09',
    title: 'Machine Learning and Deep Learning',
    shortTitle: 'Machine & Deep Learning',
    summary:
      'Optimization theory, representation geometry, sample efficiency, and foundational learning dynamics across neural architectures.',
    overview:
      'Underpinning our applied domains is core inquiry into deep learning theory, optimization geometry, and representation learning. We examine generalization under distribution shift, continual adaptation without catastrophic forgetting, and structured latent spaces.',
    keyQuestions: [
      'What geometric properties of learned representations predict out-of-distribution generalization?',
      'How can continual learning algorithms assimilate new tasks without eroding foundational capabilities?',
      'How do architectural inductive biases shape optimization stability at scale?'
    ],
    methodologies: ['Representation Geometry Analysis', 'Continual & Meta-Learning', 'Distribution-Shift Generalization'],
    image: '/src/assets/images/research_multimodal_vision_1795142782813.jpg',
    figureCaption: 'Fig. 9 — Smooth optimization manifolds and structured latent subspace trajectories.',
    motif: 'manifold'
  }
];
