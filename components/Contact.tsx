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
    color: "bg-cream",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mandaakini@gmail.com",
    external: false,
    color: "bg-cream",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/images/MandaakiniRaghuraman_Resume_v2.pdf",
    external: true,
    color: "bg-cream",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-burgundy py-24 text-cream sm:py-32 [&_h2]:text-cream"
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
          <p className="max-w-lg text-bone/75">
            Whether it's a new opportunity, an ambitious question, or a
            discussion about music, I'm always open to a thoughtful
            conversation.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
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
                className={`${link.color} group flex min-h-64 flex-col items-center justify-center gap-5 rounded-4xl border border-cream/10 px-6 py-8 shadow-softer transition-shadow duration-300 hover:border-rose/60 hover:shadow-soft`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose text-cream transition-colors duration-300 group-hover:bg-rose-deep">
                  <Icon size={24} aria-hidden="true" />
                </span>

                <span className="flex items-center justify-center gap-1.5 text-center text-sm font-medium text-ink">
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