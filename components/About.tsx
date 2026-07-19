"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const focusAreas = [
  {
    label: "Product Management",
    colors: "border-rose/20 bg-rose-mist text-rosewood",
  },
  {
    label: "Consumer Research",
    colors: "border-eucalyptus/25 bg-sage-mist text-sage-deep",
  },
  {
    label: "Music Strategy",
    colors: "border-plum/15 bg-plum-mist text-plum",
  },
  {
    label: "Creator Economy",
    colors: "border-rose/20 bg-rose-mist text-rosewood",
  },
  {
    label: "Entertainment Tech",
    colors: "border-eucalyptus/25 bg-sage-mist text-sage-deep",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-sage/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
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
                className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-sage-mist"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-porcelain bg-porcelain shadow-soft">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Mandaakini Raghuraman"
                  fill
                  priority={false}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 32vw"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep-espresso/15 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl space-y-6 text-lg leading-relaxed text-charcoal"
            >
              <p>
                I&apos;m a{" "}
                <strong className="font-semibold text-ink">
                  Business Analytics
                </strong>{" "}
                graduate with a concentration in{" "}
                <strong className="font-semibold text-ink">
                  Market Research &amp; Consumer Analytics
                </strong>
                , and a minor in{" "}
                <strong className="font-semibold text-ink">
                  Music Performance
                </strong>{" "}
                — which sounds like two different people until you notice
                they&apos;re asking the same question. Both are about paying
                close attention to what moves someone, and having the discipline
                to prove it wasn&apos;t a coincidence.
              </p>

              <p>
                Most of my favorite work has lived in that overlap: a spreadsheet
                that explains why a customer left, a survey question rewritten
                until it stops leading the witness, a chord change that lands
                exactly where it should. I&apos;m drawn to the moment where a
                dataset stops being numbers and starts being a person.
              </p>

              <p>
                Right now, that curiosity is pointed at{" "}
                <span className="font-medium text-ink">
                  product management
                </span>
                , where research actually gets built into something; at{" "}
                <span className="font-medium text-ink">
                  entertainment tech
                </span>{" "}
                and the{" "}
                <span className="font-medium text-ink">
                  creator economy
                </span>
                , where the &quot;customer&quot; is often an artist and an
                audience at once; and at{" "}
                <span className="font-medium text-ink">
                  music strategy
                </span>
                , where I get to bring the analyst and the performer to the same
                table.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {focusAreas.map((area) => (
                <span
                  key={area.label}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${area.colors}`}
                >
                  {area.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}