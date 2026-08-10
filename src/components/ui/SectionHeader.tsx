interface SectionHeaderProps {
  route: string; // e.g. "/about" — treats each section like an API endpoint
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  route,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-xs text-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(232,163,61,0.6)]" />
        GET {route}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}