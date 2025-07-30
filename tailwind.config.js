/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileM: '375px',
        mobileL: '425px',
      },
      fontFamily: { 
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

