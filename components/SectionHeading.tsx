"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p
        className={`mb-2 font-mono text-[11px] uppercase tracking-[0.32em] ${
          light
            ? "text-cream/60"
            : "text-rosewood/75"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display text-balance text-3xl font-semibold leading-[1.03] sm:text-4xl md:text-5xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}