"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const relationships: Record<string, string[]> = {
  SQL: [
    "Python",
    "Tableau",
    "Power BI",
    "Data Visualization",
    "Quantitative Research",
  ],
  Python: [
    "SQL",
    "AI Agent Development",
    "Workflow Automation",
    "Data Visualization",
    "Quantitative Research",
  ],
  Excel: [
    "Market Research",
    "Quantitative Research",
    "Data Visualization",
    "Business Transformation",
  ],
  Tableau: [
    "SQL",
    "Data Visualization",
    "Consumer Insights",
    "Insight Synthesis",
  ],
  "Power BI": [
    "SQL",
    "Data Visualization",
    "Business Transformation",
    "Insight Synthesis",
  ],
  "Data Visualization": [
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Insight Synthesis",
  ],
  "Market Research": [
    "Consumer Insights",
    "Audience Insights",
    "Quantitative Research",
    "Qualitative Research",
    "Insight Synthesis",
    "Growth Strategy",
  ],
  "Consumer Insights": [
    "Market Research",
    "Audience Insights",
    "Qualitative Research",
    "Insight Synthesis",
    "Product Strategy",
  ],
  "Audience Insights": [
    "Market Research",
    "Consumer Insights",
    "Qualitative Research",
    "Insight Synthesis",
    "Growth Strategy",
  ],
  "Quantitative Research": [
    "SQL",
    "Python",
    "Excel",
    "Market Research",
    "Data Visualization",
  ],
  "Qualitative Research": [
    "Market Research",
    "Consumer Insights",
    "Audience Insights",
    "Insight Synthesis",
  ],
  "Insight Synthesis": [
    "Market Research",
    "Consumer Insights",
    "Data Visualization",
    "Product Strategy",
    "Growth Strategy",
  ],
  "AI Agent Development": [
    "Python",
    "Workflow Automation",
    "Process Improvement",
    "Business Transformation",
  ],
  "Workflow Automation": [
    "Python",
    "AI Agent Development",
    "Process Improvement",
    "Business Transformation",
  ],
  "Process Improvement": [
    "Workflow Automation",
    "AI Agent Development",
    "Business Transformation",
    "Project Management",
  ],
  "Business Transformation": [
    "AI Agent Development",
    "Workflow Automation",
    "Process Improvement",
    "Project Management",
    "Stakeholder Management",
  ],
  "Growth Strategy": [
    "Market Research",
    "Consumer Insights",
    "Audience Insights",
    "Product Strategy",
    "Insight Synthesis",
  ],
  "Product Strategy": [
    "Consumer Insights",
    "Market Research",
    "Growth Strategy",
    "Insight Synthesis",
    "Stakeholder Management",
  ],
  "Project Management": [
    "Stakeholder Management",
    "Process Improvement",
    "Business Transformation",
    "Product Strategy",
  ],
  "Stakeholder Management": [
    "Project Management",
    "Business Transformation",
    "Product Strategy",
    "Insight Synthesis",
  ],
};

type Point = {
  x: number;
  y: number;
};

type Connection = {
  id: string;
  start: Point;
  end: Point;
};

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
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const skillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const relatedSkills = useMemo(() => {
    if (!activeSkill) return new Set<string>();

    return new Set(relationships[activeSkill] ?? []);
  }, [activeSkill]);

  const calculateConnections = useCallback(() => {
    if (!activeSkill || !containerRef.current) {
      setConnections([]);
      return;
    }

    const activeNode = skillRefs.current[activeSkill];

    if (!activeNode) {
      setConnections([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();

    const start = {
      x: activeRect.left - containerRect.left + activeRect.width / 2,
      y: activeRect.top - containerRect.top + activeRect.height / 2,
    };

    const nextConnections = [...relatedSkills].flatMap((relatedSkill) => {
      const relatedNode = skillRefs.current[relatedSkill];

      if (!relatedNode) return [];

      const relatedRect = relatedNode.getBoundingClientRect();

      return [
        {
          id: `${activeSkill}-${relatedSkill}`,
          start,
          end: {
            x:
              relatedRect.left -
              containerRect.left +
              relatedRect.width / 2,
            y:
              relatedRect.top -
              containerRect.top +
              relatedRect.height / 2,
          },
        },
      ];
    });

    setConnections(nextConnections);
  }, [activeSkill, relatedSkills]);

  useEffect(() => {
    calculateConnections();

    window.addEventListener("resize", calculateConnections);

    return () => {
      window.removeEventListener("resize", calculateConnections);
    };
  }, [calculateConnections]);

  function getAttraction(skill: string) {
    if (
      !activeSkill ||
      skill === activeSkill ||
      !relatedSkills.has(skill)
    ) {
      return { x: 0, y: 0 };
    }

    const activeNode = skillRefs.current[activeSkill];
    const relatedNode = skillRefs.current[skill];

    if (!activeNode || !relatedNode) {
      return { x: 0, y: 0 };
    }

    const activeRect = activeNode.getBoundingClientRect();
    const relatedRect = relatedNode.getBoundingClientRect();

    const deltaX =
      activeRect.left +
      activeRect.width / 2 -
      (relatedRect.left + relatedRect.width / 2);

    const deltaY =
      activeRect.top +
      activeRect.height / 2 -
      (relatedRect.top + relatedRect.height / 2);

    const distance = Math.hypot(deltaX, deltaY);

    if (!distance) {
      return { x: 0, y: 0 };
    }

    const attraction = 10;

    return {
      x: (deltaX / distance) * attraction,
      y: (deltaY / distance) * attraction,
    };
  }

  return (
    <section
      id="toolkit"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center overflow-hidden bg-blush/60 py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="The instruments I think with."
          align="center"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal sm:text-lg">
          No single tool creates insight. The interesting part is how they work
          together.
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 max-w-4xl"
          onMouseLeave={() => {
            setActiveSkill(null);
            setConnections([]);
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {connections.map((connection) => {
              const midpointX =
                (connection.start.x + connection.end.x) / 2;

              return (
                <motion.path
                  key={connection.id}
                  d={[
                    `M ${connection.start.x} ${connection.start.y}`,
                    `C ${midpointX} ${connection.start.y},`,
                    `${midpointX} ${connection.end.y},`,
                    `${connection.end.x} ${connection.end.y}`,
                  ].join(" ")}
                  fill="none"
                  stroke="rgba(151, 82, 101, 0.45)"
                  strokeWidth="1.2"
                  strokeDasharray="5 6"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </svg>

          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const isActive = skill === activeSkill;
              const isRelated = relatedSkills.has(skill);
              const isDimmed =
                Boolean(activeSkill) && !isActive && !isRelated;

              const attraction = getAttraction(skill);

              return (
                <motion.button
                  key={skill}
                  ref={(node) => {
                    skillRefs.current[skill] = node;
                  }}
                  type="button"
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  animate={{
                    x: attraction.x,
                    y: attraction.y,
                    opacity: isDimmed ? 0.06 : 1,
                    scale: isActive ? 1.1 : isRelated ? 1.04 : 1,
                    filter:
                      isActive || isRelated
                        ? "drop-shadow(0 0 12px rgba(151, 82, 101, 0.28))"
                        : "drop-shadow(0 0 0 rgba(0,0,0,0))",
                  }}
                  whileHover={{
                    scale: isDimmed ? 1 : 1.08,
                    y: isDimmed ? 0 : -4,
                  }}
                  onMouseEnter={() => {
                    setActiveSkill(skill);

                    requestAnimationFrame(() => {
                      calculateConnections();
                    });
                  }}
                  onFocus={() => {
                    setActiveSkill(skill);

                    requestAnimationFrame(() => {
                      calculateConnections();
                    });
                  }}
                  onBlur={() => {
                    setActiveSkill(null);
                    setConnections([]);
                  }}
                  className={`relative cursor-default rounded-full border px-5 py-2.5 font-medium shadow-softer transition-colors duration-300 hover:shadow-soft ${
                    sizes[index % sizes.length]
                  } ${getSkillColors(skill)}`}
                  style={{
                    pointerEvents: isDimmed ? "none" : "auto",
                  }}
                  aria-label={`Show skills related to ${skill}`}
                >
                  {skill}

                  {(isActive || isRelated) && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-[-5px] -z-10 rounded-full border border-rosewood/20"
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: isActive ? 0.8 : 0.4,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <motion.p
            aria-live="polite"
            animate={{
              opacity: activeSkill ? 1 : 0.6,
            }}
            className="mt-10 min-h-6 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-rosewood"
          >
            {activeSkill
              ? `${activeSkill} connects with ${[
                  ...relatedSkills,
                ].join(" · ")}`
              : "Hover over an instrument to reveal its connections"}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
