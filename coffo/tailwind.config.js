import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      yellow: '#f39f5a',
      white: '#fff',
      vanilla: '#b99470',
      black: '#000',
      gray: '#5a5a5a',
      blue: '#0d6efd',
      color1:'#fff1e2',
      brown:'#754B48',
      color2:'#F9EBC7',
    },
    extend: {},
  },
  plugins: [],
}

