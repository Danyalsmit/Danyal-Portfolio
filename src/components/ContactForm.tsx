"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/data/profile";

const projectTypes = [
  "SaaS / Web Application",
  "Business Website",
  "E-Commerce Store",
  "Dashboard / Admin Panel",
  "Microsoft 365 Add-in",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      if (profile.contactFormEndpoint) {
        // Google Apps Script web apps don't return readable CORS responses,
        // so we fire the request in no-cors mode and treat it as sent once
        // the request completes without throwing.
        await fetch(profile.contactFormEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(payload),
        });
      } else {
        // No endpoint configured yet — simulate so the UI still demos correctly.
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border-strong bg-panel-2/60 px-6 py-16 text-center">
        <CheckCircle2 className="text-cyan" size={36} />
        <p className="font-display text-lg font-semibold text-text">Message sent</p>
        <p className="max-w-xs text-sm text-text-muted">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle size={16} />
          Something went wrong sending your message. Please try again or email me directly.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs text-text-muted">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-border bg-panel-2/60 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-border-strong"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs text-text-muted">
            Your Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl border border-border bg-panel-2/60 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-border-strong"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="mb-2 block font-mono text-xs text-text-muted">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full rounded-xl border border-border bg-panel-2/60 px-4 py-3 text-sm text-text outline-none transition-colors focus:border-border-strong"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-panel">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs text-text-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full resize-none rounded-xl border border-border bg-panel-2/60 px-4 py-3 text-sm text-text placeholder:text-text-faint outline-none transition-colors focus:border-border-strong"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-300 hover:shadow-[0_0_30px_-4px_rgba(245,158,11,0.6)] disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin" size={16} /> Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}