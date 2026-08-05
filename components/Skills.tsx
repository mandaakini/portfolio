"use client";

import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
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

type SkillDetail = {
  related: string[];
  description: string;
};

const skillDetails: Record<string, SkillDetail> = {
  SQL: {
    related: [
      "Python",
      "Tableau",
      "Data Visualization",
      "Quantitative Research",
    ],
    description:
      "Structures complex data so patterns and decisions become easier to see.",
  },

  Python: {
    related: [
      "SQL",
      "AI Agent Development",
      "Workflow Automation",
      "Quantitative Research",
    ],
    description:
      "Turns repetitive analysis and complex workflows into scalable systems.",
  },

  Excel: {
    related: [
      "Market Research",
      "Quantitative Research",
      "Data Visualization",
      "Business Transformation",
    ],
    description:
      "Supports quick analysis, modeling, and practical decision-making.",
  },

  Tableau: {
    related: [
      "SQL",
      "Data Visualization",
      "Consumer Insights",
      "Insight Synthesis",
    ],
    description:
      "Transforms raw findings into visual stories people can act on.",
  },

  "Power BI": {
    related: [
      "SQL",
      "Data Visualization",
      "Business Transformation",
      "Insight Synthesis",
    ],
    description:
      "Connects operational data with clear, decision-ready reporting.",
  },

  "Data Visualization": {
    related: [
      "SQL",
      "Tableau",
      "Consumer Insights",
      "Insight Synthesis",
    ],
    description:
      "Makes relationships, changes, and opportunities easier to understand.",
  },

  "Market Research": {
    related: [
      "Consumer Insights",
      "Qualitative Research",
      "Quantitative Research",
      "Growth Strategy",
    ],
    description:
      "Connects what people say, do, and need with business opportunities.",
  },

  "Consumer Insights": {
    related: [
      "Market Research",
      "Audience Insights",
      "Insight Synthesis",
      "Product Strategy",
    ],
    description:
      "Reveals the motivations and behaviors behind consumer decisions.",
  },

  "Audience Insights": {
    related: [
      "Market Research",
      "Consumer Insights",
      "Insight Synthesis",
      "Growth Strategy",
    ],
    description:
      "Identifies who an audience is, what matters to them, and how to reach them.",
  },

  "Quantitative Research": {
    related: [
      "SQL",
      "Python",
      "Excel",
      "Market Research",
    ],
    description:
      "Tests assumptions and measures the strength of patterns in data.",
  },

  "Qualitative Research": {
    related: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Insight Synthesis",
    ],
    description:
      "Adds context, emotion, and meaning to the patterns behind behavior.",
  },

  "Insight Synthesis": {
    related: [
      "Market Research",
      "Consumer Insights",
      "Data Visualization",
      "Product Strategy",
    ],
    description:
      "Bridges research, data, and product decisions.",
  },

  "AI Agent Development": {
    related: [
      "Python",
      "Workflow Automation",
      "Process Improvement",
      "Business Transformation",
    ],
    description:
      "Builds intelligent workflows that make recurring work more efficient.",
  },

  "Workflow Automation": {
    related: [
      "Python",
      "AI Agent Development",
      "Process Improvement",
      "Business Transformation",
    ],
    description:
      "Reduces repetitive work so teams can focus on higher-value decisions.",
  },

  "Process Improvement": {
    related: [
      "Workflow Automation",
      "AI Agent Development",
      "Business Transformation",
      "Project Management",
    ],
    description:
      "Finds friction in a process and redesigns it for clarity and efficiency.",
  },

  "Business Transformation": {
    related: [
      "Process Improvement",
      "Workflow Automation",
      "Project Management",
      "Stakeholder Management",
    ],
    description:
      "Connects people, processes, and technology to create meaningful change.",
  },

  "Growth Strategy": {
    related: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Product Strategy",
    ],
    description:
      "Uses market and customer understanding to identify opportunities for growth.",
  },

  "Product Strategy": {
    related: [
      "Consumer Insights",
      "Market Research",
      "Insight Synthesis",
      "Stakeholder Management",
    ],
    description:
      "Turns customer understanding into focused product direction.",
  },

  "Project Management": {
    related: [
      "Stakeholder Management",
      "Process Improvement",
      "Business Transformation",
      "Product Strategy",
    ],
    description:
      "Keeps people, priorities, and execution aligned around a shared outcome.",
  },

  "Stakeholder Management": {
    related: [
      "Project Management",
      "Business Transformation",
      "Product Strategy",
      "Insight Synthesis",
    ],
    description:
      "Translates different perspectives into shared priorities and decisions.",
  },
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

  const activeDetails = activeSkill
    ? skillDetails[activeSkill]
    : undefined;

  const relatedSkills = useMemo(() => {
    return new Set(activeDetails?.related ?? []);
  }, [activeDetails]);

  const calculateConnections = useCallback(() => {
    if (!activeSkill || !containerRef.current || !activeDetails) {
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

    const start: Point = {
      x: activeRect.left - containerRect.left + activeRect.width / 2,
      y: activeRect.top - containerRect.top + activeRect.height / 2,
    };

    const nextConnections = activeDetails.related.flatMap(
      (relatedSkill) => {
        const relatedNode = skillRefs.current[relatedSkill];

        if (!relatedNode) {
          return [];
        }

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
      },
    );

    setConnections(nextConnections);
  }, [activeSkill, activeDetails]);

  useEffect(() => {
    calculateConnections();

    window.addEventListener("resize", calculateConnections);

    return () => {
      window.removeEventListener("resize", calculateConnections);
    };
  }, [calculateConnections]);

  function clearActiveSkill() {
    setActiveSkill(null);
    setConnections([]);
  }

  function activateSkill(skill: string) {
    setActiveSkill(skill);

    requestAnimationFrame(() => {
      calculateConnections();
    });
  }

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

    const attractionDistance = 6;

    return {
      x: (deltaX / distance) * attractionDistance,
      y: (deltaY / distance) * attractionDistance,
    };
  }

  return (
    <section
      id="toolkit"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-16 items-center overflow-hidden bg-blush/60 pt-20 pb-28 sm:pt-24 sm:pb-36"
    >
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="The instruments I think with."
          align="center"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-charcoal sm:text-lg">
          No single tool creates insight. The interesting part is how they
          work together.
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-16 max-w-4xl"
          onMouseLeave={clearActiveSkill}
        >
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {connections.map((connection) => (
              <motion.line
                key={connection.id}
                x1={connection.start.x}
                y1={connection.start.y}
                x2={connection.end.x}
                y2={connection.end.y}
                stroke="rgba(151, 82, 101, 0.4)"
                strokeWidth="1.15"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
              />
            ))}
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
                    opacity: isDimmed ? 0.12 : 1,
                    scale: isActive ? 1.07 : isRelated ? 1.025 : 1,
                    filter:
                      isActive || isRelated
                        ? "drop-shadow(0 0 9px rgba(151, 82, 101, 0.22))"
                        : "drop-shadow(0 0 0 rgba(0, 0, 0, 0))",
                  }}
                  whileHover={{
                    scale: isDimmed ? 1 : 1.06,
                    y: isDimmed ? 0 : -2,
                  }}
                  onMouseEnter={() => activateSkill(skill)}
                  onFocus={() => activateSkill(skill)}
                  onBlur={clearActiveSkill}
                  className={`relative cursor-default rounded-full border px-5 py-2.5 font-medium shadow-softer transition-colors duration-300 ${
                    sizes[index % sizes.length]
                  } ${getSkillColors(skill)}`}
                  style={{
                    pointerEvents: isDimmed ? "none" : "auto",
                  }}
                  aria-label={`Show how ${skill} connects to other skills`}
                >
                  {skill}

                  {(isActive || isRelated) && (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-[-4px] -z-10 rounded-full border border-rosewood/15"
                      initial={{
                        opacity: 0,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: isActive ? 0.65 : 0.28,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="mx-auto mt-10 min-h-[3rem] max-w-xl text-center">
            <motion.p
              key={activeSkill ?? "default"}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              aria-live="polite"
              className={
                activeSkill
                  ? "text-sm leading-relaxed text-charcoal sm:text-base"
                  : "font-mono text-[10px] uppercase tracking-[0.18em] text-rosewood"
              }
            >
              {activeSkill && activeDetails
                ? activeDetails.description
                : "Hover over an instrument to reveal how it works with the others"}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
