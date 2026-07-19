"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

import { type Project } from "../lib/data";

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
            className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-4xl border border-cream/10 bg-porcelain shadow-lift sm:max-w-2xl sm:rounded-4xl"
          >
            <div
              className={`relative h-40 overflow-hidden bg-gradient-to-br sm:h-48 ${getProjectPalette(
                project,
              )}`}
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-12 h-40 w-40 rounded-full border border-espresso/10"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-8 right-24 h-20 w-20 rotate-12 rounded-3xl border border-espresso/10"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/3 top-6 h-24 w-24 rounded-full bg-porcelain/25 blur-2xl"
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-porcelain/85 text-ink shadow-softer backdrop-blur-sm transition-all duration-300 hover:rotate-90 hover:bg-porcelain hover:text-rosewood"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <span
                className={`absolute bottom-5 left-6 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm ${getCategoryColors(
                  project,
                )}`}
              >
                {project.category}
              </span>
            </div>

            <div className="p-7 sm:p-10">
              <h3
                id={`project-title-${project.id}`}
                className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl"
              >
                {project.title}
              </h3>

              <p className="mb-8 leading-relaxed text-charcoal">
                {project.longDescription}
              </p>

              <div className="mb-9">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-rosewood">
                  Tech Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-eucalyptus/15 bg-sage-mist px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-sage-deep"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-rosewood">
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
                        className="mt-0.5 shrink-0 text-eucalyptus"
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