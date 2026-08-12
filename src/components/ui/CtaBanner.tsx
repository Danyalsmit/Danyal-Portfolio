import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel?: string;
}

export default function CtaBanner({
  title,
  description,
  buttonLabel = "Start Your Project",
}: CtaBannerProps) {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
      <div className="glass glow-ring flex flex-col items-center gap-5 rounded-2xl px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">{title}</h3>
          <p className="mt-2 max-w-lg text-sm text-text-muted sm:text-base">{description}</p>
        </div>
        <Button href="#contact" icon={<ArrowRight size={16} />} className="shrink-0 whitespace-nowrap">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}