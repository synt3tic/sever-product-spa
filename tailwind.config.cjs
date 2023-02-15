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
        green: '#70c05b',
        'dark-green': '#66b053',
        red: '#d80000',
        gray: '#f3f2f1',
        'light-gray': '#f8f8f8',
        'semi-gray': '#e0e0e0',
        'dark-gray': '#8f8f8f',
        white: '#ffffff',
        black: '#000000',
      },
      boxShadow: {
        'toggle': '0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
