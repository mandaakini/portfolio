"use client";

import { motion } from "framer-motion";

import HarmonyExplorer from "./HarmonyExplorer/HarmonyExplorer";

export default function HarmonySection() {
  return (
    <section
      id="harmony"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center overflow-hidden bg-oxblood px-6 py-10 text-porcelain sm:px-8 sm:py-12"
    >
      {/* Subtle dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F8F4EF 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Restrained atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-5 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65 }}
            className="flex items-center justify-center gap-4"
          >
            <span
              aria-hidden="true"
              className="h-px w-8 bg-rose/40"
            />

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-rose">
              00 — An Interlude
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-rose/40"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-balance font-editorial text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-porcelain sm:text-4xl lg:text-5xl"
          >
            Patterns aren&apos;t always numbers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-1 font-display text-lg italic text-porcelain/50 sm:text-xl"
          >
            Some are heard.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center"
        >
          <HarmonyExplorer />
        </motion.div>
      </div>
    </section>
  );
}