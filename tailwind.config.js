/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wlnb-cream': '#FDFBF7',
        'wlnb-light': '#F6EFE6',
        'wlnb-beige': '#E8DCCB',
        'wlnb-sand': '#D4BCA3',
        'wlnb-tan': '#7A6352',
        'wlnb-brown': '#3B291A',
        'wlnb-dark': '#2C1E16',
        'wlnb-accent': '#B3541E',
        'wlnb-darker': '#4A3728',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
