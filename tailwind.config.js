/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '700px',
      'lg': '1000px'
    },
    extend: {
      fontFamily: {
        'manrope': ['"Manrope"', 'ExtraBold'],
      },
    }
  },
  plugins: [],
}

