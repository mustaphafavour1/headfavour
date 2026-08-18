"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Stamped } from "./Stamped";
import { EMAIL } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-stamp/[0.08] blur-[120px]"
      />

      <div className="mx-auto w-full max-w-[1400px] px-[4%]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-paper/50"
        >
          [ Favour Mustapha — currently building ]
        </motion.p>

        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.98] tracking-tight text-paper">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block"
          >
            Everything here
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="block"
          >
            is actually{" "}
            <Stamped tilt={-4} delay={0.85} className="align-baseline">
              shipped
            </Stamped>
            .
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-lg text-lg text-paper/65 sm:text-xl"
        >
          I&rsquo;m Favour — I build startups and products, mostly with AI,
          and I&rsquo;d rather launch than talk about launching.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-stamp px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
          >
            See the work
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-stamp hover:text-stamp"
          >
            Say hi
            <Mail className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-paper/35">
          scroll
        </span>
        <span className="h-10 w-px origin-top animate-breathe bg-paper/40" />
      </motion.div>
    </section>
  );
}
