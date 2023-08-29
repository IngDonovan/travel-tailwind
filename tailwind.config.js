/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',//or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    fontFamily: { 
      Montserrat: ["Monserrat", "sans-serif"],
    },
    extend: {
      boxShadow: {
        'custom': '0 2px 7px 0px rgba(0, 0, 0, 0.25)',

      },
      backgroundImage: {
        'sanFrancisco': "url('/assets/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/assets/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/assets/img/yosemite.jpg')",
        'LA': "url('/assets/img/LA.jpg')",
        'seattle': "url('/assets/img/seattle.jpg')",
        'newYork': "url('/assets/img/new_york.jpg')",
        'norway': "url('/assets/img/norway.jpg')",
        'sydney': "url('/assets/img/sydney.jpg')",
        'miami': "url('/assets/img/miami.jpg')",
        'switzerland': "url('/assets/img/switzerland.jpg')",
        'bali': "url('/assets/img/bali.jpg')",
        'chicago': "url('/assets/img/chicago.jpg')",
        'europe': "url('/assets/img/europe.jpg')",
        'iceland': "url('/assets/img/iceland.jpg')",
      },
    },
  },
  plugins: [],
}

