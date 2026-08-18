import { ArrowUp } from "lucide-react";
import { EMAIL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-raised-2 pb-8 pt-20">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-[4%]">
        <div className="flex flex-col items-start justify-between gap-8 border-t border-paper/10 pt-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-lg text-paper">
              Built fast. Shipped anyway.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-block font-mono text-sm text-paper/50 transition-colors hover:text-stamp"
            >
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-mono text-xs text-paper/35">
              © {new Date().getFullYear()} Favour Mustapha
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/60 transition-colors hover:border-stamp hover:text-stamp"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none -mb-6 select-none overflow-hidden whitespace-nowrap text-center font-display text-[clamp(4.5rem,19vw,13rem)] font-medium leading-none tracking-tight text-paper/[0.045] sm:-mb-8"
      >
        headfavour
      </div>
    </footer>
  );
}
