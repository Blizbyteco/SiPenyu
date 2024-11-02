/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary" : "#4B44AE",
        "secondary" : "#40A69F"
      },
      colors: {
        "primary" : "#4B44AE",
        "secondary" : "#40A69F"
      }
    },
  },
  plugins: [],
}