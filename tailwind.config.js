/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        load8: "load8 1.2s infinite linear",
      },
      keyframes: {
        load8: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        mainBack: "#141414",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "*:focus-visible": {
          outline: "none",
          boxShadow: "none",
        },
      });
    },
  ],
};
