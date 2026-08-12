import { profile } from "@/data/profile";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 80 80" fill="none" className="shrink-0">
        <path d="M12 20L4 40L12 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan"/>
        <rect x="20" y="14" width="40" height="52" rx="10" stroke="currentColor" strokeWidth="4" fill="none" className="text-cyan"/>
        <path d="M36 28C48 28 48 52 36 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" className="text-cyan"/>
        <line x1="52" y1="28" x2="52" y2="52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-cyan opacity-60"/>
        <path d="M52 38L64 28" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" className="text-cyan opacity-60"/>
        <path d="M52 42L64 52" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" className="text-cyan opacity-60"/>
        <path d="M68 20L76 40L68 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan"/>
      </svg>
      <span className="leading-none">
        <span className="block font-display text-base font-semibold tracking-tight text-text">
          {profile.name}<span className="text-cyan">.</span>
        </span>
        <span className="block font-mono text-[11px] font-medium tracking-wide text-text-muted mt-0.5">
          Full Stack Dev
        </span>
      </span>
    </div>
  );
}