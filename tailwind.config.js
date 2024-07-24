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
      green100:'#e9f7f1',
      orange:"#ff9800",
      orange100:'#fff4e5',
      gray:'#808080',
      gray100:'#f7f9fc',
      gray200:'#73809d',
      gray300:'#2d3954',
      gray400:'#122947',
      white:'#FFFFFF',
    }
  },
  plugins: [],
}

