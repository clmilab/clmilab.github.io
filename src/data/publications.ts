import { Publication } from './types';

/**
 * Clearly marked placeholder academic publications demonstrating database filtering,
 * BibTeX citation rendering, and scholarly typography.
 */
export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2026-pragmatic-vlm',
    title: '[Placeholder Paper] Grounding Colloquial Discourse in Compositional Vision-Language Representations',
    authors: ['[Placeholder Author A]', '[Placeholder Author B]', '[PI Placeholder]'],
    venue: 'Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL · Placeholder Venue)',
    year: 2026,
    researchArea: 'Multimodal Learning and Intelligence',
    researchAreaSlug: 'multimodal-learning',
    publicationType: 'Conference Paper',
    abstract:
      'Sample abstract: We examine how multimodal foundation models resolve implicit conversational references, slang, and visual pragmatics in everyday dialogue. We introduce a diagnostic benchmark and cross-modal alignment regularizer that improves grounding accuracy without sacrificing zero-shot generalization.',
    doi: '10.0000/clmi.placeholder.2026.01',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@inproceedings{placeholder2026grounding,
  title={Grounding Colloquial Discourse in Compositional Vision-Language Representations},
  author={Placeholder Author A and Placeholder Author B and PI Placeholder},
  booktitle={Proceedings of ACL (Placeholder Entry)},
  year={2026}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2026-faithful-rag',
    title: '[Placeholder Paper] Verifiable Sentence-Level Attribution in Multimodal Retrieval-Augmented Generation',
    authors: ['[Placeholder Author C]', '[Placeholder Author A]', '[PI Placeholder]'],
    venue: 'International Conference on Learning Representations (ICLR · Placeholder Venue)',
    year: 2026,
    researchArea: 'Retrieval-Augmented Generation (RAG)',
    researchAreaSlug: 'retrieval-augmented-generation',
    publicationType: 'Conference Paper',
    abstract:
      'Sample abstract: Retrieval-augmented generation systems frequently synthesize unsupported claims when evidence spans text, tables, and charts. We formulate a token-level provenance verification objective and open evaluation suite for fine-grained citation auditing.',
    doi: '10.0000/clmi.placeholder.2026.02',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@inproceedings{placeholder2026verifiable,
  title={Verifiable Sentence-Level Attribution in Multimodal Retrieval-Augmented Generation},
  author={Placeholder Author C and Placeholder Author A and PI Placeholder},
  booktitle={ICLR (Placeholder Entry)},
  year={2026}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2025-low-resource-tok',
    title: '[Placeholder Paper] Morphology-Consistent Subword Segmentation for Low-Resource Conversational Corpora',
    authors: ['[Placeholder Author D]', '[Placeholder Author E]', '[PI Placeholder]'],
    venue: 'Transactions of the Association for Computational Linguistics (TACL · Placeholder Venue)',
    year: 2025,
    researchArea: 'Low-Resource Language Technologies',
    researchAreaSlug: 'low-resource-languages',
    publicationType: 'Journal Article',
    abstract:
      'Sample abstract: Standard byte-pair vocabularies disproportionately fragment agglutinative and under-represented scripts, inflating inference latency and degrading cross-lingual transfer. We propose a morphology-consistent tokenizer adaptation scheme evaluated across twelve typologically diverse languages.',
    doi: '10.0000/clmi.placeholder.2025.03',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@article{placeholder2025morphology,
  title={Morphology-Consistent Subword Segmentation for Low-Resource Conversational Corpora},
  author={Placeholder Author D and Placeholder Author E and PI Placeholder},
  journal={TACL (Placeholder Entry)},
  year={2025}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2025-agentic-guardrails',
    title: '[Placeholder Paper] State-Invariant Verification for Tool-Using Language Agents in Interactive Environments',
    authors: ['[Placeholder Author B]', '[Placeholder Author F]', '[PI Placeholder]'],
    venue: 'Conference on Neural Information Processing Systems (NeurIPS · Placeholder Venue)',
    year: 2025,
    researchArea: 'Agentic AI and AI Agents',
    researchAreaSlug: 'agentic-ai',
    publicationType: 'Conference Paper',
    abstract:
      'Sample abstract: Multi-step AI agents frequently accumulate silent state errors across sequential API and shell interactions. This work introduces lightweight pre-condition and post-condition state assertions that substantially lower irreversible execution failures.',
    doi: '10.0000/clmi.placeholder.2025.04',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@inproceedings{placeholder2025state,
  title={State-Invariant Verification for Tool-Using Language Agents in Interactive Environments},
  author={Placeholder Author B and Placeholder Author F and PI Placeholder},
  booktitle={NeurIPS (Placeholder Entry)},
  year={2025}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2025-causal-explain',
    title: '[Placeholder Paper] Measuring Causal Faithfulness of Mechanistic Explanations in Transformer Attention Heads',
    authors: ['[Placeholder Author E]', '[Placeholder Author C]', '[PI Placeholder]'],
    venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP · Placeholder Venue)',
    year: 2025,
    researchArea: 'Trustworthy and Explainable AI',
    researchAreaSlug: 'trustworthy-explainable-ai',
    publicationType: 'Conference Paper',
    abstract:
      'Sample abstract: Interpretability metrics often disagree on whether identified circuits are causally necessary for model predictions. We formalize a counterfactual intervention protocol separating correlational saliency from causal computation.',
    doi: '10.0000/clmi.placeholder.2025.05',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    bibtex: `@inproceedings{placeholder2025causal,
  title={Measuring Causal Faithfulness of Mechanistic Explanations in Transformer Attention Heads},
  author={Placeholder Author E and Placeholder Author C and PI Placeholder},
  booktitle={EMNLP (Placeholder Entry)},
  year={2025}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2024-casual-bench',
    title: '[Placeholder Benchmark] CasualBench: An Open Evaluation Suite for Informal, Code-Switched, and Pragmatic Dialogue',
    authors: ['[Placeholder Author A]', '[Placeholder Author D]', '[Placeholder Author G]', '[PI Placeholder]'],
    venue: 'NeurIPS Datasets and Benchmarks Track (Placeholder Venue)',
    year: 2024,
    researchArea: 'Natural Language Processing (NLP)',
    researchAreaSlug: 'natural-language-processing',
    publicationType: 'Dataset / Benchmark',
    abstract:
      'Sample abstract: We introduce CasualBench, a curated benchmark suite assessing LLM comprehension of colloquial syntax, code-switching, ellipsis, and discourse repair across authentic conversational domains.',
    doi: '10.0000/clmi.placeholder.2024.06',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@inproceedings{placeholder2024casualbench,
  title={CasualBench: An Open Evaluation Suite for Informal, Code-Switched, and Pragmatic Dialogue},
  author={Placeholder Author A and Placeholder Author D and Placeholder Author G and PI Placeholder},
  booktitle={NeurIPS Datasets and Benchmarks (Placeholder Entry)},
  year={2024}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2024-spatial-cv',
    title: '[Placeholder Paper] Relational Depth Priors for Open-Vocabulary Visual Scene Parsing',
    authors: ['[Placeholder Author F]', '[Placeholder Author B]', '[PI Placeholder]'],
    venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR · Placeholder Venue)',
    year: 2024,
    researchArea: 'Computer Vision',
    researchAreaSlug: 'computer-vision',
    publicationType: 'Conference Paper',
    abstract:
      'Sample abstract: Open-vocabulary detectors struggle with relative spatial prepositions under partial occlusion. We integrate geometric depth priors into cross-modal attention layers to improve compositional spatial grounding.',
    doi: '10.0000/clmi.placeholder.2024.07',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    codeUrl: 'https://github.com/clmi-lab-placeholder',
    bibtex: `@inproceedings{placeholder2024relational,
  title={Relational Depth Priors for Open-Vocabulary Visual Scene Parsing},
  author={Placeholder Author F and Placeholder Author B and PI Placeholder},
  booktitle={CVPR (Placeholder Entry)},
  year={2024}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2024-manifold-preprint',
    title: '[Placeholder Preprint] Representation Geometry and Out-of-Distribution Calibration in Multimodal Encoders',
    authors: ['[Placeholder Author C]', '[Placeholder Author E]'],
    venue: 'arXiv Preprint · Working Manuscript (Placeholder)',
    year: 2024,
    researchArea: 'Machine Learning and Deep Learning',
    researchAreaSlug: 'machine-learning-deep-learning',
    publicationType: 'Preprint',
    abstract:
      'Sample abstract: An empirical and theoretical study linking singular value decay in joint multimodal embedding spaces to calibrated uncertainty under covariate shift.',
    doi: '10.0000/clmi.placeholder.2024.08',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    bibtex: `@article{placeholder2024geometry,
  title={Representation Geometry and Out-of-Distribution Calibration in Multimodal Encoders},
  author={Placeholder Author C and Placeholder Author E},
  journal={arXiv Preprint (Placeholder Entry)},
  year={2024}
}`,
    isPlaceholderRecord: true
  },
  {
    id: 'pub-2023-llm-workshop',
    title: '[Placeholder Workshop] Lightweight Calibration Probes for Instruction-Tuned Language Models',
    authors: ['[Placeholder Author G]', '[PI Placeholder]'],
    venue: 'ACL Workshop on Trustworthy NLP (Placeholder Venue)',
    year: 2023,
    researchArea: 'Large Language Models (LLMs)',
    researchAreaSlug: 'large-language-models',
    publicationType: 'Workshop Paper',
    abstract:
      'Sample abstract: A compact probing architecture estimating token-level epistemic confidence in instruction-tuned models with minimal inference overhead.',
    doi: '10.0000/clmi.placeholder.2023.09',
    paperUrl: '#publication-placeholder',
    pdfUrl: '#pdf-placeholder',
    bibtex: `@inproceedings{placeholder2023probes,
  title={Lightweight Calibration Probes for Instruction-Tuned Language Models},
  author={Placeholder Author G and PI Placeholder},
  booktitle={Workshop on Trustworthy NLP (Placeholder Entry)},
  year={2023}
}`,
    isPlaceholderRecord: true
  }
];
