"use client";

import { motion } from "framer-motion";

import HarmonyExplorer from "./HarmonyExplorer/HarmonyExplorer";

export default function HarmonySection() {
  return (
    <section
      id="harmony"
      className="relative scroll-mt-20 overflow-hidden bg-oxblood px-6 py-28 text-porcelain sm:px-8 sm:py-36 lg:py-44"
    >
      {/* Restrained dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Very subtle glow behind the interaction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[62%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-[100px] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-14 max-w-5xl text-center sm:mb-20">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            <span
              aria-hidden="true"
              className="h-px w-7 bg-rose/45 sm:w-10"
            />

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-rose sm:text-[10px]">
              00 — An Interlude
            </p>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-rose/45 sm:w-10"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-porcelain sm:text-6xl lg:text-7xl"
          >
            Patterns aren&apos;t always numbers.
          </motion.h2>

          {/* Secondary thought */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
            }}
            className="mt-4 font-display text-2xl italic text-porcelain/55 sm:text-3xl"
          >
            Some are heard.
          </motion.p>
        </header>

        {/* Harmony interaction */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex justify-center"
        >
          <HarmonyExplorer />
        </motion.div>

        {/* Minimal instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-9 text-center font-mono text-[8px] uppercase tracking-[0.25em] text-porcelain/30 sm:text-[9px]"
        >
          Move through the sound
        </motion.p>
      </div>
    </section>
  );
}