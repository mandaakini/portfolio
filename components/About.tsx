"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Coffee,
  Languages,
  MapPin,
  Music2,
  Puzzle,
} from "lucide-react";

const personalNotes = [
  {
    icon: Languages,
    title: "Always learning",
    text: "Currently learning my eighth language, with a particular love for literature.",
    color: "bg-lilac/60",
  },
  {
    icon: Music2,
    title: "Usually playing",
    text: "Piano, guitar, flute, or a DJ set—depending on what is stuck in my head.",
    color: "bg-blush",
  },
  {
    icon: MapPin,
    title: "Out exploring",
    text: "New cities, cafés, restaurants, and quiet places outdoors in the PNW.",
    color: "bg-mushroom/70",
  },
  {
    icon: Puzzle,
    title: "Slow afternoons",
    text: "A 5,000-piece puzzle, baking, coffee, family, and a movie in the background.",
    color: "bg-porcelain",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-cream pb-24 pt-12 sm:pb-28 sm:pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-mushroom/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Photo column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose">
                01 — About
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative mx-auto mt-10 max-w-sm lg:mx-0"
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-5 -top-5 h-20 w-20 rotate-6 rounded-3xl bg-rose-mist"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-mushroom"
                />

                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-porcelain bg-porcelain shadow-soft">
                  <Image
                    src="/images/about-photo.jpg"
                    alt="Mandaakini Raghuraman"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 32vw"
                    className="object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-deep-espresso/15 via-transparent to-transparent"
                  />
                </div>

                <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full border border-rose/15 bg-porcelain px-4 py-2 text-xs text-charcoal shadow-softer">
                  <Coffee
                    size={14}
                    className="text-rosewood"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Biography column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl"
            >
              <div className="space-y-5 text-base leading-[1.8] text-charcoal sm:text-[17px]">
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
                  . This sounds like two different people until you notice
                  they&apos;re asking the same question. Both are about paying close
                  attention to what moves someone, and having the discipline to prove
                  it wasn&apos;t a coincidence.
                </p>

                <p>
                  I&apos;m drawn to patterns that aren&apos;t immediately obvious.
                  Analytics gives me a way to look for those patterns in data, and
                  music has taught me to recognize them in a different language
                  entirely. Whether I&apos;m trying to understand
                  the story behind a set of numbers or why a particular chord
                  progression resonates with someone, I&apos;m drawn to the space
                  between observation, understanding, problem-solving, and
                  application.
                </p>
              </div>
                            <div className="my-9 flex items-center gap-4">
                <span className="h-px flex-1 bg-rose/25" />

                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-rosewood">
                  Beyond the dashboard
                </span>

                <span className="h-px flex-1 bg-rose/25" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {personalNotes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -4 }}
                      className={`${item.color} rounded-3xl border border-ink/5 p-5 shadow-softer transition-shadow duration-300 hover:shadow-soft`}
                    >
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream text-rosewood">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <h3 className="font-display text-lg font-semibold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-charcoal">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 border-l-2 border-rose pl-5 font-display text-xl italic leading-relaxed text-ink"
              >
                At the heart of it all, I like paying attention—to people,
                patterns, places, and the small details that explain something
                bigger.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}