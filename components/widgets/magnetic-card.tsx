"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MagneticCard({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  const [xy, setXy] = useState({ x: 50, y: 50, rx: 0, ry: 0 });

  const style = useMemo(
    () => ({
      transform: `perspective(1000px) rotateX(${xy.rx}deg) rotateY(${xy.ry}deg)`,
      ["--x" as string]: `${xy.x}%`,
      ["--y" as string]: `${xy.y}%`
    }),
    [xy]
  );

  return (
    <motion.div
      className={cn("glass-panel transition-transform duration-150", className)}
      style={style}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const rx = (50 - y) / 8;
        const ry = (x - 50) / 8;
        setXy({ x, y, rx, ry });
      }}
      onMouseLeave={() => setXy({ x: 50, y: 50, rx: 0, ry: 0 })}
    >
      {children}
    </motion.div>
  );
}


