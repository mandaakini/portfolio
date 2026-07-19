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

function getProjectPalette(project: Project) {
  const category = project.category.toLowerCase();

  if (
    category.includes("consumer") ||
    category.includes("market")
  ) {
    return "from-sage-mist via-porcelain to-rose-mist";
  }

  if (
    category.includes("data") ||
    category.includes("predictive") ||
    category.includes("ai")
  ) {
    return "from-plum-mist via-porcelain to-plum/25";
  }

  if (
    category.includes("product") ||
    category.includes("strategy")
  ) {
    return "from-rose-mist via-porcelain to-rosewood/25";
  }

  if (category.includes("music")) {
    return "from-deep-espresso via-plum to-rosewood";
  }

  return "from-sage-mist via-porcelain to-rose-mist";
}

function getCategoryColors(project: Project) {
  const category = project.category.toLowerCase();

  if (
    category.includes("consumer") ||
    category.includes("market")
  ) {
    return "border-eucalyptus/20 bg-sage-mist/90 text-sage-deep";
  }

  if (
    category.includes("data") ||
    category.includes("predictive") ||
    category.includes("ai")
  ) {
    return "border-plum/15 bg-plum-mist/90 text-plum";
  }

  if (
    category.includes("product") ||
    category.includes("strategy")
  ) {
    return "border-rose/20 bg-rose-mist/90 text-rosewood";
  }

  if (category.includes("music")) {
    return "border-cream/15 bg-deep-espresso/80 text-cream";
  }

  return "border-eucalyptus/20 bg-sage-mist/90 text-sage-deep";
}

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
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-28 top-28 h-64 w-64 rounded-full bg-rose-mist/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-sage-mist/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-rosewood/20 bg-porcelain text-ink shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:border-rosewood hover:text-rosewood hover:shadow-soft"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="View more projects"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-deep-espresso text-cream shadow-softer transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosewood hover:shadow-soft"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-16">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => {
              const palette = getProjectPalette(project);
              const categoryColors = getCategoryColors(project);
              const isMusicProject = project.category
                .toLowerCase()
                .includes("music");

              return (
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
                  className="group w-full shrink-0 snap-start overflow-hidden rounded-4xl border border-espresso/5 bg-porcelain text-left shadow-softer transition-shadow duration-500 hover:shadow-lift sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
                >
                  <div
                    className={`relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br p-5 ${palette}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-espresso/10"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute right-10 top-12 h-16 w-16 rounded-full bg-porcelain/25 blur-xl"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute bottom-10 left-10 h-20 w-20 rotate-12 rounded-3xl border border-espresso/10"
                    />

                    <span
                      className={`relative rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm ${categoryColors}`}
                    >
                      {project.category}
                    </span>

                    <span
                      className={`absolute right-4 top-4 rounded-full p-2 opacity-0 shadow-softer backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 ${
                        isMusicProject
                          ? "bg-cream text-ink"
                          : "bg-porcelain/85 text-ink"
                      }`}
                    >
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                      {project.title}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-charcoal">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-eucalyptus/15 bg-sage-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sage-deep"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => scrollProjects("left")}
              aria-label="View previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-rosewood/20 bg-porcelain text-ink shadow-softer transition-colors hover:border-rosewood hover:text-rosewood"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects("right")}
              aria-label="View next project"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-deep-espresso text-cream shadow-softer transition-colors hover:bg-rosewood"
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