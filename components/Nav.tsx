"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { nav } from "../lib/data";
import { useActiveSection } from "../lib/useActiveSection";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useActiveSection(
    nav.map((item) => item.href.replace("#", "")),
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/80 shadow-softer backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-ink"
          aria-label="Mandaakini Raghuraman — Home"
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-full border border-rose-deep/30 bg-blush/40 font-display text-sm font-semibold text-rose-deep transition-colors group-hover:bg-rose-deep group-hover:text-cream"
          >
            MR
          </span>

          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Mandaakini Raghuraman
          </span>
        </a>
       

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="relative py-2 text-sm text-charcoal/70 transition-colors hover:text-ink"
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 flex justify-center gap-0.5"
                    aria-hidden="true"
                  >
                    {[0, 1, 2].map((index) => (
                      <span
                        key={index}
                        className="h-1 w-1 rounded-full bg-rose-deep"
                        style={{ opacity: 1 - index * 0.25 }}
                      />
                    ))}
                  </motion.span>
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden items-center rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition-colors duration-300 hover:bg-rose-deep lg:inline-flex"
        >
          Let&apos;s Connect
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] min-h-[100dvh] overflow-y-auto overscroll-contain bg-[#fbf8f4] lg:hidden"
            style={{ backgroundColor: "#fbf8f4" }}
          >
            <div className="flex h-20 items-center justify-between bg-[#fbf8f4] px-6">
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 text-ink"
                aria-label="Mandaakini Raghuraman — Home"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-full border border-rose-deep/30 bg-blush/40 font-display text-sm font-semibold text-rose-deep"
                >
                  MR
                </span>

                <span className="font-display text-[17px] font-semibold tracking-tight sm:text-xl">
                  Mandaakini Raghuraman
                </span>
              </a>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-mr-2 p-2 text-ink"
                aria-label="Close menu"
              >
                <X size={26} aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex min-h-[calc(100dvh-5rem)] flex-col gap-1 bg-[#fbf8f4] px-6 pt-4"
              aria-label="Mobile navigation"
            >
              {nav.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-charcoal/10 py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}