"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    listeners.forEach((l) => l());
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className={`glass flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:text-cyan ${className}`}
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}