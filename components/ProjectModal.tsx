"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

import { type Project } from "../lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-deep-espresso/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${project.id}`}
            onClick={(event) => event.stopPropagation()}
            initial={{
              y: "100%",
              opacity: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "100%",
              opacity: 0.5,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-4xl border border-wine/15 border-t-4 border-t-wine bg-porcelain shadow-lift sm:max-w-2xl sm:rounded-4xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-wine/15 bg-cream text-ink shadow-softer transition-all duration-300 hover:rotate-90 hover:border-wine/30 hover:bg-wine hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2 focus-visible:ring-offset-porcelain"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="p-7 pt-16 sm:p-10 sm:pt-14">
              <span className="inline-flex rounded-full border border-wine/15 bg-bone px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-wine">
                {project.category}
              </span>

              <h3
                id={`project-title-${project.id}`}
                className="mb-4 mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl"
              >
                {project.title}
              </h3>

              <p className="mb-8 leading-relaxed text-charcoal">
                {project.longDescription}
              </p>

              <div className="mb-9">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-wine">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-wine/10 bg-bone px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-mushroom-deep"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-wine">
                  Results
                </p>

                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-3 rounded-2xl border border-rose/10 bg-rose-mist/65 p-4 text-sm leading-relaxed text-charcoal"
                    >
                      <CheckCircle2
                        size={17}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-wine"
                      />

                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}