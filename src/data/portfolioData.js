export const projects = [
  {
    title: 'TwoMinds',
    summary: 'Multi-agent AI debate system with real-time evaluation',
    highlights: [
      'Two LLM agents with distinct personas debate via LangGraph state machines',
      'Judge agent scores arguments across logic, persuasion, and evidence',
      'Real-time streaming through FastAPI SSE, deployed on Railway + Vercel',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'React', 'Groq'],
    github: 'https://github.com/Adityax-94/TwoMinds',
  },
  {
    title: 'Gestify',
    summary: 'Real-time hand gesture recognition system for system action control',
    highlights: [
      'Maps 6 scale-invariant gestures (63-dim features) to system actions like volume and scrolling',
      'Custom data collection UI and 5-fold CV training pipeline for MLP classifier',
      'Built using MediaPipe Hands with a live confidence scoring overlay',
    ],
    tech: ['Python', 'MediaPipe', 'Scikit-learn', 'OpenCV', 'PyAutoGUI'],
    github: 'https://github.com/Adityax-94/Gestify',

  },
  {
    title: 'Founder Research Agent',
    summary: 'Autonomous AI agent that plans, browses, and synthesizes research',
    highlights: [
      'Multi-step research planning without human intervention',
      'Web browsing with intelligent content extraction and memory',
      'Structured report generation with citations, Dockerized for isolation',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Docker', 'Tavily API'],
    github: 'https://github.com/Adityax-94/Founder_reserach_agent',
  },
  {
    title: 'Spotify Recommendation System',
    summary: 'Hybrid ML pipeline combining deep learning and association rules',
    highlights: [
      'Deep learning embeddings + traditional ML classifiers for song recs',
      'Feature engineering from Spotify audio characteristics',
      'Interactive Streamlit dashboard for evaluation and demos',
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Streamlit'],
    github: 'https://github.com/Adityax-94/Song-preference',
  },
];

export const skills = {
  'Languages': [
    'Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL', 'NoSQL', 'TypeScript'
  ],

  'Data Science & Analytics': [
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'
  ],

  'Machine Learning & AI': [
    'OpenAI', 'Scikit-learn', 'TensorFlow', 'Keras', 'LangChain',
    'LangGraph', 'LightGBM', 'Gemini', 'OpenRouter', 'PyTorch', 'Hugging Face'
  ],

  'Web & Deployment': [
    'Flask', 'Docker', 'Joblib', 'React', 'Node.js', 'MongoDB', 'FastAPI'
  ],
  'Tools & Platforms': [
    'Git', 'GitHub', 'AWS', 'Groq', 'Digital Ocean', 'Vercel', 'Streamlit'
  ]
};

export const experience = [
  {
    role: 'Training & Placement Committee',
    org: 'College T&P Cell',
    period: '2024 – Present',
  },
  {
    role: 'AI Association Member',
    org: 'College AI Club',
    period: '2023 – Present',
  },
  {
    role: 'Project Lead — AI Initiatives',
    org: 'Academic Projects',
    period: '2023 – Present',
  },
];
