"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { roles, socialLinks } from "@/lib/data";

const socialIcon = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
} as const;

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1900);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative section-padding pt-20 sm:pt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="curve-section space-y-6 p-5 sm:space-y-7 sm:p-8 md:p-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-600 sm:px-4 sm:text-xs"
          >
            AI | CLOUD | DEVOPS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:text-6xl xl:text-7xl"
          >
            Vedant Prashant Kaskar
          </motion.h1>

          <motion.div
            key={roles[roleIndex]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="h-8 text-lg font-bold text-slate-700 sm:h-10 sm:text-xl md:text-2xl"
          >
            {roles[roleIndex]}
          </motion.div>

          <p className="max-w-2xl text-sm leading-relaxed font-medium text-slate-600 md:text-base">
            Engineering scalable digital systems at the intersection of Cloud Infrastructure, AI, and Full Stack
            product development.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button className="w-full sm:w-auto" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="w-full sm:w-auto" variant="outline" onClick={() => window.open("/resume.pdf", "_blank")}>Download Resume</Button>
            <Button
              className="w-full sm:w-auto"
              variant="ghost"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2 sm:gap-4 sm:pt-4">
            {socialLinks.map((item) => {
              const Icon = socialIcon[item.key];
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 sm:p-3"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="curve-section relative mx-auto flex w-full max-w-md items-center justify-center p-3 sm:p-4"
        >
          <motion.div
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm"
          >
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src="/vedant-photo.jpg?v=2"
                alt="Vedant Prashant Kaskar"
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        aria-label="Scroll down"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
