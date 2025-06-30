/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "spin-slow": "spin 2s linear",
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
