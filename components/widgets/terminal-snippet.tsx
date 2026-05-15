"use client";

import { motion } from "framer-motion";

const snippet = `#!/bin/bash
# deploy.sh
kubectl config use-context prod
kubectl apply -f k8s/
helm upgrade vedant-stack ./chart \\
  --set image.tag=$(git rev-parse --short HEAD)
`;

export function TerminalSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="glass-panel overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <p className="ml-2 text-xs text-slate-300">terminal / deploy-production</p>
      </div>
      <pre className="overflow-auto p-4 text-xs text-cyan-100">
        <code>{snippet}</code>
      </pre>
    </motion.div>
  );
}


