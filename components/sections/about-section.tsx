"use client";

import { motion } from "framer-motion";
import { aboutTimeline } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="curve-section mx-auto max-w-7xl space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">ABOUT</p>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">Engineering Intelligence For Real-World Scale</h2>
          <p className="max-w-3xl text-slate-600">
            3rd-year B.Tech CSE student at MIT WPU, AWS Generative AI certified, and deeply focused on building
            scalable systems across Cloud, DevOps, AI/ML, and modern Full Stack architectures.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutTimeline.map((node, index) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel p-5"
            >
              <p className="text-xs font-medium text-slate-500">{node.year}</p>
              <h3 className="mt-2 text-base font-bold text-slate-900">{node.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{node.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
