"use client";

import { motion } from "framer-motion";
import { Mic2, Piano, Sliders } from "lucide-react";

import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Piano,
    title: "Piano & Performance",
    body: "Classically trained, now more interested in what a chord progression does to a room than in playing it perfectly.",
  },
  {
    icon: Sliders,
    title: "Production",
    body: "Learning the other side of the glass—arrangement, mixing, and the small decisions that make a track feel finished.",
  },
  {
    icon: Mic2,
    title: "Why It Matters to Product",
    body: "Music taught me that timing, repetition, and restraint are what make people feel something. I bring that same ear to product and research work.",
  },
];

export default function Music() {
  return (
    <section
      id="music"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF8F5 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="06 — Music"
          title="If we understood the world, we would realize that there is a logic of harmony underlying its manifold apparent dissonances."
          light
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex gap-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-rose">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="mb-1.5 font-display text-xl font-semibold">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-cream/65 sm:text-base">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-4xl border border-cream/10 bg-cream/[0.06] p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40">
                  Now Playing
                </p>

                <p className="mt-1 font-display text-lg">
                  Mandaakini&apos;s Recent Listens
                </p>
              </div>

              <div
                className="flex h-8 items-end gap-1"
                aria-hidden="true"
              >
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.span
                    key={index}
                    className="w-1 rounded-full bg-rose"
                    animate={{
                      height: ["30%", "100%", "50%", "80%", "30%"],
                    }}
                    transition={{
                      duration: 1.8 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>
            <iframe
              title="Mandaakini's Recent Listens"
              src="https://open.spotify.com/embed/playlist/4EMwcuCioKUZkoaJ5XGqrA?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
              className="rounded-[20px] border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}