export interface ExperienceCertificate {
  title: string;
  file: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  category: "Internship" | "Certification";
  description: string;
  skills: string[];
  symbol: string;
  color: string;
  certificates?: ExperienceCertificate[];
}

export const experiences: Experience[] = [
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
  {
    id: "dot-com-infoway",
    title: "Java Full Stack Intern",
    organization: "Gradtwin Technologies",
    duration: "3 Months",
    category: "Internship",
    description:
      "Learned Java Fullstack development, worked with Java, Spring Boot, React, PostgreSQL, and gained exposure to AWS, Azure, and GCS.",
    skills: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "REST API",
      "AWS",
      "Azure",
      "GCS",
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
];
