"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const focusAreas = [
  "Product Management",
  "Consumer Research",
  "Music Strategy",
  "Creator Economy",
  "Entertainment Tech",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-rose-deep">
              01 — About
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 relative mx-auto lg:mx-0 max-w-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-blush shadow-soft">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Portrait of Mandaakini Raghuraman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6 text-lg text-charcoal/80 leading-relaxed max-w-2xl"
            >
              <p>
                I'm a <strong className="text-ink font-semibold">Business Analytics</strong> graduate
                with a concentration in{" "}
                <strong className="text-ink font-semibold">Market Research &amp; Consumer Analytics</strong>,
                and a minor in{" "}
                <strong className="text-ink font-semibold">Music Performance</strong> —
                which sounds like two different people until you notice they're
                asking the same question. Both are about paying close attention
                to what moves someone, and having the discipline to prove it
                wasn't a coincidence.
              </p>
              <p>
                Most of my favorite work has lived in that overlap: a spreadsheet
                that explains why a customer left, a survey question rewritten
                until it stops leading the witness, a chord change that lands
                exactly where it should. I'm drawn to the moment where a dataset
                stops being numbers and starts being a person.
              </p>
              <p>
                Right now, that curiosity is pointed at{" "}
                <span className="text-ink">product management</span>, where
                research actually gets built into something; at{" "}
                <span className="text-ink">entertainment tech</span> and the{" "}
                <span className="text-ink">creator economy</span>, where the
                "customer" is often an artist and an audience at once; and at{" "}
                <span className="text-ink">music strategy</span>, where I get
                to bring the analyst and the performer to the same table.
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
                  key={area}
                  className="rounded-full bg-blush/60 border border-rose/30 px-4 py-2 text-sm text-ink/80"
                >
                  {area}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}