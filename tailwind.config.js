const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      black:"#1B1D1C",
      white:"#E5E5E5",
      red:"#E54B4B",
      green:"#61BFAD",
      grey:"#E5E5E5",
    },
    fontFamily: {
      playfair: ['PlayfairDisplay', defaultTheme.fontFamily.sans],
      inter: ['Inter', defaultTheme.fontFamily.sans],
      roboto: ['Roboto', defaultTheme.fontFamily.sans]
    },
    extend: {
      
    },
  },
  plugins: [],
}
