"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import SectionHeading from "./SectionHeading";

const links = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mandaakini-raghuraman/",
    cardColors:
      "border-eucalyptus/15 bg-sage-mist hover:border-eucalyptus/30",
    iconColors:
      "bg-porcelain/70 text-eucalyptus group-hover:bg-eucalyptus group-hover:text-porcelain",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mandaakini@gmail.com",
    cardColors:
      "border-rosewood/10 bg-porcelain hover:border-rosewood/25",
    iconColors:
      "bg-rose-mist text-rosewood group-hover:bg-rosewood group-hover:text-porcelain",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/mandaakini/",
    cardColors:
      "border-orchid/15 bg-lilac hover:border-orchid/30",
    iconColors:
      "bg-porcelain/65 text-rosewood group-hover:bg-rose group-hover:text-porcelain",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-rose-mist py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-porcelain/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-plum-mist/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[28%] h-11 w-11 rounded-full border border-rose/20"
      />

      <div className="relative mx-auto max-w-8xl px-6 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something worth paying attention to."
          align="center"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-6 flex justify-center"
        >
          <p className="max-w-lg leading-relaxed text-charcoal">
            Open to product, analytics, and research conversations—and always
            happy to talk music.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isEmail = link.label === "Email";

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                aria-label={
                  isEmail
                    ? "Email Mandaakini"
                    : `Visit Mandaakini's ${link.label}`
                }
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group flex min-h-56 flex-col items-center justify-center gap-5 rounded-3xl border px-6 py-8 shadow-softer transition-all duration-300 hover:shadow-soft ${link.cardColors}`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${link.iconColors}`}
                >
                  <Icon size={21} aria-hidden="true" />
                </span>

                <span className="relative text-center text-sm font-medium text-ink">
                  {link.label}

                  {!isEmail && (
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="absolute left-full top-1/2 ml-1 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}