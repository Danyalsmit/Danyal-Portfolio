"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

const SESSION_KEY = "exit-intent-shown";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable — just skip the popup rather than throw.
      alreadyShown = true;
    }
    if (alreadyShown) return;

    const onMouseLeave = (e: MouseEvent) => {
      // Only fires when the cursor exits the top of the viewport — i.e. heading for the tab bar.
      if (e.clientY <= 0) {
        setShow(true);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* no-op */
        }
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };

    // Small delay so it can't fire the instant the page loads.
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", onMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <div className="glass glow-ring relative w-full max-w-md rounded-2xl p-8 text-center">
        <button
          aria-label="Close"
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 text-text-muted transition-colors hover:text-text"
        >
          <X size={20} />
        </button>

        <span className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-xs text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(245,158,11,0.6)]" />
          Before you go
        </span>

        <h3 className="mt-4 font-display text-2xl font-semibold text-text">
          Got a project in mind?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {profile.name} is currently open for freelance &amp; full-time roles. Drop your details
          and get a reply within 24 hours — no cost to ask.
        </p>

        <Link
          href="#contact"
          onClick={() => setShow(false)}
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-300 hover:shadow-[0_0_30px_-4px_rgba(245,158,11,0.6)]"
        >
          Get In Touch
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}