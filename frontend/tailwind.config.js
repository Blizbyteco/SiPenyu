/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero" : "url('src/assets/images/hero-background.svg')",
        "box" : "url('src/assets/images/box-background.svg')"
      }
    },
  },
  plugins: [],
}