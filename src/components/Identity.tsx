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

export function Identity() {
  return (
    <div className="flex h-full min-h-0 flex-col justify-center gap-[clamp(0.75rem,2.5vh,1.5rem)] overflow-hidden py-[clamp(0.5rem,2vh,1.5rem)]">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/50"
      >
        [ Favour Mustapha — currently building ]
      </motion.p>

      <h1 className="font-display text-[clamp(1.6rem,4.4vh,2.75rem)] font-medium leading-[1.03] tracking-tight text-paper">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="block"
        >
          Everything here
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="block"
        >
          is actually <Marked delay={0.6}>shipped</Marked>.
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-sm text-[clamp(0.85rem,1.9vh,1.05rem)] leading-snug text-paper/65"
      >
        I love startups and building with AI daily — always down to connect
        with people doing the same.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full bg-stamp px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={2} />
          Say hi
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.48 }}
        className="flex items-center gap-[clamp(0.5rem,1.5vw,0.9rem)]"
      >
        {socials.map((social) => {
          const Icon = iconMap[social.id as keyof typeof iconMap];
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-[clamp(1.9rem,4.5vh,2.5rem)] w-[clamp(1.9rem,4.5vh,2.5rem)] items-center justify-center rounded-full border border-paper/20 text-paper/60 transition-colors hover:border-stamp hover:text-stamp"
            >
              <Icon className="h-[45%] w-[45%]" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}
