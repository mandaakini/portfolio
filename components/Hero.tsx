"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + index * 0.11,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center justify-center overflow-hidden bg-cream px-6 pb-24 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Editorial label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-7 flex items-center justify-center gap-4"
        >
          <span
            aria-hidden="true"
            className="h-px w-7 bg-rosewood/45 sm:w-10"
          />

          <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-rosewood sm:text-[11px] sm:tracking-[0.3em]">
            Analytics · Strategy · Consumer Insights
          </p>

          <span
            aria-hidden="true"
            className="h-px w-7 bg-rosewood/45 sm:w-10"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-balance font-display text-[15vw] font-semibold leading-[0.88] tracking-[-0.045em] text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem]"
        >
          Mandaakini
          <br />
          Raghuraman
        </motion.h1>

        {/* Positioning statement */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-9 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg"
        >
          I turn data, research, and complex business questions into clear
          insights and decisions.
        </motion.p>

        {/* Links */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
        >
          <a
            href="#projects"
            className="border-b border-ink pb-1 text-sm font-medium text-ink transition-opacity duration-300 hover:opacity-55"
          >
            View Selected Work
          </a>

          <a
            href="/images/MandaakiniRaghuraman_Resume_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-transparent pb-1 text-sm font-medium text-charcoal/75 transition-all duration-300 hover:border-charcoal/60 hover:text-ink"
          >
            Résumé
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.15,
          duration: 0.8,
        }}
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-charcoal/35"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] sm:text-[9px]">
          Explore
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}