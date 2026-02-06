import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "full-stack-mastery",
    title: "Full Stack Web Development",
    institution: "Coding Academy",
    date: "2024-06",
    category: "certification",
    description:
      "Comprehensive full‑stack training covering modern frontend and backend development workflows.",
    image: "/Achievement/full-stack-mastery-certificate.png",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Express.js"],
    credentialId: "FS-2024-0678",
  },
  {
    id: "docker-essentials",
    title: "Docker Essentials",
    institution: "Docker",
    date: "2026-02-05",
    category: "certification",
    description:
      "Core containerization concepts, Docker CLI workflows, and image/container management.",
    image: "/Achievement/docker-essentials.png",
    skills: ["Docker", "Containers", "Images", "CLI"],
  },
  {
    id: "aws-fundamentals",
    title: "AWS Fundamentals",
    institution: "Amazon Web Services",
    date: "2026-02-05",
    category: "certification",
    description:
      "Foundational AWS cloud concepts, core services, and basic architecture patterns.",
    image: "/Achievement/aws-fundamentals.png",
    skills: ["AWS", "Cloud", "EC2", "S3"],
  },
];
