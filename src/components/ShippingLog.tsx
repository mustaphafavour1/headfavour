"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Marked } from "./Marked";
import { projects } from "@/lib/data";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ShippingLog() {
  return (
    <section id="work" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1400px] px-[4%]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/45"
        >
          {"// the log"}
        </motion.p>

        <h2 className="max-w-xl font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl">
          Actually <Marked>shipped</Marked>.
        </h2>
        <p className="mt-5 max-w-md text-lg text-paper/60">
          Five things I&rsquo;ve put into the world. All live — click through
          and poke around.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={listVariants}
          className="mt-16 md:mt-20"
        >
          {projects.map((project, index) => (
            <div key={project.id}>
              {index > 0 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
              )}
              <motion.a
                variants={rowVariants}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 rounded-xl px-2 py-8 transition-colors hover:bg-paper/[0.03] focus-visible:bg-paper/[0.03] sm:flex-row sm:items-center sm:gap-8 md:py-10"
              >
                <span className="font-mono text-sm text-paper/35 sm:w-10 sm:shrink-0">
                  {project.no}
                </span>

                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full border border-paper/15 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-paper/50">
                    {project.category}
                  </span>
                  <h3 className="relative inline-block font-display text-2xl font-medium text-paper sm:text-3xl">
                    {project.name}
                    <svg
                      className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full overflow-visible"
                      viewBox="0 0 100 2"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="100"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth={2}
                        pathLength={1}
                        className="text-stamp [stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
                      />
                    </svg>
                  </h3>
                  <p className="mt-2 max-w-md text-paper/60">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center sm:gap-3">
                  <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-paper/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping-ring rounded-full bg-stamp" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-stamp" />
                    </span>
                    Live
                  </div>
                  <span className="font-mono text-xs text-paper/35">
                    {project.displayUrl}
                  </span>
                </div>

                <ArrowUpRight
                  className="h-6 w-6 shrink-0 text-paper/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-stamp"
                  strokeWidth={1.5}
                />
              </motion.a>
            </div>
          ))}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-paper/15 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
