/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        enter: {
          "0%": {
            opacity: "1",
            backgroundColor: "#8282EB",
          },
          "100%": { opacity: "0.1", backgroundColor: "#8282EB" },
        },
      },
      animation: {
        enter: "enter 3s",
      },
    },
  },
  plugins: [],
};
