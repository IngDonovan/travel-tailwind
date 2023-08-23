/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'LA': "url('../img/LA.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'miami': "url('../img/miami.jpg')",
        'switzerland': "u../img/img/switzerland.jpg')",
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
  ],
}

