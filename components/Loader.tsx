"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const bars = [0, 1, 2, 3, 4];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex items-end gap-1.5 h-10">
            {bars.map((i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full bg-rose-deep"
                initial={{ height: 6 }}
                animate={{ height: [6, 36, 12, 30, 6] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-charcoal/50">
            Mandaakini Raghuraman
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
