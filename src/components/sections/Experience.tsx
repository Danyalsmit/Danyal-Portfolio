"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard, { TimelineDot } from "@/components/ExperienceCard";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            route="Experience"
            title="Professional Experience"
            description="A timeline of roles, clients, and shipped work. Tap a role to expand it."
          />
        </div>

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

        <div className="mt-10 flex justify-center">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong hover:text-cyan"
          >
            <Download size={15} /> View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
