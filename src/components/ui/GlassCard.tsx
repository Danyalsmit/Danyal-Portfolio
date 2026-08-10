import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl ${
        hover
          ? "transition-all duration-300 hover:border-border-strong hover:-translate-y-1 hover:shadow-[0_20px_60px_-24px_rgba(232,163,61,0.35)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}