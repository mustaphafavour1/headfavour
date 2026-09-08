import { Mail } from "lucide-react";
import { EMAIL } from "@/lib/data";

export function Nav() {
  return (
    <header className="shrink-0 border-b border-paper/10 px-[4%] py-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-base tracking-tight text-paper">
          headfavour
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping-ring rounded-full bg-stamp" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stamp" />
          </span>
        </span>

        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 rounded-full border border-paper/20 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-stamp hover:text-stamp"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Say hi</span>
        </a>
      </div>
    </header>
  );
}
