"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { filters, projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { MagneticCard } from "@/components/widgets/magnetic-card";

export function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section id="projects" className="section-padding">
      <div className="curve-section mx-auto max-w-7xl space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">PROJECTS</p>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">Build Portfolio With Startup-Scale Ambition</h2>
          <p className="max-w-3xl text-slate-600">
            A curated set of cloud-native, AI-driven, and full stack systems engineered for impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                active === filter
                  ? "border-slate-300 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <MagneticCard className="h-full overflow-hidden p-0">
                  <div className="border-b border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-medium text-slate-500">{project.category}</p>
                    <h3 className="mt-2 text-xl font-extrabold text-slate-900">{project.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 p-5 text-sm text-slate-600">
                    <p>{project.description}</p>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
