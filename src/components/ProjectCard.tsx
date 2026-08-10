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
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.description}</p>
        <p className="mt-3 font-mono text-[11px] text-cyan">{project.metric}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-cyan"
            >
              Live demo <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-cyan"
            >
              <GithubIcon width={14} height={14} /> Code
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}