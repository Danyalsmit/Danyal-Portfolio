"use client";

import { useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import type { ExperienceItem } from "@/data/experience";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  // Current role starts open; older roles start collapsed so the timeline
  // doesn't force a long scroll — click any row to expand it.
  const [open, setOpen] = useState(Boolean(item.current));

  return (
    <GlassCard className="overflow-hidden p-0" hover={false}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full flex-wrap items-start justify-between gap-3 p-6 text-left md:p-7"
      >
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

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-border bg-panel-2/60 px-3 py-1 font-mono text-[11px] text-text-muted">
            {item.period}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-text-faint transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 md:px-7 md:pb-7">
          <p className="text-sm leading-relaxed text-text-muted">{item.summary}</p>

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
        </div>
      )}
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
