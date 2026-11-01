
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  completionDate: string;
}

export const certificates: Certificate[] = [
  {
    id: "ibm-chatbot",
    title: "Build Your First Chatbot",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-chatbot.png",
    completionDate: "22 Oct 2024",
  },
  {
    id: "nptel-cloud-computing",
    title: "Cloud Computing",
    issuer: "NPTEL · IIT Kharagpur",
    image: "/certificates/nptel-cloud-computing.png",
    completionDate: "Jan–Apr 2024",
  },
  {
    id: "ibm-text-to-speech",
    title: "Explore Text to Speech Using IBM Watson",
    issuer: "IBM SkillsBuild",
    image: "/certificates/ibm-text-to-speech.png",
    completionDate: "21 Oct 2024",
  },
  {
    id: "kaggle-machine-learning",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    image: "/certificates/kaggle-machine-learning.jpeg",
    completionDate: "4 Nov 2024",
  },
  {
    id: "nvidia-deep-learning",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    image: "/certificates/nvidia-deep-learning.png",
    completionDate: "5 Nov 2024",
  },
  {
    id: "nptel-python-data-science",
    title: "Python for Data Science",
    issuer: "NPTEL · IIT Madras",
    image: "/certificates/nptel-python-data-science.png",
    completionDate: "Jul–Aug 2023",
  },
  {
    id: "udemy-javascript",
    title: "JavaScript Fundamentals to Advanced: Full Stack Development",
    issuer: "Sayman Creative Institute · Udemy",
    image: "/certificates/udemy-javascript.jpg",
    completionDate: "11 Sep 2025",
  },
];
