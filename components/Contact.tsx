"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

import SectionHeading from "./SectionHeading";

const links = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mandaakini-raghuraman/",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mandaakini@gmail.com",
    external: false,
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/images/MandaakiniRaghuraman_Resume_v2.pdf",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-cream py-20 text-ink sm:py-24 [&_h2]:text-ink"
    >
      <div className="mx-auto max-w-8xl px-6 text-center sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="06 — Contact"
          title="I'd love to hear from you."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex justify-center"
        >
          <p className="max-w-lg text-charcoal">
            Whether it's a new opportunity, an ambitious question, or a
            discussion about music, I'm always open to a thoughtful
            conversation.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${link.label} — Mandaakini Raghuraman`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group flex min-h-48 flex-col items-center justify-center gap-4 rounded-3xl border border-wine/50 bg-cream px-6 py-7 transition-all duration-300 hover:border-wine hover:bg-rose-mist hover:shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wine text-cream transition-colors duration-300 group-hover:bg-oxblood">
                  <Icon size={22} aria-hidden="true" />
                </span>

                <span className="flex items-center justify-center gap-1.5 text-center text-sm font-medium text-wine">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}