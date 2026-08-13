"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SectionHeading from "./SectionHeading";

type ExperienceItem = {
  id: number;
  type: "Experience" | "Leadership";
  role: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
};

const timeline: ExperienceItem[] = [
  {
    id: 1,
    type: "Experience",
    role: "Business Transformation Intern",
    org: "Zinnia",
    period: "June 2026 — Present",
    summary:
      "Supporting people analytics and business transformation initiatives through research, automation, and AI-enabled solutions.",
    points: [
      "Conducted extensive research across industry reports and articles to identify leading practices and emerging trends in people analytics.",
      "Synthesized research findings into a standardized people analytics framework to guide company-wide strategy and implementation.",
      "Established best practices and standards to support data-driven workforce planning, organizational effectiveness, and management decision-making.",
      "Developed AI agents to automate and streamline business transformation workflows, enhancing people analytics capabilities and operational efficiency.",
    ],
  },
  {
    id: 2,
    type: "Experience",
    role: "Co-Founder, VP, Lead Product Manager",
    org: "Oregon Software Consulting Group",
    period: "June 2024 — June 2026",
    summary:
      "Led client-facing technology projects while coordinating cross-functional teams, stakeholder communication, and professional development programming.",
    points: [
      "Led end-to-end delivery of five or more client-facing software solutions as Product Manager for cross-functional teams.",
      "Managed local business outreach and stakeholder communication, ensuring alignment on project goals and expectations.",
      "Designed and facilitated technical workshops that strengthened student engagement and proficiency across multiple skill levels.",
      "Recruited guest speakers from major consulting firms, expanding seminar attendance and industry connections.",
    ],
  },
  {
    id: 3,
    type: "Experience",
    role: "Early Learning School Teacher",
    org: "Valley Catholic School & SSMO Campus",
    period: "July 2025 — September 2025",
    summary:
      "Supported early childhood education through engaging lessons, structured activities, and individualized encouragement.",
    points: [
      "Delivered engaging lessons for children ages one through four, emphasizing early childhood development.",
      "Designed and implemented interactive activities to strengthen language, cognitive, and motor skills.",
      "Facilitated group activities that encouraged social-emotional development, communication, and positive peer interactions.",
      "Fostered a safe and nurturing environment that encouraged curiosity, exploration, and individual growth.",
    ],
  },
  {
    id: 4,
    type: "Experience",
    role: "Market Research and Strategy Analyst",
    org: "University-Affiliated Client — Confidential",
    period: "April 2025 — June 2025",
    summary:
      "Used market research and data analysis to support alumni engagement, acquisition, and retention strategy.",
    points: [
      "Conducted market research and analysis for a university-affiliated organization to evaluate audience engagement opportunities.",
      "Analyzed quantitative and qualitative data to identify behavioral trends and generate actionable insights.",
      "Supported the development of acquisition and retention strategies through data-driven research and analysis.",
      "Presented research findings and strategic recommendations to project stakeholders while maintaining confidentiality.",
    ],
  },
  {
    id: 5,
    type: "Leadership",
    role: "President",
    org: "Oregon State Indian Students Association",
    period: "June 2024 — June 2025",
    summary:
      "Directed organizational strategy, cultural programming, community partnerships, and a large student leadership team.",
    points: [
      "Spearheaded strategy and operations across finance, marketing, and event planning for a cultural organization representing more than 500 students and faculty.",
      "Led the planning and execution of India Night, OSU’s largest cultural event, attracting more than 1,000 attendees.",
      "Managed a $10K+ event budget and coordinated sponsorships and donations to support large-scale programming.",
      "Cultivated partnerships with student organizations and university administration to secure funding, venues, and resources.",
    ],
  },
  {
    id: 6,
    type: "Experience",
    role: "Piano Teacher",
    org: "Self-Employed",
    period: "July 2020 — July 2024",
    summary:
      "Introduced young students to piano fundamentals through individualized, encouraging instruction.",
    points: [
      "Instructed children ages ten and younger in piano fundamentals, music theory, technique, and performance.",
      "Developed individualized teaching approaches tailored to each student’s learning style, skill level, and progress.",
      "Created structured lesson plans and practice exercises that supported progressive musical and technical development.",
      "Guided students in building confidence, discipline, and musical expression through consistent practice and performance preparation.",
    ],
  },
  {
    id: 7,
    type: "Leadership",
    role: "President",
    org: "OSU UNICEF",
    period: "May 2024 — June 2024",
    summary:
      "Led community outreach and fundraising initiatives supporting UNICEF’s global mission.",
    points: [
      "Raised awareness and funds to advance UNICEF’s mission and support children’s rights and well-being worldwide.",
      "Established partnerships with local businesses to coordinate fundraising events and expand community involvement.",
      "Spearheaded strategic outreach efforts to increase student engagement and strengthen the organization’s campus presence.",
      "Led fundraising and awareness campaigns while coordinating members and community partners around shared goals.",
    ],
  },
  {
    id: 8,
    type: "Leadership",
    role: "Event Coordinator",
    org: "Oregon State Indian Students Association",
    period: "June 2023 — June 2024",
    summary:
      "Managed cultural event logistics, sponsorship outreach, programming, and promotional collaboration.",
    points: [
      "Coordinated end-to-end event logistics, including vendor contracts, catering, entertainment, scheduling, and on-site execution.",
      "Secured more than $3,000 in sponsorships by building partnerships with local businesses and community organizations.",
      "Collaborated with finance and public relations teams to develop marketing initiatives that increased event visibility and attendance.",
      "Managed communication across vendors, sponsors, student organizations, and internal teams to support seamless event execution.",
    ],
  },
  {
    id: 9,
    type: "Leadership",
    role: "Secretary",
    org: "Oregon State Indian Students Association",
    period: "June 2022 — June 2023",
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
    x: direction > 0 ? 70 : -70,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
  }),
};

export default function Experience() {
  const [[activeIndex, direction], setActive] = useState([0, 0]);

  const item = timeline[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === timeline.length - 1;

  const goTo = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= timeline.length) return;

    setActive([
      nextIndex,
      nextIndex > activeIndex ? 1 : -1,
    ]);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x < -70 && !isLast) {
      goTo(activeIndex + 1);
    }

    if (info.offset.x > 70 && !isFirst) {
      goTo(activeIndex - 1);
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#4A1F2D] py-20 text-cream sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="02 — Experience"
            title="Where experience, leadership, and curiosity meet."
            light
          />

          <div className="hidden shrink-0 gap-3 pb-2 sm:flex">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={isFirst}
              aria-label="View previous experience"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-wine disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={isLast}
              aria-label="View next experience"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-rose text-cream transition-colors hover:bg-cream hover:text-wine disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="wait"
          >
            <motion.article
              key={item.id}
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
              className="cursor-grab rounded-[2rem] bg-cream px-7 py-8 text-ink shadow-lift active:cursor-grabbing sm:px-10 sm:py-10 lg:px-12"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
                <div className="lg:col-span-5 lg:pr-12">
                  <div className="flex items-center justify-between border-b border-charcoal/15 pb-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-rosewood">
                      {item.type}
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(timeline.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="pt-8">
                    <h3 className="max-w-lg font-display text-3xl font-semibold leading-[1.03] text-ink sm:text-4xl lg:text-[2.75rem]">
                      {item.role}
                    </h3>

                    <p className="mt-4 text-base font-medium text-rosewood sm:text-lg">
                      {item.org}
                    </p>

                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/45 sm:text-[11px]">
                      {item.period}
                    </p>

                    <p className="mt-8 max-w-md border-t border-charcoal/15 pt-6 text-base leading-relaxed text-charcoal/70 sm:text-lg">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="border-t border-charcoal/15 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12">
                  {item.points.map((point, index) => (
                    <div
                      key={point}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-charcoal/15 py-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:py-6"
                    >
                      <span className="font-mono text-[10px] tracking-[0.18em] text-rose">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="max-w-xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div
            className="flex items-center gap-2"
            aria-label={`Experience ${activeIndex + 1} of ${timeline.length}`}
          >
            {timeline.map((timelineItem, index) => (
              <button
                key={timelineItem.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`View ${timelineItem.role}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-9 bg-rose"
                    : "w-2 bg-cream/25 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={isFirst}
              aria-label="View previous experience"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream disabled:opacity-25"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={isLast}
              aria-label="View next experience"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-cream disabled:opacity-25"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}