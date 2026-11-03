export interface ExperienceCertificate {
  title: string;
  file: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  category: "Internship" | "Certification" | "Hackathon";
  description: string;
  skills: string[];
  symbol: string;
  color: string;
  certificates?: ExperienceCertificate[];
}

export const experiences: Experience[] = [
  {
    id: "gradtwin",
    title: "Java Full Stack Intern",
    organization: "Gradtwin",
    duration: "June 2026 – August 2026",
    category: "Internship",
    description:
      "Delivered web applications with Java, Spring Boot, React.js, PostgreSQL, REST APIs, and JWT-based security across frontend and backend layers. Built Cloud of Clouds, a multi-cloud storage platform connecting AWS S3, Google Cloud Storage, and Azure Blob Storage with AES-256-GCM encryption, BCrypt hashing, primary-replica storage, automatic failover, and Docker containerized deployment.",
    skills: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob Storage",
      "Docker",
      "AES-256-GCM",
      "JWT Security",
    ],
    symbol: "✦",
    color: "#61E6C0",
    certificates: [
      {
        title: "Completion Certificate",
        file: "/certificates/java-full-stack-completion.pdf",
      },
      {
        title: "Experience Certificate",
        file: "/certificates/java-full-stack-experience.pdf",
      },
    ],
  },
  {
    id: "hackathon-amplify",
    title: "Full Stack Mobile Engineer",
    organization: "Hackathon — AMPLIFY",
    duration: "Hackathon Edition",
    category: "Hackathon",
    description:
      "Built and demonstrated an AI-powered mobile campaign application using React Native, Expo, Spring Boot, PostgreSQL, and the Google Gemini API. Integrated JWT authentication, deployed the backend to Render, generated an installable Android APK via Expo EAS, and received a Certificate of Appreciation.",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Spring Boot",
      "Google Gemini API",
      "PostgreSQL",
      "JWT Auth",
      "Render",
      "Expo EAS",
    ],
    symbol: "✧",
    color: "#B78AFF",
    certificates: [
      {
        title: "Certificate of Appreciation",
        file: "/certificates/mobile-hackathon.pdf",
      },
    ],
  },
  {
    id: "aj-tech",
    title: "IoT Intern",
    organization: "AJ Tech",
    duration: "30 Days",
    category: "Internship",
    description:
      "Gained exposure to Internet of Things concepts and explored practical applications, including home security systems and a breast cancer detection device.",
    skills: ["IoT", "Hardware Concepts", "Security Systems"],
    symbol: "⚡",
    color: "#56A8FF",
  },
];
