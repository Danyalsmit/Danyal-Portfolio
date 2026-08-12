"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="/process"
          title="How We'll Work Together"
          description="No surprises, no black box — here's exactly what happens after you reach out."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-border-strong hover:-translate-y-1"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-bold text-text/[0.04] transition-colors duration-300 group-hover:text-cyan/[0.08]">
                {step.number}
              </span>

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-blue/20 text-cyan">
                <step.icon size={20} />
              </span>

              <p className="relative mt-5 font-mono text-xs text-cyan">STEP {step.number}</p>
              <h3 className="relative mt-2 font-display text-lg font-semibold text-text">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>

              {i !== processSteps.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-border-strong to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
