"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "../lib/data";
import { BarChart3, Presentation, Users, LineChart } from "lucide-react";

const iconFor = [BarChart3, Presentation, Users, LineChart];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-blush/40">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="02 — Experience" title="Where the numbers met the room." />

        <div className="mt-16 space-y-16">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-12 border-l-2 border-sage-deep/30">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-rose-deep ring-4 ring-cream"
              />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="rounded-4xl bg-cream shadow-softer hover:shadow-lift transition-shadow duration-500 p-7 sm:p-10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                      {item.role}
                    </h3>
                    <p className="text-rose-deep font-medium mt-1">{item.org}</p>
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-charcoal/50">
                    {item.period}
                  </span>
                </div>

                <p className="text-charcoal/75 leading-relaxed max-w-2xl mb-8">
                  {item.summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {item.points.map((point, i) => {
                    const Icon = iconFor[i % iconFor.length];
                    return (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-sage/60 p-2 text-sage-deep">
                          <Icon size={16} />
                        </span>
                        <span className="text-sm text-charcoal/75 leading-relaxed">
                          {point}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}