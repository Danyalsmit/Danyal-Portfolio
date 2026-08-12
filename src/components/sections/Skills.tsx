"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import { toolTags, skillLevels } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="/skills"
          title="Skills & Technologies"
          description="Tools and frameworks I use to take a product from idea to production."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: tag cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-text md:text-3xl">
              Tools I use to ship fast
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
              Not just a list — battle-tested tools for production-grade apps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {toolTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-lg border border-border bg-panel-2/60 px-4 py-2 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-cyan"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: progress bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-7 md:p-8"
          >
            <div className="space-y-7">
              {skillLevels.map((skill, i) => (
                <div key={skill.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-sm font-medium text-text">{skill.label}</span>
                    <span className="shrink-0 font-mono text-xs text-text-faint">{skill.years}</span>
                  </div>
                  <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-panel-2/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-blue"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <CtaBanner
        title="Need these skills on your project?"
        description="If your stack overlaps with what's above, let's talk about what you're building."
        buttonLabel="Discuss Your Project"
      />
    </section>
  );
}
