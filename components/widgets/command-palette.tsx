"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Command, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const actions = [
  { label: "Go to Hero", id: "hero" },
  { label: "Go to Projects", id: "projects" },
  { label: "Go to Tech Stack", id: "tech" },
  { label: "Go to Contact", id: "contact" }
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    return actions.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/10 md:flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="rounded border border-white/20 px-1.5 py-0.5 text-[10px]">
          <Command className="inline h-3 w-3" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex items-start justify-center bg-slate-950/60 px-4 pt-24 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="w-full max-w-xl rounded-2xl border border-white/15 bg-slate-900/95 p-4 shadow-glow"
            >
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Jump to a section..."
                className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm outline-none"
              />
              <div className="mt-3 space-y-1">
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => jump(item.id)}
                    className="flex w-full items-center rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ))}
                {filtered.length === 0 && <p className="px-3 py-2 text-sm text-slate-400">No results</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


