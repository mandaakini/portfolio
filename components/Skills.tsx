"use client";

import { motion } from "framer-motion";
import { skills } from "../lib/data";
import SectionHeading from "./SectionHeading";


const sizes = ["text-sm", "text-base", "text-lg", "text-xl"];
const technicalSkills = new Set([
  "SQL",
  "Python",
  "Excel",
  "Tableau",
  "Power BI",
  "Data Visualization",
]);

const researchSkills = new Set([
  "Market Research",
  "Consumer Insights",
  "Audience Insights",
  "Quantitative Research",
  "Qualitative Research",
  "Insight Synthesis",
]);

const automationSkills = new Set([
  "AI Agent Development",
  "Workflow Automation",
  "Process Improvement",
]);

function getSkillColors(skill: string) {
  if (technicalSkills.has(skill)) {
    return "border-plum/15 bg-lilac/80 text-plum";
  }

  if (researchSkills.has(skill)) {
    return "border-rose/20 bg-rose/20 text-rosewood";
  }

  if (automationSkills.has(skill)) {
    return "border-mushroom-deep/15 bg-mushroom/80 text-ink";
  }

  return "border-rosewood/10 bg-porcelain text-ink";
}

export default function Skills() {
  return (
      <section
        id="toolkit"
        className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center overflow-hidden bg-blush/60 py-28 sm:py-36"
      >
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 — Toolkit"
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
              className={`inline-block cursor-default rounded-full border px-5 py-2.5 font-medium shadow-softer transition-shadow hover:shadow-soft ${
                sizes[i % sizes.length]
              } ${getSkillColors(skill)}`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
