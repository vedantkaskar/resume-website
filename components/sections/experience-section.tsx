"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".timeline-node", {
        y: 36,
        opacity: 0,
        stagger: 0.18,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%"
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-padding">
      <div className="curve-section mx-auto max-w-7xl space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-10" ref={ref}>
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">DEVELOPMENT JOURNEY</p>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">Timeline Of Momentum</h2>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute left-2 top-0 h-full w-px bg-slate-300" />
          <div className="space-y-5">
            {experience.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ x: 4 }}
                className="timeline-node relative rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5"
              >
                <span className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full bg-slate-700" />
                <p className="text-xs font-medium text-slate-500">{item.date}</p>
                <h3 className="mt-2 text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-700">{item.subtitle}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
