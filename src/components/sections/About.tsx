"use client";

import { motion } from "framer-motion";
import { Sparkles, Wrench, Layers, Cpu } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

const features = [
  {
    icon: Sparkles,
    title: "Clean Code",
    description: "Readable, well-structured code with consistent patterns that teams can build on.",
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description: "I dig into the root of an issue instead of patching symptoms — architecture first.",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "Comfortable owning a feature end-to-end: UI, API, schema, and deployment.",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    description: "React, Next.js, and AI-assisted workflows to ship faster without cutting corners.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-16 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="About"
          title="Engineering Excellence & Vision"
          description="Get to know the approach behind the code."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-text md:text-3xl">
              Building software clients can trust — and rely on.
            </h3>
            <p className="mt-5 text-text-muted leading-relaxed">
              I&apos;m {profile.fullName}, a full stack developer with {profile.stats[0].value.replace("+", "")}+ years
              building production SaaS platforms, real-time applications, and business websites. My work spans
              REST API architecture, authentication systems, and real-time features with Socket.io, always with
              performance and maintainability in mind.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Whether it&apos;s architecting a high-frequency real-time web app or integrating a state-of-the-art AI
              pipeline, I focus on robust type-safety, clear communication with clients, and interfaces that feel
              intuitive from the first click.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg border border-border bg-panel-2/60 px-3 py-2 font-mono text-xs text-text-muted">
                SOLID principles &amp; modularity
              </span>
              <span className="rounded-lg border border-border bg-panel-2/60 px-3 py-2 font-mono text-xs text-text-muted">
                OpenAI, LangChain, AI agents
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  <feature.icon className="text-cyan" size={22} />
                  <h4 className="mt-4 font-display text-base font-semibold text-text">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
