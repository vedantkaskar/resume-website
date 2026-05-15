"use client";

import { Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export function AIChatMock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-cyan-300/30 bg-slate-900/90 p-4 shadow-glow backdrop-blur-xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
            <Sparkles className="h-4 w-4" /> AI Assistant (Mock)
          </p>
          <div className="mt-3 space-y-2 text-xs text-slate-300">
            <p className="rounded-lg bg-white/5 p-2">Ask me about cloud architecture and project impact.</p>
            <p className="rounded-lg bg-cyan-300/15 p-2 text-cyan-100">
              Suggested: "Show DevOps-focused projects"
            </p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/20 text-cyan-100 shadow-glow"
        aria-label="Toggle AI assistant"
      >
        <Bot className="h-5 w-5" />
      </button>
    </div>
  );
}


