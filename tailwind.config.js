import { Component } from 'react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      colors: {
        'semiBlack': '#020024',
        'semiBlue': '#1b5865',
        'semiNavyBlue': '#0a0a53',
        'star': "#f59e0b"
      },
      backgroundImage: {
        'banner': "linear-gradient(90deg, #4b6cb7 0%, #182848 100%);",
       },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      }
    },

  },
  plugins: [require("daisyui")]
};



