"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MarkedProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Marked({ children, className = "", delay = 0.2 }: MarkedProps) {
  const highlightVariants: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.5, delay, ease: [0.65, 0, 0.35, 1] } },
  };
  const textVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.25, delay: delay + 0.3 } },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="relative inline-block px-[0.12em]"
    >
      <motion.span
        aria-hidden="true"
        variants={highlightVariants}
        className="absolute -inset-x-[0.06em] -inset-y-[0.05em] -skew-x-6 bg-stamp"
        style={{ transformOrigin: "left center" }}
      />
      <motion.span variants={textVariants} className={`relative text-ink ${className}`}>
        {children}
      </motion.span>
    </motion.span>
  );
}
