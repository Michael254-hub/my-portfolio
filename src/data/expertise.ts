import { Cpu, Sparkles, Server, LayoutPanelLeft, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExpertiseArea = {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: LayoutPanelLeft,
    title: "Frontend Engineering",
    description:
      "Interfaces that feel fast and considered — from design system to production build.",
    capabilities: ["React & Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Services and data layers built to stay correct and simple under real load.",
    capabilities: ["Node.js & Python", "REST & auth design", "PostgreSQL / MongoDB", "Django"],
  },
  {
    icon: Sparkles,
    title: "Applied AI",
    description: "Machine learning integrated into products, not bolted on as a demo.",
    capabilities: ["PyTorch", "Computer vision (OpenCV)", "LLM tooling", "Model evaluation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Shipping pipelines that make deploys boring, in the best way.",
    capabilities: ["AWS", "Docker", "CI/CD", "Vercel", "Netlify"],
  },
  {
    icon: Cpu,
    title: "Product & Craft",
    description: "Engineering decisions weighed against the product they serve.",
    capabilities: ["Figma", "Accessibility", "Performance budgets", "Technical writing"],
  },
];
