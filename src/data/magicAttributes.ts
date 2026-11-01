export interface MagicAttribute {
  id: string;
  technology: string;
  magicType: string;
  symbol: string;
  description: string;
  focus: string;
  effect: string;
}

export const magicAttributes: MagicAttribute[] = [
  {
    id: "java",
    technology: "Programming & Problem Solving",
    magicType: "LIGHTNING MAGIC",
    symbol: "ϟ",
    description:
      "Solving problems through programming, logical thinking, efficient algorithms, and object-oriented design.",
    focus: "Java • JavaScript • TypeScript • C • Python • OOPS • DSA",
    effect: "lightning",
  },
  {
    id: "javascript",
    technology: "Backend & API Engineering",
    magicType: "FIRE MAGIC",
    symbol: "✦",
    description:
      "Building robust application logic, REST services, database workflows, and secure server-side architectures.",
    focus: "Spring Boot • Spring Security • Node.js • Express.js • REST APIs • CRUD",
    effect: "fire",
  },
  {
    id: "react",
    technology: "Frontend & Mobile Development",
    magicType: "WIND MAGIC",
    symbol: "〰",
    description:
      "Creating modern, responsive web interfaces and mobile applications with component-driven architectures.",
    focus: "React.js • React Native • Expo • HTML5 • CSS3 • Tailwind CSS • Bootstrap • EJS",
    effect: "wind",
  },
  {
    id: "security",
    technology: "Security & Encryption",
    magicType: "DARK MAGIC",
    symbol: "◐",
    description:
      "Protecting applications and user data with token-based authentication, cryptographic hashing, and encryption.",
    focus: "JWT Authentication • BCrypt • AES-256-GCM • Authorization",
    effect: "security",
  },
  {
    id: "postgresql",
    technology: "Database Engineering",
    magicType: "WATER MAGIC",
    symbol: "◇",
    description:
      "Designing schemas, executing queries, and managing persistence using relational and document database systems.",
    focus: "PostgreSQL • MongoDB • MySQL",
    effect: "water",
  },
  {
    id: "github",
    technology: "Cloud, AI & DevOps",
    magicType: "NATURE MAGIC",
    symbol: "♧",
    description:
      "Integrating AI services, multi-cloud storage, automated workflows, and containerized deployment pipelines.",
    focus:
      "Google Gemini API • n8n • AWS S3 • Google Cloud Storage • Azure Blob Storage • Render • Docker • Expo EAS • Git • GitHub",
    effect: "nature",
  },
];
