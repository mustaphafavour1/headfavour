"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Marked } from "./Marked";
import { socials, EMAIL } from "@/lib/data";
import {
  LinkedInIcon,
  GithubIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

const iconMap = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

const badgeOffsets = [
  "sm:translate-y-0",
  "sm:translate-y-9",
  "sm:-translate-y-3",
  "sm:translate-y-6",
  "sm:translate-y-1",
];

export function Socials() {
  return (
    <section id="connect" className="relative bg-ink-raised py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-[4%] md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/45"
          >
            {"// let’s talk"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl"
          >
            Let&rsquo;s <Marked>connect</Marked>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-sm text-lg text-paper/60"
          >
            Startups, AI, or whatever you&rsquo;re building right now — my
            inbox is always open.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-stamp px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={2} />
            {EMAIL}
          </motion.a>
        </div>

        <div className="flex flex-wrap items-start justify-start gap-x-6 gap-y-10 sm:justify-center md:justify-end">
          {socials.map((social, index) => {
            const Icon = iconMap[social.id as keyof typeof iconMap];
            const offset = badgeOffsets[index % badgeOffsets.length];
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 14,
                  delay: index * 0.08,
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className={`group flex flex-col items-center gap-2 ${offset}`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-[0.09em] border-paper/25 text-paper/70 transition-colors group-hover:border-stamp group-hover:text-stamp sm:h-20 sm:w-20">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-paper/40 transition-colors group-hover:text-stamp">
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
