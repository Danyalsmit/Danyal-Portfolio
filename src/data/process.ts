import type { LucideIcon } from "lucide-react";
import { PhoneCall, ClipboardList, Hammer, Rocket } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Free 30-min call to understand your idea, goals, and constraints. No commitment.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Scope & Plan",
    description: "You get a clear roadmap, milestones, and fixed pricing before any work starts.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Build & Ship",
    description: "Weekly demos and fast iterations, so you always know exactly where things stand.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch + Support",
    description: "Your product goes live, backed by 30 days of free post-launch support.",
    icon: Rocket,
  },
];
