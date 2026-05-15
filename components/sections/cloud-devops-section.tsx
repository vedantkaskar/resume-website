"use client";

import { motion } from "framer-motion";
import { cloudFlow } from "@/lib/data";

export function CloudDevopsSection() {
  return (
    <section id="cloud" className="section-padding">
      <div className="curve-section mx-auto max-w-7xl space-y-10 p-8 md:p-10">
        <div className="space-y-3">
          <p className="text-xs tracking-[0.2em] text-slate-500">CLOUD & DEVOPS</p>
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Infrastructure Intelligence Dashboard</h2>
          <p className="max-w-3xl text-slate-600">
            Visualizing CI/CD reliability, Kubernetes orchestration, and AWS-ready architecture patterns.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-5">
            <h3 className="text-lg font-semibold">CI/CD Deployment Flow</h3>
            <div className="mt-5 space-y-3">
              {cloudFlow.map((step, i) => (
                <div key={step} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>{step}</span>
                    <span className="text-slate-500">0{i + 1}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <motion.div
                      className="h-full rounded-full bg-slate-700"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${75 + i * 4}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glass-panel p-5">
              <h3 className="text-lg font-semibold">AWS Architecture Layer</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  "Route53 + CDN",
                  "ALB + API",
                  "EKS Cluster",
                  "RDS + Redis",
                  "S3 Artifact",
                  "CloudWatch"
                ].map((node) => (
                  <div key={node} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                    {node}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5">
              <h3 className="text-lg font-semibold">Kubernetes Cluster Health</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Ingress", "Service Mesh", "Worker Nodes", "AutoScaler", "Monitoring"].map((part, idx) => (
                  <motion.div
                    key={part}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4, delay: idx * 0.2 }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-700"
                  >
                    {part}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
