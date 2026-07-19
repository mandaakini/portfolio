"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "../lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left:
        direction === "right"
          ? carousel.clientWidth
          : -carousel.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="03 — Projects"
            title="Things I've built to answer real questions."
          />

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="View previous projects"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/15 bg-cream text-ink shadow-softer transition-colors duration-300 hover:border-rose-deep hover:bg-rose-deep hover:text-cream"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="View more projects"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream shadow-softer transition-colors duration-300 hover:bg-rose-deep"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-16">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group w-full shrink-0 snap-start overflow-hidden rounded-4xl bg-white/60 text-left shadow-softer transition-shadow duration-500 hover:shadow-lift sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
              >
                <div
                  className={`relative flex aspect-[4/3] items-end bg-gradient-to-br p-5 ${project.palette}`}
                >
                  <span className="rounded-full bg-cream/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/80 backdrop-blur-sm">
                    {project.category}
                  </span>

                  <span className="absolute right-4 top-4 rounded-full bg-cream/80 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={16}
                      className="text-ink"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-charcoal/70">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-sage/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sage-deep"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="View previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-cream text-ink shadow-softer transition-colors hover:border-rose-deep hover:text-rose-deep"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="View next project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream shadow-softer transition-colors hover:bg-rose-deep"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}