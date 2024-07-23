/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: '#27ae60',
      gray:'#808080',
      gray100:'#f7f9fc',
      gray200:'#73809d',
      gray300:'#2d3954',
      white:'#FFFFFF',
    }
  },
  plugins: [],
}

