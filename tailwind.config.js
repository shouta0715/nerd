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
        chat: "chat 0.25s ease-out",
      },
      keyframes: {
        chat: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
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
  },
};
