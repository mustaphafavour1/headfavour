"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StampedProps = {
  children: ReactNode;
  tilt?: number;
  className?: string;
  delay?: number;
};

export function Stamped({ children, tilt = -3, className = "", delay = 0.15 }: StampedProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative inline-grid place-items-center">
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-stamp/30 blur-md"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: [0, 0.55, 0], scale: [0.4, 1.5, 1.9] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, delay, ease: "easeOut" }}
        />
      )}
      <motion.span
        initial={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 1.7, rotate: tilt * 4 }
        }
        whileInView={
          reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: tilt }
        }
        viewport={{ once: true, amount: 0.6 }}
        transition={
          reduceMotion
            ? { duration: 0.4, delay }
            : { type: "spring", stiffness: 260, damping: 13, delay }
        }
        style={{ transformOrigin: "center" }}
        className={`inline-block border-[0.07em] border-stamp px-[0.32em] py-[0.02em] font-display uppercase tracking-wide text-stamp ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
