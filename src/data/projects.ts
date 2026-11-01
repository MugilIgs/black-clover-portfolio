
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
    id: "multi-cloud",
    title: "Multi-Cloud Storage",
    subtitle: "Cloud Storage Spell",
    category: "Full Stack",
    description:
      "A cloud storage application focused on secure access, user authentication, and managing files through a backend API.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "PostgreSQL",
      "REST API",
      "Cloud Storage",
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
    ],
    magicType: "Cloud Magic",
    symbol: "☁",
    color: "#56A8FF",
    status: "In Progress",
    features: [
      "User registration and login",
      "Password hashing and JWT authentication",
      "Secure file API design",
      "PostgreSQL database integration",
    ],
    liveUrl: "https://multicloud-frontend-riep.onrender.com",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "easy-job-apply",
    title: "Easy Job Apply",
    subtitle: "Automation Spell",
    category: "Full Stack",
    description:
      "A full-stack project designed to simplify the job application process and reduce repetitive tasks.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
    ],
    magicType: "Automation Magic",
    symbol: "⚡",
    color: "#FFD166",
    status: "In Progress",
    features: [
      "Job application workflow",
      "Frontend and backend integration",
      "Structured application data",
      "Automation-focused design",
    ],
    liveUrl: "https://your-deployed-project-url.com",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "amplify",
    title: "AMPLIFY — The Campaign Studio",
    subtitle: "AI-Powered Campaign Creation Spell",
    category: "Mobile & Tools",
    description:
      "An AI-powered mobile application developed as part of a hackathon challenge. AMPLIFY helps individuals, creators, nonprofits, and organizations create campaigns and amplify their messages using Gemini-powered content generation and a cloud-hosted backend.",
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
      "AI-assisted campaign generation using Google Gemini API",
      "User registration and login with JWT authentication",
      "Create, explore, and manage campaigns",
      "User profile and campaign activity",
      "Spring Boot backend and PostgreSQL deployment on Render",
      "Android APK generation using Expo EAS",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    subtitle: "AI Automation Spell",
    category: "AI & Automation",
    description:
      "A chatbot project using n8n automation to connect workflows and support automated interactions.",
    technologies: [
      "n8n",
      "AI Automation",
      "Workflow Integration",
    ],
    magicType: "AI Magic",
    symbol: "✧",
    color: "#B78AFF",
    status: "Completed",
    features: [
      "Workflow-based automation",
      "Chatbot interaction flow",
      "Integration of automated tasks",
    ],
    liveUrl: "https://your-deployed-project-url.com",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "smart-canteen",
    title: "Smart Canteen Management",
    subtitle: "WDF-FIFO Load Balancing Spell",
    category: "Full Stack",
    description:
      "A smart canteen system designed to manage real-time orders and improve queue scheduling during peak demand using a Weighted Dynamic FIFO approach.",
    technologies: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "WDF-FIFO",
    ],
    magicType: "Lightning Magic",
    symbol: "ϟ",
    color: "#72E58B",
    status: "In Progress",
    features: [
      "Real-time order handling",
      "Weighted Dynamic FIFO scheduling",
      "Priority-aware queue management",
      "Peak-load handling design",
    ],
    liveUrl: "https://your-deployed-project-url.com",
    githubUrl: "https://github.com/MugilIgs",
  },
  {
    id: "cgpa-sgpa-calculator",
    title: "CGPA–SGPA Calculator",
    subtitle: "Calculation Spell",
    category: "Mobile & Tools",
    description:
      "A lightweight web calculator built to help students calculate their semester GPA and cumulative GPA.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    magicType: "Nature Magic",
    symbol: "✿",
    color: "#61E6C0",
    status: "Completed",
    features: [
      "SGPA calculation",
      "CGPA calculation",
      "Simple and responsive interface",
    ],
    liveUrl: "https://mugiligs.github.io/SGPA-CGPA-Calculator/",
    githubUrl: "https://github.com/MugilIgs/SGPA-CGPA-Calculator",
  },
];
