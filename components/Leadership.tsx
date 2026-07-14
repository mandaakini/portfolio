"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { leadership } from "../lib/data";
import { CalendarHeart, Megaphone, Users2, Handshake } from "lucide-react";

const iconFor = [CalendarHeart, Users2, Megaphone, Handshake];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-sage/30">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="04 — Leadership" title="Building a community is a product problem too." />

        <div className="mt-16">
          {leadership.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-12 gap-8 items-center rounded-5xl bg-cream shadow-soft p-8 sm:p-12"
            >
              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
                  {item.role}
                </h3>
                <p className="text-rose-deep font-medium mt-2">{item.org}</p>
                <p className="font-mono text-xs tracking-widest uppercase text-charcoal/50 mt-1">
                  {item.period}
                </p>
                <p className="mt-6 text-charcoal/75 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {item.points.map((point, i) => {
                  const Icon = iconFor[i % iconFor.length];
                  return (
                    <motion.div
                      key={point}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl bg-blush/50 p-5 flex flex-col gap-3"
                    >
                      <span className="w-fit rounded-full bg-rose/30 p-2.5 text-rose-deep">
                        <Icon size={18} />
                      </span>
                      <p className="text-sm text-charcoal/80 leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}