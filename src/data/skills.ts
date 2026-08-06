import type { LucideIcon } from "lucide-react";
import { Code2, Server, Database } from "lucide-react";

export interface SkillGroup {
  title: string;
  route: string; // stylistic "endpoint" label, e.g. /frontend
  icon: LucideIcon;
  items: string[];
}

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
