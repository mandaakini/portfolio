"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Piano, Mic2, Sliders } from "lucide-react";

const pillars = [
  {
    icon: Piano,
    title: "Piano & Performance",
    body: "Classically trained, now more interested in what a chord progression does to a room than in playing it perfectly.",
  },
  {
    icon: Sliders,
    title: "Production",
    body: "Learning the other side of the glass — arrangement, mixing, and the small decisions that make a track feel finished.",
  },
  {
    icon: Mic2,
    title: "Why It Matters to Product",
    body: "Music taught me that timing, repetition, and restraint are what make people feel something. I bring that same ear to product and research work.",
  },
];

export default function Music() {
  return (
    <section id="music" className="relative py-24 sm:py-32 bg-ink text-cream overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF8F5 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="06 — Music" title="The part of me that thinks in melody." light />

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <span className="shrink-0 h-11 w-11 rounded-full bg-cream/10 flex items-center justify-center text-rose">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-cream/65 leading-relaxed text-sm sm:text-base">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="rounded-4xl bg-cream/[0.06] border border-cream/10 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-cream/40">
                  Now Playing
                </p>
                <p className="font-display text-lg mt-1">Mandaakini's Playlist</p>
              </div>
              <div className="flex items-end gap-1 h-8" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 rounded-full bg-rose"
                    animate={{ height: ["30%", "100%", "50%", "80%", "30%"] }}
                    transition={{
                      duration: 1.8 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            </div>

            {/*
              Replace the div below with a real Spotify embed, e.g.:
              <iframe
                style={{ borderRadius: "20px" }}
                src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator"
                width="100%" height="352" frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            */}
            <div className="rounded-3xl bg-cream/[0.04] border border-dashed border-cream/15 aspect-[16/10] flex flex-col items-center justify-center gap-3 text-cream/40">
              <span className="font-mono text-xs tracking-widest uppercase">
                Spotify Embed
              </span>
              <span className="text-sm text-cream/30 px-6 text-center">
                Drop your playlist embed code here
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
