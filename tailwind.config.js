/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'Arial', 'sans-serif'],
        Pacifico: ['Pacifico', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}

