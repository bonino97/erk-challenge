/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      avenirBlack: ["Avenir Black", "sans-serif"],
      avenirBook: ["Avenir Book", "sans-serif"],
      avenirHeavy: ["Avenir Heavy", "sans-serif"],
    },
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

