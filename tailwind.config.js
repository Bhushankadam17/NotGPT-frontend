/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sidebg': '#171717',
        'feedbg': '#212121',
      },
    },
  },
  plugins: [],
}

