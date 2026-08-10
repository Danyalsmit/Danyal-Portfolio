"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border bg-void/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-blue font-display text-sm font-bold text-on-accent shadow-[0_0_20px_-2px_rgba(232,163,61,0.6)]">
            {profile.name.charAt(0)}
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-semibold tracking-tight text-text">
              {profile.name}
              <span className="text-cyan">.</span>
            </span>
            <span className="block font-mono text-[10px] text-text-faint">Full Stack Dev</span>
          </span>
        </Link>

        <ul className="glass hidden items-center gap-1 rounded-full px-1.5 py-1.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-full px-4 py-2 font-mono text-[13px] transition-all duration-300 ${
                  active === link.href
                    ? "bg-gradient-to-r from-cyan/20 to-blue/20 text-cyan shadow-[0_0_0_1px_rgba(232,163,61,0.3)]"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#contact" className="!px-5 !py-2.5">
            Let&apos;s talk
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="text-text"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-mono text-sm transition-colors ${
                    active === link.href ? "text-cyan" : "text-text-muted hover:text-cyan"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-6 w-full justify-center">
            Let&apos;s talk
          </Button>
        </div>
      )}
    </header>
  );
}