export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metric: string;
}

// Add / remove / edit projects here — cards on the page render from this array.
export const projects: Project[] = [
  {
    id: "saas-asset-platform",
    title: "Digital Asset SaaS Platform",
    category: "SaaS",
    description:
      "AI-powered digital asset management platform with Microsoft 365 add-ins built for Word, Excel, PowerPoint, and Outlook, plus an AI agent that drafts replies automatically.",
    image: "/images/project-saas.svg",
    tags: ["React.js", "Office JS API", "Node.js", "REST APIs", "AI Agents"],
    liveUrl: "#",
    githubUrl: "#",
    metric: "Cut file-sharing time by 60%",
  },
  {
    id: "college-erp",
    title: "College Management ERP",
    category: "Dashboard System",
    description:
      "Full-stack institution management system with role-based dashboards for Admins, Teachers, and Students — attendance, classes, and results in one place.",
    image: "/images/project-erp.svg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM"],
    liveUrl: "#",
    githubUrl: "#",
    metric: "3 roles · 6+ managed entities",
  },
  {
    id: "realtime-chat",
    title: "ProChat — Real-time Messaging",
    category: "SaaS",
    description:
      "Full-stack real-time chat app with private rooms, typing indicators, and read receipts, built on a Socket.io + Express backend with JWT-secured routes.",
    image: "/images/project-chat.svg",
    tags: ["React.js", "Socket.io", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    metric: "100+ concurrent connections",
  },
  {
    id: "ecommerce-store",
    title: "BazaarApp E-Commerce Store",
    category: "E-Commerce",
    description:
      "Fully responsive e-commerce storefront with cart, checkout flow, and product filtering — integrated with REST APIs and monitored for Core Web Vitals.",
    image: "/images/project-ecommerce.svg",
    tags: ["React.js", "Redux", "REST APIs", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    metric: "Optimized Core Web Vitals",
  },
  {
    id: "business-website",
    title: "Business & Landing Websites",
    category: "Business Website",
    description:
      "Conversion-focused marketing sites for growing businesses — custom design, lead-capture forms, and end-to-end VPS deployment with SSL.",
    image: "/images/project-business.svg",
    tags: ["Next.js", "Tailwind CSS", "Hostinger VPS"],
    liveUrl: "#",
    githubUrl: "#",
    metric: "End-to-end deploy & hosting",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
