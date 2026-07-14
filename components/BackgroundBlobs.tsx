export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-24 -left-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blush blur-3xl opacity-70 animate-floatSlow" />
      <div className="absolute top-1/3 -right-16 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-sage blur-3xl opacity-60 animate-floatSlower" />
      <div className="absolute bottom-0 left-1/4 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-rose/20 blur-3xl opacity-50 animate-floatSlowest" />
    </div>
  );
} 