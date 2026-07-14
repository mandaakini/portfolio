"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "../lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="03 — Projects" title="Things I've built to answer real questions." />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="mb-6 w-full break-inside-avoid text-left group rounded-4xl bg-white/60 shadow-softer hover:shadow-lift transition-shadow duration-500 overflow-hidden"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${project.palette} flex items-end p-5`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase bg-cream/80 backdrop-blur-sm text-ink/80 rounded-full px-3 py-1.5">
                  {project.category}
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-cream/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="text-ink" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] tracking-wide uppercase text-sage-deep bg-sage/40 rounded-full px-2.5 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}