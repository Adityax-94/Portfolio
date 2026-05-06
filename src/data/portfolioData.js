// ===== PROJECTS DATA =====
export const projects = [
  {
    id: 'twominds',
    title: 'TwoMinds',
    subtitle: 'AI Debate Arena',
    flagship: true,
    problem: 'Traditional AI interactions are single-agent, linear, and lack adversarial reasoning. There was no system that could simulate structured intellectual debate between AI agents with real-time evaluation.',
    approach: 'Built a multi-agent debate system using LangGraph state machines to orchestrate two LLM agents with distinct personas. A third Judge agent evaluates arguments across logic, persuasion, and evidence dimensions using weighted scoring.',
    innovations: [
      'Multi-agent state machine orchestration with LangGraph',
      'Real-time debate streaming via Server-Sent Events (SSE)',
      'Judge agent with multi-dimensional argument scoring',
      'Dynamic persona injection and debate topic routing',
      'Production deployment with Railway + Vercel'
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'React', 'Groq'],
    github: 'https://github.com/adityachavan',
    live: '#',
    architecture: {
      nodes: [
        { id: 'user', label: 'User Input', type: 'input' },
        { id: 'orchestrator', label: 'LangGraph Orchestrator', type: 'core' },
        { id: 'agent1', label: 'Agent Alpha', type: 'agent' },
        { id: 'agent2', label: 'Agent Beta', type: 'agent' },
        { id: 'judge', label: 'Judge Agent', type: 'judge' },
        { id: 'sse', label: 'SSE Stream', type: 'output' },
        { id: 'ui', label: 'React UI', type: 'output' },
      ],
      edges: [
        { from: 'user', to: 'orchestrator' },
        { from: 'orchestrator', to: 'agent1' },
        { from: 'orchestrator', to: 'agent2' },
        { from: 'agent1', to: 'judge' },
        { from: 'agent2', to: 'judge' },
        { from: 'judge', to: 'orchestrator' },
        { from: 'orchestrator', to: 'sse' },
        { from: 'sse', to: 'ui' },
      ]
    }
  },
  {
    id: 'spotify-recommender',
    title: 'Spotify Recommendation System',
    subtitle: 'Intelligent Music Discovery',
    flagship: false,
    problem: 'Generic music recommendations fail to capture nuanced user preferences. Existing systems rely on simple collaborative filtering without combining multiple ML paradigms for better accuracy.',
    approach: 'Developed a hybrid recommendation engine combining deep learning embeddings, traditional ML classifiers, and association rule mining to deliver personalized song recommendations with explainable reasoning.',
    innovations: [
      'Hybrid ML pipeline: Deep Learning + Association Rules',
      'Feature engineering from audio characteristics',
      'Explainable recommendation reasoning',
      'Model evaluation with A/B testing framework',
      'Streamlit deployment for interactive demos'
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/adityachavan',
    live: '#',
    architecture: {
      nodes: [
        { id: 'data', label: 'Spotify Dataset', type: 'input' },
        { id: 'features', label: 'Feature Engineering', type: 'core' },
        { id: 'dl', label: 'Deep Learning Model', type: 'agent' },
        { id: 'ml', label: 'ML Classifiers', type: 'agent' },
        { id: 'rules', label: 'Association Rules', type: 'agent' },
        { id: 'ensemble', label: 'Ensemble Layer', type: 'judge' },
        { id: 'output', label: 'Recommendations', type: 'output' },
      ],
      edges: [
        { from: 'data', to: 'features' },
        { from: 'features', to: 'dl' },
        { from: 'features', to: 'ml' },
        { from: 'features', to: 'rules' },
        { from: 'dl', to: 'ensemble' },
        { from: 'ml', to: 'ensemble' },
        { from: 'rules', to: 'ensemble' },
        { from: 'ensemble', to: 'output' },
      ]
    }
  },
  {
    id: 'founder-research',
    title: 'Founder Research Agent',
    subtitle: 'Autonomous Deep Research',
    flagship: false,
    problem: 'Researching founders and companies requires hours of manual browsing, reading, and synthesizing information from multiple sources. No tool existed to autonomously conduct deep, structured research.',
    approach: 'Engineered an autonomous AI research agent using LangGraph that plans research tasks, browses the web, extracts and synthesizes information, and generates structured reports — all without human intervention.',
    innovations: [
      'Autonomous multi-step research planning',
      'Web browsing with intelligent content extraction',
      'Memory system for context accumulation',
      'Structured report generation with citations',
      'Docker containerization for isolated execution'
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Docker', 'Tavily API'],
    github: 'https://github.com/adityachavan',
    live: '#',
    architecture: {
      nodes: [
        { id: 'query', label: 'Research Query', type: 'input' },
        { id: 'planner', label: 'Planning Agent', type: 'core' },
        { id: 'browser', label: 'Web Browser', type: 'agent' },
        { id: 'extractor', label: 'Content Extractor', type: 'agent' },
        { id: 'memory', label: 'Memory Store', type: 'judge' },
        { id: 'synthesizer', label: 'Report Synthesizer', type: 'core' },
        { id: 'report', label: 'Structured Report', type: 'output' },
      ],
      edges: [
        { from: 'query', to: 'planner' },
        { from: 'planner', to: 'browser' },
        { from: 'browser', to: 'extractor' },
        { from: 'extractor', to: 'memory' },
        { from: 'memory', to: 'planner' },
        { from: 'memory', to: 'synthesizer' },
        { from: 'synthesizer', to: 'report' },
      ]
    }
  }
];

// ===== SKILLS DATA =====
export const skills = {
  'Languages': [
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'C++', level: 65 },
  ],
  'AI / ML': [
    { name: 'LangChain', level: 90 },
    { name: 'LangGraph', level: 92 },
    { name: 'TensorFlow', level: 78 },
    { name: 'PyTorch', level: 72 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'Hugging Face', level: 80 },
    { name: 'OpenAI API', level: 88 },
    { name: 'Groq', level: 85 },
  ],
  'Tools & Frameworks': [
    { name: 'FastAPI', level: 85 },
    { name: 'React', level: 78 },
    { name: 'Docker', level: 75 },
    { name: 'Git', level: 88 },
    { name: 'Streamlit', level: 82 },
    { name: 'Node.js', level: 70 },
  ],
  'Systems & Infrastructure': [
    { name: 'Multi-Agent Systems', level: 92 },
    { name: 'LLM Orchestration', level: 90 },
    { name: 'RAG Pipelines', level: 85 },
    { name: 'Vector Databases', level: 78 },
    { name: 'CI/CD', level: 70 },
    { name: 'Cloud Deploy', level: 72 },
  ]
};

// ===== EXPERIENCE DATA =====
export const experiences = [
  {
    role: 'Training & Placement Committee Member',
    organization: 'College T&P Cell',
    period: '2024 – Present',
    description: 'Coordinating placement activities, organizing mock interviews, and bridging the gap between students and industry recruiters.',
    icon: '🎯'
  },
  {
    role: 'AI Association Member',
    organization: 'College AI Club',
    period: '2023 – Present',
    description: 'Active contributor to AI research discussions, workshop facilitation, and hands-on project mentoring for junior students.',
    icon: '🧠'
  },
  {
    role: 'Project Lead — AI Initiatives',
    organization: 'Academic Projects',
    period: '2023 – Present',
    description: 'Led multiple AI/ML projects from ideation to deployment, managing cross-functional teams and ensuring production-quality deliverables.',
    icon: '🚀'
  }
];

// ===== NAV LINKS =====
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
