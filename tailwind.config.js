/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      project:{
        black: '#342828',
        primary: '#0EAC27',
        gray: '#D9D9D9'
      }
    },
    extend: {
      boxShadow: {
        'project': '0 0 4px 0 rgba(217, 217, 217, 0.6)',
      }
    },
  },
  plugins: [plugin(function ({ addComponents, theme }) {
    addComponents({
      '.defaultTextColor': {
        color: theme('colors.project.black'),
      }
    })
  })],
}
