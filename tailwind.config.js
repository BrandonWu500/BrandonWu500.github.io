/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
