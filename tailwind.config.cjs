/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: '.vuefinder',
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: '16px',
      colors: {
        'base': '#212B36',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
