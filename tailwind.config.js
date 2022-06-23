/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      colors:{
        green:{
          300: '#00B37E',
          500: '#00875F',
          600: "#015F43",
        },
        blue:{
          500: '#81D8F7',
        },
        orange:{
          500: '#FBA94C',
        },
        red: {
          500: '#F75a68',
        },
        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          300: '#8d8d99',
          500: '#323238',
          600: '#29292e',
          700: '#121214',
          900: '#09090a',
        }
      }
    },
  },
  plugins: [],
}
