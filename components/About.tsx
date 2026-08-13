"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fieldNotes = [
  {
    label: "Based in",
    value: "The Pacific Northwest",
  },
  {
    label: "Always learning",
    value: "Eight languages and counting",
  },
  {
    label: "Usually playing",
    value: "Piano · guitar · flute · DJ sets",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-20 items-center overflow-hidden bg-porcelain py-10 sm:py-12 lg:py-14"
    >
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        {/* Section index */}
        <div className="flex items-center justify-between border-b border-mushroom/70 pb-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-rosewood sm:text-[11px]">
            01 — About
          </p>

          <p className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-charcoal/40 sm:block">
            Profile / 2026
          </p>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[430px] lg:col-span-5 lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-mushroom bg-cream">
              <Image
                src="/images/about-photo.jpg"
                alt="Mandaakini Raghuraman at her graduation"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 430px"
                className="object-cover object-center"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-oxblood/20 via-transparent to-transparent"
              />
            </div>

            <figcaption className="flex items-start justify-between gap-5 border-b border-mushroom/70 py-3">
              <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-charcoal/50">
                Business Analytics
                <br />
                Music Performance
              </span>

              <span className="text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-rosewood">
                Oregon State
                <br />
                Class of 2026
              </span>
            </figcaption>
          </motion.figure>

          {/* Editorial biography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-rosewood sm:text-[10px]">
              Observation · Understanding · Application
            </p>

            <h2
              id="about-heading"
              className="mt-4 max-w-3xl text-balance font-editorial text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-[3.8rem]"
            >
              I look for the patterns beneath the obvious.
            </h2>

            <div className="mt-7 grid gap-6 border-y border-mushroom/70 py-6 text-[15px] leading-7 text-charcoal/75 sm:grid-cols-2 sm:text-base">
              <p>
                I&apos;m a{" "}
                <strong className="font-semibold text-ink">
                  Business Analytics
                </strong>{" "}
                graduate concentrating in{" "}
                <strong className="font-semibold text-ink">
                  Market Research &amp; Consumer Analytics
                </strong>
                , with a minor in{" "}
                <strong className="font-semibold text-ink">
                  Music Performance
                </strong>
                . The two disciplines ask the same question: what moves people,
                and how can we understand it with rigor?
              </p>

              <p>
                Analytics gives me a way to find patterns in data; music taught
                me to recognize them in another language. My favorite work
                lives between observation and understanding—where information
                becomes insight, and insight becomes something distinctly
                human.
              </p>
            </div>

            {/* Skimmable personal details */}
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {fieldNotes.map((note) => (
                <div
                  key={note.label}
                  className="border-t border-mushroom/80 pt-3"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-rosewood">
                    {note.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-charcoal/75">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-2xl border-l border-rose pl-5 font-display text-lg italic leading-relaxed text-ink sm:text-xl">
              At heart, I pay attention—to people, patterns, places, and the
              small details that explain something bigger.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}