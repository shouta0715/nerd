/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        comment: "comment 0.25s ease-out",
        modal: "modal 0.25s ease-out",
        fadeUp: "fadeUp 0.25s ease-out",
        fadeIn: "fadeIn 0.25s ease-out",
        autoComplete: "autoComplete 0.15s ease-out forwards",
      },
      keyframes: {
        comment: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        modal: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeUp: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        autoComplete: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
