import {
  javascript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs, docker, github,
  python, cpp, pytorch, tensorflow, aws, kubernetes, pandas, numpy, linux, sklearn, sql,
  hf, bny, holopin, unstop,
  clg, school, rgipt_logo, school1, school2,
  humanizeiqLogo, shoutrankLogo,
  hostly, auraspeak, llm_council, swiggy, fomc, gpt2, remote, attrition, ais, regalia,
} from "../assets";

const profiles = [
  {
    link: "https://github.com/DIVYANSH-675",
    icon: github,
  },
  {
    link: "https://www.linkedin.com/in/divyansh-gupta-214480252/",
    icon: "https://img.icons8.com/color/344/linkedin.png",
  },
  {
    link: "https://codeforces.com/profile/divyansh_8",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.codechef.com/users/divyansh675",
    icon: "https://img.icons8.com/color/344/codechef.png",
  },
  {
    link: "https://unstop.com/u/divyansh675",
    icon: unstop,
  },
];

const achievements = [
  {
    title: "Competitive Programming: Achieved Specialist Rating on Codeforces and 3-Star rank on CodeChef, demonstrating strong problem-solving abilities.",
  },
  {
    title: "Amazon ML Challenge 2024: Secured ~400th rank nationally among thousands of participants in machine learning competition.",
  },
  {
    title: "Amazon ML Summer School: Selected through competitive qualification process for advanced machine learning training program.",
  },
  {
    title: "Grand Finalist at HERE Hackathon, IIT Bombay Techfest: Competed among top teams at one of India's premier technical institutes.",
  },
  {
    title: "Winner of Code for Good Hackathon, IIT Mandi (Powered by Himalayan Startup Trek): First place in national-level hackathon showcasing innovation and technical excellence.",
  },
  {
    title: "JEE Advanced Top Ranker: Secured rank in Top 2% nationally in one of the world's most competitive engineering entrance examinations.",
  },
  {
    title: "Champion, Inter-branch MUN Competition: Led team to first place, demonstrating exceptional critical thinking, communication, and diplomatic skills.",
  },
  {
    title: "Winner, Group Discussion Round at SPE RGIPT SC Mock Placement: Excelled in recruitment simulation, gaining insights into corporate hiring processes.",
  },
  {
    title: "Pitch Tank Competition Finalist: Successfully pitched startup idea at AAPG & AIChE RGIPT SC event, receiving valuable investor feedback.",
  },
  {
    title: "Gold Medalist in Volleyball: District-level champion in KSS tournament, demonstrating teamwork and athletic excellence.",
  },
]

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Scikit-Learn",
    icon: sklearn,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const list = [
  {
    id: "ai_ml",
    title: "AI & ML",
  },
  {
    id: "web",
    title: "Web Dev",
  },
  {
    id: "other",
    title: "Tools & Other",
  },
];

export const aiProject = [
  {
    name: "AuraSpeak",
    description:
      "A real‑time voice AI stack: WebSocket mic streaming into FastAPI, low‑latency STT, streamed LLM responses, and live TTS back to the browser—built for interruption‑friendly, ultra‑responsive conversations on standard CPU.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "WebSockets", color: "green-text-gradient" },
      { name: "Deepgram", color: "pink-text-gradient" },
      { name: "OpenAI", color: "blue-text-gradient" },
      { name: "Groq", color: "green-text-gradient" },
      { name: "Uvicorn", color: "pink-text-gradient" },
    ],
    image: auraspeak,
    source_link: "https://github.com/DIVYANSH-675/Auraspeak",
    source_code_link: "https://github.com/DIVYANSH-675/Auraspeak",
  },
  {
    name: "LLM Council",
    description:
      "A multi-agent decision system where three AI personas (Analytical, Creative, Pragmatic) independently analyze your question, then debate their viewpoints before synthesizing a comprehensive final answer. Features safety filters and PII redaction.",
    tags: [
      { name: "OpenAI", color: "blue-text-gradient" },
      { name: "Gradio", color: "green-text-gradient" },
      { name: "Pydantic", color: "pink-text-gradient" },
      { name: "PyYAML", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
    ],
    image: llm_council,
    source_link: "https://github.com/DIVYANSH-675/LLM-Council",
    source_code_link: "https://github.com/DIVYANSH-675/LLM-Council",
  },
  {
    name: "Swiggy Review Trend Analysis (AI Agent)",
    description:
      "A production‑style review intelligence pipeline: cleans Swiggy Play‑Store reviews, routes each review to multiple topics with LLMs, detects and consolidates novel issues, and generates a 30‑day DuckDB trend report (CSV/HTML) with daily counts and sparklines.",
    tags: [
      { name: "Polars", color: "blue-text-gradient" },
      { name: "DuckDB", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Anthropic", color: "blue-text-gradient" },
      { name: "Sentence-Transformers", color: "green-text-gradient" },
      { name: "HDBSCAN", color: "pink-text-gradient" },
      { name: "Google Play Scraper", color: "blue-text-gradient" },
    ],
    image: swiggy,
    source_link: "https://github.com/DIVYANSH-675/AI-Agent-for-Swiggy-App-Review-Trend-Analysis",
    source_code_link: "https://github.com/DIVYANSH-675/AI-Agent-for-Swiggy-App-Review-Trend-Analysis",
  },
  {
    name: "FOMC Rate Predictor",
    description:
      "A full‑stack macro‑finance NLP system: scrapes and cleans FOMC statements, aligns them to Fed Funds targets with date‑tolerant joins, surfaces language signals via term‑document stats/word clouds, then runs TF‑IDF pipelines across multiple classifiers (NB/LR/SVM/DT) to predict rate‑change events and report precision/recall/F1.",
    tags: [
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "NLTK", color: "pink-text-gradient" },
      { name: "BeautifulSoup", color: "blue-text-gradient" },
      { name: "TF-IDF", color: "green-text-gradient" },
      { name: "WordCloud", color: "pink-text-gradient" },
    ],
    image: fomc,
    source_link: "https://github.com/DIVYANSH-675/fomc-statements-rate-analysis-BTP-",
    source_code_link: "https://github.com/DIVYANSH-675/fomc-statements-rate-analysis-BTP-",
  },
  {
    name: "Fed Speech Generator",
    description:
      "Fine-tuned the GPT-2 language model on years of FOMC meeting minutes to generate realistic Federal Reserve-style economic statements. The model learns the formal tone and terminology used by central bankers.",
    tags: [
      { name: "GPT-2", color: "blue-text-gradient" },
      { name: "Transformers", color: "green-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "Jupyter", color: "blue-text-gradient" },
      { name: "Text Generation", color: "green-text-gradient" },
    ],
    image: gpt2,
    source_link: "https://github.com/DIVYANSH-675/fomc-gpt2-btp2",
    source_code_link: "https://github.com/DIVYANSH-675/fomc-gpt2-btp2",
  },
  {
    name: "Ship Anomaly Detector",
    description:
      "Maritime security ML pipeline that analyzes AIS vessel tracking data to detect suspicious activities — fake vessel identities, unusual route patterns, and abnormal behavior. Uses PostGIS for geospatial analysis and generates interactive anomaly maps.",
    tags: [
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "XGBoost", color: "pink-text-gradient" },
      { name: "LightGBM", color: "blue-text-gradient" },
      { name: "CatBoost", color: "green-text-gradient" },
      { name: "PostGIS", color: "pink-text-gradient" },
      { name: "Folium", color: "blue-text-gradient" },
    ],
    image: ais,
    source_link: "https://github.com/DIVYANSH-675/ais-ml-pipeline-detection",
    source_code_link: "https://github.com/DIVYANSH-675/ais-ml-pipeline-detection",
  },
  {
    name: "Employee Attrition Predictor",
    description:
      "HR analytics tool that predicts which employees are at risk of leaving the company. Uses classification algorithms (Random Forest, XGBoost) on employee data to help organizations proactively address retention before it's too late.",
    tags: [
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Random Forest", color: "pink-text-gradient" },
      { name: "Logistic Regression", color: "blue-text-gradient" },
      { name: "Gradient Boosting", color: "green-text-gradient" },
    ],
    image: attrition,
    source_link: "https://github.com/DIVYANSH-675/Simple-Employee-Attrition-Predictor",
    source_code_link: "https://github.com/DIVYANSH-675/Simple-Employee-Attrition-Predictor",
  },
];

export const webProject = [
  {
    name: "Hostly",
    description:
      "A self-hosted alternative to Vercel/Netlify. Connect your GitHub repo, and Hostly automatically builds your React/Next.js app using Docker, deploys it to S3, and gives you a custom subdomain. Built with Next.js, tRPC, and microservices architecture.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "tRPC", color: "pink-text-gradient" },
      { name: "Drizzle ORM", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
      { name: "AWS S3", color: "blue-text-gradient" },
      { name: "Redis", color: "green-text-gradient" },
    ],
    image: hostly,
    source_link: "http://hostly.ooguy.com",
    source_code_link: "https://github.com/DIVYANSH-675/Hostly",
  },
  {
    name: "Regalia Gems",
    description:
      "A complete e-commerce platform for luxury jewelry built with the MERN stack. Features include user authentication, product catalog with filters, shopping cart, secure Braintree payments, order tracking, and admin dashboard for inventory management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Mongoose", color: "green-text-gradient" },
      { name: "Braintree", color: "pink-text-gradient" },
      { name: "React Router", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
    ],
    image: regalia,
    source_link: "https://github.com/DIVYANSH-675/Regalia-Gems-An-E-commerce-Project-",
    source_code_link: "https://github.com/DIVYANSH-675/Regalia-Gems-An-E-commerce-Project-",
  },
];

export const otherProject = [
  {
    name: "PC Remote Control",
    description:
      "Turn any browser into a remote desktop client. This Python tool streams your PC screen via WebSockets and lets you control mouse/keyboard from your phone or tablet. Perfect for presentations, troubleshooting, or accessing your desktop remotely.",
    tags: [
      { name: "WebSockets", color: "blue-text-gradient" },
      { name: "PyAutoGUI", color: "green-text-gradient" },
      { name: "MSS", color: "pink-text-gradient" },
      { name: "Pillow", color: "blue-text-gradient" },
      { name: "NumPy", color: "green-text-gradient" },
      { name: "Imagecodecs", color: "pink-text-gradient" },
    ],
    image: remote,
    source_link: "https://github.com/DIVYANSH-675/pc-remote-control",
    source_code_link: "https://github.com/DIVYANSH-675/pc-remote-control",
  },
];

const experiences = [
  {
    title: "AI Intern",
    company_name: "HumanizeIQ",
    icon: humanizeiqLogo,
    iconBg: "#ffffff",
    date: "Jan 2026 - Present",
    link: "",
    points: [
      "Generative AI Integration: Integrated Gemini AI models into the Secure Chat app, enabling real-time messaging and creative features like Brainstorming and Diagramming modes.",
      "Prompt Engineering: Improved the AI's ability to summarize conversations and understand user intent by refining the instructions (system prompts) sent to the model.",
      "System Security: Enhanced the backend security to ensure that all AI requests follow strict user permission rules, keeping sensitive data safe.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Shoutrank",
    icon: shoutrankLogo,
    iconBg: "#ffffff",
    date: "May 2025 - Jul 2025",
    link: "",
    points: [
      "Website Launch: Built and launched the official zoice.com website, creating user accounts and interactive dashboards for both customers and internal teams.",
      "Video Transcription Tool: Automated video-to-text conversion for YouTube URLs and uploads using Whisper.",
      "API Design: Designed clear and documented internal APIs, making it easier for the team to integrate new features into the platform without complex coding.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Technology",
    branch:
      "Computer Science & Engineering",
    marks:
      "CPI : 7.63 / 10",
    name: "Rajiv Gandhi Institute of Petroleum Technology, Jais",
    year: "(2022 - 2026)",
    image: rgipt_logo,
  },
  {
    degree:
      "12th Grade",
    branch: "Science",
    marks:
      "Percentage : 86.4 %",
    name: "S. R. Public Sen. Secondary School",
    year: "2021",
    image: school1,
  },
  {
    degree:
      "10th Grade",
    branch: "CBSE",
    marks:
      "Percentage : 96.2 %",
    name: "Gaurav Memorial International School",
    year: "2019",
    image: school2,
  },
];

export { list, profiles, technologies, experiences, educations, achievements };
