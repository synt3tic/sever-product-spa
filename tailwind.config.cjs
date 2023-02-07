/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue, css, html}'],
  theme: {
    colors: {
      orange: '#ff6633',
      green: '#70c05b',
      red: '#d80000',
      gray: '#f3f2f1',
      'dark-gray': '#606060',
      white: '#ffffff',
      black: '#000000'
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
