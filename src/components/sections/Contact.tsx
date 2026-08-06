"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-16">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          route="Contact"
          title="Let's Build Something Amazing"
          description="Have a project in mind or want to discuss an opportunity? Drop a message — I typically reply within 24 hours."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8" hover={false}>
              <h3 className="font-display text-xl font-semibold text-text">Contact Info</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {profile.availability}. Currently open for freelance projects and senior full-stack roles.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-text transition-colors hover:text-cyan"
                >
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-cyan">
                    <Mail size={16} />
                  </span>
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-text">
                  <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-cyan">
                    <MapPin size={16} />
                  </span>
                  {profile.location}
                </div>
              </div>

              <div className="mt-8 flex gap-3 border-t border-border pt-6">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
                >
                  <GithubIcon width={16} height={16} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
                >
                  <LinkedinIcon width={16} height={16} />
                </a>
                <a
                  href={profile.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
                >
                  <Briefcase size={16} />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="p-8" hover={false}>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
