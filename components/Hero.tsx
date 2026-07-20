"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.12,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pb-20 pt-28 sm:pt-32"

      
    >

      <div className="relative mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 max-w-4xl font-mono text-[11px] uppercase tracking-[0.25em] text-rose sm:text-xs"
        >
          Business Analytics · Consumer Insights · Product Strategy · Market
          Research · Music
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-balance font-display text-[13vw] font-semibold leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Mandaakini
          <br />
          <span>Raghuraman</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 max-w-xl text-base leading-relaxed text-charcoal sm:text-lg"
        >
          I explore the intersection of data, creativity, and human behavior to
          build products and experiences people genuinely connect with.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-deep-espresso px-7 py-3.5 text-sm font-medium text-cream shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
          >
            <span className="absolute inset-0 translate-y-full bg-rosewood transition-transform duration-300 ease-out group-hover:translate-y-0" />

            <span className="relative">
              Let&apos;s Connect
            </span>
          </a>

          <a
            href="/images/MandaakiniRaghuraman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-rosewood/25 bg-porcelain/70 px-7 py-3.5 text-sm font-medium text-ink shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:border-rosewood hover:text-rosewood hover:shadow-soft"
          >
            <FileText size={16} aria-hidden="true" />
            View Resume
          </a>
        </motion.div>

        {/* Signature equalizer motif */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 flex h-8 items-end gap-1.5"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <motion.span
              key={index}
              className="w-1.5 rounded-full bg-eucalyptus/75"
              animate={{
                height: ["30%", "100%", "50%", "80%", "30%"],
              }}
              transition={{
                duration: 2.4 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.12,
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 1,
        }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal/60 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}