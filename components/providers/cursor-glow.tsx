"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl transition-transform duration-200"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}


