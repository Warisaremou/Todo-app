/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-body': '#FAFAFA',
        'dark-bg': '#161722',
        'input-dark': '#25273C',
        'text-light': '#FAFAFA',
        'text-dark': '#484B6A',
        'light-shadow': '#E4E5F1',
        'dark-shadow': '#181818',
        'light-gray': '#777A92',
        'dark-gray': '#4D5066',
        'active-option': '#3A7BFD',
      },
      inset: {
        '85px': '85px',
      }
    },
    fontFamily: {
      josefin: ['Josefin Sans, sans-serif'],
      poppins: ['Poppins, sans-serif'],
    },
  },
  plugins: [],
}
