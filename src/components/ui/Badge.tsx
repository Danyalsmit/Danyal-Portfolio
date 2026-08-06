export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-cyan/25 bg-cyan/[0.06] px-2.5 py-1 font-mono text-[11px] text-cyan/90">
      {children}
    </span>
  );
}