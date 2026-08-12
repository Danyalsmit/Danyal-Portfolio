import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { GithubIcon } from "@/components/ui/SocialIcons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full glass px-3 py-1 font-mono text-[10px] text-cyan">
          {project.category}
        </div>
        {project.liveUrl && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full glass px-3 py-1 font-mono text-[10px] text-text">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            Live in production
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Outcome-first: the result is the headline, the description explains how */}
        <p className="font-display text-lg font-semibold leading-snug text-gradient">{project.metric}</p>
        <h3 className="mt-1.5 font-display text-base font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          {project.liveUrl ? (
            <>
              {/* Has a real deployment — Live Demo is the primary CTA, GitHub shrinks to an icon */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-cyan"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  title="View source on GitHub"
                  className="text-text-faint opacity-50 transition-opacity hover:text-cyan hover:opacity-100"
                >
                  <GithubIcon width={16} height={16} />
                </a>
              )}
            </>
          ) : (
            project.githubUrl && (
              // No live deployment for this one — GitHub is the only proof of work,
              // so it stays as a real CTA instead of shrinking to an icon.
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-cyan"
              >
                <GithubIcon width={14} height={14} /> View Source Code
              </a>
            )
          )}
        </div>
      </div>
    </GlassCard>
  );
}