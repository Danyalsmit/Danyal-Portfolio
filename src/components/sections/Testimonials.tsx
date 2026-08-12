"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  // A single testimonial gets a centered, wider card instead of sitting
  // alone in a 3-column grid with empty space on either side.
  const isSingle = testimonials.length === 1;

  return (
    <section id="testimonials" className="relative py-24 md:py-16 bg-void">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="Testimonials"
          title="Client Testimonials"
          description="What clients say about working together."
        />

        <div
          className={
            isSingle
              ? "mx-auto mt-16 max-w-xl"
              : "mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          }
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} featured={isSingle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}