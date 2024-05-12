/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#151515",
        primary: "#E9424F",
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
        spartan: '"League Spartan", sans-serif',
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
};
