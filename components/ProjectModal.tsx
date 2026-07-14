"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Project } from "../lib/data";
import { useEffect } from "react";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.5 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-cream rounded-t-4xl sm:rounded-4xl shadow-lift"
          >
            <div
              className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.palette}`}
            >
              <button
                onClick={onClose}
                className="absolute top-5 right-5 rounded-full bg-cream/80 backdrop-blur-sm p-2.5 hover:bg-cream transition-colors"
                aria-label="Close"
              >
                <X size={18} className="text-ink" />
              </button>
              <span className="absolute bottom-5 left-6 font-mono text-[10px] tracking-[0.2em] uppercase bg-cream/80 backdrop-blur-sm text-ink/80 rounded-full px-3 py-1.5">
                {project.category}
              </span>
            </div>

            <div className="p-7 sm:p-10">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-4">
                {project.title}
              </h3>
              <p className="text-charcoal/75 leading-relaxed mb-8">
                {project.longDescription}
              </p>

              <div className="mb-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-rose-deep mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs tracking-wide uppercase text-sage-deep bg-sage/40 rounded-full px-3 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-rose-deep mb-3">
                  Results
                </p>
                <ul className="space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <CheckCircle2 size={16} className="text-sage-deep mt-0.5 shrink-0" />
                      {r}
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