"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { skills } from "../lib/data";

type SkillDetail = {
  description: string;
  connectsTo: string[];
};

type Connection = {
  from: string;
  to: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

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

const skillDetails: Record<string, SkillDetail> = {
  SQL: {
    description:
      "Used to explore structured data, identify patterns, and answer precise business questions.",
    connectsTo: [
      "Python",
      "Excel",
      "Tableau",
      "Power BI",
      "Data Visualization",
      "Quantitative Research",
    ],
  },

  Python: {
    description:
      "Used for analysis, automation, data preparation, and building intelligent workflows.",
    connectsTo: [
      "SQL",
      "Excel",
      "AI Agent Development",
      "Workflow Automation",
      "Process Improvement",
      "Data Visualization",
    ],
  },

  Excel: {
    description:
      "Used to organize information, model scenarios, validate findings, and communicate analysis quickly.",
    connectsTo: [
      "SQL",
      "Python",
      "Tableau",
      "Power BI",
      "Quantitative Research",
      "Business Transformation",
    ],
  },

  Tableau: {
    description:
      "Used to turn complex datasets into visual stories that make patterns and decisions easier to understand.",
    connectsTo: [
      "SQL",
      "Excel",
      "Data Visualization",
      "Consumer Insights",
      "Audience Insights",
      "Insight Synthesis",
    ],
  },

  "Power BI": {
    description:
      "Used to build interactive dashboards that connect business performance, data, and decision-making.",
    connectsTo: [
      "SQL",
      "Excel",
      "Data Visualization",
      "Business Transformation",
      "Growth Strategy",
      "Stakeholder Management",
    ],
  },

  "AI Agent Development": {
    description:
      "Used to build systems that automate research, synthesize information, and support business workflows.",
    connectsTo: [
      "Python",
      "Workflow Automation",
      "Process Improvement",
      "Business Transformation",
      "Insight Synthesis",
    ],
  },

  "Data Visualization": {
    description:
      "Used to make information understandable, persuasive, and easier to act on.",
    connectsTo: [
      "SQL",
      "Python",
      "Tableau",
      "Power BI",
      "Insight Synthesis",
      "Stakeholder Management",
    ],
  },

  "Market Research": {
    description:
      "Used to understand markets, competitors, customers, and the forces shaping business opportunities.",
    connectsTo: [
      "Consumer Insights",
      "Audience Insights",
      "Quantitative Research",
      "Qualitative Research",
      "Insight Synthesis",
      "Growth Strategy",
    ],
  },

  "Consumer Insights": {
    description:
      "Used to understand the behaviors, motivations, and needs behind customer decisions.",
    connectsTo: [
      "Market Research",
      "Audience Insights",
      "Qualitative Research",
      "Quantitative Research",
      "Product Strategy",
      "Growth Strategy",
    ],
  },

  "Audience Insights": {
    description:
      "Used to understand how audiences discover, engage with, and respond to products, media, and experiences.",
    connectsTo: [
      "Consumer Insights",
      "Market Research",
      "Qualitative Research",
      "Insight Synthesis",
      "Product Strategy",
      "Growth Strategy",
    ],
  },

  "Quantitative Research": {
    description:
      "Used to measure behaviors, test patterns, and support decisions with numerical evidence.",
    connectsTo: [
      "SQL",
      "Excel",
      "Market Research",
      "Consumer Insights",
      "Data Visualization",
      "Insight Synthesis",
    ],
  },

  "Qualitative Research": {
    description:
      "Used to uncover the context, language, and motivations that numbers alone cannot explain.",
    connectsTo: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Insight Synthesis",
      "Product Strategy",
      "Stakeholder Management",
    ],
  },

  "Insight Synthesis": {
    description:
      "Used to connect research findings and translate scattered information into a clear point of view.",
    connectsTo: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Quantitative Research",
      "Qualitative Research",
      "Product Strategy",
    ],
  },

  "Workflow Automation": {
    description:
      "Used to reduce repetitive work and create more reliable, efficient processes.",
    connectsTo: [
      "Python",
      "AI Agent Development",
      "Process Improvement",
      "Business Transformation",
      "Project Management",
    ],
  },

  "Business Transformation": {
    description:
      "Used to align people, processes, technology, and strategy around meaningful organizational change.",
    connectsTo: [
      "AI Agent Development",
      "Workflow Automation",
      "Process Improvement",
      "Growth Strategy",
      "Project Management",
      "Stakeholder Management",
    ],
  },

  "Growth Strategy": {
    description:
      "Used to identify opportunities for expansion, engagement, acquisition, and long-term business value.",
    connectsTo: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Business Transformation",
      "Product Strategy",
      "Stakeholder Management",
    ],
  },

  "Process Improvement": {
    description:
      "Used to identify friction, redesign workflows, and improve the way work moves through an organization.",
    connectsTo: [
      "Python",
      "AI Agent Development",
      "Workflow Automation",
      "Business Transformation",
      "Project Management",
    ],
  },

  "Product Strategy": {
    description:
      "Used to connect user needs, research findings, business goals, and product decisions.",
    connectsTo: [
      "Market Research",
      "Consumer Insights",
      "Audience Insights",
      "Insight Synthesis",
      "Growth Strategy",
      "Stakeholder Management",
    ],
  },

  "Project Management": {
    description:
      "Used to move complex work from idea to execution while keeping timelines, teams, and outcomes aligned.",
    connectsTo: [
      "Workflow Automation",
      "Business Transformation",
      "Process Improvement",
      "Product Strategy",
      "Stakeholder Management",
    ],
  },

  "Stakeholder Management": {
    description:
      "Used to build alignment, communicate clearly, and make sure insights translate into action.",
    connectsTo: [
      "Data Visualization",
      "Insight Synthesis",
      "Business Transformation",
      "Growth Strategy",
      "Product Strategy",
      "Project Management",
    ],
  },
};

function getBaseSkillClasses(skill: string) {
  if (technicalSkills.has(skill)) {
    return "border-mushroom-deep/20 bg-mushroom/65 text-ink";
  }

  if (researchSkills.has(skill)) {
    return "border-rosewood/15 bg-blush/75 text-rosewood";
  }

  if (automationSkills.has(skill)) {
    return "border-wine/15 bg-rose/30 text-wine";
  }

  return "border-charcoal/10 bg-porcelain text-ink";
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const skillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeDetails = activeSkill
    ? skillDetails[activeSkill]
    : undefined;

  const relatedSkills = new Set(activeDetails?.connectsTo ?? []);

  const calculateConnections = useCallback(() => {
    if (!activeSkill || !activeDetails || !containerRef.current) {
      setConnections([]);
      return;
    }

    const containerRect =
      containerRef.current.getBoundingClientRect();

    const sourceElement = skillRefs.current[activeSkill];

    if (!sourceElement) {
      setConnections([]);
      return;
    }

    const sourceRect = sourceElement.getBoundingClientRect();

    const x1 =
      sourceRect.left -
      containerRect.left +
      sourceRect.width / 2;

    const y1 =
      sourceRect.top -
      containerRect.top +
      sourceRect.height / 2;

    const nextConnections = activeDetails.connectsTo
      .map((skill) => {
        const targetElement = skillRefs.current[skill];

        if (!targetElement) {
          return null;
        }

        const targetRect = targetElement.getBoundingClientRect();

        return {
          from: activeSkill,
          to: skill,
          x1,
          y1,
          x2:
            targetRect.left -
            containerRect.left +
            targetRect.width / 2,
          y2:
            targetRect.top -
            containerRect.top +
            targetRect.height / 2,
        };
      })
      .filter(
        (connection): connection is Connection =>
          connection !== null
      );

    setConnections(nextConnections);
  }, [activeSkill, activeDetails]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(
      calculateConnections
    );

    window.addEventListener("resize", calculateConnections);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(
        "resize",
        calculateConnections
      );
    };
  }, [calculateConnections]);

  const activateSkill = (skill: string) => {
    setActiveSkill(skill);
  };

  const toggleSkill = (skill: string) => {
    setActiveSkill((current) =>
      current === skill ? null : skill
    );
  };

  const clearSkill = () => {
    setActiveSkill(null);
  };

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="relative scroll-mt-20 bg-porcelain px-0 pb-32 pt-28 sm:pb-40 sm:pt-32"
    >
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="The instruments I think with."
          align="center"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-charcoal/60 sm:text-base">
          No single tool creates insight. The interesting part is
          how they work together.
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-14 max-w-5xl sm:mt-16"
          onMouseLeave={clearSkill}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          >
            <AnimatePresence>
              {connections.map((connection) => (
                <motion.line
                  key={`${connection.from}-${connection.to}`}
                  x1={connection.x1}
                  y1={connection.y1}
                  x2={connection.x2}
                  y2={connection.y2}
                  stroke="#C48791"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 0.55,
                  }}
                  exit={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />
              ))}
            </AnimatePresence>
          </svg>

          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const isActive = activeSkill === skill;
              const isRelated = relatedSkills.has(skill);
              const shouldFade =
                activeSkill !== null &&
                !isActive &&
                !isRelated;

              return (
                <motion.button
                  key={skill}
                  ref={(element) => {
                    skillRefs.current[skill] = element;
                  }}
                  type="button"
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-30px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.025,
                  }}
                  animate={{
                    opacity: shouldFade ? 0.38 : 1,
                    scale: isActive
                      ? 1.06
                      : isRelated
                        ? 1.025
                        : 1,
                    y: isActive ? -3 : 0,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  onMouseEnter={() => activateSkill(skill)}
                  onFocus={() => activateSkill(skill)}
                  onClick={() => toggleSkill(skill)}
                  aria-pressed={isActive}
                  className={`relative rounded-full border px-5 py-3 text-sm font-medium shadow-softer transition-colors duration-300 sm:px-6 sm:text-base ${
                    isActive
                      ? "z-20 border-wine bg-wine text-cream shadow-soft"
                      : isRelated
                        ? "z-10 border-rose/60 bg-rose/40 text-wine"
                        : getBaseSkillClasses(skill)
                  }`}
                >
                  {skill}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 min-h-[190px] max-w-3xl border-y border-rosewood/15 py-8 text-center sm:mt-20 sm:min-h-[210px] sm:py-10">
          <AnimatePresence mode="wait">
            {activeSkill && activeDetails ? (
              <motion.div
                key={activeSkill}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.28,
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rosewood sm:text-[11px]">
                  {activeSkill}
                </p>

                <p className="mx-auto mt-5 max-w-2xl font-display text-2xl leading-snug text-ink sm:text-3xl">
                  {activeDetails.description}
                </p>

                <p className="mx-auto mt-5 max-w-2xl font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-charcoal/40 sm:text-[10px]">
                  Connects with{" "}
                  {activeDetails.connectsTo.join(" · ")}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="instructions"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rosewood/75 sm:text-[11px]">
                  Explore the toolkit
                </p>

                <p className="mx-auto mt-5 max-w-xl font-display text-xl leading-relaxed text-charcoal/55 sm:text-2xl">
                  Hover, focus, or tap an instrument to reveal how
                  it supports the others.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}