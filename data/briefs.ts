export type BriefBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "section"; heading: string; text: string }
  | { type: "section-list"; heading: string; items: string[] };

export type Brief = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  relatedSurfaces: string[];
  blocks: BriefBlock[];
};

export const briefs: Brief[] = [
  {
    slug: "discovery-itself-is-accelerating",
    number: "05",
    title: "Discovery Itself Is Accelerating",
    subtitle: "Math, plasma physics, and the end of the safe timeline",
    summary:
      "AI systems are contributing to research-level mathematics and physics, compressing discovery across domains.",
    source: "Research community",
    category: "Research",
    publishedAt: "2026-11-18",
    relatedSurfaces: ["Desk OS", "Agent activity"],
    blocks: [
      {
        type: "paragraph",
        text: "AI systems are now contributing to research-level mathematics and physics:",
      },
      {
        type: "list",
        items: [
          "FrontierMath and related evaluations show leading models (GPT-6 Astra / Sol family, Claude Opus-class, Gemini 4 Argon) scoring at high levels on advanced and early-research problems.",
          "DeepMind’s AlphaProof-lineage systems have produced formal (Lean-checked) solutions to open problems, including Erdős problems, with peer-reviewed output.",
          "In plasma physics, AI-assisted work produced explicit counterexamples to Grad’s 1967 conjecture on MHD equilibria — results with direct relevance to stellarator fusion design. Multiple independent groups (including work with GPT-6 Astra and Gemini 4 Argon) found families of smooth 3D solutions that the conjecture said should not exist.",
          "At the same time, models are compressing parts of enzyme engineering, quantum error-correction tooling, and materials search into hours or days.",
        ],
      },
      {
        type: "section",
        heading: "Why it matters for operators",
        text: "The rate of change across domains is no longer linear. Waiting for “clarity” is a strategy that guarantees permanent lag. The only robust response is to treat process capture as infrastructure: track what elite operators actually do, turn it into structured data, train and clone the reliable parts, and keep the human judgment where it still has the highest marginal return.",
      },
      {
        type: "section",
        heading: "The line",
        text: "In a world that is becoming permanently more alien, the highest leverage is systematic capture of elite human process. That is the operating premise of Kurogami.",
      },
    ],
  },
  {
    slug: "physical-agents-are-being-built-for-learning",
    number: "04",
    title: "Physical Agents Are Being Built for Learning",
    subtitle: "Boston Dynamics Atlas hands and sim-to-real",
    summary:
      "Atlas hardware is designed around simulation and learning, shifting physical work toward policies trained at scale.",
    source: "Boston Dynamics",
    category: "Robotics",
    publishedAt: "2026-11-18",
    relatedSurfaces: ["Desk OS", "Agent workflows"],
    blocks: [
      {
        type: "paragraph",
        text: "Boston Dynamics released a new generation hand for Atlas: 13 degrees of freedom, four fingers, directly actuated, designed from the start for high-fidelity simulation and sim-to-real reinforcement learning. The emphasis is not human mimicry for its own sake; it is manufacturability, proprioceptive feedback, and the ability to train robust policies in simulation that transfer to hardware. Early results show promising transfer on dynamic tasks using actuator proprioception.",
      },
      {
        type: "paragraph",
        text: "Atlas is already being trained on real industrial workflows (automotive logistics and parts sequencing at Hyundai facilities).",
      },
      {
        type: "section",
        heading: "Why it matters for operators",
        text: "Dexterous physical work is shifting from teleoperation and hard-coded scripts toward policies trained at scale in simulation. The human role moves upstream: defining the task distribution, the success criteria, the edge cases, and the evaluation loops. That is process design.",
      },
      {
        type: "section",
        heading: "Process implication",
        text: "The same logic applies to knowledge work. The operators who can cleanly specify, track, and refine process will be the ones whose “policies” (human or agentic) actually work in the wild.",
      },
    ],
  },
  {
    slug: "the-body-is-coming-online",
    number: "03",
    title: "The Body Is Coming Online",
    subtitle: "Neuralink VOICE and the thought-to-speech threshold",
    summary:
      "Neuralink’s early VOICE trial results put thought-to-speech in human trials, with visible and emotionally salient results.",
    source: "Neuralink",
    category: "Neurotechnology",
    publishedAt: "2026-11-18",
    relatedSurfaces: ["Desk OS", "Human process"],
    blocks: [
      {
        type: "paragraph",
        text: "In September 2026 Neuralink released video from its VOICE trial: a participant with bulbar-onset ALS (Terry) produced speech by thinking the words. The system decoded cortical signals and rendered them in a synthetic version of his own pre-illness voice. He trained first by miming, then by pure intention. Separate updates reported record cursor-control bitrates after large-scale neural data training.",
      },
      {
        type: "paragraph",
        text: "This is still early-feasibility, limited participants, and unpublished full metrics (word-error rate, vocabulary, latency under varied conditions). It is also no longer science fiction. Thought-to-text and thought-to-voice are in human trials with visible, emotionally salient results.",
      },
      {
        type: "section",
        heading: "Why it matters for operators",
        text: "Interfaces are moving inward. The quality of the intention and the clarity of the internal process will matter more as bandwidth between mind and machine increases. Operators who already externalize and structure their decision process will adapt faster than those who keep it implicit.",
      },
      {
        type: "section",
        heading: "Process implication",
        text: "We are building the habit of making process visible and measurable now, while the interface is still screens and keyboards. That habit becomes higher leverage as the interface changes.",
      },
    ],
  },
  {
    slug: "biology-is-becoming-digital",
    number: "02",
    title: "Biology Is Becoming Digital",
    subtitle:
      "AlphaFold lineage, Antigravity, AlphaProtein Novo, and lab-validated design",
    summary:
      "Biomolecular prediction, annotation, and protein design are extending from computational results to measured activity.",
    source: "Google DeepMind & collaborators",
    category: "Biology",
    publishedAt: "2026-11-18",
    relatedSurfaces: ["Desk OS", "Research"],
    blocks: [
      {
        type: "paragraph",
        text: "Five years after AlphaFold, the stack has expanded. AlphaFold 3 and related systems now support broader biomolecular prediction. Google DeepMind and collaborators have released tools for functional annotation at scale (ProtNLM), antimicrobial peptide search (Google Antigravity — an agentic science workbench), and generative de-novo enzyme design (AlphaProtein Novo). Recent work shows new-to-nature enzymes with measured activity on benchmark reactions and on applied targets (pharmaceutical motifs, environmental toxins).",
      },
      {
        type: "section-list",
        heading: "Parallel advances",
        items: [
          "Structure prediction speed-ups (reported 8.6× in targeted epitope-focused workflows for cancer-related binders).",
          "Function-preserving watermarking of AI-designed proteins (Nature, experimentally validated binding).",
          "Continued mapping of previously intractable structures (e.g., apoB100 / LDL scaffold work aided by AlphaFold).",
        ],
      },
      {
        type: "section",
        heading: "Why it matters for operators",
        text: "Discovery cycles that once took years are compressing into weeks or days when the right human process sits on top of the models. The limiting factor is no longer “can we predict structure?” It is “do we have operators who know which targets matter, how to design the search, and how to interpret wet-lab feedback?”",
      },
      {
        type: "section",
        heading: "Process implication",
        text: "The same pattern applies outside biology. High-quality human process is the input that turns general models into domain leverage. Capture it or stay reactive.",
      },
    ],
  },
  {
    slug: "models-have-crossed-the-threshold",
    number: "01",
    title: "Models Have Crossed the Threshold",
    subtitle: "GPT-6 Astra / Sol / Luna and the new cost curve",
    summary:
      "Frontier capability is becoming cheaper and more usable; directed process is now the scarce resource.",
    source: "OpenAI",
    category: "Models",
    publishedAt: "2026-11-18",
    relatedSurfaces: ["Desk OS", "Agent workflows"],
    blocks: [
      {
        type: "paragraph",
        text: "In September–October 2026, OpenAI released the GPT-6 family. Astra is positioned as the frontier model: state-of-the-art on computer use, software engineering, cybersecurity, science, and professional workflows. It saturates or near-saturates several hard benchmarks (FrontierMath Tier 4 ~98%, ARC-AGI-3 near-ceiling in reported configurations). Sol and Luna bring near-frontier capability at substantially lower cost — Sol is repeatedly cited at roughly one-fifth the token price of Astra while remaining competitive on coding and agentic tasks.",
      },
      {
        type: "section-list",
        heading: "Key shifts",
        items: [
          "Models now interleave reasoning and answering (users see partial output while the system continues working).",
          "Intelligent UI lets the model return interactive elements, charts, and tools inside the conversation.",
          "Agentic performance on real workflows (AutomationBench, OSWorld-style computer use, DeepSWE) has moved from demo to usable cost-performance.",
        ],
      },
      {
        type: "section",
        heading: "Why it matters for operators",
        text: "Raw model intelligence is no longer the scarce resource. The bottleneck is directed process: clear judgment about what to ask, how to constrain, when to intervene, and how to evaluate output against reality. The people who systematically capture and refine that judgment will compound faster than those who simply prompt harder.",
      },
      {
        type: "section",
        heading: "Process implication",
        text: "Desk OS exists to turn that judgment into structured, trainable data before the next model drop makes the gap even wider.",
      },
    ],
  },
];

export const sources = [...new Set(briefs.map((brief) => brief.source))];
export const categories = [...new Set(briefs.map((brief) => brief.category))];

export function categorySlug(category: string) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function getCategoryFromSlug(slug: string) {
  return categories.find((category) => categorySlug(category) === slug);
}

export function getBriefsForCategory(category: string) {
  return briefs.filter((brief) => brief.category === category);
}

export function getBrief(slug: string) {
  return briefs.find((brief) => brief.slug === slug);
}
