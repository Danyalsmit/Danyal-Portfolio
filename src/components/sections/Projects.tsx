"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import CtaBanner from "@/components/ui/CtaBanner";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="/projects"
          title="Featured Projects"
          description="A selection of SaaS platforms, dashboards, and client websites I've shipped."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-to-r from-cyan to-blue text-on-accent"
                  : "glass text-text-muted hover:text-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <CtaBanner
        title="Like what you see?"
        description="I'm currently taking on new freelance and full-time work — let's build something like this together."
        buttonLabel="Start Your Project"
      />
    </section>
  );
}