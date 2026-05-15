"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setWidth(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 transition-all duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}


