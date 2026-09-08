"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Marked } from "./Marked";
import { projects } from "@/lib/data";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: 14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ShippingLog() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden py-[clamp(0.5rem,2vh,1.5rem)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="shrink-0"
      >
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/45">
          {"// the log"}
        </p>
        <h2 className="mt-1 font-display text-[clamp(1.1rem,2.8vh,1.6rem)] font-medium tracking-tight text-paper">
          Five things, <Marked delay={0.75}>live</Marked>.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={listVariants}
        className="mt-[clamp(0.5rem,1.5vh,1rem)] flex min-h-0 flex-1 flex-col"
      >
        {projects.map((project, index) => (
          <Fragment key={project.id}>
            {index > 0 && (
              <div
                key={`${project.id}-divider`}
                className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-paper/15 to-transparent"
              />
            )}
            <motion.a
              key={project.id}
              variants={rowVariants}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-0 flex-1 flex-col justify-center gap-[0.2rem] overflow-hidden rounded-lg px-2 transition-colors hover:bg-paper/[0.03] focus-visible:bg-paper/[0.03]"
            >
              <div className="flex items-center gap-2">
                <span className="shrink-0 font-mono text-[clamp(0.6rem,1.3vh,0.75rem)] text-paper/35">
                  {project.no}
                </span>
                <span className="truncate font-display text-[clamp(0.95rem,2.6vh,1.4rem)] font-medium text-paper group-hover:underline group-hover:decoration-stamp group-hover:underline-offset-4">
                  {project.name}
                </span>
                <span className="hidden shrink-0 rounded-full border border-paper/15 px-2 py-0.5 font-mono text-[clamp(0.55rem,1.1vh,0.65rem)] uppercase tracking-widest text-paper/50 sm:inline-block">
                  {project.category}
                </span>
                <span className="ml-auto flex shrink-0 items-center gap-1.5 font-mono text-[clamp(0.55rem,1.1vh,0.65rem)] uppercase tracking-widest text-paper/45">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping-ring rounded-full bg-stamp" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stamp" />
                  </span>
                  Live
                </span>
              </div>
              <div className="flex items-center gap-3 pl-[clamp(1.3rem,3vw,1.9rem)]">
                <p className="min-w-0 flex-1 truncate text-[clamp(0.72rem,1.6vh,0.85rem)] text-paper/55">
                  {project.description}
                </p>
                <span className="hidden shrink-0 font-mono text-[clamp(0.6rem,1.2vh,0.7rem)] text-paper/35 md:inline">
                  {project.displayUrl}
                </span>
                <ArrowUpRight
                  className="h-[clamp(0.9rem,2vh,1.15rem)] w-[clamp(0.9rem,2vh,1.15rem)] shrink-0 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stamp"
                  strokeWidth={1.75}
                />
              </div>
            </motion.a>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
