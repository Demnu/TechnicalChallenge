/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      colors:{
      'darkblue':'#0f2b60',
      'darkerblue': "#04193e",
      }
    },
  },
  plugins: [],
}