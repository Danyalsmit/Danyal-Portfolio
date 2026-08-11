"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import CtaBanner from "@/components/ui/CtaBanner";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="Skills"
          title="Skills & Technologies"
          description="Tools and frameworks I use to take a product from idea to production."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 text-cyan">
                    <group.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text">{group.title}</h3>
                    <p className="font-mono text-[11px] text-text-faint">{group.route}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-panel-2/60 px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-border-strong hover:text-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
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