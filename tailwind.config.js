/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Primary surfaces
        cream: "#F7F1E8",
        porcelain: "#FCF8F3",

        // Pink and rose
        blush: "#F3E3E4",
        "rose-mist": "#F3E3E4",
        rose: "#C48791",
        "rose-deep": "#925F68",
        rosewood: "#925F68",

        // Sophisticated neutral
        mushroom: "#D8D0C6",
        "mushroom-deep": "#8F8279",

        // Existing sage names now map to mushroom.
        // This updates older components without breaking them.
        sage: "#D8D0C6",
        "sage-mist": "#D8D0C6",
        "sage-deep": "#8F8279",
        eucalyptus: "#8F8279",

        // Rare creative accent
        lilac: "#D8CDD9",
        "plum-mist": "#D8CDD9",
        plum: "#756474",
        orchid: "#756474",

        // Dark sections and text
        experience: "#4A352C",
        ink: "#24211F",
        espresso: "#24211F",
        "deep-espresso": "#211F1D",
        charcoal: "#6F6762",
        taupe: "#6F6762",
},
  

      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },

      keyframes: {
        floatSlow: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(24px, -30px) scale(1.04)",
          },
        },

        floatSlower: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(-28px, 24px) scale(1.05)",
          },
        },

        floatSlowest: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "50%": {
            transform: "translate(16px, 18px) scale(1.03)",
          },
        },

        eq: {
          "0%, 100%": {
            transform: "scaleY(0.3)",
          },
          "50%": {
            transform: "scaleY(1)",
          },
        },
      },

      animation: {
        floatSlow: "floatSlow 16s ease-in-out infinite",
        floatSlower: "floatSlower 21s ease-in-out infinite",
        floatSlowest: "floatSlowest 26s ease-in-out infinite",
        eq: "eq 1.5s ease-in-out infinite",
      },

      boxShadow: {
        soft: "0 12px 42px -16px rgba(36, 33, 31, 0.16)",
        softer: "0 5px 24px -10px rgba(36, 33, 31, 0.10)",
        lift: "0 25px 65px -20px rgba(36, 33, 31, 0.26)",
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