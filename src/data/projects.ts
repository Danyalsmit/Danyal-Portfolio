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
  // {
  //   id: "saas-asset-platform",
  //   title: "Digital Asset SaaS Platform",
  //   category: "SaaS",
  //   description:
  //     "AI-powered digital asset management platform with Microsoft 365 add-ins built for Word, Excel, PowerPoint, and Outlook, plus an AI agent that drafts replies automatically.",
  //   image: "/images/project-saas.svg",
  //   tags: ["React.js", "Office JS API", "Node.js", "REST APIs", "AI Agents"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   metric: "Cut file-sharing time by 60%",
  // },
  {
    id: "college-erp",
    title: "College Management ERP",
    category: "Dashboard System",
    description:
      "Full-stack institution management system with role-based dashboards for Admins, Teachers, and Students — attendance, classes, and results in one place.",
    image: "/images/project-erp.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Danyalsmit/Education-erp-frontend",
    metric: "3 roles · 6+ managed entities",
  },
  {
    id: "realtime-chat",
    title: "ProChat — Real-time Messaging",
    category: "SaaS",
    description:
      "Full-stack real-time chat app with private rooms, typing indicators, and read receipts, built on a Socket.io + Express backend with JWT-secured routes.",
    image: "/images/project-chat.png",
    tags: ["React.js", "Socket.io", "Express.js", "MongoDB"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Danyalsmit/prochat-frontend",
    metric: "100+ concurrent connections",
  },
  {
    id: "ecommerce-store",
    title: "BazaarApp E-Commerce Store",
    category: "E-Commerce",
    description:
      "Fully responsive e-commerce storefront with flash deals, category browsing, and product filtering across multiple verticals — cars, mobiles, watches, and more — integrated with REST APIs.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React.js", "Redux", "REST APIs", "Vercel"],
    liveUrl: "https://bzarapp.vercel.app/",
    githubUrl: "https://github.com/Danyalsmit/bzarapp",
    metric: "Optimized Core Web Vitals",
  },
  {
    id: "omniverge-tech",
    title: "Omni Verge Technologies — BPO Website",
    category: "Business Website",
    description:
      "Full marketing website for a BPO company offering sales, design, and DME billing services — built to convert visitors into consultation bookings with a clear services breakdown and lead form.",
    image: "/images/project-omniverge.jpg",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://omnivergetec.vercel.app/",
    metric: "Client project · live in production",
  },
  {
    id: "dme-braces-cgm",
    title: "DME Braces CGM — Healthcare BPO Landing Page",
    category: "Business Website",
    description:
      "Conversion-focused landing page for a healthcare BPO outsourcing call center teams for DME, Orthodontics, and CGM campaigns — with service breakdowns, stats, testimonials, FAQ, and a lead-capture consultation form.",
    image: "/images/project-business.jpg",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://client-site-beta-lilac.vercel.app/",
    githubUrl: "https://github.com/Danyalsmit/client-site",
    metric: "Client project · live in production",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];