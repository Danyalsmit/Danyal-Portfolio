"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles, Download } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="grid-backdrop absolute inset-0 -z-10" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue/20 blur-[140px]" />
      <div className="absolute right-0 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-violet/25 blur-[130px]" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-cyan/15 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs text-cyan shadow-[0_0_25px_-8px_rgba(34,211,238,0.5)]">
            <Sparkles size={13} />
            {profile.availability}
          </span>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-text-muted md:text-xl">
            {profile.heroSubheading}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-faint md:text-base">
            {profile.heroDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#projects" icon={<ArrowRight size={16} />} className="!px-7 !py-3.5 !text-base">
              Explore Projects
            </Button>
            <Button href="#contact" variant="secondary" className="!px-7 !py-3.5 !text-base">
              Get In Touch
            </Button>
            <Button
              href={profile.cvUrl}
              download
              variant="secondary"
              icon={<Download size={16} />}
              className="!px-7 !py-3.5 !text-base"
            >
              Download CV
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-mono text-xs text-text-faint">CONNECT</span>
            <div className="h-px w-10 bg-border" />
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted transition-colors hover:text-cyan"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted transition-colors hover:text-cyan"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={profile.social.upwork}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="text-text-muted transition-colors hover:text-cyan"
            >
              <Briefcase size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right: profile / status card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass glow-ring relative overflow-hidden rounded-3xl p-3">
            {/* window chrome */}
            <div className="flex items-center justify-between px-2 pb-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="font-mono text-[10px] text-text-faint">~/danyal — status</span>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src={profile.avatarSrc}
                alt={profile.fullName}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                  Senior Full Stack Developer
                </p>
                <p className="font-display text-xl font-semibold text-white">{profile.fullName}</p>
              </div>
            </div>

            {/* status metrics grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 px-1 pb-1">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-panel-2/60 px-4 py-4 transition-colors hover:border-border-strong"
                >
                  <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="mt-1 font-mono text-[10px] text-text-faint">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-8 hidden items-center gap-2 rounded-xl px-3 py-2 sm:flex"
          >
            <span className="h-2 w-2 rounded-full bg-cyan" />
            <span className="font-mono text-[11px] text-text-muted">200 OK · online</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}