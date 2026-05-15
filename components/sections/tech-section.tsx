"use client";

import { motion } from "framer-motion";
import { Atom, Braces, Cloud, Database, Hammer, Workflow } from "lucide-react";
import { useState } from "react";
import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const categoryIcon = {
  Languages: Braces,
  "Cloud & DevOps": Cloud,
  "Web Development": Workflow,
  "AI/ML": Atom,
  Databases: Database,
  Tools: Hammer
} as const;

export function TechSection() {
  const [expanded, setExpanded] = useState<string | null>(skillGroups[0].category);

  return (
    <section id="tech" className="section-padding">
      <div className="curve-section mx-auto max-w-7xl space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">TECH STACK</p>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">Cloud-Native Skill Matrix</h2>
          <p className="max-w-3xl text-slate-600">Interactive categories designed like a live engineering capability map.</p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcon[group.category as keyof typeof categoryIcon];
            const isOpen = expanded === group.category;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel p-5"
              >
                <button className="flex w-full items-center justify-between" onClick={() => setExpanded(isOpen ? null : group.category)}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-600" />
                    <h3 className="font-bold">{group.category}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">{group.progress}%</span>
                </button>

                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.progress}%` }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-slate-700"
                  />
                </div>

                {isOpen && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
