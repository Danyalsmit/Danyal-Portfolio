import Link from "next/link";
import { Briefcase } from "lucide-react";
import { profile } from "@/data/profile";
import { navLinks } from "@/data/nav";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="#home" className="font-display text-xl font-semibold">
              {profile.name}
              <span className="text-cyan">.</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-text-muted">{profile.heroSubheading}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <Link
              href={profile.social.github}
              target="_blank"
              aria-label="GitHub"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
            >
              <GithubIcon width={18} height={18} />
            </Link>
            <Link
              href={profile.social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
            >
              <LinkedinIcon width={18} height={18} />
            </Link>
            <Link
              href={profile.social.upwork}
              target="_blank"
              aria-label="Upwork"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan"
            >
              <Briefcase size={18} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
