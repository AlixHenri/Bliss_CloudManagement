/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [],
}
