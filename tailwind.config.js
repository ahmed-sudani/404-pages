/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Electrolize: ['Electrolize', 'sans-serif'],
      'Jolly-Lodger': ['Jolly Lodger', 'cursive'],
    },
    extend: {
      skew: {
        30: '30deg',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '50%': { width: '10ch' },
        },
        blink: {
          '0%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'gray' },
        },
      },
      animation: {
        typing:
          'typing 3.5s steps(40, end) infinite, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
}
