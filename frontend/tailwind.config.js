/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero" : "url('src/assets/img/bg/background_hero_section.webp')",
        "data-graphic" : "url('src/assets/img/bg/background_data_grafik.webp')",
        "grid-mobile" : "url('src/assets/img/bg/background_statistic_section_1_mobile.webp')",
        "window" : "url('src/assets/img/bg/background_window.svg')"
      },

      backgroundColor: {
        'primary' : '#4E46B4',
        'secondary' : '#40A69F',
        'gray' : '#F5F5F5'
      },

      textColor: {
        'gray' : '#1F1F1F'
      }
    },
  },
  plugins: [],
}