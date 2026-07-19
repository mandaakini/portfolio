"use client";

import { motion } from "framer-motion";
import { Mic2, Piano, Sliders } from "lucide-react";

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
      className="relative overflow-hidden bg-[#231F22] py-20 text-cream sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E8 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-plum/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rosewood/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cream/45">
            04 — Music
          </p>

          <blockquote className="mt-5 max-w-6xl">
            <p className="font-display text-3xl font-semibold leading-[1.05] text-cream sm:text-4xl lg:text-5xl">
              If we understood the world, we would realize that there is a logic
              of harmony underlying its manifold apparent dissonances.
            </p>

            <footer className="mt-4 font-display text-lg italic text-[#C98E99] sm:text-xl">
              — Jean Sibelius
            </footer>
          </blockquote>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex gap-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/5 bg-cream/[0.08] text-[#C98E99]">
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="mb-1.5 font-display text-xl font-semibold text-cream">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#B9B0A9] sm:text-base">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-60px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-4xl border border-cream/10 bg-cream/[0.055] p-6 shadow-soft backdrop-blur-sm sm:p-8 lg:-mt-12"
          >
            <div className="mb-6 flex items-center justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40">
                  Now Playing
                </p>

                <p className="mt-1 font-display text-lg text-cream">
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
                    className="w-1 rounded-full bg-[#C98E99]"
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

            <div className="overflow-hidden rounded-[20px] bg-deep-espresso shadow-soft">
              <iframe
                title="Mandaakini's Spotify playlist"
                src="https://open.spotify.com/embed/playlist/4EMwcuCioKUZkoaJ5XGqrA?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                allowFullScreen
                className="block border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}