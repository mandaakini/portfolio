/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EEE4",
        blush: "#F7DFE9",
        lilac: "#F4E5FF"
        sage: "#DCE5DC",
        "sage-deep": "#7C9473",
        charcoal: "#2B2A28",
        ink: "#1F1E1C",
        rose: "#C98A94",
        orchid: "#B06BAD"
        "rose-deep": "#B06B77",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -40px) scale(1.06)" },
        },
        floatSlower: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-35px, 30px) scale(1.08)" },
        },
        floatSlowest: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(20px, 20px) scale(1.04)" },
        },
        eq: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 14s ease-in-out infinite",
        floatSlower: "floatSlower 19s ease-in-out infinite",
        floatSlowest: "floatSlowest 23s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -14px rgba(43,42,40,0.14)",
        softer: "0 4px 24px -8px rgba(43,42,40,0.08)",
        lift: "0 24px 60px -18px rgba(43,42,40,0.24)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};