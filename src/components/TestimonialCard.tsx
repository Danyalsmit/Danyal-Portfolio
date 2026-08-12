import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import GlassCard from "@/components/ui/GlassCard";

export default function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  if (featured) {
    // Used when there's only one testimonial — bigger, centered, with a large
    // decorative gold quote mark instead of the small grid-card layout.
    return (
      <GlassCard className="glow-ring flex flex-col items-center p-10 text-center md:p-14" hover={false}>
        <span
          aria-hidden
          className="font-display text-7xl leading-none text-cyan md:text-8xl"
        >
          &ldquo;
        </span>

        <div className="-mt-4 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < testimonial.rating ? "fill-cyan text-cyan" : "text-text-faint"}
            />
          ))}
        </div>

        <p className="mt-5 max-w-lg font-display text-xl italic leading-relaxed text-text md:text-2xl">
          {testimonial.quote}
        </p>

        <div className="mt-7 flex items-center gap-3 border-t border-border pt-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan/30 to-blue/30 font-display text-base font-semibold text-text">
            {testimonial.name.charAt(0)}
          </span>
          <div className="text-left">
            <p className="font-display text-sm font-semibold text-text">{testimonial.name}</p>
            <p className="font-mono text-[11px] text-text-faint">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="flex h-full flex-col p-7">
      <span aria-hidden className="font-display text-4xl leading-none text-cyan/50">
        &ldquo;
      </span>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? "fill-cyan text-cyan" : "text-text-faint"}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">{testimonial.quote}</p>
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