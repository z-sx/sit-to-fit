/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
}
