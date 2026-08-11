"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, Mail } from "lucide-react";
import { profile } from "@/data/profile";

// Strip everything except digits so the phone number is wa.me-safe.
const whatsappNumber = profile.phone.replace(/\D/g, "");

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Appear after a short delay / small scroll so it doesn't clutter the very first paint.
    const onScroll = () => {
      if (window.scrollY > 200) setVisible(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {open && (
        <div className="glass glow-ring flex w-60 flex-col gap-2 rounded-2xl p-4">
          <p className="font-display text-sm font-semibold text-text">Let&apos;s talk about your project</p>
          <p className="text-xs text-text-muted">Usually replies within a few hours.</p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue px-4 py-2.5 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} /> WhatsApp Me
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-xl border border-border bg-panel-2/60 px-4 py-2.5 text-sm text-text transition-colors hover:border-border-strong"
          >
            <Mail size={16} /> Send an Email
          </a>
        </div>
      )}

      <button
        aria-label={open ? "Close contact options" : "Open contact options"}
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-blue text-on-accent shadow-[0_10px_30px_-6px_rgba(232,163,61,0.6)] transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}