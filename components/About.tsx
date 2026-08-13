"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fieldNotes = [
  {
    label: "Always learning",
    items: [
      "Learning my eighth language",
      "Literature and books",
      "New perspectives, places, and ideas",
    ],
  },
  {
    label: "Always creating",
    items: [
      "Piano, Guitar, and Flute",
      "DJing",
      "Cooking and baking",
    ],
  },
  {
    label: "Off the clock",
    items: [
      "New cities, cafés, and restaurants",
      "PNW nature and afternoons with friends",
      "5,000-piece puzzles, family, and films",
    ],
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

        
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[360px] lg:col-span-5 lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-mushroom bg-cream">
              <Image
                src="/images/about-photo.jpg"
                alt="Mandaakini Raghuraman at her graduation"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 400px"
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

                <br />
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
      

            <h2
              id="about-heading"
              className="mt-4 max-w-3xl text-balance font-editorial text-4xl leading-[1.02] text-ink sm:text-5xl lg:text-[3.6rem]"
            >
              I look for patterns beneath the obvious.
            </h2>

            {/* Professional story */}
            <div className="mt-6 grid gap-6 border-y border-mushroom/70 py-5 text-[14px] leading-6 text-charcoal/75 sm:grid-cols-2 sm:text-[15px]">
              <p>
                I&apos;m a{" "}
                <strong className="font-semibold text-ink">
                  Business Analytics
                </strong>{" "}
                graduate with a concentration in{" "}
                <strong className="font-semibold text-ink">
                  Market Research &amp; Consumer Analytics
                </strong>{" "}
                and a minor in{" "}
                <strong className="font-semibold text-ink">
                  Music Performance
                </strong>
                . They may sound like two different disciplines, but both ask
                the same question: what moves someone?
              </p>

              <p>
                I&apos;m drawn to patterns that aren&apos;t immediately
                obvious. Analytics helps me find them in data; music taught me
                to recognize them in another language. Whether I&apos;m
                interpreting numbers or a chord progression, my favorite work
                lives between observation, understanding, problem-solving, and
                application.
              </p>
            </div>

            {/* Personal details */}
            <div className="mt-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-rosewood">
                Beyond the work
              </p>

              <div className="mt-3 grid gap-5 sm:grid-cols-3">
                {fieldNotes.map((note) => (
                  <div
                    key={note.label}
                    className="border-t border-mushroom/80 pt-3"
                  >
                    <h3 className="font-editorial text-lg text-ink">
                      {note.label}
                    </h3>

                    <ul className="mt-2 space-y-1.5">
                      {note.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-[13px] leading-5 text-charcoal/75"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-px w-3 shrink-0 bg-rosewood/60"
                          />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance booking */}
            <div className="mt-5 flex flex-col gap-3 border-y border-mushroom/70 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-rosewood">
                  Performance inquiries
                </p>

                <p className="mt-1 text-sm text-charcoal/75">
                  Available for select DJ sets and piano performances.
                </p>
              </div>

              <a
                href="mailto:mandaakini@gmail.com?subject=Performance%20Booking%20Inquiry"
                className="group inline-flex w-fit items-center gap-2 border-b border-ink/40 pb-1 text-sm font-medium text-ink transition-colors hover:border-rosewood hover:text-rosewood"
              >
                Inquire about a booking

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Closing statement */}
            <p className="mt-4 max-w-3xl border-l border-rose pl-5 font-display text-lg italic leading-relaxed text-ink">
              At the heart of it all, I pay attention — to people, patterns,
              places, and the small details that explain something bigger.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}