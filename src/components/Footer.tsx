export function Footer() {
  return (
    <footer className="shrink-0 border-t border-paper/10 px-[4%] py-2.5">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-paper/35">
        <span>Built fast. Shipped anyway.</span>
        <span>© {new Date().getFullYear()} Favour Mustapha</span>
      </div>
    </footer>
  );
}
