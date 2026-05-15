"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding pb-28">
      <div className="curve-section mx-auto max-w-7xl space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">CONTACT</p>
          <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-5xl">Let&apos;s Build Something Scalable Together</h2>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <div className="glass-panel p-6">
            <form className="space-y-4" onSubmit={submit}>
              <Input placeholder="Your Name" required />
              <Input placeholder="Your Email" type="email" required />
              <Input placeholder="Project Type" />
              <Textarea placeholder="Tell me about your challenge" required />
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
              {submitted && <p className="text-sm text-slate-600">Message queued successfully. I will get back soon.</p>}
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel space-y-4 p-6"
          >
            <h3 className="text-xl font-extrabold">Connect Directly</h3>
            <p className="text-sm text-slate-600">Available for internships, collaborative builds, and product engineering roles.</p>
            <div className="space-y-2 text-sm">
              <a className="flex items-start gap-2 font-semibold text-slate-700 hover:text-slate-900" href="mailto:vedantk3007@gmail.com">
                <Mail className="h-4 w-4" /> vedantk3007@gmail.com
              </a>
              <a className="flex items-start gap-2 break-all font-semibold text-slate-700 hover:text-slate-900" href="https://github.com/vedantkaskar" target="_blank">
                <Github className="mt-0.5 h-4 w-4 shrink-0" /> github.com/vedantkaskar
              </a>
              <a
                className="flex items-start gap-2 break-all font-semibold text-slate-700 hover:text-slate-900"
                href="https://www.linkedin.com/in/vedant-kaskar-b0bab23aa"
                target="_blank"
              >
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0" /> linkedin.com/in/vedant-kaskar-b0bab23aa
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
