/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#C70039",
      secondary: "#FF6969",
      white: "#FFFFFF",
      black: "#0F0F0F",
      sky: "#0487E2",
      silver: "#C0C0C0",
      red: "#FF0000",
      darkred: "#990f02",
      lightgray: "#ebebeb",
    },
  },
  plugins: [],
  darkMode: "class",
};
