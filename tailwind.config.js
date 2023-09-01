/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
        sans: ['Inter var', 'sans-serif'],
        futura: ["Futura", "sans-serif"],
      },
      colors: {
        dimmed: "rgb(134, 142, 150)",
      },
      animation: {
        comment: "comment 0.25s ease-out",
        modal: "modal 0.25s ease-out",
        fadeUp: "fadeUp 0.25s ease-out",
        fadeIn: "fadeIn 0.25s ease-out forwards",
        border: "border 0.25s ease-out forwards",
        like: "like 1s ease-out forwards",
        gradient: "gradient 3s ease infinite",
        bubble: "bubble 1.5s ease forwards",
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
        border: {
          "0%": { width: "0", backgroundColor: "transparent" },
          "100%": { width: "100%", backgroundColor: "rgb(99 102 241)" },
        },
        like: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          }
        },

        // 泡のアニメーション　一回だけ
        bubble: {
          "0%": {
            transform: "translateY(0px)",
            bottom: "-30px",
            opacity: "0",
          }, 
          "25%": {
            transform: "translateX(var(--random-translate-x-25))",
            opacity: "1",
          },
          "50%": {
            transform: "translateX(var(--random-translate-x-50))",
          },
          "75%": {
            transform: "translateX(var(--random-translate-x-75))",
          },        
          "100%": {
            bottom: "200px",
            opacity: "0",
          },
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
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require('@tailwindcss/forms'),
],
  
};
