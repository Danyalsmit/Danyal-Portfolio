export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

// Newest first. Edit freely — the timeline renders directly from this list.
export const experience: ExperienceItem[] = [
  {
    role: "Freelance Full Stack Developer",
    org: "Self-Employed",
    location: "Remote",
    period: "Feb 2026 — Present",
    summary:
      "Working directly with clients to design, build, and ship full-stack web applications, dashboards, and business websites — owning everything from architecture to deployment.",
    highlights: [
      "Delivered custom web applications and landing pages for clients across SaaS, services, and e-commerce",
      "Managed end-to-end VPS hosting, domains, and SSL for every client deployment",
      "Integrated lead-capture forms and analytics to help clients convert visitors into customers",
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "VPS Deployment"],
    current: true,
  },
  {
    role: "Frontend Developer",
    org: "Xtecsoft (ioMoVo)",
    location: "Karachi, Pakistan",
    period: "Feb 2024 — Feb 2026",
    summary:
      "Built Microsoft 365 add-ins and an AI-powered Outlook agent for a global digital asset management SaaS platform.",
    highlights: [
      "Built 4 Microsoft 365 add-ins (Word, Excel, PowerPoint, Outlook) using Office JS API",
      "Developed an AI Outlook agent that drafts and summarizes email — cut response time by 40%",
      "Built reusable React.js + TypeScript architecture, integrating 8+ REST APIs",
    ],
    tags: ["React.js", "TypeScript", "Office JS API", "Node.js"],
  },
  {
    role: "MERN Stack Developer Intern",
    org: "Asra Soft",
    location: "Karachi, Pakistan",
    period: "Oct 2023 — Jan 2024",
    summary:
      "Contributed frontend features to the core product and built full-stack practice projects using the MERN stack.",
    highlights: [
      "Built 2 full-stack projects independently with MVC structure and JWT-protected routes",
      "Applied reusable component patterns that reduced onboarding time for new features",
    ],
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
  },
];
