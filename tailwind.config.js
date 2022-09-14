/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '840px',
      lg: '1240px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
