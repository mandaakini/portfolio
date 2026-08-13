"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SectionHeading from "./SectionHeading";

const timeline = [
  {
    id: "business-transformation-intern",
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
    id: "oscg",
    type: "Experience",
    role: "Co-Founder, VP, Lead Product Manager",
    org: "Oregon Software Consulting Group",
    period: "June 2024 — June 2026",
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
    id: "early-learning-teacher",
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
      "Fostered a safe, nurturing learning environment that encouraged curiosity, exploration, and individual growth.",
    ],
  },
  {
    id: "market-research-analyst",
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
      "Presented research findings and strategic recommendations to project stakeholders while maintaining the confidentiality of proprietary information.",
    ],
  },
  {
    id: "isa-president",
    type: "Leadership",
    role: "President",
    org: "Oregon State Indian Students Association",
    period: "June 2024 — June 2025",
    summary:
      "Directed organizational strategy, cultural programming, community partnerships, and a large student leadership team.",
    points: [
      "Spearheaded strategy and operations across finance, marketing, and event planning for Oregon State University’s largest and longest-standing cultural organization, representing more than 500 students and faculty.",
      "Led the planning and execution of India Night, OSU’s largest cultural event, attracting more than 1,000 attendees and coordinating over 30 volunteers and 50 participants.",
      "Managed a $10K+ event budget and coordinated sponsorships and donations to support large-scale programming and organizational initiatives.",
      "Cultivated partnerships with student organizations and university administration to secure funding, venues, and resources for future initiatives.",
    ],
  },
  {
    id: "piano-teacher",
    type: "Experience",
    role: "Piano Teacher",
    org: "Self-Employed",
    period: "July 2020 — July 2024",
    summary:
      "Introduced young students to piano fundamentals through individualized, encouraging instruction.",
    points: [
      "Instructed children ages ten and younger in piano fundamentals, music theory, technique, and performance.",
      "Developed individualized teaching approaches tailored to each student’s learning style, skill level, and progress.",
      "Created structured lesson plans and practice exercises to help students progressively develop musical skills and technical proficiency.",
      "Guided students in building confidence, discipline, and musical expression through consistent practice and performance preparation.",
    ],
  },
  {
    id: "unicef-president",
    type: "Leadership",
    role: "President",
    org: "OSU UNICEF",
    period: "May 2024 — June 2024",
    summary:
      "Led community outreach and fundraising initiatives supporting UNICEF’s global mission.",
    points: [
      "Raised awareness and funds to advance UNICEF’s mission and support children’s rights and well-being worldwide.",
      "Established partnerships with local Corvallis businesses to coordinate fundraising events and expand community involvement.",
      "Spearheaded strategic initiatives and outreach efforts to increase student engagement and strengthen the organization’s presence on campus.",
      "Led the planning and execution of fundraising and awareness campaigns, coordinating members and community partners to support organizational goals.",
    ],
  },
  {
    id: "isa-event-coordinator",
    type: "Leadership",
    role: "Event Coordinator",
    org: "Oregon State Indian Students Association",
    period: "June 2023 — June 2024",
    summary:
      "Managed cultural event logistics, sponsorship outreach, programming, and promotional collaboration.",
    points: [
      "Coordinated end-to-end event logistics, including vendor contracts, catering, entertainment, scheduling, and on-site execution.",
      "Secured more than $3,000 in sponsorships by building and maintaining partnerships with local businesses and community organizations.",
      "Collaborated with finance and public relations teams to develop strategic marketing initiatives that increased event visibility and attendance.",
      "Managed communication across vendors, sponsors, student organizations, and internal teams to ensure the seamless execution of large-scale cultural events.",
    ],
  },
  {
    id: "isa-secretary",
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
  const [[currentIndex, direction], setCurrentIndex] = useState<
    [number, number]
  >([0, 0]);

  const currentItem = timeline[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === timeline.length - 1;

  const changeExperience = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= timeline.length) return;

    setCurrentIndex([
      nextIndex,
      nextIndex > currentIndex ? 1 : -1,
    ]);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -70) {
      changeExperience(currentIndex + 1);
    } else if (info.offset.x > 70) {
      changeExperience(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        changeExperience(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        changeExperience(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <section
      id="experience"
      className="relative min-h-[calc(100svh-5rem)] scroll-mt-20 overflow-hidden bg-[#4A1F2D] py-14 text-[#F7F1E8] sm:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E8 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading
            eyebrow="02 — Experience"
            title="Where experience, leadership, and curiosity meet."
            light
          />

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => changeExperience(currentIndex - 1)}
              disabled={isFirst}
              aria-label="View previous experience"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F7F1E8]/25 text-[#F7F1E8] transition-colors hover:bg-[#F7F1E8] hover:text-[#4A1F2D] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => changeExperience(currentIndex + 1)}
              disabled={isLast}
              aria-label="View next experience"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C48791] text-[#FCF8F3] transition-colors hover:bg-[#925F68] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
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
              className="cursor-grab rounded-[2rem] bg-[#FCF8F3] p-7 text-[#251D1A] shadow-[0_24px_80px_rgba(20,8,12,0.25)] active:cursor-grabbing sm:p-10 lg:grid lg:min-h-[470px] lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 lg:p-12"
            >
              <div className="flex flex-col justify-between border-b border-[#D8D0C6] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#925F68]">
                      {currentItem.type}
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.22em] text-[#251D1A]/40">
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(timeline.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-6 h-px w-full bg-[#D8D0C6]" />

                  <h3 className="mt-10 max-w-lg font-display text-3xl font-medium leading-[1.05] sm:text-4xl lg:text-5xl">
                    {currentItem.role}
                  </h3>

                  <p className="mt-4 text-base font-medium text-[#925F68] sm:text-lg">
                    {currentItem.org}
                  </p>

                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#251D1A]/45">
                    {currentItem.period}
                  </p>
                </div>

                <p className="mt-8 max-w-lg text-base leading-relaxed text-[#251D1A]/65 sm:text-lg">
                  {currentItem.summary}
                </p>
              </div>

              <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#D8D0C6] bg-[#D8D0C6] sm:grid-cols-2 lg:mt-0">
                {currentItem.points.map((point, index) => (
                  <div
                    key={point}
                    className="flex min-h-[150px] flex-col justify-between bg-[#F7F1E8] p-6 sm:p-7"
                  >
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[#C48791]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-8 text-sm leading-relaxed text-[#251D1A]/70 sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex items-center justify-between gap-6">
          <div
            className="flex items-center gap-2"
            aria-label={`Slide ${currentIndex + 1} of ${timeline.length}`}
          >
            {timeline.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => changeExperience(index)}
                aria-label={`View ${item.role}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#C48791]"
                    : "w-2 bg-[#F7F1E8]/30 hover:bg-[#F7F1E8]/55"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => changeExperience(currentIndex - 1)}
              disabled={isFirst}
              aria-label="View previous experience"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F1E8]/25 text-[#F7F1E8] disabled:opacity-30"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => changeExperience(currentIndex + 1)}
              disabled={isLast}
              aria-label="View next experience"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C48791] text-[#FCF8F3] disabled:opacity-30"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}