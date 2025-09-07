/** @type {import('tailwindcss').Config} */
import colors  from 'tailwindcss/colors';

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // For App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
      },
    },
  },
  plugins: [],
}
