export type StockPick = {
  ticker: string;
  company: string;
  focus: string;
  rationale: string;
};

export type StockGroup = {
  briefNumber: string;
  briefTitle: string;
  briefSlug: string;
  stocks: StockPick[];
};

export const stockGroups: StockGroup[] = [
  {
    briefNumber: "01",
    briefTitle: "Models Have Crossed the Threshold",
    briefSlug: "models-have-crossed-the-threshold",
    stocks: [
      {
        ticker: "NVDA",
        company: "NVIDIA",
        focus: "AI compute infrastructure",
        rationale:
          "The company supplies the GPUs and systems that train and run the models discussed in the brief. Data center AI is the majority of its business. It is the primary infrastructure layer for the cost curve shift described.",
      },
      {
        ticker: "MSFT",
        company: "Microsoft",
        focus: "Cloud and AI deployment",
        rationale:
          "Azure hosts major model labs and enterprise AI workloads. Copilot and the company’s own model efforts sit on top of that infrastructure. It is one of the clearest public ways to own the deployment side of the model threshold.",
      },
      {
        ticker: "AVGO",
        company: "Broadcom",
        focus: "Custom silicon and networking",
        rationale:
          "Designs custom AI accelerators and networking silicon used by hyperscalers. As model inference scales and cost matters more, custom silicon and interconnect become more important. It sits in the same infrastructure layer as NVIDIA but with a different product mix.",
      },
    ],
  },
  {
    briefNumber: "02",
    briefTitle: "Biology Is Becoming Digital",
    briefSlug: "biology-is-becoming-digital",
    stocks: [
      {
        ticker: "TMO",
        company: "Thermo Fisher Scientific",
        focus: "Life-science tools and lab workflows",
        rationale:
          "Supplies instruments, reagents, and services used across protein structure work, cryo-EM, and lab workflows that generate the data models like AlphaFold are trained and validated against. It is the picks-and-shovels layer for the biology stack in the brief.",
      },
      {
        ticker: "RXRX",
        company: "Recursion Pharmaceuticals",
        focus: "AI-driven drug discovery",
        rationale:
          "Runs an AI-driven drug discovery platform that combines automated biology with machine learning. It is one of the more direct public attempts to industrialize the kind of discovery cycle compression the brief describes.",
      },
      {
        ticker: "TWST",
        company: "Twist Bioscience",
        focus: "Synthetic DNA",
        rationale:
          "Synthesizes DNA at scale. Synthetic DNA is a required input for many of the protein design, enzyme, and synthetic biology experiments that sit downstream of structure prediction and generative models.",
      },
    ],
  },
  {
    briefNumber: "03",
    briefTitle: "The Body Is Coming Online",
    briefSlug: "the-body-is-coming-online",
    stocks: [
      {
        ticker: "MDT",
        company: "Medtronic",
        focus: "Medtech and neural modulation",
        rationale:
          "A large medtech company with existing neural modulation and device businesses. It is not a pure brain-computer interface play, but it has the manufacturing, regulatory, and clinical infrastructure that any scaled interface technology would eventually need.",
      },
      {
        ticker: "BFLY",
        company: "Butterfly Network",
        focus: "Imaging and sensing",
        rationale:
          "Makes handheld ultrasound-on-a-chip devices. Some brain-computer interface approaches use ultrasound. It is a smaller, higher-volatility name in the imaging and sensing layer that could matter if non-invasive or minimally invasive interfaces advance.",
      },
      {
        ticker: "ISRG",
        company: "Intuitive Surgical",
        focus: "Computer-assisted surgical robotics",
        rationale:
          "Dominates robotic surgery. While not a neural interface company, it is the clearest public example of high-precision, computer-assisted physical intervention in the body. It shows what scaled surgical robotics looks like today.",
      },
    ],
  },
  {
    briefNumber: "04",
    briefTitle: "Physical Agents Are Being Built for Learning",
    briefSlug: "physical-agents-are-being-built-for-learning",
    stocks: [
      {
        ticker: "HYMTF",
        company: "Hyundai Motor",
        focus: "Robotics parent company",
        rationale:
          "Owns Boston Dynamics. Atlas and other Boston Dynamics systems are the physical agents referenced in the brief. Hyundai is the public parent that controls the robotics business.",
      },
      {
        ticker: "NVDA",
        company: "NVIDIA",
        focus: "Robotics simulation and compute",
        rationale:
          "Appears again because its Isaac simulation platform, Jetson hardware, and robotics models are used by multiple humanoid and industrial robot programs, including those connected to Boston Dynamics. It is the simulation and compute layer for sim-to-real work.",
      },
      {
        ticker: "ABBNY",
        company: "ABB",
        focus: "Industrial automation and deployment",
        rationale:
          "A major industrial automation and robotics company. It supplies the factory and logistics environments where physical agents are being deployed and trained. It is the installed base and industrial deployment layer.",
      },
    ],
  },
  {
    briefNumber: "05",
    briefTitle: "Discovery Itself Is Accelerating",
    briefSlug: "discovery-itself-is-accelerating",
    stocks: [
      {
        ticker: "GOOGL",
        company: "Alphabet",
        focus: "AI research and discovery",
        rationale:
          "DeepMind sits inside Alphabet. The brief references AlphaProof-style systems, plasma physics work, and other discovery results. Alphabet owns one of the primary research groups producing the kinds of results the brief describes.",
      },
      {
        ticker: "NVDA",
        company: "NVIDIA",
        focus: "Compute for AI-enabled science",
        rationale:
          "Appears a third time because the accelerated discovery work (math, physics, materials, biology) runs on the same GPU clusters. There is no clean public pure-play on “AI for science,” so the compute layer is the most direct exposure.",
      },
      {
        ticker: "ASML",
        company: "ASML",
        focus: "Advanced chip manufacturing equipment",
        rationale:
          "Makes the extreme ultraviolet lithography machines required to manufacture the advanced chips that power the models doing the discovery work. It is further up the supply chain but necessary for the compute that enables the acceleration the brief describes.",
      },
    ],
  },
];
