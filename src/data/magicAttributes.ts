
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
    focus: "Java • JavaScript • C • Python • OOP • DSA",
    effect: "lightning",
  },
  {
    id: "javascript",
    technology: "Backend Development",
    magicType: "FIRE MAGIC",
    symbol: "✦",
    description:
      "Building application logic, REST APIs, authentication flows, and reliable server-side services.",
    focus: "Spring Boot • Node.js • Express.js • REST APIs • CRUD",
    effect: "fire",
  },
  {
    id: "react",
    technology: "Frontend Development",
    magicType: "WIND MAGIC",
    symbol: "〰",
    description:
      "Creating responsive interfaces and interactive web experiences with reusable components and modern styling.",
    focus: "HTML5 • CSS3 • React.js • EJS • Bootstrap • Tailwind CSS",
    effect: "wind",
  },
  {
    id: "security",
    technology: "Security Engineering",
    magicType: "DARK MAGIC",
    symbol: "◐",
    description:
      "Protecting applications and sensitive information with secure authentication, password hashing, and encryption.",
    focus: "JWT • BCrypt • AES-256-GCM • Authorization",
    effect: "security",
  },
  {
    id: "postgresql",
    technology: "Database Engineering",
    magicType: "WATER MAGIC",
    symbol: "◇",
    description:
      "Organizing, storing, and retrieving application data using relational and NoSQL database technologies.",
    focus: "PostgreSQL • MongoDB • MySQL",
    effect: "water",
  },
  {
    id: "github",
    technology: "Cloud, DevOps & Automation",
    magicType: "NATURE MAGIC",
    symbol: "♧",
    description:
      "Connecting cloud storage services, managing source code, working with development tools, and automating workflows.",
    focus:
      "AWS S3 • Azure Blob • Google Cloud Storage • Docker • Git • GitHub • Postman • VS Code • n8n • API Integration",
    effect: "nature",
  },
];
