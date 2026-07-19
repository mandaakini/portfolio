export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-deep-espresso py-10 text-cream">
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-plum/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-rosewood/15 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-rose"
          />

          <p className="font-display text-sm italic text-cream/70">
            Designed with curiosity, creativity, and coffee.
          </p>
        </div>

        <p className="font-mono text-[11px] tracking-wide text-cream/40">
          © {new Date().getFullYear()} Mandaakini Raghuraman. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}