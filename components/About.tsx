"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-mushroom/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
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
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl space-y-5 text-base leading-[1.8] text-charcoal sm:text-[17px]"
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
                </strong>
                . This sounds like two different people until you notice
                they&apos;re asking the same question. Both are about paying
                close attention to what moves someone, and having the discipline
                to prove it wasn&apos;t a coincidence.
              </p>

              <p>
                I&apos;ve always been interested in the patterns behind the way
                people think, feel, and make decisions, especially the ones that
                aren&apos;t immediately obvious. Analytics gives me a way to
                look for those patterns in data, and music has taught me to
                recognize them in a different language entirely. Whether
                I&apos;m trying to understand the story behind a set of numbers
                or why a particular chord progression resonates with someone,
                I&apos;m drawn to the space between observation and
                understanding — where information becomes insight, and insight
                becomes something distinctly human.
              </p>

              <p>
                That curiosity extends well beyond my work. I love exploring new
                cities and places, discovering cafés and trying new foods,
                reading books that leave me with more questions than answers,
                learning new languages with a particular interest in literature
                — I&apos;m currently learning my eighth — and spending time
                cooking or baking.
              </p>

              <p>
                I&apos;ve also always loved teaching and sharing what I know
                with others. I&apos;ve worked as a teacher at an early learning
                school, and over the years, I&apos;ve taught everything from
                algebra and piano to English literature, Sanskrit grammar and
                literature, music theory, and singing.
              </p>

              <p>
                Otherwise, you can find me outdoors in the PNW, floating on a
                lake with my friends, or at home working on a 3,000-piece puzzle
                with my family, a cup of coffee in hand and a movie playing in
                the background.
              </p>

              <p>
                Music has always been one of the biggest parts of my life.
                I&apos;m classically trained in piano, with training in Carnatic
                singing, Kuchipudi, and Bharatanatyam. Along the way, I&apos;ve
                also learned to play the flute and guitar and found another
                creative outlet in DJing. I&apos;m always looking for new ways
                to create, perform, and connect with people through music — and
                I&apos;m open to DJ bookings and opportunities to perform along
                the way.
              </p>

              <p className="font-medium text-ink">
                At the heart of it all, I&apos;m someone who likes to pay
                attention — to people, to patterns, to places, and to the small
                details that explain something bigger.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}