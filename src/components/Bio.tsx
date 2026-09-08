"use client";

import { motion } from "framer-motion";
import { Marked } from "./Marked";

export function Bio() {
  return (
    <section id="about" className="relative bg-ink-raised py-28 md:py-40">
      <div className="mx-auto w-full max-w-2xl px-[4%] text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/45"
        >
          {"// about"}
        </motion.p>

        <h2 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          The <Marked>short</Marked> version.
        </h2>

        <div className="mt-8 overflow-hidden">
          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
            className="text-lg leading-relaxed text-paper/70 sm:text-xl"
          >
            I love startups, and I love building with AI even more — most
            days that means shipping something new before lunch. If
            you&rsquo;re in the same rabbit hole, building fast and figuring
            it out as you go, I&rsquo;d genuinely love to connect.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 font-display italic text-paper/50"
        >
          — Favour
        </motion.p>
      </div>
    </section>
  );
}
