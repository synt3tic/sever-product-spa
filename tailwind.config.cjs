/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    colors: {
      orange: '#ff6633',
      green: '#70c05b',
      red: '#d80000',
      gray: '#f3f2f1',
      white: '#f8f8f8',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
