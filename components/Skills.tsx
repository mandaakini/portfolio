"use client";

import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { skills } from "../lib/data";
import SectionHeading from "./SectionHeading";

const sizes = ["text-sm", "text-base", "text-lg", "text-xl"];

const technicalSkills = new Set([
  "SQL",
  "Python",
  "Excel",
  "Tableau",
  "Power BI",
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

const skillDetails: Record<
  string,
  {
    line: string;
    connectsTo: string[];
  }
> = {
  SQL: {
    line: "Used to query, structure, and investigate complex datasets.",
    connectsTo: ["Python", "Excel", "Tableau", "Power BI"],
  },
  Python: {
    line: "Used for analysis, automation, modeling, and AI-enabled workflows.",
    connectsTo: [
      "SQL",
      "AI Agent Development",
      "Workflow Automation",
      "Data Visualization",
    ],
  },
  Excel: {
    line: "Used for flexible analysis, modeling, validation, and reporting.",
    connectsTo: [
      "SQL",
      "Market Research",
      "Quantitative Research",
      "Data Visualization",
    ],
  },
  Tableau: {
    line: "Used to translate complex analysis into accessible visual stories.",
    connectsTo: [
      "SQL",
      "Data Visualization",
      "Consumer Insights",
      "Insight Synthesis",
    ],
  },
  "Power BI": {
    line: "Used to build interactive reports and decision-ready dashboards.",
    connectsTo: [
      "SQL",
      "Data Visualization",
      "Business Transformation",
      "Stakeholder Management",
    ],
  },
  "AI Agent Development": {
    line: "Used to build systems that automate research and business workflows.",
    connectsTo: [
      "Python",
      "Workflow Automation",
      "Process Improvement",
      "Business Transformation",
    ],
  },
  "Data Visualization": {
    line: "Used to make patterns, comparisons, and decisions easier to understand.",
    connectsTo: [
      "Tableau",
      "Power BI",
      "Insight Synthesis",
      "Stakeholder Management",
    ],
  },
  "Market Research": {
    line: "Used to understand markets, audiences, behavior, and unmet needs.",
    connectsTo: [
      "Consumer Insights",
      "Audience Insights",
      "Quantitative Research",
      "Qualitative Research",
    ],
  },
  "Consumer Insights": {
    line: "Used to turn customer behavior and feedback into strategic direction.",
    connectsTo: [
      "Market Research",
      "Audience Insights",
      "Insight Synthesis",
      "Product Strategy",
    ],
  },
  "Audience Insights": {
    line: "Used to understand how distinct groups engage, respond, and connect.",
    connectsTo: [
      "Consumer Insights",
      "Market Research",
      "Growth Strategy",
      "Product Strategy",
    ],
  },
  "Quantitative Research": {
    line: "Used to measure patterns, test relationships, and validate decisions.",
    connectsTo: [
      "SQL",
      "Excel",
      "Market Research",
      "Data Visualization",
    ],
  },
  "Qualitative Research": {
    line: "Used to uncover the motivations and context behind observed behavior.",
    connectsTo: [
      "Market Research",
      "Consumer Insights",
      "Insight Synthesis",
      "Product Strategy",
    ],
  },
  "Insight Synthesis": {
    line: "Used to connect evidence across sources into a clear point of view.",
    connectsTo: [
      "Consumer Insights",
      "Qualitative Research",
      "Data Visualization",
      "Stakeholder Management",
    ],
  },
  "Workflow Automation": {
    line: "Used to reduce repetitive work and create more reliable processes.",
    connectsTo: [
      "Python",
      "AI Agent Development",
      "Process Improvement",
      "Business Transformation",
    ],
  },
  "Business Transformation": {
    line: "Used to redesign operations, capabilities, and ways of working.",
    connectsTo: [
      "AI Agent Development",
      "Process Improvement",
      "Growth Strategy",
      "Stakeholder Management",
    ],
  },
  "Growth Strategy": {
    line: "Used to identify opportunities for acquisition, retention, and expansion.",
    connectsTo: [
      "Audience Insights",
      "Consumer Insights",
      "Business Transformation",
      "Product Strategy",
    ],
  },
  "Process Improvement": {
    line: "Used to simplify workflows and improve consistency and efficiency.",
    connectsTo: [
      "Workflow Automation",
      "AI Agent Development",
      "Business Transformation",
      "Project Management",
    ],
  },
  "Product Strategy": {
    line: "Used to connect user needs, business goals, and product decisions.",
    connectsTo: [
      "Consumer Insights",
      "Audience Insights",
      "Growth Strategy",
      "Project Management",
    ],
  },
  "Project Management": {
    line: "Used to move ideas from ambiguity through execution.",
    connectsTo: [
      "Product Strategy",
      "Process Improvement",
      "Stakeholder Management",
      "Business Transformation",
    ],
  },
  "Stakeholder Management": {
    line: "Used to build alignment and turn insight into coordinated action.",
    connectsTo: [
      "Insight Synthesis",
      "Project Management",
      "Business Transformation",
      "Data Visualization",
    ],
  },
};

type Point = {
  x: number;
  y: number;
};

type Connection = {
  id: string;
  from: Point;
  to: Point;
};

function getSkillColors(skill: string) {
  if (technicalSkills.has(skill)) {
    return "border-wine/10 bg-mushroom/70 text-ink";
  }

  if (researchSkills.has(skill)) {
    return "border-wine/10 bg-blush/80 text-wine";
  }

  if (automationSkills.has(skill)) {
    return "border-wine/15 bg-rose/25 text-wine";
  }

  return "border-wine/10 bg-cream text-ink";
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const skillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const calculateConnections = useCallback(() => {
    if (!activeSkill || !containerRef.current) {
      setConnections([]);
      return;
    }

    const sourceElement = skillRefs.current[activeSkill];

    if (!sourceElement) {
      setConnections([]);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const sourceRect = sourceElement.getBoundingClientRect();

    const sourcePoint = {
      x: sourceRect.left - containerRect.left + sourceRect.width / 2,
      y: sourceRect.top - containerRect.top + sourceRect.height / 2,
    };

    const nextConnections =
      skillDetails[activeSkill]?.connectsTo
        .map((targetSkill) => {
          const targetElement = skillRefs.current[targetSkill];

          if (!targetElement) {
            return null;
          }

          const targetRect = targetElement.getBoundingClientRect();

          return {
            id: `${activeSkill}-${targetSkill}`,
            from: sourcePoint,
            to: {
              x: targetRect.left - containerRect.left + targetRect.width / 2,
              y: targetRect.top - containerRect.top + targetRect.height / 2,
            },
          };
        })
        .filter((connection): connection is Connection =>
          Boolean(connection),
        ) ?? [];

    setConnections(nextConnections);
  }, [activeSkill]);

  useLayoutEffect(() => {
    calculateConnections();
  }, [calculateConnections]);

  useEffect(() => {
    if (!activeSkill) {
      return;
    }

    const updateConnections = () => calculateConnections();

    window.addEventListener("resize", updateConnections);
    window.addEventListener("scroll", updateConnections, true);

    return () => {
      window.removeEventListener("resize", updateConnections);
      window.removeEventListener("scroll", updateConnections, true);
    };
  }, [activeSkill, calculateConnections]);

  const relatedSkills = activeSkill
    ? skillDetails[activeSkill]?.connectsTo ?? []
    : [];

  const clearActiveSkill = () => {
    setActiveSkill(null);
    setConnections([]);
  };

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="relative overflow-hidden bg-porcelain py-24 sm:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="The instruments I think with."
          align="center"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-charcoal/65">
          No single tool creates insight. The interesting part is how they work
          together.
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 max-w-4xl"
          onMouseLeave={clearActiveSkill}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          >
            {connections.map((connection) => (
              <motion.line
                key={connection.id}
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke="rgba(196, 135, 145, 0.62)"
                strokeWidth="1.5"
                strokeDasharray="5 7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.38,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>

          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const isActive = activeSkill === skill;
              const isRelated = relatedSkills.includes(skill);
              const isDimmed =
                Boolean(activeSkill) && !isActive && !isRelated;

              return (
                <motion.button
                  key={skill}
                  ref={(element) => {
                    skillRefs.current[skill] = element;
                  }}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.035,
                  }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  onBlur={clearActiveSkill}
                  onClick={() =>
                    setActiveSkill((current) =>
                      current === skill ? null : skill,
                    )
                  }
                  aria-pressed={isActive}
                  style={{
                    opacity: isDimmed ? 0.28 : 1,
                    filter: isDimmed
                      ? "saturate(0.25)"
                      : "drop-shadow(0 8px 18px rgba(111, 51, 70, 0.12))",
                  }}
                  className={`relative inline-block rounded-full border px-5 py-2.5 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/30 ${
                    sizes[index % sizes.length]
                  } ${getSkillColors(skill)} ${
                    isActive
                      ? "z-20 scale-[1.08] border-wine bg-wine text-cream"
                      : isRelated
                        ? "z-10 scale-[1.03] border-rose/60 bg-rose/45 text-wine"
                        : ""
                  }`}
                >
                  {skill}
                </motion.button>
              );
            })}
          </div>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-wine/15 transition-opacity duration-300 ${
              activeSkill ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="mt-12 min-h-[7.5rem] text-center">
            {activeSkill ? (
              <motion.div
                key={activeSkill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-2xl border-y border-wine/15 py-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-wine/70">
                  {activeSkill}
                </p>

                <p className="mt-3 font-display text-xl text-ink sm:text-2xl">
                  {skillDetails[activeSkill]?.line}
                </p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal/45">
                  Connects with {relatedSkills.join(" · ")}
                </p>
              </motion.div>
            ) : (
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-wine/65">
                Hover or tap an instrument to reveal how it works with the
                others
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}