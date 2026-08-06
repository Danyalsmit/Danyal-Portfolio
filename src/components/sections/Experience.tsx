"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard, { TimelineDot } from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeader
          route="Experience"
          title="Professional Experience"
          description="A timeline of roles, clients, and shipped work."
        />

        <div className="mt-16 space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-5"
            >
              <div className="flex flex-col items-center">
                <TimelineDot />
                {i !== experience.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-border-strong to-transparent" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <ExperienceCard item={item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
