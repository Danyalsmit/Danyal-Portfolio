"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, MessageCircle, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "30-day MVP delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Code",
    description: "Hand-off ready, documented.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Weekly demos, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Architecture that grows with you.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-16 bg-void">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          route="About"
          title="Why Clients Work With Me"
          description="How I work, in four points."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="h-full p-6 text-center sm:text-left">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 text-cyan sm:mx-0">
                  <feature.icon size={20} />
                </span>
                <h4 className="mt-4 font-display text-base font-semibold text-text">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
