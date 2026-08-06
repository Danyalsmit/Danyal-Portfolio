import { Briefcase } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <GlassCard className="p-6 md:p-7" hover={false}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg font-semibold text-text md:text-xl">
              {item.role}
            </h3>
            {item.current && (
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                current
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-cyan">
            {item.org} · {item.location}
          </p>
        </div>
        <span className="rounded-full border border-border bg-panel-2/60 px-3 py-1 font-mono text-[11px] text-text-[#CBD5E1]">
          {item.period}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{item.summary}</p>

      <ul className="mt-4 space-y-2">
        {item.highlights.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </GlassCard>
  );
}

export function TimelineDot() {
  return (
    <span className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-cyan">
      <Briefcase size={22} />
    </span>
  );
}
