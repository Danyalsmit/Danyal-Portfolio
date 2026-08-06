import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import GlassCard from "@/components/ui/GlassCard";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <GlassCard className="flex h-full flex-col p-7">
      <Quote className="text-cyan/40" size={26} />
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? "fill-cyan text-cyan" : "text-text-faint"}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan/30 to-blue/30 font-display text-sm font-semibold text-text">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-text">{testimonial.name}</p>
          <p className="font-mono text-[11px] text-text-faint">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
