"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import SectionHeading from "./SectionHeading";
import { socials } from "../lib/data";

const links = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: socials.linkedin },
  { icon: Mail, label: "Email", href: socials.email },
  { icon: FaGithub, label: "GitHub", href: socials.github },
  { icon: FaInstagram, label: "Instagram", href: socials.instagram },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-blush/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-8xl px-6 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="08 — Contact"
          title="Let's build something worth paying attention to."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex justify-center"
        >
          <p className="max-w-lg text-charcoal/70">
            Open to product, analytics, and research conversations—and always
            happy to talk music.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:flex sm:justify-center sm:gap-5">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 rounded-3xl bg-cream px-6 py-7 shadow-softer transition-shadow duration-300 hover:shadow-soft"
              >
                <span className="rounded-full bg-sage/50 p-3.5 text-sage-deep transition-colors duration-300 group-hover:bg-rose-deep group-hover:text-cream">
                  <Icon size={20} aria-hidden="true" />
                </span>

                <span className="flex items-center gap-1 text-sm font-medium text-ink">
                  {link.label}
                  {!isEmail && (
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="opacity-0 transition-opacity group-hover:opacity-100"
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