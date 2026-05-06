// ===== PROJECTS DATA =====
export const projects = [
  {
    id: 'twominds',
    title: 'TwoMinds',
    tagline: 'Multi-agent AI debate system with real-time evaluation',
    flagship: true,
    highlights: [
      'Two LLM agents with distinct personas debate in real-time via LangGraph state machines',
      'Judge agent scores arguments across logic, persuasion, and evidence dimensions',
      'Real-time streaming through FastAPI Server-Sent Events (SSE)',
      'Deployed end-to-end on Railway (backend) + Vercel (frontend)',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'React', 'Groq'],
    github: 'https://github.com/Adityax-94/TwoMinds',
  },
  {
    id: 'founder-research',
    title: 'Founder Research Agent',
    tagline: 'Autonomous AI agent that researches, synthesizes, and reports',
    flagship: false,
    highlights: [
      'Plans multi-step research tasks autonomously without human intervention',
      'Browses the web, extracts content, and accumulates context in memory',
      'Generates structured reports with citations from gathered research',
      'Containerized with Docker for isolated, reproducible execution',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Docker', 'Tavily API'],
    github: 'https://github.com/Adityax-94/Founder_reserach_agent',
  },
  {
    id: 'spotify-recommender',
    title: 'Spotify Recommendation System',
    tagline: 'Hybrid ML pipeline combining deep learning and association rules',
    flagship: false,
    highlights: [
      'Combines deep learning embeddings with traditional ML classifiers for recommendations',
      'Feature engineering from Spotify audio characteristics and metadata',
      'Association rule mining for explainable recommendation reasoning',
      'Interactive Streamlit dashboard for model evaluation and demos',
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/Adityax-94/Song-preference',
  },
];

// ===== TECH STACK =====
export const techStack = {
  'Languages': ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
  'AI & LLM Frameworks': ['LangChain', 'LangGraph', 'OpenAI API', 'Groq', 'Hugging Face'],
  'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Tools & Infrastructure': ['FastAPI', 'React', 'Docker', 'Git', 'Streamlit', 'Node.js'],
  'Systems': ['Multi-Agent Orchestration', 'LLM Pipelines', 'RAG Systems', 'Vector Databases'],
};

// ===== EXPERIENCE =====
export const experiences = [
  {
    role: 'Training & Placement Committee Member',
    organization: 'College T&P Cell',
    period: '2024 – Present',
    description: 'Coordinating placement activities, organizing mock interviews, and bridging the gap between students and industry recruiters.',
  },
  {
    role: 'AI Association Member',
    organization: 'College AI Club',
    period: '2023 – Present',
    description: 'Contributing to AI research discussions, facilitating workshops, and mentoring junior students on hands-on projects.',
  },
  {
    role: 'Project Lead — AI Initiatives',
    organization: 'Academic Projects',
    period: '2023 – Present',
    description: 'Led multiple AI/ML projects from ideation to deployment, managing cross-functional teams and delivering production-quality systems.',
  },
];

// ===== NAV LINKS =====
export const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
