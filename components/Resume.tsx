"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import SectionHeading from "./SectionHeading";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-rose-mist/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-sage-mist/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="05 — Resume"
          title="Everything above, on one page."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-14 grid items-center gap-10 overflow-hidden rounded-5xl border border-eucalyptus/10 bg-sage-mist p-8 shadow-softer sm:p-12 lg:grid-cols-12"
        >
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-eucalyptus/20"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-10 right-1/3 h-20 w-20 rotate-12 rounded-3xl bg-rose-mist/70"
          />

          <div className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="mx-auto max-w-md rounded-3xl border border-espresso/5 bg-porcelain p-6 shadow-soft sm:p-8 lg:mx-0"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="font-display text-lg font-semibold text-ink">
                  Mandaakini Raghuraman
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal/70">
                  Resume
                </span>
              </div>

              <div className="space-y-3">
                {[100, 85, 90, 70, 95].map((width, index) => (
                  <div
                    key={index}
                    className="h-2.5 rounded-full bg-espresso/[0.08]"
                    style={{
                      width: `${width}%`,
                    }}
                  />
                ))}

                <div className="space-y-3 pt-3">
                  {[95, 60, 80].map((width, index) => (
                    <div
                      key={index}
                      className={`h-2.5 rounded-full ${
                        index === 1
                          ? "bg-rose/20"
                          : "bg-eucalyptus/25"
                      }`}
                      style={{
                        width: `${width}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <span className="h-6 w-20 rounded-full bg-rose-mist" />
                  <span className="h-6 w-24 rounded-full bg-sage-mist" />
                  <span className="h-6 w-16 rounded-full bg-plum-mist" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <p className="mb-8 max-w-sm leading-relaxed text-charcoal">
              A one-page summary of my education, experience, leadership, and
              skills—the highlight-reel version of everything on this site.
            </p>

            <a
              href="/images/MandaakiniRaghuraman_Resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-deep-espresso px-7 py-3.5 text-sm font-medium text-cream shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="absolute inset-0 translate-y-full bg-rosewood transition-transform duration-300 ease-out group-hover:translate-y-0" />

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