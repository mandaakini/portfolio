"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <section
      id="projects"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 flex-col overflow-hidden bg-cream pb-16 pt-12 sm:pb-20 sm:pt-16"
    >
      <div className="relative mx-auto flex w-full max-w-8xl flex-1 flex-col px-6 sm:px-8 lg:px-12">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/20 bg-bone text-ink shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:border-wine hover:text-wine hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="View more projects"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-wine text-cream shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:bg-oxblood hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center">
          <div className="mx-auto w-full max-w-6xl">
            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`View details for ${project.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative flex aspect-[3/2] w-full shrink-0 snap-start items-center justify-center overflow-hidden rounded-4xl border border-wine/15 bg-bone p-7 text-center shadow-softer transition-colors duration-500 hover:border-wine/35 hover:bg-blush hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:basis-[calc((100%-1.5rem)/2)] sm:p-8 lg:basis-[calc((100%-3rem)/3)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-4 font-display text-4xl text-wine/[0.08] transition-colors duration-300 group-hover:text-wine/[0.13]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative z-10 max-w-xs font-display text-2xl font-normal leading-tight text-ink transition-colors duration-300 group-hover:text-wine sm:text-[1.65rem]">
                    {project.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-wine/20 bg-cream/50 text-wine transition-all duration-300 group-hover:border-wine/40 group-hover:bg-wine group-hover:text-cream"
                  >
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => scrollProjects("left")}
                aria-label="View previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-wine/20 bg-bone text-ink shadow-softer transition-colors hover:border-wine hover:text-wine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollProjects("right")}
                aria-label="View next project"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-cream shadow-softer transition-colors hover:bg-oxblood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
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