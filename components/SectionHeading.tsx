"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p
        className={`font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase mb-4 ${
          light ? "text-cream/60" : "text-rose-deep"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}