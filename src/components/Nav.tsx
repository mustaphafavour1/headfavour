import { Mail } from "lucide-react";
import { EMAIL } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-[4%] py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg tracking-tight text-paper"
        >
          headfavour
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping-ring rounded-full bg-stamp" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stamp" />
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-paper/70 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-stamp"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 rounded-full border border-paper/20 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-stamp hover:text-stamp sm:px-4"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Say hi</span>
        </a>
      </div>
    </header>
  );
}
