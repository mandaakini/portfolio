export default function Footer() {
  return (
    <footer className="py-10 border-t border-charcoal/10">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-display italic text-charcoal/60 text-sm">
          Designed with curiosity, creativity, and coffee.
        </p>
        <p className="font-mono text-[11px] tracking-wide text-charcoal/40">
          © {new Date().getFullYear()} Mandaakini Raghuraman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}