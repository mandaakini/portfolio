"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Music2,
  Presentation,
  Search,
  Users,
} from "lucide-react";

type TimelineItem = {
  id: string;
  type: "Work" | "Leadership" | "Teaching";
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
};

const timeline: TimelineItem[] = [
  {
    id: "zinnia",
    type: "Work",
    role: "Business Transformation Intern",
    org: "Zinnia",
    period: "June 2026 — Present",
    summary:
      "Supporting people analytics and business transformation through research, automation, and AI-enabled solutions.",
    points: [
      "Researched emerging people analytics practices across industry reports and publications.",
      "Translated findings into a standardized framework for company-wide strategy and implementation.",
      "Established standards supporting workforce planning, organizational effectiveness, and management decisions.",
      "Built AI agents to automate transformation workflows and improve operational efficiency.",
    ],
    icon: Briefcase,
  },
  {
    id: "oscg",
    type: "Work",
    role: "Co-Founder, VP & Lead Product Manager",
    org: "Oregon Software Consulting Group",
    period: "June 2024 — June 2026",
    summary:
      "Led client-facing technology projects, cross-functional delivery, stakeholder relationships, and professional development programming.",
    points: [
      "Led end-to-end delivery of five or more client-facing software solutions.",
      "Managed cross-functional teams, project expectations, and stakeholder communication.",
      "Designed technical workshops for students across a range of experience levels.",
      "Built relationships with consulting professionals and recruited industry speakers.",
    ],
    icon: Presentation,
  },
  {
    id: "market-research",
    type: "Work",
    role: "Market Research & Strategy Analyst",
    org: "University-Affiliated Client · Confidential",
    period: "April 2025 — June 2025",
    summary:
      "Used market research and data analysis to inform audience engagement, acquisition, and retention strategy.",
    points: [
      "Conducted market research to evaluate audience engagement opportunities.",
      "Analyzed quantitative and qualitative data to uncover behavioral trends.",
      "Supported acquisition and retention strategy through evidence-based research.",
      "Presented insights and recommendations while protecting proprietary information.",
    ],
    icon: Search,
  },
  {
    id: "isa-leadership",
    type: "Leadership",
    role: "Leadership Progression",
    org: "Oregon State Indian Students Association",
    period: "June 2022 — June 2025",
    summary:
      "Progressed from Secretary to Event Coordinator to President, eventually leading strategy, operations, partnerships, and cultural programming.",
    points: [
      "Directed strategy and operations for an organization representing more than 500 students and faculty.",
      "Led India Night, OSU’s largest cultural event, welcoming more than 1,000 attendees.",
      "Managed a $10K+ event budget and secured sponsorships from community partners.",
      "Coordinated vendors, volunteers, university stakeholders, marketing, and programming.",
    ],
    icon: Users,
  },
  {
    id: "early-learning",
    type: "Teaching",
    role: "Early Learning School Teacher",
    org: "Valley Catholic School & SSMO Campus",
    period: "July 2025 — September 2025",
    summary:
      "Supported early childhood learning through engaging lessons, structured activities, and individualized encouragement.",
    points: [
      "Delivered engaging lessons for children ages one through four.",
      "Designed activities strengthening language, cognitive, and motor skills.",
      "Encouraged communication, positive peer interaction, and social-emotional development.",
      "Created a safe environment centered on curiosity, exploration, and individual growth.",
    ],
    icon: GraduationCap,
  },
  {
    id: "piano-teacher",
    type: "Teaching",
    role: "Piano Teacher",
    org: "Self-Employed",
    period: "July 2020 — July 2024",
    summary:
      "Introduced young students to piano fundamentals through individualized, encouraging instruction.",
    points: [
      "Taught piano fundamentals, music theory, technique, and performance.",
      "Adapted lessons to each student’s learning style, skill level, and progress.",
      "Created structured exercises supporting steady technical development.",
      "Helped students build confidence, discipline, and musical expression.",
    ],
    icon: Music2,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentItem = timeline[currentIndex];
  const Icon = currentItem.icon;

  const moveTo = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= timeline.length) return;

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setCurrentIndex(nextIndex);
  };

  const previous = () => moveTo(currentIndex - 1);
  const next = () => moveTo(currentIndex + 1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative min-h-[calc(100svh-5rem)] scroll-mt-20 overflow-hidden bg-experience py-14 text-cream sm:py-16"
    >
      {/* Editorial dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream/55 sm:text-xs">
              02 — Experience
            </p>

            <h2
              id="experience-heading"
              className="mt-4 max-w-5xl font-display text-4xl leading-[0.98] text-cream sm:text-5xl lg:text-6xl"
            >
              Where strategy became practice.
            </h2>
          </div>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={previous}
              disabled={currentIndex === 0}
              aria-label="View previous experience"
              className="grid h-14 w-14 place-items-center rounded-full border border-cream/25 bg-cream text-ink transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={next}
              disabled={currentIndex === timeline.length - 1}
              aria-label="View next experience"
              className="grid h-14 w-14 place-items-center rounded-full bg-rose text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-rosewood disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-cream text-ink shadow-soft sm:mt-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.article
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) next();
                if (info.offset.x > 70) previous();
              }}
              className="grid min-h-[470px] lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Role information */}
              <div className="flex flex-col justify-between border-b border-charcoal/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-[0.22em] ${
                        currentItem.type === "Leadership"
                          ? "bg-lilac text-ink/65"
                          : currentItem.type === "Teaching"
                            ? "bg-mushroom/70 text-ink/65"
                            : "bg-blush text-rosewood"
                      }`}
                    >
                      {currentItem.type}
                    </span>

                    <span
                      aria-live="polite"
                      className="font-mono text-[10px] tracking-[0.2em] text-charcoal/35"
                    >
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(timeline.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-8 grid h-12 w-12 place-items-center rounded-full bg-blush text-rosewood">
                    <Icon size={19} aria-hidden="true" />
                  </div>

                  <h3 className="mt-8 max-w-md font-display text-3xl leading-[1.02] sm:text-4xl lg:text-5xl">
                    {currentItem.role}
                  </h3>

                  <p className="mt-4 text-base font-medium text-rosewood sm:text-lg">
                    {currentItem.org}
                  </p>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/45 sm:text-xs">
                    {currentItem.period}
                  </p>
                </div>

                <p className="mt-8 max-w-lg text-sm leading-relaxed text-charcoal/70 sm:text-base">
                  {currentItem.summary}
                </p>
              </div>

              {/* Selected impact */}
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-rosewood">
                    Selected impact
                  </p>

                  <span className="h-px flex-1 bg-charcoal/10" />
                </div>

                <ol className="mt-6">
                  {currentItem.points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.4,
                      }}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-charcoal/10 py-5 first:border-t-0 first:pt-0"
                    >
                      <span className="font-mono text-[10px] tracking-[0.18em] text-rosewood/70">
                        0{index + 1}
                      </span>

                      <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <div
            className="flex items-center gap-2"
            aria-label={`Experience ${currentIndex + 1} of ${timeline.length}`}
          >
            {timeline.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => moveTo(index)}
                aria-label={`View ${item.role}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-9 bg-rose"
                    : "w-2 bg-cream/25 hover:bg-cream/45"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3 sm:hidden">
            <button
              type="button"
              onClick={previous}
              disabled={currentIndex === 0}
              aria-label="View previous experience"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream text-ink disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              disabled={currentIndex === timeline.length - 1}
              aria-label="View next experience"
              className="grid h-11 w-11 place-items-center rounded-full bg-rose text-cream disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-cream/35 sm:block">
            Drag, click, or use arrow keys
          </p>
        </div>
      </div>
    </section>
  );
}