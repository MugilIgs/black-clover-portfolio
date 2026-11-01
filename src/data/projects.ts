export type ProjectCategory = "Full Stack" | "AI & Automation" | "Mobile & Tools";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  magicType: string;
  symbol: string;
  color: string;
  status: "Completed" | "In Progress" | "Planned";
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: "cloud-of-clouds",
    title: "Cloud of Clouds",
    subtitle: "Intelligent Multi-Cloud File Storage System",
    category: "Full Stack",
    description:
      "A multi-cloud storage platform connecting 3 major cloud providers (AWS S3, Google Cloud Storage, Azure Blob Storage) with automated health routing, AES-256-GCM encryption, primary-replica storage, and automatic download failover.",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
      "Docker",
      "JWT",
      "BCrypt",
      "AES-256-GCM",
      "REST APIs",
    ],
    magicType: "Cloud Magic",
    symbol: "☁",
    color: "#56A8FF",
    status: "Completed",
    features: [
      "Engineered secure file operations for registration, login, upload, download, deletion, and protected REST endpoints with a 50 MB upload limit",
      "Designed provider selection around health, latency, and historical performance to dynamically route files across 3 cloud platforms",
      "Protected stored content with AES-256-GCM encryption and user accounts with JWT authentication and BCrypt password hashing",
      "Maintained primary and replica copies across cloud providers and enabled automatic download recovery when the primary storage location was unavailable",
      "Containerized the Spring Boot service with Docker and deployed the frontend and backend for production validation",
    ],
    liveUrl: "https://multicloud-frontend-riep.onrender.com",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "amplify",
    title: "AMPLIFY — Campaign Studio",
    subtitle: "AI-Powered Campaign Platform (Hackathon)",
    category: "AI & Automation",
    description:
      "A mobile-first campaign amplification prototype developed for a hackathon to help users create, discover, and amplify campaigns to reach audiences beyond existing networks using Google Gemini AI and a Spring Boot backend.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Google Gemini API",
      "Render",
      "Expo EAS",
    ],
    magicType: "Ripple Magic",
    symbol: "✧",
    color: "#B78AFF",
    status: "Completed",
    features: [
      "Developed a mobile-first campaign amplification prototype to help users create and discover campaigns intended to reach audiences beyond existing networks",
      "Integrated the Google Gemini API to generate AI-assisted campaign content from user-provided inputs",
      "Implemented registration and login flows with JWT-based authentication, and connected the mobile frontend to Spring Boot REST APIs and PostgreSQL",
      "Deployed the backend to Render and generated an installable Android APK using Expo EAS for demonstration and testing",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "user-details-management",
    title: "User Details Management",
    subtitle: "MERN Stack User Administration Platform",
    category: "Full Stack",
    description:
      "A full-stack MERN application with authentication and a responsive interface for profile administration, featuring REST endpoints for complete CRUD workflows backed by MongoDB.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "CRUD",
      "Authentication",
    ],
    magicType: "Fire Magic",
    symbol: "✦",
    color: "#FF8A65",
    status: "Completed",
    features: [
      "Created a MERN-based user management platform with authentication and a responsive interface for profile administration",
      "Exposed REST endpoints for complete CRUD workflows covering user creation, retrieval, modification, and deletion with MongoDB persistence",
      "Structured MVC backend architecture with modular routes, controllers, and models",
      "Interactive responsive user interface with real-time state management and form validation",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "ai-chatbot-automation",
    title: "AI Chatbot Automation",
    subtitle: "n8n Workflow Automation Spell",
    category: "AI & Automation",
    description:
      "An automated chatbot workflow built with n8n, connecting APIs and webhooks to automate query handling, response generation, and orchestrate conversational flows without manual processing.",
    technologies: [
      "n8n",
      "APIs",
      "Webhooks",
      "AI Integration",
      "Workflow Automation",
    ],
    magicType: "AI Magic",
    symbol: "⚡",
    color: "#72E58B",
    status: "Completed",
    features: [
      "Built an n8n workflow that connected APIs and webhooks to automate query handling and response generation",
      "Orchestrated end-to-end conversation flow without manual processing",
      "Structured webhook payload ingestion and intelligent response dispatch",
      "Reliable error handling and automated conversation logging",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "cgpa-sgpa-calculator",
    title: "CGPA–SGPA Calculator",
    subtitle: "Academic Grade Calculation Tool",
    category: "Mobile & Tools",
    description:
      "A lightweight web calculator built to help college students compute semester GPA and cumulative CGPA with precision.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive UI",
    ],
    magicType: "Nature Magic",
    symbol: "✿",
    color: "#61E6C0",
    status: "Completed",
    features: [
      "SGPA calculation based on Anna University grading schema",
      "Cumulative CGPA calculation across semesters",
      "Simple, instant, and mobile-responsive interface",
    ],
    liveUrl: "https://mugiligs.github.io/SGPA-CGPA-Calculator/",
    githubUrl: "https://github.com/MugilIgs/SGPA-CGPA-Calculator",
  },
  {
    id: "black-clover-portfolio",
    title: "Black Clover Portfolio",
    subtitle: "Grimoire Developer Showcase",
    category: "Mobile & Tools",
    description:
      "An anime-inspired developer portfolio website built with React, TypeScript, and Framer Motion, featuring dual Asta/Yuno magic modes, interactive grimoire opening, and responsive animations.",
    technologies: [
      "React.js",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "CSS3 Glassmorphism",
    ],
    magicType: "Anti-Magic",
    symbol: "☘",
    color: "#A855F7",
    status: "Completed",
    features: [
      "Interactive 3D opening grimoire book animation",
      "Dual theme toggle: Asta (Dark Violet) & Yuno (Sage Green)",
      "Floating back-to-top clover ascent button",
      "Category spellbook filter tabs and detailed project modals",
    ],
    liveUrl: "https://github.com/MugilIgs/black-clover-portfolio",
    githubUrl: "https://github.com/MugilIgs/black-clover-portfolio",
  },
];
