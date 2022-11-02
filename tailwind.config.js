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
        spaceMove: {
          '0%': { 'background-position': 'top , center' },
          '100%': { 'background-position': '250% 250% , center' },
        },
        textViewNormal: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        typing:
          'typing 3.5s steps(40, end) infinite, blink 0.75s step-end infinite',
        spaceMove: 'spaceMove 4s infinite',
        textViewNormal: 'textViewNormal 4s infinite',
      },
      backgroundPosition: {
        space: '192% 192%, center',
      },
      backgroundImage: {
        space: 'url("../public/Space1.png"), url(../public/Space2.png)',
      },
    },
  },
  plugins: [],
}
