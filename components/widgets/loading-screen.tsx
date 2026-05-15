"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950"
          exit={{ opacity: 0, transition: { duration: 0.55 } }}
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-semibold text-white"
            >
              Initializing Cloud Stack
            </motion.p>
            <motion.div
              className="mx-auto mt-5 h-1 w-64 overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


