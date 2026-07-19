export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Antique rose glow */}
      <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[rgba(185,120,130,0.12)] blur-3xl animate-floatSlow sm:h-96 sm:w-96" />

      {/* Eucalyptus glow */}
      <div className="absolute -right-20 top-[28%] h-64 w-64 rounded-full bg-[rgba(155,165,143,0.10)] blur-3xl animate-floatSlower sm:h-80 sm:w-80" />

      {/* Muted plum glow */}
      <div className="absolute -bottom-24 left-[22%] h-56 w-56 rounded-full bg-[rgba(94,74,92,0.07)] blur-3xl animate-floatSlowest sm:h-72 sm:w-72" />

      {/* Quiet decorative outlines */}
      <div className="absolute left-[4%] top-[30%] h-10 w-10 rounded-full border border-rose/25" />
      <div className="absolute bottom-[17%] right-[12%] h-14 w-14 rounded-full border border-sage-deep/20" />
    </div>
  );
}