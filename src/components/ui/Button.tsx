import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  download?: boolean | string;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  download,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 font-body";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan to-blue text-void shadow-[0_0_0_1px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.6)] hover:-translate-y-0.5"
      : "glass text-text hover:border-border-strong hover:-translate-y-0.5";

  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} download={download} {...linkProps}>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
}