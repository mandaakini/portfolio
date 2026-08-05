"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const bars = [0, 1, 2, 3, 4, 5, 6];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <div
            className="flex h-10 items-end gap-1.5"
            aria-hidden="true"
          >
            {bars.map((i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full bg-rosewood"
                initial={{
                  height: 10,
                }}
                animate={{
                  height: [10, 32, 18, 28, 10],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.14,
                }}
              />
            ))}
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-charcoal/45"
          >
            Mandaakini Raghuraman
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}