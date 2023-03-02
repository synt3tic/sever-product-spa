/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#ff6633',
        'light-orange': '#fcd5ba',
        green: '#70c05b',
        'dark-green': '#66b053',
        red: '#d80000',
        gray: '#f3f2f1',
        'dark-gray': '#8f8f8f',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
