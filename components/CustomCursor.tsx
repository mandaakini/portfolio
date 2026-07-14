"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 14);
      cursorY.set(e.clientY - 14);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] rounded-full border border-rose-deep/60 mix-blend-multiply"
      style={{ left: springX, top: springY, width: 28, height: 28 }}
      animate={{
        scale: hovering ? 1.8 : 1,
        opacity: hovering ? 0.9 : 0.5,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    />
  );
}
