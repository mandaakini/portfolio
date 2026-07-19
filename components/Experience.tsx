"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Music2,
  Presentation,
  Search,
  Users,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const timeline = [
  {
    id: 1,
    role: "Business Transformation Intern",
    org: "Zinnia",
    period: "June 2026 — Present",
    type: "Experience",
    icon: BriefcaseBusiness,
    summary:
      "Supporting people analytics and business transformation initiatives through research, automation, and AI-enabled solutions.",
    points: [
      "Compiled extensive research on best practices in people analytics to establish company standards.",
      "Developed AI agents to streamline business transformation and enhance people analytics operations for management.",
    ],
  },
  {
    id: 2,
    role: "Co-Founder, VP, Lead Product Manager",
    org: "Oregon Software Consulting Group",
    period: "June 2024 — June 2026",
    type: "Experience",
    icon: Presentation,
    summary:
      "Led client-facing technology projects while coordinating cross-functional teams, stakeholder communication, and professional development programming.",
    points: [
      "Led end-to-end delivery of five or more client-facing software solutions, acting as Project Manager for cross-functional teams.",
      "Managed local business outreach and stakeholder communication, ensuring alignment on project expectations.",
      "Designed and facilitated technical workshops, enhancing student engagement and proficiency across various skill levels.",
      "Recruited guest speakers from major consulting firms, significantly boosting seminar attendance and industry connections.",
    ],
  },
  {
    id: 3,
    role: "Early Learning School Teacher",
    org: "Valley Catholic School & SSMO Campus",
    period: "July 2025 — September 2025",
    type: "Experience",
    icon: GraduationCap,
    summary:
      "Supported early childhood education through engaging lessons, structured activities, and individualized encouragement.",
    points: [
      "Supported lead teachers in delivering engaging lessons for children aged one through four, focusing on early childhood development.",
      "Developed and implemented activities that promoted language, motor skills, and social-emotional growth.",
      "Fostered a nurturing environment that encouraged exploration and learning, enhancing children's overall development.",
    ],
  },
  {
    id: 4,
    role: "Market Research and Strategy Analyst",
    org: "Oregon State University Alumni Association",
    period: "April 2025 — June 2025",
    type: "Experience",
    icon: Search,
    summary:
      "Used market research and data analysis to support alumni engagement, acquisition, and retention strategy.",
    points: [
      "Conducted comprehensive market research and analysis for the Oregon State University Alumni Association.",
      "Assisted in developing strategies for member retention and acquisition to enhance engagement.",
      "Analyzed data trends to inform decision-making and improve alumni relations.",
    ],
  },
  {
    id: 5,
    role: "President",
    org: "Oregon State Indian Students Association",
    period: "June 2024 — June 2025",
    type: "Leadership",
    icon: Users,
    summary:
      "Directed organizational strategy, cultural programming, community partnerships, and a large student leadership team.",
    points: [
      "Spearheaded strategy and operations for the Indian Students Association at Oregon State University, serving more than 500 members.",
      "Organized and executed India Night, OSU's largest cultural event, attracting more than 1,000 attendees.",
      "Coordinated a team of more than 30 volunteers and managed a budget exceeding $10,000.",
    ],
  },
  {
    id: 6,
    role: "Piano Teacher",
    org: "Self-Employed",
    period: "July 2020 — July 2024",
    type: "Experience",
    icon: Music2,
    summary:
      "Introduced young students to piano fundamentals through individualized, encouraging instruction.",
    points: [
      "Instructed children aged ten and younger in piano fundamentals, basics, and theory.",
      "Fostered a love for music and piano playing through engaging lessons.",
      "Developed individualized teaching methods to support each child's learning style.",
    ],
  },
  {
    id: 7,
    role: "President",
    org: "OSU UNICEF",
    period: "May 2024 — June 2024",
    type: "Leadership",
    icon: HeartHandshake,
    summary:
      "Led community outreach and fundraising initiatives supporting UNICEF's global mission.",
    points: [
      "Raised awareness and funds to support children's rights around the world.",
      "Collaborated with local businesses in Corvallis to organize impactful fundraising events.",
      "Spearheaded strategic initiatives to enhance community engagement and support UNICEF's mission.",
    ],
  },
  {
    id: 8,
    role: "Event Coordinator",
    org: "Oregon State Indian Students Association",
    period: "June 2023 — June 2024",
    type: "Leadership",
    icon: Presentation,
    summary:
      "Managed cultural event logistics, sponsorship outreach, programming, and promotional collaboration.",
    points: [
      "Coordinated end-to-end event logistics, managing vendor contracts, catering, and entertainment for successful events.",
      "Secured more than $3,000 in sponsorships, fostering long-term partnerships with local businesses.",
      "Collaborated with financial treasurers and public relations teams to enhance event attendance through strategic marketing efforts.",
    ],
  },
  {
    id: 9,
    role: "Secretary",
    org: "Oregon State Indian Students Association",
    period: "June 2022 — June 2023",
    type: "Leadership",
    icon: BookOpen,
    summary:
      "Supported organizational communication, documentation, outreach, and event promotion.",
    points: [
      "Streamlined documentation and board communication to enhance organizational efficiency.",
      "Launched campus outreach campaigns through flyers, tabling, and social media.",
      "Boosted event attendance by more than 100 participants, fostering deeper engagement with the student community.",
      "Promoted cultural awareness and inclusivity through collaborative programming.",
    ],
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
  }),
};

export default function Experience() {
  const [[currentIndex, direction], setCurrent] = useState([0, 0]);

  const currentItem = timeline[currentIndex];
  const Icon = currentItem.icon;

  const changeExperience = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= timeline.length) {
      return;
    }

    setCurrent([
      nextIndex,
      nextIndex > currentIndex ? 1 : -1,
    ]);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -60) {
      changeExperience(currentIndex + 1);
    }

    if (info.offset.x > 60) {
      changeExperience(currentIndex - 1);
    }
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="02 — Experience"
            title="Where experience, leadership, and curiosity meet."
            light
          />

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => changeExperience(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="View previous experience"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 bg-cream text-ink shadow-softer transition-colors hover:border-rose-deep hover:text-rose-deep disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => changeExperience(currentIndex + 1)}
              disabled={currentIndex === timeline.length - 1}
              aria-label="View next experience"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-softer transition-colors hover:bg-rose-deep disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-16">
          <AnimatePresence
            initial={false}
            mode="wait"
            custom={direction}
          >
            <motion.article
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="cursor-grab rounded-5xl bg-cream p-7 shadow-soft active:cursor-grabbing sm:p-10 lg:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <div className="mb-7 flex items-center justify-between">
                    <span
                      className={`rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] ${
                        currentItem.type === "Leadership"
                          ? "bg-rose/20 text-rose-deep"
                          : "bg-sage/50 text-sage-deep"
                      }`}
                    >
                      {currentItem.type}
                    </span>

                    <span className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
                      {currentIndex + 1} / {timeline.length}
                    </span>
                  </div>

                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blush text-rose-deep">
                    <Icon size={21} aria-hidden="true" />
                  </span>

                  <h3 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                    {currentItem.role}
                  </h3>

                  <p className="mt-3 font-medium text-rose-deep">
                    {currentItem.org}
                  </p>

                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-charcoal/50">
                    {currentItem.period}
                  </p>

                  <p className="mt-7 leading-relaxed text-charcoal/75">
                    {currentItem.summary}
                  </p>
                </div>

                <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7">
                  {currentItem.points.map((point, index) => {
                    const PointIcon =
                      index % 2 === 0 ? BarChart3 : Users;

                    return (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.12 + index * 0.07,
                        }}
                        className="rounded-3xl bg-blush/45 p-5"
                      >
                        <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-rose/20 text-rose-deep">
                          <PointIcon
                            size={16}
                            aria-hidden="true"
                          />
                        </span>

                        <p className="text-sm leading-relaxed text-charcoal/80">
                          {point}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-between gap-5">
            <div className="flex flex-wrap gap-2">
              {timeline.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => changeExperience(index)}
                  aria-label={`View ${item.role} at ${item.org}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-rose"
                      : "w-2.5 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>

            <p className="hidden font-mono text-[10px] uppercase tracking-widest text-cream/40 sm:block">
              Swipe or use arrows
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => changeExperience(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="View previous experience"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-cream text-ink disabled:opacity-30"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => changeExperience(currentIndex + 1)}
              disabled={currentIndex === timeline.length - 1}
              aria-label="View next experience"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream disabled:opacity-30"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}