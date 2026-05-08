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
    demo: 'https://two-minds-nine.vercel.app/',
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
    demo: 'https://huggingface.co/spaces/Adityax-94/gestify',
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
    demo: 'https://founder-reserach-agent.vercel.app/',
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
    demo: 'https://songs-recommender-by-aditya.streamlit.app/',
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
    role: 'Software Engineer Intern',
    org: 'Scalefull Technologies, Pune',
    period: 'Feb 2026 – Present',
    description: [
      'Collected, cleaned, and preprocessed structured and unstructured datasets for model training.',
      'Performed exploratory data analysis (EDA) to identify patterns and insights.',
      'Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrix.'
    ]
  },
  {
    role: 'Self Development',
    org: 'Open Source Contributions',
    description: [
      'Actively contributed to open-source ML projects, collaborating on the development and deployment of predictive models while integrating community-driven improvements to enhance system efficiency and scalability.',
      'Consistently engaged in self-development by exploring emerging research in LLMs, agentic AI, and deep learning — translating findings into practical implementations and staying current with the rapidly evolving AI/ML landscape.'
    ]
  }
];
