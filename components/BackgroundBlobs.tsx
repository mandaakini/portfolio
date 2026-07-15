export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft pink: top left */}
      <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-blush opacity-70 blur-3xl animate-floatSlow sm:h-96 sm:w-96" />

      {/* Lilac: right */}
      <div className="absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-lilac opacity-60 blur-3xl animate-floatSlower sm:h-80 sm:w-80" />

      {/* Orchid pink: bottom */}
      <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-orchid/30 opacity-60 blur-3xl animate-floatSlowest sm:h-72 sm:w-72" />
    </div>
  );
}