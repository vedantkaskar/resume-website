"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  ["About", "about"],
  ["Tech", "tech"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"]
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-4 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white px-3 py-2.5 shadow-sm sm:rounded-[2rem] sm:px-4 sm:py-3">
        <button className="min-w-0 text-left" onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>
          <span className="block truncate font-display text-xs font-extrabold tracking-wide text-slate-900 sm:text-sm">Vedant Prashant Kaskar</span>
        </button>

        <nav className="hidden items-center gap-4 text-sm font-semibold text-slate-700 md:flex">
          {nav.map(([label, id]) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              className="transition hover:text-slate-900"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-[1.25rem] border border-slate-200 bg-white p-2.5 shadow-sm md:hidden">
          {nav.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
