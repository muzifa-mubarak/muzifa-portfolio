// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// text anywhere on the site — the UI never needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muzifa Mubarak Ali",
  role: "AI Engineer",
  roleLine: "Building production LLM systems — RAG pipelines, multi-agent orchestration, full-stack AI apps.",
  location: "Tiruchirappalli, India",
  extra: "UAE Residence Visa Holder",
  email: "muzifa@gmail.com",
  phone: "+91 9597604932",

  // ⚠️ Update these with your real profile URLs
  links: {
    github: "https://github.com/muzifa-mubarak",
    linkedin: "https://linkedin.com/in/muzifa-mubarak",
    email: "mailto:muzifa@gmail.com",
    phone: "tel:+919597604932",
  },

  summary:
    "AI Engineer with hands-on experience building production LLM systems — RAG pipelines, multi-agent orchestration, and full-stack AI-powered applications. Proficient across the generative AI stack, from transformer architecture and fine-tuning to LangChain/LangGraph agent design, FastAPI deployment, and vector-DB-backed semantic search. Currently developing an AI-powered e-learning platform and delivering ML/generative AI training for industry practitioners.",
};

export const education = [
  {
    degree: "B.Tech, Artificial Intelligence & Data Science",
    school: "Saranathan College of Engineering, Tiruchirappalli",
    period: "May 2021 – May 2025",
    detail: "CGPA: 8.2 / 10",
  },
  {
    degree: "Higher Secondary — Computer Science",
    school: "Sharjah Indian School, Sharjah, UAE",
    period: "Mar 2019 – Mar 2021",
    detail: "85%",
  },
];

export const experience = [
  {
    title: "AI Consultant",
    org: "Ascent AI Technologies",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Architecting an AI-powered e-learning platform (React + Python + MongoDB) featuring course enrollment, progress tracking, automated certificate generation, and post-course AI support chat.",
      "Built an FAQ/Q&A RAG chatbot using LangChain + vector embeddings to deliver accurate, context-aware responses across course content.",
      "Designed full-stack Python backend with FastAPI, integrating MongoDB for course data management and a REST API layer for the React frontend.",
      "Conducting AI training sessions covering ML fundamentals, generative AI, and hands-on model-building projects for professionals and students.",
    ],
    stack: ["React", "Python", "FastAPI", "MongoDB", "LangChain", "RAG"],
  },
  {
    title: "AI/ML Engineer Intern",
    org: "Blackwins Tech Solution LLP",
    location: "Tiruchirappalli, India",
    period: "May 2025 – Nov 2025",
    points: [
      "Implemented Retrieval-Augmented Generation (RAG) pipelines with vector databases (pgvector / Chroma) and SQL-backed chatbot backends, enabling semantic search over enterprise knowledge bases.",
      "Built a transformer model from scratch in PyTorch, gaining deep understanding of attention mechanisms, tokenization, and training dynamics.",
      "Engineered multi-agent systems using LangGraph, CrewAI, AutoGen, and Camel AI for complex workflow automation, tool orchestration, and decision-making pipelines.",
      "Developed and deployed production AI services via FastAPI + PostgreSQL, integrating NLP preprocessing pipelines with REST APIs serving real-time inference.",
      "Explored agentic AI patterns including MCP Server integration and LangGraph state-machine workflows for orchestrated tool-use agents.",
    ],
    stack: ["RAG", "pgvector", "Chroma", "PyTorch", "LangGraph", "CrewAI", "AutoGen", "FastAPI", "PostgreSQL", "MCP"],
  },
  {
    title: "Research Intern",
    org: "National Institute of Technology (NIT), Trichy",
    location: "Tiruchirappalli, India",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Conducted ML research under Dr. M. Brindha, applying ensemble methods (Random Forest, AdaBoost) to classification tasks in computer vision.",
      "Built preprocessing pipelines for image data — normalization, feature extraction with OpenCV — and evaluated models across accuracy, precision, and recall metrics.",
    ],
    stack: ["Random Forest", "AdaBoost", "OpenCV", "Computer Vision"],
  },
];

export const projects = [
  {
    title: "AI-Powered E-Learning Platform",
    status: "In Development",
    tags: ["Python", "FastAPI", "React.js", "MongoDB", "LangChain", "RAG"],
    category: "GenAI",
    description:
      "End-to-end course platform with an AI-driven FAQ chatbot, adaptive Q&A, post-course support, and automated certificate issuance on completion.",
    points: [
      "RAG pipeline indexes course material in a vector store, returning grounded answers and reducing hallucination in student-facing AI responses.",
    ],
  },
  {
    title: "AI Travel Planner with LangGraph",
    status: "Completed",
    tags: ["LangGraph", "LangChain", "OpenAI / HF LLMs", "Mermaid"],
    category: "Agents",
    description:
      "Agentic system converting natural-language travel queries into structured day-wise itineraries via a LangGraph state-machine pipeline.",
    points: [
      "Integrated LangGraph workflow visualization (Mermaid diagrams) to surface the AI decision graph, enabling transparent debugging of agent routing logic.",
      "Designed a modular architecture for plug-in integration of flight, hotel, and weather APIs — built with a production-readiness mindset.",
    ],
  },
  {
    title: "Context-Aware Fashion Recommendation System",
    status: "Completed",
    tags: ["PyTorch", "TensorFlow", "BERT", "GNN", "ResNet-50"],
    category: "Deep Learning",
    description:
      "Hybrid deep learning recommender combining ResNet-50 (image features) and Graph Neural Networks (relationship learning) for high-accuracy outfit matching.",
    points: [
      "Integrated BERT for metadata text processing and wired live e-commerce APIs to validate real-time product availability for recommended outfits.",
    ],
  },
  {
    title: "Real-Time Sign Language Recognition",
    status: "Completed",
    tags: ["OpenCV", "Random Forest", "AdaBoost", "ASL MNIST"],
    category: "Computer Vision",
    description:
      "Webcam-based gesture classification pipeline using ensemble ML and hand-tracking algorithms.",
    points: ["Achieved 82% accuracy on ASL MNIST with an optimized real-time inference pipeline."],
    metric: { value: "82%", label: "accuracy on ASL MNIST" },
  },
];

export const skills = {
  "LLM / GenAI": ["LangChain", "LangGraph", "RAG", "CrewAI", "AutoGen", "Camel AI", "Hugging Face", "OpenAI API", "MCP Server"],
  "Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "FastAPI"],
  "Languages": ["Python", "SQL", "Java", "C"],
  "Databases": ["PostgreSQL", "MongoDB", "pgvector", "Chroma"],
  "Frontend": ["React.js"],
  "Data & Tools": ["Power BI", "Excel (Advanced)", "n8n", "PySpark", "Git", "VS Code"],
};

export const honors = [
  { title: "Winner — Paper Presentation on XenoBots" },
  { title: "Finalist — Intel OneAPI Hackathon (SatisfAI)" },
  { title: "Finalist — SARA Hackathon 2023 (CVD prediction via Retinal Imaging)" },
  { title: "Organized and delivered an AI workshop for school students" },
  { title: "Ongoing AI/ML training sessions for industry practitioners" },
];

// Node-graph map of the site itself, styled like a LangGraph state machine.
export const siteGraph = [
  { id: "hero", label: "start" },
  { id: "about", label: "profile" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];
