"use client";

import { motion } from "framer-motion";
import { skills } from "../lib/data";
import SectionHeading from "./SectionHeading";

const sizes = ["text-sm", "text-base", "text-lg", "text-xl"];
const bgs = ["bg-blush/60", "bg-sage/50", "bg-cream", "bg-rose/20"];

export default function Skills() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="05 — Toolkit"
          title="The instruments I reach for."
          align="center"
        />

        <div className="mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              animate={{ y: [0, -6, 0] }}
              whileHover={{ scale: 1.08, y: -4 }}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
              className={`inline-block rounded-full border border-charcoal/10 shadow-softer px-5 py-2.5 font-medium text-ink cursor-default transition-shadow hover:shadow-soft ${
                sizes[i % sizes.length]
              } ${bgs[i % bgs.length]}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
