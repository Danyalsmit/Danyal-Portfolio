import type { LucideIcon } from "lucide-react";
import { Code2, Server, Database } from "lucide-react";

export interface SkillGroup {
  title: string;
  route: string; // stylistic "endpoint" label, e.g. /frontend
  icon: LucideIcon;
  items: string[];
}

export interface SkillLevel {
  label: string;
  years: string;
  percent: number;
}

// Used by the "Tools I use to ship fast" panel in the Skills section.
export const toolTags: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Socket.io",
  "Tailwind CSS",
  "Prisma",
  "Vercel",
];

export const skillLevels: SkillLevel[] = [
  { label: "Frontend (React / Next.js)", years: "2.5+ yrs", percent: 90 },
  { label: "Backend (Node / Express)", years: "2+ yrs", percent: 80 },
  { label: "Databases (SQL / NoSQL)", years: "2+ yrs", percent: 75 },
  { label: "Real-time (Socket.io)", years: "1.5 yrs", percent: 65 },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & UI",
    route: "/frontend",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Redux"],
  },
  {
    title: "Backend & APIs",
    route: "/backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth", "MVC Architecture"],
  },
  {
    title: "Database & Tools",
    route: "/infra",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "Prisma", "Git / GitHub", "Vercel / Railway", "Postman"],
  },
];
