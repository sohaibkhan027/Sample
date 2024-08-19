/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#1a202c',
        'gray-800': '#2d3748',
      },
      backgroundImage: {
        'gray-gradient': 'linear-gradient(to left, #1a202c, #2d3748)',
        'gray-dull-gradient': 'linear-gradient(to right, #1a202c, #2d3748)',
      },
    },
  },
  plugins: [],
}

