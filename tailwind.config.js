import { Component } from 'react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
 
    extend: {
      colors: {
        'semiBlack': '#020024',
        'semiBlue': '#1b5865',
        'semiNavyBlue': '#0a0a53',
        'star': "#f59e0b",
        "footer": "#475569"
      },
      backgroundImage: {
        'banner': "linear-gradient(90deg, #4b6cb7 0%, #182848 100%);",
        'btn': "linear-gradient( 135deg, #97ABFF 10%, #123597 100%);;"
       },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      }
    },

  },
  plugins:  [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
  ],
  darkMode: "className"
    
};




