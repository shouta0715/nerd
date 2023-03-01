

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
        "chat-fade-in": "chat-fade-in 0.2s ease-in-out",
      },
      keyframes: {
        "chat-fade-in": {
          "0%": { opacity: 0 },
          "100%": {
            opacity: 1,
          },
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};
