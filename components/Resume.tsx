"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="07 — Resume"
          title="Everything above, on one page."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid items-center gap-8 rounded-5xl bg-sage/25 p-8 sm:p-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <div
              aria-hidden="true"
              className="mx-auto max-w-md rounded-3xl bg-cream p-6 shadow-soft sm:p-8 lg:mx-0"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  Mandaakini
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/40">
                  Resume
                </span>
              </div>

              <div className="space-y-3">
                {[100, 85, 90, 70, 95].map((width, index) => (
                  <div
                    key={index}
                    className="h-2.5 rounded-full bg-charcoal/[0.08]"
                    style={{ width: `${width}%` }}
                  />
                ))}

                <div className="space-y-3 pt-3">
                  {[95, 60, 80].map((width, index) => (
                    <div
                      key={index}
                      className="h-2.5 rounded-full bg-sage-deep/20"
                      style={{ width: `${width}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="mb-8 max-w-sm leading-relaxed text-charcoal/75">
              A one-page summary of my education, experience, leadership, and
              skills—the highlight-reel version of everything on this site.
            </p>

            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-y-full bg-rose-deep transition-transform duration-300 ease-out group-hover:translate-y-0" />

              <span className="relative flex items-center gap-2">
                <Download size={16} aria-hidden="true" />
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}